import React from 'react';
import AudioControls from './AudioControls';
import AudioVisualizer from '../../AudioVisualizer';
import { PreviewState } from './AudioPreviewState';

interface CoverArtProps {
  cover: string;
  title: string;
  isPlaying: boolean;
  previewState: PreviewState;
  audioUrl?: string;
  onPlayPause: () => void;
  onRetry?: () => void;
}

export default function CoverArt({ 
  cover, 
  title, 
  isPlaying, 
  previewState,
  audioUrl,
  onPlayPause,
  onRetry 
}: CoverArtProps) {
  return (
    <div className="relative aspect-square">
      {isPlaying && audioUrl ? (
        <AudioVisualizer audioUrl={audioUrl} />
      ) : (
        <img 
          src={cover} 
          alt={title}
          className="w-full h-full object-cover"
        />
      )}
      <AudioControls 
        isPlaying={isPlaying} 
        onPlayPause={onPlayPause}
        previewState={previewState}
        onRetry={onRetry}
      />
    </div>
  );
}