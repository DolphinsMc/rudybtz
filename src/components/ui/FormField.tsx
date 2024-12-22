import React from 'react';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  name: string;
  type?: string;
}

export function FormField({ label, name, type = 'text', ...props }: FormFieldProps) {
  const inputClasses = "mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500";
  
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          className={inputClasses}
          rows={3}
          {...props}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          className={inputClasses}
          {...props}
        />
      )}
    </div>
  );
}