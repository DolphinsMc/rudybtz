import React from 'react';

interface BackgroundProps {
  imageUrl: string;
}

export default function Background({ imageUrl }: BackgroundProps) {
  return (
    <div 
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url("${imageUrl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}