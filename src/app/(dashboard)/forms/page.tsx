import type { Metadata } from "next";
import { FileText, Plus, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Forms | NeoForm",
  description: "Manage all your forms in one place.",
};

export default function FormsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl"></div>
        <div className="relative p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-2">
                Forms Management
              </h1>
              <p className="text-xl text-gray-600">
                Create, organize, and track all your forms in one place
              </p>
            </div>
            <div className="hidden lg:flex">
              <Link href="/demo">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 rounded-2xl px-6 py-3">
                  <Plus className="w-5 h-5 mr-2" />
                  Create New Form
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100/50 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Form Builder</h3>
            <p className="text-blue-700/80 text-sm mb-4">
              Drag-and-drop form builder with advanced field types
            </p>
            <div className="flex items-center justify-center text-blue-600 text-sm">
              <Sparkles className="w-4 h-4 mr-1" />
              Coming Soon
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100/50 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-purple-900 mb-2">Form Library</h3>
            <p className="text-purple-700/80 text-sm mb-4">
              Organize and manage all your forms with smart filters
            </p>
            <div className="flex items-center justify-center text-purple-600 text-sm">
              <Sparkles className="w-4 h-4 mr-1" />
              Coming Soon
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100/50 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/25">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-green-900 mb-2">Collaboration</h3>
            <p className="text-green-700/80 text-sm mb-4">
              Share and collaborate on forms with your team
            </p>
            <div className="flex items-center justify-center text-green-600 text-sm">
              <Sparkles className="w-4 h-4 mr-1" />
              Coming Soon
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardContent className="p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Advanced Form Management
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our powerful form management system is currently in development. Soon you'll be able to create, edit, and organize all your forms with an intuitive interface.
            </p>
            <div className="space-y-4">
              <Link href="/demo" className="block">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg rounded-2xl py-3">
                  <Plus className="w-5 h-5 mr-2" />
                  Try Demo Form
                </Button>
              </Link>
              <Link href="/templates" className="block">
                <Button variant="outline" className="w-full rounded-2xl py-3">
                  Browse Templates
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
