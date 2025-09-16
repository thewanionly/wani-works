import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import * as stories from './Button.stories.tsx';

const { Primary, PrimaryDisabled, IconButton } = composeStories(stories);

describe('Button', () => {
  it('displays Button component', async () => {
    // ARRANGE
    render(<Primary />);

    // ACT
    // ASSERT
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toBeInTheDocument();
  });

  it(`displays Button's label`, async () => {
    // ARRANGE
    render(<Primary />);

    // ACT
    // ASSERT
    expect(
      screen.getByText(Primary.args.children as string)
    ).toBeInTheDocument();
  });

  it(`displays a disabled button`, async () => {
    // ARRANGE
    render(<PrimaryDisabled />);

    // ACT
    // ASSERT
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toBeDisabled();
  });

  it(`displays an Icon Button`, async () => {
    render(<IconButton />);

    // Find the button
    const buttonEl = screen.getByRole('button', {
      name: IconButton.args['aria-label'],
    });
    expect(buttonEl).toBeInTheDocument();

    // Find the icon
    const icon = screen.getByTestId('star-icon');
    expect(icon).toBeInTheDocument();

    // Check that the icon is inside the button
    expect(buttonEl).toContainElement(icon);
  });

  it('executes the function passed in the `onClick` prop when button is clicked', async () => {
    // ARRANGE
    const onClickHandler = jest.fn();
    render(<Primary onClick={onClickHandler} />);

    // ACT
    const btnElement = screen.getByRole('button');
    await userEvent.click(btnElement);

    // ASSERT
    expect(onClickHandler).toHaveBeenCalled();
  });
});
