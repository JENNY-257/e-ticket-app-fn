import React, { useState } from 'react';

const PlaceCard = ({ placeName, imageUrl }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden">
      <img src={imageUrl} alt={placeName} className="w-full h-40 object-cover" />
      <div className="p-9">
        <h3 className="text-lg font-semibold mb-2">{placeName}</h3>
        <p className="text-gray-500">Explore the beauty of {placeName}</p>
        <button
          onClick={handleAddToCart}
          className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring focus:border-gray-400"
        >
          Add to Cart
        </button>
      </div>

      {isCartOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50">
          <div className="bg-white border rounded p-4 w-[400px]">
            {/* Close button */}
            <button
              onClick={handleCloseCart}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              X
            </button>
            {/* Popup content */}
            <h2 className="text-lg font-semibold mb-2 ">Add to Cart</h2>
            <form className="flex flex-col w-[80px]">
              <label className="mb-2 w-[700px]">Number of Tickets</label>
              <input type="number" className="border border-gray-300 rounded-md py-2 px-3 mb-3 w-[300px]" />
              <label className="mb-2 w-[700px]">Select Company</label>
              <select className="border border-gray-300 rounded-md py-2 px-3 mb-3 w-[300px]">
                <option value="company1">Company 1</option>
                <option value="company2">Company 2</option>
              </select>
              <label className="mb-8 w-[700px]">Select Location with Price</label>
              <select className="border border-gray-300 rounded-md py-2 px-3 mb-3 w-[300px]">
                <option value="location1">$100 - Location 1</option>
                <option value="location2">$150 - Location 2</option>
              </select>
              <button
                onClick={handleCloseCart}
                className="bg-gray-500 text-white py-2 px-0 rounded hover:bg-gray-900 focus:outline-none focus:ring focus:border-blue-300"
              >
                Checkout
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaceCard;
