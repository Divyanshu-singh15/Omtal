import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../common/Button';
import Logo from '../common/Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Logo color={isScrolled || isMenuOpen ? 'dark' : 'light'} />
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLinks textColor={isScrolled ? 'text-gray-800' : 'text-white'} />
          <Button 
            variant="primary"
            size="sm"
            href="/booking"
          >
            Book Now
          </Button>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? (
            <span className={isScrolled ? 'text-gray-800' : 'text-white'}>✕</span>
          ) : (
            <span className={isScrolled ? 'text-gray-800' : 'text-white'}>☰</span>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              <NavLinks textColor="text-gray-800" />
              <Button 
                variant="primary"
                size="full"
                href="/booking"
              >
                Book Now
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ textColor }) => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Rooms & Suites', path: '/rooms' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Dining', path: '/dining' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`${textColor} font-medium hover:text-primary transition-colors duration-200`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Header;