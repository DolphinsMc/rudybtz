export const GENRES = [
  { value: '', label: 'All Genres' },
  { value: 'trap', label: 'Trap' },
  { value: 'drill', label: 'UK Drill' },
  { value: 'dnb', label: 'Drum and Bass' },
  { value: 'lofi', label: 'Lo-Fi' },
  { value: 'reggae', label: 'Reggae' }
] as const;

export const SORT_OPTIONS = [
  { value: 'latest', label: 'Sort by: Latest' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'popular', label: 'Most Popular' }
] as const;

export type Genre = typeof GENRES[number]['value'];
export type SortOption = typeof SORT_OPTIONS[number]['value'];