import { useState, useMemo } from 'react';
import { Beat, FilterState, SortOption } from '../types';

export function useBeatsFilter(beats: Beat[]) {
  const [filters, setFilters] = useState<FilterState>({
    genre: '',
    sort: 'latest'
  });

  const filteredBeats = useMemo(() => {
    return beats
      .filter(beat => !filters.genre || beat.genre.toLowerCase() === filters.genre)
      .sort((a, b) => {
        switch (filters.sort) {
          case 'price_asc':
            return a.price - b.price;
          case 'price_desc':
            return b.price - a.price;
          case 'popular':
            return 0; // TODO: Implement popularity sorting
          default:
            return b.id - a.id; // Latest by default
        }
      });
  }, [beats, filters]);

  const setGenre = (genre: string) => {
    setFilters(prev => ({ ...prev, genre: genre.toLowerCase() }));
  };

  const setSort = (sort: SortOption) => {
    setFilters(prev => ({ ...prev, sort }));
  };

  return {
    filters,
    filteredBeats,
    setGenre,
    setSort
  };
}