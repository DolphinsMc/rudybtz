import { useState, useEffect } from 'react';
import { createAudioContext } from '../utils/audio';

export function useAudioContext() {
  const [context, setContext] = useState<{
    analyzer: AnalyserNode | null;
    dataArray: Uint8Array | null;
  }>({
    analyzer: null,
    dataArray: null
  });

  useEffect(() => {
    const { analyzer, dataArray } = createAudioContext();
    setContext({ analyzer, dataArray });

    return () => {
      analyzer?.disconnect();
    };
  }, []);

  return context;
}