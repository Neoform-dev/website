"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  HelpCircle,
  Book,
  MessageCircle,
  Video,
  FileText,
  ExternalLink,
  ChevronRight,
  Mail
} from "lucide-react";
import { useState } from "react";

export function HelpContent() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "Getting Started",
      description: "Learn the basics of creating and managing forms",
      icon: Book,
      articles: 12,
      color: "text-blue-600"
    },
    {
      title: "Form Building",
      description: "Advanced form creation and customization",
      icon: FileText,
      articles: 8,
      color: "text-green-600"
    },
    {
      title: "Analytics & Reports",
      description: "Understanding your form performance data",
      icon: Video,
      articles: 6,
      color: "text-purple-600"
    },
    {
      title: "Integrations",
      description: "Connect with Google Sheets and other tools",
      icon: MessageCircle,
      articles: 4,
      color: "text-orange-600"
    }
  ];

  const popularArticles = [
    {
      title: "How to create your first form",
      category: "Getting Started",
      readTime: "3 min read",
      views: 1234
    },
    {
      title: "Connecting to Google Sheets",
      category: "Integrations", 
      readTime: "5 min read",
      views: 987
    },
    {
      title: "Customizing form themes",
      category: "Form Building",
      readTime: "4 min read",
      views: 756
    },
    {
      title: "Understanding form analytics",
      category: "Analytics & Reports",
      readTime: "6 min read",
      views: 543
    },
    {
      title: "Setting up notifications",
      category: "Getting Started",
      readTime: "2 min read",
      views: 432
    }
  ];

  const quickActions = [
    {
      title: "Video Tutorials",
      description: "Watch step-by-step guides",
      icon: Video,
      action: "Watch Now"
    },
    {
      title: "Contact Support",
      description: "Get help from our team",
      icon: MessageCircle,
      action: "Contact Us"
    },
    {
      title: "Feature Requests",
      description: "Suggest new features",
      icon: HelpCircle,
      action: "Submit Idea"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Help Center</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find answers to your questions and learn how to get the most out of NeoForm
        </p>
        
        {/* Search */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <Card key={action.title} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">{action.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
                <Button variant="outline" size="sm">
                  {action.action}
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Help Categories */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg bg-muted ${category.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{category.title}</h3>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 mb-2">
                        {category.description}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {category.articles} articles
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Popular Articles */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Popular Articles</h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {popularArticles.map((article, index) => (
                <div key={index} className="p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{article.title}</h3>
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        <span>{article.readTime}</span>
                        <span>{article.views} views</span>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Support */}
      <Card>
        <CardHeader>
          <CardTitle>Still Need Help?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center space-x-3 p-4 border rounded-lg">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Email Support</p>
                <p className="text-sm text-muted-foreground">Get help via email</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 border rounded-lg">
              <MessageCircle className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Live Chat</p>
                <p className="text-sm text-muted-foreground">Chat with our team</p>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Button>Contact Support Team</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
