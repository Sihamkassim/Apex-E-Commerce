import { useState } from "react";
import { Link } from "react-router-dom";
import group from "../assets/group.png";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search.png";
import vector from "../assets/vector.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-3 md:mb-0 w-full md:w-auto justify-between">
          <Link
            to="/"
            className="inline-flex items-center text-xl font-bold text-black-900"
          >
            <img src={logo} alt="Apex Logo" className="h-6 mr-2" />
            Apex
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-1">
              <img src={searchIcon} alt="Search" className="h-5 w-5" />
            </button>
            <button
              onClick={() => setAccountOpen(!accountOpen)}
              className="p-1"
            >
              <img src={group} alt="Account" className="h-5 w-5" />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl cursor-pointer text-gray-700"
            >
              ☰
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6 mx-auto">
          <Link
            to="/"
            className="flex items-center text-gray-700 hover:text-red-700"
          >
            <img src={vector} alt="Home icon" className="h-4 mr-1" />
            Home
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-red-700">
            Products

          </Link>
          <Link to="/about" className="text-gray-700 hover:text-red-700">
            About
          </Link>
        </div>

        {/* Desktop Search and Account */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Collapsable Search */}
          <div className="relative">
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-1">
              <img src={searchIcon} alt="Search" className="h-5 w-5" />
            </button>
            {searchOpen && (
              <div className="absolute right-0 top-10 bg-white p-2 shadow-md rounded-md z-10">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border border-gray-300 px-2 py-1 rounded-md w-64"
                />
              </div>
            )}
          </div>

          {/* Account Dropdown */}
          <div className="relative">
            <button
              onClick={() => setAccountOpen(!accountOpen)}
              className="p-1"
            >
              <img src={group} alt="Account" className="h-5 w-5" />
            </button>
            {accountOpen && (
              <div className="absolute right-0 top-10 bg-white p-2 shadow-md rounded-md z-10 w-32">
                <Link
                  to="/login"
                  className="block px-2 py-1 text-gray-700 hover:text-red-700 hover:bg-gray-100 rounded"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-2 py-1 text-gray-700 hover:text-red-700 hover:bg-gray-100 rounded"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="w-full md:hidden my-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 px-2 py-1 rounded-md w-full"
            />
          </div>
        )}

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden w-full px-4 pb-4 space-y-2 mt-2">
            <Link
              to="/"
              className="flex items-center text-gray-700 hover:text-red-700"
            >
              <img src={vector} alt="Home icon" className="h-4 mr-2" />
              Home
            </Link>
            <Link
              to="/products"
              className="block text-gray-700 hover:text-red-700"
            >
              Products
            </Link>
            
            <Link
              to="/About"
              className="block text-gray-700 hover:text-red-700"
            >
             About
            </Link>
          </div>
        )}

        {/* Mobile Account Dropdown */}
        {accountOpen && (
          <div className="md:hidden w-full px-4 pb-2 space-y-2">
            <Link
              to="/login"
              className="block px-2 py-1 text-gray-700 hover:text-green-700"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block px-2 py-1 text-gray-700 hover:text-green-700"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
