import type { Metadata } from "next";
import Link from "next/link";
import { Users, Target, Award, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | NeoForm",
  description: "Learn about NeoForm's mission to transform form building and data collection.",
};

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-founder",
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
      description: "Former product lead at Google Forms with 8+ years in UX design."
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-founder", 
      image: "bg-gradient-to-br from-green-400 to-green-600",
      description: "Full-stack engineer and former tech lead at Typeform."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "bg-gradient-to-br from-purple-400 to-purple-600", 
      description: "Design systems expert who previously worked at Figma and Notion."
    },
    {
      name: "David Kim",
      role: "Lead Engineer",
      image: "bg-gradient-to-br from-orange-400 to-orange-600",
      description: "Backend architect specializing in scalable data infrastructure."
    }
  ];

  const values = [
    {
      icon: Users,
      title: "User-Centric",
      description: "Every feature we build is designed with our users' needs and feedback at the center."
    },
    {
      icon: Target,
      title: "Simplicity First",
      description: "We believe powerful tools should be simple to use, not complex to master."
    },
    {
      icon: Award,
      title: "Quality Driven",
      description: "We're committed to delivering high-quality, reliable solutions that exceed expectations."
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "We love what we do and are passionate about helping others succeed with better forms."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-sm font-bold text-white">N</span>
              </div>
              <span className="text-xl font-bold text-gray-900">NeoForm</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl font-bold text-gray-900">
              Transforming how forms are built
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to bridge the gap between Google Forms' simplicity and 
              Typeform's beauty, creating the perfect form building experience for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                NeoForm was born from a simple frustration: why should you have to choose between 
                functionality and beauty when building forms? After years of working with existing 
                form builders, our founders realized there was a gap in the market.
              </p>
              <p>
                Google Forms offered incredible simplicity and integration but lacked the visual 
                appeal and engagement features that modern users expect. Typeform provided stunning 
                interfaces but came with complexity and cost barriers that many couldn't justify.
              </p>
              <p>
                We set out to create the best of both worlds: a form builder that's as easy to use 
                as Google Forms but produces results as beautiful and engaging as Typeform. The result 
                is NeoForm - a platform that democratizes beautiful form creation for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do and help us stay focused on what matters most.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're a passionate team of designers, engineers, and product experts 
                dedicated to revolutionizing form building.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center space-y-4">
                  <div className={`w-32 h-32 ${member.image} rounded-full mx-auto flex items-center justify-center`}>
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-gray-600 mt-2">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To democratize beautiful form creation by making professional-grade form building 
              tools accessible to everyone, regardless of technical expertise or budget constraints.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                Join Our Mission
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Try NeoForm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
