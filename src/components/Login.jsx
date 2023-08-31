import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Login Modal</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
      >
        <button onClick={closeModal} className="text-gray-600 absolute top-2 right-2">
          Close
        </button>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md py-2 px-3 mb-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md py-2 px-3 mb-3"
          />
          <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Login
          </button>
        </form>
      </Modal>
    </div>
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
    maxWidth: '400px', // Limit the width of the modal
  },
};

export default Login;
