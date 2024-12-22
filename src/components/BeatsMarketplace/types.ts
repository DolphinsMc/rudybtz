export interface Beat {
  id: number;
  title: string;
  cover: string;
  bpm: number;
  key: string;
  genre: string;
  price: number;
  audioUrl?: string;
}

export type SortOption = 'latest' | 'price_asc' | 'price_desc' | 'popular';

export interface FilterState {
  genre: string;
  sort: SortOption;
}