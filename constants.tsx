
import { Room, RoomCategory } from './types';

export const ROOMS: Room[] = [
  {
    id: '1',
    name: 'Mountain Sunrise Suite',
    category: RoomCategory.SUITE,
    price: 450,
    description: 'Classic elegance with mahogany furnishings and breathtaking views of the dawn over the ridges.',
    amenities: ['King Bed', 'Private Spa', 'Mini Bar', 'WiFi', 'Fireplace'],
    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1200',
    availability: 3
  },
  {
    id: '2',
    name: 'Heritage Garden Studio',
    category: RoomCategory.STUDIO,
    price: 280,
    description: 'A ground-floor sanctuary featuring direct access to the botanical estate gardens.',
    amenities: ['Queen Bed', 'Outdoor Seating', 'Rain Shower', 'Organic Toiletries'],
    imageUrl: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=1200',
    availability: 5
  },
  {
    id: '3',
    name: 'The Road Hills Presidential',
    category: RoomCategory.PRESIDENTIAL,
    price: 1200,
    description: 'The pinnacle of global hospitality. Multiple wings, private grand piano, and dedicated concierge.',
    amenities: ['3 Bedrooms', 'Chef on Call', 'Private Pool', 'Wine Cellar', 'Home Theater'],
    imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1200',
    availability: 1
  },
  {
    id: '4',
    name: 'Grand Valley Deluxe',
    category: RoomCategory.DELUXE,
    price: 320,
    description: 'Spacious high-ceiling rooms blending colonial charm with modern 5-star amenities.',
    amenities: ['King Bed', 'Workstation', 'Smart TV', 'Nespresso Machine'],
    imageUrl: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=1200',
    availability: 8
  }
];

export const AMENITIES = [
  { name: 'Grand Infinity Pool', icon: '🏊‍♂️' },
  { name: 'Heritage Wellness Spa', icon: '💆‍♀️' },
  { name: 'Crystal Room Dining', icon: '🍴' },
  { name: 'Private Estate Trails', icon: '🥾' },
  { name: 'White Glove Concierge', icon: '🛎️' },
  { name: 'Gentlemen\'s Library', icon: '📚' }
];
