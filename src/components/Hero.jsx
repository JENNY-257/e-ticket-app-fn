import React from 'react';
import backgroundImg from './background.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroStyles = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: '90%',
    backgroundPosition: 'center',
    height: '120vh', 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Add a subtle text shadow
    padding: '60px 0', // Add padding at the top and bottom
  };

  const movingGreetingStyles = {
    animation: 'moveGreeting 10s linear infinite alternate', // Use "alternate" to reverse the animation direction
    whiteSpace: 'nowrap',
    color: 'chocolate', // Change color of emojis
    marginTop:'150px',
  };

  const paragraphContainerStyles = {
    flex: 1, // Take remaining width
    marginLeft: '800px', // Add space between text and image
    paddingLeft: '20px', // Add left padding
    marginTop:'70px',
  };

  return (
    <section className="bg-gradient-to-r from-blue-400 to-purple-500 text-white" style={heroStyles}>
      <div className="container mx-auto text-center hero-container">
        <h1 className="text-4xl font-bold mb-4 text-black" style={movingGreetingStyles}>
          Hi👋👋👋👋<br />Book your ticket please
        </h1>
        <div style={paragraphContainerStyles}>
          <p className="text-lg text-black">
            "Explore a wide range of events happening around you.<br/> From concerts to workshops,
            we've got you covered."
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;
