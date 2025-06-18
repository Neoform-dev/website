"use client";

import { Plus, Menu, Search, Bell, Settings } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

interface HeaderProps {
  title: string;
  onMenuClick: () => void;
}

export function Header({ title: _title, onMenuClick }: HeaderProps) {
  return (
    <header className="flex-shrink-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 lg:px-6">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuClick}
          className="mr-4 md:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Search and Actions */}
        <div className="flex flex-1 items-center justify-between space-x-4">
          {/* Search */}
          <div className="flex-1 max-w-sm">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="flex h-9 w-full rounded-md border border-input bg-background px-8 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Link href="/create">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Form
              </Button>
            </Link>
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  );
}
