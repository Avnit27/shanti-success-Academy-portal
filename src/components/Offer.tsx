
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Offer = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-on-scroll">
          <div className="mb-6 md:mb-8">
            <span className="text-4xl md:text-6xl animate-bounce">🎁</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 font-poppins px-4">
            Special Offer!
          </h2>
          
          <div className="max-w-4xl mx-auto px-4">
            <Card className="bg-white/95 backdrop-blur-lg border-0 shadow-2xl animate-scale-in">
              <CardContent className="p-6 md:p-8 lg:p-12">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4 font-poppins">
                      🆓 FREE DEMO LECTURE
                    </h3>
                    <p className="text-lg md:text-xl text-gray-600 mb-4 md:mb-6">
                      Experience our teaching methodology with a complimentary demo session
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4 mb-4 md:mb-6">
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-orange-500">15%</div>
                        <div className="text-xs md:text-sm text-gray-600">OFF</div>
                      </div>
                      <div className="text-2xl md:text-4xl">+</div>
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-green-500">FREE</div>
                        <div className="text-xs md:text-sm text-gray-600">Demo</div>
                      </div>
                      <div className="text-2xl md:text-4xl">+</div>
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-blue-500">FREE</div>
                        <div className="text-xs md:text-sm text-gray-600">Consultancy</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 md:p-6 rounded-2xl shadow-lg mb-4 md:mb-6">
                      <div className="text-xs md:text-sm uppercase tracking-wide mb-2">Limited Time Offer</div>
                      <div className="text-lg md:text-2xl font-bold mb-2">Enroll Before</div>
                      <div className="text-2xl md:text-4xl font-bold">30th June</div>
                    </div>
                    
                    <Button 
                      onClick={scrollToContact}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full md:w-auto"
                    >
                      Store 🛒
                    </Button>
                  </div>
                </div>
                
                <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-green-500 text-lg md:text-xl">✅</span>
                      <span className="text-sm md:text-base text-gray-700">No Hidden Charges</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-green-500 text-lg md:text-xl">✅</span>
                      <span className="text-sm md:text-base text-gray-700">Expert Faculty</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-green-500 text-lg md:text-xl">✅</span>
                      <span className="text-sm md:text-base text-gray-700">Proven Results</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-green-500 text-lg md:text-xl">✅</span>
                      <span className="text-sm md:text-base text-gray-700">Free Consultancy</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-white/90 text-base md:text-lg mt-6 md:mt-8 animate-pulse px-4">
            📞 Call now: <span className="font-bold">9324714072</span> | Don't miss this opportunity!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
