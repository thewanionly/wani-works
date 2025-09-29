import { ReactNode, forwardRef } from 'react';

import { cn } from '../../utils/styling';

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      role="navigation"
      className={cn('flex items-center justify-between', className)}
      {...props}
    >
      {children}
    </div>
  )
);

Navbar.displayName = 'Navbar';

export { Navbar };
