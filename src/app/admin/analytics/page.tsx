// app/admin/analytics/page.tsx
'use client';

import Image from 'next/image';
import { TrendingUp, TrendingDown, BarChart3, PieChart, Users, Heart, DollarSign, Globe } from "lucide-react";
import { contestants } from "@/data/contestants";

const metrics = [
  { icon: Heart, label: "Total Votes Today", value: "8,420", change: "+18%", up: true },
  { icon: DollarSign, label: "Revenue Today", value: "$2,840", change: "+12%", up: true },
  { icon: Users, label: " Voters", value: "3,210", change: "-3%", up: false },
  { icon: Globe, label: "Countries", value: "42", change: "+5", up: true },
];

const weekData = [
  { day: "MON", votes: 45, revenue: 25 },
  { day: "TUE", votes: 60, revenue: 35 },
  { day: "WED", votes: 50, revenue: 30 },
  { day: "THU", votes: 75, revenue: 45 },
  { day: "FRI", votes: 85, revenue: 55 },
  { day: "SAT", votes: 95, revenue: 65 },
  { day: "SUN", votes: 100, revenue: 70 },
];

const schools = [
  { name: "Unport", pct: 42, color: "bg-primary" },
  { name: "Ignatius", pct: 28, color: "bg-gold" },
  { name: "Ust", pct: 20, color: "bg-green-400" },
];

export default function AdminAnalytics() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
          VOTING <span className="font-display italic text-gold">ANALYTICS</span>
        </h1>
        <p className="text-sm text-muted-foreground font-body mt-1 title">Real-time Voting Data & Insights</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((m) => (
          <div key={m.label} className="glass-card rounded-xl p-5 border border-border">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <m.icon className="w-5 h-5 text-primary" />
              </div>
              <span className={`text-[10px] font-body font-semibold flex items-center gap-0.5 ${m.up ? "text-green-400" : "text-red-400"}`}>
                {m.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {m.change}
              </span>
            </div>
            <p className="text-xs text-muted-foreground font-body">{m.label}</p>
            <p className="font-display text-2xl font-bold text-foreground mt-1">{m.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Weekly Trend */}
        <div className="lg:col-span-2 glass-card rounded-xl p-6 border border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <h3 className="font-display text-lg font-bold text-foreground">Weekly Voting Trend</h3>
            </div>
            <span className="text-xs font-body text-muted-foreground bg-secondary px-3 py-1 rounded-full">This Week</span>
          </div>

          <div className="flex items-end justify-between gap-2 h-44">
            {weekData.map((d) => (
              <div key={d.day} className="flex flex-col items-center gap-1 flex-1">
                <div className="flex gap-1 items-end w-full justify-center">
                  <div className="w-3 bg-gold/40 rounded-t" style={{ height: `${d.revenue}%` }} />
                  <div className="w-3 bg-gradient-crimson rounded-t" style={{ height: `${d.votes}%` }} />
                </div>
                <span className="text-[10px] font-body text-muted-foreground mt-2">{d.day}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-crimson rounded" />
              <span className="text-[10px] font-body text-muted-foreground">Votes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gold/40 rounded" />
              <span className="text-[10px] font-body text-muted-foreground">Revenue</span>
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="glass-card rounded-xl p-6 border border-border">
          <div className="flex items-center gap-2 mb-6">
            <PieChart className="w-5 h-5 text-primary" />
            <h3 className="font-display text-lg font-bold text-foreground">School Split</h3>
          </div>
          <div className="space-y-4">
            {schools.map((cat) => (
              <div key={cat.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-body text-foreground">{cat.name}</span>
                  <span className="text-xs font-body font-bold text-foreground">{cat.pct}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className={`${cat.color} h-2 rounded-full`} style={{ width: `${cat.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Performers */}
      <div className="glass-card rounded-xl p-6 border border-border">
        <h3 className="font-display text-lg font-bold text-foreground mb-4">Top Performers This Week</h3>
        <div className="hidden md:grid grid-cols-5 gap-4 text-[10px] font-body font-semibold tracking-[0.1em] text-muted-foreground pb-3 border-b border-border mb-3">
          <span>RANK</span>
          <span>CONTESTANT</span>
          <span>REPRESENTING</span>
          <span>WEEKLY VOTES</span>
          <span>TREND</span>
        </div>

        {contestants
          .sort((a, b) => b.votes - a.votes)
          .slice(0, 5)
          .map((c, i) => (
            <div key={c.id} className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center py-3 border-b border-border/50 last:border-0">
              <span className="font-display text-xl font-bold text-gold">#{i + 1}</span>

              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-body font-medium text-foreground">{c.name}</span>
              </div>

              <span className="text-sm font-body text-muted-foreground hidden md:block">{c.representing}</span>

              <span className="text-sm font-body font-bold text-foreground hidden md:block">
                {c.votes.toLocaleString()}
              </span>

              <span className="text-green-400 hidden md:flex items-center gap-1 text-xs font-body">
                <TrendingUp className="w-3 h-3" /> +{Math.floor(Math.random() * 20 + 5)}%
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}