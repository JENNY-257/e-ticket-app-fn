import React, { useState } from 'react';

const TicketCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [ticketDetails, setTicketDetails] = useState({
    selectedCompany: '',
    selectedLocation: '',
    locationPrice: 0,
    numberOfTickets: 1,
  });

  const companies = [
    { name: 'Company A', locations: [{ name: 'Location 1', price: 50 }, { name: 'Location 2', price: 70 }] },
    { name: 'Company B', locations: [{ name: 'Location 3', price: 60 }, { name: 'Location 4', price: 80 }] },
    // Add more companies and locations as needed
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTicketDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const calculateTotalPrice = () => {
    // Calculate the total price based on the location price and number of tickets
    return ticketDetails.locationPrice * ticketDetails.numberOfTickets;
  };

  const handleProceedToCheckout = () => {
    // You can implement the logic to proceed to checkout here
  };

  return (
    <div>
      <button
        onClick={() => setIsCartOpen(true)}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Open Cart
      </button>

      {isCartOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50">
          <div className="bg-white border rounded p-4 w-[400px]">
            <h2 className="text-lg font-semibold mb-3">Ticket Cart</h2>
            <div className="mb-3">
              {/* Rest of the form components */}
              {/* ... */}
            </div>
            <div className="mb-3">
              {/* Rest of the form components */}
              {/* ... */}
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Close Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketCart;
