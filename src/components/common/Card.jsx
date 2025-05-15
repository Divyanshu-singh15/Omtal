const Card = ({ 
    title, 
    subtitle, 
    image, 
    children, 
    className = '', 
    imageClassName = '',
    contentClassName = '',
    onClick
  }) => {
    return (
      <div 
        className={`bg-white rounded-lg shadow-md overflow-hidden ${onClick ? 'cursor-pointer' : ''} ${className}`}
        onClick={onClick}
      >
        {image && (
          <div className={`overflow-hidden ${imageClassName}`}>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
            />
          </div>
        )}
        <div className={`p-6 ${contentClassName}`}>
          {title && <h3 className="font-heading text-xl mb-2">{title}</h3>}
          {subtitle && <p className="text-neutral-600 mb-4">{subtitle}</p>}
          {children}
        </div>
      </div>
    );
  };
  
  export default Card;
  