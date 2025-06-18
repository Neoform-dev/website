"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Plus, 
  Search, 
  MoreHorizontal, 
  ExternalLink, 
  Copy, 
  BarChart3, 
  Users, 
  Eye,
  Calendar,
  Filter,
  Edit
} from "lucide-react";

interface Form {
  id: string;
  title: string;
  description: string;
  status: "active" | "draft" | "paused";
  responses: number;
  views: number;
  createdAt: string;
}

export function FormsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [forms] = useState<Form[]>([
    {
      id: "1",
      title: "Customer Feedback Survey",
      description: "Collect feedback from customers about our products and services",
      status: "active",
      responses: 234,
      views: 1456,
      createdAt: "2 days ago"
    },
    {
      id: "2", 
      title: "Lead Generation Form",
      description: "Capture potential leads for our sales team",
      status: "active",
      responses: 89,
      views: 892,
      createdAt: "1 week ago"
    },
    {
      id: "3",
      title: "Event Registration",
      description: "Registration form for upcoming webinar",
      status: "draft",
      responses: 45,
      views: 234,
      createdAt: "3 days ago"
    },
    {
      id: "4",
      title: "Newsletter Signup",
      description: "Simple newsletter subscription form",
      status: "active",
      responses: 567,
      views: 2341,
      createdAt: "1 month ago"
    },
    {
      id: "5",
      title: "Contact Us",
      description: "General contact form for website visitors",
      status: "active",
      responses: 123,
      views: 789,
      createdAt: "2 weeks ago"
    },
    {
      id: "6",
      title: "Product Demo Request",
      description: "Form for requesting product demonstrations",
      status: "paused",
      responses: 67,
      views: 345,
      createdAt: "5 days ago"
    }
  ]);

  const filteredForms = forms.filter(form =>
    form.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    form.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Forms</h1>
          <p className="text-muted-foreground">
            Manage and organize your forms
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Form
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search forms..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="pl-8 w-64"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground">
          {filteredForms.length} of {forms.length} forms
        </div>
      </div>

      {/* Forms Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredForms.map((form) => (
          <Card key={form.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge 
                  variant={
                    form.status === "active" ? "default" : 
                    form.status === "draft" ? "secondary" : 
                    "outline"
                  }
                >
                  {form.status}
                </Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Form
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open Form
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Link
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Analytics
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CardTitle className="text-lg">{form.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {form.description}
              </p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1 text-muted-foreground" />
                    {form.views}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                    {form.responses}
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  {form.createdAt}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredForms.length === 0 && (
        <Card>
          <CardContent className="py-12">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto">
                <Search className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                <p className="text-lg font-medium">No forms found</p>
                <p className="text-sm text-muted-foreground">
                  Try adjusting your search query or create a new form
                </p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Form
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
