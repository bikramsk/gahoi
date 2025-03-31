import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const bannerImages = [
    {
      desktop: '/Banner-1.webp',
      mobile: '/banner-1-phone.webp',
      title: 'Welcome to',
      subtitle: 'GAHOI SHAKTI JAN KALYAN SAMITI',
      titleColor: 'text-white',
      subtitleColor: 'text-yellow-300'
    },
    {
      desktop: '/Banner-2.webp',
      mobile: '/banner-2-phone.webp',
      title: 'Find Your Perfect Match',
      subtitle: 'WHERE HEARTS UNITE AND NEW BEGINNINGS START',
      titleColor: 'text-white',
      subtitleColor: 'text-yellow-300'
    },
    {
      desktop: '/Banner-3.webp',
      mobile: '/banner-3-phone.webp',
      title: 'Trusted Matches',
      subtitle: 'FOR A LIFETIME OF HAPPINESS',
      titleColor: 'text-white',
      subtitleColor: 'text-yellow-300'
    },
    {
      desktop: '/Banner-4.webp',
      mobile: '/banner-4-phone.webp',
      title: 'Making Wedding',
      subtitle: 'DREAM COME TRUE',
      titleColor: 'text-white',
      subtitleColor: 'text-yellow-300'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const currentBanner = bannerImages[currentImageIndex];
  const imagePath = isMobile ? currentBanner.mobile : currentBanner.desktop;

  return (
    <section className="relative h-[40vh] sm:h-[50vh] md:h-[80vh] lg:h-screen w-full overflow-hidden">
      {/* Carousel for all screens */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat transition-all duration-1000"
        style={{ 
          backgroundImage: `url("${imagePath}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
      </div>

      {/* Text - Mobile Only */}
      <div className="md:hidden absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4">
          <h2 className={`text-2xl sm:text-3xl font-cursive mb-2 sm:mb-3 ${currentBanner.titleColor} drop-shadow-lg`}>
            {currentBanner.title}
          </h2>
          <p className={`text-sm sm:text-xl font-bold ${currentBanner.subtitleColor} drop-shadow-lg tracking-wider`}>
            {currentBanner.subtitle}
          </p>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="flex absolute right-2 sm:right-4 md:right-8 top-[65%] md:top-1/2 transform -translate-y-1/2 z-20 flex-col space-y-1.5 sm:space-y-2 md:space-y-4">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-yellow-300 scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

   
    </section>
  );
};

export default HeroSection; 