
import React from 'react';
import { 
  Ticket, 
  Wallet, 
  Cloud, 
  Utensils, 
  Dumbbell, 
  Clock
} from 'lucide-react';
import { Feature, Testimonial, RouteExample } from './types';

export const FEATURES: Feature[] = [
  {
    title: "All-in-One Logistics",
    description: "From BMTC bus tickets and Metro passes to luxury hotel stays and park entries—all booked instantly with one click.",
    icon: <Ticket className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Budget-First Planning",
    description: "Input your budget and destination. Planigo optimizes every rupee to ensure maximum value without hidden costs.",
    icon: <Wallet className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Exclusive Dining Deals",
    description: "Discover top-rated restaurants and enjoy up to 50% off your bills with our curated partner network.",
    icon: <Utensils className="w-6 h-6 text-purple-400" />
  },
  {
    title: "1GB Free Trip Cloud",
    description: "Safe storage for your trip photos, videos, and important travel documents. Expandable via subscription.",
    icon: <Cloud className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Premium Add-ons",
    description: "Need a gym workout or a rental bike? Easily add vehicle rentals and gym access to any trip itinerary.",
    icon: <Dumbbell className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Instant Itineraries",
    description: "Stop manual booking. Our engine handles the complexity of routes like Trivandrum to Bangalore or Bangalore to Goa in seconds.",
    icon: <Clock className="w-6 h-6 text-purple-400" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Digital Nomad",
    content: "Planigo turned my messy 5-tab trip planning into a single click. Finally, someone automated the boring parts of travel!",
    avatar: "https://picsum.photos/seed/arjun/100/100"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "First-time Traveler",
    content: "The budget feature is a lifesaver. I knew exactly what I was getting for my Bangalore to Goa trip without overspending.",
    avatar: "https://picsum.photos/seed/priya/100/100"
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Business Traveler",
    content: "Having my metro tickets and hotel vouchers in one place with 1GB of free storage for docs is incredibly convenient.",
    avatar: "https://picsum.photos/seed/vikram/100/100"
  }
];

export const ROUTES: RouteExample[] = [
  { from: "Trivandrum", to: "Bangalore", image: "https://picsum.photos/seed/blr/800/400" },
  { from: "Bangalore", to: "Goa", image: "https://picsum.photos/seed/goa/800/400" }
];
