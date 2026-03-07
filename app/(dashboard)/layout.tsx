import { AppSidebar } from "@/components/dashboard/app-sidebar";
import DashTopHeader from "@/components/dashboard/dash-top-header";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className=" bg-[#e2e8f048] h-screen">
      {/* bg-[#E2E8F0] */}
      <div className="flex w-full h-screen">
        <AppSidebar />
        <div className="flex-1">
          <DashTopHeader />
          <div className="min-h-0  p-8 overflow-auto bg-[#e2e8f048]">
            {children}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
