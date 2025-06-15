"use client";

import { Plus, Menu, Search, Bell, Settings } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  title: string;
  onMenuClick: () => void;
}

export function Header({ title, onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100/80 sticky top-0 z-30">
      <div className="px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left side */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100"
            >
              <Menu className="w-5 h-5" />
            </Button>

            {/* Page title */}
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                {title}
              </h1>
              <p className="text-sm text-gray-500 mt-0.5">
                {title === "Dashboard" && "Welcome back, John! Here's what's happening."}
                {title === "Forms" && "Manage and organize your forms"}
                {title === "Templates" && "Discover beautiful form templates"}
                {title === "Analytics" && "Track your form performance"}
                {title === "Settings" && "Customize your workspace"}
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-80 pl-10 pr-4 py-2.5 bg-gray-50/80 border border-gray-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all duration-200 text-sm"
                />
              </div>
            </div>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="sm"
              className="relative p-2.5 rounded-xl hover:bg-gray-100 text-gray-600"
            >
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full border border-white"></div>
            </Button>

            {/* Settings */}
            <Button
              variant="ghost"
              size="sm"
              className="p-2.5 rounded-xl hover:bg-gray-100 text-gray-600"
            >
              <Settings className="w-5 h-5" />
            </Button>

            {/* Create Form CTA */}
            <Link href="/create">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-purple-500/25 transition-all duration-200 rounded-2xl px-6 py-2.5">
                <Plus className="w-4 h-4 mr-2" />
                Create Form
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
