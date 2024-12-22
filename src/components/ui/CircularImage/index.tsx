import React from 'react';
import { cn } from '../../../utils/cn';

interface CircularImageProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  borderColor?: string;
}

export default function CircularImage({
  src,
  alt,
  size = 'md',
  className = '',
  borderColor = 'border-purple-500'
}: CircularImageProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-64 h-64'
  };

  return (
    <div 
      className={cn(
        'rounded-full overflow-hidden border-4',
        sizeClasses[size],
        borderColor,
        className
      )}
    >
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}