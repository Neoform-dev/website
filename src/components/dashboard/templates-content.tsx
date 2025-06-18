"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Star, 
  Download, 
  Briefcase,
  GraduationCap,
  ShoppingCart,
  Calendar,
  MessageSquare,
  UserCheck,
  Filter
} from "lucide-react";
import { useState } from "react";

interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  downloads: number;
  rating: number;
  icon: React.ComponentType<{ className?: string }>;
  popular?: boolean;
}

export function TemplatesContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const templates: Template[] = [
    {
      id: "1",
      title: "Customer Feedback Survey",
      description: "Collect valuable feedback from your customers with this comprehensive survey template",
      category: "feedback",
      downloads: 1234,
      rating: 4.8,
      icon: MessageSquare,
      popular: true
    },
    {
      id: "2", 
      title: "Lead Generation Form",
      description: "Capture potential leads with this optimized form for sales teams",
      category: "business",
      downloads: 987,
      rating: 4.9,
      icon: Briefcase,
      popular: true
    },
    {
      id: "3",
      title: "Event Registration",
      description: "Simple and effective event registration form for conferences and workshops",
      category: "events",
      downloads: 756,
      rating: 4.7,
      icon: Calendar
    },
    {
      id: "4",
      title: "Job Application Form",
      description: "Streamlined job application process with essential fields",
      category: "hr",
      downloads: 623,
      rating: 4.6,
      icon: UserCheck
    },
    {
      id: "5",
      title: "Course Enrollment",
      description: "Educational course enrollment form with payment integration",
      category: "education",
      downloads: 543,
      rating: 4.5,
      icon: GraduationCap
    },
    {
      id: "6",
      title: "Product Order Form",
      description: "E-commerce order form with product selection and shipping details",
      category: "ecommerce",
      downloads: 876,
      rating: 4.7,
      icon: ShoppingCart
    }
  ];

  const categories = [
    { id: "all", label: "All Templates", count: templates.length },
    { id: "business", label: "Business", count: templates.filter(t => t.category === "business").length },
    { id: "feedback", label: "Feedback", count: templates.filter(t => t.category === "feedback").length },
    { id: "events", label: "Events", count: templates.filter(t => t.category === "events").length },
    { id: "education", label: "Education", count: templates.filter(t => t.category === "education").length },
    { id: "hr", label: "HR", count: templates.filter(t => t.category === "hr").length },
    { id: "ecommerce", label: "E-commerce", count: templates.filter(t => t.category === "ecommerce").length }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Templates</h1>
        <p className="text-muted-foreground">
          Choose from our collection of professionally designed form templates
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search templates..."
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
          {filteredTemplates.length} templates found
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.label} ({category.count})
          </Button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTemplates.map((template) => {
          const Icon = template.icon;
          return (
            <Card key={template.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex items-center space-x-1">
                    {template.popular && (
                      <Badge variant="secondary" className="text-xs">
                        Popular
                      </Badge>
                    )}
                  </div>
                </div>
                <CardTitle className="text-lg">{template.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {template.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 mr-1 text-yellow-500 fill-current" />
                      {template.rating}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Download className="h-3 w-3 mr-1" />
                      {template.downloads}
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs capitalize">
                    {template.category}
                  </Badge>
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1" size="sm">
                    Use Template
                  </Button>
                  <Button variant="outline" size="sm">
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredTemplates.length === 0 && (
        <Card>
          <CardContent className="py-12">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto">
                <Search className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                <p className="text-lg font-medium">No templates found</p>
                <p className="text-sm text-muted-foreground">
                  Try adjusting your search query or category filter
                </p>
              </div>
              <Button variant="outline" onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}>
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
