import type { Meta, StoryObj } from '@storybook/react';
import { Star } from 'lucide-react';

import { Navbar, NavbarProps } from './Navbar.tsx';

const meta = {
  title: 'Design System/Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    controls: { exclude: ['className'] },
  },
} satisfies Meta<NavbarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
