// File: src/components/sections/AmenityFeature.jsx
import { useState } from 'react';
import Button from '../common/Button';

const AmenityFeature = ({ 
  title,
  description,
  features = [],
  image,
  buttonText = "Learn More",
  buttonLink = "#",
  imagePosition = "right",
  bgColor = "bg-white",
}) => {
  const [expandedFeatures, setExpandedFeatures] = useState(false);
  
  // Calculate how many features to show initially
  const initialFeatureCount = 4;
  const hasMoreFeatures = features.length > initialFeatureCount;
  
  const displayedFeatures = expandedFeatures 
    ? features 
    : features.slice(0, initialFeatureCount);

  return (
    <div className={`${bgColor} py-16`}>
      <div className="container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          imagePosition === "left" ? "" : "lg:flex-row-reverse"
        }`}>
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto object-cover" 
              />
            </div>
            
            {/* Optional decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full hidden lg:block"></div>
          </div>
          
          {/* Content Section */}
          <div className="lg:px-6">
            <h2 className="font-heading text-3xl font-bold mb-4">{title}</h2>
            <p className="text-neutral-600 mb-6">{description}</p>
            
            {/* Features List */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {displayedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 text-primary text-xl">✓</div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Show more/less button for features */}
              {hasMoreFeatures && (
                <button 
                  onClick={() => setExpandedFeatures(!expandedFeatures)}
                  className="mt-4 text-primary font-medium hover:text-primary-dark transition-colors duration-200"
                >
                  {expandedFeatures ? "Show Less" : `Show All (${features.length})`}
                </button>
              )}
            </div>
            
            <Button 
              href={buttonLink} 
              variant="primary"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenityFeature;