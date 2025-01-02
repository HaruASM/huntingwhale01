import CityCard from '../components/CityCard';

const cities = [
  {
    city: "Bangkok",
    country: "Thailand",
    temperature: 31,
    internet: 40,
    cost: 1464,
    image: "/images/bangkok.jpg"
  },
  {
    city: "Chiang Mai",
    country: "Thailand", 
    temperature: 27,
    internet: 46,
    cost: 1120,
    image: "/images/chiangmai.jpg"
  },
  // 더 많은 도시 데이터...
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cities.map((city, index) => (
          <CityCard key={index} {...city} />
        ))}
      </div>
    </div>
  );
} 