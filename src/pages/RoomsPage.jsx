// File: src/pages/RoomsPage.jsx
import { useState, useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Section from '../components/common/Section';
import RoomCard from '../components/sections/RoomCard';
import BookingBar from '../components/sections/BookingBar';

// Import mock data (would be fetched from API in production)
import { rooms } from '../data/mockData';

const RoomsPage = () => {
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [filters, setFilters] = useState({
    type: 'all',
    view: 'all',
    minPrice: 0,
    maxPrice: 2000,
    capacity: 1,
  });
  
  // Filter categories
  const roomTypes = ['all', ...new Set(rooms.map(room => room.type).filter(Boolean))];
  const roomViews = ['all', ...new Set(rooms.map(room => room.view).filter(Boolean))];

  
  // Apply filters whenever they change
  useEffect(() => {
    let tempRooms = [...rooms];
    
    // Filter by room type
    if (filters.type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === filters.type);
    }
    
    // Filter by view
    if (filters.view !== 'all') {
      tempRooms = tempRooms.filter(room => room.view === filters.view);
    }
    
    // Filter by price
    tempRooms = tempRooms.filter(
      room => room.price >= filters.minPrice && room.price <= filters.maxPrice
    );
    
    // Filter by capacity
    tempRooms = tempRooms.filter(room => room.capacity >= filters.capacity);
    
    setFilteredRooms(tempRooms);
  }, [filters]);
  
  // Initialize filtered rooms with all rooms
  useEffect(() => {
    setFilteredRooms(rooms);
  }, []);
  
  // Handle filter changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: name === 'minPrice' || name === 'maxPrice' || name === 'capacity' 
        ? parseInt(value) 
        : value
    });
  };
  
  return (
    <>
      <Hero 
        title="Rooms & Suites"
        subtitle="Experience luxury accommodations with breathtaking views"
        fallbackImageSrc="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="h-[60vh]"
      />
      
      <BookingBar className="sticky top-20 z-10" />
      
      <Section title="Find Your Perfect Room" subtitle="Browse our selection of luxurious accommodations">
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 bg-neutral-50 p-6 rounded-lg">
          {/* Room Type Filter */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-neutral-700 mb-1">
              Room Type
            </label>
            <select
              name="type"
              id="type"
              value={filters.type}
              onChange={handleChange}
              className="w-full p-2 border border-neutral-300 rounded-md focus:ring-primary focus:border-primary"
            >
              {roomTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          {/* View Filter */}
          <div>
            <label htmlFor="view" className="block text-sm font-medium text-neutral-700 mb-1">
              View
            </label>
            <select
              name="view"
              id="view"
              value={filters.view}
              onChange={handleChange}
              className="w-full p-2 border border-neutral-300 rounded-md focus:ring-primary focus:border-primary"
            >
              {roomViews.map((view, index) => (
                <option key={index} value={view}>
                  {view.charAt(0).toUpperCase() + view.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          {/* Price Range */}
          <div>
            <label htmlFor="maxPrice" className="block text-sm font-medium text-neutral-700 mb-1">
              Max Price: ${filters.maxPrice}
            </label>
            <input
              type="range"
              name="maxPrice"
              id="maxPrice"
              min={100}
              max={2000}
              step={50}
              value={filters.maxPrice}
              onChange={handleChange}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          {/* Capacity */}
          <div>
            <label htmlFor="capacity" className="block text-sm font-medium text-neutral-700 mb-1">
              Guests: {filters.capacity}
            </label>
            <input
              type="range"
              name="capacity"
              id="capacity"
              min={1}
              max={6}
              value={filters.capacity}
              onChange={handleChange}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          {/* Reset Filters */}
          <div className="flex items-end">
            <button
              className="w-full bg-secondary hover:bg-secondary-dark text-white py-2 px-4 rounded transition duration-300"
              onClick={() => setFilters({
                type: 'all',
                view: 'all',
                minPrice: 0,
                maxPrice: 2000,
                capacity: 1,
              })}
            >
              Reset Filters
            </button>
          </div>
        </div>
        
        {/* Room Results */}
        <div className="mb-6">
          <p className="text-neutral-700">{filteredRooms.length} rooms found</p>
        </div>
        
        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.length > 0 ? (
            filteredRooms.map(room => (
              <RoomCard key={room.id} room={room} />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <h3 className="text-xl font-heading mb-4">No Rooms Matched Your Search</h3>
              <p>Please adjust your filters</p>
            </div>
          )}
        </div>
      </Section>
    </>
  );
};

export default RoomsPage;