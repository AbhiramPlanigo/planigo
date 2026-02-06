
import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface WaitlistFormProps {
  variant?: 'hero' | 'cta';
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ variant = 'hero' }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto relative group">
      {/* Dynamic Background Glow */}
      <div className={`absolute -inset-4 bg-gradient-to-r from-orange-500/15 via-indigo-500/15 to-pink-500/15 rounded-[3rem] blur-3xl transition-opacity duration-700 pointer-events-none ${isFocused ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'}`}></div>
      
      <form 
        onSubmit={handleSubmit}
        className={`relative flex flex-col sm:flex-row items-center gap-0 p-1.5 rounded-[2.5rem] transition-all duration-500 border backdrop-blur-3xl overflow-hidden ${
          isFocused 
          ? 'bg-white/[0.12] border-white/30 shadow-[0_0_50px_-10px_rgba(255,255,255,0.15)]' 
          : 'bg-white/[0.05] border-white/10'
        }`}
      >
        <div className="flex-grow w-full min-w-0 relative group/input">
          <input
            type="email"
            placeholder="Drop your email for early access"
            required
            value={email}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent px-5 sm:px-7 py-5 outline-none text-white placeholder-white/50 font-medium text-base sm:text-lg transition-all focus:placeholder-white/20 min-w-0"
          />
          {/* Subtle Input underline highlight */}
          <div className={`absolute bottom-4 left-5 sm:left-7 right-5 sm:right-7 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transition-opacity duration-500 ${isFocused ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>
        
        <button
          type="submit"
          className={`w-full sm:w-auto flex-shrink-0 flex items-center justify-center gap-3 font-[1000] px-8 sm:px-10 py-5 rounded-[1.8rem] transition-all duration-300 active:scale-95 whitespace-nowrap text-xs uppercase tracking-[0.25em] shadow-xl ${
            submitted 
            ? 'bg-green-500 text-black shadow-green-500/20' 
            : 'bg-white text-black hover:bg-orange-500 hover:text-white hover:shadow-orange-500/30'
          }`}
        >
          {submitted ? (
            <>
              <Check size={18} strokeWidth={3} />
              VERIFIED
            </>
          ) : (
            <>
              GET ACCESS
              <ArrowRight size={16} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
      
      {submitted && (
        <div className="absolute -bottom-10 left-0 w-full text-center">
          <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em] animate-pulse">
            Welcome to the inner circle.
          </p>
        </div>
      )}
      
      {/* Decorative corners */}
      <div className={`absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white/30 rounded-tl-xl transition-opacity duration-500 ${isFocused ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className={`absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white/30 rounded-br-xl transition-opacity duration-500 ${isFocused ? 'opacity-100' : 'opacity-0'}`}></div>
    </div>
  );
};

export default WaitlistForm;
