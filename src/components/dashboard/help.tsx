"use client";

import { useState } from "react";
import { Search, HelpCircle, Book, MessageCircle, Mail, ExternalLink, ChevronRight, Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HelpContent() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const categories = [
        { id: "all", label: "All Topics", count: 24 },
        { id: "getting-started", label: "Getting Started", count: 8 },
        { id: "forms", label: "Forms & Templates", count: 6 },
        { id: "analytics", label: "Analytics", count: 4 },
        { id: "integrations", label: "Integrations", count: 3 },
        { id: "billing", label: "Billing & Plans", count: 3 }
    ];

    const helpArticles = [
        {
            id: 1,
            title: "Getting Started with NeoForm",
            description: "Learn the basics of creating and managing your first form",
            category: "getting-started",
            readTime: "5 min read",
            popular: true
        },
        {
            id: 2,
            title: "How to Create Custom Form Templates",
            description: "Step-by-step guide to building beautiful custom templates",
            category: "forms",
            readTime: "8 min read",
            popular: true
        },
        {
            id: 3,
            title: "Understanding Analytics Dashboard",
            description: "Make sense of your form performance data and metrics",
            category: "analytics",
            readTime: "6 min read",
            popular: false
        },
        {
            id: 4,
            title: "Google Sheets Integration Setup",
            description: "Connect your forms to Google Sheets for data collection",
            category: "integrations",
            readTime: "4 min read",
            popular: true
        },
        {
            id: 5,
            title: "Embedding Forms on Your Website",
            description: "Learn different ways to embed forms on your site",
            category: "forms",
            readTime: "7 min read",
            popular: false
        },
        {
            id: 6,
            title: "Managing Team Access and Permissions",
            description: "Control who can access and edit your forms",
            category: "getting-started",
            readTime: "5 min read",
            popular: false
        }
    ];

    const quickHelp = [
        {
            title: "Video Tutorials",
            description: "Watch step-by-step video guides",
            icon: Play,
            color: "blue"
        },
        {
            title: "Contact Support",
            description: "Get help from our support team",
            icon: MessageCircle,
            color: "green"
        },
        {
            title: "Community Forum",
            description: "Connect with other users",
            icon: HelpCircle,
            color: "purple"
        },
        {
            title: "Email Support",
            description: "Send us an email",
            icon: Mail,
            color: "orange"
        }
    ];

    const filteredArticles = helpArticles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-gray-900">Help Center</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Find answers to common questions and learn how to get the most out of NeoForm
                </p>
            </div>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search for help articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-lg"
                    />
                </div>
            </div>

            {/* Quick Help Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickHelp.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Card key={item.title} className="border-0 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                            <CardContent className="p-6 text-center">
                                <div className={`w-12 h-12 bg-${item.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                    <Icon className={`w-6 h-6 text-${item.color}-600`} />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Categories and Articles */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Categories Sidebar */}
                <div className="lg:col-span-1">
                    <Card className="border-0 bg-white shadow-sm">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-lg font-semibold">Categories</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-left ${selectedCategory === category.id
                                            ? 'bg-primary/10 text-primary'
                                            : 'hover:bg-gray-100 text-gray-700'
                                        }`}
                                >
                                    <span className="font-medium">{category.label}</span>
                                    <Badge variant="outline" className="text-xs">
                                        {category.count}
                                    </Badge>
                                </button>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Articles */}
                <div className="lg:col-span-3">
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-gray-900">
                                {selectedCategory === "all" ? "All Articles" : categories.find(c => c.id === selectedCategory)?.label}
                            </h2>
                            <p className="text-sm text-gray-500">
                                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
                            </p>
                        </div>

                        <div className="space-y-4">
                            {filteredArticles.map((article) => (
                                <Card key={article.id} className="border-0 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1 space-y-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                                        {article.title}
                                                    </h3>
                                                    {article.popular && (
                                                        <Badge variant="default" className="text-xs">
                                                            Popular
                                                        </Badge>
                                                    )}
                                                </div>
                                                <p className="text-gray-600">{article.description}</p>
                                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                    <span>{article.readTime}</span>
                                                    <span>•</span>
                                                    <span className="capitalize">{article.category.replace('-', ' ')}</span>
                                                </div>
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors ml-4" />
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {filteredArticles.length === 0 && (
                            <div className="text-center py-12">
                                <Book className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
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
                </div>
            </div>

            {/* Contact Support */}
            <Card className="border-0 bg-gradient-to-r from-primary/5 to-purple-500/5">
                <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Still need help?</h3>
                    <p className="text-gray-600 mb-6">
                        Our support team is here to help you with any questions or issues you might have.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-primary hover:bg-primary/90">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Start Live Chat
                        </Button>
                        <Button variant="outline">
                            <Mail className="w-4 h-4 mr-2" />
                            Email Support
                        </Button>
                        <Button variant="outline">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Community Forum
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
