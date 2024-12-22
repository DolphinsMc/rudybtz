import React, { useEffect, useRef } from 'react';
import Scene from './Scene';
import { connectAudioSource } from './utils/audio';
import { useAudioContext } from './hooks/useAudioContext';

interface AudioVisualizerProps {
  audioUrl: string;
}

export default function AudioVisualizer({ audioUrl }: AudioVisualizerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { analyzer } = useAudioContext();

  useEffect(() => {
    if (!analyzer) return;

    audioRef.current = new Audio(audioUrl);
    const audioContext = analyzer.context;
    const source = connectAudioSource(audioRef.current, analyzer, audioContext);

    return () => {
      source.disconnect();
      audioRef.current?.pause();
    };
  }, [audioUrl, analyzer]);

  return (
    <div className="w-full aspect-square bg-gray-900">
      <Scene />
    </div>
  );
}