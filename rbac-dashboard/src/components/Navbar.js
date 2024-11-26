import React, { useState } from "react";
import { FaBars, FaTimes, FaUserCircle, FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // Toggle the menu visibility for mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle profile menu visibility for desktop
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-indigo-320 to-blue-600 text-white dark:from-slate-800 dark:via-cyan-600 dark:to-slate-700 fixed w-full top-0 l-0 h-14 z-10">
      <div className="max-w-6xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="cursor-pointer">RBAC UI</span>
        </div>

        {/* Menu for Desktop & Toggle for Mobile */}
        <div className="flex items-center space-x-6">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-md hover:bg-gray-700 dark:hover:bg-gray-400 transition duration-300"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          {/* Profile Icon with Dropdown Menu */}
          <div className="relative hidden lg:block" title="This is for decoration only.">
            <button
              onClick={toggleProfileMenu}
              className="p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-400 transition duration-300"
            >
              <FaUserCircle size={24} />
            </button>
            {isProfileMenuOpen && (
              <div
                onMouseLeave={() => setIsProfileMenuOpen(false)} // Close on mouse leave
                className="absolute right-0 mt-2 w-40 bg-gray-800 dark:bg-gray-700 text-white rounded shadow-lg py-2 z-20"
              >
                <span className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Profile
                </span>
                <span className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Dashboard
                </span>
                <span className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Contact
                </span>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-700 transition duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 bg-opacity-95 absolute top-0 left-0 w-full h-screen flex items-center justify-center z-40">
          <div className="text-white text-lg space-y-4 text-center" >
            <span className="block py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
              Profile
            </span>
            <span className="block py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
              Dashboard
            </span>
            <span className="block py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
              Contact
            </span>
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition"
            >
              <FaTimes size={20} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
