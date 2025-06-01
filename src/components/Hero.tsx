
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Om Symbol */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-block p-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full shadow-lg animate-pulse-glow">
              <span className="text-4xl text-white">🕉</span>
            </div>
            <p className="text-lg text-gray-600 mt-2 font-poppins">श्री गणेशाय नमः</p>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-gradient font-poppins">Shanti Success</span>
            <br />
            <span className="text-gray-800 font-poppins">Academy</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium animate-fade-in font-poppins italic" style={{ animationDelay: '0.4s' }}>
            Keep Learning, Keep Growing
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Expert coaching for classes 6th-12th, JEE, NEET & MHT-CET. 
            Experience affordable quality education with concept-focused learning and trusted results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              🎁 Free Demo Lecture
            </Button>
            <Button 
              onClick={() => scrollToSection('courses')}
              variant="outline"
              className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Explore Courses
            </Button>
          </div>

          {/* Special Offer Badge */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="inline-block bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-full shadow-lg animate-pulse">
              <span className="font-bold">🎉 15% OFF - Enroll Before 30th June!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
