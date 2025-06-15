"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles, Layout, Palette, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  category: string;
}

export function CreateFormFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");
  const [formName, setFormName] = useState("");

  const templates: Template[] = [
    {
      id: "blank",
      name: "Start from Scratch",
      description: "Begin with a blank canvas and build your form from the ground up",
      thumbnail: "bg-gradient-to-br from-gray-100 to-gray-200",
      category: "basic"
    },
    {
      id: "contact",
      name: "Contact Form",
      description: "Simple contact form with name, email, and message fields",
      thumbnail: "bg-gradient-to-br from-blue-400 to-blue-600",
      category: "business"
    },
    {
      id: "feedback",
      name: "Customer Feedback",
      description: "Comprehensive feedback form with ratings and open-ended questions",
      thumbnail: "bg-gradient-to-br from-green-400 to-green-600",
      category: "feedback"
    },
    {
      id: "survey",
      name: "Survey Form",
      description: "Multi-step survey with various question types and logic",
      thumbnail: "bg-gradient-to-br from-purple-400 to-purple-600",
      category: "research"
    },
    {
      id: "registration",
      name: "Event Registration",
      description: "Event signup form with attendee details and preferences",
      thumbnail: "bg-gradient-to-br from-orange-400 to-orange-600",
      category: "events"
    },
    {
      id: "lead",
      name: "Lead Generation",
      description: "Optimized form for capturing qualified leads",
      thumbnail: "bg-gradient-to-br from-pink-400 to-pink-600",
      category: "marketing"
    }
  ];

  const steps = [
    { id: 1, title: "Choose Template", icon: Layout },
    { id: 2, title: "Customize", icon: Palette },
    { id: 3, title: "Configure", icon: Settings },
    { id: 4, title: "Publish", icon: Sparkles }
  ];

  const handleNext = () => {
    if (currentStep === 1 && selectedTemplate) {
      setCurrentStep(2);
    } else if (currentStep === 2 && formName) {
      // Redirect to demo page for now
      window.location.href = "/demo";
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      window.history.back();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={handleBack} className="p-2">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Create New Form</h1>
                <p className="text-sm text-gray-500">
                  Step {currentStep} of {steps.length}
                </p>
              </div>
            </div>
            
            {/* Progress Steps */}
            <div className="hidden md:flex items-center space-x-8">
              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;
                
                return (
                  <div
                    key={step.id}
                    className={`flex items-center space-x-3 ${
                      isActive ? 'text-primary' : isCompleted ? 'text-green-600' : 'text-gray-400'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isActive
                          ? 'bg-primary text-white'
                          : isCompleted
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{step.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {currentStep === 1 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Choose a Template
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Start with a professionally designed template or build from scratch
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <Card
                  key={template.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedTemplate === template.id
                      ? 'ring-2 ring-primary border-primary'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <CardContent className="p-0">
                    <div className={`h-32 ${template.thumbnail} rounded-t-lg relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10" />
                      {selectedTemplate === template.id && (
                        <div className="absolute top-3 right-3">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">{template.name}</h3>
                      <p className="text-sm text-gray-600">{template.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Customize Your Form
              </h2>
              <p className="text-lg text-gray-600">
                Give your form a name and customize its appearance
              </p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Form Name
                  </label>
                  <input
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g., Customer Feedback Survey"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Description (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what this form is for..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Color Theme
                  </label>
                  <div className="grid grid-cols-6 gap-3">
                    {[
                      'bg-blue-500',
                      'bg-purple-500',
                      'bg-green-500',
                      'bg-orange-500',
                      'bg-pink-500',
                      'bg-gray-500'
                    ].map((color, index) => (
                      <button
                        key={index}
                        className={`w-12 h-12 rounded-lg ${color} hover:scale-110 transition-transform`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button variant="outline" onClick={handleBack} disabled={currentStep === 1}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={
              (currentStep === 1 && !selectedTemplate) ||
              (currentStep === 2 && !formName.trim())
            }
            className="bg-primary hover:bg-primary/90"
          >
            {currentStep === 2 ? "Create Form" : "Continue"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
