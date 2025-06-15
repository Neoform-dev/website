"use client";

import { useState } from "react";
import { Camera, MapPin, Calendar, Globe, Github, Twitter, Linkedin, Save, Edit3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProfileContent() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    bio: "Product Designer passionate about creating beautiful and functional user experiences. Currently working on improving form building tools.",
    location: "San Francisco, CA",
    website: "https://johndoe.com",
    company: "Design Studio Inc.",
    title: "Senior Product Designer"
  });

  const [socialLinks, setSocialLinks] = useState({
    twitter: "https://twitter.com/johndoe",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe"
  });

  const stats = [
    { label: "Forms Created", value: "24" },
    { label: "Total Responses", value: "1,847" },
    { label: "Total Views", value: "12,543" },
    { label: "Member Since", value: "Jan 2024" }
  ];

  const recentActivity = [
    { action: "Created", item: "Customer Feedback Survey", time: "2 hours ago" },
    { action: "Updated", item: "Lead Generation Form", time: "1 day ago" },
    { action: "Shared", item: "Event Registration", time: "3 days ago" },
    { action: "Created", item: "Newsletter Signup", time: "1 week ago" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <Button
          onClick={() => {
            if (isEditing) {
              setIsEditing(false);
              // Here you would typically save to your backend
            } else {
              setIsEditing(true);
            }
          }}
          variant={isEditing ? "outline" : "default"}
        >
          {isEditing ? (
            <>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </>
          ) : (
            <>
              <Edit3 className="w-4 h-4 mr-2" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <Card className="border-0 bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                {/* Avatar */}
                <div className="relative inline-block">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white text-2xl font-bold">
                    {profileData.firstName[0]}{profileData.lastName[0]}
                  </div>
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                      <Camera className="w-4 h-4 text-gray-600" />
                    </button>
                  )}
                </div>

                {/* Basic Info */}
                <div className="space-y-2">
                  {isEditing ? (
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={profileData.firstName}
                          onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                          className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                        />
                        <input
                          type="text"
                          value={profileData.lastName}
                          onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                          className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                        />
                      </div>
                      <input
                        type="text"
                        value={profileData.title}
                        onChange={(e) => setProfileData({...profileData, title: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                        placeholder="Job Title"
                      />
                      <input
                        type="text"
                        value={profileData.company}
                        onChange={(e) => setProfileData({...profileData, company: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                        placeholder="Company"
                      />
                    </div>
                  ) : (
                    <>
                      <h2 className="text-xl font-bold text-gray-900">
                        {profileData.firstName} {profileData.lastName}
                      </h2>
                      <p className="text-gray-600">{profileData.title}</p>
                      <p className="text-sm text-gray-500">{profileData.company}</p>
                    </>
                  )}
                </div>

                {/* Contact Info */}
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.location}
                        onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                        className="px-2 py-1 border border-gray-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-primary/20"
                        placeholder="Location"
                      />
                    ) : (
                      <span>{profileData.location}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Globe className="w-4 h-4" />
                    {isEditing ? (
                      <input
                        type="url"
                        value={profileData.website}
                        onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                        className="px-2 py-1 border border-gray-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-primary/20"
                        placeholder="Website"
                      />
                    ) : (
                      <a href={profileData.website} className="text-primary hover:underline">
                        {profileData.website.replace('https://', '')}
                      </a>
                    )}
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Joined January 2024</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 pt-4">
                  {isEditing ? (
                    <div className="space-y-2 w-full">
                      <input
                        type="url"
                        value={socialLinks.twitter}
                        onChange={(e) => setSocialLinks({...socialLinks, twitter: e.target.value})}
                        placeholder="Twitter URL"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-xs"
                      />
                      <input
                        type="url"
                        value={socialLinks.github}
                        onChange={(e) => setSocialLinks({...socialLinks, github: e.target.value})}
                        placeholder="GitHub URL"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-xs"
                      />
                      <input
                        type="url"
                        value={socialLinks.linkedin}
                        onChange={(e) => setSocialLinks({...socialLinks, linkedin: e.target.value})}
                        placeholder="LinkedIn URL"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-xs"
                      />
                    </div>
                  ) : (
                    <>
                      <a href={socialLinks.twitter} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                        <Twitter className="w-4 h-4 text-gray-600" />
                      </a>
                      <a href={socialLinks.github} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                        <Github className="w-4 h-4 text-gray-600" />
                      </a>
                      <a href={socialLinks.linkedin} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                        <Linkedin className="w-4 h-4 text-gray-600" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <Card className="border-0 bg-white shadow-sm mt-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold">Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{stat.label}</span>
                  <span className="font-semibold text-gray-900">{stat.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* About */}
          <Card className="border-0 bg-white shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold">About</CardTitle>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <textarea
                  value={profileData.bio}
                  onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                  placeholder="Tell us about yourself..."
                />
              ) : (
                <p className="text-gray-600 leading-relaxed">{profileData.bio}</p>
              )}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border-0 bg-white shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.action}</span>{" "}
                        <span className="text-primary">{activity.item}</span>
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="border-0 bg-white shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold">Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">🚀</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Early Adopter</p>
                    <p className="text-xs text-gray-600">Joined in the first month</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold">📊</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Data Collector</p>
                    <p className="text-xs text-gray-600">1,000+ responses collected</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold">🎨</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Designer</p>
                    <p className="text-xs text-gray-600">Created 20+ forms</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold">🔥</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Popular Creator</p>
                    <p className="text-xs text-gray-600">10,000+ form views</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
