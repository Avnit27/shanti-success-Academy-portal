
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { number: '500+', label: 'Students Taught', color: 'from-blue-500 to-blue-600' },
    { number: '95%', label: 'Success Rate', color: 'from-green-500 to-green-600' },
    { number: '8+', label: 'Years Experience', color: 'from-purple-500 to-purple-600' },
    { number: '100%', label: 'Dedicated Support', color: 'from-orange-500 to-orange-600' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
            About <span className="text-gradient">Our Academy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Shanti Success Academy is dedicated to providing affordable, quality education 
            with a focus on concept-based learning and personalized attention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="animate-on-scroll">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 font-poppins text-center">
              Our Mission & Vision
            </h3>
            <div className="text-gray-700 text-lg leading-relaxed text-center">
              <p>
                At Shanti Success Academy, we believe that every student has the potential 
                to excel. Our mission is to unlock that potential through innovative teaching 
                methods, personalized attention, and unwavering support. We specialize in 
                coaching students from 6th to 12th grade across multiple boards (SSC, CBSE) 
                and prepare them for competitive exams like JEE, NEET, and MHT-CET with proven 
                strategies and expert guidance. Our vision is to be the most trusted educational 
                institution in the region, known for producing confident, successful students 
                who are well-prepared for their future endeavors.
              </p>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-xl">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <span className="text-5xl">📚</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">
                    Excellence in Education
                  </h4>
                  <p className="text-gray-600">
                    Committed to nurturing young minds with quality education and values
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-on-scroll">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 font-poppins`}>
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
