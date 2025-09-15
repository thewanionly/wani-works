import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextArea, type TextAreaProps } from '@wani-works/ui/textarea';

const meta = {
  title: 'Design System/Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    controls: { exclude: ['className'] },
  },
} satisfies Meta<TextAreaProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    id: 'description',
    label: 'Description',
    placeholder: 'Write your message...',
    maxLength: 500,
  },
};

export const Filled: Story = {
  args: {
    id: 'description',
    label: 'Description',
    placeholder: 'Write your message...',
    defaultValue: 'Embedding iFrame using html',
    maxLength: 500,
  },
};

export const Disabled: Story = {
  args: {
    id: 'description',
    label: 'Description',
    placeholder: 'Write your message...',
    maxLength: 500,
    disabled: true,
  },
};

export const DisabledFilled: Story = {
  args: {
    id: 'description',
    label: 'Description',
    placeholder: 'Write your message...',
    defaultValue: 'Embedding iFrame using html',
    maxLength: 500,
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    id: 'description',
    label: 'Description',
    placeholder: 'Write your message...',
    maxLength: 500,
    errorMessage: 'This field is required',
  },
};

export const ErrorFilled: Story = {
  args: {
    id: 'description',
    label: 'Description',
    placeholder: 'Write your message...',
    defaultValue: 'Embedding iFrame using html',
    maxLength: 500,
    errorMessage: 'This is an error message',
  },
};

export const CharLimitExceed: Story = {
  args: {
    id: 'description',
    label: 'Description',
    placeholder: 'Write your message...',
    defaultValue: 'Char limit has exceeded. I am so sorry.',
    maxLength: 10,
  },
};
