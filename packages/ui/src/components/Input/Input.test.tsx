import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './Input.stories.tsx';

const { Default, DefaultDisabled, DefaultError, IconLeading } =
  composeStories(stories);

describe('Input', () => {
  it(`displays input's label`, async () => {
    render(<Default />);

    const label = screen.getByText(Default.args.label as string);
    expect(label).toBeInTheDocument();
  });

  it('displays input element associated with the label', async () => {
    render(<Default />);

    // input
    const inputEl = screen.getByRole('textbox');
    expect(inputEl).toBeInTheDocument();

    // input by label
    const inputElByLabel = screen.getByLabelText(Default.args.label as string);
    expect(inputElByLabel).toBeInTheDocument();
  });

  it('displays input element associated with the placeholder', async () => {
    render(<Default />);

    // input
    const inputEl = screen.getByRole('textbox');
    expect(inputEl).toBeInTheDocument();

    // input by placeholder
    const inputElPlaceholder = screen.getByPlaceholderText(
      Default.args.placeholder as string
    );
    expect(inputElPlaceholder).toBeInTheDocument();
  });

  it('displays hint text', async () => {
    render(<Default />);

    const hint = screen.getByText(Default.args.hint as string);
    expect(hint).toBeInTheDocument();
  });

  it('displays help icon', async () => {
    render(<Default />);

    const icon = screen.getByTestId('help-icon');
    expect(icon).toBeInTheDocument();
  });

  it('displays a disabled input element', async () => {
    render(<DefaultDisabled />);

    const inputEl = screen.getByRole('textbox');
    expect(inputEl).toBeDisabled();
  });

  it('displays error message', async () => {
    render(<DefaultError />);

    const errorMessage = screen.getByText(
      DefaultError.args.errorMessage as string
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it('displays leading icon', async () => {
    render(<IconLeading />);

    const icon = screen.getByTestId('email-icon');
    expect(icon).toBeInTheDocument();
  });
});
