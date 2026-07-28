"use client";

import React from "react";
import { Crown, Sparkles, Waves, Utensils, Flower2, Gamepad2, Briefcase, Car, ShieldCheck, Dumbbell, Baby, Wifi } from "lucide-react";

const AMENITIES = [
  {
    icon: Waves,
    title: "Royal Swimming Pool",
    description: "Open-air swimming pool surrounded by white marble palacial arches and lush palm cabanas."
  },
  {
    icon: Utensils,
    title: "Fine Dining Restaurant",
    description: "Multi-cuisine pure vegetarian dining offering authentic Gujarati Thali, North Indian & Continental delicacies."
  },
  {
    icon: Flower2,
    title: "Spa & Wellness Retreat",
    description: "Rejuvenating Ayurvedic massages and therapeutic spa treatments for ultimate relaxation."
  },
  {
    icon: Dumbbell,
    title: "Fitness Center & Gym",
    description: "Fully equipped modern gym with cardio and strength training equipment for resort guests."
  },
  {
    icon: Gamepad2,
    title: "Billiards & Indoor Games",
    description: "Dedicated card room, billiards tables, table tennis, and indoor board games lounge."
  },
  {
    icon: Briefcase,
    title: "Executive Board Room",
    description: "High-tech seminar halls and board rooms equipped for corporate retreats, meetings & product launches."
  },
  {
    icon: Baby,
    title: "Children's Play Zone",
    description: "Safe and fun outdoor play areas with swings and green lawns for younger guests."
  },
  {
    icon: Car,
    title: "300+ Car Valet Parking",
    description: "Expansive paved private parking lot with 24/7 security surveillance and driver amenities."
  }
];

export default function AmenitiesGrid() {
  return (
    <section id="amenities" className="py-24 bg-[#FAF8F5] dark:bg-[#0B0C10] text-neutral-900 dark:text-amber-50 relative overflow-hidden border-t border-amber-500/15 transition-colors duration-500">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-600/5 rounded-full filter blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-950/60 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-serif uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            <span>Resort Leisure & Facilities</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            World-Class Amenities for an <span className="text-gold-metallic">Exquisite Stay</span>
          </h2>

          <p className="text-base text-neutral-700 dark:text-amber-100/70 font-light leading-relaxed">
            Whether staying for a weekend retreat or attending a grand wedding celebration, enjoy our comprehensive range of luxury resort facilities.
          </p>
        </div>

        {/* Grid of Amenities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="royal-glass-card p-6 rounded-2xl border border-amber-500/20 hover:border-amber-400/60 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-700/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-neutral-950 dark:text-amber-200 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-amber-100/70 font-light mt-2 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
