"use client";

import { useState } from "react";
import { TrendingUp, Users, Eye, Target, Calendar, ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AnalyticsContent() {
  const [timeRange, setTimeRange] = useState("7d");

  const stats = [
    {
      title: "Total Views",
      value: "12,345",
      change: "+12.3%",
      trend: "up",
      icon: Eye,
      color: "blue"
    },
    {
      title: "Form Responses",
      value: "2,847",
      change: "+8.7%",
      trend: "up",
      icon: Users,
      color: "green"
    },
    {
      title: "Conversion Rate",
      value: "23.1%",
      change: "-2.1%",
      trend: "down",
      icon: Target,
      color: "orange"
    },
    {
      title: "Average Time",
      value: "2m 34s",
      change: "+0.8%",
      trend: "up",
      icon: Calendar,
      color: "purple"
    }
  ];

  const topForms = [
    {
      name: "Customer Feedback Survey",
      views: 4234,
      responses: 892,
      conversion: "21.1%",
      trend: "up"
    },
    {
      name: "Lead Generation Form",
      views: 3456,
      responses: 654,
      conversion: "18.9%",
      trend: "up"
    },
    {
      name: "Event Registration",
      views: 2103,
      responses: 423,
      conversion: "20.1%",
      trend: "down"
    },
    {
      name: "Newsletter Signup",
      views: 1876,
      responses: 512,
      conversion: "27.3%",
      trend: "up"
    }
  ];

  const timeRanges = [
    { value: "7d", label: "Last 7 days" },
    { value: "30d", label: "Last 30 days" },
    { value: "90d", label: "Last 3 months" },
    { value: "1y", label: "Last year" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">
            Track your form performance and user engagement
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
          >
            {timeRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="relative overflow-hidden border-0 bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <div className="flex items-center space-x-1">
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="w-4 h-4 text-green-500" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 text-red-500" />
                      )}
                      <span className={`text-sm font-medium ${
                        stat.trend === "up" ? "text-green-500" : "text-red-500"
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                    <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart Placeholder 1 */}
        <Card className="border-0 bg-white shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold">Response Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <TrendingUp className="w-12 h-12 text-gray-400 mx-auto" />
                <p className="text-gray-500 font-medium">Chart Coming Soon</p>
                <p className="text-sm text-gray-400">Interactive analytics dashboard</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chart Placeholder 2 */}
        <Card className="border-0 bg-white shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold">Conversion Funnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <Target className="w-12 h-12 text-gray-400 mx-auto" />
                <p className="text-gray-500 font-medium">Chart Coming Soon</p>
                <p className="text-sm text-gray-400">Detailed conversion analysis</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Performing Forms */}
      <Card className="border-0 bg-white shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">Top Performing Forms</CardTitle>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <MoreHorizontal className="w-4 h-4 text-gray-500" />
          </button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topForms.map((form, index) => (
              <div key={form.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">#{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{form.name}</h3>
                    <p className="text-sm text-gray-500">
                      {form.views.toLocaleString()} views • {form.responses.toLocaleString()} responses
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{form.conversion}</p>
                    <p className="text-sm text-gray-500">Conversion</p>
                  </div>
                  <Badge variant={form.trend === "up" ? "default" : "secondary"}>
                    {form.trend === "up" ? (
                      <ArrowUpRight className="w-3 h-3 mr-1" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3 mr-1" />
                    )}
                    {form.trend}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="border-0 bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "New response", form: "Customer Feedback Survey", time: "2 minutes ago" },
              { action: "Form viewed", form: "Lead Generation Form", time: "5 minutes ago" },
              { action: "New response", form: "Event Registration", time: "12 minutes ago" },
              { action: "Form shared", form: "Newsletter Signup", time: "1 hour ago" },
              { action: "New response", form: "Customer Feedback Survey", time: "2 hours ago" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">{activity.action}</span> on{" "}
                    <span className="text-primary">{activity.form}</span>
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
