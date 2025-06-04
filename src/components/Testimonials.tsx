
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Youtube } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      class: "XII Science",
      exam: "JEE Main",
      rating: 5,
      text: "Thanks to Shanti Success Academy, I cleared JEE Main with 98.5 percentile! The concept-focused teaching and regular doubt sessions really helped.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Arjun Patel",
      class: "XII Science",
      exam: "NEET",
      rating: 5,
      text: "The faculty here is amazing! They made Biology so easy to understand. Scored 650+ in NEET thanks to their guidance.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Sneha Gupta",
      class: "X CBSE",
      exam: "Board Exams",
      rating: 5,
      text: "Improved from 75% to 92% in just one year! The teachers are very supportive and always available for doubts.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Rahul Singh",
      class: "XII Commerce",
      exam: "Board Exams",
      rating: 5,
      text: "Best coaching for commerce stream! The accounts and economics classes were exceptional. Highly recommend!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const handleYouTubeClick = () => {
    window.open('https://youtube.com/@shantisuccessacademy', '_blank');
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our successful students who achieved their dreams with Shanti Success Academy
          </p>
        </div>

        {/* YouTube Channel Feature */}
        <div className="mb-16 animate-on-scroll">
          <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-0 shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <Youtube className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 font-poppins">
                    📺 Follow Our YouTube Channel
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Watch free lectures, success stories, and study tips on our YouTube channel
                  </p>
                  <Button 
                    onClick={handleYouTubeClick}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Youtube className="w-4 h-4 mr-2" />
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Desktop Testimonials Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-on-scroll bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover shadow-lg"
                  />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 font-poppins">
                  {testimonial.name}
                </CardTitle>
                <p className="text-sm text-gray-600">{testimonial.class} | {testimonial.exam}</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Strip Layout */}
        <div className="md:hidden space-y-4">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex items-start p-4 rounded-xl shadow-lg bg-white animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover shadow-lg flex-shrink-0 mr-4"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-gray-800 font-poppins">
                    {testimonial.name}
                  </h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-2">{testimonial.class} | {testimonial.exam}</p>
                <p className="text-sm text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <div className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full shadow-lg">
            <p className="font-semibold text-lg">
              🎯 Join 500+ Successful Students | 📞 Call: 9324714072
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
