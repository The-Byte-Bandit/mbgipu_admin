// // // // app/admin/analytics/page.tsx
// // // 'use client';

// // // import Image from 'next/image';
// // // import { TrendingUp, TrendingDown, BarChart3, PieChart, Users, Heart, DollarSign, Globe } from "lucide-react";
// // // import { contestants } from "@/data/contestants";

// // // const metrics = [
// // //   { icon: Heart, label: "Total Votes Today", value: "8,420", change: "+18%", up: true },
// // //   { icon: DollarSign, label: "Revenue Today", value: "$2,840", change: "+12%", up: true },
// // //   { icon: Users, label: " Voters", value: "3,210", change: "-3%", up: false },
// // // ];

// // // const weekData = [
// // //   { day: "MON", votes: 45, revenue: 25 },
// // //   { day: "TUE", votes: 60, revenue: 35 },
// // //   { day: "WED", votes: 50, revenue: 30 },
// // //   { day: "THU", votes: 75, revenue: 45 },
// // //   { day: "FRI", votes: 85, revenue: 55 },
// // //   { day: "SAT", votes: 95, revenue: 65 },
// // //   { day: "SUN", votes: 100, revenue: 70 },
// // // ];

// // // const schools = [
// // //   { name: "Unport", pct: 42, color: "bg-primary" },
// // //   { name: "Ignatius", pct: 28, color: "bg-gold" },
// // //   { name: "Ust", pct: 20, color: "bg-green-400" },
// // // ];

// // // export default function AdminAnalytics() {
// // //   return (
// // //     <div>
// // //       {/* Header */}
// // //       <div className="mb-8">
// // //         <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
// // //           VOTING <span className="font-display italic text-gold">ANALYTICS</span>
// // //         </h1>
// // //         <p className="text-sm text-muted-foreground font-body mt-1 title">Real-time Voting Data & Insights</p>
// // //       </div>

// // //       {/* Metrics */}
// // //       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
// // //         {metrics.map((m) => (
// // //           <div key={m.label} className="glass-card rounded-xl p-5 border border-border">
// // //             <div className="flex items-center justify-between mb-3">
// // //               <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
// // //                 <m.icon className="w-5 h-5 text-primary" />
// // //               </div>
// // //               <span className={`text-[10px] font-body font-semibold flex items-center gap-0.5 ${m.up ? "text-green-400" : "text-red-400"}`}>
// // //                 {m.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
// // //                 {m.change}
// // //               </span>
// // //             </div>
// // //             <p className="text-xs text-muted-foreground font-body">{m.label}</p>
// // //             <p className="font-display text-2xl font-bold text-foreground mt-1">{m.value}</p>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Charts Row */}
// // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
// // //         {/* Weekly Trend */}
// // //         <div className="lg:col-span-2 glass-card rounded-xl p-6 border border-border">
// // //           <div className="flex items-center justify-between mb-4">
// // //             <div className="flex items-center gap-2">
// // //               <BarChart3 className="w-5 h-5 text-primary" />
// // //               <h3 className="font-display text-lg font-bold text-foreground">Weekly Voting Trend</h3>
// // //             </div>
// // //             <span className="text-xs font-body text-muted-foreground bg-secondary px-3 py-1 rounded-full">This Week</span>
// // //           </div>

// // //           <div className="flex items-end justify-between gap-2 h-44">
// // //             {weekData.map((d) => (
// // //               <div key={d.day} className="flex flex-col items-center gap-1 flex-1">
// // //                 <div className="flex gap-1 items-end w-full justify-center">
// // //                   <div className="w-3 bg-gold/40 rounded-t" style={{ height: `${d.revenue}%` }} />
// // //                   <div className="w-3 bg-gradient-crimson rounded-t" style={{ height: `${d.votes}%` }} />
// // //                 </div>
// // //                 <span className="text-[10px] font-body text-muted-foreground mt-2">{d.day}</span>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           <div className="flex items-center gap-4 mt-4">
// // //             <div className="flex items-center gap-2">
// // //               <div className="w-3 h-3 bg-gradient-crimson rounded" />
// // //               <span className="text-[10px] font-body text-muted-foreground">Votes</span>
// // //             </div>
// // //             <div className="flex items-center gap-2">
// // //               <div className="w-3 h-3 bg-gold/40 rounded" />
// // //               <span className="text-[10px] font-body text-muted-foreground">Revenue</span>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Category Breakdown */}
// // //         <div className="glass-card rounded-xl p-6 border border-border">
// // //           <div className="flex items-center gap-2 mb-6">
// // //             <PieChart className="w-5 h-5 text-primary" />
// // //             <h3 className="font-display text-lg font-bold text-foreground">School Split</h3>
// // //           </div>
// // //           <div className="space-y-4">
// // //             {schools.map((cat) => (
// // //               <div key={cat.name}>
// // //                 <div className="flex items-center justify-between mb-1">
// // //                   <span className="text-xs font-body text-foreground">{cat.name}</span>
// // //                   <span className="text-xs font-body font-bold text-foreground">{cat.pct}%</span>
// // //                 </div>
// // //                 <div className="w-full bg-secondary rounded-full h-2">
// // //                   <div className={`${cat.color} h-2 rounded-full`} style={{ width: `${cat.pct}%` }} />
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Top Performers */}
// // //       <div className="glass-card rounded-xl p-6 border border-border">
// // //         <h3 className="font-display text-lg font-bold text-foreground mb-4">Top Performers This Week</h3>
// // //         <div className="hidden md:grid grid-cols-5 gap-4 text-[10px] font-body font-semibold tracking-[0.1em] text-muted-foreground pb-3 border-b border-border mb-3">
// // //           <span>RANK</span>
// // //           <span>CONTESTANT</span>
// // //           <span>REPRESENTING</span>
// // //           <span>WEEKLY VOTES</span>
// // //           <span>TREND</span>
// // //         </div>

// // //         {contestants
// // //           .sort((a, b) => b.votes - a.votes)
// // //           .slice(0, 5)
// // //           .map((c, i) => (
// // //             <div key={c.id} className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center py-3 border-b border-border/50 last:border-0">
// // //               <span className="font-display text-xl font-bold text-gold">#{i + 1}</span>

// // //               <div className="flex items-center gap-3">
// // //                 <div className="relative w-8 h-8 rounded-full overflow-hidden">
// // //                   <Image
// // //                     src={c.image}
// // //                     alt={c.name}
// // //                     fill
// // //                     className="object-cover"
// // //                   />
// // //                 </div>
// // //                 <span className="text-sm font-body font-medium text-foreground">{c.name}</span>
// // //               </div>

// // //               <span className="text-sm font-body text-muted-foreground hidden md:block">{c.representing}</span>

// // //               <span className="text-sm font-body font-bold text-foreground hidden md:block">
// // //                 {c.votes.toLocaleString()}
// // //               </span>

// // //               <span className="text-green-400 hidden md:flex items-center gap-1 text-xs font-body">
// // //                 <TrendingUp className="w-3 h-3" /> +{Math.floor(Math.random() * 20 + 5)}%
// // //               </span>
// // //             </div>
// // //           ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // 'use client';

// // import { useMemo } from "react";
// // import Image from 'next/image';
// // import { TrendingUp, TrendingDown, BarChart3, PieChart, Users, Heart, DollarSign } from "lucide-react";
// // import { useQuery } from '@tanstack/react-query';

// // import { userService } from '@/services/contestant.service';
// // import { paymentService } from '@/services/payments.service';

// // export default function AdminAnalytics() {
// //   // Fetch contestants (for votes, school split, top performers)
// //   const { data: contestants = [], isLoading: contestantsLoading } = useQuery({
// //     queryKey: ['contestants-analytics'],
// //     queryFn: userService.getAll,
// //   });

// //   // Fetch recent payments (for revenue calculation)
// //   const { data: payments = [], isLoading: paymentsLoading } = useQuery({
// //     queryKey: ['payments-analytics'],
// //     queryFn: paymentService.getAll,
// //   });

// //   const isLoading = contestantsLoading || paymentsLoading;

// //   // Calculate real metrics
// //   const metrics = useMemo(() => {
// //     const totalVotes = contestants.reduce((sum, c) => sum + (c.vote_count || 0), 0);
// //     const totalRevenue = payments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
// //     const activeContestants = contestants.filter(c => c.is_active).length;

// //     // Simple "today" simulation (you can improve this later with real date filtering)
// //     const todayVotes = Math.floor(totalVotes * 0.15) || 1240;
// //     const todayRevenue = Math.floor(totalRevenue * 0.12) || 248000;

// //     return [
// //       { 
// //         icon: Heart, 
// //         label: "Total Votes Today", 
// //         value: todayVotes.toLocaleString(), 
// //         change: "+18%", 
// //         up: true 
// //       },
// //       { 
// //         icon: DollarSign, 
// //         label: "Revenue Today", 
// //         value: `₦${todayRevenue.toLocaleString()}`, 
// //         change: "+12%", 
// //         up: true 
// //       },
// //       { 
// //         icon: Users, 
// //         label: "Active Contestants", 
// //         value: activeContestants.toLocaleString(), 
// //         change: "-3%", 
// //         up: false 
// //       },
// //     ];
// //   }, [contestants, payments]);

// //   // School breakdown (real data)
// //   const schoolBreakdown = useMemo(() => {
// //     const schoolMap = new Map();

// //     contestants.forEach(c => {
// //       if (c.representing) {
// //         const current = schoolMap.get(c.representing) || 0;
// //         schoolMap.set(c.representing, current + (c.vote_count || 0));
// //       }
// //     });

// //     const totalVotes = Array.from(schoolMap.values()).reduce((a, b) => a + b, 0);

// //     return Array.from(schoolMap.entries())
// //       .map(([name, votes]) => ({
// //         name: name.length > 18 ? name.substring(0, 15) + "..." : name,
// //         pct: totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0,
// //         color: name.toLowerCase().includes("uniport") 
// //           ? "bg-primary" 
// //           : name.toLowerCase().includes("ignatius") 
// //             ? "bg-gold" 
// //             : "bg-emerald-500"
// //       }))
// //       .sort((a, b) => b.pct - a.pct)
// //       .slice(0, 3);
// //   }, [contestants]);

// //   // Top performers
// //   const topPerformers = useMemo(() => {
// //     return [...contestants]
// //       .sort((a, b) => (b.vote_count || 0) - (a.vote_count || 0))
// //       .slice(0, 5);
// //   }, [contestants]);

// //   if (isLoading) {
// //     return <div className="p-8 text-center text-muted-foreground">Loading analytics data...</div>;
// //   }

// //   return (
// //     <div>
// //       {/* Header */}
// //       <div className="mb-8">
// //         <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
// //           VOTING <span className="font-display italic text-gold">ANALYTICS</span>
// //         </h1>
// //         <p className="text-sm text-muted-foreground font-body mt-1">Real-time Voting Data & Insights</p>
// //       </div>

// //       {/* Metrics */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
// //         {metrics.map((m, i) => (
// //           <div key={i} className="glass-card rounded-2xl p-6 border border-border">
// //             <div className="flex items-center justify-between mb-4">
// //               <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
// //                 <m.icon className="w-6 h-6 text-primary" />
// //               </div>
// //               <span className={`text-xs font-body font-semibold flex items-center gap-1 ${m.up ? "text-green-400" : "text-red-400"}`}>
// //                 {m.up ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
// //                 {/* {m.change} */}
// //               </span>
// //             </div>
// //             <p className="text-sm text-muted-foreground font-body">{m.label}</p>
// //             <p className="font-display text-3xl font-bold text-foreground mt-2">{m.value}</p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Charts Row */}
// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
// //         {/* Weekly Trend - Mock for now (can be enhanced later) */}
// //         <div className="lg:col-span-2 glass-card rounded-2xl p-6 border border-border">
// //           <div className="flex items-center justify-between mb-6">
// //             <div className="flex items-center gap-3">
// //               <BarChart3 className="w-5 h-5 text-primary" />
// //               <h3 className="font-display text-lg font-bold text-foreground">Weekly Voting Trend</h3>
// //             </div>
// //             <span className="text-xs font-body text-muted-foreground bg-secondary px-4 py-1 rounded-full">This Week</span>
// //           </div>

// //           <div className="h-52 flex items-end justify-between gap-3">
// //             {[1240, 1890, 1560, 2340, 2780, 3120, 2890].map((votes, i) => {
// //               const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
// //               const height = Math.min((votes / 3500) * 100, 100);
// //               return (
// //                 <div key={i} className="flex flex-col items-center gap-2 flex-1">
// //                   <div className="w-full flex justify-center">
// //                     <div 
// //                       className="w-5 bg-gradient-crimson rounded-t" 
// //                       style={{ height: `${height}%` }}
// //                     />
// //                   </div>
// //                   <span className="text-[10px] font-body text-muted-foreground">{days[i]}</span>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>

// //         {/* School Split */}
// //         <div className="glass-card rounded-2xl p-6 border border-border">
// //           <div className="flex items-center gap-3 mb-6">
// //             <PieChart className="w-5 h-5 text-primary" />
// //             <h3 className="font-display text-lg font-bold text-foreground">School Split</h3>
// //           </div>
// //           <div className="space-y-5">
// //             {schoolBreakdown.map((school, i) => (
// //               <div key={i}>
// //                 <div className="flex justify-between mb-1.5">
// //                   <span className="text-sm font-body text-foreground">{school.name}</span>
// //                   <span className="text-sm font-bold">{school.pct}%</span>
// //                 </div>
// //                 <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
// //                   <div 
// //                     className={`${school.color} h-2.5 rounded-full`} 
// //                     style={{ width: `${school.pct}%` }} 
// //                   />
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Top Performers */}
// //       <div className="glass-card rounded-2xl p-6 border border-border">
// //         <h3 className="font-display text-lg font-bold text-foreground mb-5">Top Performers</h3>
        
// //         <div className="hidden md:grid grid-cols-4 gap-4 text-[10px] font-body font-semibold tracking-wider text-muted-foreground pb-4 border-b border-border">
// //           <span>RANK</span>
// //           <span>CONTESTANT</span>
// //           <span>REPRESENTING</span>
// //           <span>TOTAL VOTES</span>
// //           {/* <span>TREND</span> */}
// //         </div>

// //         {topPerformers.map((c, i) => (
// //           <div key={c.id} className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center py-4 border-b border-border/50 last:border-0">
// //             <span className="font-display text-2xl font-bold text-gold">#{i + 1}</span>

// //             <div className="flex items-center gap-3">
// //               <div className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-border">
// //                 <Image
// //                   src={c.images?.[0] || '/images/contestant-placeholder.jpg'}
// //                   alt={`${c.first_name} ${c.last_name}`}
// //                   fill
// //                   className="object-cover"
// //                 />
// //               </div>
// //               <div className="font-medium text-sm">
// //                 {c.first_name} {c.last_name}
// //               </div>
// //             </div>

// //             <span className="text-sm text-muted-foreground hidden md:block">{c.representing}</span>

// //             <span className="text-sm font-bold text-foreground hidden md:block">
// //               {(c.vote_count || 0).toLocaleString()}
// //             </span>
// // {/* 
// //             <span className="text-green-400 text-xs font-body flex items-center gap-1 hidden md:flex">
// //               <TrendingUp className="w-3.5 h-3.5" /> +{Math.floor(Math.random() * 25) + 12}%
// //             </span> */}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }




// 'use client';

// import { useMemo } from "react";
// import Image from 'next/image';
// import { TrendingUp, TrendingDown, BarChart3, PieChart, Users, Heart, DollarSign, Calendar } from "lucide-react";
// import { useQuery } from '@tanstack/react-query';

// import NoData from '@/components/NoData';
// import { userService } from '@/services/contestant.service';
// import { paymentService } from '@/services/payments.service';

// export default function AdminAnalytics() {
//   // Fetch contestants
//   const { data: contestants = [], isLoading: contestantsLoading } = useQuery({
//     queryKey: ['contestants-analytics'],
//     queryFn: userService.getAll,
//   });

//   // Fetch payments
//   const { data: payments = [], isLoading: paymentsLoading } = useQuery({
//     queryKey: ['payments-analytics'],
//     queryFn: paymentService.getAll,
//   });

//   const isLoading = contestantsLoading || paymentsLoading;

//   // Get today's date in YYYY-MM-DD format
//   const todayStr = new Date().toISOString().split('T')[0];

//   // Calculate Today's Metrics (Only today's payments)
//   const todayMetrics = useMemo(() => {
//     const todayPayments = payments.filter(p => {
//       if (!p.created_at) return false;
//       const paymentDate = new Date(p.created_at).toISOString().split('T')[0];
//       return paymentDate === todayStr;
//     });

//     const todayVotes = todayPayments.reduce((sum, p) => sum + (Number(p.votes_purchased) || 0), 0);
//     const todayRevenue = todayPayments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);

//     return {
//       todayVotes,
//       todayRevenue,
//     };
//   }, [payments, todayStr]);

//   // Overall Metrics
//   const metrics = useMemo(() => {
//     const totalVotes = contestants.reduce((sum, c) => sum + (c.vote_count || 0), 0);
//     const totalRevenue = payments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
//     const activeContestants = contestants.filter(c => c.is_active).length;

//     return [
//       { 
//         icon: Heart, 
//         label: "Total Votes Today", 
//         value: todayMetrics.todayVotes.toLocaleString(), 
//         change: todayMetrics.todayVotes > 0 ? "+18%" : "—", 
//         up: true 
//       },
//       { 
//         icon: DollarSign, 
//         label: "Revenue Today", 
//         value: `₦${todayMetrics.todayRevenue.toLocaleString()}`, 
//         change: todayMetrics.todayRevenue > 0 ? "+12%" : "—", 
//         up: true 
//       },
//       { 
//         icon: Users, 
//         label: "Active Contestants", 
//         value: activeContestants.toLocaleString(), 
//         change: "—", 
//         up: false 
//       },
//     ];
//   }, [contestants, payments, todayMetrics]);

//   // School Breakdown
//   const schoolBreakdown = useMemo(() => {
//     const schoolMap = new Map();

//     contestants.forEach(c => {
//       if (c.representing) {
//         const current = schoolMap.get(c.representing) || 0;
//         schoolMap.set(c.representing, current + (c.vote_count || 0));
//       }
//     });

//     const totalVotes = Array.from(schoolMap.values()).reduce((a, b) => a + b, 0);

//     return Array.from(schoolMap.entries())
//       .map(([name, votes]) => ({
//         name: name.length > 20 ? name.substring(0, 17) + "..." : name,
//         pct: totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0,
//         color: name.toLowerCase().includes("uniport") 
//           ? "bg-primary" 
//           : name.toLowerCase().includes("ignatius") 
//             ? "bg-amber-500" 
//             : "bg-emerald-500"
//       }))
//       .sort((a, b) => b.pct - a.pct)
//       .slice(0, 3);
//   }, [contestants]);

//   // Top Performers
//   const topPerformers = useMemo(() => {
//     return [...contestants]
//       .sort((a, b) => (b.vote_count || 0) - (a.vote_count || 0))
//       .slice(0, 5);
//   }, [contestants]);

//   // Main Loading State
//   if (isLoading) {
//     return <div className="p-8 text-center text-muted-foreground">Loading analytics data...</div>;
//   }

//   // Main No Data State
//   if (contestants.length === 0 && payments.length === 0) {
//     return (
//       <NoData 
//         title="No Analytics Data Yet"
//         description="Once contestants are added and votes start coming in, analytics will appear here."
//       />
//     );
//   }

//   return (
//     <div>
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
//           VOTING <span className="font-display italic text-gold">ANALYTICS</span>
//         </h1>
//         <p className="text-sm text-muted-foreground font-body mt-1">Real-time Voting Data & Insights</p>
//       </div>

//       {/* Today's Metrics */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//         {metrics.map((m, i) => (
//           <div key={i} className="glass-card rounded-2xl p-6 border border-border">
//             <div className="flex items-center justify-between mb-4">
//               <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
//                 <m.icon className="w-6 h-6 text-primary" />
//               </div>
//               {/* <span className={`text-xs font-body font-semibold flex items-center gap-1 ${m.up ? "text-green-400" : "text-red-400"}`}>
//                 {m.up ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
//                 {m.change}
//               </span> */}
//             </div>
//             <p className="text-sm text-muted-foreground font-body">{m.label}</p>
//             <p className="font-display text-3xl font-bold text-foreground mt-2">{m.value}</p>
//           </div>
//         ))}
//       </div>

//       {/* Charts Row */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//         {/* Weekly Trend */}
//         <div className="lg:col-span-2 glass-card rounded-2xl p-6 border border-border">
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center gap-3">
//               <BarChart3 className="w-5 h-5 text-primary" />
//               <h3 className="font-display text-lg font-bold text-foreground">Weekly Voting Trend</h3>
//             </div>
//             <span className="text-xs font-body text-muted-foreground bg-secondary px-4 py-1 rounded-full">This Week</span>
//           </div>

//           <div className="h-52 flex items-end justify-between gap-3">
//             {[1240, 1890, 1560, 2340, 2780, 3120, 2890].map((votes, i) => {
//               const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
//               const height = Math.min((votes / 3500) * 100, 100);
//               return (
//                 <div key={i} className="flex flex-col items-center gap-2 flex-1">
//                   <div className="w-full flex justify-center">
//                     <div 
//                       className="w-5 bg-gradient-crimson rounded-t" 
//                       style={{ height: `${height}%` }}
//                     />
//                   </div>
//                   <span className="text-[10px] font-body text-muted-foreground">{days[i]}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* School Split */}
//         <div className="glass-card rounded-2xl p-6 border border-border">
//           <div className="flex items-center gap-3 mb-6">
//             <PieChart className="w-5 h-5 text-primary" />
//             <h3 className="font-display text-lg font-bold text-foreground">School Split</h3>
//           </div>

//           {schoolBreakdown.length > 0 ? (
//             <div className="space-y-5">
//               {schoolBreakdown.map((school, i) => (
//                 <div key={i}>
//                   <div className="flex justify-between mb-1.5">
//                     <span className="text-sm font-body text-foreground">{school.name}</span>
//                     <span className="text-sm font-bold">{school.pct}%</span>
//                   </div>
//                   <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
//                     <div 
//                       className={`${school.color} h-2.5 rounded-full`} 
//                       style={{ width: `${school.pct}%` }} 
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <NoData 
//               title="No School Data"
//               description="School breakdown will appear once contestants are added."
//             />
//           )}
//         </div>
//       </div>

//       {/* Top Performers */}
//       <div className="glass-card rounded-2xl p-6 border border-border">
//         <h3 className="font-display text-lg font-bold text-foreground mb-5">Top Performers</h3>
        
//         {topPerformers.length > 0 ? (
//           <>
//             <div className="hidden md:grid grid-cols-4 gap-4 text-[10px] font-body font-semibold tracking-wider text-muted-foreground pb-4 border-b border-border">
//               <span>RANK</span>
//               <span>CONTESTANT</span>
//               <span>REPRESENTING</span>
//               <span>TOTAL VOTES</span>
//             </div>

//             {topPerformers.map((c, i) => (
//               <div key={c.id} className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center py-4 border-b border-border/50 last:border-0">
//                 <span className="font-display text-2xl font-bold text-gold">#{i + 1}</span>

//                 <div className="flex items-center gap-3">
//                   <div className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-border">
//                     <Image
//                       src={c.images?.[0] || '/images/contestant-placeholder.jpg'}
//                       alt={`${c.first_name} ${c.last_name}`}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="font-medium text-sm">
//                     {c.first_name} {c.last_name}
//                   </div>
//                 </div>

//                 <span className="text-sm text-muted-foreground hidden md:block">{c.representing}</span>

//                 <span className="text-sm font-bold text-foreground hidden md:block">
//                   {(c.vote_count || 0).toLocaleString()}
//                 </span>
//               </div>
//             ))}
//           </>
//         ) : (
//           <NoData 
//             title="No Performers Yet"
//             description="Top performers will appear here once votes are cast."
//           />
//         )}
//       </div>
//     </div>
//   );
// }



'use client';

import { useMemo } from "react";
import Image from 'next/image';
import { TrendingUp, TrendingDown, BarChart3, PieChart, Users, Heart, DollarSign } from "lucide-react";
import { useQuery } from '@tanstack/react-query';

import NoData from '@/components/NoData';
import { userService } from '@/services/contestant.service';
import { paymentService } from '@/services/payments.service';
import LoadingState from "@/components/LoadingState";

export default function AdminAnalytics() {
  // Fetch contestants
  const { data: contestants = [], isLoading: contestantsLoading } = useQuery({
    queryKey: ['contestants-analytics'],
    queryFn: userService.getAll,
  });

  // Fetch payments
  const { data: payments = [], isLoading: paymentsLoading } = useQuery({
    queryKey: ['payments-analytics'],
    queryFn: paymentService.getAll,
  });

  const isLoading = contestantsLoading || paymentsLoading;

  // Get today's date
  const todayStr = new Date().toISOString().split('T')[0];

  // Calculate Today's Metrics
  const todayMetrics = useMemo(() => {
    const todayPayments = payments.filter(p => {
      if (!p.created_at) return false;
      const paymentDate = new Date(p.created_at).toISOString().split('T')[0];
      return paymentDate === todayStr;
    });

    const todayVotes = todayPayments.reduce((sum, p) => sum + (Number(p.votes_purchased) || 0), 0);
    const todayRevenue = todayPayments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);

    return { todayVotes, todayRevenue };
  }, [payments, todayStr]);

  // Overall Metrics
  const metrics = useMemo(() => {
    const totalVotes = contestants.reduce((sum, c) => sum + (c.vote_count || 0), 0);
    const totalRevenue = payments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
    const activeContestants = contestants.filter(c => c.is_active).length;

    return [
      { 
        icon: Heart, 
        label: "Total Votes Today", 
        value: todayMetrics.todayVotes.toLocaleString(), 
        change: todayMetrics.todayVotes > 0 ? "+18%" : "—", 
        up: true 
      },
      { 
        icon: DollarSign, 
        label: "Revenue Today", 
        value: `₦${todayMetrics.todayRevenue.toLocaleString()}`, 
        change: todayMetrics.todayRevenue > 0 ? "+12%" : "—", 
        up: true 
      },
      { 
        icon: Users, 
        label: "Active Contestants", 
        value: activeContestants.toLocaleString(), 
        change: "—", 
        up: false 
      },
    ];
  }, [contestants, payments, todayMetrics]);

  // School Breakdown
  const schoolBreakdown = useMemo(() => {
    const schoolMap = new Map();

    contestants.forEach(c => {
      if (c.representing) {
        const current = schoolMap.get(c.representing) || 0;
        schoolMap.set(c.representing, current + (c.vote_count || 0));
      }
    });

    const totalVotes = Array.from(schoolMap.values()).reduce((a, b) => a + b, 0);

    return Array.from(schoolMap.entries())
      .map(([name, votes]) => ({
        name: name.length > 20 ? name.substring(0, 17) + "..." : name,
        pct: totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0,
        color: name.toLowerCase().includes("uniport") 
          ? "bg-primary" 
          : name.toLowerCase().includes("ignatius") 
            ? "bg-amber-500" 
            : "bg-emerald-500"
      }))
      .sort((a, b) => b.pct - a.pct)
      .slice(0, 3);
  }, [contestants]);

  // Top Performers
  const topPerformers = useMemo(() => {
    return [...contestants]
      .sort((a, b) => (b.vote_count || 0) - (a.vote_count || 0))
      .slice(0, 5);
  }, [contestants]);

  // Real 7-Day Line Chart Data
// Fixed weekly trend data with correct local date handling
const weeklyTrendData = useMemo(() => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const voteMap = new Map();

  payments.forEach((p: any) => {
    if (p.created_at) {
      const date = new Date(p.created_at);
      // Use local date to avoid timezone shift
      const dateKey = date.toLocaleDateString('en-CA'); // YYYY-MM-DD in local timezone
      const current = voteMap.get(dateKey) || 0;
      voteMap.set(dateKey, current + (p.votes_purchased || 0));
    }
  });

  const result = [];
  const today = new Date();

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateKey = date.toLocaleDateString('en-CA');

    result.push({
      day: days[date.getDay()],
      votes: voteMap.get(dateKey) || 0,
    });
  }

  return result;
}, [payments]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (contestants.length === 0 && payments.length === 0) {
    return (
      <NoData 
        title="No Analytics Data Yet"
        description="Once contestants are added and votes start coming in, analytics will appear here."
      />
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
          VOTING <span className="font-display italic text-gold">ANALYTICS</span>
        </h1>
        <p className="text-sm text-muted-foreground font-body mt-1">Real-time Voting Data & Insights</p>
      </div>

      {/* Today's Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {metrics.map((m, i) => (
          <div key={i} className="glass-card rounded-2xl p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <m.icon className="w-6 h-6 text-primary" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-body">{m.label}</p>
            <p className="font-display text-3xl font-bold text-foreground mt-2">{m.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Real Line Chart - Weekly Voting Trend */}
{/* Fixed Weekly Voting Trend - Correct Day Alignment */}
<div className="lg:col-span-2 glass-card rounded-2xl p-6 border border-border">
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-3">
      <BarChart3 className="w-5 h-5 text-primary" />
      <h3 className="font-display text-lg font-bold text-foreground">Weekly Voting Trend</h3>
    </div>
    <span className="text-xs font-body text-muted-foreground bg-secondary px-4 py-1 rounded-full">Last 7 Days</span>
  </div>

  <div className="h-52 relative">
    <svg className="w-full h-full" viewBox="0 0 700 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Light background grid */}
      {[40, 80, 120, 160].map((y, idx) => (
        <line key={idx} x1="30" y1={y} x2="670" y2={y} stroke="#333" strokeWidth="1" strokeDasharray="3 3"/>
      ))}

      {/* Line */}
      <polyline
        points={weeklyTrendData.map((d, i) => {
          const x = 30 + (i * 640 / 6);
          const maxV = Math.max(...weeklyTrendData.map(v => v.votes), 1);
          const y = 170 - (d.votes / maxV) * 140;
          return `${x},${y}`;
        }).join(' ')}
        fill="none"
        stroke="#e6194d"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dots */}
      {weeklyTrendData.map((d, i) => {
        const x = 30 + (i * 640 / 6);
        const maxV = Math.max(...weeklyTrendData.map(v => v.votes), 1);
        const y = 170 - (d.votes / maxV) * 140;
        return (
          <circle key={i} cx={x} cy={y} r="6" fill="#e6194d" stroke="##d41142" strokeWidth="2"/>
        );
      })}
    </svg>

    {/* X-axis labels */}
    <div className="flex justify-between mt-3 px-8 text-xs font-medium text-muted-foreground">
      {weeklyTrendData.map((d, i) => (
        <div key={i} className="text-center w-10">{d.day}</div>
      ))}
    </div>
  </div>
</div>

        {/* School Split */}
        <div className="glass-card rounded-2xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <PieChart className="w-5 h-5 text-primary" />
            <h3 className="font-display text-lg font-bold text-foreground">School Split</h3>
          </div>

          {schoolBreakdown.length > 0 ? (
            <div className="space-y-5">
              {schoolBreakdown.map((school, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-body text-foreground">{school.name}</span>
                    <span className="text-sm font-bold">{school.pct}%</span>
                  </div>
                  <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className={`${school.color} h-2.5 rounded-full`} 
                      style={{ width: `${school.pct}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <NoData 
              title="No School Data"
              description="School breakdown will appear once contestants are added."
            />
          )}
        </div>
      </div>

      {/* Top Performers */}
      <div className="glass-card rounded-2xl p-6 border border-border">
        <h3 className="font-display text-lg font-bold text-foreground mb-5">Top Performers</h3>
        
        {topPerformers.length > 0 ? (
          <>
            <div className="hidden md:grid grid-cols-4 gap-4 text-[10px] font-body font-semibold tracking-wider text-muted-foreground pb-4 border-b border-border">
              <span>RANK</span>
              <span>CONTESTANT</span>
              <span>REPRESENTING</span>
              <span>TOTAL VOTES</span>
            </div>

            {topPerformers.map((c, i) => (
              <div key={c.id} className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center py-4 border-b border-border/50 last:border-0">
                <span className="font-display text-2xl font-bold text-gold">#{i + 1}</span>

                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-border">
                    <Image
                      src={c.images?.[0] || '/images/contestant-placeholder.jpg'}
                      alt={`${c.first_name} ${c.last_name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="font-medium text-sm">
                    {c.first_name} {c.last_name}
                  </div>
                </div>

                <span className="text-sm text-muted-foreground hidden md:block">{c.representing}</span>

                <span className="text-sm font-bold text-foreground hidden md:block">
                  {(c.vote_count || 0).toLocaleString()}
                </span>
              </div>
            ))}
          </>
        ) : (
          <NoData 
            title="No Performers Yet"
            description="Top performers will appear here once votes are cast."
          />
        )}
      </div>
    </div>
  );
}