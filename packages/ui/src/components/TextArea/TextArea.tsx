import {
  ChangeEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { cn } from '../../utils/styling.ts';

export interface TextAreaProps extends React.ComponentProps<'textarea'> {
  label?: string;
  errorMessage?: string;
}

export const CHAR_LIMIT_EXCEEDED_MESSAGE = 'Character limit exceeded!';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      id,
      disabled,
      errorMessage,
      maxLength,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const innerRef = useRef<HTMLTextAreaElement>(null);
    const [charCount, setCharCount] = useState(() => {
      // handles both controlled (`value`) and uncontrolled (`defaultValue`) inputs
      if (typeof value === 'string' && value) return value.length;

      if (typeof defaultValue === 'string' && defaultValue)
        return defaultValue.length;

      return 0;
    });

    const charLimitExceeded = maxLength && charCount > maxLength;
    const errorText = charLimitExceeded
      ? CHAR_LIMIT_EXCEEDED_MESSAGE
      : errorMessage;

    // The exposed `ref` will now contain the `innerRef.current` we declared inside this component
    useImperativeHandle(ref, () => innerRef.current!);

    const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      // update charCount state on every change
      setCharCount(event.target.value.length);

      // call onChange prop with the same event
      onChange?.(event);
    };

    // update charCount state on first load
    useEffect(() => {
      if (!innerRef.current) return;

      setCharCount(innerRef.current.value.length);
    }, []);

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            className="self-start text-sm font-medium text-neutral-700"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <textarea
          className={cn(
            'h-[108px] resize-none rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-3 motion-safe:transition-colors',
            'text-sm font-normal text-neutral-900',
            'placeholder:text-neutral-500',
            'focus:border-indigo-700 focus:shadow-button-focus-ring focus:outline-hidden',
            'disabled:border-neutral-100 disabled:text-neutral-500 disabled:placeholder:text-neutral-400',
            errorText &&
              'border-red-300 focus:border-red-600 focus:shadow-destructive-btn-focus-ring'
          )}
          id={id}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          onChange={handleOnChange}
          {...props}
          ref={innerRef}
          aria-describedby="error-message"
        />
        <div className="flex justify-between">
          <p id="error-message" className="text-sm font-normal text-red-600">
            {errorText}
          </p>
          <p
            className={cn(
              'text-right text-sm font-normal text-neutral-500',
              charLimitExceeded && 'text-red-600'
            )}
          >
            <span data-testid="char-count">{charCount}</span>/
            <span data-testid="char-limit">{maxLength}</span>
          </p>
        </div>
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export { TextArea };
