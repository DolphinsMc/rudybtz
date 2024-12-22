import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../../utils/cn';
import { ButtonVariant, ButtonSize, getButtonStyles } from './styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const styles = getButtonStyles({ variant, size, fullWidth });

  return (
    <button {...props} className={cn(styles, className)}>
      {Icon && iconPosition === 'left' && (
        <Icon className="mr-2" size={size === 'sm' ? 16 : 20} />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className="ml-2" size={size === 'sm' ? 16 : 20} />
      )}
    </button>
  );
}