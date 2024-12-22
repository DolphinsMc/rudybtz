import React from 'react';
import { Beat } from '../BeatsMarketplace/types';
import BeatsTableHeader from './BeatsTableHeader';
import BeatsTableRow from './BeatsTableRow';

interface BeatsTableProps {
  beats: Beat[];
}

export default function BeatsTable({ beats }: BeatsTableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left">
        <BeatsTableHeader />
        <tbody className="divide-y divide-gray-800">
          {beats.map((beat, index) => (
            <BeatsTableRow 
              key={beat.id} 
              beat={beat} 
              index={index + 1} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}