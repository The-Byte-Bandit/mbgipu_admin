// app/admin/dashboard/page.tsx
'use client';

import Image from 'next/image';
import { Heart, Users, Clock, DollarSign, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import contestant1 from "@/public/images/contestant-1.jpg";
import contestant2 from "@/public/images/contestant-2.jpg";
import contestant3 from "@/public/images/contestant-3.jpg";
import contestant4 from "@/public/images/contestant-4.jpg";
import contestant5 from "@/public/images/contestant-5.jpg";
import contestant6 from "@/public/images/contestant-6.jpg";

const stats = [
  { icon: Heart, label: "Total Votes", value: "124,500", badge: "+12.5%", badgeColor: "text-green-400" },
  { icon: Users, label: "Active Models", value: "42", badge: "+3 New", badgeColor: "text-green-400" },
  { icon: Clock, label: "Days Remaining", value: "15", badge: "Finals", badgeColor: "text-muted-foreground" },
  { icon: DollarSign, label: "Total Revenue", value: "$52,400", badge: "+8%", badgeColor: "text-green-400" },
];

const chartData = [
  { day: "MON", h1: 30, h2: 20 },
  { day: "TUE", h1: 45, h2: 25 },
  { day: "WED", h1: 35, h2: 30 },
  { day: "THU", h1: 50, h2: 20 },
  { day: "FRI", h1: 70, h2: 40 },
  { day: "SAT", h1: 85, h2: 55 },
  { day: "SUN", h1: 90, h2: 60 },
];

const topContenders = [
  { name: "Amina Okoro", votes: "28k", img: contestant1 },
  { name: "Zola Mbeki", votes: "24.5k", img: contestant2 },
  { name: "Ifeoma Ndiaye", votes: "21k", img: contestant3 },
];

const models = [
  { name: "Nia Tadesse", id: "MBG-4402", status: "ACTIVE", category: "Runway", engagement: "12.4k", lastActive: "2 mins ago", img: contestant4 },
  { name: "Elena Richardson", id: "MBG-4201", status: "ACTIVE", category: "Photogenic", engagement: "9.8k", lastActive: "15 mins ago", img: contestant1 },
  { name: "Sophia Martinez", id: "MBG-4305", status: "PENDING", category: "Talent", engagement: "7.2k", lastActive: "1 hour ago", img: contestant3 },
];

export default function AdminDashboard() {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Executive Overview</h1>
          <p className="text-sm text-muted-foreground font-body mt-1">Real-time statistics for MBGIPU Season 1</p>
        </div>
        <div className="flex gap-2 mt-3 md:mt-0">
          {/* <Button variant="outline" className="font-body text-sm border-border">Export Data</Button> */}
          <Button className="bg-gradient-crimson font-body text-sm">
            <Users className="w-4 h-4 mr-1" /> Add Model
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card rounded-xl p-5 border border-border">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <span className={`text-[10px] font-body font-semibold ${stat.badgeColor}`}>{stat.badge}</span>
            </div>
            <p className="text-xs text-muted-foreground font-body">{stat.label}</p>
            <p className="font-display text-2xl font-bold text-foreground mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Chart + Top Contenders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Voting Velocity Chart */}
        <div className="lg:col-span-2 glass-card rounded-xl p-6 border border-border">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">Voting Velocity</h3>
              <p className="text-xs text-muted-foreground font-body">Weekly traffic distribution</p>
            </div>
            <span className="text-xs font-body text-muted-foreground bg-secondary px-3 py-1 rounded-full cursor-pointer">
              Last 7 Days ▾
            </span>
          </div>

          <div className="flex items-end justify-between gap-2 h-44">
            {chartData.map((d) => (
              <div key={d.day} className="flex flex-col items-center gap-1 flex-1">
                <div className="flex gap-1 items-end w-full justify-center">
                  <div className="w-3 bg-primary/30 rounded-t" style={{ height: `${d.h2}%` }} />
                  <div className="w-3 bg-gradient-crimson rounded-t" style={{ height: `${d.h1}%` }} />
                </div>
                <span className="text-[10px] font-body text-muted-foreground mt-2">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Contenders */}
        <div className="glass-card rounded-xl p-6 border border-border">
          <h3 className="font-display text-lg font-bold text-foreground mb-4">Top Contenders</h3>
          <div className="space-y-4">
            {topContenders.map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={c.img}
                    alt={c.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-body font-medium text-foreground">{c.name}</p>
                  <div className="w-full bg-secondary rounded-full h-1.5 mt-1">
                    <div className="bg-gradient-crimson h-1.5 rounded-full" style={{ width: `${80 - i * 15}%` }} />
                  </div>
                </div>
                <span className="text-sm font-body font-bold text-primary">{c.votes}</span>
              </div>
            ))}
          </div>
          <button className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] hover:text-foreground mt-4 block">
            VIEW LEADERBOARD
          </button>
        </div>
      </div>

      {/* Model Management Table */}
      <div className="glass-card rounded-xl p-6 border border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-lg font-bold text-foreground">Model Management</h3>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">−</button>
            <button className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">⋯</button>
          </div>
        </div>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-6 gap-4 text-[10px] font-body font-semibold tracking-[0.1em] text-muted-foreground pb-3 border-b border-border mb-3">
          <span>MODEL CANDIDATE</span>
          <span>STATUS</span>
          <span>CATEGORY</span>
          <span>ENGAGEMENT</span>
          <span>LAST ACTIVE</span>
          <span>ACTION</span>
        </div>

        {/* Table Rows */}
        {models.map((m, i) => (
          <div key={i} className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center py-3 border-b border-border/50 last:border-0">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-body font-medium text-foreground">{m.name}</p>
                <p className="text-[10px] text-muted-foreground font-body">ID: {m.id}</p>
              </div>
            </div>

            <span className={`text-[10px] font-body font-semibold px-2 py-1 rounded w-fit ${
              m.status === "ACTIVE" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
            }`}>
              {m.status}
            </span>

            <span className="text-sm font-body text-foreground hidden md:block">{m.category}</span>

            <span className="text-sm font-body text-foreground hidden md:flex items-center gap-1">
              <Heart className="w-3 h-3 text-primary" /> {m.engagement}
            </span>

            <span className="text-sm font-body text-muted-foreground hidden md:block">{m.lastActive}</span>

            <button className="text-muted-foreground hover:text-foreground hidden md:block">
              <Eye className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}