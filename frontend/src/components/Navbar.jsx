import React, { useEffect, useState } from 'react';
import drop from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [destination, setDestination] = useState(
    window.location.pathname.includes('/register') ? '/register' : window.location.pathname
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: 'Home', key: '/' },
    { label: 'About Us', key: '/about' },
    { label: 'Find Blood', key: '/findblood' },
    { label: 'Register', key: '/register' },
  ];

  const handleRegisterClick = () => {
    setShowDropdown((prev) => !prev);
  };
  
  return (
    <nav
      className={`relative ${window.location.pathname !== '/' ? 'md:relative' : 'md:absolute'
        } min-h-[10vh] top-0 left-0 right-0 z-50`}
    >
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to={'/'} onClick={()=> {setIsMenuOpen(false), setDestination('/')}} className="flex justify-center items-center">
            <img className="w-12 h-12" src={drop} alt="Logo" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            {links.map((link) => (
              link.key === '/register' ? (
                <div className="relative flex items-center" key={link.key}>
                  <button
                    className={`text-gray-900 flex items-center font-medium relative text-base ${destination === link.key
                      ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#8B1538]'
                      : 'hover:text-[#8B1538] transition-colors'
                      }`}
                    onClick={handleRegisterClick}
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`w-5 h-5 ml-2 transform transition-transform ${showDropdown ? 'rotate-180' : ''
                        }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {showDropdown && (
                    <div className="absolute top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                      <Link
                        to="/register/donor"
                        className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                        onClick={() => {
                          setDestination('/register');
                          setShowDropdown(false);
                        }}
                      >
                        As a Donor
                      </Link>
                      <Link
                        to="/register/receiver"
                        className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                        onClick={() => {
                          setDestination('/register');
                          setShowDropdown(false);
                        }}
                      >
                        As a Receiver
                      </Link>
                      <Link
                        to="/register/organization"
                        className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                        onClick={() => {
                          setDestination('/register');
                          setShowDropdown(false);
                        }}
                      >
                        As an Organization
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.key}
                  to={link.key}
                  className={`text-gray-900 font-medium relative text-base ${destination === link.key
                    ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#8B1538]'
                    : 'hover:text-[#8B1538] transition-colors'
                    }`}
                  onClick={() => setDestination(link.key)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
          <div>
            <Link
              to="/login"
              className="hidden md:inline-flex items-center px-12 py-2.5 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-200 font-medium text-base"
              onClick={() => setDestination('')}
            >
              Log In
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              className="focus:outline-none"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg p-4 space-y-4">
            {links.map((link) => (
              link.key === '/register' ? (
                <div className="relative px-4 py-1 flex items-center" key={link.key}>
                  <button
                    className={`text-gray-900 flex items-center font-medium relative text-base ${destination === link.key
                      ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#8B1538]'
                      : 'hover:text-[#8B1538] transition-colors'
                      }`}
                    onClick={handleRegisterClick}
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`w-5 h-5 ml-2 transform transition-transform ${showDropdown ? 'rotate-180' : ''
                        }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {showDropdown && (
                    <div className="absolute top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                      <Link
                        to="/register/donor"
                        className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                        onClick={() => {
                          setDestination('/register');
                          setShowDropdown(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        As a Donor
                      </Link>
                      <Link
                        to="/register/receiver"
                        className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                        onClick={() => {
                          setDestination('/register');
                          setShowDropdown(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        As a Receiver
                      </Link>
                      <Link
                        to="/register/organization"
                        className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                        onClick={() => {
                          setDestination('/register');
                          setShowDropdown(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        As an Organization
                      </Link>
                    </div>
                  )}
                </div>
              ) :
              <div className='flex'>
                <Link
                  key={link.key}
                  to={link.key}
                  className={`text-gray-900 px-4 py-1 flex items-center font-medium relative text-base ${destination === link.key
                    ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#8B1538]'
                    : 'hover:text-[#8B1538] transition-colors'
                    }`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setDestination(link.key);
                  }}
                >
                  {link.label}
                </Link>
                </div>
            ))}
            <Link
              to="/login"
              className="block text-white bg-[#8B1538] text-base font-medium hover:bg-[#6B102A] px-4 py-2 rounded-md transition-colors"
              onClick={() => {setDestination(''), setIsMenuOpen(false)}}
            >
              Log In
            </Link>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
