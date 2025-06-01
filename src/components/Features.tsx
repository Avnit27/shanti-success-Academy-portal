
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: "💰",
      title: "Affordable Quality Education",
      description: "High-quality coaching at budget-friendly fees, making excellence accessible to all",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "👨‍🏫",
      title: "Expert & Supportive Teachers",
      description: "Experienced faculty members dedicated to student success with personalized attention",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: "📖",
      title: "Concept-Focused Learning",
      description: "Emphasis on understanding fundamentals rather than rote memorization",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: "📝",
      title: "Regular Tests & Feedback",
      description: "Continuous assessment and detailed feedback to track progress and improvement",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "💬",
      title: "Personal Doubt Solving",
      description: "One-on-one doubt clearing sessions to ensure no student is left behind",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: "🌟",
      title: "Trusted Results & Success Stories",
      description: "Proven track record of student success in boards and competitive exams",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
            Why Choose <span className="text-gradient">Us?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes Shanti Success Academy the preferred choice for students and parents
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-on-scroll group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-poppins">
                ✅ Quality Assurance
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-2xl">🏆</span>
                  <span className="text-gray-700 font-medium">Proven Results</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-2xl">🎯</span>
                  <span className="text-gray-700 font-medium">Goal Oriented</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-2xl">💝</span>
                  <span className="text-gray-700 font-medium">Student Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
