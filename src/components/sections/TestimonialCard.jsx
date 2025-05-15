const TestimonialCard = ({ testimonial }) => {
    const { name, location, rating, comment, avatar, date } = testimonial;
    
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-4">
          <div className="mr-4">
            <img
              src={avatar || '/images/default-avatar.jpg'}
              alt={name}
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-heading text-lg font-medium">{name}</h4>
            <p className="text-neutral-500 text-sm">{location}</p>
          </div>
        </div>
        
        <div className="mb-4 flex items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <span 
              key={index} 
              className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-neutral-300'}`}
            >
              ★
            </span>
          ))}
          <span className="ml-2 text-sm text-neutral-500">{date}</span>
        </div>
        
        <blockquote className="text-lg italic text-neutral-700">
          "{comment}"
        </blockquote>
      </div>
    );
  };
  
  export default TestimonialCard;
  