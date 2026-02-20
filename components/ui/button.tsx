import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest',
          {
            'bg-veda-gold text-white hover:bg-veda-gold-dark': variant === 'primary',
            'bg-veda-charcoal text-white hover:bg-veda-charcoal-light': variant === 'secondary',
            'border border-veda-charcoal bg-transparent hover:bg-veda-charcoal hover:text-white': variant === 'outline',
            'hover:bg-gray-100 hover:text-gray-900': variant === 'ghost',
            'h-10 px-8 py-2': size === 'default',
            'h-9 px-3': size === 'sm',
            'h-12 px-10 text-base': size === 'lg',
            'h-10 w-10': size === 'icon',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
