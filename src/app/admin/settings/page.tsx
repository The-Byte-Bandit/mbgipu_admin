// // // // // // // // // // // app/admin/settings/page.tsx
// // // // // // // // // // 'use client';

// // // // // // // // // // import { useState } from "react";
// // // // // // // // // // import { Calendar, CreditCard, Shield, Mail } from "lucide-react";
// // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // import { Switch } from "@/components/ui/switch";

// // // // // // // // // // export default function AdminSettings() {
// // // // // // // // // //   const [paidVoting, setPaidVoting] = useState(true);
// // // // // // // // // //   const [liveLeaderboard, setLiveLeaderboard] = useState(false);
// // // // // // // // // //   const [publicGallery, setPublicGallery] = useState(true);

// // // // // // // // // //   return (
// // // // // // // // // //     <div>
// // // // // // // // // //       {/* Header */}
// // // // // // // // // //       <div className="mb-8">
// // // // // // // // // //         <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
// // // // // // // // // //           GLOBAL <span className="font-display italic text-gold">SETTINGS</span>
// // // // // // // // // //         </h1>
// // // // // // // // // //         <p className="text-sm text-muted-foreground font-body mt-1">
// // // // // // // // // //           Configure Competition Parameters
// // // // // // // // // //         </p>
// // // // // // // // // //       </div>

// // // // // // // // // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // // // // // // // //         {/* Left: Voting Stages */}
// // // // // // // // // //         <div className="lg:col-span-2 space-y-6">
// // // // // // // // // //           <div className="glass-card rounded-xl p-6 border border-border">
// // // // // // // // // //             <div className="flex items-center gap-2 mb-6">
// // // // // // // // // //               <div className="w-2 h-2 bg-primary rounded-full" />
// // // // // // // // // //               <h3 className="font-display text-lg font-bold text-foreground">VOTING STAGES CONFIGURATION</h3>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Stage 1 - Selection */}
// // // // // // // // // //             <div className="mb-8">
// // // // // // // // // //               <div className="flex items-center justify-between mb-4">
// // // // // // // // // //                 <p className="text-sm font-body font-semibold text-primary">01. SELECTION STAGE</p>
// // // // // // // // // //                 <span className="text-[10px] font-body bg-green-500/20 text-green-400 px-3 py-1 rounded-full">ACTIVE WINDOW</span>
// // // // // // // // // //               </div>
// // // // // // // // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // // // // //                 <div>
// // // // // // // // // //                   <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">START DATE & TIME</p>
// // // // // // // // // //                   <div className="flex items-center justify-between bg-secondary border border-border rounded-lg px-4 py-3">
// // // // // // // // // //                     <span className="text-sm font-body text-foreground">10/01/2024, 09:00 AM</span>
// // // // // // // // // //                     <Calendar className="w-4 h-4 text-muted-foreground" />
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div>
// // // // // // // // // //                   <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">END DATE & TIME</p>
// // // // // // // // // //                   <div className="flex items-center justify-between bg-secondary border border-border rounded-lg px-4 py-3">
// // // // // // // // // //                     <span className="text-sm font-body text-foreground">11/15/2024, 11:59 PM</span>
// // // // // // // // // //                     <Calendar className="w-4 h-4 text-muted-foreground" />
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Stage 2 - Finals */}
// // // // // // // // // //             <div>
// // // // // // // // // //               <div className="flex items-center justify-between mb-4">
// // // // // // // // // //                 <p className="text-sm font-body font-semibold text-primary">02. FINALS STAGE</p>
// // // // // // // // // //                 <span className="text-[10px] font-body bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30">LOCKED</span>
// // // // // // // // // //               </div>
// // // // // // // // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // // // // //                 <div>
// // // // // // // // // //                   <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">START DATE & TIME</p>
// // // // // // // // // //                   <div className="flex items-center justify-between bg-secondary border border-border rounded-lg px-4 py-3">
// // // // // // // // // //                     <span className="text-sm font-body text-foreground">12/01/2024, 12:00 AM</span>
// // // // // // // // // //                     <Calendar className="w-4 h-4 text-muted-foreground" />
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div>
// // // // // // // // // //                   <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">END DATE & TIME</p>
// // // // // // // // // //                   <div className="flex items-center justify-between bg-secondary border border-border rounded-lg px-4 py-3">
// // // // // // // // // //                     <span className="text-sm font-body text-foreground">12/25/2024, 11:59 PM</span>
// // // // // // // // // //                     <Calendar className="w-4 h-4 text-muted-foreground" />
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Right: Global Switches + Apply */}
// // // // // // // // // //         <div className="space-y-6">
// // // // // // // // // //           {/* Global Switches */}
// // // // // // // // // //           {/* <div className="glass-card rounded-xl p-6 border border-border">
// // // // // // // // // //             <h3 className="font-display text-lg font-bold text-foreground mb-6">GLOBAL SWITCHES</h3>
// // // // // // // // // //             <div className="space-y-6">
// // // // // // // // // //               <div className="flex items-center justify-between">
// // // // // // // // // //                 <div>
// // // // // // // // // //                   <p className="text-sm font-body font-semibold text-foreground">PAID VOTING</p>
// // // // // // // // // //                   <p className="text-[10px] text-muted-foreground font-body mt-0.5">ENABLE CREDIT TRANSACTIONS</p>
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <Switch checked={paidVoting} onCheckedChange={setPaidVoting} />
// // // // // // // // // //               </div>

// // // // // // // // // //               <div className="flex items-center justify-between">
// // // // // // // // // //                 <div>
// // // // // // // // // //                   <p className="text-sm font-body font-semibold text-foreground">LIVE LEADERBOARD</p>
// // // // // // // // // //                   <p className="text-[10px] text-muted-foreground font-body mt-0.5">SHOW REAL-TIME RANKINGS</p>
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <Switch checked={liveLeaderboard} onCheckedChange={setLiveLeaderboard} />
// // // // // // // // // //               </div>

// // // // // // // // // //               <div className="flex items-center justify-between">
// // // // // // // // // //                 <div>
// // // // // // // // // //                   <p className="text-sm font-body font-semibold text-foreground">PUBLIC GALLERY</p>
// // // // // // // // // //                   <p className="text-[10px] text-muted-foreground font-body mt-0.5">MODELS VISIBLE TO VISITORS</p>
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <Switch checked={publicGallery} onCheckedChange={setPublicGallery} />
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div> */}

// // // // // // // // // //           {/* Apply Changes */}
// // // // // // // // // //           <div className="glass-card rounded-xl p-6 border border-border bg-gradient-to-br from-primary/10 to-transparent">
// // // // // // // // // //             <h3 className="font-display text-2xl font-black italic text-gold mb-4">APPLY CHANGES</h3>
// // // // // // // // // //             <Button className="w-full bg-gradient-crimson font-body font-semibold tracking-[0.15em] py-5 mb-3">
// // // // // // // // // //               UPDATE REGISTRY
// // // // // // // // // //             </Button>
// // // // // // // // // //             <Button variant="outline" className="w-full font-body font-semibold tracking-[0.15em] py-5 border-border">
// // // // // // // // // //               DISCARD EDITS
// // // // // // // // // //             </Button>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Bottom Utility Cards */}
// // // // // // // // // //       {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
// // // // // // // // // //         {[
// // // // // // // // // //           { 
// // // // // // // // // //             icon: CreditCard, 
// // // // // // // // // //             title: "VOTING FEES", 
// // // // // // // // // //             desc: "Manage cost per vote and package tiers for international audience." 
// // // // // // // // // //           },
// // // // // // // // // //           { 
// // // // // // // // // //             icon: Shield, 
// // // // // // // // // //             title: "SECURITY PROTOCOLS", 
// // // // // // // // // //             desc: "Adjust bot detection sensitivity and IP restriction levels." 
// // // // // // // // // //           },
// // // // // // // // // //           { 
// // // // // // // // // //             icon: Mail, 
// // // // // // // // // //             title: "NOTIFICATION CENTER", 
// // // // // // // // // //             desc: "Automate stage transitions and contestant alerts." 
// // // // // // // // // //           },
// // // // // // // // // //         ].map((card) => (
// // // // // // // // // //           <div key={card.title} className="glass-card rounded-xl p-6 border border-border">
// // // // // // // // // //             <card.icon className="w-6 h-6 text-primary mb-3" />
// // // // // // // // // //             <p className="text-sm font-body font-bold text-foreground">{card.title}</p>
// // // // // // // // // //             <p className="text-xs text-muted-foreground font-body mt-1 leading-relaxed">{card.desc}</p>
// // // // // // // // // //           </div>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div> */}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }



// // // // // // // // // 'use client';

// // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // import { Calendar } from "lucide-react";
// // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // import { Input } from "@/components/ui/input";
// // // // // // // // // import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// // // // // // // // // import { settingsService } from '@/services/settings.service';

// // // // // // // // // export default function AdminSettings() {
// // // // // // // // //   const queryClient = useQueryClient();

// // // // // // // // //   const { data: settings, isLoading } = useQuery({
// // // // // // // // //     queryKey: ['competition-settings'],
// // // // // // // // //     queryFn: settingsService.getSettings,
// // // // // // // // //   });

// // // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // // //     selection_stage_start: '',
// // // // // // // // //     selection_stage_end: '',
// // // // // // // // //     finals_stage_start: '',
// // // // // // // // //     finals_stage_end: '',
// // // // // // // // //     min_votes_for_selection: 1000,
// // // // // // // // //   });

// // // // // // // // //   // Convert UTC → WAT for display
// // // // // // // // //   const utcToWAT = (utcString: string | null) => {
// // // // // // // // //     if (!utcString) return '';
// // // // // // // // //     const date = new Date(utcString);
// // // // // // // // //     date.setHours(date.getHours() + 1); // WAT = UTC + 1
// // // // // // // // //     return date.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:mm"
// // // // // // // // //   };

// // // // // // // // //   // Convert WAT → UTC before saving
// // // // // // // // //   const watToUTC = (watString: string) => {
// // // // // // // // //     if (!watString) return null;
// // // // // // // // //     const date = new Date(watString);
// // // // // // // // //     date.setHours(date.getHours() - 1); // Convert back to UTC
// // // // // // // // //     return date.toISOString();
// // // // // // // // //   };

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (settings) {
// // // // // // // // //       setFormData({
// // // // // // // // //         selection_stage_start: utcToWAT(settings.selection_stage_start),
// // // // // // // // //         selection_stage_end: utcToWAT(settings.selection_stage_end),
// // // // // // // // //         finals_stage_start: utcToWAT(settings.finals_stage_start),
// // // // // // // // //         finals_stage_end: utcToWAT(settings.finals_stage_end),
// // // // // // // // //         min_votes_for_selection: settings.min_votes_for_selection || 1000,
// // // // // // // // //       });
// // // // // // // // //     }
// // // // // // // // //   }, [settings]);

// // // // // // // // //   const updateMutation = useMutation({
// // // // // // // // //     mutationFn: (payload: any) => settingsService.updateSettings(payload),
// // // // // // // // //     onSuccess: () => {
// // // // // // // // //       queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
// // // // // // // // //       alert("Settings saved successfully! Timers are now active in WAT.");
// // // // // // // // //     },
// // // // // // // // //   });

// // // // // // // // //   const handleSave = () => {
// // // // // // // // //     const payload = {
// // // // // // // // //       selection_stage_start: watToUTC(formData.selection_stage_start),
// // // // // // // // //       selection_stage_end: watToUTC(formData.selection_stage_end),
// // // // // // // // //       finals_stage_start: watToUTC(formData.finals_stage_start),
// // // // // // // // //       finals_stage_end: watToUTC(formData.finals_stage_end),
// // // // // // // // //       min_votes_for_selection: formData.min_votes_for_selection,
// // // // // // // // //     };

// // // // // // // // //     updateMutation.mutate(payload);
// // // // // // // // //   };

// // // // // // // // //   if (isLoading) return <div className="p-8 text-center">Loading settings...</div>;

// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <div className="mb-8">
// // // // // // // // //         <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
// // // // // // // // //           GLOBAL <span className="font-display italic text-gold">SETTINGS</span>
// // // // // // // // //         </h1>
// // // // // // // // //         <p className="text-sm text-muted-foreground font-body mt-1">
// // // // // // // // //           All times are in WAT (West Africa Time, UTC+1)
// // // // // // // // //         </p>
// // // // // // // // //       </div>

// // // // // // // // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // // // // // // //         <div className="lg:col-span-2 space-y-6">
// // // // // // // // //           {/* Selection Stage */}
// // // // // // // // //           <div className="glass-card rounded-xl p-6 border border-border">
// // // // // // // // //             <div className="flex items-center justify-between mb-4">
// // // // // // // // //               <p className="text-sm font-body font-semibold text-primary">01. SELECTION STAGE</p>
// // // // // // // // //             </div>
// // // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // // // //               <div>
// // // // // // // // //                 <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">START DATE & TIME (WAT)</p>
// // // // // // // // //                 <input
// // // // // // // // //                   type="datetime-local"
// // // // // // // // //                   value={formData.selection_stage_start}
// // // // // // // // //                   onChange={(e) => setFormData({ ...formData, selection_stage_start: e.target.value })}
// // // // // // // // //                   className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm"
// // // // // // // // //                 />
// // // // // // // // //               </div>
// // // // // // // // //               <div>
// // // // // // // // //                 <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">END DATE & TIME (WAT)</p>
// // // // // // // // //                 <input
// // // // // // // // //                   type="datetime-local"
// // // // // // // // //                   value={formData.selection_stage_end}
// // // // // // // // //                   onChange={(e) => setFormData({ ...formData, selection_stage_end: e.target.value })}
// // // // // // // // //                   className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm"
// // // // // // // // //                 />
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Finals Stage */}
// // // // // // // // //           <div className="glass-card rounded-xl p-6 border border-border">
// // // // // // // // //             <div className="flex items-center justify-between mb-4">
// // // // // // // // //               <p className="text-sm font-body font-semibold text-primary">02. FINALS STAGE</p>
// // // // // // // // //             </div>
// // // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // // // //               <div>
// // // // // // // // //                 <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">START DATE & TIME (WAT)</p>
// // // // // // // // //                 <input
// // // // // // // // //                   type="datetime-local"
// // // // // // // // //                   value={formData.finals_stage_start}
// // // // // // // // //                   onChange={(e) => setFormData({ ...formData, finals_stage_start: e.target.value })}
// // // // // // // // //                   className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm"
// // // // // // // // //                 />
// // // // // // // // //               </div>
// // // // // // // // //               <div>
// // // // // // // // //                 <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">END DATE & TIME (WAT)</p>
// // // // // // // // //                 <input
// // // // // // // // //                   type="datetime-local"
// // // // // // // // //                   value={formData.finals_stage_end}
// // // // // // // // //                   onChange={(e) => setFormData({ ...formData, finals_stage_end: e.target.value })}
// // // // // // // // //                   className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm"
// // // // // // // // //                 />
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Minimum Votes */}
// // // // // // // // //           <div className="glass-card rounded-xl p-6 border border-border">
// // // // // // // // //             <h3 className="font-display text-lg font-bold text-foreground mb-4">SELECTION STAGE REQUIREMENTS</h3>
// // // // // // // // //             <div>
// // // // // // // // //               <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">MINIMUM VOTES REQUIRED TO QUALIFY</p>
// // // // // // // // //               <Input
// // // // // // // // //                 type="number"
// // // // // // // // //                 value={formData.min_votes_for_selection}
// // // // // // // // //                 onChange={(e) => setFormData({ ...formData, min_votes_for_selection: parseInt(e.target.value) || 0 })}
// // // // // // // // //                 className="text-lg font-medium"
// // // // // // // // //               />
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         <div className="space-y-6">
// // // // // // // // //           <div className="glass-card rounded-xl p-6 border border-border bg-gradient-to-br from-primary/10 to-transparent">
// // // // // // // // //             <h3 className="font-display text-2xl font-black italic text-gold mb-4">APPLY CHANGES</h3>
// // // // // // // // //             <Button 
// // // // // // // // //               onClick={handleSave}
// // // // // // // // //               className="w-full bg-gradient-crimson font-body font-semibold tracking-[0.15em] py-5"
// // // // // // // // //             >
// // // // // // // // //               SAVE TIMERS & SETTINGS
// // // // // // // // //             </Button>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }



// // // // // // // // 'use client';

// // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // import { Input } from "@/components/ui/input";
// // // // // // // // import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// // // // // // // // import Toast from '@/components/toast';

// // // // // // // // import { settingsService } from '@/services/settings.service';

// // // // // // // // export default function AdminSettings() {
// // // // // // // //   const queryClient = useQueryClient();

// // // // // // // //   const { data: settings, isLoading } = useQuery({
// // // // // // // //     queryKey: ['competition-settings'],
// // // // // // // //     queryFn: settingsService.getSettings,
// // // // // // // //   });

// // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // //     selection_stage_start: '',
// // // // // // // //     selection_stage_end: '',
// // // // // // // //     finals_stage_start: '',
// // // // // // // //     finals_stage_end: '',
// // // // // // // //     min_votes_for_selection: 1000,
// // // // // // // //   });
// // // // // // // //     const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);


// // // // // // // //   useEffect(() => {
// // // // // // // //     if (settings) {
// // // // // // // //       const toWAT = (utc: string | null) => {
// // // // // // // //         if (!utc) return '';
// // // // // // // //         const date = new Date(utc);
// // // // // // // //         date.setHours(date.getHours() + 1); // WAT = UTC+1
// // // // // // // //         return date.toISOString().slice(0, 16);
// // // // // // // //       };

// // // // // // // //       setFormData({
// // // // // // // //         selection_stage_start: toWAT(settings.selection_stage_start),
// // // // // // // //         selection_stage_end: toWAT(settings.selection_stage_end),
// // // // // // // //         finals_stage_start: toWAT(settings.finals_stage_start),
// // // // // // // //         finals_stage_end: toWAT(settings.finals_stage_end),
// // // // // // // //         min_votes_for_selection: settings.min_votes_for_selection || 1000,
// // // // // // // //       });
// // // // // // // //     }
// // // // // // // //   }, [settings]);

// // // // // // // //   const updateMutation = useMutation({
// // // // // // // //     mutationFn: settingsService.updateSettings,
// // // // // // // //     onSuccess: () => {
// // // // // // // //       queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
// // // // // // // //             setToast({ message: "Settings updated successfully!", type: 'success' });

// // // // // // // //     },
// // // // // // // //     onError: (err: any) => {
// // // // // // // //             setToast({ message: "Failed to update settings: " + err.message, type: 'error' });
// // // // // // // //     },
// // // // // // // //   });

// // // // // // // //   const handleSave = () => {
// // // // // // // //     // Basic validation
// // // // // // // //     if (!formData.selection_stage_start || !formData.selection_stage_end || 
// // // // // // // //         !formData.finals_stage_start || !formData.finals_stage_end) {
// // // // // // // //                 setToast({ message: "Please fill in all date fields", type: 'info' });

// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     const payload = {
// // // // // // // //       selection_stage_start: formData.selection_stage_start ? 
// // // // // // // //         new Date(formData.selection_stage_start).toISOString() : null,
// // // // // // // //       selection_stage_end: formData.selection_stage_end ? 
// // // // // // // //         new Date(formData.selection_stage_end).toISOString() : null,
// // // // // // // //       finals_stage_start: formData.finals_stage_start ? 
// // // // // // // //         new Date(formData.finals_stage_start).toISOString() : null,
// // // // // // // //       finals_stage_end: formData.finals_stage_end ? 
// // // // // // // //         new Date(formData.finals_stage_end).toISOString() : null,
// // // // // // // //       min_votes_for_selection: formData.min_votes_for_selection,
// // // // // // // //     };

// // // // // // // //     updateMutation.mutate(payload);
// // // // // // // //   };

// // // // // // // //   if (isLoading) return <div className="p-8 text-center">Loading settings...</div>;

// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       <div className="mb-8">
// // // // // // // //         <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
// // // // // // // //           GLOBAL <span className="font-display italic text-gold">SETTINGS</span>
// // // // // // // //         </h1>
// // // // // // // //         <p className="text-sm text-muted-foreground font-body mt-1">
// // // // // // // //           All times are handled in WAT (West Africa Time)
// // // // // // // //         </p>
// // // // // // // //       </div>

// // // // // // // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // // // // // //         <div className="lg:col-span-2 space-y-6">
// // // // // // // //           {/* Selection Stage */}
// // // // // // // //           <div className="glass-card rounded-xl p-6 border border-border">
// // // // // // // //             <p className="text-sm font-body font-semibold text-primary mb-4">01. SELECTION STAGE</p>
// // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // // //               <div>
// // // // // // // //                 <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">START (WAT)</p>
// // // // // // // //                 <Input
// // // // // // // //                   type="datetime-local"
// // // // // // // //                   value={formData.selection_stage_start}
// // // // // // // //                   onChange={(e) => setFormData({ ...formData, selection_stage_start: e.target.value })}
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //               <div>
// // // // // // // //                 <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">END (WAT)</p>
// // // // // // // //                 <Input
// // // // // // // //                   type="datetime-local"
// // // // // // // //                   value={formData.selection_stage_end}
// // // // // // // //                   onChange={(e) => setFormData({ ...formData, selection_stage_end: e.target.value })}
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* Finals Stage */}
// // // // // // // //           <div className="glass-card rounded-xl p-6 border border-border">
// // // // // // // //             <p className="text-sm font-body font-semibold text-primary mb-4">02. FINALS STAGE</p>
// // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // // //               <div>
// // // // // // // //                 <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">START (WAT)</p>
// // // // // // // //                 <Input
// // // // // // // //                   type="datetime-local"
// // // // // // // //                   value={formData.finals_stage_start}
// // // // // // // //                   onChange={(e) => setFormData({ ...formData, finals_stage_start: e.target.value })}
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //               <div>
// // // // // // // //                 <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">END (WAT)</p>
// // // // // // // //                 <Input
// // // // // // // //                   type="datetime-local"
// // // // // // // //                   value={formData.finals_stage_end}
// // // // // // // //                   onChange={(e) => setFormData({ ...formData, finals_stage_end: e.target.value })}
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* Minimum Votes */}
// // // // // // // //           <div className="glass-card rounded-xl p-6 border border-border">
// // // // // // // //             <h3 className="font-display text-lg font-bold text-foreground mb-4">SELECTION STAGE REQUIREMENTS</h3>
// // // // // // // //             <div>
// // // // // // // //               <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">MINIMUM VOTES REQUIRED TO QUALIFY</p>
// // // // // // // //               <Input
// // // // // // // //                 type="number"
// // // // // // // //                 value={formData.min_votes_for_selection}
// // // // // // // //                 onChange={(e) => setFormData({ ...formData, min_votes_for_selection: parseInt(e.target.value) || 0 })}
// // // // // // // //                 className="text-lg font-medium"
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         <div className="space-y-6">
// // // // // // // //           <div className="glass-card rounded-xl p-6 border border-border bg-gradient-to-br from-primary/10 to-transparent">
// // // // // // // //             <h3 className="font-display text-2xl font-black italic text-gold mb-4">APPLY CHANGES</h3>
// // // // // // // //             <Button 
// // // // // // // //               onClick={handleSave}
// // // // // // // //               disabled={updateMutation.isPending}
// // // // // // // //               className="w-full bg-gradient-crimson font-body font-semibold tracking-[0.15em] py-5"
// // // // // // // //             >
// // // // // // // //               {updateMutation.isPending ? "Saving..." : "SAVE ALL SETTINGS"}
// // // // // // // //             </Button>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //        {toast && (
// // // // // // // //               <Toast 
// // // // // // // //                 message={toast.message} 
// // // // // // // //                 type={toast.type} 
// // // // // // // //                 onClose={() => setToast(null)} 
// // // // // // // //               />
// // // // // // // //             )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }



// // // // // // // 'use client';

// // // // // // // import { useState, useEffect, useMemo } from "react";
// // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // import { Input } from "@/components/ui/input";
// // // // // // // import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// // // // // // // import Toast from '@/components/toast';

// // // // // // // import { settingsService } from '@/services/settings.service';

// // // // // // // export default function AdminSettings() {
// // // // // // //   const queryClient = useQueryClient();

// // // // // // //   const { data: settings, isLoading } = useQuery({
// // // // // // //     queryKey: ['competition-settings'],
// // // // // // //     queryFn: settingsService.getSettings,
// // // // // // //   });

// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     selection_stage_start: '',
// // // // // // //     selection_stage_end: '',
// // // // // // //     finals_stage_start: '',
// // // // // // //     finals_stage_end: '',
// // // // // // //     min_votes_for_selection: 1000,
// // // // // // //   });

// // // // // // //   const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);
// // // // // // //   const [hasChanges, setHasChanges] = useState(false);

// // // // // // //   const date = new Date();
// // // // // // //   console.log(date);
  
// // // // // // //   // Convert UTC to WAT for display
// // // // // // //   const utcToWAT = (utc: string | null) => {
// // // // // // //     if (!utc) return '';
// // // // // // //     const date = new Date(utc);
// // // // // // //     date.setHours(date.getHours() + 1); // WAT = UTC + 1
// // // // // // //     return date.toISOString().slice(0, 16);
// // // // // // //   };

// // // // // // //   // Convert WAT back to UTC for saving
// // // // // // //   const watToUTC = (watString: string) => {
// // // // // // //     if (!watString) return null;
// // // // // // //     const date = new Date(watString);
// // // // // // //     date.setHours(date.getHours() - 1); // Convert WAT to UTC
// // // // // // //     return date.toISOString();
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     if (settings) {
// // // // // // //       setFormData({
// // // // // // //         selection_stage_start: utcToWAT(settings.selection_stage_start),
// // // // // // //         selection_stage_end: utcToWAT(settings.selection_stage_end),
// // // // // // //         finals_stage_start: utcToWAT(settings.finals_stage_start),
// // // // // // //         finals_stage_end: utcToWAT(settings.finals_stage_end),
// // // // // // //         min_votes_for_selection: settings.min_votes_for_selection || 1000,
// // // // // // //       });
// // // // // // //     }
// // // // // // //   }, [settings]);

// // // // // // //   // Detect changes
// // // // // // //   const originalForm = useMemo(() => ({
// // // // // // //     selection_stage_start: utcToWAT(settings?.selection_stage_start),
// // // // // // //     selection_stage_end: utcToWAT(settings?.selection_stage_end),
// // // // // // //     finals_stage_start: utcToWAT(settings?.finals_stage_start),
// // // // // // //     finals_stage_end: utcToWAT(settings?.finals_stage_end),
// // // // // // //     min_votes_for_selection: settings?.min_votes_for_selection || 1000,
// // // // // // //   }), [settings]);

// // // // // // //   useEffect(() => {
// // // // // // //     const hasChanged = 
// // // // // // //       formData.selection_stage_start !== originalForm.selection_stage_start ||
// // // // // // //       formData.selection_stage_end !== originalForm.selection_stage_end ||
// // // // // // //       formData.finals_stage_start !== originalForm.finals_stage_start ||
// // // // // // //       formData.finals_stage_end !== originalForm.finals_stage_end ||
// // // // // // //       formData.min_votes_for_selection !== originalForm.min_votes_for_selection;

// // // // // // //     setHasChanges(hasChanged);
// // // // // // //   }, [formData, originalForm]);

// // // // // // //   const updateMutation = useMutation({
// // // // // // //     mutationFn: settingsService.updateSettings,
// // // // // // //     onSuccess: () => {
// // // // // // //       queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
// // // // // // //       setToast({ message: "Settings updated successfully!", type: 'success' });
// // // // // // //       setHasChanges(false);
// // // // // // //     },
// // // // // // //     onError: (err: any) => {
// // // // // // //       setToast({ message: "Failed to update settings: " + err.message, type: 'error' });
// // // // // // //     },
// // // // // // //   });

// // // // // // //   const handleSave = () => {
// // // // // // //     if (!formData.selection_stage_start || !formData.selection_stage_end || 
// // // // // // //         !formData.finals_stage_start || !formData.finals_stage_end) {
// // // // // // //       setToast({ message: "Please fill in all date fields", type: 'info' });
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     const payload = {
// // // // // // //       selection_stage_start: watToUTC(formData.selection_stage_start),
// // // // // // //       selection_stage_end: watToUTC(formData.selection_stage_end),
// // // // // // //       finals_stage_start: watToUTC(formData.finals_stage_start),
// // // // // // //       finals_stage_end: watToUTC(formData.finals_stage_end),
// // // // // // //       min_votes_for_selection: formData.min_votes_for_selection,
// // // // // // //     };

// // // // // // //     updateMutation.mutate(payload);
// // // // // // //   };

// // // // // // //   if (isLoading) return <div className="p-8 text-center">Loading settings...</div>;

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <div className="mb-8">
// // // // // // //         <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
// // // // // // //           GLOBAL <span className="font-display italic text-gold">SETTINGS</span>
// // // // // // //         </h1>
// // // // // // //         <p className="text-sm text-muted-foreground font-body mt-1">
// // // // // // //           All times are in WAT (West Africa Time, UTC+1)
// // // // // // //         </p>
// // // // // // //       </div>

// // // // // // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // // // // //         <div className="lg:col-span-2 space-y-6">
// // // // // // //           {/* Selection Stage */}
// // // // // // //           <div className="glass-card rounded-xl p-6 border border-border">
// // // // // // //             <p className="text-sm font-body font-semibold text-primary mb-4">01. SELECTION STAGE</p>
// // // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // //               <div>
// // // // // // //                 <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">START (WAT)</p>
// // // // // // //                 <Input
// // // // // // //                   type="datetime-local"
// // // // // // //                   value={formData.selection_stage_start}
// // // // // // //                   onChange={(e) => setFormData({ ...formData, selection_stage_start: e.target.value })}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //               <div>
// // // // // // //                 <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">END (WAT)</p>
// // // // // // //                 <Input
// // // // // // //                   type="datetime-local"
// // // // // // //                   value={formData.selection_stage_end}
// // // // // // //                   onChange={(e) => setFormData({ ...formData, selection_stage_end: e.target.value })}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* Finals Stage */}
// // // // // // //           <div className="glass-card rounded-xl p-6 border border-border">
// // // // // // //             <p className="text-sm font-body font-semibold text-primary mb-4">02. FINALS STAGE</p>
// // // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // //               <div>
// // // // // // //                 <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">START (WAT)</p>
// // // // // // //                 <Input
// // // // // // //                   type="datetime-local"
// // // // // // //                   value={formData.finals_stage_start}
// // // // // // //                   onChange={(e) => setFormData({ ...formData, finals_stage_start: e.target.value })}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //               <div>
// // // // // // //                 <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">END (WAT)</p>
// // // // // // //                 <Input
// // // // // // //                   type="datetime-local"
// // // // // // //                   value={formData.finals_stage_end}
// // // // // // //                   onChange={(e) => setFormData({ ...formData, finals_stage_end: e.target.value })}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* Minimum Votes */}
// // // // // // //           <div className="glass-card rounded-xl p-6 border border-border">
// // // // // // //             <h3 className="font-display text-lg font-bold text-foreground mb-4">SELECTION STAGE REQUIREMENTS</h3>
// // // // // // //             <div>
// // // // // // //               <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">MINIMUM VOTES REQUIRED TO QUALIFY</p>
// // // // // // //               <Input
// // // // // // //                 type="number"
// // // // // // //                 value={formData.min_votes_for_selection}
// // // // // // //                 onChange={(e) => setFormData({ ...formData, min_votes_for_selection: parseInt(e.target.value) || 0 })}
// // // // // // //                 className="text-lg font-medium"
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <div className="space-y-6">
// // // // // // //           <div className="glass-card rounded-xl p-6 border border-border bg-gradient-to-br from-primary/10 to-transparent">
// // // // // // //             <h3 className="font-display text-2xl font-black italic text-gold mb-4">APPLY CHANGES</h3>
// // // // // // //             <Button 
// // // // // // //               onClick={handleSave}
// // // // // // //               disabled={updateMutation.isPending || !hasChanges}
// // // // // // //               className="w-full bg-gradient-crimson font-body font-semibold tracking-[0.15em] py-5"
// // // // // // //             >
// // // // // // //               {updateMutation.isPending ? "Saving..." : "SAVE ALL SETTINGS"}
// // // // // // //             </Button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {toast && (
// // // // // // //         <Toast 
// // // // // // //           message={toast.message} 
// // // // // // //           type={toast.type} 
// // // // // // //           onClose={() => setToast(null)} 
// // // // // // //         />
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }



// // // // // // 'use client';

// // // // // // import { useState, useEffect, useMemo } from "react";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { Input } from "@/components/ui/input";
// // // // // // import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// // // // // // import Toast from '@/components/toast';

// // // // // // import { settingsService } from '@/services/settings.service';

// // // // // // export default function AdminSettings() {
// // // // // //   const queryClient = useQueryClient();

// // // // // //   const { data: settings, isLoading } = useQuery({
// // // // // //     queryKey: ['competition-settings'],
// // // // // //     queryFn: settingsService.getSettings,
// // // // // //   });

// // // // // //   const [formData, setFormData] = useState({
// // // // // //     selection_stage_start: '',
// // // // // //     selection_stage_end: '',
// // // // // //     finals_stage_start: '',
// // // // // //     finals_stage_end: '',
// // // // // //     min_votes_for_selection: 1000,
// // // // // //   });

// // // // // //   const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);
// // // // // //   const [hasChanges, setHasChanges] = useState(false);

// // // // // //   // UTC → WAT for display
// // // // // //   const utcToWAT = (utc: string | null | undefined): string => {
// // // // // //     if (!utc) return '';
// // // // // //     const date = new Date(utc);
// // // // // //     date.setHours(date.getHours() + 1); // WAT = UTC + 1
// // // // // //     return date.toISOString().slice(0, 16);
// // // // // //   };

// // // // // //   // WAT → UTC for saving
// // // // // //   const watToUTC = (watString: string): string | null => {
// // // // // //     if (!watString) return null;
// // // // // //     const date = new Date(watString);
// // // // // //     date.setHours(date.getHours() - 1);
// // // // // //     return date.toISOString();
// // // // // //   };

// // // // // //   // Load settings and convert to WAT
// // // // // //   useEffect(() => {
// // // // // //     if (settings) {
// // // // // //       setFormData({
// // // // // //         selection_stage_start: utcToWAT(settings.selection_stage_start),
// // // // // //         selection_stage_end: utcToWAT(settings.selection_stage_end),
// // // // // //         finals_stage_start: utcToWAT(settings.finals_stage_start),
// // // // // //         finals_stage_end: utcToWAT(settings.finals_stage_end),
// // // // // //         min_votes_for_selection: settings.min_votes_for_selection || 1000,
// // // // // //       });

// // // // // //       console.log(settings.selection_stage_start);
      
// // // // // //     }
// // // // // //   }, [settings]);

// // // // // //   // Original values in WAT for accurate change detection
// // // // // //   const originalForm = useMemo(() => {
// // // // // //     if (!settings) {
// // // // // //       return {
// // // // // //         selection_stage_start: '',
// // // // // //         selection_stage_end: '',
// // // // // //         finals_stage_start: '',
// // // // // //         finals_stage_end: '',
// // // // // //         min_votes_for_selection: 1000,
// // // // // //       };
// // // // // //     }
// // // // // //     return {
// // // // // //       selection_stage_start: utcToWAT(settings.selection_stage_start),
// // // // // //       selection_stage_end: utcToWAT(settings.selection_stage_end),
// // // // // //       finals_stage_start: utcToWAT(settings.finals_stage_start),
// // // // // //       finals_stage_end: utcToWAT(settings.finals_stage_end),
// // // // // //       min_votes_for_selection: settings.min_votes_for_selection || 1000,
// // // // // //     };
// // // // // //   }, [settings]);   // Only depends on settings (safe)

// // // // // //   // Detect changes
// // // // // //   useEffect(() => {
// // // // // //     const hasChanged =
// // // // // //       formData.selection_stage_start !== originalForm.selection_stage_start ||
// // // // // //       formData.selection_stage_end !== originalForm.selection_stage_end ||
// // // // // //       formData.finals_stage_start !== originalForm.finals_stage_start ||
// // // // // //       formData.finals_stage_end !== originalForm.finals_stage_end ||
// // // // // //       formData.min_votes_for_selection !== originalForm.min_votes_for_selection;

// // // // // //     setHasChanges(hasChanged);
// // // // // //   }, [formData, originalForm]);

// // // // // //   const updateMutation = useMutation({
// // // // // //     mutationFn: async (payload: any) => {
// // // // // //       await settingsService.updateSettings(payload);
// // // // // //     },
// // // // // //     onSuccess: () => {
// // // // // //       queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
// // // // // //       setToast({ message: "Settings updated and jobs rescheduled successfully!", type: 'success' });
// // // // // //       setHasChanges(false);
// // // // // //     },
// // // // // //     onError: (err: any) => {
// // // // // //       setToast({ message: `Failed to update settings: ${err.message}`, type: 'error' });
// // // // // //     },
// // // // // //   });

// // // // // //   const handleSave = () => {
// // // // // //     if (!formData.selection_stage_start || !formData.selection_stage_end ||
// // // // // //         !formData.finals_stage_start || !formData.finals_stage_end) {
// // // // // //       setToast({ message: "Please fill in all date fields", type: 'info' });
// // // // // //       return;
// // // // // //     }

// // // // // //     const payload = {
// // // // // //       selection_stage_start: watToUTC(formData.selection_stage_start),
// // // // // //       selection_stage_end: watToUTC(formData.selection_stage_end),
// // // // // //       finals_stage_start: watToUTC(formData.finals_stage_start),
// // // // // //       finals_stage_end: watToUTC(formData.finals_stage_end),
// // // // // //       min_votes_for_selection: formData.min_votes_for_selection,
// // // // // //     };

// // // // // //     updateMutation.mutate(payload);
// // // // // //   };

// // // // // //   if (isLoading) return <div className="p-8 text-center">Loading settings...</div>;

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <div className="mb-8">
// // // // // //         <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
// // // // // //           GLOBAL <span className="font-display italic text-gold">SETTINGS</span>
// // // // // //         </h1>
// // // // // //         <p className="text-sm text-muted-foreground font-body mt-1">
// // // // // //           All times are displayed and entered in **WAT (West Africa Time, UTC+1)**
// // // // // //         </p>
// // // // // //       </div>

// // // // // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // // // //         <div className="lg:col-span-2 space-y-6">
// // // // // //           {/* Selection Stage */}
// // // // // //           <div className="glass-card rounded-xl p-6 border border-border">
// // // // // //             <p className="text-sm font-body font-semibold text-primary mb-4">01. SELECTION STAGE</p>
// // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // //               <div>
// // // // // //                 <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">START (WAT)</p>
// // // // // //                 <Input
// // // // // //                   type="datetime-local"
// // // // // //                   value={formData.selection_stage_start}
// // // // // //                   onChange={(e) => setFormData({ ...formData, selection_stage_start: e.target.value })}
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">END (WAT)</p>
// // // // // //                 <Input
// // // // // //                   type="datetime-local"
// // // // // //                   value={formData.selection_stage_end}
// // // // // //                   onChange={(e) => setFormData({ ...formData, selection_stage_end: e.target.value })}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Finals Stage */}
// // // // // //           <div className="glass-card rounded-xl p-6 border border-border">
// // // // // //             <p className="text-sm font-body font-semibold text-primary mb-4">02. FINALS STAGE</p>
// // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // //               <div>
// // // // // //                 <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">START (WAT)</p>
// // // // // //                 <Input
// // // // // //                   type="datetime-local"
// // // // // //                   value={formData.finals_stage_start}
// // // // // //                   onChange={(e) => setFormData({ ...formData, finals_stage_start: e.target.value })}
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">END (WAT)</p>
// // // // // //                 <Input
// // // // // //                   type="datetime-local"
// // // // // //                   value={formData.finals_stage_end}
// // // // // //                   onChange={(e) => setFormData({ ...formData, finals_stage_end: e.target.value })}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Minimum Votes */}
// // // // // //           <div className="glass-card rounded-xl p-6 border border-border">
// // // // // //             <h3 className="font-display text-lg font-bold text-foreground mb-4">SELECTION STAGE REQUIREMENTS</h3>
// // // // // //             <div>
// // // // // //               <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">MINIMUM VOTES REQUIRED TO QUALIFY</p>
// // // // // //               <Input
// // // // // //                 type="number"
// // // // // //                 value={formData.min_votes_for_selection}
// // // // // //                 onChange={(e) => setFormData({ ...formData, min_votes_for_selection: parseInt(e.target.value) || 0 })}
// // // // // //                 className="text-lg font-medium"
// // // // // //               />
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <div className="space-y-6">
// // // // // //           <div className="glass-card rounded-xl p-6 border border-border bg-gradient-to-br from-primary/10 to-transparent">
// // // // // //             <h3 className="font-display text-2xl font-black italic text-gold mb-4">APPLY CHANGES</h3>
// // // // // //             <Button 
// // // // // //               onClick={handleSave}
// // // // // //               disabled={updateMutation.isPending || !hasChanges}
// // // // // //               className="w-full bg-gradient-crimson font-body font-semibold tracking-[0.15em] py-5"
// // // // // //             >
// // // // // //               {updateMutation.isPending ? "Saving & Rescheduling..." : "SAVE ALL SETTINGS"}
// // // // // //             </Button>
// // // // // //             <p className="text-xs text-center text-muted-foreground mt-3">
// // // // // //               This will update the database and automatically reschedule the cron jobs
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {toast && (
// // // // // //         <Toast 
// // // // // //           message={toast.message} 
// // // // // //           type={toast.type} 
// // // // // //           onClose={() => setToast(null)} 
// // // // // //         />
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // // 'use client';

// // // // // // import { useState, useEffect, useMemo } from "react";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { Input } from "@/components/ui/input";
// // // // // // import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// // // // // // import Toast from '@/components/toast';

// // // // // // import { settingsService } from '@/services/settings.service';

// // // // // // export default function AdminSettings() {
// // // // // //   const queryClient = useQueryClient();

// // // // // //   const { data: settings, isLoading } = useQuery({
// // // // // //     queryKey: ['competition-settings'],
// // // // // //     queryFn: settingsService.getSettings,
// // // // // //   });

// // // // // //   const [formData, setFormData] = useState({
// // // // // //     selection_stage_start: '',
// // // // // //     selection_stage_end: '',
// // // // // //     finals_stage_start: '',
// // // // // //     finals_stage_end: '',
// // // // // //     min_votes_for_selection: 1000,
// // // // // //   });

// // // // // //   const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);
// // // // // //   const [hasChanges, setHasChanges] = useState(false);

// // // // // //   // UTC → WAT for display
// // // // // //   const utcToWAT = (utc: string | null | undefined): string => {
// // // // // //     if (!utc) return '';
// // // // // //     const date = new Date(utc);
// // // // // //     date.setHours(date.getHours() + 1); // WAT = UTC + 1
// // // // // //     return date.toISOString().slice(0, 16);
// // // // // //   };

// // // // // //   // WAT → UTC for saving
// // // // // //   const watToUTC = (watString: string): string | null => {
// // // // // //     if (!watString) return null;
// // // // // //     const date = new Date(watString);
// // // // // //     date.setHours(date.getHours() - 1);
// // // // // //     return date.toISOString();
// // // // // //   };

// // // // // //   // Load settings
// // // // // //   useEffect(() => {
// // // // // //     if (settings) {
// // // // // //       setFormData({
// // // // // //         selection_stage_start: utcToWAT(settings.selection_stage_start),
// // // // // //         selection_stage_end: utcToWAT(settings.selection_stage_end),
// // // // // //         finals_stage_start: utcToWAT(settings.finals_stage_start),
// // // // // //         finals_stage_end: utcToWAT(settings.finals_stage_end),
// // // // // //         min_votes_for_selection: settings.min_votes_for_selection || 1000,
// // // // // //       });
// // // // // //     }
// // // // // //   }, [settings]);

// // // // // //   // Original values for change detection
// // // // // //   const originalForm = useMemo(() => ({
// // // // // //     selection_stage_start: utcToWAT(settings?.selection_stage_start),
// // // // // //     selection_stage_end: utcToWAT(settings?.selection_stage_end),
// // // // // //     finals_stage_start: utcToWAT(settings?.finals_stage_start),
// // // // // //     finals_stage_end: utcToWAT(settings?.finals_stage_end),
// // // // // //     min_votes_for_selection: settings?.min_votes_for_selection || 1000,
// // // // // //   }), [settings]);

// // // // // //   // Detect changes
// // // // // //   useEffect(() => {
// // // // // //     const hasChanged =
// // // // // //       formData.selection_stage_start !== originalForm.selection_stage_start ||
// // // // // //       formData.selection_stage_end !== originalForm.selection_stage_end ||
// // // // // //       formData.finals_stage_start !== originalForm.finals_stage_start ||
// // // // // //       formData.finals_stage_end !== originalForm.finals_stage_end ||
// // // // // //       formData.min_votes_for_selection !== originalForm.min_votes_for_selection;

// // // // // //     setHasChanges(hasChanged);
// // // // // //   }, [formData, originalForm]);

// // // // // //   const updateMutation = useMutation({
// // // // // //     mutationFn: settingsService.updateSettings,
// // // // // //     onSuccess: () => {
// // // // // //       queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
// // // // // //       setToast({ message: "Settings updated successfully!", type: 'success' });
// // // // // //       setHasChanges(false);
// // // // // //     },
// // // // // //     onError: (err: any) => {
// // // // // //       setToast({ message: `Failed to update settings: ${err.message}`, type: 'error' });
// // // // // //     },
// // // // // //   });

// // // // // //   const deactivateLowVoteMutation = useMutation({
// // // // // //     mutationFn: settingsService.deactivateLowVoteUsers,
// // // // // //     onSuccess: (result) => {
// // // // // //       setToast({ 
// // // // // //         message: `Successfully deactivated users with less than ${result.minVotes} votes`, 
// // // // // //         type: 'success' 
// // // // // //       });
// // // // // //     },
// // // // // //     onError: (err: any) => {
// // // // // //       setToast({ message: `Failed to deactivate low-vote users: ${err.message}`, type: 'error' });
// // // // // //     },
// // // // // //   });

// // // // // //   const disableVotingMutation = useMutation({
// // // // // //     mutationFn: settingsService.disableVoting,
// // // // // //     onSuccess: () => {
// // // // // //       setToast({ message: "Voting has been disabled for everyone!", type: 'success' });
// // // // // //       queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
// // // // // //     },
// // // // // //     onError: (err: any) => {
// // // // // //       setToast({ message: `Failed to disable voting: ${err.message}`, type: 'error' });
// // // // // //     },
// // // // // //   });

// // // // // //   const handleSave = () => {
// // // // // //     if (!formData.selection_stage_start || !formData.selection_stage_end ||
// // // // // //         !formData.finals_stage_start || !formData.finals_stage_end) {
// // // // // //       setToast({ message: "Please fill in all date fields", type: 'info' });
// // // // // //       return;
// // // // // //     }

// // // // // //     const payload = {
// // // // // //       selection_stage_start: watToUTC(formData.selection_stage_start),
// // // // // //       selection_stage_end: watToUTC(formData.selection_stage_end),
// // // // // //       finals_stage_start: watToUTC(formData.finals_stage_start),
// // // // // //       finals_stage_end: watToUTC(formData.finals_stage_end),
// // // // // //       min_votes_for_selection: formData.min_votes_for_selection,
// // // // // //     };

// // // // // //     updateMutation.mutate(payload);
// // // // // //   };

// // // // // //   if (isLoading) return <div className="p-8 text-center">Loading settings...</div>;

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <div className="mb-8">
// // // // // //         <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
// // // // // //           GLOBAL <span className="font-display italic text-gold">SETTINGS</span>
// // // // // //         </h1>
// // // // // //         <p className="text-sm text-muted-foreground font-body mt-1">
// // // // // //           All times are displayed and entered in **WAT (West Africa Time, UTC+1)**
// // // // // //         </p>
// // // // // //       </div>

// // // // // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // // // //         <div className="lg:col-span-2 space-y-6">
    

// // // // // //           {/* Minimum Votes + Deactivate Button */}
// // // // // //           <div className="glass-card rounded-xl p-6 border border-border">
// // // // // //             <h3 className="font-display text-lg font-bold text-foreground mb-4">SELECTION STAGE REQUIREMENTS</h3>
// // // // // //             <div>
// // // // // //               <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">MINIMUM VOTES REQUIRED TO QUALIFY</p>
// // // // // //               <Input
// // // // // //                 type="number"
// // // // // //                 value={formData.min_votes_for_selection}
// // // // // //                 onChange={(e) => setFormData({ ...formData, min_votes_for_selection: parseInt(e.target.value) || 0 })}
// // // // // //                 className="text-lg font-medium"
// // // // // //               />
// // // // // //             </div>

// // // // // //             <Button 
// // // // // //               onClick={() => deactivateLowVoteMutation.mutate()}
// // // // // //               disabled={deactivateLowVoteMutation.isPending}
// // // // // //               className="mt-6 w-full text-white font-body font-semibold py-6"
// // // // // //             >
// // // // // //               {deactivateLowVoteMutation.isPending ? "Deactivating Low-Vote Users..." : "DEACTIVATE LOW-VOTE USERS"}
// // // // // //             </Button>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Right Sidebar Actions */}
// // // // // //         <div className="space-y-6">
// // // // // //           {/* Save Settings */}
// // // // // //           {/* <div className="glass-card rounded-xl p-6 border border-border bg-gradient-to-br from-primary/10 to-transparent">
// // // // // //             <h3 className="font-display text-2xl font-black italic text-gold mb-4">SAVE SETTINGS</h3>
// // // // // //             <Button 
// // // // // //               onClick={handleSave}
// // // // // //               disabled={updateMutation.isPending || !hasChanges}
// // // // // //               className="w-full bg-gradient-crimson font-body font-semibold tracking-[0.15em] py-6 text-base"
// // // // // //             >
// // // // // //               {updateMutation.isPending ? "Saving..." : "SAVE ALL SETTINGS"}
// // // // // //             </Button>
// // // // // //             <p className="text-xs text-center text-muted-foreground mt-3">
// // // // // //               Update stage dates and minimum votes
// // // // // //             </p>
// // // // // //           </div> */}

// // // // // //           {/* Disable Voting */}
// // // // // //           <div className="glass-card rounded-xl p-6 border border-border">
// // // // // //             <h3 className="font-display text-lg font-bold text-foreground mb-4">GLOBAL VOTING CONTROL</h3>
// // // // // //             <Button 
// // // // // //               onClick={() => disableVotingMutation.mutate()}
// // // // // //               disabled={disableVotingMutation.isPending}
// // // // // //               className="w-full  text-white font-body font-semibold py-6"
// // // // // //             >
// // // // // //               {disableVotingMutation.isPending ? "Disabling Voting..." : "DISABLE VOTING FOR EVERYONE"}
// // // // // //             </Button>
// // // // // //             <p className="text-xs text-center text-muted-foreground mt-3">
// // // // // //               This will immediately stop all voting platform-wide
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {toast && (
// // // // // //         <Toast 
// // // // // //           message={toast.message} 
// // // // // //           type={toast.type} 
// // // // // //           onClose={() => setToast(null)} 
// // // // // //         />
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }




// // // // // // 'use client';

// // // // // // import { useState, useEffect } from "react";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { Input } from "@/components/ui/input";
// // // // // // import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// // // // // // import Toast from '@/components/toast';

// // // // // // import { settingsService } from '@/services/settings.service';

// // // // // // export default function AdminSettings() {
// // // // // //   const queryClient = useQueryClient();

// // // // // //   const { data: settings, isLoading } = useQuery({
// // // // // //     queryKey: ['competition-settings'],
// // // // // //     queryFn: settingsService.getSettings,
// // // // // //   });

// // // // // //   const [minVotes, setMinVotes] = useState(1000);

// // // // // //   const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

// // // // // //   // Load current min votes
// // // // // //   useEffect(() => {
// // // // // //     if (settings?.min_votes_for_selection) {
// // // // // //       setMinVotes(settings.min_votes_for_selection);
// // // // // //     }
// // // // // //   }, [settings]);

// // // // // //   const deactivateLowVoteMutation = useMutation({
// // // // // //     mutationFn: settingsService.deactivateLowVoteUsers,
// // // // // //     onSuccess: (result) => {
// // // // // //       setToast({ 
// // // // // //         message: `Successfully deactivated users with less than ${result.minVotes} votes`, 
// // // // // //         type: 'success' 
// // // // // //       });
// // // // // //     },
// // // // // //     onError: (err: any) => {
// // // // // //       setToast({ message: `Failed to deactivate: ${err.message}`, type: 'error' });
// // // // // //     },
// // // // // //   });

// // // // // //   const disableVotingMutation = useMutation({
// // // // // //     mutationFn: settingsService.disableVoting,
// // // // // //     onSuccess: () => {
// // // // // //       setToast({ message: "Voting has been disabled for everyone!", type: 'success' });
// // // // // //       queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
// // // // // //     },
// // // // // //     onError: (err: any) => {
// // // // // //       setToast({ message: `Failed to disable voting: ${err.message}`, type: 'error' });
// // // // // //     },
// // // // // //   });

// // // // // //   const handleUpdateMinVotes = async () => {
// // // // // //     try {
// // // // // //       await settingsService.updateSettings({ min_votes_for_selection: minVotes });
// // // // // //       setToast({ message: "Minimum votes requirement updated successfully!", type: 'success' });
// // // // // //       queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
// // // // // //     } catch (err: any) {
// // // // // //       setToast({ message: `Failed to update: ${err.message}`, type: 'error' });
// // // // // //     }
// // // // // //   };

// // // // // //   if (isLoading) return <div className="p-8 text-center">Loading settings...</div>;

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <div className="mb-8">
// // // // // //         <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
// // // // // //           GLOBAL <span className="font-display italic text-gold">SETTINGS</span>
// // // // // //         </h1>
// // // // // //         <p className="text-sm text-muted-foreground font-body mt-1">
// // // // // //           Manage competition rules and voting controls
// // // // // //         </p>
// // // // // //       </div>

// // // // // //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl">
// // // // // //         {/* Minimum Votes Section */}
// // // // // //         <div className="glass-card rounded-2xl p-8 border border-border">
// // // // // //           <h3 className="font-display text-2xl font-bold text-foreground mb-6">
// // // // // //             SELECTION STAGE REQUIREMENTS
// // // // // //           </h3>
          
// // // // // //           <div className="space-y-6">
// // // // // //             <div>
// // // // // //               <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-3">
// // // // // //                 MINIMUM VOTES REQUIRED TO QUALIFY
// // // // // //               </p>
// // // // // //               <Input
// // // // // //                 type="number"
// // // // // //                 value={minVotes}
// // // // // //                 onChange={(e) => setMinVotes(parseInt(e.target.value) || 0)}
// // // // // //                 className="text-3xl font-medium h-16 text-center"
// // // // // //               />
// // // // // //             </div>

// // // // // //             <Button 
// // // // // //               onClick={handleUpdateMinVotes}
// // // // // //               className="w-full bg-gradient-crimson font-body font-semibold py-6 text-base tracking-wide"
// // // // // //             >
// // // // // //               UPDATE MINIMUM VOTES
// // // // // //             </Button>

// // // // // //             <Button 
// // // // // //               onClick={() => deactivateLowVoteMutation.mutate()}
// // // // // //               disabled={deactivateLowVoteMutation.isPending}
// // // // // //               className="w-full  text-white font-body font-semibold py-6 text-base tracking-wide"
// // // // // //             >
// // // // // //               {deactivateLowVoteMutation.isPending 
// // // // // //                 ? "Deactivating Low-Vote Users..." 
// // // // // //                 : "DEACTIVATE ALL LOW-VOTE USERS"}
// // // // // //             </Button>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Global Voting Control */}
// // // // // //         <div className="glass-card rounded-2xl p-8 border border-border flex flex-col">
// // // // // //           <h3 className="font-display text-2xl font-bold text-foreground mb-6">
// // // // // //             GLOBAL VOTING CONTROL
// // // // // //           </h3>
          
// // // // // //           <p className="text-muted-foreground mb-8 leading-relaxed">
// // // // // //             This action will immediately stop all voting across the entire platform. 
// // // // // //             This cannot be undone automatically.
// // // // // //           </p>

// // // // // //           <Button 
// // // // // //             onClick={() => disableVotingMutation.mutate()}
// // // // // //             disabled={disableVotingMutation.isPending}
// // // // // //             className="mt-auto w-full  text-white font-body font-semibold py-6 text-base tracking-wide"
// // // // // //           >
// // // // // //             {disableVotingMutation.isPending 
// // // // // //               ? "Disabling Voting..." 
// // // // // //               : "DISABLE VOTING FOR EVERYONE"}
// // // // // //           </Button>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {toast && (
// // // // // //         <Toast 
// // // // // //           message={toast.message} 
// // // // // //           type={toast.type} 
// // // // // //           onClose={() => setToast(null)} 
// // // // // //         />
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }





// // // // // 'use client';

// // // // // import { useState, useEffect } from "react";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { Input } from "@/components/ui/input";
// // // // // import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// // // // // import Toast from '@/components/toast';

// // // // // import { settingsService } from '@/services/settings.service';

// // // // // export default function AdminSettings() {
// // // // //   const queryClient = useQueryClient();

// // // // //   const { data: settings, isLoading } = useQuery({
// // // // //     queryKey: ['competition-settings'],
// // // // //     queryFn: settingsService.getSettings,
// // // // //   });

// // // // //   const [minVotes, setMinVotes] = useState(1000);
// // // // //   const [newPassword, setNewPassword] = useState("");
// // // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // // //   const [showPasswordFields, setShowPasswordFields] = useState(false);

// // // // //   const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

// // // // //   // Load current min votes
// // // // //   useEffect(() => {
// // // // //     if (settings?.min_votes_for_selection) {
// // // // //       setMinVotes(settings.min_votes_for_selection);
// // // // //     }
// // // // //   }, [settings]);

// // // // //   const deactivateLowVoteMutation = useMutation({
// // // // //     mutationFn: settingsService.deactivateLowVoteUsers,
// // // // //     onSuccess: (result) => {
// // // // //       setToast({ 
// // // // //         message: `Successfully deactivated users with less than ${result.minVotes} votes`, 
// // // // //         type: 'success' 
// // // // //       });
// // // // //     },
// // // // //     onError: (err: any) => setToast({ message: `Failed: ${err.message}`, type: 'error' }),
// // // // //   });

// // // // //   const disableVotingMutation = useMutation({
// // // // //     mutationFn: settingsService.disableVoting,
// // // // //     onSuccess: () => {
// // // // //       setToast({ message: "Voting has been disabled for everyone!", type: 'success' });
// // // // //       queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
// // // // //     },
// // // // //     onError: (err: any) => setToast({ message: `Failed: ${err.message}`, type: 'error' }),
// // // // //   });

// // // // //   const updateMinVotesMutation = useMutation({
// // // // //     mutationFn: () => settingsService.updateSettings({ min_votes_for_selection: minVotes }),
// // // // //     onSuccess: () => {
// // // // //       setToast({ message: "Minimum votes requirement updated!", type: 'success' });
// // // // //       queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
// // // // //     },
// // // // //     onError: (err: any) => setToast({ message: `Failed: ${err.message}`, type: 'error' }),
// // // // //   });

// // // // //   const changePasswordMutation = useMutation({
// // // // //     mutationFn: async () => {
// // // // //       if (newPassword !== confirmPassword) throw new Error("Passwords do not match");
// // // // //       if (newPassword.length < 6) throw new Error("Password must be at least 6 characters");
// // // // //       // Call your admin change password service here
// // // // //       // For now, we'll assume you have a method or will add it later
// // // // //       await settingsService.changeAdminPassword?.(newPassword);
// // // // //     },
// // // // //     onSuccess: () => {
// // // // //       setToast({ message: "Password changed successfully!", type: 'success' });
// // // // //       setNewPassword("");
// // // // //       setConfirmPassword("");
// // // // //       setShowPasswordFields(false);
// // // // //     },
// // // // //     onError: (err: any) => setToast({ message: err.message, type: 'error' }),
// // // // //   });

// // // // //   if (isLoading) return <div className="p-12 text-center text-muted-foreground">Loading settings...</div>;

// // // // //   return (
// // // // //     <div className="max-w-5xl mx-auto">
// // // // //       <div className="mb-10">
// // // // //         <h1 className="font-display text-4xl font-bold text-foreground tracking-tight">
// // // // //           GLOBAL <span className="italic text-gold">SETTINGS</span>
// // // // //         </h1>
// // // // //         <p className="text-muted-foreground mt-2">Manage competition parameters and security</p>
// // // // //       </div>

// // // // //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // // // //         {/* Minimum Votes Card */}
// // // // //         <div className="glass-card rounded-3xl p-8 border border-border/80">
// // // // //           <h3 className="font-display text-2xl font-semibold mb-6">Selection Requirements</h3>
          
// // // // //           <div className="space-y-8">
// // // // //             <div>
// // // // //               <label className="text-xs font-body tracking-[0.1em] text-muted-foreground block mb-2">
// // // // //                 MINIMUM VOTES TO QUALIFY
// // // // //               </label>
// // // // //               <Input
// // // // //                 type="number"
// // // // //                 value={minVotes}
// // // // //                 onChange={(e) => setMinVotes(parseInt(e.target.value) || 0)}
// // // // //                 className="text-4xl font-medium h-20 text-center bg-secondary/50 border-border"
// // // // //               />
// // // // //             </div>

// // // // //             <div className="flex gap-3">
// // // // //               <Button 
// // // // //                 onClick={() => updateMinVotesMutation.mutate()}
// // // // //                 disabled={updateMinVotesMutation.isPending}
// // // // //                 className="flex-1 bg-gradient-crimson py-6 text-base font-semibold"
// // // // //               >
// // // // //                 {updateMinVotesMutation.isPending ? "Updating..." : "UPDATE MINIMUM VOTES"}
// // // // //               </Button>

// // // // //               <Button 
// // // // //                 onClick={() => deactivateLowVoteMutation.mutate()}
// // // // //                 disabled={deactivateLowVoteMutation.isPending}
// // // // //                 variant="destructive"
// // // // //                 className="flex-1 py-6 text-base font-semibold"
// // // // //               >
// // // // //                 {deactivateLowVoteMutation.isPending ? "Deactivating..." : "DEACTIVATE LOW VOTE USERS"}
// // // // //               </Button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Global Controls + Password */}
// // // // //         <div className="space-y-8">
// // // // //           {/* Voting Control */}
// // // // //           <div className="glass-card rounded-3xl p-8 border border-border/80">
// // // // //             <h3 className="font-display text-2xl font-semibold mb-6">Global Voting Control</h3>
// // // // //             <p className="text-muted-foreground mb-6">
// // // // //               Immediately stop all voting on the platform. This action is irreversible without manual re-enabling.
// // // // //             </p>

// // // // //             <Button 
// // // // //               onClick={() => disableVotingMutation.mutate()}
// // // // //               disabled={disableVotingMutation.isPending}
// // // // //               variant="destructive"
// // // // //               className="w-full py-6 text-base font-semibold"
// // // // //             >
// // // // //               {disableVotingMutation.isPending ? "Disabling Voting..." : "DISABLE VOTING FOR EVERYONE"}
// // // // //             </Button>
// // // // //           </div>

// // // // //           {/* Change Password */}
// // // // //           <div className="glass-card rounded-3xl p-8 border border-border/80">
// // // // //             <h3 className="font-display text-2xl font-semibold mb-6">Admin Security</h3>

// // // // //             {!showPasswordFields ? (
// // // // //               <Button 
// // // // //                 onClick={() => setShowPasswordFields(true)}
// // // // //                 variant="outline"
// // // // //                 className="w-full py-6"
// // // // //               >
// // // // //                 CHANGE ADMIN PASSWORD
// // // // //               </Button>
// // // // //             ) : (
// // // // //               <div className="space-y-4">
// // // // //                 <Input
// // // // //                   type="password"
// // // // //                   placeholder="New Password"
// // // // //                   value={newPassword}
// // // // //                   onChange={(e) => setNewPassword(e.target.value)}
// // // // //                 />
// // // // //                 <Input
// // // // //                   type="password"
// // // // //                   placeholder="Confirm New Password"
// // // // //                   value={confirmPassword}
// // // // //                   onChange={(e) => setConfirmPassword(e.target.value)}
// // // // //                 />

// // // // //                 <div className="flex gap-3 pt-2">
// // // // //                   <Button 
// // // // //                     onClick={() => {
// // // // //                       setShowPasswordFields(false);
// // // // //                       setNewPassword("");
// // // // //                       setConfirmPassword("");
// // // // //                     }}
// // // // //                     variant="outline"
// // // // //                     className="flex-1"
// // // // //                   >
// // // // //                     CANCEL
// // // // //                   </Button>
// // // // //                   <Button 
// // // // //                     onClick={() => changePasswordMutation.mutate()}
// // // // //                     disabled={changePasswordMutation.isPending || !newPassword || newPassword !== confirmPassword}
// // // // //                     className="flex-1 bg-gradient-crimson"
// // // // //                   >
// // // // //                     {changePasswordMutation.isPending ? "Changing..." : "CHANGE PASSWORD"}
// // // // //                   </Button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
// // // // //     </div>
// // // // //   );
// // // // // }


// // // "use client"
// // // import { useState } from "react";
// // // import { Lock, ShieldOff, UserX, KeyRound, AlertTriangle } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import { Input } from "@/components/ui/input";
// // // import { toast } from "sonner";

// // // const AdminSettings = () => {
// // //   // Password change state
// // //   const [oldPassword, setOldPassword] = useState("");
// // //   const [newPassword, setNewPassword] = useState("");
// // //   const [confirmPassword, setConfirmPassword] = useState("");
// // //   const [changingPassword, setChangingPassword] = useState(false);

// // //   // Minimum votes state
// // //   const [minVotes, setMinVotes] = useState(1000);
// // //   const [updatingMinVotes, setUpdatingMinVotes] = useState(false);
// // //   const [deactivating, setDeactivating] = useState(false);

// // //   // Voting control state
// // //   const [disablingVoting, setDisablingVoting] = useState(false);
// // //   const [votingDisabled, setVotingDisabled] = useState(false);

// // //   const handleChangePassword = async () => {
// // //     if (!oldPassword || !newPassword || !confirmPassword) {
// // //       toast.error("Please fill in all password fields");
// // //       return;
// // //     }
// // //     if (newPassword.length < 8) {
// // //       toast.error("New password must be at least 8 characters");
// // //       return;
// // //     }
// // //     if (newPassword !== confirmPassword) {
// // //       toast.error("New password and confirmation do not match");
// // //       return;
// // //     }
// // //     if (oldPassword === newPassword) {
// // //       toast.error("New password must be different from old password");
// // //       return;
// // //     }

// // //     setChangingPassword(true);
// // //     try {
// // //       // TODO: integrate with backend
// // //       await new Promise((r) => setTimeout(r, 800));
// // //       toast.success("Password changed successfully");
// // //       setOldPassword("");
// // //       setNewPassword("");
// // //       setConfirmPassword("");
// // //     } catch {
// // //       toast.error("Failed to change password");
// // //     } finally {
// // //       setChangingPassword(false);
// // //     }
// // //   };

// // //   const handleUpdateMinVotes = async () => {
// // //     if (minVotes < 0) {
// // //       toast.error("Minimum votes cannot be negative");
// // //       return;
// // //     }
// // //     setUpdatingMinVotes(true);
// // //     try {
// // //       await new Promise((r) => setTimeout(r, 600));
// // //       toast.success(`Minimum vote threshold set to ${minVotes}`);
// // //     } finally {
// // //       setUpdatingMinVotes(false);
// // //     }
// // //   };

// // //   const handleDeactivateLowVoters = async () => {
// // //     setDeactivating(true);
// // //     try {
// // //       await new Promise((r) => setTimeout(r, 800));
// // //       toast.success(`Deactivated contestants with fewer than ${minVotes} votes`);
// // //     } finally {
// // //       setDeactivating(false);
// // //     }
// // //   };

// // //   const handleToggleVoting = async () => {
// // //     setDisablingVoting(true);
// // //     try {
// // //       await new Promise((r) => setTimeout(r, 600));
// // //       setVotingDisabled((v) => !v);
// // //       toast.success(votingDisabled ? "Voting has been re-enabled" : "Voting disabled platform-wide");
// // //     } finally {
// // //       setDisablingVoting(false);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       {/* Header */}
// // //       <div className="mb-8">
// // //         <div className="w-12 h-1 bg-gold rounded mb-4" />
// // //         <h1 className="font-display text-3xl md:text-4xl font-black text-foreground">
// // //           GLOBAL <span className="font-display italic text-gold">SETTINGS</span>
// // //         </h1>
// // //         <p className="text-xs text-muted-foreground font-body tracking-[0.2em] mt-2">
// // //           MANAGE COMPETITION PARAMETERS AND SECURITY
// // //         </p>
// // //       </div>

// // //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // //         {/* Selection Requirements */}
// // //         <div className="glass-card rounded-xl p-6 border border-border">
// // //           <div className="flex items-center gap-2 mb-6">
// // //             <UserX className="w-4 h-4 text-primary" />
// // //             <h3 className="font-display text-lg font-bold text-foreground">SELECTION REQUIREMENTS</h3>
// // //           </div>

// // //           <div className="mb-6">
// // //             <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">
// // //               MINIMUM VOTES TO QUALIFY
// // //             </p>
// // //             <Input
// // //               type="number"
// // //               min={0}
// // //               value={minVotes}
// // //               onChange={(e) => setMinVotes(parseInt(e.target.value) || 0)}
// // //               className="text-3xl font-medium h-16 text-center bg-secondary/50 border-border"
// // //             />
// // //             <p className="text-[10px] text-muted-foreground font-body mt-2">
// // //               Contestants below this threshold can be removed from the competition.
// // //             </p>
// // //           </div>

// // //           <div className="space-y-3">

// // //             <Button
// // //               onClick={handleDeactivateLowVoters}
// // //               disabled={deactivating}
// // //               variant="destructive"
// // //               className="w-full font-body bg-primary font-semibold tracking-[0.15em] py-5"
// // //             >
// // //               {deactivating ? "DEACTIVATING..." : "DEACTIVATE LOW-VOTE USERS"}
// // //             </Button>
// // //           </div>
// // //         </div>

// // //         {/* Global Voting Control */}
// // //         <div className="glass-card rounded-xl p-6 border border-border">
// // //           <div className="flex items-center gap-2 mb-6">
// // //             <ShieldOff className="w-4 h-4 text-primary" />
// // //             <h3 className="font-display text-lg font-bold text-foreground">GLOBAL VOTING CONTROL</h3>
// // //           </div>

// // //           <div className="mb-6 p-4 rounded-lg bg-secondary/40 border border-border">
// // //             <div className="flex items-start gap-2">
// // //               <AlertTriangle className="w-4 h-4 text-gold mt-0.5 shrink-0" />
// // //               <p className="text-xs text-muted-foreground font-body leading-relaxed">
// // //                 Immediately stop or resume all voting on the platform. This action affects every contestant and voter in real time.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           <div className="flex items-center justify-between mb-4 px-4 py-3 rounded-lg bg-secondary/40 border border-border">
// // //             <span className="text-sm font-body font-semibold text-foreground">CURRENT STATUS</span>
// // //             <span
// // //               className={`text-[10px] font-body px-3 py-1 rounded-full ${
// // //                 votingDisabled
// // //                   ? "bg-destructive/20 text-destructive border border-destructive/30"
// // //                   : "bg-green-500/20 text-green-400"
// // //               }`}
// // //             >
// // //               {votingDisabled ? "VOTING DISABLED" : "VOTING ACTIVE"}
// // //             </span>
// // //           </div>

// // //           <Button
// // //             onClick={handleToggleVoting}
// // //             disabled={disablingVoting}
// // //             variant={votingDisabled ? "default" : "destructive"}
// // //             className={`w-full bg-primary font-body font-semibold tracking-[0.15em] py-5 ${
// // //               votingDisabled ? "bg-primary" : ""
// // //             }`}
// // //           >
// // //             {disablingVoting
// // //               ? "PROCESSING..."
// // //               : votingDisabled
// // //               ? "RE-ENABLE VOTING"
// // //               : "DISABLE VOTING FOR EVERYONE"}
// // //           </Button>
// // //         </div>

// // //         {/* Admin Security - Change Password */}
// // //         <div className="glass-card rounded-xl p-6 border border-border lg:col-span-2">
// // //           <div className="flex items-center gap-2 mb-6">
// // //             <KeyRound className="w-4 h-4 text-primary" />
// // //             <h3 className="font-display text-lg font-bold text-foreground">ADMIN SECURITY</h3>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
// // //             <div>
// // //               <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">
// // //                 CURRENT PASSWORD
// // //               </p>
// // //               <div className="relative">
// // //                 <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
// // //                 <Input
// // //                   type="password"
// // //                   value={oldPassword}
// // //                   onChange={(e) => setOldPassword(e.target.value)}
// // //                   placeholder="Enter current password"
// // //                   className="pl-9 bg-secondary/50 border-border"
// // //                 />
// // //               </div>
// // //             </div>
// // //             <div>
// // //               <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">
// // //                 NEW PASSWORD
// // //               </p>
// // //               <div className="relative">
// // //                 <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
// // //                 <Input
// // //                   type="password"
// // //                   value={newPassword}
// // //                   onChange={(e) => setNewPassword(e.target.value)}
// // //                   placeholder="Min. 8 characters"
// // //                   className="pl-9 bg-secondary/50 border-border"
// // //                 />
// // //               </div>
// // //             </div>
// // //             <div>
// // //               <p className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] mb-2">
// // //                 CONFIRM NEW PASSWORD
// // //               </p>
// // //               <div className="relative">
// // //                 <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
// // //                 <Input
// // //                   type="password"
// // //                   value={confirmPassword}
// // //                   onChange={(e) => setConfirmPassword(e.target.value)}
// // //                   placeholder="Re-enter new password"
// // //                   className="pl-9 bg-secondary/50 border-border"
// // //                 />
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {confirmPassword && newPassword !== confirmPassword && (
// // //             <p className="text-xs text-destructive font-body mb-4">Passwords do not match</p>
// // //           )}

// // //           <Button
// // //             onClick={handleChangePassword}
// // //             disabled={changingPassword}
// // //             className="w-full md:w-auto bg-gradient-crimson font-body font-semibold tracking-[0.15em] py-5 px-8"
// // //           >
// // //             {changingPassword ? "CHANGING PASSWORD..." : "CHANGE PASSWORD"}
// // //           </Button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AdminSettings;



// // 'use client';

// // import { useState, useEffect } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// // import Toast from '@/components/toast';

// // import { settingsService } from '@/services/settings.service';

// // export default function AdminSettings() {
// //   const queryClient = useQueryClient();

// //   const { data: settings, isLoading } = useQuery({
// //     queryKey: ['competition-settings'],
// //     queryFn: settingsService.getSettings,
// //   });

// //   const [minVotes, setMinVotes] = useState(1000);

// //   const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

// //   // Load min votes from settings
// //   useEffect(() => {
// //     if (settings?.min_votes_for_selection !== undefined) {
// //       setMinVotes(settings.min_votes_for_selection);
// //     }
// //   }, [settings]);

// //   const updateMinVotesMutation = useMutation({
// //     mutationFn: () => settingsService.updateSettings({ min_votes_for_selection: minVotes }),
// //     onSuccess: () => {
// //       queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
// //       setToast({ message: "Minimum votes updated successfully!", type: 'success' });
// //     },
// //     onError: (err: any) => {
// //       setToast({ message: `Failed to update: ${err.message}`, type: 'error' });
// //     },
// //   });

// //   const deactivateLowVoteMutation = useMutation({
// //     mutationFn: settingsService.deactivateLowVoteUsers,
// //     onSuccess: (result) => {
// //       setToast({ 
// //         message: `Deactivated users with less than ${result.minVotes} votes`, 
// //         type: 'success' 
// //       });
// //     },
// //     onError: (err: any) => {
// //       setToast({ message: `Failed to deactivate: ${err.message}`, type: 'error' });
// //     },
// //   });

// //   const disableVotingMutation = useMutation({
// //     mutationFn: settingsService.disableVoting,
// //     onSuccess: () => {
// //       setToast({ message: "Voting has been disabled for everyone!", type: 'success' });
// //       queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
// //     },
// //     onError: (err: any) => {
// //       setToast({ message: `Failed to disable voting: ${err.message}`, type: 'error' });
// //     },
// //   });

// //   const handleUpdateMinVotes = () => updateMinVotesMutation.mutate();
// //   const handleDeactivateLowVote = () => deactivateLowVoteMutation.mutate();
// //   const handleDisableVoting = () => disableVotingMutation.mutate();

// //   if (isLoading) {
// //     return <div className="p-12 text-center text-muted-foreground">Loading settings...</div>;
// //   }

// //   return (
// //     <div className="max-w-4xl mx-auto p-6">
// //       <div className="mb-10">
// //         <h1 className="font-display text-4xl font-bold text-foreground">
// //           GLOBAL <span className="italic text-gold">SETTINGS</span>
// //         </h1>
// //         <p className="text-muted-foreground mt-2">Manage competition rules and controls</p>
// //       </div>

// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //         {/* Minimum Votes Card */}
// //         <div className="glass-card rounded-3xl p-8 border border-border">
// //           <h3 className="font-display text-2xl font-semibold mb-6">Selection Requirements</h3>

// //           <div className="mb-8">
// //             <p className="text-xs tracking-widest text-muted-foreground mb-3">MINIMUM VOTES TO QUALIFY</p>
// //             <Input
// //               type="number"
// //               value={minVotes}
// //               onChange={(e) => setMinVotes(Math.max(0, parseInt(e.target.value) || 0))}
// //               className="text-4xl font-medium h-20 text-center"
// //             />
// //           </div>

// //           <div className="space-y-3">
// //             <Button 
// //               onClick={handleUpdateMinVotes}
// //               disabled={updateMinVotesMutation.isPending}
// //               className="w-full bg-gradient-crimson py-6 text-base font-semibold"
// //             >
// //               {updateMinVotesMutation.isPending ? "UPDATING..." : "UPDATE MINIMUM VOTES"}
// //             </Button>

// //             <Button 
// //               onClick={handleDeactivateLowVote}
// //               disabled={deactivateLowVoteMutation.isPending}
// //               variant="destructive"
// //               className="w-full py-6 text-base font-semibold"
// //             >
// //               {deactivateLowVoteMutation.isPending ? "DEACTIVATING..." : "DEACTIVATE LOW-VOTE USERS"}
// //             </Button>
// //           </div>
// //         </div>

// //         {/* Global Voting Control */}
// //         <div className="glass-card rounded-3xl p-8 border border-border flex flex-col">
// //           <h3 className="font-display text-2xl font-semibold mb-6">Global Voting Control</h3>
          
// //           <p className="text-muted-foreground mb-8">
// //             This will immediately stop all voting across the entire platform.
// //           </p>

// //           <Button 
// //             onClick={handleDisableVoting}
// //             disabled={disableVotingMutation.isPending}
// //             variant="destructive"
// //             className="mt-auto w-full py-6 text-base font-semibold"
// //           >
// //             {disableVotingMutation.isPending ? "DISABLING..." : "DISABLE VOTING FOR EVERYONE"}
// //           </Button>
// //         </div>
// //       </div>

// //       {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
// //     </div>
// //   );
// // }



// 'use client';

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import Toast from '@/components/toast';

// import { settingsService } from '@/services/settings.service';

// export default function AdminSettings() {
//   const queryClient = useQueryClient();

//   const { data: settings, isLoading } = useQuery({
//     queryKey: ['competition-settings'],
//     queryFn: settingsService.getSettings,
//   });

//   const [minVotes, setMinVotes] = useState(1000);

//   const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

//   // Load min votes from settings
//   useEffect(() => {
//     if (settings?.min_votes_for_selection !== undefined) {
//       setMinVotes(settings.min_votes_for_selection);
//     }
//   }, [settings]);

//   const updateMinVotesMutation = useMutation({
//     mutationFn: () => settingsService.updateSettings({ min_votes_for_selection: minVotes }),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
//       setToast({ message: "Minimum votes updated successfully!", type: 'success' });
//     },
//     onError: (err: any) => {
//       setToast({ message: `Failed to update: ${err.message}`, type: 'error' });
//     },
//   });

//   const deactivateLowVoteMutation = useMutation({
//     mutationFn: settingsService.deactivateLowVoteUsers,
//     onSuccess: (result) => {
//       setToast({ 
//         message: `Deactivated users with less than ${result.minVotes} votes`, 
//         type: 'success' 
//       });
//     },
//     onError: (err: any) => {
//       setToast({ message: `Failed to deactivate: ${err.message}`, type: 'error' });
//     },
//   });

//   const disableVotingMutation = useMutation({
//     mutationFn: settingsService.disableVoting,
//     onSuccess: () => {
//       setToast({ message: "Voting has been disabled for everyone!", type: 'success' });
//       queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
//     },
//     onError: (err: any) => {
//       setToast({ message: `Failed to disable voting: ${err.message}`, type: 'error' });
//     },
//   });

//   const handleUpdateMinVotes = () => updateMinVotesMutation.mutate();
//   const handleDeactivateLowVote = () => deactivateLowVoteMutation.mutate();
//   const handleDisableVoting = () => disableVotingMutation.mutate();

//   if (isLoading) {
//     return <div className="p-12 text-center text-muted-foreground">Loading settings...</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <div className="mb-10">
//         <h1 className="font-display text-4xl font-bold text-foreground">
//           GLOBAL <span className="italic text-gold">SETTINGS</span>
//         </h1>
//         <p className="text-muted-foreground mt-2">Manage competition rules and controls</p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Minimum Votes Card */}
//         <div className="glass-card rounded-3xl p-8 border border-border">
//           <h3 className="font-display text-2xl font-semibold mb-6">Selection Requirements</h3>

//           <div className="mb-8">
//             <p className="text-xs tracking-widest text-muted-foreground mb-3">MINIMUM VOTES TO QUALIFY</p>
//             <Input
//               type="number"
//               value={minVotes}
//               onChange={(e) => setMinVotes(Math.max(0, parseInt(e.target.value) || 0))}
//               className="text-4xl font-medium h-20 text-center"
//             />
//           </div>

//           <div className="space-y-3">
//             <Button 
//               onClick={handleUpdateMinVotes}
//               disabled={updateMinVotesMutation.isPending}
//               className="w-full bg-gradient-crimson py-6 text-base font-semibold"
//             >
//               {updateMinVotesMutation.isPending ? "UPDATING..." : "UPDATE MINIMUM VOTES"}
//             </Button>

//             <Button 
//               onClick={handleDeactivateLowVote}
//               disabled={deactivateLowVoteMutation.isPending}
//               variant="destructive"
//               className="w-full py-6 text-base font-semibold"
//             >
//               {deactivateLowVoteMutation.isPending ? "DEACTIVATING..." : "DEACTIVATE LOW-VOTE USERS"}
//             </Button>
//           </div>
//         </div>

//         {/* Global Voting Control */}
//         <div className="glass-card rounded-3xl p-8 border border-border flex flex-col">
//           <h3 className="font-display text-2xl font-semibold mb-6">Global Voting Control</h3>
          
//           <p className="text-muted-foreground mb-8">
//             This will immediately stop all voting across the entire platform.
//           </p>

//           <Button 
//             onClick={handleDisableVoting}
//             disabled={disableVotingMutation.isPending}
//             variant="destructive"
//             className="mt-auto w-full py-6 text-base font-semibold"
//           >
//             {disableVotingMutation.isPending ? "DISABLING..." : "DISABLE VOTING FOR EVERYONE"}
//           </Button>
//         </div>
//       </div>

//       {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
//     </div>
//   );
// }



// 'use client';

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import Toast from '@/components/toast';

// import { settingsService } from '@/services/settings.service';
// import ConfirmDialog from "@/components/ConfirmDialog";

// export default function AdminSettings() {
//   const queryClient = useQueryClient();

//   const { data: settings, isLoading } = useQuery({
//     queryKey: ['competition-settings'],
//     queryFn: settingsService.getSettings,
//   });

//   const [minVotes, setMinVotes] = useState(1000);
//   const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

//   // Load current min votes
//   useEffect(() => {
//     if (settings?.min_votes_for_selection) {
//       setMinVotes(settings.min_votes_for_selection);
//     }
//   }, [settings]);

//   const deactivateMutation = useMutation({
//     mutationFn: () => settingsService.deactivateLowVoteUsers(minVotes),
//     onSuccess: () => {
//       setToast({ 
//         message: `Successfully deactivated users with less than ${minVotes} votes`, 
//         type: 'success' 
//       });
//       queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
//     },
//     onError: (err: any) => {
//       setToast({ message: `Failed to deactivate: ${err.message}`, type: 'error' });
//     },
//   });

//   const disableVotingMutation = useMutation({
//     mutationFn: settingsService.disableVoting,
//     onSuccess: () => {
//       setToast({ message: "Voting has been disabled for everyone!", type: 'success' });
//       queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
//     },
//     onError: (err: any) => {
//       setToast({ message: `Failed to disable voting: ${err.message}`, type: 'error' });
//     },
//   });

  
//   // Password change
//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPasswordFields, setShowPasswordFields] = useState(false);

//   // Confirmation dialogs
//   const [showDeactivateConfirm, setShowDeactivateConfirm] = useState(false);
//   const [showDisableVotingConfirm, setShowDisableVotingConfirm] = useState(false);
//   const [showChangePasswordConfirm, setShowChangePasswordConfirm] = useState(false);

//   const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

//   // Load min votes
//   useEffect(() => {
//     if (settings?.min_votes_for_selection) {
//       setMinVotes(settings.min_votes_for_selection);
//     }
//   }, [settings]);

//   // Mutations
//   const deactivateMutation = useMutation({
//     mutationFn: () => settingsService.deactivateLowVoteUsers(minVotes),
//     onSuccess: () => {
//       setToast({ message: `Deactivated users with less than ${minVotes} votes`, type: 'success' });
//       queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
//       setShowDeactivateConfirm(false);
//     },
//     onError: (err: any) => setToast({ message: `Failed: ${err.message}`, type: 'error' }),
//   });

//   const disableVotingMutation = useMutation({
//     mutationFn: settingsService.disableVoting,
//     onSuccess: () => {
//       setToast({ message: "Voting has been disabled for everyone!", type: 'success' });
//       queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
//       setShowDisableVotingConfirm(false);
//     },
//     onError: (err: any) => setToast({ message: `Failed: ${err.message}`, type: 'error' }),
//   });

//   const changePasswordMutation = useMutation({
//     mutationFn: async () => {
//       if (newPassword !== confirmPassword) throw new Error("Passwords do not match");
//       if (newPassword.length < 8) throw new Error("Password must be at least 8 characters");
//       // TODO: Call real backend when ready
//       await new Promise(r => setTimeout(r, 800));
//     },
//     onSuccess: () => {
//       setToast({ message: "Password changed successfully!", type: 'success' });
//       setOldPassword(""); setNewPassword(""); setConfirmPassword("");
//       setShowPasswordFields(false);
//       setShowChangePasswordConfirm(false);
//     },
//     onError: (err: any) => setToast({ message: err.message, type: 'error' }),
//   });

//   const handleDeactivate = () => setShowDeactivateConfirm(true);
//   const handleDisableVoting = () => setShowDisableVotingConfirm(true);
//   const handleChangePassword = () => {
//     if (!oldPassword || !newPassword || !confirmPassword) {
//       setToast({ message: "Please fill all password fields", type: 'info' });
//       return;
//     }
//     setShowChangePasswordConfirm(true);
//   };

//   if (isLoading) {
//     return <div className="p-12 text-center text-muted-foreground">Loading settings...</div>;
//   }

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-8">
//       {/* Header */}
//       <div className="mb-10">
//         <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
//           GLOBAL <span className="italic text-gold">SETTINGS</span>
//         </h1>
//         <p className="text-sm md:text-base text-muted-foreground mt-3">
//           Manage competition rules and voting controls
//         </p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Minimum Votes Section */}
//         <div className="glass-card rounded-3xl p-8 border border-border">
//           <h3 className="font-display text-2xl font-semibold mb-6">Selection Requirements</h3>

//           <div className="mb-8">
//             <p className="text-xs tracking-widest text-muted-foreground mb-3">
//               MINIMUM VOTES TO QUALIFY
//             </p>
//             <Input
//               type="number"
//               value={minVotes}
//               onChange={(e) => setMinVotes(Math.max(0, parseInt(e.target.value) || 0))}
//               className="text-4xl font-medium h-20 text-center"
//             />
//           </div>

//           <Button 
//             onClick={handleDeactivate}
//             variant="destructive"
//             className="w-full py-6 text-base font-semibold"
//           >
//             DEACTIVATE ALL USERS BELOW {minVotes} VOTES
//           </Button>
//         </div>

//         {/* Global Controls + Password */}
//         <div className="space-y-8">
//           {/* Disable Voting */}
//           <div className="glass-card rounded-3xl p-8 border border-border flex flex-col">
//             <h3 className="font-display text-2xl font-semibold mb-6">Global Voting Control</h3>
//             <p className="text-muted-foreground mb-8">
//               Immediately stop all voting across the platform.
//             </p>
//             <Button 
//               onClick={handleDisableVoting}
//               variant="destructive"
//               className="mt-auto w-full py-6 text-base font-semibold"
//             >
//               DISABLE VOTING FOR EVERYONE
//             </Button>
//           </div>

//           {/* Change Password */}
//           <div className="glass-card rounded-3xl p-8 border border-border">
//             <h3 className="font-display text-2xl font-semibold mb-6">Admin Security</h3>

//             {!showPasswordFields ? (
//               <Button 
//                 onClick={() => setShowPasswordFields(true)}
//                 variant="outline"
//                 className="w-full py-6"
//               >
//                 CHANGE ADMIN PASSWORD
//               </Button>
//             ) : (
//               <div className="space-y-4">
//                 <Input
//                   type="password"
//                   placeholder="New Password (min 8 chars)"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                 />
//                 <Input
//                   type="password"
//                   placeholder="Confirm New Password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />

//                 <div className="flex gap-3">
//                   <Button 
//                     onClick={() => {
//                       setShowPasswordFields(false);
//                       setNewPassword("");
//                       setConfirmPassword("");
//                     }}
//                     variant="outline"
//                     className="flex-1"
//                   >
//                     CANCEL
//                   </Button>
//                   <Button 
//                     onClick={handleChangePassword}
//                     disabled={!newPassword || newPassword !== confirmPassword}
//                     className="flex-1 bg-gradient-crimson"
//                   >
//                     CHANGE PASSWORD
//                   </Button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Confirmation Dialogs */}
//       <ConfirmDialog
//         isOpen={showDeactivateConfirm}
//         title="Deactivate Low-Vote Users"
//         message={`Are you sure you want to deactivate all users with fewer than ${minVotes} votes? This action cannot be undone.`}
//         confirmText="Yes, Deactivate"
//         isDestructive={true}
//         onConfirm={() => deactivateMutation.mutate()}
//         onCancel={() => setShowDeactivateConfirm(false)}
//       />

//       <ConfirmDialog
//         isOpen={showDisableVotingConfirm}
//         title="Disable Voting"
//         message="Are you sure you want to disable voting for everyone? This will stop all voting immediately."
//         confirmText="Yes, Disable Voting"
//         isDestructive={true}
//         onConfirm={() => disableVotingMutation.mutate()}
//         onCancel={() => setShowDisableVotingConfirm(false)}
//       />

//       <ConfirmDialog
//         isOpen={showChangePasswordConfirm}
//         title="Change Password"
//         message="Are you sure you want to change the admin password?"
//         confirmText="Yes, Change Password"
//         onConfirm={() => changePasswordMutation.mutate()}
//         onCancel={() => setShowChangePasswordConfirm(false)}
//       />

//       {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
//     </div>
//   );
// }






// 'use client';

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import Toast from '@/components/toast';
// import ConfirmDialog from '@/components/ConfirmDialog';

// import { settingsService } from '@/services/settings.service';
// import LoadingState from "@/components/LoadingState";
// import { authService } from "@/services/auth.service";

// export default function AdminSettings() {
//   const queryClient = useQueryClient();

//   const { data: settings, isLoading } = useQuery({
//     queryKey: ['competition-settings'],
//     queryFn: settingsService.getSettings,
//   });

//   const [minVotes, setMinVotes] = useState(1000);

//   // Password fields
//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPasswordFields, setShowPasswordFields] = useState(false);

//   // Confirmation dialogs
//   const [showDeactivateConfirm, setShowDeactivateConfirm] = useState(false);
//   const [showDisableVotingConfirm, setShowDisableVotingConfirm] = useState(false);
//   const [showChangePasswordConfirm, setShowChangePasswordConfirm] = useState(false);

//   const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

//   // Load min votes
//   useEffect(() => {
//     if (settings?.min_votes_for_selection) {
//       setMinVotes(settings.min_votes_for_selection);
//     }
//   }, [settings]);

//   const changePasswordMutation = useMutation({
//   mutationFn: () => authService.changeAdminPassword(
//     // You need to pass the current admin name. 
//     // For simplicity, you can get it from localStorage or context
//     "your_admin_name_here",   // Replace with actual admin name from session
//     oldPassword,
//     newPassword
//   ),
//   // ... onSuccess / onError
// });

//   // Mutations
//   const deactivateMutation = useMutation({
//     mutationFn: () => settingsService.deactivateLowVoteUsers(minVotes),
//     onSuccess: () => {
//       setToast({ 
//         message: `Deactivated users with less than ${minVotes} votes`, 
//         type: 'success' 
//       });
//       queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
//       setShowDeactivateConfirm(false);
//     },
//     onError: (err: any) => {
//       setToast({ message: `Failed: ${err.message}`, type: 'error' });
//     },
//   });

//   const disableVotingMutation = useMutation({
//     mutationFn: settingsService.disableVoting,
//     onSuccess: () => {
//       setToast({ message: "Voting has been disabled for everyone!", type: 'success' });
//       queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
//       setShowDisableVotingConfirm(false);
//     },
//     onError: (err: any) => {
//       setToast({ message: `Failed: ${err.message}`, type: 'error' });
//     },
//   });

//   const changePasswordMutation = useMutation({
//     mutationFn: async () => {
//       if (newPassword !== confirmPassword) throw new Error("Passwords do not match");
//       if (newPassword.length < 8) throw new Error("Password must be at least 8 characters");
//       // TODO: Replace with real backend call later
//       await new Promise(r => setTimeout(r, 800));
//     },
//     onSuccess: () => {
//       setToast({ message: "Password changed successfully!", type: 'success' });
//       setOldPassword("");
//       setNewPassword("");
//       setConfirmPassword("");
//       setShowPasswordFields(false);
//       setShowChangePasswordConfirm(false);
//     },
//     onError: (err: any) => setToast({ message: err.message, type: 'error' }),
//   });

//   const handleDeactivate = () => setShowDeactivateConfirm(true);
//   const handleDisableVoting = () => setShowDisableVotingConfirm(true);
// const handleChangePassword = () => {
//   if (!oldPassword || !newPassword || !confirmPassword) {
//     setToast({ message: "Please fill all password fields", type: 'info' });
//     return;
//   }
//   if (newPassword !== confirmPassword) {
//     setToast({ message: "Passwords do not match", type: 'error' });
//     return;
//   }
//   if (newPassword.length < 8) {
//     setToast({ message: "Password must be at least 8 characters", type: 'error' });
//     return;
//   }

//   changePasswordMutation.mutate();
// };

//   if (isLoading) {
//     return <LoadingState />;
//   }

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-8">
//       <div className="mb-10">
//         <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
//           GLOBAL <span className="italic text-gold">SETTINGS</span>
//         </h1>
//         <p className="text-sm md:text-base text-muted-foreground mt-3">
//           Manage competition rules and security
//         </p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Minimum Votes Section */}
//         <div className="glass-card rounded-3xl p-8 border border-border">
//           <h3 className="font-display text-2xl font-semibold mb-6">Selection Requirements</h3>

//           <div className="mb-8">
//             <p className="text-xs tracking-widest text-muted-foreground mb-3">
//               MINIMUM VOTES TO QUALIFY
//             </p>
//             <Input
//               type="number"
//               value={minVotes}
//               onChange={(e) => setMinVotes(Math.max(0, parseInt(e.target.value) || 0))}
//               className="text-4xl font-medium h-20 text-center"
//             />
//           </div>

//           <Button 
//             onClick={handleDeactivate}
//             variant="destructive"
//             className="w-full py-6 text-base font-semibold"
//           >
//             DEACTIVATE ALL USERS BELOW {minVotes} VOTES
//           </Button>
//         </div>

//         {/* Global Controls + Password */}
//         <div className="space-y-8">
//           {/* Disable Voting */}
//           <div className="glass-card rounded-3xl p-8 border border-border flex flex-col">
//             <h3 className="font-display text-2xl font-semibold mb-6">Global Voting Control</h3>
//             <p className="text-muted-foreground mb-8">
//               Immediately stop all voting across the platform.
//             </p>
//             <Button 
//               onClick={handleDisableVoting}
//               variant="destructive"
//               className="mt-auto w-full py-6 text-base font-semibold"
//             >
//               DISABLE VOTING FOR EVERYONE
//             </Button>
//           </div>

//           {/* Change Password */}
//           <div className="glass-card rounded-3xl p-8 border border-border">
//             <h3 className="font-display text-2xl font-semibold mb-6">Admin Security</h3>

//             {!showPasswordFields ? (
//               <Button 
//                 onClick={() => setShowPasswordFields(true)}
//                 variant="outline"
//                 className="w-full py-6"
//               >
//                 CHANGE ADMIN PASSWORD
//               </Button>
//             ) : (
//               <div className="space-y-4">
//                 <Input
//                   type="password"
//                   placeholder="New Password (min 8 chars)"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                 />
//                 <Input
//                   type="password"
//                   placeholder="Confirm New Password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />

//                 <div className="flex gap-3">
//                   <Button 
//                     onClick={() => {
//                       setShowPasswordFields(false);
//                       setNewPassword("");
//                       setConfirmPassword("");
//                     }}
//                     variant="outline"
//                     className="flex-1"
//                   >
//                     CANCEL
//                   </Button>
//                   <Button 
//                     onClick={handleChangePassword}
//                     disabled={!newPassword || newPassword !== confirmPassword}
//                     className="flex-1 bg-gradient-crimson"
//                   >
//                     CHANGE PASSWORD
//                   </Button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Confirmation Dialogs */}
//       <ConfirmDialog
//         isOpen={showDeactivateConfirm}
//         title="Deactivate Low-Vote Users"
//         message={`Are you sure you want to deactivate all users with fewer than ${minVotes} votes? This action cannot be undone.`}
//         confirmText="Yes, Deactivate"
//         isDestructive={true}
//         onConfirm={() => deactivateMutation.mutate()}
//         onCancel={() => setShowDeactivateConfirm(false)}
//       />

//       <ConfirmDialog
//         isOpen={showDisableVotingConfirm}
//         title="Disable Voting"
//         message="Are you sure you want to disable voting for everyone? This will stop all voting immediately."
//         confirmText="Yes, Disable Voting"
//         isDestructive={true}
//         onConfirm={() => disableVotingMutation.mutate()}
//         onCancel={() => setShowDisableVotingConfirm(false)}
//       />

//       <ConfirmDialog
//         isOpen={showChangePasswordConfirm}
//         title="Change Password"
//         message="Are you sure you want to change the admin password?"
//         confirmText="Yes, Change Password"
//         onConfirm={() => changePasswordMutation.mutate()}
//         onCancel={() => setShowChangePasswordConfirm(false)}
//       />

//       {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
//     </div>
//   );
// }



'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Toast from '@/components/toast';
import ConfirmDialog from '@/components/ConfirmDialog';

import { settingsService } from '@/services/settings.service';
import { authService } from '@/services/auth.service';

export default function AdminSettings() {
  const queryClient = useQueryClient();

  const { data: settings, isLoading } = useQuery({
    queryKey: ['competition-settings'],
    queryFn: settingsService.getSettings,
  });

  const [minVotes, setMinVotes] = useState(1000);

  // Password change fields
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordFields, setShowPasswordFields] = useState(false);

  // Confirmation dialogs
  const [showDeactivateConfirm, setShowDeactivateConfirm] = useState(false);
  const [showDisableVotingConfirm, setShowDisableVotingConfirm] = useState(false);
  const [showChangePasswordConfirm, setShowChangePasswordConfirm] = useState(false);

  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  // Load min votes
  useEffect(() => {
    if (settings?.min_votes_for_selection) {
      setMinVotes(settings.min_votes_for_selection);
    }
  }, [settings]);

  // Mutations
  const deactivateMutation = useMutation({
    mutationFn: () => settingsService.deactivateLowVoteUsers(minVotes),
    onSuccess: () => {
      setToast({ 
        message: `Deactivated users with less than ${minVotes} votes`, 
        type: 'success' 
      });
      queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
      setShowDeactivateConfirm(false);
    },
    onError: (err: any) => setToast({ message: `Failed: ${err.message}`, type: 'error' }),
  });

  const disableVotingMutation = useMutation({
    mutationFn: settingsService.disableVoting,
    onSuccess: () => {
      setToast({ message: "Voting has been disabled for everyone!", type: 'success' });
      queryClient.invalidateQueries({ queryKey: ['competition-settings'] });
      setShowDisableVotingConfirm(false);
    },
    onError: (err: any) => setToast({ message: `Failed: ${err.message}`, type: 'error' }),
  });

  const changePasswordMutation = useMutation({
    mutationFn: () => {
      if (!oldPassword || !newPassword || !confirmPassword) {
        throw new Error("Please fill all password fields");
      }
      if (newPassword !== confirmPassword) {
        throw new Error("New passwords do not match");
      }
      if (newPassword.length < 6) {
        throw new Error("New password must be at least 6 characters");
      }

      const currentAdmin = authService.getCurrentAdmin();
      if (!currentAdmin?.admin_name) {
        throw new Error("Admin session not found. Please log in again.");
      }

      return authService.changeAdminPassword(
        currentAdmin.admin_name,
        oldPassword,
        newPassword
      );
    },
    onSuccess: () => {
      setToast({ message: "Password changed successfully!", type: 'success' });
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setShowPasswordFields(false);
      setShowChangePasswordConfirm(false);
    },
    onError: (err: any) => {
      setToast({ message: err.message || "Failed to change password", type: 'error' });
    },
  });

  const handleDeactivate = () => setShowDeactivateConfirm(true);
  const handleDisableVoting = () => setShowDisableVotingConfirm(true);
  const handleChangePassword = () => setShowChangePasswordConfirm(true);

  if (isLoading) {
    return <div className="p-12 text-center text-muted-foreground">Loading settings...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-10">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          GLOBAL <span className="italic text-gold">SETTINGS</span>
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mt-3">
          Manage competition rules and security
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Minimum Votes Section */}
        <div className="glass-card rounded-3xl p-8 border border-border">
          <h3 className="font-display text-2xl font-semibold mb-6">Selection Requirements</h3>

          <div className="mb-8">
            <p className="text-xs tracking-widest text-muted-foreground mb-3">
              MINIMUM VOTES TO QUALIFY
            </p>
            <Input
              type="number"
              value={minVotes}
              onChange={(e) => setMinVotes(Math.max(0, parseInt(e.target.value) || 0))}
              className="text-4xl font-medium h-20 text-center"
            />
          </div>

          <Button 
            onClick={handleDeactivate}
            variant="destructive"
            className="w-full py-6 text-base font-semibold bg-primary hover:bg-primary/70"
          >
            DEACTIVATE ALL USERS BELOW VOTE
          </Button>
        </div>

        {/* Global Controls + Password */}
        <div className="space-y-8">
          {/* Disable Voting */}
          <div className="glass-card rounded-3xl p-8 border border-border flex flex-col">
            <h3 className="font-display text-2xl font-semibold mb-6">Global Voting Control</h3>
            <p className="text-muted-foreground mb-8">
              Immediately stop all voting across the platform.
            </p>
            <Button 
              onClick={handleDisableVoting}
              variant="destructive"
              className="mt-auto w-full py-6 text-base font-semibold bg-primary hover:bg-primary/70"
            >
              DISABLE VOTING FOR EVERYONE
            </Button>
          </div>

          {/* Change Password */}
          <div className="glass-card rounded-3xl p-8 border border-border">
            <h3 className="font-display text-2xl font-semibold mb-6">Admin Security</h3>

            {!showPasswordFields ? (
              <Button 
                onClick={() => setShowPasswordFields(true)}
                variant="outline"
                className="w-full py-6 hover:text-white bg-primary hover:bg-primary/70"
              >
                CHANGE ADMIN PASSWORD
              </Button>
            ) : (
              <div className="space-y-4">
                <Input
                  type="password"
                  placeholder="Current Password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="New Password (min 6 chars)"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <div className="flex gap-3">
                  <Button 
                    onClick={() => {
                      setShowPasswordFields(false);
                      setOldPassword("");
                      setNewPassword("");
                      setConfirmPassword("");
                    }}
                    variant="outline"
                    className="flex-1"
                  >
                    CANCEL
                  </Button>
                  <Button 
                    onClick={handleChangePassword}
                    disabled={!oldPassword || !newPassword || newPassword !== confirmPassword}
                    className="flex-1 bg-primary hover:bg-secondary"
                  >
                    CHANGE PASSWORD
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Confirmation Dialogs */}
      <ConfirmDialog
        isOpen={showDeactivateConfirm}
        title="Deactivate Low-Vote Users"
        message={`Are you sure you want to deactivate all users with fewer than ${minVotes} votes? This action cannot be undone.`}
        confirmText="Yes, Deactivate"
        isDestructive={true}
        onConfirm={() => deactivateMutation.mutate()}
        onCancel={() => setShowDeactivateConfirm(false)}
      />

      <ConfirmDialog
        isOpen={showDisableVotingConfirm}
        title="Disable Voting"
        message="Are you sure you want to disable voting for everyone? This will stop all voting immediately."
        confirmText="Yes, Disable Voting"
        isDestructive={true}
        onConfirm={() => disableVotingMutation.mutate()}
        onCancel={() => setShowDisableVotingConfirm(false)}
      />

      <ConfirmDialog
        isOpen={showChangePasswordConfirm}
        title="Change Password"
        message="Are you sure you want to change the admin password?"
        confirmText="Yes, Change Password"
        isDestructive={true}
        onConfirm={() => changePasswordMutation.mutate()}
        onCancel={() => setShowChangePasswordConfirm(false)}
      />

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}