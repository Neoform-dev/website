"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Check, User, Target, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  component: React.ReactNode;
}

export function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({
    name: "",
    role: "",
    useCase: "",
    design: ""
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      window.location.href = "/dashboard";
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps: OnboardingStep[] = [
    {
      id: 1,
      title: "Welcome! Let's get to know you",
      description: "Tell us a bit about yourself to personalize your experience",
      component: (
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              What&apos;s your name?
            </label>
            <input
              type="text"
              value={userData.name}
              onChange={(e) => setUserData({...userData, name: e.target.value})}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              What&apos;s your role?
            </label>
            <select
              value={userData.role}
              onChange={(e) => setUserData({...userData, role: e.target.value})}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            >
              <option value="">Select your role</option>
              <option value="founder">Founder/CEO</option>
              <option value="marketer">Marketing Manager</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "What will you use NeoForm for?",
      description: "Help us understand your primary use case",
      component: (
        <div className="grid gap-4">
          {[
            { id: "lead-generation", title: "Lead Generation", desc: "Capture leads and grow your business", icon: Target },
            { id: "feedback", title: "Customer Feedback", desc: "Collect user feedback and testimonials", icon: User },
            { id: "surveys", title: "Surveys & Research", desc: "Conduct market research and surveys", icon: Sparkles },
            { id: "other", title: "Other", desc: "Something else entirely", icon: Palette }
          ].map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.id}
                onClick={() => setUserData({...userData, useCase: option.id})}
                className={`p-4 border-2 rounded-xl text-left transition-all hover:border-primary/50 ${
                  userData.useCase === option.id ? 'border-primary bg-primary/5' : 'border-gray-200'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${userData.useCase === option.id ? 'bg-primary text-white' : 'bg-gray-100'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{option.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{option.desc}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )
    },
    {
      id: 3,
      title: "Choose your design style",
      description: "Pick a style that matches your brand",
      component: (
        <div className="grid gap-4">
          {[
            { id: "minimal", title: "Minimal", desc: "Clean and simple design", color: "bg-gray-100" },
            { id: "modern", title: "Modern", desc: "Contemporary with gradients", color: "bg-blue-100" },
            { id: "colorful", title: "Colorful", desc: "Vibrant and engaging", color: "bg-purple-100" },
            { id: "professional", title: "Professional", desc: "Corporate and trustworthy", color: "bg-green-100" }
          ].map((style) => (
            <button
              key={style.id}
              onClick={() => setUserData({...userData, design: style.id})}
              className={`p-4 border-2 rounded-xl text-left transition-all hover:border-primary/50 ${
                userData.design === style.id ? 'border-primary bg-primary/5' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-8 rounded ${style.color} border`}></div>
                <div>
                  <h3 className="font-medium text-gray-900">{style.title}</h3>
                  <p className="text-sm text-gray-600">{style.desc}</p>
                </div>
                {userData.design === style.id && (
                  <Check className="w-5 h-5 text-primary ml-auto" />
                )}
              </div>
            </button>
          ))}
        </div>
      )
    },
    {
      id: 4,
      title: "You're all set! 🎉",
      description: "Welcome to NeoForm. Let's start transforming your forms!",
      component: (
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto">
            <Check className="w-10 h-10 text-white" />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Welcome aboard, {userData.name}!
            </h3>
            <p className="text-gray-600">
              Your account is ready. You can now start creating beautiful forms and collecting responses.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 space-y-2">
            <h4 className="font-medium text-gray-900">What&apos;s next?</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Connect your first Google Form</li>
              <li>• Choose a beautiful template</li>
              <li>• Share your transformed form</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const canProceed = currentStep === 0 ? userData.name && userData.role :
                     currentStep === 1 ? userData.useCase :
                     currentStep === 2 ? userData.design : true;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(((currentStep + 1) / steps.length) * 100)}% complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Main Card */}
        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-gray-900">
              {currentStepData.title}
            </CardTitle>
            <p className="text-gray-600 mt-2">
              {currentStepData.description}
            </p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Step Content */}
            <div>
              {currentStepData.component}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-6 border-t">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={currentStep === 0}
                className="text-gray-600"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              <Button
                onClick={handleNext}
                disabled={!canProceed}
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
              >
                {isLastStep ? "Go to Dashboard" : "Continue"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
