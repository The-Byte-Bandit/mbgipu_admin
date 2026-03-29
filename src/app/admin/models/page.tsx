// app/admin/models/page.tsx
'use client';

import Image from 'next/image';
import { Search, Filter, MoreHorizontal, Heart, Eye, Trash2, Edit, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contestants } from "@/data/contestants";

export default function AdminModels() {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            MODEL <span className="font-display italic text-gold">MANAGEMENT</span>
          </h1>
          <p className="text-sm text-muted-foreground font-body mt-1">Manage All Registered Contestants</p>
        </div>
        <Button className="bg-gradient-crimson font-body text-sm mt-3 md:mt-0">
          <UserPlus className="w-4 h-4 mr-1" /> Add New Model
        </Button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="flex items-center gap-2 bg-secondary border border-border rounded-lg px-4 py-2 flex-1">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            placeholder="Search by name, ID, or School..."
            className="bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none w-full"
          />
        </div>
        <Button variant="outline" className="font-body text-sm border-border">
          <Filter className="w-4 h-4 mr-1" /> Filter
        </Button>
      </div>

      {/* Models Table */}
      <div className="glass-card rounded-xl border border-border overflow-hidden">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-7 gap-4 text-[10px] font-body font-semibold tracking-[0.1em] text-muted-foreground p-4 border-b border-border">
          <span className="col-span-2">MODEL CANDIDATE</span>
          <span>STATUS</span>
          <span>REPRESENTING</span>
          <span>VOTES</span>
          <span>ENGAGEMENT</span>
          <span>ACTIONS</span>
        </div>

        {/* Table Rows */}
        {contestants.map((c) => (
          <div 
            key={c.id} 
            className="grid grid-cols-2 md:grid-cols-7 gap-4 items-center p-4 border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors"
          >
            {/* Model Info */}
            <div className="flex items-center gap-3 col-span-2">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-body font-medium text-foreground">{c.name}</p>
                <p className="text-[10px] text-muted-foreground font-body">
                  ID: MBG-{c.id.padStart(4, "0")}
                </p>
              </div>
            </div>

            {/* Status */}
            <span className="text-[10px] font-body font-semibold px-2 py-1 rounded w-fit bg-green-500/20 text-green-400">
              ACTIVE
            </span>

            {/* Representing */}
            <span className="text-sm font-body text-foreground hidden md:block">{c.representing}</span>

            {/* Votes */}
            <span className="text-sm font-body text-foreground hidden md:block">
              {c.votes.toLocaleString()}
            </span>

            {/* Engagement */}
            <span className="text-sm font-body text-foreground hidden md:flex items-center gap-1">
              <Heart className="w-3 h-3 text-primary" /> 
              {(Math.floor(Math.random() * 15000) / 1000).toFixed(1)}k
            </span>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-2">
              <button className="p-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-foreground">
                <Eye className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-foreground">
                <Edit className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-primary">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}