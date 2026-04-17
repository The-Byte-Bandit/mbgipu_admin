// // services/auth.service.ts
// 'use client';

// import { createClient } from '@/lib/supabase/client';   
// import logger, { logAuth } from '@/lib/logger';


// export const authService = {

//  async adminSignUp(adminName: string, password: string, isSuperAdmin: boolean = false) {
//     try {
//       logger.info({ adminName }, 'Admin signup initiated');

//       const supabase = createClient();

//       const { data, error } = await supabase.rpc('create_admin', {
//         p_admin_name: adminName.trim(),
//         p_password: password,
//         p_is_super_admin: isSuperAdmin
//       });

//       if (error) throw new Error(error.message);
//       if (!data || !data[0]?.success) {
//         throw new Error(data?.[0]?.message || 'Failed to create admin');
//       }

//       logger.info({ adminId: data[0].admin_id, adminName }, 'Admin created successfully');

//       return {
//         success: true,
//         adminId: data[0].admin_id,
//         adminName: adminName
//       };

//     } catch (error: any) {
//       logger.error({ adminName, error: error.message }, 'Admin signup failed');
//       throw error;
//     }
//   },


// // ====================== ADMIN LOGIN (admin_name + password only) ======================
//   async adminLogin(adminName: string, password: string) {
//     try {
//       logger.info({ adminName }, 'Admin login initiated');

//       const supabase = createClient();

//       const { data, error } = await supabase.rpc('admin_login', {
//         p_admin_name: adminName.trim(),
//         p_password: password
//       });

//       if (error) throw new Error(error.message || 'Login failed');
//       if (!data || !data[0]?.success) {
//         throw new Error(data?.[0]?.message || 'Invalid admin name or password');
//       }

//       const adminData = data[0];

//       logAuth.success(adminData.admin_id.toString(), 'admin_login');

//       logger.info({ adminId: adminData.admin_id }, 'Admin login successful');

//       return {
//         success: true,
//         admin: {
//           id: adminData.admin_id,
//           admin_name: adminData.admin_name,
//           is_super_admin: adminData.is_super_admin,
//           permissions: adminData.permissions || []
//         },
//         role: 'admin'
//       };

//     } catch (error: any) {
//       logger.error({ adminName, error: error.message }, 'Admin login failed');
//       throw error;
//     }
//   },

//   // ====================== SIGN OUT ======================
//   async signOut() {
//     try {
//       const supabase = createClient();
//       const { error } = await supabase.auth.signOut();
//       if (error) throw error;

//       logger.info('User signed out successfully');
//       return { success: true };
//     } catch (error: any) {
//       logger.error(error, 'Sign out failed');
//       throw error;
//     }
//   },
// };





// services/auth.service.ts
'use client';

import { createClient } from '@/lib/supabase/client';
import logger, { logAuth } from '@/lib/logger';

export const authService = {

  // ... your contestant signUp and login stay the same ...

  // ====================== ADMIN SIGNUP ======================
  async adminSignUp(adminName: string, password: string, isSuperAdmin = false) {
    try {
      const supabase = createClient();

      const { data, error } = await supabase.rpc('create_admin', {
        p_admin_name: adminName.trim(),
        p_password: password,
        p_is_super_admin: isSuperAdmin
      });

      if (error) throw error;
      if (!data?.[0]?.success) throw new Error(data?.[0]?.message || 'Failed to create admin');

      logger.info({ adminName }, 'Admin account created');

      return { success: true, adminId: data[0].admin_id };
    } catch (error: any) {
      logger.error(error, 'Admin signup failed');
      throw error;
    }
  },

  // ====================== ADMIN LOGIN ======================
  async adminLogin(adminName: string, password: string) {
    try {
      const supabase = createClient();

      const { data, error } = await supabase.rpc('admin_login', {
        p_admin_name: adminName.trim(),
        p_password: password
      });

      if (error || !data?.[0]?.success) {
        console.log(error);
        
        throw new Error('Invalid admin name or password');
      }

      const admin = data[0];

      // Store admin session in localStorage (simple & effective)
      localStorage.setItem('adminSession', JSON.stringify({
        id: admin.admin_id,
        admin_name: admin.admin_name,
        is_super_admin: admin.is_super_admin,
        permissions: admin.permissions || [],
        loggedInAt: Date.now()
      }));

      logger.info({ adminId: admin.admin_id }, 'Admin logged in');

      return { success: true, admin };
    } catch (error: any) {
      logger.error(error, 'Admin login failed');
      throw error;
    }
  },

  // Check if admin is logged in
  isAdminLoggedIn() {
    return !!localStorage.getItem('adminSession');
  },

  getCurrentAdmin() {
    const session = localStorage.getItem('adminSession');
    return session ? JSON.parse(session) : null;
  },

  async signOut() {
    localStorage.removeItem('adminSession');
    const supabase = createClient();
    await supabase.auth.signOut(); // also clear any supabase session
    return { success: true };
  },
  
async changeAdminPassword(adminName: string, oldPassword: string, newPassword: string) {
    try {
      const supabase = createClient();

      const { data, error } = await supabase.rpc('change_admin_password', {
        p_admin_name: adminName,
        p_old_password: oldPassword,
        p_new_password: newPassword
      });

      if (error) throw error;
      if (!data?.[0]?.success) {
        throw new Error(data?.[0]?.message || 'Failed to change password');
      }

      logger.info({ adminName }, 'Admin password changed successfully');
      return { success: true };
    } catch (error: any) {
      logger.error(error, 'Failed to change admin password');
      throw error;
    }
  },
};