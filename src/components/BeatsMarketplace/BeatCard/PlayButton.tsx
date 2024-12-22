import React from 'react';
import { Play, Pause } from 'lucide-react';

interface PlayButtonProps {
  isPlaying: boolean;
  onClick: () => void;
  className?: string;
}

export default function PlayButton({ isPlaying, onClick, className = '' }: PlayButtonProps) {
  const Icon = isPlaying ? Pause : Play;
  
  return (
    <button 
      onClick={onClick}
      className={`flex items-center justify-center transition-all ${className}`}
      aria-label={isPlaying ? 'Pause' : 'Play'}
    >
      <Icon size={48} className="text-white" />
    </button>
  );
}