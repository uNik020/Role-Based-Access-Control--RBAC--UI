import React, { useState } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa'; // For menu and profile icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility on mobile view
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 text-white shadow-lg fixed w-full top-0 l-0 h-14 z-10">
      <div className="max-w-6xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo (Name) on the left */}
        <div className="text-2xl font-bold">
          <span className="cursor-pointer">RBAC UI</span>
        </div>

        {/* Menu button (hamburger) and profile icon on the right */}
        <div className="flex items-center space-x-6">
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-700 transition duration-300"
            onClick={toggleMenu}
          >
            <FaBars size={24} />
          </button>
    
          {/* Profile Icon */}
          <button className="p-2 rounded-full hover:bg-gray-700 transition duration-300">
            <FaUserCircle size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu (only visible on small screens) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 bg-opacity-80 absolute top-0 left-0 w-full h-screen flex items-center justify-center z-40">
          <div className="text-white text-lg space-y-4">
            <span className="block py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">Profile</span>
            <span className="block py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">Dashboard</span>
            <span className="block py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">Contact</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
