import { Link } from 'react-router-dom';
import Card from '../common/Card';
import Button from '../common/Button';

const RoomCard = ({ room }) => {
  const { id, name, type, size, capacity, price, image, amenities } = room;

  return (
    <Card
      image={image}
      className="h-full transition-transform duration-300 hover:-translate-y-2"
      imageClassName="h-64"
      contentClassName="flex flex-col"
    >
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-heading text-xl">{name}</h3>
          <div className="text-primary font-bold">${price}<span className="text-sm text-neutral-500 font-normal">/night</span></div>
        </div>
        
        <div className="text-sm text-neutral-500 mb-4">{type}</div>
        
        <div className="flex flex-wrap gap-y-2 mb-4">
          <div className="w-1/2 flex items-center text-sm">
            <span className="mr-2">🛏️</span> {size}
          </div>
          <div className="w-1/2 flex items-center text-sm">
            <span className="mr-2">👥</span> Up to {capacity} guests
          </div>
          {amenities.slice(0, 2).map((amenity, index) => (
            <div key={index} className="w-1/2 flex items-center text-sm">
              <span className="mr-2">✓</span> {amenity}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-auto pt-4 border-t border-neutral-200">
        <Link to={`/rooms/${id}`} className="text-primary hover:underline text-sm font-medium">
          View Details
        </Link>
        <Button href={`/booking?room=${id}`} variant="outline" size="sm">
          Book Now
        </Button>
      </div>
    </Card>
  );
};

export default RoomCard;