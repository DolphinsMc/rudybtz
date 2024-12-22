import React from 'react';
import { Beat } from './types';
import BeatCard from './BeatCard';

interface BeatsGridProps {
  beats: Beat[];
}

export default function BeatsGrid({ beats }: BeatsGridProps) {
  if (beats.length === 0) {
    return (
      <div className="text-center text-gray-400 py-12">
        No beats found matching your criteria.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {beats.map(beat => (
        <BeatCard key={beat.id} beat={beat} />
      ))}
    </div>
  );
}