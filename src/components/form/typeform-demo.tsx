"use client";

import { useState, useEffect } from "react";
import { ChevronRight, ArrowLeft, Check, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Question {
  id: string;
  type: "welcome" | "text" | "email" | "choice" | "rating" | "opinion_scale" | "thank_you";
  title: string;
  description?: string;
  placeholder?: string;
  required?: boolean;
  choices?: string[];
  max_rating?: number;
  icon?: React.ReactNode;
}

const questions: Question[] = [
  {
    id: "welcome",
    type: "welcome",
    title: "Welcome to our Customer Feedback Survey! 👋",
    description: "This will take about 3 minutes to complete. Your feedback helps us improve our service.",
    icon: <Heart className="w-8 h-8 text-red-500" />
  },
  {
    id: "name",
    type: "text",
    title: "What's your name?",
    description: "We'd love to personalize your experience",
    placeholder: "Type your answer here...",
    required: true
  },
  {
    id: "email",
    type: "email",
    title: "What's your email address?",
    description: "We'll use this to follow up on your feedback if needed",
    placeholder: "name@example.com",
    required: true
  },
  {
    id: "experience",
    type: "choice",
    title: "How would you rate your overall experience?",
    description: "Select the option that best describes your experience",
    choices: ["Excellent", "Good", "Average", "Poor", "Terrible"],
    required: true
  },
  {
    id: "recommendation",
    type: "opinion_scale",
    title: "How likely are you to recommend us to a friend?",
    description: "0 = Not at all likely, 10 = Extremely likely",
    max_rating: 10,
    required: true
  },
  {
    id: "features",
    type: "rating",
    title: "Rate our key features",
    description: "Give each feature a star rating",
    max_rating: 5,
    required: true
  },
  {
    id: "feedback",
    type: "text",
    title: "Any additional feedback?",
    description: "Tell us what we could improve or what you loved most",
    placeholder: "Your thoughts...",
    required: false
  },
  {
    id: "thank_you",
    type: "thank_you",
    title: "Thank you for your feedback! 🎉",
    description: "Your responses have been recorded. We really appreciate you taking the time to help us improve.",
    icon: <Check className="w-8 h-8 text-green-500" />
  }
];

export function TypeformDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number | Record<string, number>>>({});
  const [inputValue, setInputValue] = useState("");
  const [selectedChoice, setSelectedChoice] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [features] = useState([
    "User Interface",
    "Performance", 
    "Customer Support",
    "Value for Money"
  ]);
  const [featureRatings, setFeatureRatings] = useState<Record<string, number>>({});

  const currentQuestion = questions[currentStep];
  const isLastStep = currentStep === questions.length - 1;
  const progress = ((currentStep + 1) / questions.length) * 100;

  useEffect(() => {
    // Reset input values when question changes
    const answer = answers[currentQuestion.id];
    setInputValue(typeof answer === "string" ? answer : "");
    setSelectedChoice(typeof answer === "string" ? answer : "");
    setSelectedRating(typeof answer === "number" ? answer : 0);
    setFeatureRatings(typeof answer === "object" && answer !== null ? answer as Record<string, number> : {});
  }, [currentStep, currentQuestion.id, answers]);

  const handleNext = () => {
    // Save current answer
    let answer: string | number | Record<string, number> = inputValue;
    if (currentQuestion.type === "choice") {
      answer = selectedChoice;
    } else if (currentQuestion.type === "rating") {
      answer = featureRatings;
    } else if (currentQuestion.type === "opinion_scale") {
      answer = selectedRating;
    }

    if (currentQuestion.type !== "welcome" && currentQuestion.type !== "thank_you") {
      setAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: answer
      }));
    }

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && canProceed()) {
      handleNext();
    }
  };

  const canProceed = () => {
    if (currentQuestion.type === "welcome" || currentQuestion.type === "thank_you") {
      return true;
    }
    if (!currentQuestion.required) {
      return true;
    }
    
    switch (currentQuestion.type) {
      case "text":
      case "email":
        return inputValue.trim().length > 0;
      case "choice":
        return selectedChoice.length > 0;
      case "rating":
        return Object.keys(featureRatings).length === features.length;
      case "opinion_scale":
        return selectedRating > 0;
      default:
        return true;
    }
  };

  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case "welcome":
      case "thank_you":
        return (
          <div className="text-center space-y-6">
            {currentQuestion.icon && (
              <div className="flex justify-center mb-6">
                {currentQuestion.icon}
              </div>
            )}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {currentQuestion.title}
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                {currentQuestion.description}
              </p>
            </div>
          </div>
        );

      case "text":
      case "email":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {currentQuestion.title}
              </h1>
              {currentQuestion.description && (
                <p className="text-lg text-white/70">
                  {currentQuestion.description}
                </p>
              )}
            </div>
            <div className="max-w-2xl">
              <input
                type={currentQuestion.type === "email" ? "email" : "text"}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={currentQuestion.placeholder}
                className="w-full text-2xl bg-transparent border-0 border-b-2 border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors py-4"
                autoFocus
              />
            </div>
          </div>
        );

      case "choice":
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {currentQuestion.title}
              </h1>
              {currentQuestion.description && (
                <p className="text-lg text-white/70">
                  {currentQuestion.description}
                </p>
              )}
            </div>
            <div className="space-y-4 max-w-2xl">
              {currentQuestion.choices?.map((choice, index) => (
                <button
                  key={choice}
                  onClick={() => setSelectedChoice(choice)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all hover:scale-105 ${
                    selectedChoice === choice
                      ? 'border-white bg-white/10 text-white'
                      : 'border-white/30 text-white/80 hover:border-white/60'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium bg-white/20 rounded-full w-8 h-8 flex items-center justify-center">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-xl">{choice}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case "opinion_scale":
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {currentQuestion.title}
              </h1>
              {currentQuestion.description && (
                <p className="text-lg text-white/70">
                  {currentQuestion.description}
                </p>
              )}
            </div>
            <div className="max-w-4xl">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white/60 text-sm">Not at all likely</span>
                <span className="text-white/60 text-sm">Extremely likely</span>
              </div>
              <div className="flex space-x-2 justify-center">
                {Array.from({ length: currentQuestion.max_rating || 10 }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    onClick={() => setSelectedRating(num)}
                    className={`w-12 h-12 rounded-lg border-2 transition-all hover:scale-110 ${
                      selectedRating === num
                        ? 'border-white bg-white text-gray-900 font-bold'
                        : 'border-white/30 text-white hover:border-white'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case "rating":
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {currentQuestion.title}
              </h1>
              {currentQuestion.description && (
                <p className="text-lg text-white/70">
                  {currentQuestion.description}
                </p>
              )}
            </div>
            <div className="space-y-6 max-w-2xl">
              {features.map((feature) => (
                <div key={feature} className="space-y-3">
                  <h3 className="text-xl text-white font-medium">{feature}</h3>
                  <div className="flex space-x-2">
                    {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
                      <button
                        key={star}
                        onClick={() => setFeatureRatings(prev => ({
                          ...prev,
                          [feature]: star
                        }))}
                        className="transition-all hover:scale-110"
                      >
                        <Star 
                          className={`w-8 h-8 ${
                            (featureRatings[feature] || 0) >= star
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-white/30'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-black   flex flex-col">
      {/* Progress Bar */}
      <div className="w-full h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-4">
          <div className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center">
            <span className="text-sm font-bold text-white">N</span>
          </div>
          <span className="text-white font-medium">NeoForm Survey</span>
        </div>
        <div className="text-white/60 text-sm">
          {currentStep + 1} of {questions.length}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-4xl">
          {renderQuestion()}
        </div>
      </div>

      {/* Navigation */}
      <div className="p-6">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="text-white/80 hover:text-white hover:bg-white/10 disabled:opacity-30"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <div className="flex items-center space-x-4">
            {currentStep > 0 && currentStep < questions.length - 1 && (
              <span className="text-white/60 text-sm">
                Press Enter ↵
              </span>
            )}
            
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="bg-white text-gray-900 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLastStep ? "Finish" : 
               currentQuestion.type === "welcome" ? "Start Survey" :
               currentQuestion.type === "thank_you" ? "Close" : "Next"}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
