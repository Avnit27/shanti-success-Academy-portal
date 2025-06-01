
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: "📱",
      title: "Phone",
      content: "9324714072",
      subtitle: "Ambuj Pandey",
      action: "tel:+919324714072"
    },
    {
      icon: "📍",
      title: "Address",
      content: "Shop No.16, Phase 1, Pavitra Dhrushti, Pavitra Dham",
      subtitle: "Near Sunteck OneWorld, Tivri Road, Naigaon(E), 401208",
      action: "https://maps.google.com/?q=Pavitra+Dhrushti+Naigaon+East"
    },
    {
      icon: "📧",
      title: "Social Media",
      content: "@shantisuccessacademy",
      subtitle: "Facebook | Instagram | WhatsApp",
      action: "#"
    }
  ];

  const quickLinks = [
    { name: "Free Demo Booking", action: "tel:+919324714072" },
    { name: "Course Enquiry", action: "tel:+919324714072" },
    { name: "Fee Structure", action: "tel:+919324714072" },
    { name: "Admission Process", action: "tel:+919324714072" }
  ];

  const handleFeedbackClick = () => {
    // Redirect to Google Forms
    window.open('https://forms.google.com/your-feedback-form-link', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your journey to success? Contact us today for more information or to book your free demo lecture.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{info.icon}</div>
                <CardTitle className="text-xl font-bold text-gray-800 font-poppins">
                  {info.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-800 font-semibold mb-2">{info.content}</p>
                <p className="text-gray-600 text-sm mb-4">{info.subtitle}</p>
                <Button 
                  onClick={() => window.open(info.action, '_blank')}
                  variant="outline"
                  className="w-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
                >
                  Contact Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="animate-on-scroll mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-800 font-poppins">
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickLinks.map((link, index) => (
                  <Button
                    key={index}
                    onClick={() => window.open(link.action, '_blank')}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-auto py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="font-semibold">{link.name}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* QR Code and Feedback Form Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-on-scroll">
          {/* QR Code Section */}
          <div className="text-center">
            <div className="inline-block bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-4 font-poppins">
                📲 Scan to Know More
              </h4>
              <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
                <span className="text-gray-500 text-sm">QR Code</span>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                Scan with your phone camera for instant access
              </p>
            </div>
          </div>

          {/* Feedback Form Card */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">📝</div>
                <CardTitle className="text-xl font-bold text-gray-800 font-poppins">
                  Share Your Feedback
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Help us improve by sharing your experience and suggestions
                </p>
                <Button 
                  onClick={handleFeedbackClick}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                >
                  📝 Give Feedback
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold mb-4 font-poppins">
              🚀 Ready to Excel in Your Studies?
            </h3>
            <p className="text-xl mb-6">
              Join hundreds of successful students at Shanti Success Academy
            </p>
            <Button 
              onClick={() => window.open('tel:+919324714072', '_blank')}
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold"
            >
              📞 Call Now: 9324714072
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
