const InsuranceBox = () => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
    <img 
      src="https://images.unsplash.com/photo-1581553672347-95d9444c0d2c" 
      alt="Global travel insurance"
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">
        Global travel medical insurance for $1.45/day!
      </h3>
      <p className="text-gray-600 mb-4">Covid-19 coverage.</p>
      <button className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
        Get insured
      </button>
    </div>
  </div>
);

const MeetupBox = () => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">
        🍹🗼 Tokyo meetup
      </h3>
      <img 
        src="/cdn-cgi/image/format=auto,fit=cover,width=500,height=150,quality=75/assets/img/places/tokyo-japan.jpg"
        alt="Tokyo meetup"
        className="w-full h-32 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-600 text-sm mb-4">
        Next week @ Members-only event. Join Nomads.com to RSVP.
      </p>
      <button className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
        More info + RSVP
      </button>
    </div>
  </div>
);

const GridSideBox = () => {
  return (
    <div className="space-y-4">
      <InsuranceBox />
      <MeetupBox />
    </div>
  );
};

export default GridSideBox; 