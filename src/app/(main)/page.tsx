// // // app/(auth)/admin-login/page.tsx
// // 'use client';

// // import { useState } from "react";
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { User, Lock, Eye, EyeOff, Globe, Info } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Checkbox } from "@/components/ui/checkbox";

// // import logo from "@/public/images/logo.svg";
// // import heroBg from "@/public/images/hero-bg.jpg";



// // export default function AdminLogin() {
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");

// //   return (
// //     <div className="min-h-screen flex flex-col bg-background">
// //       {/* Main Content */}
// //       <div
// //         className="flex-1 flex items-center justify-center px-4 py-12 admin-login-bg"
// //         // style={{
// //         //   backgroundImage: `linear-gradient(to bottom, hsla(345, 40%, 8%, 0.85), hsla(0, 0%, 8%, 0.95)),
// //         //    url(${heroBg.src})
// //         //    )`,
// //         //   backgroundSize: "cover",
// //         //   backgroundPosition: "center",
// //         // }}
// //          style={{
// //     backgroundImage: `
// //       linear-gradient(
// //         to bottom,
// //         hsla(345, 40%, 8%, 0.85),
// //         hsla(0, 0%, 8%, 0.95)
// //       ),
// //       url(${heroBg.src})
// //     `,
// //     backgroundSize: "cover",
// //     backgroundPosition: "center",
// //     backgroundRepeat: "no-repeat",
// //   }}
// //       >
// //         <div className="glass-card rounded-xl p-8 md:p-10 w-full max-w-md">
          
// //           {/* Logo */}
// //           <div className="flex justify-center w-full">
// //             <Link href="/" className="flex items-center gap-2">
// //               <Image
// //                 src={logo}
// //                 alt="MBGIPU"
// //                 width={64}
// //                 height={64}
// //                 className="w-16 h-16"
// //                 priority
// //               />
// //             </Link>
// //           </div>

// //           {/* Title */}
// //           <div className="text-center mb-8">
// //             <h1 className="font-display text-3xl font-bold text-foreground">Admin Login</h1>
// //             <p className="text-muted-foreground font-body text-sm mt-2">Secure portal for authorized personnel</p>
// //           </div>

// //           {/* Form */}
// //           <form
// //             onSubmit={(e) => {
// //               e.preventDefault();
// //               // Add your login logic here later
// //               console.log("Login attempt:", { username, password });
// //             }}
// //             className="space-y-5"
// //           >
// //             {/* Username */}
// //             <div>
// //               <label className="flex items-center gap-2 text-sm font-body font-medium text-foreground mb-2">
// //                 <User className="w-4 h-4 text-primary" />
// //                 Username
// //               </label>
// //               <input
// //                 type="text"
// //                 placeholder="admin_id_01"
// //                 value={username}
// //                 onChange={(e) => setUsername(e.target.value)}
// //                 className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
// //               />
// //             </div>

// //             {/* Password */}
// //             <div>
// //               <div className="flex items-center justify-between mb-2">
// //                 <label className="flex items-center gap-2 text-sm font-body font-medium text-foreground">
// //                   <Lock className="w-4 h-4 text-primary" />
// //                   Password
// //                 </label>
// //                 <button 
// //                   type="button" 
// //                   className="text-xs font-body font-medium text-primary hover:underline"
// //                 >
// //                   Forgot Password?
// //                 </button>
// //               </div>
// //               <div className="relative">
// //                 <input
// //                   type={showPassword ? "text" : "password"}
// //                   placeholder="••••••••••"
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                 className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
// //                 />
// //                 <button
// //                   type="button"
// //                   onClick={() => setShowPassword(!showPassword)}
// //                   className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
// //                 >
// //                   {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Keep logged in */}
// //             <div className="flex items-center gap-2  !mb-2">
// //               <Checkbox id="keep-logged" className="border-border" />
// //               <label 
// //                 htmlFor="keep-logged" 
// //                 className="text-xs font-body text-muted-foreground cursor-pointer"
// //               >
// //                 Keep me logged in
// //               </label>
// //             </div>

// //             {/* Submit Button */}
// //             <Link href="/admin/dashboard" className="mt-4">
// //               <Button 
// //                 type="submit" 
// //                 className="w-full bg-gradient-crimson font-body font-semibold text-base py-6 rounded-lg"
// //               >
// //                 Login to Dashboard
// //               </Button>
// //             </Link>
// //           </form>

// //           {/* Disclaimer */}
// //           <p className="text-center text-xs text-muted-foreground font-body mt-6 leading-relaxed">
// //             This is a restricted administrative system. Unauthorized access is prohibited and may be subject to legal action.
// //           </p>

// //           {/* Social Icons */}
// //           {/* <div className="flex items-center justify-center gap-4 mt-4">
// //             <Globe className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
// //             <Github className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
// //             <Info className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
// //           </div> */}
// //         </div>
// //       </div>

// //       {/* Footer */}
// //       <div className="border-t border-border py-4 text-center">
// //         <p className="text-xs text-muted-foreground font-body">
// //           © 2026 MBGIPU Administrative Portal. All rights reserved.
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }




'use client';

import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import logo from "@/public/images/logo.svg";
import heroBg from "@/public/images/hero-bg.jpg";

import { authService } from '@/services/auth.service';

export default function AdminLogin() {
  const router = useRouter();

  const [adminName, setAdminName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminName.trim() || !password) {
      setError("Please enter admin name and password");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await authService.adminLogin(adminName.trim(), password);

      if (result.success) {
        // Redirect to admin dashboard
        router.push('/admin/dashboard');
      }
    } catch (err: any) {
      setError(err.message || "Invalid admin name or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Main Content */}
      <div
        className="flex-1 flex items-center justify-center px-4 py-12"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, hsla(345, 40%, 8%, 0.85), hsla(0, 0%, 8%, 0.95)),
            url(${heroBg.src})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="glass-card rounded-xl p-8 md:p-10 w-full max-w-md">
          
          {/* Logo */}
          <div className="flex justify-center w-full mb-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logo}
                alt="MBGIPU"
                width={64}
                height={64}
                className="w-16 h-16"
                priority
              />
            </Link>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl font-bold text-foreground">Admin Login</h1>
            <p className="text-muted-foreground font-body text-sm mt-2">Secure portal for authorized personnel</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Admin Name */}
            <div>
              <label className="flex items-center gap-2 text-sm font-body font-medium text-foreground mb-2">
                <User className="w-4 h-4 text-primary" />
                Admin Name
              </label>
              <input
                type="text"
                placeholder="admin_id_01"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center gap-2 text-sm font-body font-medium text-foreground">
                  <Lock className="w-4 h-4 text-primary" />
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Keep logged in */}
            <div className="flex items-center gap-2">
              <Checkbox id="keep-logged" className="border-border" />
              <label 
                htmlFor="keep-logged" 
                className="text-xs font-body text-muted-foreground cursor-pointer"
              >
                Keep me logged in
              </label>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-gradient-crimson font-body font-semibold text-base py-6 rounded-lg mt-4"
            >
              {loading ? "Logging in..." : "Login to Dashboard"}
            </Button>
          </form>

          {/* Disclaimer */}
          <p className="text-center text-xs text-muted-foreground font-body mt-8 leading-relaxed">
            This is a restricted administrative system.<br />
            Unauthorized access is prohibited and may be subject to legal action.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border py-4 text-center">
        <p className="text-xs text-muted-foreground font-body">
          © 2026 MBGIPU Administrative Portal. All rights reserved.
        </p>
      </div>
    </div>
  );
}



// 'use client';

// import { useState } from "react";
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from "next/navigation";
// import { User, Lock, Eye, EyeOff, Shield, AlertTriangle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";

// import logo from "@/public/images/logo.svg";
// import heroBg from "@/public/images/hero-bg.jpg";

// import { authService } from '@/services/auth.service';

// export default function AdminSignup() {
//   const router = useRouter();

//   const [adminName, setAdminName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [isSuperAdmin, setIsSuperAdmin] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     if (!adminName.trim()) {
//       setError("Admin name is required");
//       return;
//     }

//     if (password.length < 6) {
//       setError("Password must be at least 6 characters");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     setLoading(true);

//     try {
//       const result = await authService.adminSignUp(adminName.trim(), password, isSuperAdmin);

//       if (result.success) {
//         setSuccess(`Admin "${adminName}" created successfully!`);
//         setTimeout(() => {
//           router.push('/admin/dashboard');
//         }, 2000);
//       }
//     } catch (err: any) {
//       setError(err.message || "Failed to create admin account");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-background">
//       {/* Main Content */}
//       <div
//         className="flex-1 flex items-center justify-center px-4 py-12"
//         style={{
//           backgroundImage: `
//             linear-gradient(to bottom, hsla(345, 40%, 8%, 0.85), hsla(0, 0%, 8%, 0.95)),
//             url(${heroBg.src})
//           `,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="glass-card rounded-xl p-8 md:p-10 w-full max-w-md">
          
//           {/* Logo */}
//           <div className="flex justify-center w-full mb-6">
//             <Link href="/" className="flex items-center gap-2">
//               <Image
//                 src={logo}
//                 alt="MBGIPU"
//                 width={64}
//                 height={64}
//                 className="w-16 h-16"
//                 priority
//               />
//             </Link>
//           </div>

//           {/* Title */}
//           <div className="text-center mb-8">
//             <div className="flex items-center justify-center gap-2 mb-2">
//               <Shield className="w-6 h-6 text-primary" />
//               <h1 className="font-display text-3xl font-bold text-foreground">Create Admin</h1>
//             </div>
//             <p className="text-muted-foreground font-body text-sm">
//               Restricted access • Only for authorized personnel
//             </p>
//           </div>

//           {/* Error / Success Message */}
//           {error && (
//             <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3 rounded-lg mb-6 flex items-start gap-2">
//               <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
//               {error}
//             </div>
//           )}

//           {success && (
//             <div className="bg-green-500/10 border border-green-500/30 text-green-400 text-sm p-3 rounded-lg mb-6">
//               {success}
//             </div>
//           )}

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Admin Name */}
//             <div>
//               <label className="flex items-center gap-2 text-sm font-body font-medium text-foreground mb-2">
//                 <User className="w-4 h-4 text-primary" />
//                 Admin Username
//               </label>
//               <input
//                 type="text"
//                 placeholder="super_admin_01"
//                 value={adminName}
//                 onChange={(e) => setAdminName(e.target.value)}
//                 className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
//                 required
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label className="flex items-center gap-2 text-sm font-body font-medium text-foreground mb-2">
//                 <Lock className="w-4 h-4 text-primary" />
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="••••••••••"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
//                 >
//                   {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
//                 </button>
//               </div>
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="flex items-center gap-2 text-sm font-body font-medium text-foreground mb-2">
//                 <Lock className="w-4 h-4 text-primary" />
//                 Confirm Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   placeholder="••••••••••"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
//                 >
//                   {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
//                 </button>
//               </div>
//             </div>

//             {/* Super Admin Checkbox */}
//             <div className="flex items-center gap-2 pt-2">
//               <Checkbox 
//                 id="super-admin" 
//                 checked={isSuperAdmin}
//                 onCheckedChange={(checked) => setIsSuperAdmin(!!checked)}
//                 className="border-border"
//               />
//               <label 
//                 htmlFor="super-admin" 
//                 className="text-sm font-body text-foreground cursor-pointer flex items-center gap-1.5"
//               >
//                 Grant Super Admin privileges
//                 <span className="text-[10px] text-amber-500">(Full access)</span>
//               </label>
//             </div>

//             {/* Submit Button */}
//             <Button 
//               type="submit" 
//               disabled={loading || !adminName.trim() || !password || password !== confirmPassword}
//               className="w-full bg-gradient-crimson font-body font-semibold text-base py-6 rounded-lg mt-6"
//             >
//               {loading ? "Creating Admin..." : "Create Admin Account"}
//             </Button>
//           </form>

//           {/* Login Link */}
//           <div className="text-center mt-6">
//             <p className="text-sm text-muted-foreground font-body">
//               Already have an admin account?{" "}
//               <Link href="/admin-login" className="text-primary hover:underline font-medium">
//                 Login here
//               </Link>
//             </p>
//           </div>

//           {/* Disclaimer */}
//           <p className="text-center text-xs text-muted-foreground font-body mt-8 leading-relaxed">
//             This action creates a privileged account.<br />
//             Use with caution and only for authorized personnel.
//           </p>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="border-t border-border py-4 text-center">
//         <p className="text-xs text-muted-foreground font-body">
//           © 2026 MBGIPU Administrative Portal. All rights reserved.
//         </p>
//       </div>
//     </div>
//   );
// }