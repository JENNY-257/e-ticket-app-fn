import React from 'react';

const PlaceCard = ({ placeName, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden">
      <img src={imageUrl} alt={placeName} className="w-full h-40 object-cover" />
      <div className="p-9">
        <h3 className="text-lg font-semibold mb-2">{placeName}</h3>
        <p className="text-gray-500">Explore the beauty of {placeName}</p>
      </div>
    </div>
  );
};

export default PlaceCard;
