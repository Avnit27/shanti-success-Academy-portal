
import React, { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Gallery = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

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

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isPaused) return;

    const scrollStep = 1;
    const scrollInterval = 30;

    const scroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollStep;
      }
    };

    const interval = setInterval(scroll, scrollInterval);
    return () => clearInterval(interval);
  }, [isPaused]);

  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const cardId = parseInt(entry.target.getAttribute('data-card-id') || '0');
        
        setVisibleCards(prev => {
          const newSet = new Set(prev);
          if (entry.isIntersecting) {
            newSet.add(cardId);
          } else {
            newSet.delete(cardId);
          }
          return newSet;
        });
      });
    }, observerOptions);

    const cards = document.querySelectorAll('.mobile-gallery-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section id="gallery" className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 font-poppins">
            Our <span className="text-gradient">Quality Classes</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Experience excellence in education through our modern facilities and expert teaching methods
          </p>
        </div>

        {/* Desktop Scrolling Cards */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 cursor-pointer"
              style={{ width: 'max-content' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* First set of cards */}
              {classImages.map((image) => (
                <Card 
                  key={`first-${image.id}`}
                  className="flex-shrink-0 border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm w-80 h-96 group"
                >
                  <CardContent className="p-0 h-full relative">
                    <div className="relative h-full overflow-hidden rounded-lg">
                      <img 
                        src={image.image} 
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
                      {/* Default content - always visible */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-xl font-bold mb-2 font-poppins">{image.title}</h3>
                      </div>
                      
                      {/* Hover content - shows on hover */}
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                        <div className="text-center text-white">
                          <h3 className="text-2xl font-bold mb-4 font-poppins">{image.title}</h3>
                          <p className="text-base leading-relaxed">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* Duplicate set for infinite loop */}
              {classImages.map((image) => (
                <Card 
                  key={`second-${image.id}`}
                  className="flex-shrink-0 border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm w-80 h-96 group"
                >
                  <CardContent className="p-0 h-full relative">
                    <div className="relative h-full overflow-hidden rounded-lg">
                      <img 
                        src={image.image} 
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
                      {/* Default content - always visible */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-xl font-bold mb-2 font-poppins">{image.title}</h3>
                      </div>
                      
                      {/* Hover content - shows on hover */}
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                        <div className="text-center text-white">
                          <h3 className="text-2xl font-bold mb-4 font-poppins">{image.title}</h3>
                          <p className="text-base leading-relaxed">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Cards */}
        <div className="md:hidden space-y-6">
          {classImages.map((image) => (
            <Card 
              key={`mobile-${image.id}`}
              data-card-id={image.id}
              className="mobile-gallery-card border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-0 relative">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Always visible content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold mb-1 font-poppins">{image.title}</h3>
                    <div className={`transition-all duration-500 overflow-hidden ${
                      visibleCards.has(image.id) 
                        ? 'max-h-20 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-sm leading-relaxed">{image.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12 animate-on-scroll">
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Join thousands of successful students who have achieved their academic goals with our proven teaching methodology
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
