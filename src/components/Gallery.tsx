
import React, { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const Gallery = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const classImages = [
    {
      id: 1,
      title: "Interactive Learning",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
      description: "Students engaged in interactive classroom sessions"
    },
    {
      id: 2,
      title: "Modern Facilities",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop&crop=center",
      description: "State-of-the-art classroom with modern equipment"
    },
    {
      id: 3,
      title: "Expert Faculty",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      description: "Experienced teachers providing quality education"
    },
    {
      id: 4,
      title: "Laboratory Work",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop&crop=center",
      description: "Hands-on practical sessions in well-equipped labs"
    },
    {
      id: 5,
      title: "Group Studies",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&crop=center",
      description: "Collaborative learning environment"
    },
    {
      id: 6,
      title: "Digital Learning",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop&crop=center",
      description: "Technology-enhanced learning methods"
    },
    {
      id: 7,
      title: "Achievement Moments",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop&crop=center",
      description: "Celebrating student success and achievements"
    },
    {
      id: 8,
      title: "Competitive Prep",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&crop=center",
      description: "Intensive preparation for competitive exams"
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
            Our <span className="text-gradient">Quality Classes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience excellence in education through our modern facilities and expert teaching methods
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <Button onClick={scrollLeft} variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button onClick={toggleAutoScroll} variant="outline" className="flex items-center gap-2">
            {isAutoScrolling ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isAutoScrolling ? 'Pause' : 'Play'}
          </Button>
          <Button onClick={scrollRight} variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Scrolling Cards Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className={`flex gap-6 ${isAutoScrolling ? 'animate-scroll-left' : ''}`}
              style={{ width: 'max-content' }}
            >
              {/* First set of cards */}
              {classImages.map((image) => (
                <Card 
                  key={`first-${image.id}`}
                  className="flex-shrink-0 border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm w-80 h-96"
                >
                  <CardContent className="p-0 h-full">
                    <div className="relative h-full overflow-hidden rounded-lg">
                      <img 
                        src={image.image} 
                        alt={image.title}
                        className="w-full h-2/3 object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-xl font-bold mb-2 font-poppins">{image.title}</h3>
                        <p className="text-sm opacity-90">{image.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* Duplicate set for infinite loop */}
              {classImages.map((image) => (
                <Card 
                  key={`second-${image.id}`}
                  className="flex-shrink-0 border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm w-80 h-96"
                >
                  <CardContent className="p-0 h-full">
                    <div className="relative h-full overflow-hidden rounded-lg">
                      <img 
                        src={image.image} 
                        alt={image.title}
                        className="w-full h-2/3 object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-xl font-bold mb-2 font-poppins">{image.title}</h3>
                        <p className="text-sm opacity-90">{image.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful students who have achieved their academic goals with our proven teaching methodology
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
