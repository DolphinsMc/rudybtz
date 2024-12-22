export interface Profile {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  created_at: string;
  updated_at: string;
}

export interface Beat {
  id: string;
  creator_id: string;
  title: string;
  description: string | null;
  cover_url: string | null;
  audio_url: string | null;
  bpm: number | null;
  key: string | null;
  genre: string | null;
  price: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Sale {
  id: string;
  beat_id: string;
  buyer_id: string;
  amount: number;
  status: string;
  created_at: string;
}