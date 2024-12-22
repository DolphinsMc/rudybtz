import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Sale } from '../types/database';
import { useAuth } from './useAuth';

export function useSales() {
  const { user } = useAuth();
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSales();
  }, [user?.id]);

  async function loadSales() {
    if (!user?.id) return;

    try {
      const { data, error } = await supabase
        .from('sales')
        .select(`
          *,
          beats (
            title,
            price
          )
        `)
        .or(`buyer_id.eq.${user.id},beats.creator_id.eq.${user.id}`)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSales(data || []);
    } catch (error) {
      console.error('Error loading sales:', error);
    } finally {
      setLoading(false);
    }
  }

  return {
    sales,
    loading,
    refresh: loadSales
  };
}