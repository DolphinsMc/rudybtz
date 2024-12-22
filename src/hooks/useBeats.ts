import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Beat } from '../types/database';
import { useAuth } from './useAuth';

export function useBeats() {
  const { user } = useAuth();
  const [beats, setBeats] = useState<Beat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBeats();
  }, [user?.id]);

  async function loadBeats() {
    try {
      const { data, error } = await supabase
        .from('beats')
        .select('*')
        .eq('creator_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBeats(data || []);
    } catch (error) {
      console.error('Error loading beats:', error);
    } finally {
      setLoading(false);
    }
  }

  const createBeat = async (beatData: Partial<Beat>) => {
    if (!user?.id) return null;

    try {
      const { data, error } = await supabase
        .from('beats')
        .insert([{ ...beatData, creator_id: user.id }])
        .select()
        .single();

      if (error) throw error;
      setBeats(prev => [data, ...prev]);
      return data;
    } catch (error) {
      console.error('Error creating beat:', error);
      return null;
    }
  };

  const updateBeat = async (id: string, updates: Partial<Beat>) => {
    try {
      const { error } = await supabase
        .from('beats')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
      setBeats(prev => prev.map(beat => 
        beat.id === id ? { ...beat, ...updates } : beat
      ));
      return true;
    } catch (error) {
      console.error('Error updating beat:', error);
      return false;
    }
  };

  const deleteBeat = async (id: string) => {
    try {
      const { error } = await supabase
        .from('beats')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setBeats(prev => prev.filter(beat => beat.id !== id));
      return true;
    } catch (error) {
      console.error('Error deleting beat:', error);
      return false;
    }
  };

  return {
    beats,
    loading,
    createBeat,
    updateBeat,
    deleteBeat,
    refresh: loadBeats
  };
}