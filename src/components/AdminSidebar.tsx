// components/AdminSidebar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, BarChart3, Megaphone, Settings, LogOut, Crown } from "lucide-react";
import logo from "@/public/images/logo.png";




const navLinks = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
  { icon: Users, label: "Models", path: "/admin/models" },
  { icon: BarChart3, label: "Voting Analytics", path: "/admin/analytics" },
  // { icon: Crown, label: "Judges Panel", path: "/admin/judges" },
  { icon: Megaphone, label: "Announcements", path: "/admin/announcements" },
];

const prefLinks = [
  { icon: Settings, label: "Settings", path: "/admin/settings" },
  { icon: LogOut, label: "Logout", path: "/admin-login" },
];


export default function AdminSidebar() {
  const pathname = usePathname();

  const renderLink = (link: typeof navLinks[0]) => {
    const active = pathname === link.path;
    return (
      <Link
        key={link.label}
        href={link.path}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-body text-sm transition-colors ${
          active
            ? "bg-gradient-crimson text-primary-foreground font-medium"
            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
        }`}
      >
        <link.icon className="w-4 h-4" />
        {link.label}
      </Link>
    );
  };

  return (
    <aside className="hidden md:flex flex-col w-60 border-r border-border p-4 justify-between shrink-0">
      {/* <div> */}
        {/* Brand / Logo */}
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

        {/* Main Navigation */}
        <div className="space-y-1">
          {navLinks.map(renderLink)}
        </div>

        {/* Preferences Section */}
        <p className="text-[9px] text-muted-foreground font-body tracking-[0.2em] mt-auto mb-2 px-4">
          PREFERENCES
        </p>
        <div className="space-y-1">
          {prefLinks.map(renderLink)}
        </div>
      {/* </div> */}
    </aside>
  );
}