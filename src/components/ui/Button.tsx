import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center transition-colors rounded-full font-medium';
  
  const variantStyles = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700',
    secondary: 'border-2 border-purple-500 text-white hover:bg-purple-500/20',
    ghost: 'text-gray-400 hover:text-white'
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button {...props} className={styles}>
      {Icon && iconPosition === 'left' && <Icon className="mr-2" size={size === 'sm' ? 16 : 20} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="ml-2" size={size === 'sm' ? 16 : 20} />}
    </button>
  );
}