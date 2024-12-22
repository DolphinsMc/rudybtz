export type SelectSize = 'sm' | 'md' | 'lg';

interface SelectStylesProps {
  size: SelectSize;
  fullWidth: boolean;
}

const baseStyles = 'bg-gray-800 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500';

const sizeStyles: Record<SelectSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg'
};

export function getSelectStyles({ size, fullWidth }: SelectStylesProps): string {
  return [
    baseStyles,
    sizeStyles[size],
    fullWidth ? 'w-full' : ''
  ].join(' ').trim();
}