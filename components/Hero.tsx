
import React, { useState } from 'react';

interface HeroProps {
  checkIn: string;
  checkOut: string;
  guests: string;
  setCheckIn: (val: string) => void;
  setCheckOut: (val: string) => void;
  setGuests: (val: string) => void;
}

const Hero: React.FC<HeroProps> = ({ checkIn, checkOut, guests, setCheckIn, setCheckOut, setGuests }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* 
        Background Layer: 
        1. Place your photo in the same folder as index.html
        2. Name it exactly: hotel-exterior.jpg
      */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <img 
          src="https://i.postimg.cc/Y9nRpTxx/road-hills.jpg" 
          alt="Road Hills Grand Exterior"
          onLoad={() => setImgLoaded(true)}
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-[30s] ease-out hover:scale-110"
          onError={(e) => {
            // Fallback to a high-quality night hotel image if the local file is missing
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000";
            setImgLoaded(true);
          }}
        />
        {/* Deep Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/40"></div>
        <div className="absolute inset-0 bg-slate-950/30 backdrop-brightness-[0.85]"></div>
      </div>

      {/* Loading Shimmer - shows while image is loading */}
      {!imgLoaded && (
        <div className="absolute inset-0 z-0 bg-slate-900 animate-pulse flex items-center justify-center">
            <div className="text-white/10 text-8xl font-bold serif">ROAD HILLS</div>
        </div>
      )}

      <div className="relative z-10 text-center text-white px-4 max-w-6xl">
        <div className="mb-6 overflow-hidden">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.8em] uppercase block animate-slide-down opacity-90 text-amber-400">
            Heritage • Elegance • Distinction
          </span>
        </div>
        
        <h1 className="text-7xl md:text-[11rem] font-bold mb-6 leading-none tracking-tighter serif animate-fade-in drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]">
          Road Hills
        </h1>
        
        <p className="text-lg md:text-2xl font-light mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide opacity-90 animate-fade-in [animation-delay:400ms] text-slate-100">
          Step into a world of timeless grandeur and hillside serenity.
        </p>

        {/* Floating Search Bar */}
        <div className="bg-white/5 backdrop-blur-3xl p-2 md:p-3 rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.7)] border border-white/10 flex flex-col md:flex-row items-center gap-2 text-white animate-slide-up [animation-delay:600ms] max-w-4xl mx-auto">
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-2 px-6 py-2">
            <div className="text-left group cursor-pointer">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-amber-400 block mb-1">Check In</label>
              <input 
                type="date" 
                className="w-full bg-transparent border-none py-1 focus:outline-none text-sm font-medium invert brightness-200 cursor-pointer" 
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div className="text-left group cursor-pointer border-t md:border-t-0 md:border-l border-white/10 pt-2 md:pt-0 md:pl-6">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-amber-400 block mb-1">Check Out</label>
              <input 
                type="date" 
                className="w-full bg-transparent border-none py-1 focus:outline-none text-sm font-medium invert brightness-200 cursor-pointer" 
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
            <div className="text-left group cursor-pointer border-t md:border-t-0 md:border-l border-white/10 pt-2 md:pt-0 md:pl-6">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-amber-400 block mb-1">Guests</label>
              <select 
                className="w-full bg-transparent border-none py-1 focus:outline-none text-sm font-medium appearance-none cursor-pointer"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="1 Adult" className="text-slate-900">1 Adult</option>
                <option value="2 Adults" className="text-slate-900">2 Adults</option>
                <option value="2 Adults, 1 Child" className="text-slate-900">2 Adults, 1 Child</option>
                <option value="Family (4+)" className="text-slate-900">Family (4+)</option>
              </select>
            </div>
          </div>
          
          <button 
            onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto bg-amber-600 text-white px-14 py-5 rounded-xl font-bold text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-amber-900 transition-all duration-500 shadow-xl"
          >
            Check Availability
          </button>
        </div>
      </div>

      <div className="absolute left-12 bottom-24 hidden lg:block vertical-text">
        <span className="text-[9px] font-bold tracking-[1em] text-white/30 uppercase">The Crown of the Valley</span>
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
        @keyframes slide-down {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; filter: blur(10px); }
          to { opacity: 1; filter: blur(0); }
        }
        .animate-slide-down { animation: slide-down 1.2s ease-out forwards; }
        .animate-slide-up { animation: slide-up 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fade-in 2s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Hero;
