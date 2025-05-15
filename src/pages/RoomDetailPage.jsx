// File: src/pages/RoomDetailPage.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import BookingBar from '../components/sections/BookingBar';

// Import mock data (would be fetched from API in production)
import { rooms } from '../data/mockData';

const RoomDetailPage = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  
  // Fetch room details
  useEffect(() => {
    // Simulate API call
    const fetchRoom = () => {
      setLoading(true);
      setTimeout(() => {
        const foundRoom = rooms.find(r => r.id == id);
        setRoom(foundRoom);
        setLoading(false);
      }, 300);
    };
    
    fetchRoom();
  }, [id]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!room) {
    return (
      <Section>
        <div className="text-center py-12">
          <h2 className="font-heading text-3xl mb-4">Room Not Found</h2>
          <p className="mb-6">The room you are looking for does not exist or has been removed.</p>
          <Link to="/rooms">
            <Button variant="primary">Return to Rooms</Button>
          </Link>
        </div>
      </Section>
    );
  }
  
  return (
    <>
      {/* Room Gallery Header */}
      <div className="relative h-[70vh] overflow-hidden">
        {room.images && room.images.length > 0 ? (
          <img 
            src={room.images[activeImage] || "/api/placeholder/1920/1080"} 
            alt={room.name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <img 
            src="/api/placeholder/1920/1080" 
            alt={room.name} 
            className="w-full h-full object-cover"
          />
        )}
        
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="container pb-16">
            <h1 className="text-4xl md:text-5xl font-heading text-white mb-2">{room.name}</h1>
            <p className="text-xl text-white opacity-90">{room.type}</p>
          </div>
        </div>
      </div>
      
      {/* Booking Bar */}
      <BookingBar className="sticky top-20 z-10" />
      
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Room Details */}
          <div className="lg:col-span-2">
            {/* Thumbnail Gallery */}
            {room.images && room.images.length > 1 && (
              <div className="grid grid-cols-6 gap-2 mb-8">
                {room.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`cursor-pointer border-2 ${activeImage === index ? 'border-primary' : 'border-transparent'}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img src={image} alt={`Room view ${index + 1}`} className="w-full h-16 object-cover" />
                  </div>
                ))}
              </div>
            )}
            
            {/* Room Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-heading mb-4">Room Overview</h2>
              <p className="text-neutral-700">{room.description}</p>
            </div>
            
            {/* Room Features & Amenities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Room Features */}
              <div>
                <h3 className="text-xl font-heading mb-4">Room Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">•</span>
                    <span>{room.size} sqft</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">•</span>
                    <span>Accommodates {room.capacity} {room.capacity === 1 ? 'guest' : 'guests'}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">•</span>
                    <span>{room.bedType}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">•</span>
                    <span>{room.view} view</span>
                  </li>
                </ul>
              </div>
              
              {/* Room Amenities */}
              <div>
                <h3 className="text-xl font-heading mb-4">Room Amenities</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                  {room.amenities && room.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Room Policies */}
            <div className="bg-neutral-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-heading mb-4">Room Policies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Check-in</p>
                  <p>3:00 PM - 10:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Check-out</p>
                  <p>By 12:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Cancellation</p>
                  <p>48 hours before arrival for full refund</p>
                </div>
                <div>
                  <p className="font-medium">Children</p>
                  <p>Welcome (cribs available upon request)</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-neutral-200 rounded-lg shadow-md p-6 sticky top-[calc(80px+var(--booking-bar-height,56px))]">
              <h3 className="text-xl font-heading mb-4">Booking Summary</h3>
              
              <div className="border-b border-neutral-200 pb-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span>Room Type:</span>
                  <span className="font-medium">{room.type}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rate:</span>
                  <span className="font-medium text-primary">${room.price}<span className="text-sm">/night</span></span>
                </div>
              </div>
              
              <Button 
                href={`/booking?room=${room.id}`}
                variant="primary" 
                size="full"
                className="mb-4"
              >
                Book Now
              </Button>
              
              <p className="text-sm text-neutral-600 text-center">
                Best rate guaranteed. No hidden fees.
              </p>
              
              {/* Additional Services */}
              <div className="mt-6">
                <h4 className="font-medium mb-3">Additional Services</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">•</span>
                    <span>Airport Transfer</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">•</span>
                    <span>In-room Dining</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">•</span>
                    <span>Spa Reservations</span>
                  </li>
                </ul>
              </div>
              
              {/* Need Help? */}
              <div className="mt-6 bg-neutral-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Need Help?</p>
                <p className="text-sm mb-2">Contact our reservation specialists</p>
                <a href="tel:+1234567890" className="text-primary hover:text-primary-dark">+1 (234) 567-890</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetailPage;