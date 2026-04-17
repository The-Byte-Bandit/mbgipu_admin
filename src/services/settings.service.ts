// 'use client';

// import { createClient } from '@/lib/supabase/client';
// import logger from '@/lib/logger';

// export const settingsService = {
//   async getSettings() {
//     try {
//       const supabase = createClient();
//       const { data, error } = await supabase
//         .from('competition_settings')
//         .select('*')
//         .single();

//       if (error) throw error;
//       return data;
//     } catch (error: any) {
//       logger.error(error, 'Failed to fetch settings');
//       throw error;
//     }
//   },

//   async updateSettings(updates: any) {
//     try {
//       const supabase = createClient();
//       const { data, error } = await supabase
//         .from('competition_settings')
//         .update(updates)
//         .eq('id', 1)
//         .select()
//         .single();

//       if (error) throw error;
//       return data;
//     } catch (error: any) {
//       logger.error(error, 'Failed to update settings');
//       throw error;
//     }
//   },
// };


// 'use client';

// import { createClient } from '@/lib/supabase/client';
// import logger from '@/lib/logger';

// export const settingsService = {
//   async getSettings() {
//     try {
//       const supabase = createClient();
//       const { data, error } = await supabase
//         .from('competition_settings')
//         .select('*')
//         .single();

//       if (error) throw error;
//       return data;
//     } catch (error: any) {
//       logger.error(error, 'Failed to fetch settings');
//       throw error;
//     }
//   },

//   async updateSettings(updates: any) {
//     try {
//       const supabase = createClient();

//       // Ensure required fields are not null
//       if (!updates.selection_stage_start || !updates.selection_stage_end || 
//           !updates.finals_stage_start || !updates.finals_stage_end) {
//         throw new Error("All stage dates are required");
//       }

//       const { data, error } = await supabase
//         .from('competition_settings')
//         .update({
//           selection_stage_start: updates.selection_stage_start,
//           selection_stage_end: updates.selection_stage_end,
//           finals_stage_start: updates.finals_stage_start,
//           finals_stage_end: updates.finals_stage_end,
//           min_votes_for_selection: updates.min_votes_for_selection || 1000,
//           updated_at: new Date().toISOString(),
//         })
//         .eq('id', 1)
//         .select()
//         .single();

//       if (error) throw error;

//       logger.info('Competition settings updated successfully');
//       return data;
//     } catch (error: any) {
//       logger.error(error, 'Failed to update settings');
//       throw error;
//     }
//   },
// };



// services/settings.service.ts

'use client';

import { createClient } from '@/lib/supabase/client';
import logger from '@/lib/logger';

export const settingsService = {
  async getSettings() {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('competition_settings')
        .select('*')
        .eq('id', 1)
        .single();

      if (error) throw error;
      return data;
    } catch (error: any) {
      logger.error(error, 'Failed to fetch settings');
      throw error;
    }
  },

    async updateSettings(updates: any) {
    try {
      const supabase = createClient();
      const { error } = await supabase
        .from('competition_settings')
        .update({
          min_votes_for_selection: updates.min_votes_for_selection || 1000,
          updated_at: new Date().toISOString(),
        })
        .eq('id', 1);

      if (error) throw error;
      return true;
    } catch (error: any) {
      logger.error(error, 'Failed to update settings');
      throw error;
    }
  },

  async deactivateLowVoteUsers(minVotes: number) {
    try {
      const supabase = createClient();

      const { error } = await supabase.rpc('deactivate_low_vote_contestants', {
        p_min_votes: minVotes
      });

      if (error) throw error;

      logger.info(`Deactivated users with less than ${minVotes} votes`);
      return { success: true, minVotes };
    } catch (error: any) {
      logger.error(error, 'Failed to deactivate low vote users');
      throw error;
    }
  },

  async disableVoting() {
    try {
      const supabase = createClient();

      const { error } = await supabase
        .from('competition_settings')
        .update({ voting_enabled: false })
        .eq('id', 1);

      if (error) throw error;

      logger.info('Voting disabled globally');
      return { success: true };
    } catch (error: any) {
      logger.error(error, 'Failed to disable voting');
      throw error;
    }
  },
};