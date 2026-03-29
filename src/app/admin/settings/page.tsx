// app/admin/settings/page.tsx
'use client';

import { useState } from "react";
import { Calendar, CreditCard, Shield, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function AdminSettings() {
  const [paidVoting, setPaidVoting] = useState(true);
  const [liveLeaderboard, setLiveLeaderboard] = useState(false);
  const [publicGallery, setPublicGallery] = useState(true);

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
          GLOBAL <span className="font-display italic text-gold">SETTINGS</span>
        </h1>
        <p className="text-sm text-muted-foreground font-body mt-1">
          Configure Competition Parameters
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Voting Stages */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <h3 className="font-display text-lg font-bold text-foreground">VOTING STAGES CONFIGURATION</h3>
            </div>

            {/* Stage 1 - Selection */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-body font-semibold text-primary">01. SELECTION STAGE</p>
                <span className="text-[10px] font-body bg-green-500/20 text-green-400 px-3 py-1 rounded-full">ACTIVE WINDOW</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">START DATE & TIME</p>
                  <div className="flex items-center justify-between bg-secondary border border-border rounded-lg px-4 py-3">
                    <span className="text-sm font-body text-foreground">10/01/2024, 09:00 AM</span>
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">END DATE & TIME</p>
                  <div className="flex items-center justify-between bg-secondary border border-border rounded-lg px-4 py-3">
                    <span className="text-sm font-body text-foreground">11/15/2024, 11:59 PM</span>
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2 - Finals */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-body font-semibold text-primary">02. FINALS STAGE</p>
                <span className="text-[10px] font-body bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30">LOCKED</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">START DATE & TIME</p>
                  <div className="flex items-center justify-between bg-secondary border border-border rounded-lg px-4 py-3">
                    <span className="text-sm font-body text-foreground">12/01/2024, 12:00 AM</span>
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">END DATE & TIME</p>
                  <div className="flex items-center justify-between bg-secondary border border-border rounded-lg px-4 py-3">
                    <span className="text-sm font-body text-foreground">12/25/2024, 11:59 PM</span>
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Global Switches + Apply */}
        <div className="space-y-6">
          {/* Global Switches */}
          {/* <div className="glass-card rounded-xl p-6 border border-border">
            <h3 className="font-display text-lg font-bold text-foreground mb-6">GLOBAL SWITCHES</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-body font-semibold text-foreground">PAID VOTING</p>
                  <p className="text-[10px] text-muted-foreground font-body mt-0.5">ENABLE CREDIT TRANSACTIONS</p>
                </div>
                <Switch checked={paidVoting} onCheckedChange={setPaidVoting} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-body font-semibold text-foreground">LIVE LEADERBOARD</p>
                  <p className="text-[10px] text-muted-foreground font-body mt-0.5">SHOW REAL-TIME RANKINGS</p>
                </div>
                <Switch checked={liveLeaderboard} onCheckedChange={setLiveLeaderboard} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-body font-semibold text-foreground">PUBLIC GALLERY</p>
                  <p className="text-[10px] text-muted-foreground font-body mt-0.5">MODELS VISIBLE TO VISITORS</p>
                </div>
                <Switch checked={publicGallery} onCheckedChange={setPublicGallery} />
              </div>
            </div>
          </div> */}

          {/* Apply Changes */}
          <div className="glass-card rounded-xl p-6 border border-border bg-gradient-to-br from-primary/10 to-transparent">
            <h3 className="font-display text-2xl font-black italic text-gold mb-4">APPLY ROYAL CHANGES</h3>
            <Button className="w-full bg-gradient-crimson font-body font-semibold tracking-[0.15em] py-5 mb-3">
              UPDATE REGISTRY
            </Button>
            <Button variant="outline" className="w-full font-body font-semibold tracking-[0.15em] py-5 border-border">
              DISCARD EDITS
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Utility Cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {[
          { 
            icon: CreditCard, 
            title: "VOTING FEES", 
            desc: "Manage cost per vote and package tiers for international audience." 
          },
          { 
            icon: Shield, 
            title: "SECURITY PROTOCOLS", 
            desc: "Adjust bot detection sensitivity and IP restriction levels." 
          },
          { 
            icon: Mail, 
            title: "NOTIFICATION CENTER", 
            desc: "Automate stage transitions and contestant alerts." 
          },
        ].map((card) => (
          <div key={card.title} className="glass-card rounded-xl p-6 border border-border">
            <card.icon className="w-6 h-6 text-primary mb-3" />
            <p className="text-sm font-body font-bold text-foreground">{card.title}</p>
            <p className="text-xs text-muted-foreground font-body mt-1 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}