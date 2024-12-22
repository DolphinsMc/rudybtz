import React from 'react';

interface WaveformProps {
  progress: number;
}

export default function Waveform({ progress }: WaveformProps) {
  return (
    <div className="h-8 bg-gray-700 rounded overflow-hidden">
      <div 
        className="h-full bg-purple-500 rounded transition-all duration-300" 
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}