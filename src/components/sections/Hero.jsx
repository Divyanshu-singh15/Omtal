import { useEffect, useState, useRef } from 'react';
import Button from '../common/Button';

const Hero = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink, 
  videoSrc, 
  fallbackImageSrc,
  height = 'h-screen',
  overlay = true,
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoLoad = () => {
      setIsVideoLoaded(true);
    };

    if (videoRef.current) {
      if (videoRef.current.readyState >= 3) {
        // If video is already loaded
        setIsVideoLoaded(true);
      } else {
        // Wait for video to load
        videoRef.current.addEventListener('canplay', handleVideoLoad);
      }
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('canplay', handleVideoLoad);
      }
    };
  }, []);

  return (
    <div className={`relative ${height} overflow-hidden`}>
      {/* Fallback image (shown until video loads) */}
      {fallbackImageSrc && (
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            videoSrc && isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ backgroundImage: `url(${fallbackImageSrc})` }}
        />
      )}
      
      {/* Background video */}
      {videoSrc && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
      {/* Dark overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      )}
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {subtitle}
            </p>
          )}
          {buttonText && buttonLink && (
            <Button 
              href={buttonLink} 
              variant="primary" 
              size="lg"
              className="backdrop-blur-sm"
            >
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;