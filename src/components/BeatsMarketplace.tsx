import React from 'react';
import { Play, Share2, Heart, ShoppingCart, MoreVertical } from 'lucide-react';
import BeatCard from './BeatCard';

const BEATS = [
  {
    id: 1,
    title: "Midnight Dreams",
    cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80",
    bpm: 140,
    key: "Am",
    genre: "Trap",
    price: 29.99
  },
  // Add more beats here
];

export default function BeatsMarketplace() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Featured Beats</h2>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <select className="bg-gray-800 text-white px-4 py-2 rounded-lg">
              <option>All Genres</option>
              <option>Trap</option>
              <option>Drill</option>
              <option>Hip Hop</option>
            </select>
            <select className="bg-gray-800 text-white px-4 py-2 rounded-lg">
              <option>Sort by: Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>

        {/* Beats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BEATS.map(beat => (
            <BeatCard key={beat.id} beat={beat} />
          ))}
        </div>
      </div>
    </section>
  );
}