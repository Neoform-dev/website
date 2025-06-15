"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  MoreHorizontal, 
  ExternalLink, 
  Copy, 
  BarChart3, 
  Users, 
  Eye,
  TrendingUp,
  Activity,
  Zap,
  Calendar,
  Star,
  ArrowUpRight,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Form {
  id: string;
  title: string;
  description: string;
  status: "active" | "draft" | "paused";
  responses: number;
  views: number;
  createdAt: string;
  thumbnail: string;
  completionRate: number;
}

export function DashboardContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [forms] = useState<Form[]>([
    {
      id: "1",
      title: "Customer Feedback Survey",
      description: "Collect feedback from our customers about their experience",
      status: "active",
      responses: 128,
      views: 456,
      createdAt: "2 days ago",
      thumbnail: "bg-gradient-to-br from-blue-400 to-blue-600",
      completionRate: 87
    },
    {
      id: "2", 
      title: "Lead Generation Form",
      description: "Capture leads from our marketing campaigns",
      status: "active",
      responses: 89,
      views: 234,
      createdAt: "1 week ago",
      thumbnail: "bg-gradient-to-br from-purple-400 to-purple-600",
      completionRate: 92
    },
    {
      id: "3",
      title: "Event Registration",
      description: "Registration form for our upcoming webinar",
      status: "draft",
      responses: 0,
      views: 12,
      createdAt: "3 days ago",
      thumbnail: "bg-gradient-to-br from-green-400 to-green-600",
      completionRate: 0
    }
  ]);

  const filteredForms = forms.filter(form =>
    form.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    form.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalResponses = forms.reduce((acc, form) => acc + form.responses, 0);
  const totalViews = forms.reduce((acc, form) => acc + form.views, 0);
  const avgCompletionRate = forms.length > 0 ? forms.reduce((acc, form) => acc + form.completionRate, 0) / forms.length : 0;

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl"></div>
        <div className="relative p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-2">
                Good morning, John! ☀️
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                Your forms are performing great today
              </p>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">Today's responses</p>
                <p className="text-2xl font-bold text-gray-900">+24</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg shadow-blue-500/10 bg-gradient-to-br from-blue-50 to-blue-100/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700/80 mb-1">Total Forms</p>
                <p className="text-3xl font-bold text-blue-900">{forms.length}</p>
                <p className="text-sm text-blue-600 mt-1 flex items-center">
                  <ArrowUpRight className="w-3 h-3 mr-1" />
                  +2 this week
                </p>
              </div>
              <div className="p-3 bg-blue-500 rounded-2xl shadow-lg shadow-blue-500/25">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg shadow-purple-500/10 bg-gradient-to-br from-purple-50 to-purple-100/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-700/80 mb-1">Total Responses</p>
                <p className="text-3xl font-bold text-purple-900">{totalResponses}</p>
                <p className="text-sm text-purple-600 mt-1 flex items-center">
                  <ArrowUpRight className="w-3 h-3 mr-1" />
                  +18% this month
                </p>
              </div>
              <div className="p-3 bg-purple-500 rounded-2xl shadow-lg shadow-purple-500/25">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg shadow-green-500/10 bg-gradient-to-br from-green-50 to-green-100/50 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700/80 mb-1">Total Views</p>
                <p className="text-3xl font-bold text-green-900">{totalViews.toLocaleString()}</p>
                <p className="text-sm text-green-600 mt-1 flex items-center">
                  <ArrowUpRight className="w-3 h-3 mr-1" />
                  +12% this week
                </p>
              </div>
              <div className="p-3 bg-green-500 rounded-2xl shadow-lg shadow-green-500/25">
                <Eye className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg shadow-orange-500/10 bg-gradient-to-br from-orange-50 to-orange-100/50 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-700/80 mb-1">Completion Rate</p>
                <p className="text-3xl font-bold text-orange-900">{Math.round(avgCompletionRate)}%</p>
                <p className="text-sm text-orange-600 mt-1 flex items-center">
                  <ArrowUpRight className="w-3 h-3 mr-1" />
                  +5% this month
                </p>
              </div>
              <div className="p-3 bg-orange-500 rounded-2xl shadow-lg shadow-orange-500/25">
                <Activity className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Link href="/demo" className="group">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center justify-between text-white">
                <div>
                  <p className="text-lg font-semibold mb-2">Create New Form</p>
                  <p className="text-blue-100">Start building your next form</p>
                </div>
                <Plus className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/templates" className="group">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-pink-600 hover:shadow-xl hover:shadow-pink-500/25 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center justify-between text-white">
                <div>
                  <p className="text-lg font-semibold mb-2">Browse Templates</p>
                  <p className="text-purple-100">Discover beautiful designs</p>
                </div>
                <Star className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/analytics" className="group">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-teal-600 hover:shadow-xl hover:shadow-teal-500/25 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center justify-between text-white">
                <div>
                  <p className="text-lg font-semibold mb-2">View Analytics</p>
                  <p className="text-green-100">Track your performance</p>
                </div>
                <Zap className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Recent Forms Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Recent Forms</h2>
            <p className="text-gray-600 mt-1">Your latest form activity</p>
          </div>
          <Link href="/forms">
            <Button variant="outline" className="rounded-2xl border-gray-200 hover:bg-gray-50">
              View All Forms
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search forms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50/80 border border-gray-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all duration-200"
          />
        </div>

        {/* Forms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredForms.slice(0, 6).map((form) => (
            <Card key={form.id} className="group border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <div className={`h-32 ${form.thumbnail} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant={form.status === "active" ? "default" : form.status === "draft" ? "secondary" : "outline"}
                      className={`text-xs font-medium ${
                        form.status === "active" ? "bg-green-500 hover:bg-green-600" : ""
                      }`}
                    >
                      {form.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 rounded-xl">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{form.completionRate}% completion</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {form.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {form.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4 text-gray-500">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{form.responses}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        <span>{form.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{form.createdAt}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <Link href="/demo" className="flex-1">
                      <Button size="sm" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm" className="rounded-xl">
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-xl">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
