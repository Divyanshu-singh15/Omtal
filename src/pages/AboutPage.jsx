// File: src/pages/AboutPage.jsx
import Hero from '../components/sections/Hero';
import Section from '../components/common/Section';
import AmenityFeature from '../components/sections/AmenityFeature';
import ContactForm from '../components/sections/ContactForm';
import TestimonialCard from '../components/sections/TestimonialCard';
import Carousel from '../components/common/Carousel';

// Placeholder data - would come from API in real implementation
import { testimonials } from '../data/mockData';

const AboutPage = () => {
  // Mock data for amenities
  const amenities = [
    {
      title: "Our Heritage & Story",
      description: "Established in 1950, our luxury hotel has been providing exceptional service and creating memorable experiences for over seven decades. What started as a small family-owned property has evolved into one of the most prestigious hotels in the region, while maintaining its original charm and dedication to personalized service.",
      image: "https://images.pexels.com/photos/1447273/pexels-photo-1447273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Family-owned since 1950",
        "Award-winning hospitality",
        "Continuously renovated and modernized",
        "Sustainable practices since 2010",
        "Community engagement initiatives",
        "Partnerships with local artisans"
      ],
      buttonText: "Discover Our Timeline",
      buttonLink: "/history",
    },
    {
      title: "Commitment to Excellence",
      description: "Our dedicated team works tirelessly to ensure every aspect of your stay exceeds expectations. From the moment you arrive until your departure, we aim to create a seamless experience where every detail is considered and every need anticipated.",
      image: "https://images.pexels.com/photos/6345318/pexels-photo-6345318.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Personalized guest services",
        "Attention to every detail",
        "Regular staff training programs",
        "Quality assurance protocols",
        "Guest feedback implementation",
        "Continuous improvement philosophy"
      ],
      buttonText: "Meet Our Team",
      buttonLink: "/team",
      imagePosition: "left",
      bgColor: "bg-neutral-50",
    }
  ];

  // Stats data
  const stats = [
    { number: "125", label: "Luxury Rooms & Suites" },
    { number: "4", label: "Restaurants & Lounges" },
    { number: "75", label: "Years of Excellence" },
    { number: "24/7", label: "Guest Services" }
  ];

  return (
    <>
      <Hero 
        title="About Our Luxury Hotel"
        subtitle="Discover our story of luxury, hospitality and excellence"
        fallbackImageSrc="https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="h-[70vh]"
      />
      
      <Section
        title="A Legacy of Luxury"
        subtitle="For over seven decades, we've been defining the art of hospitality"
        spacing="py-20"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-neutral-700 mb-8">
            Located in the heart of the city, our hotel combines timeless elegance with modern sophistication to create a unique luxury experience. Our commitment to excellence and attention to detail have earned us numerous accolades and the loyalty of guests from around the world.
          </p>
          <p className="text-lg text-neutral-700">
            From our exquisite accommodations to our world-class dining and spa facilities, every aspect of our hotel is designed to provide an unforgettable experience that exceeds expectations and creates lasting memories.
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="font-heading text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Dynamic Amenity Features */}
      {amenities.map((amenity, index) => (
        <AmenityFeature 
          key={index}
          title={amenity.title}
          description={amenity.description}
          features={amenity.features}
          image={amenity.image}
          buttonText={amenity.buttonText}
          buttonLink={amenity.buttonLink}
          imagePosition={amenity.imagePosition || "right"}
          bgColor={amenity.bgColor || "bg-white"}
        />
      ))}
      
      {/* Testimonials Section */}
      <Section
        bgColor="bg-neutral-50"
        title="What Our Guests Say"
        subtitle="Experiences shared by our valued guests"
        centered
      >
        <Carousel
          slides={testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
          showArrows={true}
          showDots={true}
          autoPlay={true}
          interval={6000}
          className="max-w-4xl mx-auto"
        />
      </Section>
      
      {/* Contact Form */}
      <ContactForm 
        title="Get in Touch"
        subtitle="Have questions about our hotel? We're here to help."
        compact={true}
      />
    </>
  );
};

export default AboutPage;