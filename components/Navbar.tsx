
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl' 
        : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="text-2xl font-bold tracking-[-0.05em] transition-colors duration-500 serif text-white">
              ROAD HILLS
            </span>
          </div>
          
          <div className="hidden md:flex space-x-12 text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
            <button onClick={() => scrollToSection('hero')} className="hover:text-amber-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('rooms')} className="hover:text-amber-400 transition-colors">Villas</button>
            <button onClick={() => scrollToSection('amenities')} className="hover:text-amber-400 transition-colors">Experience</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition-colors">About</button>
          </div>

          <div className="hidden md:block">
            <button 
                onClick={() => scrollToSection('rooms')}
                className={`px-8 py-3 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all duration-500 shadow-xl ${
                  scrolled 
                    ? 'bg-amber-600 text-white hover:bg-amber-500' 
                    : 'bg-white text-slate-950 hover:bg-amber-400 hover:text-white'
                }`}
            >
              Reserve
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10 px-6 pt-6 pb-12 space-y-6 animate-fade-in shadow-2xl">
          <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-xs font-bold tracking-widest text-white/70 hover:text-amber-400 uppercase">Home</button>
          <button onClick={() => scrollToSection('rooms')} className="block w-full text-left text-xs font-bold tracking-widest text-white/70 hover:text-amber-400 uppercase">Villas</button>
          <button onClick={() => scrollToSection('amenities')} className="block w-full text-left text-xs font-bold tracking-widest text-white/70 hover:text-amber-400 uppercase">Experience</button>
          <button onClick={() => scrollToSection('about')} className="block w-full text-left text-xs font-bold tracking-widest text-white/70 hover:text-amber-400 uppercase">About</button>
          <button 
            onClick={() => scrollToSection('rooms')}
            className="w-full mt-4 bg-amber-600 text-white py-4 rounded-xl font-bold text-xs tracking-widest uppercase shadow-lg shadow-amber-900/20"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
