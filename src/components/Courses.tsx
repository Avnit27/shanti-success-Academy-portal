
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Courses = () => {
  const courses = [
    {
      title: "6th to 10th (SSC, CBSE)",
      description: "Comprehensive foundation building for secondary education",
      subjects: ["Mathematics", "Science", "English", "Social Studies"],
      icon: "🎓",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      title: "XI & XII (Science)",
      description: "Advanced preparation for higher secondary science stream",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
      icon: "🔬",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100"
    },
    {
      title: "XI & XII (Commerce)",
      description: "Expert guidance for commerce stream students",
      subjects: ["Accountancy", "Economics", "Business Studies", "Mathematics"],
      icon: "📊",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100"
    },
    {
      title: "JEE Preparation",
      description: "Intensive coaching for Joint Entrance Examination",
      subjects: ["Physics", "Chemistry", "Mathematics"],
      icon: "⚡",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      title: "NEET Preparation",
      description: "Medical entrance exam preparation with expert faculty",
      subjects: ["Physics", "Chemistry", "Biology"],
      icon: "🩺",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      title: "MHT-CET",
      description: "Maharashtra state entrance exam coaching",
      subjects: ["Physics", "Chemistry", "Mathematics"],
      icon: "🎯",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50"
    }
  ];

  const handleSpecialOffersClick = () => {
    // This will redirect to your books website
    window.open('https://your-books-website.com', '_blank');
  };

  return (
    <section id="courses" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
            Our <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive coaching programs designed to help students excel in academics and competitive exams
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-on-scroll bg-gradient-to-br ${course.bgGradient}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${course.gradient} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  <span className="text-3xl">{course.icon}</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 font-poppins">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{course.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {course.subjects.map((subject, subIndex) => (
                    <Badge 
                      key={subIndex} 
                      variant="secondary" 
                      className="bg-white/70 text-gray-700 hover:bg-white/90"
                    >
                      {subject}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Animated Special Offers Button */}
        <div className="fixed bottom-8 right-8 z-40">
          <Button
            onClick={handleSpecialOffersClick}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse hover:animate-bounce text-lg font-bold"
          >
            📚 Special Offers on Books!
          </Button>
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg">
            <p className="font-semibold text-lg">
              📞 Call for detailed course information: <span className="font-bold">9324714072</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
