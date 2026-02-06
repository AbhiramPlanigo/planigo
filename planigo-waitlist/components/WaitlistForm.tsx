
import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface WaitlistFormProps {
  variant?: 'hero' | 'cta';
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ variant = 'hero' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const submitted = status === 'success';

  const isValidEmail = (email: string) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique violation
          setErrorMessage('You are already on the list!');
          setStatus('error');
        } else {
          throw error;
        }
      } else {
        setStatus('success');
        setTimeout(() => {
          setStatus('idle');
        }, 3000);
        setEmail('');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      setErrorMessage('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto relative group">
      {/* Dynamic Background Glow */}
      <div className={`absolute -inset-4 bg-gradient-to-r from-planigo-orange/15 via-planigo-indigo/15 to-planigo-pink/15 rounded-[3rem] blur-3xl transition-opacity duration-700 pointer-events-none ${isFocused ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'}`}></div>

      <form
        onSubmit={handleSubmit}
        className={`relative flex flex-col sm:flex-row items-center gap-0 p-1.5 rounded-[2.5rem] transition-all duration-500 border backdrop-blur-3xl overflow-hidden glass-card ${isFocused
          ? 'bg-white/[0.12] border-white/30 shadow-[0_0_50px_-10px_rgba(255,255,255,0.15)]'
          : 'border-white/10'
          }`}
      >
        <div className="flex-grow w-full min-w-0 relative group/input">
          <input
            type="email"
            placeholder="Drop your email for early access"
            required
            value={email}
            disabled={status === 'loading' || status === 'success'}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent px-5 sm:px-7 py-5 outline-none text-white placeholder-white/50 font-medium text-base sm:text-lg transition-all focus:placeholder-white/20 min-w-0 disabled:opacity-50"
          />
          {/* Subtle Input underline highlight */}
          <div className={`absolute bottom-4 left-5 sm:left-7 right-5 sm:right-7 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transition-opacity duration-500 ${isFocused ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>

        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className={`w-full sm:w-auto flex-shrink-0 flex items-center justify-center gap-3 font-[1000] px-8 sm:px-10 py-5 rounded-[1.8rem] transition-all duration-300 active:scale-95 active:bg-white active:!text-black focus:bg-white focus:!text-black hover:!text-black whitespace-nowrap text-xs uppercase tracking-[0.25em] shadow-xl z-10 ${submitted
            ? 'bg-green-500 text-black shadow-green-500/20'
            : 'bg-white text-black hover:bg-planigo-orange hover:shadow-planigo-orange/30 disabled:opacity-70 disabled:cursor-not-allowed'
            }`}
        >
          {status === 'loading' ? (
            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
          ) : submitted ? (
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

      {/* Success Message */}
      {submitted && (
        <div className="absolute -bottom-10 left-0 w-full text-center">
          <p className="text-planigo-orange text-[10px] font-black uppercase tracking-[0.4em] animate-pulse">
            Welcome to the inner circle.
          </p>
        </div>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <div className="absolute -bottom-10 left-0 w-full text-center">
          <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider">
            {errorMessage}
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
