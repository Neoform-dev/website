"use client";

import { useState } from "react";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useUser, useStackApp } from "@stackframe/stack";

export function UserButton() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useUser();
  const stackApp = useStackApp();

  if (!user) {
    return (
      <div className="flex items-center space-x-2">
        <Link href="/handler/sign-in">
          <Button variant="ghost">Sign In</Button>
        </Link>
        <Link href="/handler/sign-up">
          <Button>Sign Up</Button>
        </Link>
      </div>
    );
  }

  const handleSignOut = async () => {
    await user.signOut();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 h-10 px-3 hover:bg-gray-100 transition-colors"
      >
        {user.profileImageUrl ? (
          <Image
            src={user.profileImageUrl}
            alt={user.displayName || "User"}
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-sm font-medium text-white">
              {user.displayName?.charAt(0) || user.primaryEmail?.charAt(0) || "U"}
            </span>
          </div>
        )}
        <div className="hidden md:block text-left">
          <p className="text-sm font-medium text-gray-900">
            {user.displayName || "User"}
          </p>
          <p className="text-xs text-gray-500 truncate max-w-32">
            {user.primaryEmail}
          </p>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            <div className="py-2">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">
                  {user.displayName || "User"}
                </p>
                <p className="text-xs text-gray-500">
                  {user.primaryEmail}
                </p>
              </div>
              
              <Link
                href="/profile"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <User className="w-4 h-4 mr-3" />
                Profile
              </Link>
              
              <Link
                href="/settings"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Settings className="w-4 h-4 mr-3" />
                Settings
              </Link>
              
              <div className="border-t border-gray-100 mt-2 pt-2">
                <button
                  onClick={handleSignOut}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-3" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
