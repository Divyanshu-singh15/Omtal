import { useState, useEffect } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Calendar, Users, Home } from 'lucide-react';

const BookingBar = () => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 3)),
    key: 'selection'
  });
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDateSelect = (ranges) => {
    setDateRange(ranges.selection);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleGuestsChange = (e) => {
    setGuests(Math.max(1, parseInt(e.target.value) || 1));
  };

  const handleRoomsChange = (e) => {
    setRooms(Math.max(1, parseInt(e.target.value) || 1));
  };

  return (
    <div className="relative bg-stone-50 shadow-[0_-8px_15px_-3px_rgba(0,0,0,0.1)] rounded-none mx-0 -mt-16 sm:-mt-20 md:-mt-24 z-40 border-l border-r border-b border-amber-900/20">
      <div className="container px-0">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 sm:p-6 md:p-8">
          
          <div className="w-full md:w-auto mb-6 md:mb-0 relative md:border-r md:border-amber-900/10 md:pr-8 pb-4 md:pb-0 border-b border-amber-900/10 md:border-b-0">
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
            >
              <div className="mr-4 text-amber-900">
                <Calendar size={20} className="stroke-amber-900" />
              </div>
              <div className="w-full">
                <div className="text-xs uppercase tracking-wider text-stone-500 font-serif">Reservation Period</div>
                <div className="font-medium text-stone-800 group-hover:text-amber-900 transition-colors text-sm sm:text-base">
                  {formatDate(dateRange.startDate)} — {formatDate(dateRange.endDate)}
                </div>
              </div>
            </div>
            
            {isDatePickerOpen && (
              <div className="absolute left-0 right-0 md:left-auto md:right-auto mt-2 shadow-2xl z-50 bg-stone-50 rounded-none border border-amber-900/20 overflow-x-auto">
                <DateRangePicker
                  ranges={[dateRange]}
                  onChange={handleDateSelect}
                  minDate={new Date()}
                  direction={isMobile ? "vertical" : "horizontal"}
                  months={isMobile ? 1 : 2}
                  weekdayDisplayFormat="short"
                  color="#78350f"
                  rangeColors={["#78350f"]}
                />
              </div>
            )}
          </div>
          
          <div className="w-full md:w-auto mb-6 md:mb-0 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 md:space-x-10 md:border-r md:border-amber-900/10 px-0 md:px-8 pb-4 md:pb-0 border-b border-amber-900/10 md:border-b-0">
            <div className="flex items-center">
              <div className="mr-4 text-amber-900">
                <Users size={20} className="stroke-amber-900" />
              </div>
              <div className="w-full">
                <div className="text-xs uppercase tracking-wider text-stone-500 font-serif">Guests</div>
                <select 
                  value={guests}
                  onChange={handleGuestsChange}
                  className="font-medium bg-transparent appearance-none focus:outline-none border-b border-amber-900/20 py-1 pr-6 text-stone-800 hover:border-amber-900 transition-colors w-full text-sm sm:text-base"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 24 24' fill='none' stroke='%2378350f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right center",
                    backgroundSize: "10px"
                  }}
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} Guest{num !== 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-4 text-amber-900">
                <Home size={20} className="stroke-amber-900" />
              </div>
              <div className="w-full">
                <div className="text-xs uppercase tracking-wider text-stone-500 font-serif">Accommodations</div>
                <select 
                  value={rooms}
                  onChange={handleRoomsChange}
                  className="font-medium bg-transparent appearance-none focus:outline-none border-b border-amber-900/20 py-1 pr-6 text-stone-800 hover:border-amber-900 transition-colors w-full text-sm sm:text-base"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 24 24' fill='none' stroke='%2378350f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right center",
                    backgroundSize: "10px"
                  }}
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num} Suite{num !== 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-auto md:pl-8 mt-4 md:mt-0">
            <button 
              className="bg-amber-900 text-stone-100 px-6 sm:px-8 py-3 uppercase tracking-wider text-sm font-medium hover:bg-amber-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 w-full md:w-auto"
            >
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingBar;