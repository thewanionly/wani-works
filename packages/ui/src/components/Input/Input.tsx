import { ReactNode, forwardRef } from 'react';

import { CircleHelp } from 'lucide-react';

import { cn } from '../../utils/styling.ts';

export interface InputProps extends React.ComponentProps<'input'> {
  label?: string;
  hint?: string;
  errorMessage?: string;
  leadingIcon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      id,
      label,
      hint,
      disabled,
      errorMessage,
      leadingIcon,
      ...props
    },
    ref
  ) => {
    const bottomText = errorMessage || hint;

    return (
      <div
        className={cn(
          'flex flex-col items-start gap-1.5 text-sm font-normal text-neutral-500',
          className
        )}
      >
        {label && (
          <label className="text-neutral-700" htmlFor={id}>
            {label}
          </label>
        )}
        <div
          className={cn(
            'flex w-full items-center justify-between gap-2 rounded-sm border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 motion-safe:transition-colors',
            'focus-within:border-indigo-700 focus-within:shadow-button-focus-ring',
            disabled && 'border-neutral-100',
            errorMessage &&
              'focus-within:border-red-600 focus-within:shadow-destructive-btn-focus-ring'
          )}
        >
          {leadingIcon}
          <input
            ref={ref}
            id={id}
            className={cn(
              'flex-1 bg-neutral-50 text-neutral-900 placeholder:text-neutral-500 focus:outline-hidden',
              'disabled:text-neutral-500 disabled:placeholder:text-neutral-400'
            )}
            disabled={disabled}
            aria-describedby="bottom-text"
            {...props}
          />
          <CircleHelp
            className={cn(
              'size-4',
              errorMessage ? 'text-red-600' : 'text-neutral-400'
            )}
          />
        </div>
        {bottomText && (
          <p
            id="bottom-text"
            className={cn(errorMessage ? 'text-red-600' : 'text-neutral-500')}
          >
            {bottomText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
