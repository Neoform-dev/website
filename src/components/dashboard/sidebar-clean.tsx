"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  FileText, 
  BarChart3, 
  Settings, 
  HelpCircle,
  User,
  Layout
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Forms",
    href: "/forms", 
    icon: FileText,
  },
  {
    title: "Templates",
    href: "/templates",
    icon: Layout,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Help",
    href: "/help",
    icon: HelpCircle,
  },
];

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn("flex flex-col h-full", className)}>
      <div className="flex-1 px-3 py-4 overflow-y-auto sidebar-scroll">
        <nav className="flex flex-col space-y-1">
          {sidebarNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start text-left font-normal h-10",
                    isActive && "bg-secondary text-secondary-foreground"
                  )}
                >
                  <Icon className="mr-3 h-4 w-4 flex-shrink-0" />
                  {item.title}
                </Button>
              </Link>
            );
          })}
        </nav>
      </div>
      
      {/* Bottom section */}
      <div className="p-3 border-t flex-shrink-0">
        <div className="text-xs text-muted-foreground text-center">
          © 2025 NeoForm
        </div>
      </div>
    </div>
  );
}
