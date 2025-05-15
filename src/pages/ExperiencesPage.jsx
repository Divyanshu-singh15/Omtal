// File: src/pages/ExperiencesPage.jsx
import React, { useState } from 'react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

// Mock data - would be imported from a data file in a real implementation
const experienceCategories = [
  { id: 'all', name: 'All Experiences' },
  { id: 'dining', name: 'Dining' },
  { id: 'wellness', name: 'Wellness' },
  { id: 'local', name: 'Local Adventures' },
  { id: 'cultural', name: 'Cultural' },
];

// Mock experiences data - would be imported from a data file in a real implementation
const experiencesData = [
  {
    id: 'exp-1',
    title: 'Private Dinner Under the Stars',
    subtitle: 'Exclusive Dining Experience',
    category: 'dining',
    duration: '3 hours',
    capacity: '2-4 guests',
    price: '$299',
    rating: 4.9,
    reviews: 28,
    image: 'https://images.pexels.com/photos/14728166/pexels-photo-14728166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Experience an unforgettable evening with our exclusive rooftop dinner. Our chef will prepare a personalized five-course menu paired with fine wines while you dine under the stars with breathtaking city views.',
    features: [
      'Personalized five-course menu',
      'Premium wine pairing',
      'Dedicated server',
      'Romantic setting with candles and flowers',
      'Panoramic city views'
    ]
  },
  {
    id: 'exp-2',
    title: 'Revitalizing Spa Retreat',
    subtitle: 'Full Day Wellness Experience',
    category: 'wellness',
    duration: '6 hours',
    capacity: '1-2 guests',
    price: '$399',
    rating: 4.8,
    reviews: 42,
    image: 'https://images.pexels.com/photos/3865712/pexels-photo-3865712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Indulge in a full day of pampering with our signature spa retreat. This comprehensive wellness experience includes multiple treatments designed to rejuvenate your body and mind.',
    features: [
      'Aromatherapy massage',
      'Facial treatment',
      'Hydrotherapy session',
      'Healthy lunch at our wellness café',
      'Access to all spa facilities'
    ]
  },
  {
    id: 'exp-3',
    title: 'City Heritage Tour',
    subtitle: 'Guided Cultural Experience',
    category: 'cultural',
    duration: '4 hours',
    capacity: '1-8 guests',
    price: '$149',
    rating: 4.7,
    reviews: 36,
    image: 'https://images.pexels.com/photos/32002203/pexels-photo-32002203/free-photo-of-charming-narrow-street-in-historic-european-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Discover the rich history and cultural heritage of our city with a private guided tour. Visit iconic landmarks, hidden gems, and learn fascinating stories about the city\'s past and present.',
    features: [
      'Professional local guide',
      'Transportation in luxury vehicle',
      'Skip-the-line access to monuments',
      'Refreshments and snacks',
      'Personalized itinerary'
    ]
  },
  {
    id: 'exp-4',
    title: 'Mountain Biking Adventure',
    subtitle: 'Outdoor Excursion',
    category: 'local',
    duration: '5 hours',
    capacity: '2-8 guests',
    price: '$179',
    rating: 4.6,
    reviews: 23,
    image: 'https://images.pexels.com/photos/32065451/pexels-photo-32065451/free-photo-of-scenic-forest-path-with-bridge-in-spring.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Experience the thrill of mountain biking through scenic trails with breathtaking views. This guided adventure is suitable for all experience levels and includes all necessary equipment.',
    features: [
      'Premium mountain bike rental',
      'Experienced guide',
      'Safety equipment',
      'Picnic lunch',
      'Photo package'
    ]
  },
  {
    id: 'exp-5',
    title: 'Culinary Masterclass',
    subtitle: 'Cooking with our Executive Chef',
    category: 'dining',
    duration: '3 hours',
    capacity: '4-12 guests',
    price: '$229',
    rating: 4.9,
    reviews: 31,
    image: 'https://images.pexels.com/photos/3298687/pexels-photo-3298687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Learn the secrets of our award-winning cuisine in this hands-on cooking class led by our executive chef. Create signature dishes and enjoy your creations with paired wines.',
    features: [
      'Hands-on cooking instruction',
      'Recipe booklet to take home',
      'All ingredients and equipment provided',
      'Wine pairing with finished dishes',
      'Chef\'s signature apron gift'
    ]
  },
  {
    id: 'exp-6',
    title: 'Wine Tasting Journey',
    subtitle: 'Guided Tasting Experience',
    category: 'cultural',
    duration: '2 hours',
    capacity: '2-10 guests',
    price: '$159',
    rating: 4.8,
    reviews: 47,
    image: 'https://images.pexels.com/photos/774455/pexels-photo-774455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Embark on a sensory journey through world-class wines guided by our sommelier. Learn about wine regions, grape varieties, and tasting techniques while enjoying premium selections paired with artisanal cheeses.',
    features: [
      'Selection of 6 premium wines',
      'Artisanal cheese and charcuterie',
      'Expert sommelier guidance',
      'Tasting notes journal',
      'Exclusive discount on wine purchases'
    ]
  },
  {
    id: 'exp-7',
    title: 'Sunrise Yoga Session',
    subtitle: 'Rooftop Wellness Experience',
    category: 'wellness',
    duration: '1.5 hours',
    capacity: '1-8 guests',
    price: '$89',
    rating: 4.7,
    reviews: 19,
    image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Begin your day with a revitalizing yoga session on our scenic rooftop as the sun rises over the city. Our certified instructor will guide you through a practice suitable for all levels, followed by a nutritious breakfast.',
    features: [
      'Professional yoga instructor',
      'Yoga mats and props provided',
      'Breathtaking sunrise views',
      'Fresh juice and healthy breakfast',
      'Meditation session'
    ]
  },
  {
    id: 'exp-8',
    title: 'Sailing Excursion',
    subtitle: 'Private Harbor Tour',
    category: 'local',
    duration: '4 hours',
    capacity: '2-6 guests',
    price: '$349',
    rating: 4.9,
    reviews: 16,
    image: 'https://images.pexels.com/photos/868494/pexels-photo-868494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Set sail on a private yacht and explore the coastline with stunning views of the city skyline. This excursion includes swimming stops, gourmet lunch, and premium beverages.',
    features: [
      'Private luxury yacht',
      'Experienced captain and crew',
      'Gourmet lunch and beverages',
      'Swimming and snorkeling equipment',
      'Bluetooth sound system for your music'
    ]
  }
];

const ExperiencesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredExperiences = selectedCategory === 'all' 
    ? experiencesData
    : experiencesData.filter(exp => exp.category === selectedCategory);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/312839/pexels-photo-312839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container relative h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Unforgettable Experiences</h1>
          <p className="text-lg md:text-xl max-w-2xl">Discover curated activities and adventures that will make your stay truly exceptional</p>
        </div>
      </section>
      
      {/* Category Navigation */}
      <Section>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {experienceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </Section>
      
      {/* Experiences Grid */}
      <Section bgColor="bg-neutral-50" spacing="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </Section>
      
      {/* Call to Action */}
      <Section className="text-center" spacing="py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Create Your Perfect Stay
          </h2>
          <p className="text-neutral-600 text-lg mb-8">
            Our concierge team is available to help you customize your experiences and create the perfect itinerary for your stay.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Contact Concierge
            </Button>
            <Button href="/booking" variant="outline" size="lg">
              Book Your Stay
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

const ExperienceCard = ({ experience }) => {
  return (
    <Card
      className="h-full flex flex-col transition-transform duration-300 hover:-translate-y-2"
      image={experience.image}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="inline-block px-3 py-1 bg-primary bg-opacity-10 text-primary text-xs font-medium rounded-full mb-2">
              {experienceCategories.find(cat => cat.id === experience.category)?.name}
            </span>
            <h3 className="font-heading text-xl font-bold">{experience.title}</h3>
            <p className="text-neutral-500 text-sm">{experience.subtitle}</p>
          </div>
          <div className="bg-white shadow-sm rounded-lg p-2 text-center min-w-[60px]">
            <span className="block text-primary font-bold">{experience.price}</span>
            <span className="text-xs text-neutral-500">per person</span>
          </div>
        </div>
        
        <div className="mt-2 flex items-center gap-4 text-sm text-neutral-500">
          <div className="flex items-center">
            <span className="mr-1">⏱</span> {experience.duration}
          </div>
          <div className="flex items-center">
            <span className="mr-1">👥</span> {experience.capacity}
          </div>
        </div>
        
        <p className="mt-4 text-neutral-600 text-sm flex-grow">
          {experience.description}
        </p>
        
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-3 sm:mb-0">
            <span className="text-yellow-400 text-sm mr-1">★</span>
            <span className="font-medium">{experience.rating}</span>
            <span className="text-neutral-400 text-sm ml-1">({experience.reviews} reviews)</span>
          </div>
          <Button href={`/experiences/${experience.id}`} variant="ghost" className="text-primary">
            Learn More
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ExperiencesPage;