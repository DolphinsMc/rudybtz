import React from 'react';
import { Play, Pause } from 'lucide-react';
import AudioPreviewState, { PreviewState } from './AudioPreviewState';

interface AudioControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  previewState?: PreviewState;
  onRetry?: () => void;
}

export default function AudioControls({ 
  isPlaying, 
  onPlayPause,
  previewState = 'idle',
  onRetry
}: AudioControlsProps) {
  return (
    <>
      <AudioPreviewState state={previewState} onRetry={onRetry} />
      
      {previewState === 'idle' && (
        <button 
          onClick={onPlayPause}
          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? 
            <Pause size={48} className="text-white" /> : 
            <Play size={48} className="text-white" />
          }
        </button>
      )}
    </>
  );
}