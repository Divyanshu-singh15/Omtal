import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { Facebook, Instagram, Twitter, Bookmark } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-dark text-white pt-16 pb-8">
      <div className="container px-4 sm:px-6 mx-auto">
        {/* Elegant top divider */}
        <div className="w-full flex justify-center mb-12">
          <div className="w-16 h-px bg-accent/60 relative">
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-secondary-dark flex items-center justify-center">
              <div className="w-4 h-1 bg-accent"></div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo and Short Description */}
          <div className="space-y-6">
            <Logo color="light" />
            <p className="text-neutral-300 font-serif leading-relaxed text-sm">
              Experience unparalleled luxury and comfort in the heart of the city.
              Your perfect retreat since 1892.
            </p>
            <div className="flex space-x-5">
              <SocialIcon icon="facebook" />
              <SocialIcon icon="instagram" />
              <SocialIcon icon="twitter" />
              <SocialIcon icon="pinterest" />
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-6 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="/rooms">Rooms & Suites</FooterLink>
              <FooterLink href="/dining">Dining</FooterLink>
              <FooterLink href="/spa">Spa & Wellness</FooterLink>
              <FooterLink href="/experiences">Experiences</FooterLink>
              <FooterLink href="/events">Events</FooterLink>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h4 className="font-heading text-lg mb-6 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-accent mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="2" />
                  </svg>
                </div>
                <span className="text-neutral-300 text-sm font-serif">123 Luxury Avenue, City, Country</span>
              </li>
              <li className="flex items-start">
                <div className="text-accent mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="text-neutral-300 text-sm font-serif">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <div className="text-accent mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <span className="text-neutral-300 text-sm font-serif">info@luxuryhotel.com</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-heading text-lg mb-6 uppercase tracking-wide">Subscribe</h4>
            <p className="text-neutral-300 text-sm mb-5 font-serif">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-secondary text-white border border-secondary/80 focus:border-accent focus:outline-none transition-colors duration-300 font-serif text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-accent text-secondary-dark font-serif uppercase tracking-wider text-sm hover:bg-accent/90 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-secondary mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-xs mb-6 md:mb-0 font-serif">
            © {new Date().getFullYear()} Luxury Hotel. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-neutral-400 font-serif">
            <Link to="/terms" className="hover:text-accent transition-colors duration-300">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-accent transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/sitemap" className="hover:text-accent transition-colors duration-300">
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
        className="text-neutral-300 text-sm font-serif hover:text-accent transition-colors duration-300 border-b border-transparent hover:border-accent/30 inline-block"
      >
        {children}
      </Link>
    </li>
  );
};

const SocialIcon = ({ icon }) => {
  const iconMap = {
    facebook: <Facebook size={16} strokeWidth={1.5} />,
    instagram: <Instagram size={16} strokeWidth={1.5} />,
    twitter: <Twitter size={16} strokeWidth={1.5} />,
    pinterest: <Bookmark size={16} strokeWidth={1.5} />
  };

  return (
    <a
      href={`https://www.${icon}.com`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 border border-secondary flex items-center justify-center hover:border-accent hover:text-accent text-neutral-300 transition-colors duration-300"
      aria-label={icon}
    >
      {iconMap[icon]}
    </a>
  );
};

export default Footer;