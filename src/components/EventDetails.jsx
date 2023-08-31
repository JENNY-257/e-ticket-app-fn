import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { eventId } = useParams();
  const event = {
    id: eventId,
    name: 'Concert 1',
    date: '2023-09-15',
    time: '18:00',
    venue: 'Venue A',
    description: 'Join us for an amazing concert!'
  };

  return (
    <div>
      <h2>{event.name}</h2>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Venue: {event.venue}</p>
      <p>Description: {event.description}</p>
    </div>
  );
};

export default EventDetails;
