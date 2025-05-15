import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const FeaturedRooms = ({ 
  title = "Featured Rooms & Suites",
  subtitle = "Experience luxury and comfort in our elegant accommodations",
  rooms = [],
  viewAllLink = "/rooms",
}) => {
  const [activeRoom, setActiveRoom] = useState(0);
  const scrollRef = useRef(null);

  const handleRoomChange = (index) => {
    setActiveRoom(index);
  };

  // Current active room
  const currentRoom = rooms[activeRoom];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Room Selector Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="font-heading text-xl mb-6">Our Accommodations</h3>
              <div className="space-y-4" ref={scrollRef}>
                {rooms.map((room, index) => (
                  <button
                    key={room.id}
                    onClick={() => handleRoomChange(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activeRoom === index
                        ? 'bg-primary text-white'
                        : 'bg-neutral-100 hover:bg-neutral-200'
                    }`}
                  >
                    <h4 className="font-heading font-medium">{room.name}</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm">
                        {activeRoom === index 
                          ? room.capacity > 1 ? `For up to ${room.capacity} guests` : 'For 1 guest'
                          : room.type}
                      </span>
                      <span className={`font-bold ${activeRoom === index ? '' : 'text-primary'}`}>
                        ${room.price}
                        <span className="text-xs font-normal">/night</span>
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-6">
                <Link to={viewAllLink} className="text-primary hover:underline flex items-center justify-center">
                  View All Rooms
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Room Details */}
          {currentRoom && (
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-80 overflow-hidden">
                <img
                  src={currentRoom.image}
                  alt={currentRoom.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-heading text-2xl font-bold">{currentRoom.name}</h3>
                    <p className="text-neutral-600">{currentRoom.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-primary font-bold text-2xl">${currentRoom.price}</div>
                    <div className="text-sm text-neutral-500">per night</div>
                  </div>
                </div>
                
                <p className="text-neutral-700 mb-6">{currentRoom.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center bg-neutral-50 p-3 rounded-lg">
                    <div className="text-neutral-500 text-sm">Room Size</div>
                    <div className="font-medium">{currentRoom.size}</div>
                  </div>
                  <div className="text-center bg-neutral-50 p-3 rounded-lg">
                    <div className="text-neutral-500 text-sm">Capacity</div>
                    <div className="font-medium">
                      {currentRoom.capacity} {currentRoom.capacity === 1 ? 'Guest' : 'Guests'}
                    </div>
                  </div>
                  <div className="text-center bg-neutral-50 p-3 rounded-lg">
                    <div className="text-neutral-500 text-sm">Bed Type</div>
                    <div className="font-medium">
                      {currentRoom.amenities.find(a => a.includes('bed') || a.includes('Bed'))}
                    </div>
                  </div>
                  <div className="text-center bg-neutral-50 p-3 rounded-lg">
                    <div className="text-neutral-500 text-sm">View</div>
                    <div className="font-medium">
                      {currentRoom.amenities.find(a => a.includes('view') || a.includes('View'))}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentRoom.amenities.slice(0, 8).map((amenity, index) => (
                    <span key={index} className="inline-block bg-neutral-100 px-3 py-1 rounded-full text-sm">
                      {amenity}
                    </span>
                  ))}
                  {currentRoom.amenities.length > 8 && (
                    <span className="inline-block bg-neutral-100 px-3 py-1 rounded-full text-sm">
                      +{currentRoom.amenities.length - 8} more
                    </span>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    href={`/rooms/${currentRoom.id}`} 
                    variant="primary"
                    className="flex-1"
                  >
                    View Details
                  </Button>
                  <Button 
                    href={`/booking?room=${currentRoom.id}`} 
                    variant="outline"
                    className="flex-1"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;