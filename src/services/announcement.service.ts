'use client';

import { createClient } from '@/lib/supabase/client';
import logger from '@/lib/logger';

export const announcementService = {
  /**
   * Get all announcements (newest first)
   */
  async getAll() {
    try {
      const supabase = createClient();

      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      return data || [];
    } catch (error: any) {
      logger.error(error, 'announcementService.getAll failed');
      throw error;
    }
  },

  /**
   * Create a new announcement
   */
  async create(title: string, content: string) {
    try {
      const supabase = createClient();

      const { data, error } = await supabase
        .from('announcements')
        .insert({
          title: title.trim(),
          content: content.trim(),
        })
        .select()
        .single();

      if (error) throw error;

      logger.info({ announcementId: data.id }, 'Announcement created');
      return data;
    } catch (error: any) {
      logger.error(error, 'announcementService.create failed');
      throw error;
    }
  },

  /**
   * Delete an announcement
   */
    /**
   * Delete an announcement and remove its ID from ALL users' read_announcements arrays
   */
  /**
   * Delete an announcement and remove its ID from ALL users' read_announcements arrays
   */
  async delete(id: number) {
    try {
      const supabase = createClient();

      // 1. Delete the announcement
      const { error: deleteAnnError } = await supabase
        .from('announcements')
        .delete()
        .eq('id', id);

      if (deleteAnnError) throw deleteAnnError;

      // 2. Remove this announcement ID from ALL users' read_announcements array
      // We do this by fetching users who have this ID and updating them individually (safe client-side way)
      const { data: usersWithThisRead, error: fetchError } = await supabase
        .from('users')
        .select('id, read_announcements')
        .contains('read_announcements', [id.toString()]);   // Find users who have this ID

      if (fetchError) {
        logger.warn(fetchError, 'Could not fetch users with this read announcement');
        // Still continue - main deletion succeeded
      }

      if (usersWithThisRead && usersWithThisRead.length > 0) {
        for (const user of usersWithThisRead) {
          const newReadList = (user.read_announcements || []).filter(
            (readId: string) => readId !== id.toString()
          );

          await supabase
            .from('users')
            .update({ read_announcements: newReadList })
            .eq('id', user.id);
        }
      }

      logger.info({ announcementId: id }, 'Announcement deleted and cleaned from all users');
      return true;

    } catch (error: any) {
      logger.error(error, 'announcementService.delete failed');
      throw error;
    }
  },

//   async delete(id: number) {
//     try {
//       const supabase = createClient();

//       const { error } = await supabase
//         .from('announcements')
//         .delete()
//         .eq('id', id);

//       if (error) throw error;

//       const { error } = await supabase
//         .from('users')
//         .delete()
//         .eq('read_announcements', id);

//       if (error) throw error;

//       return true;
//     } catch (error: any) {
//       logger.error(error, 'announcementService.delete failed');
//       throw error;
//     }
//   },

};
