import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Badge,
  type BadgeProps,
  BadgeSize,
  BadgeVariant,
} from '@wani-works/ui/badge';

const meta = {
  title: 'Design System/Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: Object.values(BadgeSize),
      control: { type: 'select' },
      defaultValue: BadgeSize.Medium,
    },
    variant: {
      options: Object.values(BadgeVariant),
      control: { type: 'select' },
      defaultValue: BadgeVariant.Neutral,
    },
  },
  parameters: {
    controls: { exclude: ['className'] },
  },
} satisfies Meta<BadgeProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: {
    children: 'Neutral',
    variant: BadgeVariant.Neutral,
  },
};

export const Error: Story = {
  args: {
    children: 'Error',
    variant: BadgeVariant.Error,
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: BadgeVariant.Warning,
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    variant: BadgeVariant.Success,
  },
};

export const Brand: Story = {
  args: {
    children: 'Brand',
    variant: BadgeVariant.Brand,
  },
};

export const Small: Story = {
  args: {
    children: 'Small',
    size: BadgeSize.Small,
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium',
    size: BadgeSize.Medium,
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: BadgeSize.Large,
  },
};
