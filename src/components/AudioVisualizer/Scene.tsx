import React from 'react';
import { Canvas } from '@react-three/fiber';
import VisualizerCube from './VisualizerCube';
import Lighting from './Lighting';

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <Lighting />
      <VisualizerCube />
    </Canvas>
  );
}