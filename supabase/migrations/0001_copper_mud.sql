/*
  # Initial Schema for Beats Marketplace

  1. New Tables
    - `profiles`
      - Extends auth.users with additional user info
      - Stores user profile data like name, avatar, bio
    
    - `beats`
      - Stores beat information
      - Links to user who created it
      - Includes metadata like BPM, key, genre
    
    - `sales`
      - Records beat purchases
      - Links buyer and beat
      - Stores transaction details

  2. Security
    - Enable RLS on all tables
    - Add policies for:
      - Users can read their own profile
      - Users can read public beats
      - Beat creators can manage their beats
      - Users can see their own purchases
*/

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username text UNIQUE,
  full_name text,
  avatar_url text,
  bio text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create beats table
CREATE TABLE beats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  cover_url text,
  audio_url text,
  bpm integer,
  key text,
  genre text,
  price decimal NOT NULL DEFAULT 0,
  is_published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create sales table
CREATE TABLE sales (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  beat_id uuid REFERENCES beats(id) ON DELETE SET NULL,
  buyer_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  amount decimal NOT NULL,
  status text NOT NULL DEFAULT 'completed',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE beats ENABLE ROW LEVEL SECURITY;
ALTER TABLE sales ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile"
  ON profiles
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- Beats policies
CREATE POLICY "Anyone can view published beats"
  ON beats
  FOR SELECT
  USING (is_published = true);

CREATE POLICY "Creators can view all their beats"
  ON beats
  FOR SELECT
  USING (auth.uid() = creator_id);

CREATE POLICY "Creators can update their beats"
  ON beats
  FOR UPDATE
  USING (auth.uid() = creator_id);

CREATE POLICY "Creators can delete their beats"
  ON beats
  FOR DELETE
  USING (auth.uid() = creator_id);

-- Sales policies
CREATE POLICY "Users can view their purchases"
  ON sales
  FOR SELECT
  USING (auth.uid() = buyer_id);

CREATE POLICY "Creators can view their beat sales"
  ON sales
  FOR SELECT
  USING (
    auth.uid() IN (
      SELECT creator_id FROM beats WHERE id = beat_id
    )
  );

-- Functions
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO profiles (id, username, full_name, avatar_url)
  VALUES (
    new.id,
    new.raw_user_meta_data->>'username',
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY definer;

-- Triggers
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE handle_new_user();