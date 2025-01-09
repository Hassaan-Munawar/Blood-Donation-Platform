import React from "react";
import vector from "../assets/vector.png";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 md:px-6 lg:px-20">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <img src={vector} alt="vector" />
          </div>
          {/* CTA */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="text-xl">Ready to get started?</span>
            <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-100">
              Donate
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Newsletter Section */}
          <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Subscribe to our newsletter
            </h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border border-gray-600 rounded-md px-4 py-2 w-full focus:outline-none focus:border-white"
              />
              <button className="bg-pink-200 hover:bg-pink-300 text-black p-2 rounded-md">
                →
              </button>
            </div>
          </div>

          {/* Services Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Email Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Campaigns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Branding
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Offline
                </a>
              </li>
            </ul>
          </div>

          {/* About Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-300">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
          </div>
          <p className="mb-6 md:mb-0">
            &copy; {new Date().getFullYear()} Your Organization. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.8 15.5c-.4.2-.8.3-1.2.3-.5 0-1-.1-1.4-.4-.4-.3-.7-.7-.9-1.2s-.3-1.1-.3-1.8V9.5h-1.5V8.2c.4-.1.8-.3 1.1-.5.3-.2.6-.5.8-.8.2-.3.3-.7.4-1.1h1.3v2.5h2.1v1.2h-2.1v4.3c0 .3 0 .6.1.8.1.2.2.4.3.5.1.1.3.2.5.2.2 0 .4 0 .6-.1v1.3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
