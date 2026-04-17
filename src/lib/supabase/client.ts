// lib/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr';
import logger from '../logger';

export function createClient() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  logger.info('Supabase browser client initialized');
  return supabase;
}