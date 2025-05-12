import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../components/assets/icons/Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Logo and about */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Apex Logo" className="h-8 mr-2" />
              <span className="text-xl font-bold">Apex</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your one-stop destination for premium products at competitive prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
          
         
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              <Link to="/cart" className="text-gray-400 hover:text-white transition-colors">Cart</Link>
              <Link to="/wishlist" className="text-gray-400 hover:text-white transition-colors">Wishlist</Link>
              <Link to="/orders" className="text-gray-400 hover:text-white transition-colors">My Orders</Link>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
          
      
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-gray-400 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-400">Adama city, Mebrat Hail</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-gray-400 mr-2 flex-shrink-0" size={16} />
                <span className="text-gray-400">+251 (911) 567-890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-gray-400 mr-2 flex-shrink-0" size={16} />
                <span className="text-gray-400">support@apex-ecommerce.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Apex E-Commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
