// // "use client"

// // import { useParams, Link, useNavigate } from "react-router-dom";
// // import { ArrowLeft, Heart, Eye, Award, Mail, Phone, MapPin, GraduationCap, Calendar, Trash2, Edit, Ban, CheckCircle2, TrendingUp } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { contestants } from "@/data/contestants";

// // const ContestantDetail = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const contestant = contestants.find((c) => c.id === id);

// //   if (!contestant) {
// //     return (
// //       <div className="text-center py-20">
// //         <p className="font-body text-muted-foreground">Contestant not found.</p>
// //         <Button onClick={() => navigate("/admin/models")} className="mt-4 bg-gradient-crimson font-body">
// //           <ArrowLeft className="w-4 h-4 mr-1" /> Back to Models
// //         </Button>
// //       </div>
// //     );
// //   }

// //   const stats = [
// //     { label: "TOTAL VOTES", value: contestant.votes.toLocaleString(), icon: TrendingUp, color: "text-gold" },
// //     { label: "PROFILE VIEWS", value: (contestant.views / 1000).toFixed(1) + "k", icon: Eye, color: "text-primary" },
// //     { label: "LIKES", value: (contestant.likes / 1000).toFixed(1) + "k", icon: Heart, color: "text-primary" },
// //     { label: "CURRENT RANK", value: `#${contestant.rank}`, icon: Award, color: "text-gold" },
// //   ];

// //   return (
// //     <div className="space-y-6">
// //       {/* Back & header */}
// //       <Link to="/admin/models" className="inline-flex items-center gap-2 text-xs font-body tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors">
// //         <ArrowLeft className="w-3 h-3" /> BACK TO MODELS
// //       </Link>

// //       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
// //         <div>
// //           <div className="w-12 h-1 bg-gold rounded mb-4" />
// //           <h1 className="font-display text-3xl md:text-4xl font-black text-foreground">
// //             CONTESTANT <span className="font-display italic text-gold">DOSSIER</span>
// //           </h1>
// //           <p className="text-xs text-muted-foreground font-body tracking-[0.15em] mt-2">
// //             ID: MBG-{contestant.id.padStart(4, "0")} · FULL PROFILE & PERFORMANCE
// //           </p>
// //         </div>
// //         <div className="flex gap-2">
// //           <Button variant="outline" className="font-body text-xs border-border">
// //             <Edit className="w-4 h-4 mr-1" /> Edit
// //           </Button>
// //           <Button variant="outline" className="font-body text-xs border-border text-destructive hover:text-destructive">
// //             <Ban className="w-4 h-4 mr-1" /> Suspend
// //           </Button>
// //           <Button variant="outline" className="font-body text-xs border-border text-destructive hover:text-destructive">
// //             <Trash2 className="w-4 h-4 mr-1" /> Delete
// //           </Button>
// //         </div>
// //       </div>

// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //         {/* Left - Identity card */}
// //         <div className="lg:col-span-1 space-y-6">
// //           <div className="glass-card rounded-xl border border-border overflow-hidden">
// //             <div className="aspect-[3/4] relative">
// //               <img src={contestant.image} alt={contestant.name} className="w-full h-full object-cover" />
// //               <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
// //               <div className="absolute bottom-0 left-0 right-0 p-5">
// //                 <span className="text-[10px] font-body font-semibold tracking-[0.15em] bg-primary text-primary-foreground px-2 py-1 rounded">
// //                   {contestant.category.toUpperCase()}
// //                 </span>
// //                 <h2 className="font-display text-2xl font-black text-foreground mt-2 leading-tight">{contestant.name}</h2>
// //                 <p className="text-xs font-body text-muted-foreground mt-1">Representing {contestant.representing}</p>
// //               </div>
// //             </div>
// //             <div className="p-5 border-t border-border">
// //               <div className="flex items-center justify-between">
// //                 <span className="text-[10px] font-body font-semibold tracking-[0.15em] text-muted-foreground">STATUS</span>
// //                 <span className="inline-flex items-center gap-1 text-[10px] font-body font-semibold px-2 py-1 rounded bg-green-500/20 text-green-400">
// //                   <CheckCircle2 className="w-3 h-3" /> ACTIVE
// //                 </span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Contact */}
// //           <div className="glass-card rounded-xl border border-border p-5">
// //             <h3 className="text-[10px] font-body font-semibold tracking-[0.15em] text-muted-foreground mb-4">CONTACT INFORMATION</h3>
// //             <div className="space-y-3">
// //               <div className="flex items-center gap-3 text-sm font-body text-foreground">
// //                 <Mail className="w-4 h-4 text-gold" />
// //                 <span className="truncate">{contestant.name.toLowerCase().replace(" ", ".")}@mbgipu.com</span>
// //               </div>
// //               <div className="flex items-center gap-3 text-sm font-body text-foreground">
// //                 <Phone className="w-4 h-4 text-gold" />
// //                 <span>+1 (555) 010-{contestant.id}234</span>
// //               </div>
// //               <div className="flex items-center gap-3 text-sm font-body text-foreground">
// //                 <MapPin className="w-4 h-4 text-gold" />
// //                 <span>{contestant.representing}, USA</span>
// //               </div>
// //               <div className="flex items-center gap-3 text-sm font-body text-foreground">
// //                 <Calendar className="w-4 h-4 text-gold" />
// //                 <span>Age {contestant.age}</span>
// //               </div>
// //               <div className="flex items-center gap-3 text-sm font-body text-foreground">
// //                 <GraduationCap className="w-4 h-4 text-gold" />
// //                 <span>{contestant.education}</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right - Stats & details */}
// //         <div className="lg:col-span-2 space-y-6">
// //           {/* Stats grid */}
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
// //             {stats.map((s) => (
// //               <div key={s.label} className="glass-card rounded-xl border border-border p-4">
// //                 <s.icon className={`w-5 h-5 ${s.color} mb-3`} />
// //                 <p className="text-[10px] font-body font-semibold tracking-[0.15em] text-muted-foreground">{s.label}</p>
// //                 <p className="font-display text-2xl font-black text-foreground mt-1">{s.value}</p>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Bio */}
// //           <div className="glass-card rounded-xl border border-border p-6">
// //             <h3 className="text-[10px] font-body font-semibold tracking-[0.15em] text-muted-foreground mb-3">BIOGRAPHY</h3>
// //             <p className="text-sm font-body text-foreground/90 leading-relaxed">{contestant.bio}</p>
// //           </div>

// //           {/* Platform */}
// //           <div className="glass-card rounded-xl border border-border p-6">
// //             <h3 className="text-[10px] font-body font-semibold tracking-[0.15em] text-muted-foreground mb-3">ADVOCACY PLATFORM</h3>
// //             <p className="font-display text-xl font-bold text-gold">{contestant.platform}</p>
// //           </div>

// //           {/* Voting Activity */}
// //           <div className="glass-card rounded-xl border border-border p-6">
// //             <div className="flex items-center justify-between mb-4">
// //               <h3 className="text-[10px] font-body font-semibold tracking-[0.15em] text-muted-foreground">RECENT VOTING ACTIVITY</h3>
// //               <span className="text-[10px] font-body text-muted-foreground">LAST 7 DAYS</span>
// //             </div>
// //             <div className="space-y-3">
// //               {[
// //                 { day: "Today", votes: 1240, amount: "$2,480" },
// //                 { day: "Yesterday", votes: 982, amount: "$1,964" },
// //                 { day: "2 days ago", votes: 1450, amount: "$2,900" },
// //                 { day: "3 days ago", votes: 760, amount: "$1,520" },
// //               ].map((row) => (
// //                 <div key={row.day} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
// //                   <span className="text-sm font-body text-foreground">{row.day}</span>
// //                   <div className="flex items-center gap-6">
// //                     <span className="text-sm font-body text-muted-foreground">{row.votes.toLocaleString()} votes</span>
// //                     <span className="text-sm font-body font-semibold text-gold">{row.amount}</span>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContestantDetail;



// 'use client';

// import { useState, useEffect } from "react";
// import { useParams, useRouter } from "next/navigation";
// import Image from 'next/image';
// import Link from 'next/link';
// import { 
//   ArrowLeft, 
//   Heart, 
//   Eye, 
//   Award, 
//   Mail, 
//   Phone, 
//   MapPin, 
//   GraduationCap, 
//   Calendar, 
//   Edit, 
//   Ban, 
//   Trash2 
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { useQuery } from '@tanstack/react-query';

// import { userService } from '@/services/user.service';
// import ConfirmDialog from '@/components/ConfirmDialog';
// import LoadingState from "@/components/LoadingState";

// export default function AdminContestantDetail() {
//   const { id } = useParams();
//   const router = useRouter();

//   const [showDeactivateConfirm, setShowDeactivateConfirm] = useState(false);

//   // Fetch contestant details
//   const { data: contestant, isLoading, error } = useQuery({
//     queryKey: ['contestant-detail', id],
//     queryFn: () => userService.getById(id as string),
//     enabled: !!id,
//   });

//   if (isLoading) return <LoadingState />;
//   if (error || !contestant) {
//     return (
//       <div className="text-center py-20">
//         <p className="font-body text-muted-foreground">Contestant not found.</p>
//         <Button 
//           onClick={() => router.push("/admin/models")} 
//           className="mt-4 bg-gradient-crimson font-body"
//         >
//           <ArrowLeft className="w-4 h-4 mr-1" /> Back to Models
//         </Button>
//       </div>
//     );
//   }

//   const stats = [
//     { 
//       label: "TOTAL VOTES", 
//       value: (contestant.vote_count || 0).toLocaleString(), 
//       icon: Award, 
//       color: "text-gold" 
//     },
//     { 
//       label: "PROFILE VIEWS", 
//       value: ((contestant.views || 0) / 1000).toFixed(1) + "k", 
//       icon: Eye, 
//       color: "text-primary" 
//     },
//     { 
//       label: "AGE", 
//       value: contestant.age || "N/A", 
//       icon: Calendar, 
//       color: "text-primary" 
//     },
//   ];

//   const handleDeactivate = () => setShowDeactivateConfirm(true);

//   return (
//     <div className="space-y-8 pb-12">
//       {/* Back Button */}
//       <Link 
//         href="/admin/models" 
//         className="inline-flex items-center gap-2 text-xs font-body tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
//       >
//         <ArrowLeft className="w-4 h-4" /> BACK TO MODELS
//       </Link>

//       {/* Header */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <div>
//           <div className="w-12 h-1 bg-gold rounded mb-4" />
//           <h1 className="font-display text-3xl md:text-4xl font-black text-foreground">
//             CONTESTANT <span className="font-display italic text-gold">DOSSIER</span>
//           </h1>
//           <p className="text-xs text-muted-foreground font-body tracking-[0.15em] mt-2">
//             ID: MBG-{String(contestant.id).padStart(4, "0")} • FULL PROFILE
//           </p>
//         </div>

//         <div className="flex gap-3">
//           <Button variant="outline" className="font-body text-xs">
//             <Edit className="w-4 h-4 mr-1" /> Edit Profile
//           </Button>
//           <Button 
//             onClick={handleDeactivate}
//             variant="destructive" 
//             className="font-body text-xs"
//           >
//             <Ban className="w-4 h-4 mr-1" /> Deactivate
//           </Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left Column - Profile Image & Basic Info */}
//         <div className="lg:col-span-1 space-y-6">
//           <div className="glass-card rounded-2xl overflow-hidden border border-border">
//             <div className="aspect-[3/4] relative">
//               <Image
//                 src={contestant.images?.[0] || '/images/contestant-placeholder.jpg'}
//                 alt={`${contestant.first_name} ${contestant.last_name}`}
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
//               <div className="absolute bottom-0 left-0 right-0 p-6">
//                 <h2 className="font-display text-3xl font-black text-white">
//                   {contestant.first_name} {contestant.last_name}
//                 </h2>
//                 <p className="text-white/80 mt-1">Representing {contestant.representing}</p>
//               </div>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="glass-card rounded-2xl p-6 border border-border">
//             <h3 className="text-xs font-body font-semibold tracking-[0.15em] text-muted-foreground mb-4">CONTACT INFORMATION</h3>
//             <div className="space-y-4 text-sm">
//               <div className="flex items-center gap-3">
//                 <Mail className="w-4 h-4 text-gold" />
//                 <span>{contestant.email}</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Phone className="w-4 h-4 text-gold" />
//                 <span>{contestant.phone_number || "Not provided"}</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <MapPin className="w-4 h-4 text-gold" />
//                 <span>{contestant.representing}</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Calendar className="w-4 h-4 text-gold" />
//                 <span>Age {contestant.age}</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <GraduationCap className="w-4 h-4 text-gold" />
//                 <span>{contestant.education}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Stats & Bio */}
//         <div className="lg:col-span-2 space-y-6">
//           {/* Stats Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {stats.map((stat, i) => (
//               <div key={i} className="glass-card rounded-2xl p-6 border border-border">
//                 <stat.icon className={`w-6 h-6 ${stat.color} mb-4`} />
//                 <p className="text-xs font-body tracking-widest text-muted-foreground">{stat.label}</p>
//                 <p className="font-display text-3xl font-bold text-foreground mt-1">{stat.value}</p>
//               </div>
//             ))}
//           </div>

//           {/* Bio */}
//           <div className="glass-card rounded-2xl p-8 border border-border">
//             <h3 className="text-xs font-body font-semibold tracking-[0.15em] text-muted-foreground mb-4">BIOGRAPHY & AMBITION</h3>
//             <p className="text-foreground leading-relaxed">
//               {contestant.bio || "No biography provided yet."}
//             </p>
//           </div>

//           {/* Social Links */}
//           <div className="glass-card rounded-2xl p-8 border border-border">
//             <h3 className="text-xs font-body font-semibold tracking-[0.15em] text-muted-foreground mb-4">SOCIAL LINKS</h3>
//             <div className="flex flex-wrap gap-4">
//               {contestant.instagram && (
//                 <a href={contestant.instagram} target="_blank" className="text-primary hover:underline">Instagram</a>
//               )}
//               {contestant.tiktok && (
//                 <a href={contestant.tiktok} target="_blank" className="text-primary hover:underline">TikTok</a>
//               )}
//               {contestant.facebook && (
//                 <a href={contestant.facebook} target="_blank" className="text-primary hover:underline">Facebook</a>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Confirmation Dialog for Deactivate */}
//       <ConfirmDialog
//         isOpen={showDeactivateConfirm}
//         title="Deactivate Contestant"
//         message={`Are you sure you want to deactivate ${contestant.first_name} ${contestant.last_name}?`}
//         confirmText="Yes, Deactivate"
//         isDestructive={true}
//         onConfirm={() => {
//           // Call toggleUserStatus with false
//           // You can implement this if needed
//           setShowDeactivateConfirm(false);
//         }}
//         onCancel={() => setShowDeactivateConfirm(false)}
//       />
//     </div>
//   );
// }


// 'use client';

// import { useState, useEffect } from "react";
// import { useParams, useSearchParams, useRouter } from "next/navigation";
// import Image from 'next/image';
// import { 
//   ArrowLeft, 
//   Eye, 
//   Award, 
//   Mail, 
//   Phone, 
//   MapPin, 
//   Calendar, 
//   Ban
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import ConfirmDialog from '@/components/ConfirmDialog';

// export default function AdminContestantDetail() {
//   const { id } = useParams();
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [contestant, setContestant] = useState<any>(null);
//   const [showDeactivateConfirm, setShowDeactivateConfirm] = useState(false);

//   // Get data from URL search params (passed from list page)
//   useEffect(() => {
//     const dataParam = searchParams.get('data');
//     if (dataParam) {
//       try {
//         const parsedData = JSON.parse(decodeURIComponent(dataParam));
//         setContestant(parsedData);
//       } catch (e) {
//         console.error("Failed to parse contestant data");
//       }
//     }
//   }, [searchParams]);

//   if (!contestant) {
//     return (
//       <div className="text-center py-20">
//         <p className="font-body text-muted-foreground">Contestant not found.</p>
//         <Button 
//           onClick={() => router.push("/admin/models")} 
//           className="mt-4 bg-primary"
//         >
//           <ArrowLeft className="w-4 h-4 mr-1" /> Back to Models
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-8 pb-12">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <div>
//           <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
//             CONTESTANT <span className="font-display italic text-gold">DOSSIER</span>
//           </h1>
//           <p className="text-xs text-muted-foreground font-body tracking-[0.15em] mt-2">
//             {contestant.id} • FULL PROFILE
//           </p>
//         </div>
//       </div>
//        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left Column - Profile Image + Status */}
//         <div className="lg:col-span-1 space-y-6">
//           <div className="glass-card rounded-2xl overflow-hidden border border-border">
//             <div className="aspect-[3/4] relative">
//               <Image
//                 src={contestant.images?.[0] || '/images/contestant-placeholder.jpg'}
//                 alt={`${contestant.first_name} ${contestant.last_name}`}
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
//               {/* Status Badge */}
//               <div className="absolute top-4 right-4">
//                 <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider ${
//                   contestant.is_active 
//                     ? "bg-green-500/90 text-white" 
//                     : "bg-red-500/90 text-white"
//                 }`}>
//                   {contestant.is_active ? "ACTIVE" : "INACTIVE"}
//                 </span>
//               </div>

//               <div className="absolute bottom-0 left-0 right-0 p-6">
//                 <h2 className="font-display text-3xl font-black text-white">
//                   {contestant.first_name} {contestant.last_name}
//                 </h2>
//                 <p className="text-white/80 mt-1">Representing {contestant.representing}</p>
//               </div>
//             </div>
//           </div>
// </div>
      

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left - Profile Image */}
//         <div className="lg:col-span-1 space-y-6">
//           <div className="glass-card rounded-2xl overflow-hidden border border-border">
//             <div className="aspect-[3/4] relative">
//               <Image
//                 src={contestant.images?.[0] || '/images/contestant-placeholder.jpg'}
//                 alt={`${contestant.first_name} ${contestant.last_name}`}
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
//               <div className="absolute bottom-0 left-0 right-0 p-6">
//                 <h2 className="font-display text-3xl font-black text-white">
//                   {contestant.first_name} {contestant.last_name}
//                 </h2>
//                 <p className="text-white/80 mt-1">Representing {contestant.representing}</p>
//               </div>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="glass-card rounded-2xl p-6 border border-border">
//             <h3 className="text-xs font-body font-semibold tracking-[0.15em] text-muted-foreground mb-4">CONTACT INFORMATION</h3>
//             <div className="space-y-4 text-sm">
//               <div className="flex items-center gap-3">
//                 <Mail className="w-4 h-4 text-gold" />
//                 <span>{contestant.email}</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Phone className="w-4 h-4 text-gold" />
//                 <span>{contestant.phone_number || "Not provided"}</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <MapPin className="w-4 h-4 text-gold" />
//                 <span>{contestant.representing}</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Calendar className="w-4 h-4 text-gold" />
//                 <span>Age {contestant.age}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Stats & Bio */}
//         <div className="lg:col-span-2 space-y-6">
//           {/* Stats Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//   {[
//     { 
//       label: "TOTAL VOTES", 
//       value: (contestant.vote_count || 0).toLocaleString(), 
//       icon: Award, 
//       color: "text-gold" 
//     },
//     { 
//       label: "PROFILE VIEWS", 
//       // Corrected: Removed the extra {} and kept it as a JS expression
//       value: contestant.views > 999 
//         ? `${(contestant.views / 1000).toFixed(0)}k` 
//         : (contestant.views || 0), 
//       icon: Eye, 
//       color: "text-primary" 
//     },
//     { 
//       label: "AGE", 
//       value: contestant.age || "N/A", 
//       icon: Calendar, 
//       color: "text-primary" 
//     },
//   ].map((s, i) => (
//     <div key={i} className="glass-card rounded-2xl p-6 border border-border">
//       <s.icon className={`w-6 h-6 ${s.color} mb-4`} />
//       <p className="text-xs font-body tracking-widest text-muted-foreground">{s.label}</p>
//       <p className="font-display text-3xl font-bold text-foreground mt-1">{s.value}</p>
//     </div>
//   ))}
// </div>

//           {/* Bio */}
//           <div className="glass-card rounded-2xl p-8 border border-border">
//             <h3 className="text-xs font-body font-semibold tracking-[0.15em] text-muted-foreground mb-4">BIOGRAPHY & AMBITION</h3>
//             <p className="text-foreground leading-relaxed">
//               {contestant.bio || "No biography provided yet."}
//             </p>
//           </div>

//           {/* Social Links */}
//           <div className="glass-card rounded-2xl p-8 border border-border">
//             <h3 className="text-xs font-body font-semibold tracking-[0.15em] text-muted-foreground mb-4">SOCIAL LINKS</h3>
//             <div className="flex flex-wrap gap-4 text-primary">
//               {contestant.instagram && <a href={contestant.instagram} target="_blank" className="hover:underline">Instagram</a>}
//               {contestant.tiktok && <a href={contestant.tiktok} target="_blank" className="hover:underline">TikTok</a>}
//               {contestant.facebook && <a href={contestant.facebook} target="_blank" className="hover:underline">Facebook</a>}
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }





'use client';

import { useState, useEffect } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Eye, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
} from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export default function AdminContestantDetail() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [contestant, setContestant] = useState<any>(null);

  // Get contestant data passed from list page
  useEffect(() => {
    const dataParam = searchParams.get('data');
    if (dataParam) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(dataParam));
        setContestant(parsedData);
      } catch (e) {
        console.error("Failed to parse contestant data from URL");
      }
    }
  }, [searchParams]);

  if (!contestant) {
    return (
      <div className="text-center py-20">
        <p className="font-body text-muted-foreground">Contestant not found.</p>
        <Button 
          onClick={() => router.push("/admin/models")} 
          className="mt-4 bg-gradient-crimson font-body"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Models
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12">

      {/* Header */}
       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
         <div>
           <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
             CONTESTANT <span className="font-display italic text-gold">DOSSIER</span>
           </h1>
           <p className="text-xs text-muted-foreground font-body tracking-[0.15em] mt-2">
             {contestant.id} • FULL PROFILE
           </p>
         </div>
       </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Image + Status */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-card rounded-2xl overflow-hidden border border-border relative">
            <div className="aspect-[3/4] relative">
              <Image
                src={contestant.images?.[0] || '/images/contestant-placeholder.jpg'}
                alt={`${contestant.first_name} ${contestant.last_name} ${contestant.other_names}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Status Badge - Top Right */}
              <div className="absolute top-4 right-4">
                <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider ${
                  contestant.is_active 
                    ? "bg-green-500/90 text-white" 
                    : "bg-red-500/90 text-white"
                }`}>
                  {contestant.is_active ? "ACTIVE" : "INACTIVE"}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="font-display text-xl font-black text-white capitalize">
                  {contestant.first_name} {contestant.last_name} {contestant.other_names}
                </h2>
                <p className="text-white/80 mt-1">Representing {contestant.representing}</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="glass-card rounded-2xl p-6 border border-border">
            <h3 className="text-xs font-body font-semibold tracking-[0.15em] text-muted-foreground mb-4">CONTACT INFORMATION</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" />
                <span>{contestant.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                <span>{contestant.phone_number || "Not provided"}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold" />
                <span>{contestant.representing}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-gold" />
                <span>Age {contestant.age}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Stats & Bio */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { 
                label: "TOTAL VOTES", 
                value: (contestant.vote_count || 0).toLocaleString(), 
                icon: Award, 
                color: "text-gold" 
              },
              { 
                label: "PROFILE VIEWS", 
                value: contestant.views > 999 
                  ? `${(contestant.views / 1000).toFixed(1)}k` 
                  : (contestant.views || 0), 
                icon: Eye, 
                color: "text-primary" 
              },
              { 
                label: "AGE", 
                value: contestant.age || "N/A", 
                icon: Calendar, 
                color: "text-primary" 
              },
            ].map((s, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-border">
                <s.icon className={`w-6 h-6 ${s.color} mb-4`} />
                <p className="text-xs font-body tracking-widest text-muted-foreground">{s.label}</p>
                <p className="font-display text-3xl font-bold text-foreground mt-1">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="glass-card rounded-2xl p-8 border border-border">
            <h3 className="text-xs font-body font-semibold tracking-[0.15em] text-muted-foreground mb-4">BIOGRAPHY & AMBITION</h3>
            <p className="text-foreground leading-relaxed">
              {contestant.bio || "No biography provided yet."}
            </p>
          </div>

          {/* Social Links */}
          <div className="glass-card rounded-2xl p-8 border border-border">
            <h3 className="text-xs font-body font-semibold tracking-[0.15em] text-muted-foreground mb-4">SOCIAL LINKS</h3>
            <div className="flex flex-wrap gap-4 text-primary">
              {contestant.instagram && <a href={contestant.instagram} target="_blank" className="hover:underline"><FaInstagram className="w-4 h-4" /></a>}
              {contestant.tiktok && <a href={contestant.tiktok} target="_blank" className="hover:underline"><FaTiktok className="w-4 h-4" /></a>}
              {contestant.facebook && <a href={contestant.facebook} target="_blank" className="hover:underline"><FaFacebook className="w-4 h-4" /></a>}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}