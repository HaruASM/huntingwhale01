const CityCard = ({ city, country, temperature, internet, cost, imageUrl, comment = "Digital Nomad Guide" }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group relative">
      <div className="relative h-48">
        <img
          src={imageUrl || 'https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?q=80&w=1000'}
          alt={`${city}, ${country}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-xl font-bold">{city}</h2>
            <span className="text-gray-600">{country}</span>
          </div>
          <p className="text-gray-600 text-sm">{comment}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-sm">☀️</span>
            <span className="text-sm">{temperature}°</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">
              📡 {internet} Mbps
            </span>
            <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">
              💵 ${cost}/mo
            </span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="p-4 h-full flex flex-col justify-center text-white">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span>⭐️ Overall</span>
              <div className="flex-1 bg-gray-600 rounded-full h-2">
                <div className="bg-green-500 h-full rounded-full w-[70%]"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>💵 Cost</span>
              <div className="flex-1 bg-gray-600 rounded-full h-2">
                <div className="bg-green-500 h-full rounded-full w-[80%]"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>📡 Internet</span>
              <div className="flex-1 bg-gray-600 rounded-full h-2">
                <div className="bg-yellow-500 h-full rounded-full w-[60%]"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>👍 Liked</span>
              <div className="flex-1 bg-gray-600 rounded-full h-2">
                <div className="bg-green-500 h-full rounded-full w-[90%]"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>👮 Safety</span>
              <div className="flex-1 bg-gray-600 rounded-full h-2">
                <div className="bg-green-500 h-full rounded-full w-[85%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityCard; 