"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  MousePointer,
  Clock,
  Calendar,
  Download
} from "lucide-react";

export function AnalyticsContent() {
  const stats = [
    {
      title: "Total Views",
      value: "12,543",
      change: "+8.2%",
      trend: "up",
      icon: Eye,
    },
    {
      title: "Total Responses", 
      value: "2,847",
      change: "+12.3%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Conversion Rate",
      value: "23.1%",
      change: "+2.3%",
      trend: "up", 
      icon: MousePointer,
    },
    {
      title: "Avg. Completion Time",
      value: "2m 34s",
      change: "-12s",
      trend: "down",
      icon: Clock,
    },
  ];

  const topForms = [
    {
      name: "Customer Feedback Survey",
      views: 2456,
      responses: 567,
      rate: "23.1%",
      status: "active"
    },
    {
      name: "Lead Generation Form", 
      views: 1892,
      responses: 234,
      rate: "12.4%",
      status: "active"
    },
    {
      name: "Event Registration",
      views: 1234,
      responses: 178,
      rate: "14.4%",
      status: "active"
    },
    {
      name: "Newsletter Signup",
      views: 987,
      responses: 123,
      rate: "12.5%",
      status: "paused"
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Track your form performance and insights
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Last 30 days
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center space-x-2 text-xs">
                  <TrendingUp 
                    className={`h-3 w-3 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} 
                  />
                  <span className={stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                    {stat.change}
                  </span>
                  <span className="text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Placeholder */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Form Views Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
              <div className="text-center space-y-2">
                <BarChart3 className="h-8 w-8 mx-auto text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Chart placeholder</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Response Rate Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
              <div className="text-center space-y-2">
                <TrendingUp className="h-8 w-8 mx-auto text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Chart placeholder</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Performing Forms */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Forms</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topForms.map((form, index) => (
              <div key={form.name} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{form.name}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{form.views} views</span>
                      <span>{form.responses} responses</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="font-medium">{form.rate}</p>
                    <p className="text-sm text-muted-foreground">conversion</p>
                  </div>
                  <Badge variant={form.status === "active" ? "default" : "secondary"}>
                    {form.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
