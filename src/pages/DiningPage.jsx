// File: src/pages/DiningPage.jsx
import { useState } from 'react';
import Hero from '../components/sections/Hero';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Carousel from '../components/common/Carousel';

// Mock data (would come from API in real implementation)
const restaurants = [
  {
    id: 1,
    name: "The Grand Restaurant",
    type: "Fine Dining",
    description: "Experience culinary artistry at its finest in our award-winning signature restaurant. Our chef combines local ingredients with international techniques to create unforgettable gastronomic journeys.",
    hours: "Daily, 6:30 PM - 10:30 PM",
    image: "https://images.pexels.com/photos/2504980/pexels-photo-2504980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true
  },
  {
    id: 2,
    name: "Azur",
    type: "Mediterranean",
    description: "Enjoy the flavors of the Mediterranean coast in a relaxed atmosphere with stunning views. Fresh seafood, homemade pasta, and regional specialties are complemented by an extensive wine selection.",
    hours: "Daily, 12:00 PM - 10:00 PM",
    image: "https://images.pexels.com/photos/29058903/pexels-photo-29058903/free-photo-of-elegant-hotel-lobby-with-grand-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true
  },
  {
    id: 3,
    name: "The Lounge",
    type: "Casual Dining & Cocktails",
    description: "Our elegant lounge offers light meals, afternoon tea, and craft cocktails in a sophisticated setting. The perfect place to unwind or meet with friends throughout the day.",
    hours: "Daily, 10:00 AM - 12:00 AM",
    image: "https://images.pexels.com/photos/16935899/pexels-photo-16935899/free-photo-of-tables-decorated-with-flowers-in-luxury-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false
  },
  {
    id: 4,
    name: "Poolside Grill",
    type: "Casual Outdoor Dining",
    description: "Savor light meals and refreshing drinks by the pool. Our grill serves fresh salads, gourmet sandwiches, and seasonal specialties in a relaxed outdoor setting.",
    hours: "Daily (Seasonal), 11:00 AM - 6:00 PM",
    image: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false
  }
];

const culinaryExperiences = [
  {
    id: 1,
    title: "Chef's Table Experience",
    description: "An exclusive dining experience where our executive chef prepares a personalized multi-course tasting menu right before your eyes. Includes wine pairings selected by our sommelier.",
    image: "https://images.pexels.com/photos/14299677/pexels-photo-14299677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$180 per person"
  },
  {
    id: 2,
    title: "Wine Tasting Journey",
    description: "Discover exceptional wines from around the world guided by our expert sommelier. Learn about wine regions, grape varieties, and perfect food pairings in this educational experience.",
    image: "https://images.pexels.com/photos/14299677/pexels-photo-14299677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$95 per person"
  },
  {
    id: 3,
    title: "Private Beach Dinner",
    description: "Enjoy a romantic dinner under the stars with the sound of gentle waves in the background. This private experience includes a customized menu and dedicated service.",
    image: "https://images.pexels.com/photos/13648790/pexels-photo-13648790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$250 per couple"
  }
];

const specialOffers = [
  {
    id: 1,
    title: "Sunday Brunch",
    description: "Indulge in our lavish Sunday brunch featuring international cuisine, live cooking stations, free-flowing champagne, and live jazz music.",
    time: "Sundays, 11:30 AM - 3:00 PM",
    price: "$75 per person"
  },
  {
    id: 2,
    title: "Afternoon Tea",
    description: "Savor our traditional afternoon tea with a selection of finger sandwiches, freshly baked scones, pastries, and premium teas.",
    time: "Daily, 2:00 PM - 5:00 PM",
    price: "$45 per person"
  },
  {
    id: 3,
    title: "Seafood Night",
    description: "Feast on the freshest seafood every Friday night, featuring a spectacular display of local and imported delicacies from the ocean.",
    time: "Fridays, 6:30 PM - 10:30 PM",
    price: "$90 per person"
  }
];

const DiningPage = () => {
  const [activeTab, setActiveTab] = useState("restaurants");

  return (
    <>
      <Hero 
        title="Exquisite Dining Experiences"
        subtitle="Culinary journeys that delight all your senses"
        buttonText="Make a Reservation"
        buttonLink="/dining/reservation"
        fallbackImageSrc="https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="h-[60vh]"
      />
      
      {/* Navigation Tabs */}
      <div className="bg-neutral-50 border-b border-neutral-200 sticky top-20 z-30">
        <div className="container">
          <div className="flex overflow-x-auto whitespace-nowrap py-4 gap-8">
            <TabButton 
              active={activeTab === "restaurants"} 
              onClick={() => setActiveTab("restaurants")}
            >
              Restaurants & Bars
            </TabButton>
            <TabButton 
              active={activeTab === "experiences"} 
              onClick={() => setActiveTab("experiences")}
            >
              Culinary Experiences
            </TabButton>
            <TabButton 
              active={activeTab === "offers"} 
              onClick={() => setActiveTab("offers")}
            >
              Special Offers
            </TabButton>
          </div>
        </div>
      </div>
      
      {/* Featured Restaurants Section */}
      {activeTab === "restaurants" && (
        <>
          {/* Featured Restaurants */}
          <Section
            title="Our Restaurants & Bars"
            subtitle="Embark on a culinary journey with our diverse dining options"
            centered
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {restaurants.filter(r => r.featured).map((restaurant) => (
                <FeaturedRestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          </Section>
          
          {/* Additional Dining Options */}
          <Section
            bgColor="bg-neutral-50"
            title="Additional Dining Options"
            centered
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {restaurants.filter(r => !r.featured).map((restaurant) => (
                <Card
                  key={restaurant.id}
                  image={restaurant.image}
                  title={restaurant.name}
                  subtitle={restaurant.type}
                  className="h-full transition-transform duration-300 hover:-translate-y-2"
                >
                  <p className="text-neutral-600 mb-4">{restaurant.description}</p>
                  <p className="text-sm text-neutral-500 italic mb-4">{restaurant.hours}</p>
                  <Button href={`/dining/${restaurant.id}`} variant="outline" size="sm">
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </Section>
        </>
      )}
      
      {/* Culinary Experiences Section */}
      {activeTab === "experiences" && (
        <Section
          title="Exclusive Culinary Experiences"
          subtitle="Create unforgettable memories with our unique dining experiences"
          centered
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culinaryExperiences.map((experience) => (
              <Card
                key={experience.id}
                image={experience.image}
                title={experience.title}
                className="h-full transition-transform duration-300 hover:-translate-y-2"
              >
                <p className="text-neutral-600 mb-4">{experience.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-medium">{experience.price}</span>
                  <Button href={`/dining/experience/${experience.id}`} variant="outline" size="sm">
                    Book Experience
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 bg-primary/5 p-8 rounded-lg border border-primary/10">
            <h3 className="font-heading text-2xl mb-4 text-center">Private Dining</h3>
            <p className="text-neutral-600 text-center mb-6">
              Looking for a special venue for your celebration? Our private dining rooms offer 
              elegant settings for intimate gatherings and special occasions.
            </p>
            <div className="text-center">
              <Button href="/dining/private" variant="primary">
                Inquire About Private Dining
              </Button>
            </div>
          </div>
        </Section>
      )}
      
      {/* Special Offers Section */}
      {activeTab === "offers" && (
        <Section
          title="Special Dining Offers"
          subtitle="Indulge in our seasonal and weekly dining promotions"
          centered
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialOffers.map((offer) => (
              <Card
                key={offer.id}
                title={offer.title}
                className="h-full transition-transform duration-300 hover:-translate-y-2 bg-neutral-50 border border-neutral-100"
              >
                <p className="text-neutral-600 mb-4">{offer.description}</p>
                <p className="text-sm text-neutral-500 italic mb-2">{offer.time}</p>
                <p className="text-primary font-medium mb-4">{offer.price}</p>
                <Button href={`/dining/offer/${offer.id}`} variant="outline" size="sm">
                  Reserve Now
                </Button>
              </Card>
            ))}
          </div>
        </Section>
      )}
      
      {/* CTA Section - Always Visible */}
      <Section
        bgColor="bg-neutral-800 text-white"
        className="text-center"
        spacing="py-20"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Reservations
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            For reservations or special requests, please contact our dining concierge.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center">
              <span className="text-accent mr-3">📞</span>
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="hidden md:block text-neutral-500">|</div>
            <div className="flex items-center">
              <span className="text-accent mr-3">✉️</span>
              <span>dining@luxuryhotel.com</span>
            </div>
          </div>
          <Button href="/dining/reservation" variant="accent" size="lg">
            Make a Reservation
          </Button>
        </div>
      </Section>
    </>
  );
};

const FeaturedRestaurantCard = ({ restaurant }) => {
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col md:flex-row">
      <div className="md:w-2/5 relative overflow-hidden">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ height: '100%', minHeight: '300px' }}
        />
      </div>
      <div className="md:w-3/5 p-6 flex flex-col">
        <div>
          <h3 className="font-heading text-2xl mb-2">{restaurant.name}</h3>
          <p className="text-primary text-sm font-medium mb-4">{restaurant.type}</p>
          <p className="text-neutral-600 mb-4">{restaurant.description}</p>
          <p className="text-sm text-neutral-500 italic mb-6">{restaurant.hours}</p>
        </div>
        <div className="mt-auto flex justify-between items-center">
          <Button href={`/dining/${restaurant.id}`} variant="outline" size="sm">
            View Menu
          </Button>
          <Button href={`/dining/reservation?restaurant=${restaurant.id}`} variant="primary" size="sm">
            Reserve a Table
          </Button>
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ children, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 font-medium border-b-2 transition-colors duration-200 ${
        active 
          ? 'text-primary border-primary' 
          : 'text-neutral-500 border-transparent hover:text-primary hover:border-primary/30'
      }`}
    >
      {children}
    </button>
  );
};

export default DiningPage;