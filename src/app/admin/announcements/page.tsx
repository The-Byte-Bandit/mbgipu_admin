// app/admin/announcements/page.tsx
'use client';

import { useState } from "react";
import Image from 'next/image';
import { Bold, Italic, Underline, List, Link2, Image as ImageIcon, Eye, X, Megaphone, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const archives = [
  { 
    status: "ACTIVE", 
    statusColor: "bg-primary text-primary-foreground", 
    title: "Voting Phase 2 Now Live", 
    desc: "Cast your ballots for the semi-finalists across all categories. Premium members get double weight.", 
    date: "ISSUED: 12 OCT 2024", 
    views: "12.4K" 
  },
  { 
    status: "EXPIRED", 
    statusColor: "bg-muted text-muted-foreground", 
    title: "Maintenance Schedule Update", 
    desc: "The portal will be undergoing routine royal enhancements between 02:00 and 04:00 GMT.", 
    date: "ISSUED: 08 OCT 2024", 
    views: "8.1K" 
  },
  { 
    status: "ARCHIVED", 
    statusColor: "bg-gold/20 text-gold", 
    title: "Season 4 Call for Entries", 
    desc: "Applications for the next edition of MBGIPU are now being accepted globally.", 
    date: "ISSUED: 01 SEP 2024", 
    views: "45.2K" 
  },
];

export default function AdminAnnouncements() {
  const [autoExpiring, setAutoExpiring] = useState(true);

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-8">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            THE REGAL
            <span className="font-display italic text-gold"> BROADCAST</span>
          </h1>
          <p className="text-sm text-muted-foreground font-body mt-1 capitalize">
            Manage Broadcasts
          </p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          {/* <Button variant="outline" className="font-body text-sm tracking-[0.1em] border-border">DISCARD DRAFT</Button> */}
          <Button className="bg-gradient-crimson font-body text-sm tracking-[0.1em]">Publish</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Left: Editor */}
        <div className="lg:col-span-2 space-y-4">
          {/* Title Input */}
          <div className="glass-card rounded-xl p-5 border border-border">
            <p className="text-[10px] font-body font-semibold text-primary tracking-[0.15em] mb-3">ANNOUNCEMENT TITLE</p>
            <input
              placeholder="Enter the headline for this broadcast..."
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Rich Text Editor */}
          <div className="glass-card rounded-xl p-5 border border-border">
            <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
              {/* <div className="flex items-center gap-3">
                {[Bold, Italic, Underline, List, Link2, ImageIcon].map((Icon, i) => (
                  <button key={i} className="text-muted-foreground hover:text-foreground p-1">
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div> */}
              <span className="text-[10px] font-body text-muted-foreground tracking-wider">WORD COUNT: 0</span>
            </div>
            <textarea
              rows={10}
              placeholder="Compose the latest announcement for the MBGIPU community..."
              className="w-full bg-transparent font-body text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none"
            />
          </div>

          {/* Display Type */}
          {/* <div className="grid grid-cols-2 gap-4">
            <div className="glass-card rounded-xl p-5 border border-border">
              <div className="flex items-center justify-between mb-2">
                <Megaphone className="w-5 h-5 text-primary" />
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <p className="text-sm font-body font-bold text-foreground">STICKY BANNER</p>
              <p className="text-[10px] text-muted-foreground font-body mt-1">Appears at the top of every page.</p>
            </div>
            <div className="glass-card rounded-xl p-5 border border-border">
              <Monitor className="w-5 h-5 text-muted-foreground mb-2" />
              <p className="text-sm font-body font-bold text-foreground">MODAL POPUP</p>
              <p className="text-[10px] text-muted-foreground font-body mt-1">A cinematic entry overlay.</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Historical Archives */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-display md:text-2xl font-black text-foreground">
              HISTORICAL <span className="font-display italic text-gold">ARCHIVES</span>
            </h2>
            <p className="text-[10px] text-muted-foreground font-body tracking-[0.15em] mt-1">PREVIOUSLY ISSUED COMMANDS</p>
          </div>
          <button className="text-xs font-body font-semibold text-primary hover:underline tracking-wider">VIEW ALL RECORDS</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {archives.map((a, i) => (
            <div key={i} className="glass-card rounded-xl p-5 border border-border">
              <span className={`text-[9px] font-body font-bold px-2 py-1 rounded ${a.statusColor}`}>
                {a.status}
              </span>
              <h4 className="font-display font-bold text-foreground mt-3">{a.title}</h4>
              <p className="text-xs text-muted-foreground font-body mt-2 leading-relaxed">{a.desc}</p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                <span className="text-[9px] text-muted-foreground font-body tracking-wider">{a.date}</span>
                <span className="text-xs font-body text-muted-foreground flex items-center gap-1">
                  <Eye className="w-3 h-3" /> {a.views}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}