import React from 'react';

interface FiltersProps {
  onGenreChange: (genre: string) => void;
  onSortChange: (sort: string) => void;
}

export default function Filters({ onGenreChange, onSortChange }: FiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <select 
        className="bg-gray-800 text-white px-4 py-2 rounded-lg"
        onChange={(e) => onGenreChange(e.target.value)}
      >
        <option value="">All Genres</option>
        <option value="trap">Trap</option>
        <option value="drill">UK Drill</option>
        <option value="dnb">Drum and Bass</option>
        <option value="lofi">Lo-Fi</option>
        <option value="reggae">Reggae</option>
      </select>
      
      <select 
        className="bg-gray-800 text-white px-4 py-2 rounded-lg"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="latest">Sort by: Latest</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="popular">Most Popular</option>
      </select>
    </div>
  );
}