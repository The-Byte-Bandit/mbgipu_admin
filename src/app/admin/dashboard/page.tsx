// // // // app/admin/dashboard/page.tsx
// // // 'use client';

// // // import Image from 'next/image';
// // // import { Heart, Users, Clock, DollarSign, Star, Eye } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import contestant1 from "@/public/images/contestant-1.jpg";
// // // import contestant2 from "@/public/images/contestant-2.jpg";
// // // import contestant3 from "@/public/images/contestant-3.jpg";
// // // import contestant4 from "@/public/images/contestant-4.jpg";
// // // import contestant5 from "@/public/images/contestant-5.jpg";
// // // import contestant6 from "@/public/images/contestant-6.jpg";

// // // const stats = [
// // //   { icon: Heart, label: "Total Votes", value: "124,500", badge: "+12.5%", badgeColor: "text-green-400" },
// // //   { icon: Users, label: "Active Models", value: "42", badge: "+3 New", badgeColor: "text-green-400" },
// // //   { icon: Clock, label: "Days Remaining", value: "15", badge: "Finals", badgeColor: "text-muted-foreground" },
// // //   { icon: DollarSign, label: "Total Revenue", value: "$52,400", badge: "+8%", badgeColor: "text-green-400" },
// // // ];

// // // const chartData = [
// // //   { day: "MON", h1: 30, h2: 20 },
// // //   { day: "TUE", h1: 45, h2: 25 },
// // //   { day: "WED", h1: 35, h2: 30 },
// // //   { day: "THU", h1: 50, h2: 20 },
// // //   { day: "FRI", h1: 70, h2: 40 },
// // //   { day: "SAT", h1: 85, h2: 55 },
// // //   { day: "SUN", h1: 90, h2: 60 },
// // // ];

// // // const topContenders = [
// // //   { name: "Amina Okoro", votes: "28k", img: contestant1 },
// // //   { name: "Zola Mbeki", votes: "24.5k", img: contestant2 },
// // //   { name: "Ifeoma Ndiaye", votes: "21k", img: contestant3 },
// // // ];

// // // const models = [
// // //   { name: "Nia Tadesse", id: "MBG-4402", status: "ACTIVE", category: "Runway", engagement: "12.4k", lastActive: "2 mins ago", img: contestant4 },
// // //   { name: "Elena Richardson", id: "MBG-4201", status: "ACTIVE", category: "Photogenic", engagement: "9.8k", lastActive: "15 mins ago", img: contestant1 },
// // //   { name: "Sophia Martinez", id: "MBG-4305", status: "PENDING", category: "Talent", engagement: "7.2k", lastActive: "1 hour ago", img: contestant3 },
// // // ];

// // // export default function AdminDashboard() {
// // //   return (
// // //     <div>
// // //       {/* Header */}
// // //       <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
// // //         <div>
// // //           <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Executive Overview</h1>
// // //           <p className="text-sm text-muted-foreground font-body mt-1">Real-time statistics for MBGIPU Season 1</p>
// // //         </div>
// // //         <div className="flex gap-2 mt-3 md:mt-0">
// // //           {/* <Button variant="outline" className="font-body text-sm border-border">Export Data</Button> */}
// // //           <Button className="bg-gradient-crimson font-body text-sm">
// // //             <Users className="w-4 h-4 mr-1" /> Add Model
// // //           </Button>
// // //         </div>
// // //       </div>

// // //       {/* Stats Cards */}
// // //       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
// // //         {stats.map((stat) => (
// // //           <div key={stat.label} className="glass-card rounded-xl p-5 border border-border">
// // //             <div className="flex items-center justify-between mb-3">
// // //               <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
// // //                 <stat.icon className="w-5 h-5 text-primary" />
// // //               </div>
// // //               <span className={`text-[10px] font-body font-semibold ${stat.badgeColor}`}>{stat.badge}</span>
// // //             </div>
// // //             <p className="text-xs text-muted-foreground font-body">{stat.label}</p>
// // //             <p className="font-display text-2xl font-bold text-foreground mt-1">{stat.value}</p>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Chart + Top Contenders */}
// // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
// // //         {/* Voting Velocity Chart */}
// // //         <div className="lg:col-span-2 glass-card rounded-xl p-6 border border-border">
// // //           <div className="flex items-center justify-between mb-4">
// // //             <div>
// // //               <h3 className="font-display text-lg font-bold text-foreground">Voting Velocity</h3>
// // //               <p className="text-xs text-muted-foreground font-body">Weekly traffic distribution</p>
// // //             </div>
// // //             <span className="text-xs font-body text-muted-foreground bg-secondary px-3 py-1 rounded-full cursor-pointer">
// // //               Last 7 Days ▾
// // //             </span>
// // //           </div>

// // //           <div className="flex items-end justify-between gap-2 h-44">
// // //             {chartData.map((d) => (
// // //               <div key={d.day} className="flex flex-col items-center gap-1 flex-1">
// // //                 <div className="flex gap-1 items-end w-full justify-center">
// // //                   <div className="w-3 bg-primary/30 rounded-t" style={{ height: `${d.h2}%` }} />
// // //                   <div className="w-3 bg-gradient-crimson rounded-t" style={{ height: `${d.h1}%` }} />
// // //                 </div>
// // //                 <span className="text-[10px] font-body text-muted-foreground mt-2">{d.day}</span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Top Contenders */}
// // //         <div className="glass-card rounded-xl p-6 border border-border">
// // //           <h3 className="font-display text-lg font-bold text-foreground mb-4">Top Contenders</h3>
// // //           <div className="space-y-4">
// // //             {topContenders.map((c, i) => (
// // //               <div key={i} className="flex items-center gap-3">
// // //                 <div className="relative w-10 h-10 rounded-full overflow-hidden">
// // //                   <Image
// // //                     src={c.img}
// // //                     alt={c.name}
// // //                     fill
// // //                     className="object-cover"
// // //                   />
// // //                 </div>
// // //                 <div className="flex-1">
// // //                   <p className="text-sm font-body font-medium text-foreground">{c.name}</p>
// // //                   <div className="w-full bg-secondary rounded-full h-1.5 mt-1">
// // //                     <div className="bg-gradient-crimson h-1.5 rounded-full" style={{ width: `${80 - i * 15}%` }} />
// // //                   </div>
// // //                 </div>
// // //                 <span className="text-sm font-body font-bold text-primary">{c.votes}</span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //           <button className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] hover:text-foreground mt-4 block">
// // //             VIEW LEADERBOARD
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Model Management Table */}
// // //       <div className="glass-card rounded-xl p-6 border border-border">
// // //         <div className="flex items-center justify-between mb-4">
// // //           <h3 className="font-display text-lg font-bold text-foreground">Model Management</h3>
// // //           <div className="flex gap-2">
// // //             <button className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">−</button>
// // //             <button className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">⋯</button>
// // //           </div>
// // //         </div>

// // //         {/* Table Header */}
// // //         <div className="hidden md:grid grid-cols-6 gap-4 text-[10px] font-body font-semibold tracking-[0.1em] text-muted-foreground pb-3 border-b border-border mb-3">
// // //           <span>MODEL CANDIDATE</span>
// // //           <span>STATUS</span>
// // //           <span>CATEGORY</span>
// // //           <span>ENGAGEMENT</span>
// // //           <span>LAST ACTIVE</span>
// // //           <span>ACTION</span>
// // //         </div>

// // //         {/* Table Rows */}
// // //         {models.map((m, i) => (
// // //           <div key={i} className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center py-3 border-b border-border/50 last:border-0">
// // //             <div className="flex items-center gap-3">
// // //               <div className="relative w-9 h-9 rounded-full overflow-hidden">
// // //                 <Image
// // //                   src={m.img}
// // //                   alt={m.name}
// // //                   fill
// // //                   className="object-cover"
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <p className="text-sm font-body font-medium text-foreground">{m.name}</p>
// // //                 <p className="text-[10px] text-muted-foreground font-body">ID: {m.id}</p>
// // //               </div>
// // //             </div>

// // //             <span className={`text-[10px] font-body font-semibold px-2 py-1 rounded w-fit ${
// // //               m.status === "ACTIVE" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
// // //             }`}>
// // //               {m.status}
// // //             </span>

// // //             <span className="text-sm font-body text-foreground hidden md:block">{m.category}</span>

// // //             <span className="text-sm font-body text-foreground hidden md:flex items-center gap-1">
// // //               <Heart className="w-3 h-3 text-primary" /> {m.engagement}
// // //             </span>

// // //             <span className="text-sm font-body text-muted-foreground hidden md:block">{m.lastActive}</span>

// // //             <button className="text-muted-foreground hover:text-foreground hidden md:block">
// // //               <Eye className="w-4 h-4" />
// // //             </button>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // 'use client';

// // import { useEffect, useState } from 'react';
// // import Image from 'next/image';
// // import { Heart, Users, Clock, DollarSign, Star, Eye } from "lucide-react";
// // import { Button } from "@/components/ui/button";

// // import { userService } from '@/services/user.service';   // ← Changed to userService

// // const stats = [
// //   { icon: Heart, label: "Total Votes", value: "124,500", badge: "+12.5%", badgeColor: "text-green-400" },
// //   { icon: Users, label: "Active Users", value: "42", badge: "+3 New", badgeColor: "text-green-400" },
// //   { icon: Clock, label: "Days Remaining", value: "15", badge: "Finals", badgeColor: "text-muted-foreground" },
// //   { icon: DollarSign, label: "Total Revenue", value: "$52,400", badge: "+8%", badgeColor: "text-green-400" },
// // ];

// // export default function AdminDashboard() {
// //   const [users, setUsers] = useState<any[]>([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const data = await userService.getAll();     // ← Fetch from users table
// //         setUsers(data);
// //       } catch (err) {
// //         console.error("Failed to fetch users", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchUsers();
// //   }, []);

// //   // Top 3 by vote count
// //   const topContenders = users.slice(0, 3);

// //   return (
// //     <div>
// //       {/* Header */}
// //       <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
// //         <div>
// //           <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Executive Overview</h1>
// //           <p className="text-sm text-muted-foreground font-body mt-1">Real-time statistics for MBGIPU Season 1</p>
// //         </div>
// //         <div className="flex gap-2 mt-3 md:mt-0">
// //           <Button className="bg-gradient-crimson font-body text-sm">
// //             <Users className="w-4 h-4 mr-1" /> Add User
// //           </Button>
// //         </div>
// //       </div>

// //       {/* Stats Cards */}
// //       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
// //         {stats.map((stat) => (
// //           <div key={stat.label} className="glass-card rounded-xl p-5 border border-border">
// //             <div className="flex items-center justify-between mb-3">
// //               <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
// //                 <stat.icon className="w-5 h-5 text-primary" />
// //               </div>
// //               <span className={`text-[10px] font-body font-semibold ${stat.badgeColor}`}>{stat.badge}</span>
// //             </div>
// //             <p className="text-xs text-muted-foreground font-body">{stat.label}</p>
// //             <p className="font-display text-2xl font-bold text-foreground mt-1">{stat.value}</p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Chart + Top Contenders */}
// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
// //         {/* Voting Velocity Chart */}
// //         <div className="lg:col-span-2 glass-card rounded-xl p-6 border border-border">
// //           <div className="flex items-center justify-between mb-4">
// //             <div>
// //               <h3 className="font-display text-lg font-bold text-foreground">Voting Velocity</h3>
// //               <p className="text-xs text-muted-foreground font-body">Weekly traffic distribution</p>
// //             </div>
// //             <span className="text-xs font-body text-muted-foreground bg-secondary px-3 py-1 rounded-full cursor-pointer">
// //               Last 7 Days ▾
// //             </span>
// //           </div>

// //           <div className="flex items-end justify-between gap-2 h-44">
// //             {[30, 45, 35, 50, 70, 85, 90].map((height, i) => (
// //               <div key={i} className="flex flex-col items-center gap-1 flex-1">
// //                 <div className="w-6 bg-gradient-crimson rounded-t" style={{ height: `${height}%` }} />
// //                 <span className="text-[10px] font-body text-muted-foreground mt-2">
// //                   {['MON','TUE','WED','THU','FRI','SAT','SUN'][i]}
// //                 </span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Top Contenders */}
// //         <div className="glass-card rounded-xl p-6 border border-border">
// //           <h3 className="font-display text-lg font-bold text-foreground mb-4">Top Contenders</h3>
// //           <div className="space-y-4">
// //             {topContenders.map((user, i) => (
// //               <div key={i} className="flex items-center gap-3">
// //                 <div className="relative w-10 h-10 rounded-full overflow-hidden">
// //                   <Image
// //                     src={user.images?.[0] || '/images/placeholder.jpg'}
// //                     alt={`${user.first_name} ${user.last_name}`}
// //                     fill
// //                     className="object-cover"
// //                   />
// //                 </div>
// //                 <div className="flex-1">
// //                   <p className="text-sm font-body font-medium text-foreground">
// //                     {user.first_name} {user.last_name}
// //                   </p>
// //                   <div className="w-full bg-secondary rounded-full h-1.5 mt-1">
// //                     <div className="bg-gradient-crimson h-1.5 rounded-full" style={{ width: `${90 - i * 15}%` }} />
// //                   </div>
// //                 </div>
// //                 <span className="text-sm font-body font-bold text-primary">
// //                   {user.vote_count?.toLocaleString() || '0'}
// //                 </span>
// //               </div>
// //             ))}
// //           </div>
// //           <button className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] hover:text-foreground mt-4 block">
// //             VIEW ALL USERS
// //           </button>
// //         </div>
// //       </div>

// //       {/* User Management Table */}
// //       <div className="glass-card rounded-xl p-6 border border-border">
// //         <div className="flex items-center justify-between mb-4">
// //           <h3 className="font-display text-lg font-bold text-foreground">User Management</h3>
// //           <div className="flex gap-2">
// //             <button className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">−</button>
// //             <button className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">⋯</button>
// //           </div>
// //         </div>

// //         {/* Table Header */}
// //         <div className="hidden md:grid grid-cols-6 gap-4 text-[10px] font-body font-semibold tracking-[0.1em] text-muted-foreground pb-3 border-b border-border mb-3">
// //           <span>USER</span>
// //           <span>STATUS</span>
// //           <span>ROLE</span>
// //           <span>VOTES</span>
// //           <span>VIEWS</span>
// //           <span>ACTION</span>
// //         </div>

// //         {/* Table Rows */}
// //         {users.slice(0, 6).map((user, i) => (
// //           <div key={i} className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center py-3 border-b border-border/50 last:border-0">
// //             <div className="flex items-center gap-3">
// //               <div className="relative w-9 h-9 rounded-full overflow-hidden">
// //                 <Image
// //                   src={user.images?.[0] || '/images/placeholder.jpg'}
// //                   alt={`${user.first_name} ${user.last_name}`}
// //                   fill
// //                   className="object-cover"
// //                 />
// //               </div>
// //               <div>
// //                 <p className="text-sm font-body font-medium text-foreground">
// //                   {user.first_name} {user.last_name}
// //                 </p>
// //                 <p className="text-[10px] text-muted-foreground font-body">{user.email}</p>
// //               </div>
// //             </div>

// //             <span className={`text-[10px] font-body font-semibold px-2 py-1 rounded w-fit ${
// //               user.is_active ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
// //             }`}>
// //               {user.is_active ? "ACTIVE" : "DISABLED"}
// //             </span>

// //             <span className="text-sm font-body text-foreground hidden md:block">
// //               {user.role || "user"}
// //             </span>

// //             <span className="text-sm font-body text-foreground hidden md:flex items-center gap-1">
// //               <Heart className="w-3 h-3 text-primary" /> {user.vote_count || 0}
// //             </span>

// //             <span className="text-sm font-body text-foreground hidden md:flex items-center gap-1">
// //               <Eye className="w-3 h-3 text-primary" /> {user.views || 0}
// //             </span>

// //             <button className="text-muted-foreground hover:text-foreground hidden md:block">
// //               <Eye className="w-4 h-4" />
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// 'use client';

// import { useEffect, useState, useMemo } from 'react';
// import Image from 'next/image';
// import { Heart, Users, Clock, DollarSign, Star, Eye } from "lucide-react";
// import { Button } from "@/components/ui/button";

// import { userService } from '@/services/contestant.service';

// export default function AdminDashboard() {
//   const [users, setUsers] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const data = await userService.getAll();
//         setUsers(data);
//       } catch (err) {
//         console.error("Failed to fetch users", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Calculate dynamic stats from real data
//   const stats = useMemo(() => {
//     const totalVotes = users.reduce((sum, user) => sum + (user.vote_count || 0), 0);
//     const activeUsers = users.filter(user => user.is_active).length;
//     const totalRevenue = totalVotes * 100; 

//     console.log(totalVotes);
    

//     return [
//       { 
//         icon: Heart, 
//         label: "Total Votes", 
//         value: totalVotes.toLocaleString(), 
//         badge: "+12.5%", 
//         badgeColor: "text-green-400" 
//       },
//       { 
//         icon: Users, 
//         label: "Active Users", 
//         value: activeUsers.toString(), 
//         badge: "+3 New", 
//         badgeColor: "text-green-400" 
//       },
//       { 
//         icon: Clock, 
//         label: "Days Remaining", 
//         value: "15", 
//         badge: "Finals", 
//         badgeColor: "text-muted-foreground" 
//       },
//       { 
//         icon: DollarSign, 
//         label: "Total Revenue", 
//         value: `₦${totalRevenue.toLocaleString()}`, 
//         badge: "+8%", 
//         badgeColor: "text-green-400" 
//       },
//     ];
//   }, [users]);

//   // Top 3 contenders
//   const topContenders = [...users]
//     .sort((a, b) => (b.vote_count || 0) - (a.vote_count || 0))
//     .slice(0, 3);

//   return (
//     <div>
//       {/* Header */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
//         <div>
//           <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Executive Overview</h1>
//           <p className="text-sm text-muted-foreground font-body mt-1">Real-time statistics for MBGIPU Season 1</p>
//         </div>
//         <div className="flex gap-2 mt-3 md:mt-0">
//           <Button className="bg-gradient-crimson font-body text-sm">
//             <Users className="w-4 h-4 mr-1" /> Add User
//           </Button>
//         </div>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         {stats.map((stat) => (
//           <div key={stat.label} className="glass-card rounded-xl p-5 border border-border">
//             <div className="flex items-center justify-between mb-3">
//               <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
//                 <stat.icon className="w-5 h-5 text-primary" />
//               </div>
//               <span className={`text-[10px] font-body font-semibold ${stat.badgeColor}`}>{stat.badge}</span>
//             </div>
//             <p className="text-xs text-muted-foreground font-body">{stat.label}</p>
//             <p className="font-display text-2xl font-bold text-foreground mt-1">{stat.value}</p>
//           </div>
//         ))}
//       </div>

//       {/* Chart + Top Contenders */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
//         {/* Voting Velocity Chart */}
//         <div className="lg:col-span-2 glass-card rounded-xl p-6 border border-border">
//           <div className="flex items-center justify-between mb-4">
//             <div>
//               <h3 className="font-display text-lg font-bold text-foreground">Voting Velocity</h3>
//               <p className="text-xs text-muted-foreground font-body">Weekly traffic distribution</p>
//             </div>
//             <span className="text-xs font-body text-muted-foreground bg-secondary px-3 py-1 rounded-full cursor-pointer">
//               Last 7 Days ▾
//             </span>
//           </div>

//           <div className="flex items-end justify-between gap-2 h-44">
//             {[30, 45, 35, 50, 70, 85, 90].map((height, i) => (
//               <div key={i} className="flex flex-col items-center gap-1 flex-1">
//                 <div className="w-6 bg-gradient-crimson rounded-t" style={{ height: `${height}%` }} />
//                 <span className="text-[10px] font-body text-muted-foreground mt-2">
//                   {['MON','TUE','WED','THU','FRI','SAT','SUN'][i]}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Top Contenders */}
//         <div className="glass-card rounded-xl p-6 border border-border">
//           <h3 className="font-display text-lg font-bold text-foreground mb-4">Top Contenders</h3>
//           <div className="space-y-4">
//             {topContenders.map((user, i) => (
//               <div key={i} className="flex items-center gap-3">
//                 <div className="relative w-10 h-10 rounded-full overflow-hidden">
//                   <Image
//                     src={user.images?.[0] || '/images/placeholder.jpg'}
//                     alt={`${user.first_name} ${user.last_name}`}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-sm font-body font-medium text-foreground">
//                     {user.first_name} {user.last_name}
//                   </p>
//                   <div className="w-full bg-secondary rounded-full h-1.5 mt-1">
//                     <div className="bg-gradient-crimson h-1.5 rounded-full" style={{ width: `${90 - i * 15}%` }} />
//                   </div>
//                 </div>
//                 <span className="text-sm font-body font-bold text-primary">
//                   {user.vote_count?.toLocaleString() || '0'}
//                 </span>
//               </div>
//             ))}
//           </div>
//           <button className="text-[10px] font-body font-semibold text-muted-foreground tracking-[0.15em] hover:text-foreground mt-4 block">
//             VIEW ALL USERS
//           </button>
//         </div>
//       </div>

//       {/* User Management Table */}
//       <div className="glass-card rounded-xl p-6 border border-border">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="font-display text-lg font-bold text-foreground">User Management</h3>
//           <div className="flex gap-2">
//             <button className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">−</button>
//             <button className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">⋯</button>
//           </div>
//         </div>

//         {/* Table Header */}
//         <div className="hidden md:grid grid-cols-5 gap-4 text-[10px] font-body font-semibold tracking-[0.1em] text-muted-foreground pb-3 border-b border-border mb-3">
//           <span>USER</span>
//           <span>STATUS</span>
//           <span>ROLE</span>
//           <span>VOTES</span>
//           <span>VIEWS</span>
//           {/* <span>ACTION</span> */}
//         </div>

//         {/* Table Rows */}
//         {users.slice(0, 6).map((user, i) => (
//           <div key={i} className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center py-3 border-b border-border/50 last:border-0">
//             <div className="flex items-center gap-3">
//               <div className="relative w-9 h-9 rounded-full overflow-hidden">
//                 <Image
//                   src={user.images?.[0] || '/images/placeholder.jpg'}
//                   alt={`${user.first_name} ${user.last_name}`}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div>
//                 <p className="text-sm font-body font-medium text-foreground">
//                   {user.first_name} {user.last_name}
//                 </p>
//                 <p className="text-[10px] text-muted-foreground font-body">{user.email}</p>
//               </div>
//             </div>

//             <span className={`text-[10px] font-body font-semibold px-2 py-1 rounded w-fit ${
//               user.is_active ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
//             }`}>
//               {user.is_active ? "ACTIVE" : "DISABLED"}
//             </span>

//             <span className="text-sm font-body text-foreground hidden md:block">
//               {user.role || "user"}
//             </span>

//             <span className="text-sm font-body text-foreground hidden md:flex items-center gap-1">
//               <Heart className="w-3 h-3 text-primary" /> {user.vote_count || 0}
//             </span>

//             <span className="text-sm font-body text-foreground hidden md:flex items-center gap-1">
//               <Eye className="w-3 h-3 text-primary" /> {user.views || 0}
//             </span>

//             {/* <button className="text-muted-foreground hover:text-foreground hidden md:block">
//               <Eye className="w-4 h-4" />
//             </button> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// 'use client';

// import { useEffect, useState, useMemo } from 'react';
// import Image from 'next/image';
// import { Heart, Users, Clock, DollarSign, Eye } from "lucide-react";
// import { Button } from "@/components/ui/button";

// import NoData from '@/components/NoData';
// import { userService } from '@/services/contestant.service';

// export default function AdminDashboard() {
//   const [users, setUsers] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const data = await userService.getAll();
//         setUsers(data || []);
//       } catch (err) {
//         console.error("Failed to fetch users", err);
//         setUsers([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Calculate stats
//   const stats = useMemo(() => {
//     const totalVotes = users.reduce((sum, user) => sum + (user.vote_count || 0), 0);
//     const activeUsers = users.filter(user => user.is_active).length;
//     const totalRevenue = totalVotes * 100;

//     return [
//       { 
//         icon: Heart, 
//         label: "Total Votes", 
//         value: totalVotes.toLocaleString(), 
//         badge: "+12.5%", 
//         badgeColor: "text-green-400" 
//       },
//       { 
//         icon: Users, 
//         label: "Active Users", 
//         value: activeUsers.toString(), 
//         badge: "+3 New", 
//         badgeColor: "text-green-400" 
//       },
//       { 
//         icon: Clock, 
//         label: "Days Remaining", 
//         value: "15", 
//         badge: "Finals", 
//         badgeColor: "text-muted-foreground" 
//       },
//       { 
//         icon: DollarSign, 
//         label: "Total Revenue", 
//         value: `₦${totalRevenue.toLocaleString()}`, 
//         badge: "+8%", 
//         badgeColor: "text-green-400" 
//       },
//     ];
//   }, [users]);

//   // Top 3 contenders
//   const topContenders = [...users]
//     .sort((a, b) => (b.vote_count || 0) - (a.vote_count || 0))
//     .slice(0, 3);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center py-20">
//         <p className="text-muted-foreground">Loading dashboard...</p>
//       </div>
//     );
//   }

//   // Main No Data State - when there are no users at all
//   // if (users.length === 0) {
//   //   return (
//   //     <NoData 
//   //       title="No Contestants Yet"
//   //       description="There are currently no contestants in the system. Add contestants to start seeing statistics and rankings."
//   //     />
//   //   );
//   // }

//   return (
//     <div>
//       {/* Header */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
//          <div>
//            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Executive Overview</h1>
//            <p className="text-sm text-muted-foreground font-body mt-1">Real-time statistics for MBGIPU Season 1</p>
//          </div>
//         {/* <div className="flex gap-2 mt-3 md:mt-0">
//           <Button className="bg-gradient-crimson font-body text-sm">
//             <Users className="w-4 h-4 mr-1" /> Add User
//           </Button>
//         </div> */}
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         {stats.map((stat) => (
//           <div key={stat.label} className="glass-card rounded-xl p-5 border border-border">
//             <div className="flex items-center justify-between mb-3">
//               <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
//                 <stat.icon className="w-5 h-5 text-primary" />
//               </div>
//               {/* <span className={`text-[10px] font-body font-semibold ${stat.badgeColor}`}>{stat.badge}</span> */}
//             </div>
//             <p className="text-xs text-muted-foreground font-body">{stat.label}</p>
//             <p className="font-display text-2xl font-bold text-foreground mt-1">{stat.value}</p>
//           </div>
//         ))}
//       </div>

//       {/* Chart + Top Contenders */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
//         {/* Voting Velocity Chart */}
//         <div className="lg:col-span-2 glass-card rounded-xl p-6 border border-border">
//           <div className="flex items-center justify-between mb-4">
//             <div>
//               <h3 className="font-display text-lg font-bold text-foreground">Voting Velocity</h3>
//               <p className="text-xs text-muted-foreground font-body">Weekly traffic distribution</p>
//             </div>
//             <span className="text-xs font-body text-muted-foreground bg-secondary px-3 py-1 rounded-full cursor-pointer">
//               Last 7 Days
//             </span>
//           </div>

//           <div className="flex items-end justify-between gap-2 h-44">
//             {[30, 45, 35, 50, 70, 85, 90].map((height, i) => (
//               <div key={i} className="flex flex-col items-center gap-1 flex-1">
//                 <div className="w-6 bg-gradient-crimson rounded-t" style={{ height: `${height}%` }} />
//                 <span className="text-[10px] font-body text-muted-foreground mt-2">
//                   {['MON','TUE','WED','THU','FRI','SAT','SUN'][i]}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Top Contenders */}
//         <div className="glass-card rounded-xl p-6 border border-border">
//           <h3 className="font-display text-lg font-bold text-foreground mb-4">Top Contenders</h3>
          
//           {topContenders.length > 0 ? (
//             <div className="space-y-4">
//               {topContenders.map((user, i) => (
//                 <div key={i} className="flex items-center gap-3">
//                   <div className="relative w-10 h-10 rounded-full overflow-hidden">
//                     <Image
//                       src={user.images?.[0] || '/images/placeholder.jpg'}
//                       alt={`${user.first_name} ${user.last_name}`}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="flex-1">
//                     <p className="text-sm font-body font-medium text-foreground">
//                       {user.first_name} {user.last_name}
//                     </p>
//                     <div className="w-full bg-secondary rounded-full h-1.5 mt-1">
//                       <div className="bg-gradient-crimson h-1.5 rounded-full" style={{ width: `${90 - i * 15}%` }} />
//                     </div>
//                   </div>
//                   <span className="text-sm font-body font-bold text-primary">
//                     {user.vote_count?.toLocaleString() || '0'}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <NoData 
//               title="No Contenders Yet"
//               description="Once votes start coming in, top contestants will appear here."
//             />
//           )}
//         </div>
//       </div>

//       {/* User Management Table */}
//       <div className="glass-card rounded-xl p-6 border border-border">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="font-display text-lg font-bold text-foreground">User Management</h3>
//         </div>

//         {users.length === 0 ? (
//           <NoData 
//             title="No Users Found"
//             description="No contestants have been added to the system yet."
//           />
//         ) : (
//           <>
//             {/* Table Header */}
//             <div className="hidden md:grid grid-cols-5 gap-4 text-[10px] font-body font-semibold tracking-[0.1em] text-muted-foreground pb-3 border-b border-border mb-3">
//               <span>USER</span>
//               <span>STATUS</span>
//               <span>ROLE</span>
//               <span>VOTES</span>
//               <span>VIEWS</span>
//             </div>

//             {/* Table Rows */}
//             {users.slice(0, 6).map((user, i) => (
//               <div key={i} className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center py-3 border-b border-border/50 last:border-0">
//                 <div className="flex items-center gap-3">
//                   <div className="relative w-9 h-9 rounded-full overflow-hidden">
//                     <Image
//                       src={user.images?.[0] || '/images/placeholder.jpg'}
//                       alt={`${user.first_name} ${user.last_name}`}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div>
//                     <p className="text-sm font-body font-medium text-foreground">
//                       {user.first_name} {user.last_name}
//                     </p>
//                     <p className="text-[10px] text-muted-foreground font-body">{user.email}</p>
//                   </div>
//                 </div>

//                 <span className={`text-[10px] font-body font-semibold px-2 py-1 rounded w-fit ${
//                   user.is_active ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
//                 }`}>
//                   {user.is_active ? "ACTIVE" : "DISABLED"}
//                 </span>

//                 <span className="text-sm font-body text-foreground hidden md:block">
//                   {user.role || "user"}
//                 </span>

//                 <span className="text-sm font-body text-foreground hidden md:flex items-center gap-1">
//                   <Heart className="w-3 h-3 text-primary" /> {user.vote_count || 0}
//                 </span>

//                 <span className="text-sm font-body text-foreground hidden md:flex items-center gap-1">
//                   <Eye className="w-3 h-3 text-primary" /> {user.views || 0}
//                 </span>
//               </div>
//             ))}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }





'use client';

import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { Heart, Users, Clock, DollarSign, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

import NoData from '@/components/NoData';
import { userService } from '@/services/contestant.service';
import { paymentService } from '@/services/payments.service';
import LoadingState from '@/components/LoadingState';

export default function AdminDashboard() {
  const [users, setUsers] = useState<any[]>([]);
  const [payments, setPayments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersData, paymentsData] = await Promise.all([
          userService.getAll(),
          paymentService.getAll()
        ]);
        setUsers(usersData || []);
        setPayments(paymentsData || []);
      } catch (err) {
        console.error("Failed to fetch dashboard data", err);
        setUsers([]);
        setPayments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calculate stats
  const stats = useMemo(() => {
    const totalVotes = users.reduce((sum, user) => sum + (user.vote_count || 0), 0);
    const activeUsers = users.filter(user => user.is_active).length;
    const totalRevenue = payments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);

    return [
      { 
        icon: Heart, 
        label: "Total Votes", 
        value: totalVotes.toLocaleString(), 
        badge: "+12.5%", 
        badgeColor: "text-green-400" 
      },
      { 
        icon: Users, 
        label: "Active Users", 
        value: activeUsers.toString(), 
        badge: "+3 New", 
        badgeColor: "text-green-400" 
      },
      { 
        icon: Clock, 
        label: "Days Remaining", 
        value: "15", 
        badge: "Finals", 
        badgeColor: "text-muted-foreground" 
      },
      { 
        icon: DollarSign, 
        label: "Total Revenue", 
        value: `₦${totalRevenue.toLocaleString()}`, 
        badge: "+8%", 
        badgeColor: "text-green-400" 
      },
    ];
  }, [users, payments]);

  // Top 3 contenders
  const topContenders = [...users]
    .sort((a, b) => (b.vote_count || 0) - (a.vote_count || 0))
    .slice(0, 3);

  // Real 7-day votes chart from payments data
// Fixed 7-day chart with correct day alignment
const chartData = useMemo(() => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const voteMap = new Map();

  // Group votes by local date
  payments.forEach((payment: any) => {
    if (payment.created_at) {
      const date = new Date(payment.created_at);
      const dateKey = date.toLocaleDateString('en-CA'); // This fixes timezone shift
      const current = voteMap.get(dateKey) || 0;
      voteMap.set(dateKey, current + (payment.votes_purchased || 0));
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

  const maxVotes = Math.max(...chartData.map(d => d.votes), 10);

  if (loading) {
    return <LoadingState />;

  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Executive Overview</h1>
          <p className="text-sm text-muted-foreground font-body mt-1">Real-time statistics for MBGIPU Season 1</p>
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
            </div>
            <p className="text-xs text-muted-foreground font-body">{stat.label}</p>
            <p className="font-display text-2xl font-bold text-foreground mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Chart + Top Contenders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Real Voting Velocity Chart - Last 7 Days */}
{/* Fixed & Correct Bar Chart - Bottom to Top, Accurate Days, No Bar on Zero */}
<div className="lg:col-span-2 glass-card rounded-xl p-6 border border-border">
  <div className="flex items-center justify-between mb-6">
    <h3 className="font-display text-lg font-bold text-foreground">Voting Velocity</h3>
    <span className="text-xs font-body text-muted-foreground bg-secondary px-3 py-1 rounded-full">Last 7 Days</span>
  </div>

  <div className="h-60 flex items-end justify-between gap-6">
    {chartData.map((d, i) => {
      const hasVotes = d.votes > 0;
      const barHeight = hasVotes ? Math.max((d.votes / maxVotes) * 92, 18) : 0;

      return (
        <div key={i} className="flex-1 flex flex-col items-center gap-3">
          {/* Bar Container */}
          <div className="relative w-full h-48 flex items-end justify-center">
            {hasVotes && (
              <div 
                className="w-8 bg-primary rounded-t-2xl transition-all duration-300"
                style={{ height: `${barHeight}%` }}
              />
            )}
          </div>

          {/* Day Label */}
          <span className="text-xs font-medium text-muted-foreground tracking-wider">
            {d.day}
          </span>

          {/* Vote Count */}
          <span className="text-xs font-mono font-semibold text-primary">
            {d.votes}
          </span>
        </div>
      );
    })}
  </div>

  <p className="text-center text-[10px] text-muted-foreground mt-6">
    Daily votes received in the last 7 days
  </p>
</div>

        {/* Top Contenders */}
        <div className="glass-card rounded-xl p-6 border border-border">
          <h3 className="font-display text-lg font-bold text-foreground mb-4">Top Contenders</h3>
          
          {topContenders.length > 0 ? (
            <div className="space-y-4">
              {topContenders.map((user, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={user.images?.[0] || '/images/placeholder.jpg'}
                      alt={`${user.first_name} ${user.last_name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-body font-medium text-foreground capitalize">
                      {user.first_name} {user.last_name} {user.other_names}
                    </p>
                    <div className="w-full bg-secondary rounded-full h-1.5 mt-1">
                      <div className="bg-gradient-crimson h-1.5 rounded-full" style={{ width: `${90 - i * 15}%` }} />
                    </div>
                  </div>
                  <span className="text-sm font-body font-bold text-primary">
                    {user.vote_count?.toLocaleString() || '0'}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <NoData 
              title="No Contenders Yet"
              description="Once votes start coming in, top contestants will appear here."
            />
          )}
        </div>
      </div>

      {/* User Management Table */}
      <div className="glass-card rounded-xl p-6 border border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-lg font-bold text-foreground">User Management</h3>
        </div>

        {users.length === 0 ? (
          <NoData 
            title="No Users Found"
            description="No contestants have been added to the system yet."
          />
        ) : (
          <>
            <div className="hidden md:grid grid-cols-5 gap-4 text-[10px] font-body font-semibold tracking-[0.1em] text-muted-foreground pb-3 border-b border-border mb-3">
              <span>USER</span>
              <span>STATUS</span>
              <span>ROLE</span>
              <span>VOTES</span>
              <span>VIEWS</span>
            </div>

            {users.slice(0, 6).map((user, i) => (
              <div key={i} className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center py-3 border-b border-border/50 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden">
                    <Image
                      src={user.images?.[0] || '/images/placeholder.jpg'}
                      alt={`${user.first_name} ${user.last_name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-body font-medium text-foreground">
                      {user.first_name} {user.last_name}
                    </p>
                    <p className="text-[10px] text-muted-foreground font-body">{user.email}</p>
                  </div>
                </div>

                <span className={`text-[10px] font-body font-semibold px-2 py-1 rounded w-fit ${
                  user.is_active ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                }`}>
                  {user.is_active ? "ACTIVE" : "DISABLED"}
                </span>

                <span className="text-sm font-body text-foreground hidden md:block">
                  {user.role || "user"}
                </span>

                <span className="text-sm font-body text-foreground hidden md:flex items-center gap-1">
                  <Heart className="w-3 h-3 text-primary" /> {user.vote_count || 0}
                </span>

                <span className="text-sm font-body text-foreground hidden md:flex items-center gap-1">
                  <Eye className="w-3 h-3 text-primary" /> {user.views || 0}
                </span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}