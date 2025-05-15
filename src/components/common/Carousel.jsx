import { useState, useEffect, useRef } from 'react';

const Carousel = ({ 
  slides, 
  autoPlay = true, 
  interval = 5000, 
  showArrows = true,
  showDots = true,
  className = '',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    
    if (autoPlay) {
      timeoutRef.current = setTimeout(() => {
        setCurrentSlide((prevSlide) => 
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
      }, interval);
    }
    
    return () => {
      resetTimeout();
    };
  }, [currentSlide, autoPlay, interval, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div 
        className="whitespace-nowrap transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className="inline-block w-full whitespace-normal"
          >
            {slide}
          </div>
        ))}
      </div>
      
      {showArrows && (
        <>
          <button 
            onClick={goToPreviousSlide} 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 z-10 hover:bg-white transition-colors duration-200"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button 
            onClick={goToNextSlide} 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 z-10 hover:bg-white transition-colors duration-200"
            aria-label="Next slide"
          >
            →
          </button>
        </>
      )}
      
      {showDots && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index 
                  ? 'bg-primary' 
                  : 'bg-white/50 hover:bg-white/80'
              } transition-colors duration-200`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;