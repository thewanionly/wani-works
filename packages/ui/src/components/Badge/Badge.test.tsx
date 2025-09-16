import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './Badge.stories.tsx';

const { Neutral } = composeStories(stories);

describe('Badge', () => {
  it('displays Badge component', async () => {
    // ARRANGE
    render(<Neutral />);

    // ACT
    // ASSERT
    expect(
      screen.getByText(Neutral.args.children as string)
    ).toBeInTheDocument();
  });
});
