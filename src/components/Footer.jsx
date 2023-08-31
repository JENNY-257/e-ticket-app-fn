import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-[100px]">
      <div className="container mx-auto text-center">
        <nav className="mb-4">
          <Link to="/about" className="text-white mr-4 hover:text-blue-500">
            About Us
          </Link>
          <Link to="/contact" className="text-white mr-4 hover:text-blue-500">
            Contact
          </Link>
          <Link to="/privacy" className="text-white hover:text-blue-500">
            Privacy Policy
          </Link>
        </nav>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
        <p className="text-white mt-4">&copy; 2023 E-Ticket App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
