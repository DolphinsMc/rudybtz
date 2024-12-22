export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonStylesProps {
  variant: ButtonVariant;
  size: ButtonSize;
  fullWidth: boolean;
}

const baseStyles = 'inline-flex items-center justify-center transition-colors rounded-full font-medium';

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-purple-600 text-white hover:bg-purple-700',
  secondary: 'border-2 border-purple-500 text-white hover:bg-purple-500/20',
  ghost: 'text-gray-400 hover:text-white'
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg'
};

export function getButtonStyles({ variant, size, fullWidth }: ButtonStylesProps): string {
  return [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? 'w-full' : ''
  ].join(' ').trim();
}