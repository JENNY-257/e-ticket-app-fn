import React from 'react';

const ContactForm = () => {
  const formStyles = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const inputStyles = {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '3px',
  };

  const buttonStyles = {
    width: '100%',
    padding: '10px',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  };

  return (
    <form style={formStyles}>
      <h2>Contact Us</h2>
      <input type="text" placeholder="Your Name" style={inputStyles} />
      <input type="email" placeholder="Your Email" style={inputStyles} />
      <textarea placeholder="Your Message" style={{ ...inputStyles, height: '100px' }} />
      <button  className='bg-gray-900' type="submit" style={buttonStyles}>Send</button>
    </form>
  );
};

export default ContactForm;
