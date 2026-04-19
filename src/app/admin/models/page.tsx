// // // // // app/admin/models/page.tsx
// // // // 'use client';

// // // // import Image from 'next/image';
// // // // import { Search, Filter, MoreHorizontal, Heart, Eye, Trash2, Edit, UserPlus } from "lucide-react";
// // // // import { Button } from "@/components/ui/button";
// // // // import { contestants } from "@/data/contestants";

// // // // export default function AdminModels() {
// // // //   return (
// // // //     <div>
// // // //       {/* Header */}
// // // //       <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
// // // //         <div>
// // // //           <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
// // // //             MODEL <span className="font-display italic text-gold">MANAGEMENT</span>
// // // //           </h1>
// // // //           <p className="text-sm text-muted-foreground font-body mt-1">Manage All Registered Contestants</p>
// // // //         </div>
// // // //         <Button className="bg-gradient-crimson font-body text-sm mt-3 md:mt-0">
// // // //           <UserPlus className="w-4 h-4 mr-1" /> Add New Model
// // // //         </Button>
// // // //       </div>

// // // //       {/* Search & Filter */}
// // // //       <div className="flex flex-col md:flex-row gap-3 mb-6">
// // // //         <div className="flex items-center gap-2 bg-secondary border border-border rounded-lg px-4 py-2 flex-1">
// // // //           <Search className="w-4 h-4 text-muted-foreground" />
// // // //           <input
// // // //             placeholder="Search by name, ID, or School..."
// // // //             className="bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none w-full"
// // // //           />
// // // //         </div>
// // // //         <Button variant="outline" className="font-body text-sm border-border">
// // // //           <Filter className="w-4 h-4 mr-1" /> Filter
// // // //         </Button>
// // // //       </div>

// // // //       {/* Models Table */}
// // // //       <div className="glass-card rounded-xl border border-border overflow-hidden">
// // // //         {/* Table Header */}
// // // //         <div className="hidden md:grid grid-cols-7 gap-4 text-[10px] font-body font-semibold tracking-[0.1em] text-muted-foreground p-4 border-b border-border">
// // // //           <span className="col-span-2">MODEL CANDIDATE</span>
// // // //           <span>STATUS</span>
// // // //           <span>REPRESENTING</span>
// // // //           <span>VOTES</span>
// // // //           <span>ENGAGEMENT</span>
// // // //           <span>ACTIONS</span>
// // // //         </div>

// // // //         {/* Table Rows */}
// // // //         {contestants.map((c) => (
// // // //           <div 
// // // //             key={c.id} 
// // // //             className="grid grid-cols-2 md:grid-cols-7 gap-4 items-center p-4 border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors"
// // // //           >
// // // //             {/* Model Info */}
// // // //             <div className="flex items-center gap-3 col-span-2">
// // // //               <div className="relative w-10 h-10 rounded-full overflow-hidden">
// // // //                 <Image
// // // //                   src={c.image}
// // // //                   alt={c.name}
// // // //                   fill
// // // //                   className="object-cover"
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <p className="text-sm font-body font-medium text-foreground">{c.name}</p>
// // // //                 <p className="text-[10px] text-muted-foreground font-body">
// // // //                   ID: MBG-{c.id.padStart(4, "0")}
// // // //                 </p>
// // // //               </div>
// // // //             </div>

// // // //             {/* Status */}
// // // //             <span className="text-[10px] font-body font-semibold px-2 py-1 rounded w-fit bg-green-500/20 text-green-400">
// // // //               ACTIVE
// // // //             </span>

// // // //             {/* Representing */}
// // // //             <span className="text-sm font-body text-foreground hidden md:block">{c.representing}</span>

// // // //             {/* Votes */}
// // // //             <span className="text-sm font-body text-foreground hidden md:block">
// // // //               {c.votes.toLocaleString()}
// // // //             </span>

// // // //             {/* Engagement */}
// // // //             <span className="text-sm font-body text-foreground hidden md:flex items-center gap-1">
// // // //               <Heart className="w-3 h-3 text-primary" /> 
// // // //               {(Math.floor(Math.random() * 15000) / 1000).toFixed(1)}k
// // // //             </span>

// // // //             {/* Actions */}
// // // //             <div className="hidden md:flex items-center gap-2">
// // // //               <button className="p-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-foreground">
// // // //                 <Eye className="w-4 h-4" />
// // // //               </button>
// // // //               <button className="p-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-foreground">
// // // //                 <Edit className="w-4 h-4" />
// // // //               </button>
// // // //               <button className="p-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-primary">
// // // //                 <Trash2 className="w-4 h-4" />
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }





// // // 'use client';

// // // import { useState } from "react";
// // // import Image from 'next/image';
// // // import { Search, Filter, MoreHorizontal, Heart, Eye, Trash2, Edit, UserPlus } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import { useQuery } from '@tanstack/react-query';

// // // import { userService } from '@/services/contestant.service';

// // // export default function AdminModels() {
// // //   const [searchTerm, setSearchTerm] = useState("");

// // //   // Fetch real contestants
// // //   const { data: contestants = [], isLoading, error } = useQuery({
// // //     queryKey: ['contestants-management'],
// // //     queryFn: userService.getAll,
// // //   });

// // //   // Filter contestants based on search
// // //   const filteredContestants = contestants.filter((c: any) => {
// // //     const fullName = `${c.first_name} ${c.last_name}`.toLowerCase();
// // //     const representing = (c.representing || "").toLowerCase();
// // //     const search = searchTerm.toLowerCase();
    
// // //     return fullName.includes(search) || representing.includes(search);
// // //   });

// // //   if (isLoading) {
// // //     return <div className="p-8 text-center">Loading contestants...</div>;
// // //   }

// // //   if (error) {
// // //     return <div className="p-8 text-center text-red-400">Failed to load contestants</div>;
// // //   }

// // //   return (
// // //     <div>
// // //       {/* Header */}
// // //       <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
// // //         <div>
// // //           <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
// // //             MODEL <span className="font-display italic text-gold">MANAGEMENT</span>
// // //           </h1>
// // //           <p className="text-sm text-muted-foreground font-body mt-1">
// // //             Manage All Registered Contestants • {contestants.length} Total
// // //           </p>
// // //         </div>
// // //         {/* <Button className="bg-gradient-crimson font-body text-sm mt-3 md:mt-0">
// // //           <UserPlus className="w-4 h-4 mr-1" /> Add New Model
// // //         </Button> */}
// // //       </div>

// // //       {/* Search & Filter */}
// // //       <div className="flex flex-col md:flex-row gap-3 mb-6">
// // //         <div className="flex items-center gap-2 bg-secondary border border-border rounded-lg px-4 py-2.5 flex-1">
// // //           <Search className="w-4 h-4 text-muted-foreground" />
// // //           <input
// // //             type="text"
// // //             placeholder="Search by name, ID, or School..."
// // //             value={searchTerm}
// // //             onChange={(e) => setSearchTerm(e.target.value)}
// // //             className="bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none w-full"
// // //           />
// // //         </div>
// // //         {/* <Button variant="outline" className="font-body text-sm border-border">
// // //           <Filter className="w-4 h-4 mr-1" /> Filter
// // //         </Button> */}
// // //       </div>

// // //       {/* Models Table */}
// // //       <div className="glass-card rounded-xl border border-border overflow-hidden">
// // //         {/* Table Header */}
// // //         <div className="hidden md:grid grid-cols-7 gap-4 text-[10px] font-body font-semibold tracking-[0.1em] text-muted-foreground p-4 border-b border-border bg-secondary/50">
// // //           <span className="col-span-2">MODEL CANDIDATE</span>
// // //           <span>STATUS</span>
// // //           <span>REPRESENTING</span>
// // //           <span>VOTES</span>
// // //           <span>ENGAGEMENT</span>
// // //           <span>ACTIONS</span>
// // //         </div>

// // //         {/* Table Rows */}
// // //         {filteredContestants.length === 0 ? (
// // //           <div className="p-12 text-center text-muted-foreground">
// // //             No contestants found matching your search.
// // //           </div>
// // //         ) : (
// // //           filteredContestants.map((c: any) => (
// // //             <div 
// // //               key={c.id} 
// // //               className="grid grid-cols-2 md:grid-cols-7 gap-4 items-center p-4 border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors"
// // //             >
// // //               {/* Model Info */}
// // //               <div className="flex items-center gap-3 col-span-2">
// // //                 <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-border">
// // //                   <Image
// // //                     src={c.images?.[0] || '/images/contestant-placeholder.jpg'}
// // //                     alt={`${c.first_name} ${c.last_name}`}
// // //                     fill
// // //                     className="object-cover"
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm font-body font-medium text-foreground">
// // //                     {c.first_name} {c.last_name}
// // //                   </p>
// // //                   <p className="text-[10px] text-muted-foreground font-body">
// // //                     ID: MBG-{String(c.id).padStart(4, "0")}
// // //                   </p>
// // //                 </div>
// // //               </div>

// // //               {/* Status */}
// // //               <span className={`text-[10px] font-body font-semibold px-3 py-1 rounded w-fit ${
// // //                 c.is_active 
// // //                   ? "bg-green-500/20 text-green-400" 
// // //                   : "bg-red-500/20 text-red-400"
// // //               }`}>
// // //                 {c.is_active ? "ACTIVE" : "INACTIVE"}
// // //               </span>

// // //               {/* Representing */}
// // //               <span className="text-sm font-body text-foreground hidden md:block">
// // //                 {c.representing || "—"}
// // //               </span>

// // //               {/* Votes */}
// // //               <span className="text-sm font-body font-bold text-foreground hidden md:block">
// // //                 {(c.vote_count || 0).toLocaleString()}
// // //               </span>

// // //               {/* Engagement (Views) */}
// // //               <span className="text-sm font-body text-foreground hidden md:flex items-center gap-1">
// // //                 <Eye className="w-3.5 h-3.5 text-primary" /> 
// // //                 {(c.views || 0).toLocaleString()}
// // //               </span>

// // //               {/* Actions */}
// // //               <div className="flex items-center gap-2 md:justify-end">
// // //                 <button className="p-2 rounded hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">
// // //                   <Eye className="w-4 h-4" />
// // //                 </button>
// // //                 <button className="p-2 rounded hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">
// // //                   <Edit className="w-4 h-4" />
// // //                 </button>
// // //                 <button className="p-2 rounded hover:bg-secondary text-muted-foreground hover:text-red-400 transition-colors">
// // //                   <Trash2 className="w-4 h-4" />
// // //                 </button>
// // //                 <button className="md:hidden p-2 rounded hover:bg-secondary text-muted-foreground">
// // //                   <MoreHorizontal className="w-4 h-4" />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ))
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }




// // // 'use client';

// // // import { useState, useMemo } from "react";
// // // import Image from 'next/image';
// // // import { Search, Eye, Edit, Trash2, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import { useQuery } from '@tanstack/react-query';

// // // import { userService } from '@/services/contestant.service';

// // // export default function AdminModels() {
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const itemsPerPage = 10; // You can change this

// // //   // Fetch contestants
// // //   const { data: contestants = [], isLoading, error } = useQuery({
// // //     queryKey: ['contestants-management'],
// // //     queryFn: userService.getAll,
// // //   });

// // //   // Filter contestants based on search
// // //   const filteredContestants = useMemo(() => {
// // //     return contestants.filter((c: any) => {
// // //       const fullName = `${c.first_name} ${c.last_name}`.toLowerCase();
// // //       const representing = (c.representing || "").toLowerCase();
// // //       const search = searchTerm.toLowerCase();
      
// // //       return fullName.includes(search) || representing.includes(search);
// // //     });
// // //   }, [contestants, searchTerm]);

// // //   // Pagination Logic
// // //   const totalPages = Math.ceil(filteredContestants.length / itemsPerPage);
  
// // //   const paginatedContestants = useMemo(() => {
// // //     const startIndex = (currentPage - 1) * itemsPerPage;
// // //     return filteredContestants.slice(startIndex, startIndex + itemsPerPage);
// // //   }, [filteredContestants, currentPage]);

// // //   // Reset to first page when search changes
// // //   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // //     setSearchTerm(e.target.value);
// // //     setCurrentPage(1); // Reset to page 1 on new search
// // //   };

// // //   if (isLoading) {
// // //     return <div className="p-8 text-center">Loading contestants...</div>;
// // //   }

// // //   if (error) {
// // //     return <div className="p-8 text-center text-red-400">Failed to load contestants</div>;
// // //   }

// // //   return (
// // //     <div>
// // //       {/* Header */}
// // //       <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
// // //         <div>
// // //           <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
// // //             MODEL <span className="font-display italic text-gold">MANAGEMENT</span>
// // //           </h1>
// // //           <p className="text-sm text-muted-foreground font-body mt-1">
// // //             Manage All Registered Contestants • {contestants.length} Total
// // //           </p>
// // //         </div>
// // //       </div>

// // //       {/* Search */}
// // //       <div className="flex flex-col md:flex-row gap-3 mb-6">
// // //         <div className="flex items-center gap-2 bg-secondary border border-border rounded-lg px-4 py-2.5 flex-1">
// // //           <Search className="w-4 h-4 text-muted-foreground" />
// // //           <input
// // //             type="text"
// // //             placeholder="Search by name, ID, or School..."
// // //             value={searchTerm}
// // //             onChange={handleSearchChange}
// // //             className="bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none w-full"
// // //           />
// // //         </div>
// // //       </div>

// // //       {/* Models Table */}
// // //       <div className="glass-card rounded-xl border border-border overflow-hidden">
// // //         {/* Table Header */}
// // //         <div className="hidden md:grid grid-cols-7 gap-4 text-[10px] font-body font-semibold tracking-[0.1em] text-muted-foreground p-4 border-b border-border bg-secondary/50">
// // //           <span className="col-span-2">MODEL CANDIDATE</span>
// // //           <span>STATUS</span>
// // //           <span>REPRESENTING</span>
// // //           <span>VOTES</span>
// // //           <span>ENGAGEMENT</span>
// // //           <span>ACTIONS</span>
// // //         </div>

// // //         {/* Table Body */}
// // //         {paginatedContestants.length === 0 ? (
// // //           <div className="p-16 text-center">
// // //             <p className="text-muted-foreground">
// // //               {searchTerm 
// // //                 ? "No contestants found matching your search." 
// // //                 : "No contestants found."}
// // //             </p>
// // //           </div>
// // //         ) : (
// // //           paginatedContestants.map((c: any) => (
// // //             <div 
// // //               key={c.id} 
// // //               className="grid grid-cols-2 md:grid-cols-7 gap-4 items-center p-4 border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors"
// // //             >
// // //               {/* Model Info */}
// // //               <div className="flex items-center gap-3 col-span-2">
// // //                 <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-border">
// // //                   <Image
// // //                     src={c.images?.[0] || '/images/contestant-placeholder.jpg'}
// // //                     alt={`${c.first_name} ${c.last_name}`}
// // //                     fill
// // //                     className="object-cover"
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm font-body font-medium text-foreground">
// // //                     {c.first_name} {c.last_name}
// // //                   </p>
// // //                   <p className="text-[10px] text-muted-foreground font-body">
// // //                     ID: MBG-{String(c.id).padStart(4, "0")}
// // //                   </p>
// // //                 </div>
// // //               </div>

// // //               {/* Status */}
// // //               <span className={`text-[10px] font-body font-semibold px-3 py-1 rounded w-fit ${
// // //                 c.is_active 
// // //                   ? "bg-green-500/20 text-green-400" 
// // //                   : "bg-red-500/20 text-red-400"
// // //               }`}>
// // //                 {c.is_active ? "ACTIVE" : "INACTIVE"}
// // //               </span>

// // //               {/* Representing */}
// // //               <span className="text-sm font-body text-foreground hidden md:block">
// // //                 {c.representing || "—"}
// // //               </span>

// // //               {/* Votes */}
// // //               <span className="text-sm font-body text-foreground hidden md:block">
// // //                 {(c.vote_count || 0).toLocaleString()}
// // //               </span>

// // //               {/* Engagement */}
// // //               <span className="text-sm font-body text-foreground hidden md:flex items-center gap-1">
// // //                 <Eye className="w-3.5 h-3.5 text-primary" /> 
// // //                 {(c.views || 0).toLocaleString()}
// // //               </span>

// // //               {/* Actions */}
// // //               <div className="flex items-center gap-2 ">
// // //                 <button className="p-2 rounded hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">
// // //                   <Edit className="w-4 h-4" />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ))
// // //         )}
// // //       </div>

// // //       {/* Pagination Controls */}
// // //       {filteredContestants.length > 0 && (
// // //         <div className="flex items-center justify-between mt-6 px-2">
// // //           <p className="text-xs text-muted-foreground font-body">
// // //             Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
// // //             {Math.min(currentPage * itemsPerPage, filteredContestants.length)} of{' '}
// // //             {filteredContestants.length} contestants
// // //           </p>

// // //           <div className="flex items-center gap-2">
// // //             <Button
// // //               variant="outline"
// // //               size="sm"
// // //               onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
// // //               disabled={currentPage === 1}
// // //             >
// // //               <ChevronLeft className="w-4 h-4" />
// // //             </Button>

// // //             <div className="px-4 py-1.5 bg-secondary rounded-lg text-sm font-medium">
// // //               Page {currentPage} of {totalPages || 1}
// // //             </div>

// // //             <Button
// // //               variant="outline"
// // //               size="sm"
// // //               onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
// // //               disabled={currentPage === totalPages || totalPages === 0}
// // //             >
// // //               <ChevronRight className="w-4 h-4" />
// // //             </Button>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }










// // 'use client';

// // import { useState } from "react";
// // import Image from 'next/image';
// // import { Search, Eye, Edit, Trash2, MoreHorizontal, ChevronLeft, ChevronRight, UserX } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// // import { userService } from '@/services/contestant.service';
// // import ConfirmDialog from '@/components/ConfirmDialog';   // ← Create this if you don't have it

// // export default function AdminModels() {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [userToDeactivate, setUserToDeactivate] = useState<any>(null);
// //   const itemsPerPage = 10;

// //   const queryClient = useQueryClient();

// //   // Fetch users
// //   const { data: contestants = [], isLoading, error } = useQuery({
// //     queryKey: ['contestants-management'],
// //     queryFn: userService.getAll,
// //   });

// //   // Filter
// //   const filteredContestants = contestants.filter((c: any) => {
// //     const fullName = `${c.first_name} ${c.last_name}`.toLowerCase();
// //     const representing = (c.representing || "").toLowerCase();
// //     const search = searchTerm.toLowerCase();
// //     return fullName.includes(search) || representing.includes(search);
// //   });

// //   const totalPages = Math.ceil(filteredContestants.length / itemsPerPage);
// //   const paginatedContestants = filteredContestants.slice(
// //     (currentPage - 1) * itemsPerPage,
// //     currentPage * itemsPerPage
// //   );

// //   // Deactivate mutation
// //   const deactivateMutation = useMutation({
// //     mutationFn: (userId: string) => userService.toggleUserStatus(userId, false),
// //     onSuccess: () => {
// //       queryClient.invalidateQueries({ queryKey: ['contestants-management'] });
// //       setUserToDeactivate(null);
// //     },
// //   });

// //   const handleDeactivate = (user: any) => {
// //     setUserToDeactivate(user);
// //   };

// //   const confirmDeactivate = () => {
// //     if (userToDeactivate) {
// //       deactivateMutation.mutate(userToDeactivate.id);
// //     }
// //   };

// //   if (isLoading) return <div className="p-8 text-center">Loading contestants...</div>;
// //   if (error) return <div className="p-8 text-center text-red-400">Failed to load contestants</div>;

// //   return (
// //     <div>
// //       {/* Header + Search same as before */}
// //       <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
// //         <div>
// //           <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
// //             MODEL <span className="font-display italic text-gold">MANAGEMENT</span>
// //           </h1>
// //           <p className="text-sm text-muted-foreground font-body mt-1">
// //             Manage All Registered Contestants • {contestants.length} Total
// //           </p>
// //         </div>
// //       </div>

// //       <div className="flex flex-col md:flex-row gap-3 mb-6">
// //         <div className="flex items-center gap-2 bg-secondary border border-border rounded-lg px-4 py-2.5 flex-1">
// //           <Search className="w-4 h-4 text-muted-foreground" />
// //           <input
// //             type="text"
// //             placeholder="Search by name, ID, or School..."
// //             value={searchTerm}
// //             onChange={(e) => {
// //               setSearchTerm(e.target.value);
// //               setCurrentPage(1);
// //             }}
// //             className="bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none w-full"
// //           />
// //         </div>
// //       </div>

// //       {/* Table */}
// //       <div className="glass-card rounded-xl border border-border overflow-hidden">
// //         <div className="hidden md:grid grid-cols-7 gap-4 text-[10px] font-body font-semibold tracking-[0.1em] text-muted-foreground p-4 border-b border-border bg-secondary/50">
// //           <span className="col-span-2">MODEL CANDIDATE</span>
// //           <span>STATUS</span>
// //           <span>REPRESENTING</span>
// //           <span>VOTES</span>
// //           <span>ENGAGEMENT</span>
// //           <span>ACTIONS</span>
// //         </div>

// //         {paginatedContestants.map((c: any) => (
// //           <div 
// //             key={c.id} 
// //             className="grid grid-cols-2 md:grid-cols-7 gap-4 items-center p-4 border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors"
// //           >
// //             <div className="flex items-center gap-3 col-span-2">
// //               <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-border">
// //                 <Image
// //                   src={c.images?.[0] || '/images/contestant-placeholder.jpg'}
// //                   alt={`${c.first_name} ${c.last_name}`}
// //                   fill
// //                   className="object-cover"
// //                 />
// //               </div>
// //               <div>
// //                 <p className="text-sm font-body font-medium text-foreground">
// //                   {c.first_name} {c.last_name}
// //                 </p>
// //                 <p className="text-[10px] text-muted-foreground">ID: MBG-{String(c.id).padStart(4, "0")}</p>
// //               </div>
// //             </div>

// //             <span className={`text-[10px] font-body font-semibold px-3 py-1 rounded w-fit ${
// //               c.is_active ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
// //             }`}>
// //               {c.is_active ? "ACTIVE" : "INACTIVE"}
// //             </span>

// //             <span className="text-sm font-body text-foreground hidden md:block">
// //               {c.representing || "—"}
// //             </span>

// //             <span className="text-sm font-body text-foreground hidden md:block">
// //               {(c.vote_count || 0).toLocaleString()}
// //             </span>

// //             <span className="text-sm font-body text-foreground hidden md:flex items-center gap-1">
// //               <Eye className="w-3.5 h-3.5 text-primary" /> {(c.views || 0).toLocaleString()}
// //             </span>

// //             <div className="flex items-center gap-2">
// //               <button 
// //                 onClick={() => handleDeactivate(c)}
// //                 className="p-2 rounded hover:bg-secondary text-red-500 hover:text-red-600 transition-colors"
// //                 title="Deactivate User"
// //               >
// //                 <UserX className="w-4 h-4" />
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Pagination (same as before) */}

// //       {/* Confirmation Dialog */}
// //       <ConfirmDialog
// //         isOpen={!!userToDeactivate}
// //         title="Deactivate User"
// //         message={`Are you sure you want to deactivate ${userToDeactivate?.first_name} ${userToDeactivate?.last_name}? They will no longer be visible or able to participate.`}
// //         confirmText="Yes, Deactivate"
// //         cancelText="Cancel"
// //         onConfirm={confirmDeactivate}
// //         onCancel={() => setUserToDeactivate(null)}
// //         isDestructive
// //       />
// //     </div>
// //   );
// // }





// 'use client';

// import { useState } from "react";
// import Image from 'next/image';
// import { Search, Eye, Edit, UserX, UserCheck, ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// import { userService } from '@/services/contestant.service';
// import ConfirmDialog from '@/components/ConfirmDialog';
// import LoadingState from "@/components/LoadingState";

// export default function AdminModels() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [userToToggle, setUserToToggle] = useState<any>(null);
//   const itemsPerPage = 10;

//   const queryClient = useQueryClient();

//   const { data: contestants = [], isLoading, error } = useQuery({
//     queryKey: ['contestants-management'],
//     queryFn: userService.getAll,
//   });

//   const filteredContestants = contestants.filter((c: any) => {
//     const fullName = `${c.first_name} ${c.last_name}`.toLowerCase();
//     const representing = (c.representing || "").toLowerCase();
//     return fullName.includes(searchTerm.toLowerCase()) || 
//            representing.includes(searchTerm.toLowerCase());
//   });

//   const totalPages = Math.ceil(filteredContestants.length / itemsPerPage);
//   const paginatedContestants = filteredContestants.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   // Toggle mutation (works for both activate and deactivate)
//   const toggleMutation = useMutation({
//     mutationFn: ({ userId, newStatus }: { userId: string; newStatus: boolean }) =>
//       userService.toggleUserStatus(userId, newStatus),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['contestants-management'] });
//       setUserToToggle(null);
//     },
//   });

//   const handleToggleStatus = (user: any) => {
//     setUserToToggle(user);
//   };

//   const confirmToggle = () => {
//     if (!userToToggle) return;

//     const newStatus = !userToToggle.is_active;
//     toggleMutation.mutate({
//       userId: userToToggle.id,
//       newStatus,
//     });
//   };

//   if (isLoading)     return <LoadingState />;
  
//   if (error) return <div className="p-8 text-center text-red-400">Failed to load contestants</div>;

//   return (
//     <div>
//       {/* Header and Search (same as before) */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
//         <div>
//           <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
//             MODEL <span className="font-display italic text-gold">MANAGEMENT</span>
//           </h1>
//           <p className="text-sm text-muted-foreground font-body mt-1">
//             Manage All Registered Contestants • {contestants.length} Total
//           </p>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row gap-3 mb-6">
//         <div className="flex items-center gap-2 bg-secondary border border-border rounded-lg px-4 py-2.5 flex-1">
//           <Search className="w-4 h-4 text-muted-foreground" />
//           <input
//             type="text"
//             placeholder="Search by name, ID, or School..."
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setCurrentPage(1);
//             }}
//             className="bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none w-full"
//           />
//         </div>
//       </div>

//       {/* Table */}
//       <div className="glass-card rounded-xl border border-border overflow-hidden">
//         <div className="hidden md:grid grid-cols-7 gap-4 text-[10px] font-body font-semibold tracking-[0.1em] text-muted-foreground p-4 border-b border-border bg-secondary/50">
//           <span className="col-span-2">MODEL CANDIDATE</span>
//           <span>STATUS</span>
//           <span>REPRESENTING</span>
//           <span>VOTES</span>
//           <span>ENGAGEMENT</span>
//           <span>ACTIONS</span>
//         </div>

//         {paginatedContestants.map((c: any) => (
//           <div 
//             key={c.id} 
            
//             className="grid grid-cols-2 md:grid-cols-7 gap-4 items-center p-4 border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors"
//           >
//             <div className="flex items-center gap-3 col-span-2">
//               <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-border">
//                 <Image
//                   src={c.images?.[0] || '/images/contestant-placeholder.jpg'}
//                   alt={`${c.first_name} ${c.last_name}`}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div>
//                 <p className="text-sm font-body font-medium text-foreground">
//                   {c.first_name} {c.last_name}
//                 </p>
//                 <p className="text-[10px] text-muted-foreground">ID: MBG-{String(c.id).padStart(4, "0")}</p>
//               </div>
//             </div>

//             <span className={`text-[10px] font-body font-semibold px-3 py-1 rounded w-fit ${
//               c.is_active ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
//             }`}>
//               {c.is_active ? "ACTIVE" : "INACTIVE"}
//             </span>

//             <span className="text-sm font-body text-foreground hidden md:block">
//               {c.representing || "—"}
//             </span>

//             <span className="text-sm font-body text-foreground hidden md:block">
//               {(c.vote_count || 0).toLocaleString()}
//             </span>

//             <span className="text-sm font-body text-foreground hidden md:flex items-center gap-1">
//               <Eye className="w-3.5 h-3.5 text-primary" /> {(c.views || 0).toLocaleString()}
//             </span>

//             <div className="flex items-center gap-2">
//               <button 
//                 onClick={() => handleToggleStatus(c)}
//                 className={`p-2 rounded hover:bg-secondary transition-colors ${
//                   c.is_active ? "text-red-500 hover:text-red-600" : "text-green-500 hover:text-green-600"
//                 }`}
//                 title={c.is_active ? "Deactivate User" : "Activate User"}
//               >
//                 {c.is_active ? <UserX className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination (keep your existing pagination code) */}

//       {/* Confirmation Dialog */}
//       <ConfirmDialog
//         isOpen={!!userToToggle}
//         title={userToToggle?.is_active ? "Deactivate User" : "Activate User"}
//         message={`Are you sure you want to ${userToToggle?.is_active ? "deactivate" : "activate"} ${userToToggle?.first_name} ${userToToggle?.last_name}?`}
//         confirmText={userToToggle?.is_active ? "Yes, Deactivate" : "Yes, Activate"}
//         isDestructive={userToToggle?.is_active || false}
//         onConfirm={confirmToggle}
//         onCancel={() => setUserToToggle(null)}
//       />
//     </div>
//   );
// }


'use client';

import { useState } from "react";
import Image from 'next/image';
import { Search, Eye, UserX, UserCheck } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from "next/navigation";   // ← Correct import for App Router
import { userService } from '@/services/contestant.service';
import ConfirmDialog from '@/components/ConfirmDialog';
import LoadingState from "@/components/LoadingState";

export default function AdminModels() {
  const router = useRouter();   // ← Now using correct hook

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [userToToggle, setUserToToggle] = useState<any>(null);
  const itemsPerPage = 10;

  const queryClient = useQueryClient();

  const { data: contestants = [], isLoading, error } = useQuery({
    queryKey: ['contestants-management'],
    queryFn: userService.getAll,
  });

  const filteredContestants = contestants.filter((c: any) => {
    const fullName = `${c.first_name} ${c.last_name}`.toLowerCase();
    const representing = (c.representing || "").toLowerCase();
    return fullName.includes(searchTerm.toLowerCase()) || 
           representing.includes(searchTerm.toLowerCase());
  });

  const totalPages = Math.ceil(filteredContestants.length / itemsPerPage);
  const paginatedContestants = filteredContestants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleMutation = useMutation({
    mutationFn: ({ userId, newStatus }: { userId: string; newStatus: boolean }) =>
      userService.toggleUserStatus(userId, newStatus),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contestants-management'] });
      setUserToToggle(null);
    },
  });

  const handleToggleStatus = (user: any) => {
    setUserToToggle(user);
  };

  const confirmToggle = () => {
    if (!userToToggle) return;

    const newStatus = !userToToggle.is_active;
    toggleMutation.mutate({
      userId: userToToggle.id,
      newStatus,
    });
  };

  // Navigate to detail page with full data
  const goToDetail = (contestant: any) => {
    router.push(`/admin/models/${contestant.id}?data=${encodeURIComponent(JSON.stringify(contestant))}`);
  };

  if (isLoading) return <LoadingState />;
  if (error) return <div className="p-8 text-center text-red-400">Failed to load contestants</div>;

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            MODEL <span className="font-display italic text-gold">MANAGEMENT</span>
          </h1>
          <p className="text-sm text-muted-foreground font-body mt-1">
            Manage All Registered Contestants • {contestants.length} Total
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="flex items-center gap-2 bg-secondary border border-border rounded-lg px-4 py-2.5 flex-1">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name, ID, or School..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none w-full"
          />
        </div>
      </div>

      {/* Table */}
      <div className="glass-card rounded-xl border border-border overflow-hidden">
        <div className="hidden md:grid grid-cols-7 gap-4 text-[10px] font-body font-semibold tracking-[0.1em] text-muted-foreground p-4 border-b border-border bg-secondary/50">
          <span className="col-span-2">MODEL CANDIDATE</span>
          <span>STATUS</span>
          <span>REPRESENTING</span>
          <span>VOTES</span>
          <span>ENGAGEMENT</span>
          <span>ACTIONS</span>
        </div>

        {paginatedContestants.map((c: any) => (
          <div 
            key={c.id} 
            onClick={() => goToDetail(c)}   // ← Click anywhere on row to go to detail
            className="grid grid-cols-2 md:grid-cols-7 gap-4 items-center p-4 border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3 col-span-2">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-border">
                <Image
                  src={c.images?.[0] || '/images/contestant-placeholder.jpg'}
                  alt={`${c.first_name} ${c.last_name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-body font-medium text-foreground capitalize">
                  {c.first_name} {c.last_name} {c.other_names}
                </p>
                <p className="text-[10px] text-muted-foreground">ID: MBG-{String(c.id).padStart(4, "0")}</p>
              </div>
            </div>

            <span className={`text-[10px] font-body font-semibold px-3 py-1 rounded w-fit ${
              c.is_active ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
            }`}>
              {c.is_active ? "ACTIVE" : "INACTIVE"}
            </span>

            <span className="text-sm font-body text-foreground hidden md:block">
              {c.representing || "—"}
            </span>

            <span className="text-sm font-body text-foreground hidden md:block">
              {(c.vote_count || 0).toLocaleString()}
            </span>

            <span className="text-sm font-body text-foreground hidden md:flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-primary" /> {(c.views || 0).toLocaleString()}
            </span>

            <div className="flex items-center gap-2 ml-auto md:ml-0">
              <button 
                onClick={(e) => {
                  e.stopPropagation(); // Prevent row click when toggling
                  handleToggleStatus(c);
                }}
                className={`p-2 rounded hover:bg-secondary transition-colors ${
                  c.is_active ? "text-red-500 hover:text-red-600" : "text-green-500 hover:text-green-600"
                }`}
                title={c.is_active ? "Deactivate User" : "Activate User"}
              >
                {c.is_active ? <UserX className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination - keep your existing code here */}

      {/* Confirmation Dialog */}
      <ConfirmDialog
        isOpen={!!userToToggle}
        title={userToToggle?.is_active ? "Deactivate User" : "Activate User"}
        message={`Are you sure you want to ${userToToggle?.is_active ? "deactivate" : "activate"} ${userToToggle?.first_name} ${userToToggle?.last_name}?`}
        confirmText={userToToggle?.is_active ? "Yes, Deactivate" : "Yes, Activate"}
        isDestructive={userToToggle?.is_active || false}
        onConfirm={confirmToggle}
        onCancel={() => setUserToToggle(null)}
      />
    </div>
  );
}