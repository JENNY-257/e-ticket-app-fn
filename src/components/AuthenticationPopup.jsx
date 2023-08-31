import React from 'react';
import Modal from 'react-modal';

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px', // Limit the width of the modal
  },
};

const AuthenticationPopup = ({ isOpen, onRequestClose, title, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customModalStyles}>
      <button onClick={onRequestClose} className="text-gray-600 absolute top-2 right-2">
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </Modal>
  );
};

export default AuthenticationPopup;
