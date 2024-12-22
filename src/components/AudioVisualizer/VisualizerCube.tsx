import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useFrequencyData } from './hooks/useFrequencyData';

export default function VisualizerCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { kickFreq, snareFreq, bassFreq } = useFrequencyData();

  useFrame(() => {
    if (!meshRef.current) return;
    
    // Apply smooth transformations based on frequencies
    meshRef.current.scale.lerp(
      new THREE.Vector3(
        1 + kickFreq * 0.8,    // Increased kick response
        1 + snareFreq * 0.6,   // Increased snare response
        1 + bassFreq * 0.5     // Increased bass response
      ),
      0.2  // Smoother transitions
    );
    
    // Smooth rotation based on frequencies
    meshRef.current.rotation.x += 0.01 * (1 + kickFreq * 0.8);
    meshRef.current.rotation.y += 0.01 * (1 + snareFreq * 0.6);
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial 
        color="#9333ea"
        transparent
        opacity={0.7}
        shininess={100}
        envMapIntensity={1}
      />
    </mesh>
  );
}