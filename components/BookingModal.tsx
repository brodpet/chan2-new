
import React, { useState } from 'react';
import { Room } from '../types';

interface BookingModalProps {
  room: Room | null;
  onClose: () => void;
  checkIn: string;
  checkOut: string;
  guests: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ room, onClose, checkIn, checkOut, guests }) => {
  const [step, setStep] = useState(1);
  if (!room) return null;

  const handleBook = () => {
    setStep(2);
    // Simulate API call
    setTimeout(() => setStep(3), 2000);
  };

  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden animate-slide-up border border-slate-200">
        {step === 1 && (
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-amber-700 uppercase mb-1 block">Your Reservation</span>
                <h2 className="text-3xl font-bold serif text-slate-900">{room.name}</h2>
              </div>
              <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-900 transition">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1 tracking-widest">Check In</span>
                  <p className="font-bold text-slate-800">{formatDate(checkIn)}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1 tracking-widest">Check Out</span>
                  <p className="font-bold text-slate-800">{formatDate(checkOut)}</p>
                </div>
              </div>

              <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-600">{nights} {nights === 1 ? 'Night' : 'Nights'} x ${room.price}</span>
                  <span className="font-bold text-slate-900">${room.price * nights}</span>
                </div>
                <div className="flex justify-between mb-4 pb-4 border-b border-amber-200/50">
                  <span className="text-slate-600">Service Fee</span>
                  <span className="font-bold text-slate-900">$45</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-slate-900">
                  <span>Total</span>
                  <span className="text-amber-700">${room.price * nights + 45}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-500">
                  <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  <span>Reserving for: <span className="font-bold text-slate-800">{guests}</span></span>
                </div>
                <input type="email" placeholder="Email Address" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-600 outline-none transition-all" />
                <button 
                  onClick={handleBook}
                  className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl shadow-xl shadow-slate-900/20 hover:bg-slate-800 transition uppercase tracking-widest text-[10px]"
                >
                  Confirm Reservation
                </button>
              </div>
              <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest">No immediate charge • Payment at check-in</p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="p-16 text-center">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-amber-700 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2 serif text-slate-900">Securing Your Suite</h2>
            <p className="text-slate-500">Connecting to the Road Hills concierge system...</p>
          </div>
        )}

        {step === 3 && (
          <div className="p-16 text-center">
            <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-slate-900/30">
              <svg className="w-10 h-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 serif text-slate-900">Reservation Confirmed!</h2>
            <p className="text-slate-500 mb-8 max-w-sm mx-auto">An invitation has been sent to your email. We look forward to welcoming you to {room.name}.</p>
            <button 
              onClick={onClose}
              className="bg-amber-600 text-white px-10 py-3 rounded-xl font-bold hover:bg-amber-500 transition shadow-lg uppercase tracking-widest text-[10px]"
            >
              Back to Resort
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
