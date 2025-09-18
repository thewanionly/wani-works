import { ReactNode, forwardRef } from 'react';

import { cn } from '../../utils/styling.ts';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  LinkColor = 'linkColor',
  LinkGray = 'linkGray',
  Destructive = 'destructive',
}

export enum ButtonSize {
  Medium = 'medium',
  Large = 'large',
  ExtraLarge = 'extra_large',
  ExtraLarge2 = 'extra_large_2',
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconOnly?: boolean;
}

const BUTTON_VARIANT_MAP = {
  [ButtonVariant.Primary]: `
    bg-indigo-700 text-white shadow
    hover:bg-indigo-800
    focus:bg-indigo-800 focus:shadow-button-focus-ring focus-visible:outline-hidden
    disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none
  `,
  [ButtonVariant.Secondary]: `
    bg-white outline outline-[0.5px] outline-neutral-200 text-neutral-900 shadow
    hover:bg-neutral-50 hover:text-neutral-950 hover:outline-1
    focus:bg-neutral-50 focus:text-neutral-950 focus:outline-1 focus:shadow-button-focus-ring
    disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none disabled:outline-hidden
  `,
  [ButtonVariant.Tertiary]: `
    bg-transparent text-indigo-700
    hover:bg-neutral-50
    focus:bg-neutral-50 focus:shadow-button-focus-ring focus-visible:outline-hidden
    disabled:bg-transparent disabled:text-neutral-400 disabled:shadow-none
  `,
  [ButtonVariant.LinkColor]: `
    rounded-none bg-transparent p-0 text-indigo-700
    hover:text-indigo-800
    focus:text-indigo-800 focus:rounded-xs focus:outline-hidden focus:shadow-button-focus-ring
    disabled:bg-transparent disabled:text-neutral-400 disabled:shadow-none
  `,
  [ButtonVariant.LinkGray]: `
    rounded-none bg-transparent p-0 text-neutral-600
    hover:text-neutral-900
    focus:text-neutral-900 focus:rounded-xs focus:outline-hidden focus:shadow-button-focus-ring
    disabled:bg-transparent disabled:text-neutral-400 disabled:shadow-none
  `,
  [ButtonVariant.Destructive]: `
    bg-red-600 text-white shadow
    hover:bg-red-700
    focus:bg-red-700 focus:shadow-destructive-btn-focus-ring focus-visible:outline-hidden
    disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none
  `,
};

const BUTTON_SIZE_MAP = {
  [ButtonSize.Medium]: 'text-sm px-3.5 py-2.5',
  [ButtonSize.Large]: 'text-base px-4 py-2.5',
  [ButtonSize.ExtraLarge]: 'text-base px-5 py-3',
  [ButtonSize.ExtraLarge2]: 'text-lg px-6 py-4',
};

const ICON_BUTTON_SIZE_MAP = {
  [ButtonSize.Medium]: 'p-2.5',
  [ButtonSize.Large]: 'p-3',
  [ButtonSize.ExtraLarge]: 'p-3.5',
  [ButtonSize.ExtraLarge2]: 'p-4',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = ButtonVariant.Primary,
      size = ButtonSize.Medium,
      iconOnly = false,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        'flex items-center gap-1 rounded-xs font-medium motion-safe:transition-colors',
        iconOnly ? ICON_BUTTON_SIZE_MAP[size] : BUTTON_SIZE_MAP[size],
        BUTTON_VARIANT_MAP[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';

export { Button };
