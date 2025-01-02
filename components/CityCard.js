const CityCard = ({ city, country, temperature, internet, cost, image }) => {
  return (
    <div className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-95 transition-opacity">
      <div className="aspect-[4/3] relative">
        <img 
          src={image} 
          alt={`${city}, ${country}`}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h2 className="text-2xl font-bold">{city}</h2>
          <p className="text-sm opacity-90">{country}</p>
        </div>

        <div className="absolute top-4 right-4 flex gap-2 text-white">
          <span className="bg-black/30 px-2 py-1 rounded-full text-sm">
            {temperature}°
          </span>
          <span className="bg-black/30 px-2 py-1 rounded-full text-sm">
            {internet} Mbps
          </span>
        </div>

        <div className="absolute bottom-4 right-4 text-white">
          <span className="bg-black/30 px-2 py-1 rounded-full text-sm">
            ${cost}/mo
          </span>
        </div>
      </div>
    </div>
  );
};

export default CityCard; 