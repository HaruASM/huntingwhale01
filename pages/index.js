import CityCard from '../components/CityCard';
import GridSideBox from '../components/GridSideBox';
import HotelList from '../components/HotelList';
import IconList from '../components/IconList';

const cities = [
  {
    city: "Bangkok",
    country: "Thailand",
    temperature: 31,
    internet: 40,
    cost: 1464,
    imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1000",
    comment: "전통의 강호",
    hoverInfo: "추가 정보: 방콕은 태국의 수도입니다."
  },
  {
    city: "Pattaya",
    country: "Thailand", 
    temperature: 27,
    internet: 46,
    cost: 1120,
    imageUrl: "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?q=80&w=1000",
    comment: "전형적인 여행지 모든것 가능",
    hoverInfo: "추가 정보: 파타야는 해변으로 유명합니다."
  },
  {
    city: "Manila",
    country: "Philippines",
    temperature: 27,
    internet: 30,
    cost: 1578,
    imageUrl: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1000",
    comment: "도박의 도시 안전 주의"
  },
  {
    city: "Vientiane",
    country: "Laos",
    temperature: 28,
    internet: 88,
    cost: 1346,
    imageUrl: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1000",
    comment: "낮은 물가에 비해 언어가 불편"
  },
  {
    city: "Ho Chi Minh City",
    country: "Vietnam",
    temperature: 28,
    internet: 88,
    cost: 1346,
    imageUrl: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1000",
    comment: "떠오르는 관광지"
  },
  {
    city: "Hanoi",
    country: "Vietnam",
    temperature: 28,
    internet: 88,
    cost: 1346,
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000",
    comment: "차분하지만 잠재력이 있는 곳"
  },
  {
    city: "Cebu",
    country: "Philippines",
    temperature: 28,
    internet: 88,
    cost: 1346,
    imageUrl: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1000",
    comment: "해양 스포츠 위주로 즐겨야 하는곳"
  },
  {
    city: "Mexico City3",
    country: "Mexico",
    temperature: 18,
    internet: 39,
    cost: 1701,
    imageUrl: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1000",
    comment: "Lively city with a vibrant nightlife"
  },
  {
    city: "Mexico City4",
    country: "Mexico",
    temperature: 18,
    internet: 39,
    cost: 1701,
    imageUrl: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=1000",
    comment: "Historic city with a rich history"
  }
];

export default function Home() {
  return (
    <div className="max-w-[1160px] mx-auto">
      <IconList />
      <HotelList />

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cities.map((city, index) => (
            <CityCard key={index} {...city} />
          ))}
        </div>
        <div className="w-full lg:w-1/4">
          <GridSideBox />
        </div>
      </div>
    </div>
  );
} 