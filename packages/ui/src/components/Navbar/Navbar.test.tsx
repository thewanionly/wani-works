import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './Navbar.stories.tsx';

const { Default } = composeStories(stories);

describe('Navbar', () => {
  it('displays Navbar component', async () => {
    // ARRANGE
    render(<Default />);

    // ACT
    // ASSERT
    const navEl = screen.getByRole('navigation');
    expect(navEl).toBeInTheDocument();
  });
});
