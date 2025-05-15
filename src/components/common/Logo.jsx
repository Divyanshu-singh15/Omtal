import { Link } from 'react-router-dom';

const Logo = ({ color = 'dark' }) => {
  return (
    <Link to="/" className="flex items-center">
      <span className={`font-heading text-2xl font-bold ${color === 'light' ? 'text-white' : 'text-gray-800'}`}>
        Luxury
        <span className="text-primary">Hotel</span>
      </span>
    </Link>
  );
};

export default Logo;