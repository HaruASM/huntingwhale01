import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faTicketAlt, faHome, faSwimmer } from '@fortawesome/free-solid-svg-icons';

const icons = [
  { icon: faSwimmer, label: '일주일찍먹' },
  { icon: faHome, label: '한달살기' },
  { icon: faTicketAlt, label: '지역축제' },
  { icon: faBed, label: '가성비숙소' },
  { icon: faTicketAlt, label: '클럽투어' },
  { icon: faSwimmer, label: '네임드발자취' },
  // 추가 아이콘...
];

export default function IconList() {
  return (
    <div className="flex space-x-4 my-8">
      {icons.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <FontAwesomeIcon icon={item.icon} size="2x" />
          <span className="text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  );
} 