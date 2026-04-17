// hooks/useCurrentAdmin.ts
'use client';

import { useQuery } from '@tanstack/react-query';

export function useCurrentAdmin() {
  return useQuery({
    queryKey: ['currentAdmin'],
    queryFn: async () => {
      const sessionStr = localStorage.getItem('adminSession');
      if (!sessionStr) throw new Error('No admin session');

      const admin = JSON.parse(sessionStr);

      // Optional: Check if session is too old (e.g. > 24 hours)
      if (Date.now() - admin.loggedInAt > 24 * 60 * 60 * 1000) {
        localStorage.removeItem('adminSession');
        throw new Error('Session expired');
      }

      return admin;
    },
    staleTime: 1000 * 60 * 60, // 1 hour
    retry: false,
  });
}