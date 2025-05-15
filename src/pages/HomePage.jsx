// File: src/pages/HomePage.jsx
import { useState } from 'react';
import Hero from '../components/sections/Hero';
import BookingBar from '../components/sections/BookingBar';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import Carousel from '../components/common/Carousel';
import Button from '../components/common/Button';
import RoomCard from '../components/sections/RoomCard';
import TestimonialCard from '../components/sections/TestimonialCard';

// Placeholder data - would come from API in real implementation
import { rooms, experiences, testimonials } from '../data/mockData';

const HomePage = () => {
  return (
    <>
      <Hero 
        title="Experience Luxury & Comfort"
        subtitle="Discover a hotel that defines a new dimension of luxury"
        buttonText="Book Your Stay"
        buttonLink="/booking"
        videoSrc="/videos/herovideo.mp4"
        fallbackImageSrc="https://images.pexels.com/photos/1661566/pexels-photo-1661566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <BookingBar />
      
      {/* Rooms & Suites Section */}
      <Section
        title="Elegant Rooms & Suites"
        subtitle="Immerse yourself in comfort with our thoughtfully designed accommodations"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.slice(0, 3).map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/rooms" variant="outline">
            View All Rooms
          </Button>
        </div>
      </Section>
      
      {/* About Section */}
      <Section
        bgColor="bg-neutral-50"
        className="relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              A Sanctuary of Luxury in the Heart of the City
            </h2>
            <p className="text-neutral-600 mb-6">
              Nestled in the most prestigious district, our hotel combines timeless elegance with modern sophistication. Since opening our doors in 1950, we have been dedicated to providing exceptional service and creating memorable experiences for our guests.
            </p>
            <p className="text-neutral-600 mb-8">
              Our commitment to excellence has earned us recognition as one of the leading luxury hotels in the region. We invite you to experience the perfect blend of heritage and contemporary luxury.
            </p>
            <Button href="/about" variant="primary">
              Discover Our Story
            </Button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <img
              src="https://images.pexels.com/photos/32061600/pexels-photo-32061600/free-photo-of-old-colonial-hotel-building-with-flags-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Hotel exterior"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute top-8 -left-8 w-24 h-24 bg-primary rounded-lg flex items-center justify-center text-white text-center p-2 shadow-lg hidden md:flex">
              <div>
                <div className="font-heading text-2xl font-bold">75</div>
                <div className="text-xs">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Experiences Section */}
      <Section
        title="Unforgettable Experiences"
        subtitle="Indulge in exceptional experiences that will make your stay truly memorable"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.slice(0, 3).map((experience) => (
            <Card
              key={experience.id}
              title={experience.title}
              subtitle={experience.subtitle}
              image={experience.image}
              className="h-full transition-transform duration-300 hover:-translate-y-2"
            >
              <p className="text-neutral-600 mb-4">{experience.description}</p>
              <Button href={`/experiences/${experience.id}`} variant="ghost" className="text-primary">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/experiences" variant="outline">
            Explore All Experiences
          </Button>
        </div>
      </Section>
      
      {/* Testimonials Section */}
      <Section
        bgColor="bg-neutral-50"
        title="Guest Experiences"
        subtitle="What our guests say about their stay with us"
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
      
      {/* CTA Section */}
      <Section className="text-center" spacing="py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
            Reserve Your Luxurious Escape Today
          </h2>
          <p className="text-neutral-600 text-lg mb-10">
            Immerse yourself in a world of luxury and create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/booking" variant="primary" size="lg">
              Book Your Stay
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomePage;
