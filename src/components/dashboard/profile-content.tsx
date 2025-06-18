"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Calendar,
  MapPin,
  Link as LinkIcon,
  Edit,
  Camera,
  Award,
  BarChart3,
  FileText,
  Users,
  Eye
} from "lucide-react";

export function ProfileContent() {
  const stats = [
    {
      title: "Total Forms",
      value: "12",
      icon: FileText,
    },
    {
      title: "Total Responses",
      value: "2,847",
      icon: Users,
    },
    {
      title: "Total Views",
      value: "12,543",
      icon: Eye,
    },
    {
      title: "Avg. Response Rate",
      value: "23.1%",
      icon: BarChart3,
    },
  ];

  const recentActivity = [
    {
      action: "Created new form",
      form: "Customer Feedback Survey",
      time: "2 hours ago"
    },
    {
      action: "Updated form",
      form: "Lead Generation Form",
      time: "1 day ago"
    },
    {
      action: "Published form",
      form: "Event Registration",
      time: "3 days ago"
    },
    {
      action: "Received response",
      form: "Newsletter Signup",
      time: "5 days ago"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">
          Manage your profile information and view your activity
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile Card */}
        <Card className="md:col-span-1">
          <CardHeader className="text-center">
            <div className="relative mx-auto">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto">
                JD
              </div>
              <Button
                size="sm"
                className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-sm text-muted-foreground">Product Manager</p>
              <Badge variant="secondary" className="text-xs">
                <Award className="h-3 w-3 mr-1" />
                Pro User
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Joined March 2024</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <LinkIcon className="h-4 w-4 text-muted-foreground" />
                <span className="text-primary">johndoe.com</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Stats */}
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
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* About */}
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Passionate product manager with 5+ years of experience in building user-centric digital products. 
                I love creating forms that are both beautiful and functional, helping businesses connect better with their customers.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {["Product Management", "UX Design", "Form Optimization", "Analytics", "Customer Research"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <div className="flex-1">
                      <span className="font-medium">{activity.action}</span>
                      <span className="text-primary"> {activity.form}</span>
                    </div>
                    <span className="text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Edit Profile Form */}
      <Card>
        <CardHeader>
          <CardTitle>Edit Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">First Name</label>
              <Input placeholder="John" defaultValue="John" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Last Name</label>
              <Input placeholder="Doe" defaultValue="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Job Title</label>
            <Input placeholder="Product Manager" defaultValue="Product Manager" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Location</label>
            <Input placeholder="San Francisco, CA" defaultValue="San Francisco, CA" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Website</label>
            <Input placeholder="https://johndoe.com" defaultValue="https://johndoe.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Bio</label>
            <Input 
              placeholder="Tell us about yourself" 
              defaultValue="Passionate product manager with 5+ years of experience..."
            />
          </div>
          <div className="flex space-x-2">
            <Button>Save Changes</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
