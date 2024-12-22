import React from 'react';

const GENRES = [
  { value: '', label: 'All Genres' },
  { value: 'trap', label: 'Trap' },
  { value: 'drill', label: 'UK Drill' },
  { value: 'dnb', label: 'Drum and Bass' },
  { value: 'lofi', label: 'Lo-Fi' },
  { value: 'reggae', label: 'Reggae' }
] as const;

interface GenreFilterProps {
  value: string;
  onChange: (genre: string) => void;
}

export default function GenreFilter({ value, onChange }: GenreFilterProps) {
  return (
    <select 
      className="bg-gray-800 text-white px-4 py-2 rounded-lg"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {GENRES.map(genre => (
        <option key={genre.value} value={genre.value}>
          {genre.label}
        </option>
      ))}
    </select>
  );
}