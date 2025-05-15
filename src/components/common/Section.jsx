const Section = ({ 
    children, 
    className = '', 
    bgColor = 'bg-white',
    title,
    subtitle,
    centered = false,
    spacing = 'py-16 md:py-24',
  }) => {
    return (
      <section className={`${bgColor} ${spacing} ${className}`}>
        <div className="container">
          {(title || subtitle) && (
            <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
              {title && (
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          {children}
        </div>
      </section>
    );
  };
  
  export default Section;
  