"use client";

import { useState } from "react";
import { Search, Star, Eye, Plus, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  rating: number;
  uses: number;
  thumbnail: string;
  isPremium: boolean;
  tags: string[];
}

export function Templates() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const templates: Template[] = [
    {
      id: "1",
      title: "Customer Feedback Survey",
      description: "Comprehensive customer satisfaction survey with rating scales and open-ended questions",
      category: "feedback",
      difficulty: "beginner",
      rating: 4.8,
      uses: 2340,
      thumbnail: "bg-gradient-to-br from-blue-400 to-blue-600",
      isPremium: false,
      tags: ["customer", "satisfaction", "survey", "rating"]
    },
    {
      id: "2",
      title: "Lead Generation Form",
      description: "Modern lead capture form with progressive profiling and smart field validation",
      category: "marketing",
      difficulty: "intermediate",
      rating: 4.9,
      uses: 1890,
      thumbnail: "bg-gradient-to-br from-purple-400 to-purple-600",
      isPremium: true,
      tags: ["lead generation", "marketing", "conversion", "b2b"]
    },
    {
      id: "3",
      title: "Event Registration",
      description: "Complete event registration with attendee details, dietary preferences, and payment",
      category: "events",
      difficulty: "advanced",
      rating: 4.7,
      uses: 980,
      thumbnail: "bg-gradient-to-br from-green-400 to-green-600",
      isPremium: false,
      tags: ["event", "registration", "attendee", "payment"]
    },
    {
      id: "4",
      title: "Job Application Form",
      description: "Professional job application with file uploads, skills assessment, and availability",
      category: "hr",
      difficulty: "intermediate",
      rating: 4.6,
      uses: 1560,
      thumbnail: "bg-gradient-to-br from-orange-400 to-orange-600",
      isPremium: true,
      tags: ["job", "application", "hr", "recruitment"]
    },
    {
      id: "5",
      title: "Product Feedback",
      description: "Detailed product feedback form with feature requests and bug reporting",
      category: "feedback",
      difficulty: "beginner",
      rating: 4.5,
      uses: 1230,
      thumbnail: "bg-gradient-to-br from-pink-400 to-pink-600",
      isPremium: false,
      tags: ["product", "feedback", "features", "bugs"]
    },
    {
      id: "6",
      title: "Contact Sales Form",
      description: "High-converting sales contact form with qualification questions and urgency tracking",
      category: "sales",
      difficulty: "intermediate",
      rating: 4.8,
      uses: 2100,
      thumbnail: "bg-gradient-to-br from-cyan-400 to-cyan-600",
      isPremium: true,
      tags: ["sales", "contact", "qualification", "b2b"]
    },
    {
      id: "7",
      title: "Newsletter Signup",
      description: "Simple and elegant newsletter subscription with preference management",
      category: "marketing",
      difficulty: "beginner",
      rating: 4.4,
      uses: 3200,
      thumbnail: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      isPremium: false,
      tags: ["newsletter", "subscription", "email", "marketing"]
    },
    {
      id: "8",
      title: "Course Enrollment",
      description: "Educational course enrollment with prerequisites check and payment integration",
      category: "education",
      difficulty: "advanced",
      rating: 4.7,
      uses: 890,
      thumbnail: "bg-gradient-to-br from-indigo-400 to-indigo-600",
      isPremium: true,
      tags: ["course", "education", "enrollment", "learning"]
    }
  ];

  const categories = [
    { id: "all", label: "All Templates" },
    { id: "feedback", label: "Feedback" },
    { id: "marketing", label: "Marketing" },
    { id: "events", label: "Events" },
    { id: "hr", label: "HR & Recruitment" },
    { id: "sales", label: "Sales" },
    { id: "education", label: "Education" }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-green-100 text-green-700";
      case "intermediate": return "bg-yellow-100 text-yellow-700";
      case "advanced": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Templates</h1>
          <p className="text-gray-600 mt-1">
            Choose from professionally designed form templates
          </p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Create Template
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
          >
            <Grid className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Templates Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTemplates.map((template) => (
            <Card key={template.id} className="border-0 shadow-sm bg-white hover:shadow-md transition-all duration-200 group cursor-pointer">
              <CardHeader className="p-0">
                <div className={`h-32 ${template.thumbnail} rounded-t-lg relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {template.isPremium && (
                      <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs">
                        Premium
                      </Badge>
                    )}
                    <Badge className={`text-xs ${getDifficultyColor(template.difficulty)}`}>
                      {template.difficulty}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="flex items-center space-x-3 text-sm">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{template.rating}</span>
                      </div>
                      <div>
                        {template.uses.toLocaleString()} uses
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg group-hover:text-primary transition-colors">
                      {template.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                      {template.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {template.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {template.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{template.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1">
                      Use Template
                    </Button>
                    <Button variant="outline" size="sm">
                      Preview
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredTemplates.map((template) => (
            <Card key={template.id} className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-20 h-20 ${template.thumbnail} rounded-lg flex-shrink-0`}>
                    <div className="w-full h-full bg-black/20 rounded-lg" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900 text-lg">
                            {template.title}
                          </h3>
                          {template.isPremium && (
                            <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs">
                              Premium
                            </Badge>
                          )}
                          <Badge className={`text-xs ${getDifficultyColor(template.difficulty)}`}>
                            {template.difficulty}
                          </Badge>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-3">
                          {template.description}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                            <span>{template.rating}</span>
                          </div>
                          <div>
                            {template.uses.toLocaleString()} uses
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {template.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2 ml-4">
                        <Button size="sm">
                          Use Template
                        </Button>
                        <Button variant="outline" size="sm">
                          Preview
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No templates found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search terms or browse different categories
          </p>
          <Button variant="outline" onClick={() => {
            setSearchQuery("");
            setSelectedCategory("all");
          }}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}
