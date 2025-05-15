// File: src/pages/ContactPage.jsx
import { useState } from 'react';
import Hero from '../components/sections/Hero';
import Section from '../components/common/Section';
import ContactForm from '../components/sections/ContactForm';

const ContactPage = () => {
  const [selectedLocation, setSelectedLocation] = useState('main');
  
  // Mock data for hotel locations
  const locations = {
    main: {
      name: "Luxury Hotel Main Property",
      address: "123 Ocean Drive, Beachfront Bay, CA 90210",
      phone: "+1 (800) 123-4567",
      email: "reservations@luxuryhotel.com",
      hours: "Front Desk: 24/7 | Concierge: 7:00 AM - 11:00 PM",
      mapUrl: "https://images.pexels.com/photos/269790/pexels-photo-269790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coordinates: {
        lat: 34.0522,
        lng: -118.2437
      }
    },
    downtown: {
      name: "Luxury Hotel Downtown",
      address: "456 City Center Blvd, Downtown, CA 90013",
      phone: "+1 (800) 765-4321",
      email: "downtown@luxuryhotel.com",
      hours: "Front Desk: 24/7 | Concierge: 7:00 AM - 10:00 PM",
      mapUrl: "https://images.pexels.com/photos/8828457/pexels-photo-8828457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coordinates: {
        lat: 34.0407,
        lng: -118.2468
      }
    },
    mountain: {
      name: "Luxury Hotel Mountain Retreat",
      address: "789 Pine Ridge Road, Highland, CA 92346",
      phone: "+1 (800) 987-6543",
      email: "mountain@luxuryhotel.com",
      hours: "Front Desk: 24/7 | Concierge: 8:00 AM - 9:00 PM",
      mapUrl: "https://images.pexels.com/photos/8828584/pexels-photo-8828584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      coordinates: {
        lat: 34.1282,
        lng: -117.2102
      }
    }
  };
  
  const currentLocation = locations[selectedLocation];
  
  return (
    <>
      <Hero 
        title="Contact Us"
        subtitle="We're here to assist you with any questions or requests"
        fallbackImageSrc="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="h-[60vh]"
      />
      
      <Section spacing="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="font-heading text-2xl mb-6">Our Locations</h2>
            
            {/* Location selector */}
            <div className="space-y-4 mb-8">
              {Object.keys(locations).map((key) => (
                <button
                  key={key}
                  className={`block w-full text-left px-4 py-3 rounded-md transition duration-300 ${
                    selectedLocation === key
                      ? 'bg-primary text-white'
                      : 'bg-neutral-100 hover:bg-neutral-200'
                  }`}
                  onClick={() => setSelectedLocation(key)}
                >
                  <span className="font-medium">{locations[key].name}</span>
                </button>
              ))}
            </div>
            
            {/* Department contacts */}
            <div>
              <h3 className="font-heading text-xl mb-4">Departments</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Reservations</p>
                  <p className="text-neutral-700">reservations@luxuryhotel.com</p>
                  <p className="text-neutral-700">+1 (800) 123-4567</p>
                </div>
                <div>
                  <p className="font-medium">Events & Weddings</p>
                  <p className="text-neutral-700">events@luxuryhotel.com</p>
                  <p className="text-neutral-700">+1 (800) 123-5678</p>
                </div>
                <div>
                  <p className="font-medium">Spa & Wellness</p>
                  <p className="text-neutral-700">spa@luxuryhotel.com</p>
                  <p className="text-neutral-700">+1 (800) 123-6789</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="font-heading text-2xl mb-6">{currentLocation.name}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-medium mb-2">Address</h3>
                  <p className="text-neutral-700">{currentLocation.address}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Contact</h3>
                  <p className="text-neutral-700">{currentLocation.phone}</p>
                  <p className="text-neutral-700">{currentLocation.email}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Hours</h3>
                  <p className="text-neutral-700">{currentLocation.hours}</p>
                </div>
              </div>
              
              {/* Map */}
              <div className="h-80 bg-neutral-200 rounded-lg overflow-hidden">
                <img 
                  src={currentLocation.mapUrl}
                  alt={`Map location of ${currentLocation.name}`}
                  className="w-full h-full object-cover"
                />
                {/* In a real implementation, you would integrate Google Maps here */}
                <div className="text-center p-4 bg-white bg-opacity-80 relative bottom-16">
                  <p>Interactive map would be displayed here</p>
                  <p className="text-sm text-neutral-600">
                    Coordinates: {currentLocation.coordinates.lat}, {currentLocation.coordinates.lng}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Directions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="font-heading text-2xl mb-4">Getting Here</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">From the Airport</h3>
                  <p className="text-neutral-700">
                    Our hotel is located 25 minutes (18 miles) from International Airport. 
                    Take Highway 101 South and exit at Ocean Avenue. Turn right and continue 
                    for 2 miles until you reach our entrance on the right.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Parking</h3>
                  <p className="text-neutral-700">
                    Valet parking is available 24/7 at $45 per night with unlimited in/out privileges. 
                    Self-parking is also available at nearby public garages for $30 per day.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Public Transportation</h3>
                  <p className="text-neutral-700">
                    The Metro Rail Blue Line stops 2 blocks from our hotel at Ocean Station. 
                    Bus lines 33, 45, and 58 also stop within a 5-minute walk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <ContactForm 
          title="Send Us a Message" 
          subtitle="Have a question or special request? Feel free to reach out to us."
          compact={false}
        />
      </Section>
    </>
  );
};

export default ContactPage;