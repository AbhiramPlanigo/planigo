
import React from 'react';
import { Bus, Home, Bike, Utensils, Zap, Users, Wallet, Search, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

const TripPreview: React.FC = () => {
  const items = [
    { icon: <Bus size={20} />, label: 'Volvo A/C Sleeper', price: '₹3,500', color: 'text-planigo-blue' },
    { icon: <Home size={20} />, label: 'Stay (2 Nights)', price: '₹4,200', color: 'text-planigo-indigo' },
    { icon: <Bike size={20} />, label: 'Scooty Rental (48h)', price: '₹1,200', color: 'text-planigo-orange' },
    { icon: <Utensils size={20} />, label: 'Food & Drinks Pack', price: '₹2,500', color: 'text-planigo-pink' },
  ];

  const floatingNodes = [
    {
      icon: <Search size={14} />,
      label: 'Scanned 42 Hotels',
      pos: '-top-12 -left-4 md:-top-24 md:-left-48',
      delay: '0s',
      color: 'border-blue-500/30 text-blue-300'
    },
    {
      icon: <CheckCircle2 size={14} />,
      label: 'Best Price Found',
      pos: '-bottom-10 -right-4 md:-bottom-20 md:-right-40',
      delay: '2s',
      color: 'border-green-500/30 text-green-300'
    },
    {
      icon: <MapPin size={14} />,
      label: 'Metro Sync Live',
      pos: 'top-1/2 -left-8 md:-left-64 -translate-y-1/2',
      delay: '4s',
      color: 'border-purple-500/30 text-purple-300'
    },
    {
      icon: <Sparkles size={14} />,
      label: 'Optimized via AI',
      pos: '-top-8 -right-2 md:-top-20 md:-right-36',
      delay: '1s',
      color: 'border-orange-500/30 text-orange-300'
    },
  ];

  return (
    <div className="relative w-full max-w-3xl mt-8 mb-12 md:mt-16 md:mb-20 flex justify-center items-center scale-[0.85] sm:scale-100 origin-center">
      {/* Central Rotating HUD Grid Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[130%] h-[130%] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
        <div className="w-[160%] h-[160%] border border-white/[0.02] rounded-full animate-[spin_90s_linear_infinite_reverse]"></div>
      </div>

      {/* Floating Processing Nodes */}
      {floatingNodes.map((node, idx) => (
        <div
          key={idx}
          className={`absolute ${node.pos} z-20 flex items-center gap-3 px-5 py-2.5 rounded-full glass-card border ${node.color} text-[11px] md:text-[12px] font-bold uppercase tracking-wider whitespace-nowrap animate-float`}
          style={{ animationDelay: node.delay }}
        >
          {node.icon}
          <span>{node.label}</span>
        </div>
      ))}

      {/* Main Preview Card */}
      <div className="relative group w-full max-w-lg animate-float z-10">
        {/* Connection Lines (SVG) - Visible on desktop */}
        <svg className="absolute -inset-40 w-[calc(100%+20rem)] h-[calc(100%+20rem)] pointer-events-none opacity-20 hidden md:block" viewBox="0 0 500 500">
          <path d="M60,60 L250,250 M440,60 L250,250 M60,440 L250,250 M440,440 L250,250" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" fill="none" />
          <circle cx="250" cy="250" r="220" stroke="white" strokeWidth="0.2" fill="none" />
        </svg>

        {/* Enhanced Multi-layer Background Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-planigo-orange/40 via-planigo-indigo/40 to-planigo-blue/40 blur-3xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
        <div className="absolute -inset-16 bg-planigo-indigo/10 blur-[100px] rounded-full opacity-50"></div>

        <div className="relative glass-card rounded-[2.5rem] overflow-hidden border-white/10 shadow-[0_0_120px_-20px_rgba(99,102,241,0.3)]">
          {/* Header */}
          <div className="bg-white/5 p-8 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-planigo-orange to-red-600 flex items-center justify-center shadow-lg shadow-planigo-orange/20">
                <Zap size={24} className="text-white animate-pulse" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/40 font-black mb-1">Planigo Optimized</p>
                <h4 className="text-lg md:text-xl font-bold text-white flex items-center gap-4">
                  Bangalore <span className="text-planigo-orange">→</span> Goa
                </h4>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2.5 justify-end mb-1.5">
                <Users size={16} className="text-white/40" />
                <span className="text-[12px] font-bold text-white/60">2 Travelers</span>
              </div>
              <div className="flex items-center gap-2.5 justify-end">
                <Wallet size={16} className="text-white/40" />
                <span className="text-[12px] font-bold text-white/60">₹12,000 Budget</span>
              </div>
            </div>
          </div>

          {/* List Content */}
          <div className="p-8 space-y-6">
            {items.map((item, i) => (
              <div key={i} className="flex items-center justify-between group/item transition-all hover:translate-x-2">
                <div className="flex items-center gap-6">
                  <div className={`p-3.5 rounded-2xl bg-white/5 ${item.color} group-hover/item:bg-white/10 transition-colors border border-white/5`}>
                    {item.icon}
                  </div>
                  <span className="text-sm md:text-base font-semibold text-white/80 group-hover/item:text-white transition-colors">{item.label}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm md:text-base font-bold text-white">{item.price}</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40 group-hover/item:bg-green-400 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Footer */}
          <div className="p-8 bg-gradient-to-r from-planigo-orange/20 to-transparent flex items-center justify-between border-t border-planigo-orange/20">
            <div className="flex flex-col">
              <span className="text-[11px] font-black text-planigo-orange uppercase tracking-[0.2em] mb-1.5">Total Optimized Cost</span>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-white">₹11,400</span>
                <span className="text-[12px] text-planigo-orange font-bold italic">(-₹600 buffer)</span>
              </div>
            </div>
            <div className="px-5 py-2.5 rounded-xl bg-planigo-orange/10 border border-planigo-orange/20 text-planigo-orange text-[12px] font-black uppercase tracking-[0.2em]">
              LIVE RATE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPreview;
