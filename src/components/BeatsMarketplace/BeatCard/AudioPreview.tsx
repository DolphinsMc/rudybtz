import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { AudioManager } from '../../../utils/audio';
import { Beat } from '../types';

interface AudioPreviewProps {
  beat: Beat;
}

export default function AudioPreview({ beat }: AudioPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioManager = AudioManager.getInstance();

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setProgress(audioManager.getProgress());
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    setIsPlaying(audioManager.getCurrentBeatId() === beat.id);
  }, [beat.id]);

  const handlePlayPause = () => {
    if (beat.audioUrl) {
      audioManager.play(beat.id, beat.audioUrl);
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative aspect-square">
      <img 
        src={beat.cover} 
        alt={beat.title}
        className="w-full h-full object-cover"
      />
      <button 
        onClick={handlePlayPause}
        className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? 
          <Pause size={48} className="text-white" /> : 
          <Play size={48} className="text-white" />
        }
      </button>
    </div>
  );
}