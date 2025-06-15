"use client";

import { Plus, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  title: string;
  onMenuClick: () => void;
}

export function Header({ title, onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </Button>

          {/* Page title */}
          <div className="flex-1 lg:ml-0 ml-4">
            <h1 className="text-lg font-semibold text-gray-900 capitalize">
              {title}
            </h1>
          </div>

          {/* Header actions */}
          <div className="flex items-center space-x-3">
            <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
              <Plus className="w-4 h-4 mr-2" />
              Create Form
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
