import React from 'react';
import CallToAction from './CallToAction';

export default function Bio() {
  return (
    <div className="md:flex-1 text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Sonic Innovation Unleashed
      </h1>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl">
        Versatile producer and artist blending Trap, UK Drill, and Drum and Bass with 
        reggae and lo-fi influences. Creator of the acclaimed album "Rudy B Bass" and 
        known for innovative audio-visual experiences that push creative boundaries.
      </p>
      <CallToAction />
    </div>
  );
}