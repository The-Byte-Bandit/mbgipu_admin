// app/admin/layout.tsx
import AdminSidebar from "@/components/AdminSidebar";
import AdminNav from "@/components/AdminNav";

const AdminLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-background">
    <AdminNav />
    <div className="flex flex-1">
      <AdminSidebar />
      <main className="flex-1 p-4 md:p-8 overflow-auto">{children}</main>
    </div>
    <div className="border-t border-border py-4 px-4 flex flex-col md:flex-row items-center justify-between">
      <p className="text-xs text-muted-foreground font-body">© 2026 MBGIPU The Regal Editorial. All rights reserved.</p>
      {/* <div className="flex items-center gap-4 mt-2 md:mt-0">
        <span className="text-xs text-muted-foreground font-body hover:text-foreground cursor-pointer">Privacy Policy</span>
        <span className="text-xs text-muted-foreground font-body hover:text-foreground cursor-pointer">Terms of Excellence</span>
        <span className="text-xs text-muted-foreground font-body hover:text-foreground cursor-pointer">Contact Registry</span>
        <span className="text-xs text-muted-foreground font-body hover:text-foreground cursor-pointer">Press Kit</span>
      </div> */}
    </div>
  </div>
);

export default function AdminPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;
}
