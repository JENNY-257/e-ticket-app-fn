import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
          <Link to="/signup" className="text-white mr-[50px] text-[25px]">
            Sign Up
          </Link>
          <button onClick={openModal} className="text-white mr-[50px] text-[25px]">
            Login
          </button>
        </nav>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
      >
        <button onClick={closeModal} className="text-gray-600 absolute top-4 right-4">
          Close
        </button>
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </Modal>
    </header>
  );
};

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export default Header;
