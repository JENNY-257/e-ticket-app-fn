import React from 'react';

const AboutUs = () => {
  const containerStyles = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  };

  const headingStyles = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const paragraphStyles = {
    fontSize: '16px',
    lineHeight: '1.6',
  };

  return (
    <div style={containerStyles}>
      <h2 style={headingStyles}>About Us</h2>
      <p style={paragraphStyles}>
        Welcome to our travel and event platform! We are passionate about helping you
        discover amazing places and exciting events. Our mission is to provide you with
        a seamless experience when planning your travels and exploring local events.
      </p>
      <p style={paragraphStyles}>
        Whether you're looking for a relaxing getaway or an action-packed adventure,
        we've got you covered. Our team works tirelessly to curate the best travel
        destinations and events, ensuring that you have unforgettable experiences
        every step of the way.
      </p>
      <p style={paragraphStyles}>
        Thank you for choosing us as your travel and event companion. We look forward
        to helping you make memories that will last a lifetime!
      </p>
    </div>
  );
};

export default AboutUs;
