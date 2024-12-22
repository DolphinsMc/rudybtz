import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: Option[];
  onChange: (value: string) => void;
}

export default function Select({ options, onChange, className = '', ...props }: SelectProps) {
  return (
    <select 
      className={`bg-gray-800 text-white px-4 py-2 rounded-lg ${className}`}
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