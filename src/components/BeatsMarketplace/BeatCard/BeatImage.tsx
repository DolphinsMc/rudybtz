import React from 'react';
import PlayButton from './PlayButton';
import { PreviewError } from '../../ui';

interface BeatImageProps {
  cover: string;
  title: string;
  isPlaying: boolean;
  onPlayPause: () => void;
}

export default function BeatImage({ cover, title, isPlaying, onPlayPause }: BeatImageProps) {
  const [error, setError] = React.useState(false);

  const handleRetry = () => {
    setError(false);
  };

  if (error) {
    return (
      <div className="aspect-square">
        <PreviewError 
          message="Preview image unavailable"
          onRetry={handleRetry}
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-square">
      <img 
        src={cover} 
        alt={title}
        className="w-full h-full object-cover"
        onError={() => setError(true)}
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
        <PlayButton 
          isPlaying={isPlaying} 
          onClick={onPlayPause}
          className="absolute inset-0"
        />
      </div>
    </div>
  );
}