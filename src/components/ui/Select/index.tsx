import React from 'react';
import { cn } from '../../../utils/cn';
import { SelectSize, getSelectStyles } from './styles';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'size'> {
  options: SelectOption[];
  onChange: (value: string) => void;
  size?: SelectSize;
  fullWidth?: boolean;
}

export default function Select({
  options,
  onChange,
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: SelectProps) {
  const styles = getSelectStyles({ size, fullWidth });

  return (
    <select 
      className={cn(styles, className)}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}