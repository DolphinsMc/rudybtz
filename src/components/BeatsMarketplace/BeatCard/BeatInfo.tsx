import React from 'react';
import { MoreVertical } from 'lucide-react';

interface BeatInfoProps {
  title: string;
  bpm: number;
  key: string;
  genre: string;
}

export default function BeatInfo({ title, bpm, key, genre }: BeatInfoProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-white truncate">{title}</h3>
        <button 
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="More options"
        >
          <MoreVertical size={20} />
        </button>
      </div>

      <div className="flex items-center space-x-4 text-sm text-gray-400">
        <span>{bpm} BPM</span>
        <span>{key}</span>
        <span>{genre}</span>
      </div>
    </div>
  );
}