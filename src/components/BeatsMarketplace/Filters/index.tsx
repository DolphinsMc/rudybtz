import React from 'react';
import { Select } from '../../ui';
import { GENRES, SORT_OPTIONS, Genre, SortOption } from '../../../constants/filters';

interface FiltersProps {
  selectedGenre: Genre;
  selectedSort: SortOption;
  onGenreChange: (genre: Genre) => void;
  onSortChange: (sort: SortOption) => void;
}

export default function Filters({
  selectedGenre,
  selectedSort,
  onGenreChange,
  onSortChange
}: FiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <Select
        options={GENRES}
        value={selectedGenre}
        onChange={value => onGenreChange(value as Genre)}
      />
      <Select
        options={SORT_OPTIONS}
        value={selectedSort}
        onChange={value => onSortChange(value as SortOption)}
      />
    </div>
  );
}