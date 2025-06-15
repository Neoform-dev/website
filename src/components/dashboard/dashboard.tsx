"use client";

import { useState } from "react";
import { 
  Plus, 
  Search, 
  MoreHorizontal, 
  ExternalLink, 
  Copy, 
  Settings, 
  BarChart3, 
  Users, 
  Eye,
  Home,
  FileText,
  Layout,
  HelpCircle,
  User,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Templates } from "./templates";

interface Form {
  id: string;
  title: string;
  description: string;
  status: "active" | "draft" | "paused";
  responses: number;
  views: number;
  createdAt: string;
  thumbnail: string;
}

interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  active?: boolean;
}

export function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState("dashboard");
  const [forms] = useState<Form[]>([
    {
      id: "1",
      title: "Customer Feedback Survey",
      description: "Collect feedback from our customers about their experience",
      status: "active",
      responses: 128,
      views: 456,
      createdAt: "2 days ago",
      thumbnail: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      id: "2", 
      title: "Lead Generation Form",
      description: "Capture leads from our marketing campaigns",
      status: "active",
      responses: 89,
      views: 234,
      createdAt: "1 week ago",
      thumbnail: "bg-gradient-to-br from-purple-400 to-purple-600"
    },
    {
      id: "3",
      title: "Event Registration",
      description: "Registration form for our upcoming webinar",
      status: "draft",
      responses: 0,
      views: 12,
      createdAt: "3 days ago",
      thumbnail: "bg-gradient-to-br from-green-400 to-green-600"
    }
  ]);

  const sidebarItems: SidebarItem[] = [
    { icon: Home, label: "Dashboard", href: "/dashboard", active: activeView === "dashboard" },
    { icon: FileText, label: "Forms", href: "/forms", active: activeView === "forms" },
    { icon: BarChart3, label: "Analytics", href: "/analytics", active: activeView === "analytics" },
    { icon: Layout, label: "Templates", href: "/templates", active: activeView === "templates" },
    { icon: Settings, label: "Settings", href: "/settings", active: activeView === "settings" },
    { icon: HelpCircle, label: "Help", href: "/help", active: activeView === "help" },
  ];

  const filteredForms = forms.filter(form =>
    form.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    form.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProfileClick = () => {
    setActiveView("profile");
  };

  const handleSettingsClick = () => {
    setActiveView("settings");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <span className="text-sm font-bold text-white">N</span>
              </div>
              <span className="text-xl font-bold text-gray-900">NeoForm</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.href}
                  onClick={() => {
                    setActiveView(item.label.toLowerCase());
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    item.active
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <span className="text-sm font-medium text-white">JD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
                <p className="text-xs text-gray-500 truncate">john@example.com</p>
              </div>
            </div>
            <div className="space-y-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleProfileClick}
                className="w-full justify-start text-gray-600 hover:text-gray-900"
              >
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSettingsClick}
                className="w-full justify-start text-gray-600 hover:text-gray-900"
              >
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="w-5 h-5" />
              </Button>

              {/* Page title */}
              <div className="flex-1 lg:ml-0 ml-4">
                <h1 className="text-lg font-semibold text-gray-900 capitalize">
                  {activeView}
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

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {activeView === "dashboard" && (
            <div className="space-y-8">
              {/* Welcome Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Welcome back! 👋
                </h2>
                <p className="text-gray-600">
                  Here are your forms and their performance overview.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-sm bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Forms</p>
                        <p className="text-3xl font-bold text-gray-900">{forms.length}</p>
                      </div>
                      <div className="p-3 bg-blue-100 rounded-xl">
                        <BarChart3 className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Responses</p>
                        <p className="text-3xl font-bold text-gray-900">
                          {forms.reduce((acc, form) => acc + form.responses, 0)}
                        </p>
                      </div>
                      <div className="p-3 bg-green-100 rounded-xl">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Views</p>
                        <p className="text-3xl font-bold text-gray-900">
                          {forms.reduce((acc, form) => acc + form.views, 0)}
                        </p>
                      </div>
                      <div className="p-3 bg-purple-100 rounded-xl">
                        <Eye className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Forms Section */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Recent Forms</h3>
                  <Button variant="outline" onClick={() => setActiveView("forms")}>
                    View All
                  </Button>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search forms..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>

                {/* Forms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredForms.slice(0, 6).map((form) => (
                    <Card key={form.id} className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow group">
                      <CardHeader className="p-0">
                        <div className={`h-32 ${form.thumbnail} rounded-t-lg relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-black/20" />
                          <div className="absolute top-4 left-4">
                            <Badge 
                              variant={form.status === "active" ? "default" : form.status === "draft" ? "secondary" : "outline"}
                              className="text-xs"
                            >
                              {form.status}
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 text-lg mb-1">
                              {form.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {form.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>{form.responses} responses</span>
                            <span>{form.views} views</span>
                          </div>

                          <div className="flex items-center space-x-2 pt-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Copy className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
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
          )}

          {activeView === "profile" && (
            <div className="max-w-2xl">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Settings</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                      <span className="text-2xl font-medium text-white">JD</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">John Doe</h3>
                      <p className="text-gray-600">john@example.com</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Change Avatar
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-3">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeView === "settings" && (
            <div className="max-w-2xl">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Email Notifications</p>
                          <p className="text-sm text-gray-600">Receive email updates about your forms</p>
                        </div>
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Marketing Emails</p>
                          <p className="text-sm text-gray-600">Receive updates about new features</p>
                        </div>
                        <input type="checkbox" className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Danger Zone</h3>
                    <div className="border border-red-200 rounded-lg p-4">
                      <h4 className="font-medium text-red-900 mb-2">Delete Account</h4>
                      <p className="text-sm text-red-700 mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeView === "templates" && (
            <Templates />
          )}

          {(activeView === "forms" || activeView === "analytics" || activeView === "help") && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {activeView.charAt(0).toUpperCase() + activeView.slice(1)} Coming Soon
              </h3>
              <p className="text-gray-600">
                This section is under development. Check back soon!
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
