
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">🕉</span>
              </div>
              <div>
                <h3 className="font-bold text-xl font-poppins">Shanti Success Academy</h3>
                <p className="text-gray-300 italic">Keep Learning, Keep Growing</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Empowering students with quality education, expert guidance, and proven results. 
              Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <span className="text-sm">📷</span>
              </a>
              <a href="https://wa.me/919324714072" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <span className="text-sm">📱</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-poppins">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Courses', 'Features', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-poppins">Contact Info</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <span className="text-blue-400">📍</span>
                <div>
                  <p className="text-sm">Shop No.16, Phase 1,</p>
                  <p className="text-sm">Pavitra Dhrushti, Pavitra Dham,</p>
                  <p className="text-sm">Near Sunteck OneWorld,</p>
                  <p className="text-sm">Tivri Road, Naigaon(E), 401208</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400">📱</span>
                <div>
                  <p className="font-semibold">9324714072</p>
                  <p className="text-sm">Ambuj Pandey</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Shanti Success Academy. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🕉 श्री गणेशाय नमः</span>
              <span>•</span>
              <span>Made with ❤️ for Education</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
