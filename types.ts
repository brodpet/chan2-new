
export enum RoomCategory {
  DELUXE = 'Deluxe Room',
  SUITE = 'Hillview Suite',
  PRESIDENTIAL = 'Presidential Villa',
  STUDIO = 'Garden Studio'
}

export interface Room {
  id: string;
  name: string;
  category: RoomCategory;
  price: number;
  description: string;
  amenities: string[];
  imageUrl: string;
  availability: number;
}

export interface BookingDetails {
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}
