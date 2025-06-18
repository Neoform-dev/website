"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar-clean";
import { Header } from "./header";

interface DashboardLayoutWrapperProps {
  children: React.ReactNode;
}

export function DashboardLayoutWrapper({ children }: DashboardLayoutWrapperProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Extract page title from pathname
  const getPageTitle = (path: string) => {
    if (path === "/dashboard" || path === "/") return "Dashboard";
    const segments = path.split("/").filter(Boolean);
    const title = segments[segments.length - 1] || "Dashboard";
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  const pageTitle = getPageTitle(pathname);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="fixed inset-0 bg-black/50" 
            onClick={() => setSidebarOpen(false)} 
          />
          <div className="fixed left-0 top-0 h-full w-64 bg-background border-r shadow-lg">
            <div className="flex h-14 items-center border-b px-4">
              <div className="flex items-center gap-2 font-semibold">
                <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">N</span>
                </div>
                <span>NeoForm</span>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              <Sidebar />
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 lg:w-72 md:flex-col">
        <div className="flex flex-col h-full border-r bg-muted/40">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <div className="flex items-center gap-2 font-semibold">
              <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">N</span>
              </div>
              <span>NeoForm</span>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <Sidebar />
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header title={pageTitle} onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
