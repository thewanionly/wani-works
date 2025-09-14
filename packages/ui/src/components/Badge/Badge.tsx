import { ReactNode } from 'react';

import { cn } from '../../utils/styling.ts';

export enum BadgeSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum BadgeVariant {
  Neutral = 'neutral',
  Error = 'error',
  Warning = 'warning',
  Success = 'success',
  Brand = 'brand',
}

const BADGE_SIZE_MAP = {
  [BadgeSize.Small]: 'h-5 text-xs leading-4 py-px px-[0.3125rem]',
  [BadgeSize.Medium]: 'h-6 text-sm leading-5 py-px px-[0.4375rem]',
  [BadgeSize.Large]: 'h-7 text-sm leading-5 py-[0.1875rem] px-[0.5625rem]',
};

const BADGE_VARIANT_MAP = {
  [BadgeVariant.Neutral]: 'text-neutral-600 bg-gray-50 border-neutral-200',
  [BadgeVariant.Error]: 'text-red-600 bg-red-50 border-red-200',
  [BadgeVariant.Warning]: 'text-amber-700 bg-amber-50 border-amber-200',
  [BadgeVariant.Success]: 'text-green-700 bg-green-50 border-green-200',
  [BadgeVariant.Brand]: 'text-indigo-700 bg-indigo-50 border-indigo-200',
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: BadgeSize;
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

export const Badge = ({
  size = BadgeSize.Medium,
  variant = BadgeVariant.Neutral,
  children,
  className,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border',
        BADGE_SIZE_MAP[size],
        BADGE_VARIANT_MAP[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
