import { useState } from 'react';

const categories = ['방콕', '호치민', '라오스', '세부', '토쿄'];

const hotels = [
  {
    name: "방콕 1",
    location: "방콕",
    rating: 4.4,
    reviews: 1675,
    price: 129259,
    imageUrl: "https://img.youtube.com/vi/zZbHkEWEwjQ/0.jpg"
  },
  {
    name: "방콕 2",
    location: "방콕",
    rating: 4.5,
    reviews: 1800,
    price: 135000,
    imageUrl: "https://img.youtube.com/vi/4Z3kD2hs2Bs/0.jpg"
  },
  {
    name: "방콕 3",
    location: "방콕",
    rating: 4.6,
    reviews: 1900,
    price: 140000,
    imageUrl: "https://img.youtube.com/vi/sIiiSNhgvZw/0.jpg"
  },
  {
    name: "호치민 1",
    location: "호치민",
    rating: 4.4,
    reviews: 1675,
    price: 129259,
    imageUrl: "https://img.youtube.com/vi/x5g5E5LFEXI/0.jpg"
  },
  {
    name: "호치민 2",
    location: "호치민",
    rating: 4.6,
    reviews: 1900,
    price: 140000,
    imageUrl: "https://img.youtube.com/vi/jR8e5H9xZ5c/0.jpg"
  },
  {
    name: "호치민 3",
    location: "호치민",
    rating: 4.7,
    reviews: 2000,
    price: 145000,
    imageUrl: "https://img.youtube.com/vi/g4nuXpYsAck/0.jpg"
  },
  {
    name: "라오스 1",
    location: "라오스",
    rating: 4.4,
    reviews: 1675,
    price: 129259,
    imageUrl: "https://img.youtube.com/vi/0bamgSTogaQ/0.jpg"
  },
  {
    name: "라오스 2",
    location: "라오스",
    rating: 4.3,
    reviews: 1600,
    price: 125000,
    imageUrl: "https://img.youtube.com/vi/DQ2-J7wvIV8/0.jpg"
  },
  {
    name: "라오스 3",
    location: "라오스",
    rating: 4.5,
    reviews: 1750,
    price: 132000,
    imageUrl: "https://img.youtube.com/vi/WJi1viCfZG4/0.jpg"
  },
  {
    name: "세부 1",
    location: "세부",
    rating: 4.4,
    reviews: 1675,
    price: 129259,
    imageUrl: "https://img.youtube.com/vi/clzMDR7DyNg/0.jpg"
  },
  {
    name: "세부 2",
    location: "세부",
    rating: 4.5,
    reviews: 1750,
    price: 132000,
    imageUrl: "https://img.youtube.com/vi/zUUc9a0eZ2Q/0.jpg"
  },
  {
    name: "세부 3",
    location: "세부",
    rating: 4.6,
    reviews: 1800,
    price: 135000,
    imageUrl: "https://img.youtube.com/vi/nJsKSSXFrbs/0.jpg"
  },
  {
    name: "토쿄 1",
    location: "토쿄",
    rating: 4.4,
    reviews: 1675,
    price: 129259,
    imageUrl: "https://img.youtube.com/vi/ajkykpeCM0Q/0.jpg"
  },
  {
    name: "토쿄 2",
    location: "토쿄",
    rating: 4.7,
    reviews: 2000,
    price: 145000,
    imageUrl: "https://img.youtube.com/vi/07eAGLD5XFk/0.jpg"
  },
  {
    name: "토쿄 3",
    location: "토쿄",
    rating: 4.8,
    reviews: 2100,
    price: 150000,
    imageUrl: "https://img.youtube.com/vi/IquOBRSu8Us/0.jpg"
  }
];

export default function HotelList() {
  const [hoveredCategory, setHoveredCategory] = useState('방콕');

  return (
    <div className="max-w-[1160px] mx-auto">
      <div className="bg-gray-100 rounded-lg mb-8 pb-8">
        <h2 className="text-2xl font-bold mb-4 px-4">화제의 장소들</h2>
        <div className="flex space-x-4 mb-4 px-4">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${hoveredCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onMouseEnter={() => setHoveredCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
          {hotels
            .filter(hotel => hotel.location === hoveredCategory)
            .map(hotel => (
              <div key={hotel.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{hotel.name}</h3>
                  <p className="text-gray-600">평점: {hotel.rating} / 리뷰: {hotel.reviews}개</p>
                  <p className="text-blue-500 font-bold">최저가: {hotel.price.toLocaleString()}원</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
} 