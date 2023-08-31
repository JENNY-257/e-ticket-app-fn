import React from 'react';

const EventList = () => {
  const events = [
    { id: 1, name: 'Concert 1', date: '2023-09-15', time: '18:00', venue: 'Venue A' },
    { id: 2, name: 'Conference 1', date: '2023-09-20', time: '10:00', venue: 'Venue B' },
    // Add more events
  ];

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <a href={`/event/${event.id}`}>{event.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
