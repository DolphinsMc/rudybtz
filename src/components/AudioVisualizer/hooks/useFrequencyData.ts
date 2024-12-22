import { useState, useEffect } from 'react';
import { useAudioContext } from './useAudioContext';

export function useFrequencyData() {
  const [frequencies, setFrequencies] = useState({
    kickFreq: 0,
    snareFreq: 0,
    bassFreq: 0
  });

  const { analyzer, dataArray } = useAudioContext();

  useEffect(() => {
    if (!analyzer || !dataArray) return;

    const updateFrequencies = () => {
      analyzer.getByteFrequencyData(dataArray);
      
      // Extract specific frequency ranges
      const kick = average(dataArray.slice(0, 4)) / 255;    // 20-60 Hz
      const snare = average(dataArray.slice(15, 20)) / 255; // 200-350 Hz
      const bass = average(dataArray.slice(4, 10)) / 255;   // 60-150 Hz

      setFrequencies({
        kickFreq: kick,
        snareFreq: snare,
        bassFreq: bass
      });
    };

    const animationId = requestAnimationFrame(function animate() {
      updateFrequencies();
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationId);
  }, [analyzer, dataArray]);

  return frequencies;
}

function average(arr: Uint8Array | number[]): number {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}