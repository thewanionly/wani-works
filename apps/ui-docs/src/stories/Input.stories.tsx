import { Mail } from 'lucide-react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input, type InputProps } from '@wani-works/ui/input';

const meta = {
  title: 'Design System/Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    controls: { exclude: ['className', 'leadingIcon'] },
  },
} satisfies Meta<InputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'name@email.com',
    type: 'email',
    id: 'email',
    label: 'Email',
    hint: 'This is a hint text',
  },
};

export const DefaultDisabled: Story = {
  args: {
    placeholder: 'name@email.com',
    type: 'email',
    id: 'email',
    label: 'Email',
    hint: 'This is a hint text',
    disabled: true,
  },
};

export const DefaultFilled: Story = {
  args: {
    placeholder: 'name@email.com',
    type: 'email',
    id: 'email',
    label: 'Email',
    hint: 'This is a hint text',
    defaultValue: 'myemail@email.com',
  },
};

export const DefaultFilledDisabled: Story = {
  args: {
    placeholder: 'name@email.com',
    type: 'email',
    id: 'email',
    label: 'Email',
    hint: 'This is a hint text',
    defaultValue: 'myemail@email.com',
    disabled: true,
  },
};

export const DefaultError: Story = {
  args: {
    placeholder: 'name@email.com',
    type: 'email',
    id: 'email',
    label: 'Email',
    hint: 'This is a hint text',
    errorMessage: 'This is an error message',
  },
};

export const IconLeading: Story = {
  args: {
    placeholder: 'name@email.com',
    type: 'email',
    id: 'email',
    label: 'Email',
    hint: 'This is a hint text',
    leadingIcon: <Mail className="size-5 text-neutral-400" />,
  },
};

export const IconLeadingError: Story = {
  args: {
    placeholder: 'name@email.com',
    type: 'email',
    id: 'email',
    label: 'Email',
    hint: 'This is a hint text',
    errorMessage: 'This is an error message',
    leadingIcon: <Mail className="size-5 text-neutral-400" />,
  },
};
