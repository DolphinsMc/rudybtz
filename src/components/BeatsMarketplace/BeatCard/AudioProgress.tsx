import React from 'react';
import { formatDuration } from '../../../utils/formatters';

interface AudioProgressProps {
  currentTime: number;
  duration: number;
  progress: number;
}

export default function AudioProgress({ currentTime, duration, progress }: AudioProgressProps) {
  return (
    <div className="space-y-2">
      <div className="h-8 bg-gray-700 rounded overflow-hidden">
        <div 
          className="h-full bg-purple-500 rounded transition-all duration-300" 
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <div className="flex justify-between text-sm text-gray-400">
        <span>{formatDuration(currentTime)}</span>
        <span>{formatDuration(duration)}</span>
      </div>
    </div>
  );
}