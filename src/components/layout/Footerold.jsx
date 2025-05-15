import { Link } from 'react-router-dom';
import Logo from '../common/Logo';


const Footer = () => {
  return (
    <footer className="bg-secondary-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Short Description */}
          <div className="space-y-4">
            <Logo color="light" />
            <p className="text-neutral-300 text-sm">
              Experience unparalleled luxury and comfort in the heart of the city.
              Your perfect getaway awaits.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon="facebook" />
              <SocialIcon icon="instagram" />
              <SocialIcon icon="twitter" />
              <SocialIcon icon="pinterest" />
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/rooms">Rooms & Suites</FooterLink>
              <FooterLink href="/dining">Dining</FooterLink>
              <FooterLink href="/spa">Spa & Wellness</FooterLink>
              <FooterLink href="/experiences">Experiences</FooterLink>
              <FooterLink href="/events">Events</FooterLink>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h4 className="font-heading text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-accent mr-2">📍</span>
                <span className="text-neutral-300 text-sm">123 Luxury Avenue, City, Country</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">📞</span>
                <span className="text-neutral-300 text-sm">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✉️</span>
                <span className="text-neutral-300 text-sm">info@luxuryhotel.com</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-heading text-lg mb-4">Subscribe</h4>
            <p className="text-neutral-300 text-sm mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 text-sm bg-secondary text-white rounded focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                className="w-full px-3 py-2 bg-accent text-secondary-dark text-sm font-medium rounded hover:bg-accent-dark transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-secondary mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} Luxury Hotel. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs text-neutral-400">
            <Link to="/terms" className="hover:text-white transition-colors duration-200">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/sitemap" className="hover:text-white transition-colors duration-200">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }) => {
  return (
    <li>
      <Link
        to={href}
        className="text-neutral-300 text-sm hover:text-white transition-colors duration-200"
      >
        {children}
      </Link>
    </li>
  );
};

const SocialIcon = ({ icon }) => {
  return (
    <a
      href={`https://www.${icon}.com`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors duration-200"
    >
      <span className="sr-only">{icon}</span>
      {/* Replace with actual icons */}
      <span className="text-sm">
        {icon === 'facebook' && 'f'}
        {icon === 'instagram' && '📷'}
        {icon === 'twitter' && '🐦'}
        {icon === 'pinterest' && '📌'}
      </span>
    </a>
  );
};

export default Footer;