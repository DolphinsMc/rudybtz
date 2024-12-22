import React from 'react';
import { SortOption } from '../types';

const SORT_OPTIONS = [
  { value: 'latest', label: 'Sort by: Latest' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'popular', label: 'Most Popular' }
] as const;

interface SortFilterProps {
  value: SortOption;
  onChange: (sort: SortOption) => void;
}

export default function SortFilter({ value, onChange }: SortFilterProps) {
  return (
    <select 
      className="bg-gray-800 text-white px-4 py-2 rounded-lg"
      value={value}
      onChange={(e) => onChange(e.target.value as SortOption)}
    >
      {SORT_OPTIONS.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}