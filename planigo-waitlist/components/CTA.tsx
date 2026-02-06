
import React from 'react';
import WaitlistForm from './WaitlistForm';

const CTA: React.FC = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-purple-600/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 border border-white/10 rounded-[40px] p-12 md:p-24 bg-white/[0.02] backdrop-blur-sm">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to travel <br/> on auto-pilot?</h2>
        <p className="text-xl text-purple-200/60 mb-10 max-w-xl mx-auto">
          Be the first to experience Planigo. Reserve your spot on the waitlist today for early access and exclusive first-trip offers.
        </p>
        
        <WaitlistForm variant="cta" />
        
        <p className="mt-8 text-sm text-purple-500 font-medium">
          Limited Beta Access Coming Soon
        </p>
      </div>
    </section>
  );
};

export default CTA;
