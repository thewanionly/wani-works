import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import * as stories from './TextArea.stories.tsx';
import { CHAR_LIMIT_EXCEEDED_MESSAGE } from './TextArea.tsx';

const { Normal, Filled, Disabled, Error, CharLimitExceed } =
  composeStories(stories);

describe('TextArea', () => {
  it(`displays textarea's label`, async () => {
    render(<Normal />);

    const label = screen.getByText(Normal.args.label as string);
    expect(label).toBeInTheDocument();
  });

  it(`displays textarea associated with the label`, async () => {
    render(<Normal />);

    // textArea
    const textArea = screen.getByRole('textbox');
    expect(textArea).toBeInTheDocument();

    // textArea by label
    const textAreaByLabel = screen.getByLabelText(Normal.args.label as string);
    expect(textAreaByLabel).toBeInTheDocument();
  });

  it('displays textarea element associated with the placeholder', async () => {
    render(<Normal />);

    // input
    const textArea = screen.getByRole('textbox');
    expect(textArea).toBeInTheDocument();

    // input by placeholder
    const textAreaByPlaceholder = screen.getByPlaceholderText(
      Normal.args.placeholder as string
    );
    expect(textAreaByPlaceholder).toBeInTheDocument();
  });

  it('displays a disabled textarea element', async () => {
    render(<Disabled />);

    const textArea = screen.getByRole('textbox');
    expect(textArea).toBeDisabled();
  });

  it('displays error message', async () => {
    render(<Error />);

    const errorMessage = screen.getByText(Error.args.errorMessage as string);
    expect(errorMessage).toBeInTheDocument();
  });

  it(`displays char limit`, async () => {
    render(<Normal />);

    const charLimit = screen.getByTestId('char-limit');
    expect(charLimit.textContent).toBe(`${Normal.args.maxLength}`);
  });

  it(`displays zero char count when there's no inputted text`, async () => {
    render(<Normal />);

    const charCount = screen.getByTestId('char-count');
    expect(charCount.textContent).toBe('0');
  });

  it(`displays char count of the inputted text`, async () => {
    render(<Filled />);

    const charCount = screen.getByTestId('char-count');
    expect(charCount.textContent).toBe(
      `${(Filled.args.defaultValue as string)?.length ?? ''}`
    );
  });

  it(`updates the char count when user updates the text input`, async () => {
    render(<Normal />);

    // initial
    const charCountInitial = screen.getByTestId('char-count');
    expect(charCountInitial.textContent).toBe('0');

    // input to the text area
    const inputValue = 'Hello world';
    const textArea = screen.getByRole('textbox');
    await userEvent.type(textArea, inputValue);

    // assert char count has changed to the length of the inputted text
    const charCountFinal = screen.getByTestId('char-count');
    expect(charCountFinal.textContent).toBe(`${inputValue.length}`);
  });

  it(`displays error message when current char count exceeds char limit`, async () => {
    render(<CharLimitExceed />);

    const errorMessage = screen.getByText(CHAR_LIMIT_EXCEEDED_MESSAGE);
    expect(errorMessage).toBeInTheDocument();
  });

  it(`displays error message when user inputs a text that exceeds char limit`, async () => {
    render(<CharLimitExceed />);

    // clear input
    const textArea = screen.getByRole('textbox');
    await userEvent.clear(textArea);

    // initial
    expect(
      screen.queryByText(CHAR_LIMIT_EXCEEDED_MESSAGE)
    ).not.toBeInTheDocument();

    // input to the text area
    const inputValue = 'Hello world';
    await userEvent.type(textArea, inputValue);

    // assert error mesage is shown
    expect(screen.getByText(CHAR_LIMIT_EXCEEDED_MESSAGE)).toBeInTheDocument();
  });

  it(`hides the error message when updates the input within char limit`, async () => {
    render(<CharLimitExceed />);

    // initial
    expect(screen.getByText(CHAR_LIMIT_EXCEEDED_MESSAGE)).toBeInTheDocument();

    // input to the text area
    const textArea = screen.getByRole('textbox');
    await userEvent.clear(textArea);
    const inputValue = 'Hello';
    await userEvent.type(textArea, inputValue);

    // assert error mesage is not shown
    expect(
      screen.queryByText(CHAR_LIMIT_EXCEEDED_MESSAGE)
    ).not.toBeInTheDocument();
  });
});
