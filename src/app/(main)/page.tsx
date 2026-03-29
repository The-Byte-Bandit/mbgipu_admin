// app/(auth)/admin-login/page.tsx
'use client';

import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { User, Lock, Eye, EyeOff, Globe, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import logo from "@/public/images/logo.svg";
import heroBg from "@/public/images/hero-bg.jpg";



export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Main Content */}
      <div
        className="flex-1 flex items-center justify-center px-4 py-12 admin-login-bg"
        // style={{
        //   backgroundImage: `linear-gradient(to bottom, hsla(345, 40%, 8%, 0.85), hsla(0, 0%, 8%, 0.95)),
        //    url(${heroBg.src})
        //    )`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
         style={{
    backgroundImage: `
      linear-gradient(
        to bottom,
        hsla(345, 40%, 8%, 0.85),
        hsla(0, 0%, 8%, 0.95)
      ),
      url(${heroBg.src})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
      >
        <div className="glass-card rounded-xl p-8 md:p-10 w-full max-w-md">
          
          {/* Logo */}
          <div className="flex justify-center w-full">
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

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Add your login logic here later
              console.log("Login attempt:", { username, password });
            }}
            className="space-y-5"
          >
            {/* Username */}
            <div>
              <label className="flex items-center gap-2 text-sm font-body font-medium text-foreground mb-2">
                <User className="w-4 h-4 text-primary" />
                Username
              </label>
              <input
                type="text"
                placeholder="admin_id_01"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center gap-2 text-sm font-body font-medium text-foreground">
                  <Lock className="w-4 h-4 text-primary" />
                  Password
                </label>
                <button 
                  type="button" 
                  className="text-xs font-body font-medium text-primary hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
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
            <div className="flex items-center gap-2  !mb-2">
              <Checkbox id="keep-logged" className="border-border" />
              <label 
                htmlFor="keep-logged" 
                className="text-xs font-body text-muted-foreground cursor-pointer"
              >
                Keep me logged in
              </label>
            </div>

            {/* Submit Button */}
            <Link href="/admin/dashboard" className="mt-4">
              <Button 
                type="submit" 
                className="w-full bg-gradient-crimson font-body font-semibold text-base py-6 rounded-lg"
              >
                Login to Dashboard
              </Button>
            </Link>
          </form>

          {/* Disclaimer */}
          <p className="text-center text-xs text-muted-foreground font-body mt-6 leading-relaxed">
            This is a restricted administrative system. Unauthorized access is prohibited and may be subject to legal action.
          </p>

          {/* Social Icons */}
          {/* <div className="flex items-center justify-center gap-4 mt-4">
            <Globe className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
            <Github className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
            <Info className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
          </div> */}
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