
import React from 'react';
import { Room } from '../types';

interface RoomCardProps {
  room: Room;
  onBook: (room: Room) => void;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, onBook }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
      <div className="relative h-72 overflow-hidden">
        <img 
          src={room.imageUrl} 
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900">
            {room.category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <div className="bg-slate-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-lg font-bold border border-white/10">
            ${room.price}<span className="text-xs font-normal opacity-70"> / night</span>
          </div>
        </div>
      </div>
      
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-700 transition-colors leading-tight serif text-slate-900">{room.name}</h3>
        <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed font-light">
          {room.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {room.amenities.slice(0, 4).map((amenity, idx) => (
            <span key={idx} className="bg-slate-50 px-3 py-1 rounded-lg text-[9px] text-slate-500 font-bold border border-slate-200 uppercase tracking-wider">
              {amenity}
            </span>
          ))}
          {room.amenities.length > 4 && <span className="text-[10px] text-amber-600 font-bold self-center">+{room.amenities.length - 4} MORE</span>}
        </div>

        <button 
          onClick={() => onBook(room)}
          className="mt-auto w-full bg-transparent border-2 border-slate-900 text-slate-900 font-bold py-4 rounded-xl hover:bg-slate-900 hover:text-white transition-all duration-300 group-hover:shadow-xl uppercase tracking-widest text-[10px]"
        >
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
