import React from 'react';

const TicketCart = () => {
  return (
    <div>
      <h2>Ticket Cart</h2>
      <ul>
        {/* Display selected tickets */}
        <li>Ticket 1</li>
        <li>Ticket 2</li>
        {/* Add more tickets */}
      </ul>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default TicketCart;
