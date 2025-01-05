import React from 'react';

export default function CityCard({ city, country, temperature, internet, cost, imageUrl, comment, hoverInfo }) {
  return (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
      <img src={imageUrl} alt={city} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{city}</h3>
        <p className="text-gray-600">{country}</p>
        <p className="text-gray-600">온도: {temperature}°C</p>
        <p className="text-gray-600">인터넷: {internet} Mbps</p>
        <p className="text-gray-600">비용: ${cost}</p>
        <p className="text-gray-600">{comment}</p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-center">
          <p>{hoverInfo}</p>
        </div>
      </div>
    </div>
  );
} 