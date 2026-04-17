// 'use client';

// import { useState, useMemo } from "react";
// import Image from 'next/image';
// import { Search, Calendar, DollarSign, Users, Eye, ChevronLeft, ChevronRight } from "lucide-react";
// import { useQuery } from '@tanstack/react-query';
// import { Button } from "@/components/ui/button";

// import { paymentService } from '@/services/payments.service';
// import NoData from '@/components/NoData';

// export default function AdminVotesPage() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 15;

//   // Fetch all payments with contestant details
//   const { data: payments = [], isLoading, error } = useQuery({
//     queryKey: ['all-payments'],
//     queryFn: paymentService.getAll,
//   });

//   // Filter payments
//   const filteredPayments = useMemo(() => {
//     if (!searchTerm) return payments;

//     const term = searchTerm.toLowerCase();
//     return payments.filter((p: any) => {
//       const contestantName = `${p.contestants?.first_name || ''} ${p.contestants?.last_name || ''}`.toLowerCase();
//       const payerEmail = (p.payer_email || '').toLowerCase();
//       const payerName = (p.payer_full_name || '').toLowerCase();

//       return (
//         contestantName.includes(term) ||
//         payerEmail.includes(term) ||
//         payerName.includes(term) ||
//         (p.transaction_id || '').toLowerCase().includes(term)
//       );
//     });
//   }, [payments, searchTerm]);

//   // Pagination
//   const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);
//   const paginatedPayments = useMemo(() => {
//     const start = (currentPage - 1) * itemsPerPage;
//     return filteredPayments.slice(start, start + itemsPerPage);
//   }, [filteredPayments, currentPage]);

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   if (isLoading) {
//     return <div className="p-8 text-center text-muted-foreground">Loading votes...</div>;
//   }

//   if (error) {
//     return <div className="p-8 text-center text-red-400">Failed to load votes data</div>;
//   }


//   console.log(paginatedPayments);
  
//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between">
//         <div>
//           <h1 className="font-display text-3xl font-bold text-foreground">All Votes</h1>
//           <p className="text-muted-foreground font-body mt-1">
//             {payments.length} total vote transactions
//           </p>
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="flex items-center gap-3 bg-secondary border border-border rounded-xl px-5 py-3">
//         <Search className="w-5 h-5 text-muted-foreground" />
//         <input
//           type="text"
//           placeholder="Search by contestant name, payer email, or transaction ID..."
//           value={searchTerm}
//           onChange={handleSearch}
//           className="bg-transparent flex-1 outline-none text-sm placeholder:text-muted-foreground"
//         />
//       </div>

//       {/* Table */}
//       <div className="glass-card rounded-2xl border border-border overflow-hidden">
//         <div className="hidden md:grid grid-cols-12 gap-4 text-xs font-semibold tracking-wider text-muted-foreground p-5 border-b border-border bg-secondary/50">
//           <div className="col-span-4">CONTESTANT</div>
//           <div className="col-span-3">PAYER</div>
//           <div className="col-span-2">AMOUNT & VOTES</div>
//           <div className="col-span-2">DATE</div>
//           <div className="col-span-1 text-right">ACTIONS</div>
//         </div>

//         {paginatedPayments.length === 0 ? (
//           <NoData 
//             title="No Votes Found"
//             description={searchTerm ? "No matching votes found for your search." : "No votes have been cast yet."}
//           />
//         ) : (
//           paginatedPayments.map((payment: any) => (
//             <div 
//               key={payment.id}
//               className="grid grid-cols-2 md:grid-cols-12 gap-4 items-center p-5 border-b border-border/50 hover:bg-secondary/30 transition-colors"
//             >
//               {/* Contestant */}
//               <div className="col-span-2 md:col-span-4 flex items-center gap-3">
//                 <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-border">
//                   <Image
//                     src={payment.contestants?.images?.[0] || '/images/contestant-placeholder.jpg'}
//                     alt={payment.contestants?.first_name || ''}
//                     fill
//                     loading="lazy"
//                     className="object-cover"
//                   />
//                 </div>
//                 <div>
//                   <p className="font-medium text-foreground">
//                     {payment.contestants?.first_name} {payment.contestants?.last_name}
//                   </p>
//                   <p className="text-xs text-muted-foreground">
//                     {payment.contestants?.representing || '—'}
//                   </p>
//                 </div>
//               </div>

//               {/* Payer Info */}
//               <div className="col-span-2 md:col-span-3">
//                 <p className="text-sm font-medium">{payment.payer_full_name || 'Anonymous'}</p>
//                 <p className="text-xs text-muted-foreground truncate">{payment.payer_email}</p>
//               </div>

//               {/* Amount & Votes */}
//               <div className="col-span-2 md:col-span-2">
//                 <p className="font-semibold text-foreground">₦{Number(payment.amount).toLocaleString()}</p>
//                 <p className="text-xs text-green-400 font-medium">
//                   {payment.votes_purchased} votes
//                 </p>
//               </div>

//               {/* Date */}
//               <div className="col-span-2 md:col-span-2 text-sm text-muted-foreground">
//                 {new Date(payment.created_at).toLocaleDateString('en-GB', {
//                   day: 'numeric',
//                   month: 'short',
//                   year: 'numeric'
//                 })}
//               </div>

//               {/* Actions */}
//               <div className="col-span-2 md:col-span-1 flex justify-end md:justify-center">
//                 <button className="p-2 hover:bg-secondary rounded-lg text-muted-foreground hover:text-foreground">
//                   <Eye className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Pagination */}
//       {filteredPayments.length > 0 && (
//         <div className="flex items-center justify-between mt-4">
//           <p className="text-sm text-muted-foreground">
//             Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
//             {Math.min(currentPage * itemsPerPage, filteredPayments.length)} of{' '}
//             {filteredPayments.length} votes
//           </p>

//           <div className="flex gap-2">
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
//               disabled={currentPage === 1}
//             >
//               <ChevronLeft className="w-4 h-4" />
//             </Button>

//             <div className="px-4 py-2 bg-secondary rounded-lg text-sm">
//               Page {currentPage} of {totalPages}
//             </div>

//             <Button
//               variant="outline"
//               size="sm"
//               onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
//               disabled={currentPage === totalPages}
//             >
//               <ChevronRight className="w-4 h-4" />
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



'use client';

import { useState, useMemo } from "react";
import Image from 'next/image';
import { Search, Eye, Calendar, X, User } from "lucide-react";
import { useQuery } from '@tanstack/react-query';

import { paymentService } from '@/services/payments.service';
import NoData from '@/components/NoData';
import LoadingState from "@/components/LoadingState";

export default function AdminVotesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data: payments = [], isLoading, error } = useQuery({
    queryKey: ['all-payments'],
    queryFn: paymentService.getAll,
  });

  

  const filteredPayments = useMemo(() => {
    if (!searchTerm) return payments;

    const term = searchTerm.toLowerCase();
    return payments.filter((p: any) => {
      const contestantName = `${p.contestants?.first_name || ''} ${p.contestants?.last_name || ''} ${p.contestants?.other_names || ''}`.toLowerCase();
      const payerName = (p.payer_full_name || p.payer_email || '').toLowerCase();
      return (
        contestantName.includes(term) ||
        payerName.includes(term) ||
        (p.transaction_id || '').toLowerCase().includes(term)
      );
    });
  }, [payments, searchTerm]);

  const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);
  const paginatedPayments = filteredPayments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  

  const getInitials = (name: string) => {
    if (!name) return "??";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  if (isLoading)     return <LoadingState />;
  
  if (error) return <div className="p-8 text-center text-red-400">Failed to load votes</div>;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
                    <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            ALL<span className="font-display italic text-gold">VOTES</span>
          </h1>
          {/* <h1 className="font-display text-3xl font-bold text-foreground">All Votes</h1> */}
          <p className="text-sm text-muted-foreground font-body mt-1">
            {payments.length} total vote transactions
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 bg-secondary border border-border rounded-xl px-5 py-3">
        <Search className="w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search by voter name, contestant, or transaction ID..."
          value={searchTerm}
          onChange={handleSearch}
          className="bg-transparent flex-1 outline-none text-sm placeholder:text-muted-foreground"
        />
      </div>

      {/* Votes Table */}
      <div className="glass-card rounded-2xl border border-border overflow-hidden">
        <div className="hidden md:grid grid-cols-12 gap-4 text-xs font-semibold tracking-wider text-muted-foreground p-5 border-b border-border bg-secondary/50">
          <div className="col-span-5">VOTER</div>
          <div className="col-span-4">VOTED FOR</div>
          <div className="col-span-2">AMOUNT & VOTES</div>
          <div className="col-span-1 ">DATE</div>
        </div>

        {paginatedPayments.length === 0 ? (
          <NoData 
            title="No Votes Found"
            description={searchTerm ? "No matching votes found." : "No votes have been cast yet."}
          />
        ) : (
          paginatedPayments.map((payment: any) => (
            <div
              key={payment.id}
              className="grid grid-cols-2 md:grid-cols-12 gap-4 items-center p-5 border-b border-border/50 hover:bg-secondary/50 transition-all group"
            >
              {/* Voter */}
              <div className="col-span-2 md:col-span-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium border border-primary/20">
                  {getInitials(payment.payer_full_name || payment.payer_email)}
                </div>
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {payment.payer_full_name || "Anonymous Voter"}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {payment.payer_email}
                  </p>
                    <p className="text-xs text-muted-foreground truncate mt-1">
                    TRN ID: {payment.transaction_id}
                  </p>
                </div>
              </div>

              {/* Voted For */}
              <div className="col-span-2 md:col-span-4 flex items-center gap-3">
                {/* <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-border">
                  <Image
                    src={payment.contestants?.images?.[0] || '/images/contestant-placeholder.jpg'}
                    alt={payment.contestants?.first_name || ''}
                    fill
                    className="object-cover"
                  />
                </div> */}
                <div>
                  <p className="text-sm font-medium">
                    {payment.contestants?.first_name} {payment.contestants?.last_name} {payment.contestants?.other_names}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {payment.contestants?.representing}
                  </p>
                </div>
              </div>

              {/* Amount & Votes */}
              <div className="col-span-2 md:col-span-2">
                <p className="font-semibold text-foreground">₦{Number(payment.amount).toLocaleString()}</p>
                <p className="text-xs text-green-500 font-medium">
                  {payment.votes_purchased} {payment.votes_purchased > 1 ? "votes": "vote"} 
                </p>
              </div>

              {/* Date */}
              <div className="col-span-2 md:col-span-1 text-sm text-muted-foreground">
                {new Date(payment.created_at).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short'
                })}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {filteredPayments.length > 0 && (
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-muted-foreground">
            Showing {(currentPage - 1) * itemsPerPage + 1} – {Math.min(currentPage * itemsPerPage, filteredPayments.length)} of {filteredPayments.length}
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg hover:bg-secondary disabled:opacity-50"
            >
              ←
            </button>
            <div className="px-4 py-2 bg-secondary rounded-lg text-sm">
              Page {currentPage} of {totalPages}
            </div>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg hover:bg-secondary disabled:opacity-50"
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}