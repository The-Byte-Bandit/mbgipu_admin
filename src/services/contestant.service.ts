// // // services/contestant.service.ts
// // import { supabase } from '@/lib/supabase';

// // export const contestantService = {
// //   async getAll() {
// //     const { data, error } = await supabase
// //       .from('contestants')
// //       .select('*')
// //       .order('votes', { ascending: false });

// //     if (error) throw error;
// //     return data;
// //   },

// //   async getById(id: string) {
// //     const { data, error } = await supabase
// //       .from('contestants')
// //       .select('*')
// //       .eq('id', id)
// //       .single();

// //     if (error) throw error;
// //     return data;
// //   },

// //   async incrementViews(id: string) {
// //     const { error } = await supabase
// //       .from('contestants')
// //       .update({ views: supabase.raw('views + 1') })
// //       .eq('id', id);

// //     if (error) throw error;
// //   }
// // };



// // services/contestant.service.ts
// 'use client';

// import { createClient } from '@/lib/supabase/client';
// import logger from '@/lib/logger';

// export const contestantService = {
//   async getAll() {
//     const supabase = createClient();
//     const { data, error } = await supabase
//       .from('user')
//       .select('*')
//       .order('vote_count', { ascending: false });

//     if (error) throw error;
//     return data || [];
//   },

//   async getByUserId(userId: string) {
//     const supabase = createClient();
//     const { data, error } = await supabase
//       .from('contestants')
//       .select('*')
//       .eq('user_id', userId)
//       .single();

//     if (error) throw error;
//     return data;
//   },

// };




// services/user.service.ts   ← Better name
'use client';

import { createClient } from '@/lib/supabase/client';
import logger from '@/lib/logger';

export const userService = {
  /**
   * Get all users (for admin dashboard)
   */
  async getAll() {
    try {
      const supabase = createClient();

      const { data, error } = await supabase
        .from('users')                    // ← From users table
        .select('*')
        .order('vote_count', { ascending: false });

      if (error) {
        logger.error(error, 'Failed to fetch users');
        throw error;
      }

      return data || [];
    } catch (error: any) {
      logger.error(error, 'getAll users failed');
      throw error;
    }
  },

  /**
   * Get single user by ID
   */
  async getById(userId: string) {
    try {
      const supabase = createClient();

      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) throw error;
      return data;
    } catch (error: any) {
      logger.error(error, `Failed to fetch user with id: ${userId}`);
      throw error;
    }
  },

 async toggleUserStatus(userId: string, newStatus: boolean) {
    try {
      const supabase = createClient();

      // Update users table
      const { error: userError } = await supabase
        .from('users')
        .update({ is_active: newStatus })
        .eq('id', userId);

      if (userError) throw userError;

      // Also update contestants table if it exists
      const { error: contestantError } = await supabase
        .from('contestants')
        .update({ is_active: newStatus })
        .eq('user_id', userId);

      if (contestantError) {
        logger.warn(contestantError, 'Contestant table update failed (may not exist)');
      }

      logger.info(`User ${userId} ${newStatus ? 'activated' : 'deactivated'}`);
      return { 
        success: true, 
        message: `User has been ${newStatus ? 'activated' : 'deactivated'} successfully.` 
      };
    } catch (error: any) {
      logger.error(error, `Failed to toggle user status`);
      throw error;
    }
  },

  /**
   * Deactivate all users with low votes (bulk action)
   */
  async deactivateLowVoteUsers(minVotes: number = 1000) {
    try {
      const supabase = createClient();
      const { data, error } = await supabase.rpc('deactivate_low_vote_contestants', {
        p_min_votes: minVotes
      });

      if (error) throw error;

      return { 
        success: true, 
        message: `Deactivated users with less than ${minVotes} votes`,
        count: data?.[0]?.disabled_count || 0 
      };
    } catch (error: any) {
      logger.error(error, 'Failed to deactivate low vote users');
      throw error;
    }
  },

};