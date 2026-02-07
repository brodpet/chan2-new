
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoomCard from './components/RoomCard';
import AIChat from './components/AIChat';
import BookingModal from './components/BookingModal';
import { ROOMS, AMENITIES } from './constants';
import { Room } from './types';

const App: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  
  const today = new Date();
  const future = new Date();
  future.setDate(today.getDate() + 5);

  const [checkIn, setCheckIn] = useState(today.toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState(future.toISOString().split('T')[0]);
  const [guests, setGuests] = useState('2 Adults');

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main>
        <Hero 
          checkIn={checkIn} 
          checkOut={checkOut} 
          guests={guests}
          setCheckIn={setCheckIn}
          setCheckOut={setCheckOut}
          setGuests={setGuests}
        />

        {/* Introduction Section */}
        <section id="about" className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-amber-900/5 rounded-3xl group-hover:bg-amber-900/10 transition-colors"></div>
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Lobby"
                className="relative z-10 rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-amber-600 rounded-2xl z-20 flex flex-col items-center justify-center text-white shadow-2xl p-4 hidden md:flex">
                <span className="text-4xl font-bold mb-1">15+</span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-center opacity-80">Awards of Excellence</span>
              </div>
            </div>
            <div>
              <span className="text-sm font-bold tracking-[0.3em] text-amber-700 uppercase mb-4 block">The Road Hills Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 serif leading-tight text-slate-900">Elevated living in the heart of nature</h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed font-light">
                Perched atop the highest peak of the valley, Road Hills is more than a destination; it's a sensory journey. We believe in the luxury of space, the elegance of silence, and the profound beauty of a sunset viewed from your private balcony.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-2 serif text-slate-800">Scenic Views</h4>
                  <p className="text-sm text-slate-400">Every room is designed with 180° windows to capture the changing light of the hills.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 serif text-slate-800">Organic Cuisine</h4>
                  <p className="text-sm text-slate-400">Our chefs source directly from local hillside farms for a truly authentic palette.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience / Amenities Section */}
        <section id="amenities" className="py-24 bg-slate-50 px-4">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <span className="text-sm font-bold tracking-[0.3em] text-amber-700 uppercase mb-4 block">The Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold serif mb-6 text-slate-900">Designed for your well-being</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-6">
            {AMENITIES.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-amber-600/30 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
                <span className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500">{item.icon}</span>
                <h3 className="text-xl font-bold mb-3 serif text-slate-800">{item.name}</h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed">Experience ultimate relaxation with our carefully curated facility and premium services.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rooms Section */}
        <section id="rooms" className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-sm font-bold tracking-[0.3em] text-amber-700 uppercase mb-4 block">Accommodation</span>
              <h2 className="text-4xl md:text-6xl font-bold serif leading-tight text-slate-900">Suites & Villas</h2>
              <p className="text-slate-400 mt-4 leading-relaxed font-light">Select from our range of meticulously designed sanctuaries, each blending contemporary luxury with the raw beauty of the Road Hills terrain.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 rounded-full border border-slate-200 text-slate-500 text-sm font-bold hover:bg-slate-50 transition">VIEW ALL</button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {ROOMS.map(room => (
              <RoomCard 
                key={room.id} 
                room={room} 
                onBook={(r) => setSelectedRoom(r)} 
              />
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden bg-slate-950 text-white p-12 md:p-24 text-center">
            <div className="absolute inset-0 opacity-20">
              <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold serif mb-8">Ready to escape?</h2>
              <p className="text-amber-100/70 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
                Join our exclusive members' list and receive a 15% discount on your first booking at Road Hills.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <input type="email" placeholder="Email Address" className="flex-1 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 focus:outline-none focus:bg-white/20 transition" />
                <button className="bg-white text-slate-950 px-10 py-4 rounded-2xl font-bold hover:bg-slate-100 transition shadow-2xl">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-20">
          <div className="col-span-2">
            <h3 className="text-3xl font-bold serif mb-6 tracking-tighter">ROAD HILLS</h3>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Experience the pinnacle of hospitality where nature meets luxury. Our hill-station retreat offers unparalleled comfort and breathtaking views.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition">FB</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition">IG</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition">TW</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-amber-500">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Our Suites</a></li>
              <li><a href="#" className="hover:text-white transition">Wellness & Spa</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-amber-500">Contact</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>123 Peak View Road,<br />Sky Valley, SH 90210</li>
              <li>reservations@roadhills.com</li>
              <li>+1 (555) 012-3456</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">
          <p>© 2024 Road Hills Luxury Resort. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>

      <BookingModal 
        room={selectedRoom} 
        onClose={() => setSelectedRoom(null)}
        checkIn={checkIn}
        checkOut={checkOut}
        guests={guests}
      />

      <AIChat />
    </div>
  );
};

export default App;
