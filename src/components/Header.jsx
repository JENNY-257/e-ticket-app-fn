import  { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import LoginForm from './LoginForm'; 
import SignupForm from './SignupForm'; 

Modal.setAppElement('#root');

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  return (
    <header className="bg-gray-900 py-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold text-[30px]">
          E-Ticket App
        </Link>
        <nav className="flex items-center">
          <Link to="/Home" className="text-white mr-[50px] text-[25px]">
            Home
          </Link>
          <Link to="/about" className="text-white mr-[50px] text-[25px]">
            About Us
          </Link>
          <Link to="/contact" className="text-white mr-[50px] text-[25px]">
            Contact Us
          </Link>
          <button
            className="text-white mr-[50px] text-[25px]"
            onClick={openSignupModal}
          >
            Sign Up
          </button>
          <button
            className="text-white mr-[50px] text-[25px]"
            onClick={openLoginModal}
          >
            Login
          </button>
        </nav>
      </div>
      <LoginForm
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
      />
      <SignupForm
        isOpen={isSignupModalOpen}
        onRequestClose={closeSignupModal}
      />
    </header>
  );
};

export default Header;
