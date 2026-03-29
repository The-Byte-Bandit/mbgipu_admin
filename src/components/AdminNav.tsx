// components/AdminNav.tsx
'use client';

import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, Search, Menu } from "lucide-react";
import { LayoutDashboard, Users, BarChart3, Megaphone, Settings, LogOut, Crown } from "lucide-react";

import contestantImg from "@/public/images/contestant-1.jpg";   // we'll fix this below
import logo from "@/public/images/logo.png";

const mobileLinks = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
  { icon: Users, label: "Models", path: "/admin/models" },
  { icon: BarChart3, label: "Voting Analytics", path: "/admin/analytics" },
  { icon: Megaphone, label: "Announcements", path: "/admin/announcements" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
  { icon: LogOut, label: "Logout", path: "/admin-login" },
];

export default function AdminNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();   // ← Next.js equivalent of useLocation()

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-md z-50">
        <div className="flex items-center justify-between h-14 px-4">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-muted-foreground" 
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Search Bar */}
          {/* <div className="hidden md:flex items-center gap-2 bg-secondary rounded-lg px-3 py-2 w-72">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              placeholder="Search models, votes..."
              className="bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none w-full"
            />
          </div> */}

          {/* Right Side */}
          <div className="flex items-center gap-4 ml-auto">
            {/* <Bell className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" /> */}
            
            <div className="flex items-center gap-2">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-body font-semibold text-foreground">Alexander Thorne</p>
                <p className="text-[9px] text-primary font-body tracking-wider">SYSTEM ADMINISTRATOR</p>
              </div>
              <div className="relative w-8 h-8">
                <Image
                  src={contestantImg}
                  alt="Admin"
                  fill
                  className="rounded-full object-cover border-2 border-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-border bg-background p-4 space-y-1 z-40">
        <Link href="/" className="flex items-center gap-2 mb-6">
          <Image 
            src={logo}
            alt="MBGIPU" 
            width={60} 
            height={60} 
            loading='lazy'
          />
          <div>
            {/* <span className="font-display font-bold text-sm text-foreground tracking-wider block">
              MBGIPU
            </span> */}
            <span className="text-[9px] text-primary font-body tracking-[0.2em]">
              ADMIN CONTROL
            </span>
          </div>
        </Link>

          {mobileLinks.map((link) => {
            const active = pathname === link.path;
            return (
              <Link
                key={link.label}
                href={link.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-body text-sm transition-colors ${
                  active 
                    ? "bg-gradient-crimson text-primary-foreground font-medium" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}