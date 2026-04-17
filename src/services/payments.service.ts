'use client';

import { createClient } from '@/lib/supabase/client';
import logger from '@/lib/logger';

export const paymentService = {
  /**
   * Get all payments with optional filters
   */
  async getAll() {
    try {
      const supabase = createClient();

      const { data, error } = await supabase
        .from('payments')
        .select(`
          *,
          contestants (
            id,
            first_name,
            last_name,
            other_names,
            representing
          )
        `)
        .order('created_at', { ascending: false });

      if (error) {
        logger.error(error, 'Failed to fetch payments');
        throw new Error(error.message);
      }

      return data || [];
    } catch (error: any) {
      logger.error(error, 'paymentService.getAll failed');
      throw error;
    }
  },

  /**
   * Get payments by contestant ID
   */
  async getByContestantId(contestantId: number) {
    try {
      const supabase = createClient();

      const { data, error } = await supabase
        .from('payments')
        .select(`
          *,
          contestants (
            id,
            first_name,
            last_name,
            representing
          )
        `)
        .eq('contestant_id', contestantId)
        .order('created_at', { ascending: false });

      if (error) {
        logger.error(error, 'Failed to fetch payments by contestant');
        throw new Error(error.message);
      }

      return data || [];
    } catch (error: any) {
      logger.error(error, 'paymentService.getByContestantId failed');
      throw error;
    }
  },

  /**
   * Get recent payments (for dashboard)
   */
  async getRecent(limit: number = 10) {
    try {
      const supabase = createClient();

      const { data, error } = await supabase
        .from('payments')
        .select(`
          *,
          contestants (
            id,
            first_name,
            last_name,
            representing
          )
        `)
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) throw error;

      return data || [];
    } catch (error: any) {
      logger.error(error, 'paymentService.getRecent failed');
      throw error;
    }
  },

  /**
   * Get total revenue (optional utility)
   */
  async getTotalRevenue() {
    try {
      const supabase = createClient();

    //   const { data, error } = await supabase
    //     .from('payments')
    //     .select('amount')
    //     .single(); // We'll use RPC or raw for sum in real case

      // Better: Use a simple aggregate query
      const { data: sumData, error: sumError } = await supabase
        .from('payments')
        .select('sum(amount) as total_revenue');

      if (sumError) throw sumError;

      return sumData?.[0]?.total_revenue || 0;
    } catch (error: any) {
      logger.error(error, 'paymentService.getTotalRevenue failed');
      throw error;
    }
  },
};