import React from 'react';
import { Waves } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Waves size={24} className="text-purple-500" />
      <span className="text-xl font-bold text-white">RUDYBTZ</span>
    </div>
  );
}