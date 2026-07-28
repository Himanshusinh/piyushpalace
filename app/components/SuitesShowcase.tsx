"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Crown, Sparkles, BedDouble, Wifi, Coffee, Tv, ShieldCheck, ArrowRight, Star, ChevronRight } from "lucide-react";

interface SuitesShowcaseProps {
  onOpenBooking: () => void;
}

const SUITES_DATA = [
  {
    id: "maharaja",
    name: "Maharaja Royal Palace Suite",
    category: "Presidential Luxury",
    price: "₹14,500",
    period: "/ night + taxes",
    description: "The pinnacle of royal accommodation featuring hand-carved mahogany poster bed, crystal chandeliers, private marble Jacuzzi, and dedicated 24-hour butler service.",
    image: "/images/suite.png",
    sqft: "950 sq.ft",
    occupancy: "2 Adults + 2 Children",
    features: [
      "Royal Four-Poster Canopy Bed",
      "Private Marble Jacuzzi & Rain Shower",
      "24/7 Personal Butler Service",
      "Complimentary Royal Breakfast & Hi-Tea",
      "Private Balcony Overlooking Palace Lawns",
      "High-Speed Wi-Fi & Smart Entertainment"
    ]
  },
  {
    id: "heritage",
    name: "Heritage Deluxe Palace Suite",
    category: "Heritage Collection",
    price: "₹9,800",
    period: "/ night + taxes",
    description: "Elegantly styled rooms blending traditional Gujarati & Rajasthani royal motifs with plush contemporary amenities and garden pool views.",
    image: "/images/hero.png",
    sqft: "650 sq.ft",
    occupancy: "2 Adults",
    features: [
      "King Size Velvet Heritage Bed",
      "Opulent Marble Bathroom",
      "Pool & Garden View Windows",
      "Complimentary Gourmet Breakfast",
      "Mini Bar & Coffee Crafter",
      "Daily Turn-Down Service"
    ]
  },
  {
    id: "club",
    name: "Executive Royal Club Suite",
    category: "Resort Collection",
    price: "₹7,200",
    period: "/ night + taxes",
    description: "Spacious, light-filled rooms designed for business travelers and weekend family retreats seeking quiet relaxation and full resort clubhouse access.",
    image: "/images/suite.png",
    sqft: "480 sq.ft",
    occupancy: "2 Adults",
    features: [
      "Luxury Ergonomic Work & Rest Spaces",
      "Full Clubhouse & Pool Access",
      "Flat Screen Smart TV & Wi-Fi",
      "Express In-Room Dining",
      "Complimentary Spa Voucher"
    ]
  }
];

export default function SuitesShowcase({ onOpenBooking }: SuitesShowcaseProps) {
  const [activeSuiteId, setActiveSuiteId] = useState("maharaja");
  const activeSuite = SUITES_DATA.find((s) => s.id === activeSuiteId) || SUITES_DATA[0];

  return (
    <section id="suites" className="py-24 bg-[#FAF8F5] dark:bg-[#0B0C10] text-neutral-900 dark:text-amber-50 relative overflow-hidden border-t border-amber-500/15 transition-colors duration-500">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-950/60 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-serif uppercase tracking-widest">
            <Crown className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            <span>Royal Accommodations</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Opulent Suites Designed for <span className="text-gold-metallic">Sovereign Comfort</span>
          </h2>

          <p className="text-base text-neutral-700 dark:text-amber-100/70 font-light leading-relaxed">
            Every room at Piyush Palace is a masterpiece of royal heritage, featuring rich teak furnishings, fine silk tapestries, and state-of-the-art modern amenities.
          </p>
        </div>

        {/* Tab Selection Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {SUITES_DATA.map((suite) => {
            const isActive = suite.id === activeSuiteId;
            return (
              <button
                key={suite.id}
                onClick={() => setActiveSuiteId(suite.id)}
                className={`px-6 py-3 rounded-full text-xs sm:text-sm font-serif tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? "bg-gold-metallic text-black font-bold shadow-lg shadow-amber-500/20 scale-105"
                    : "royal-glass-card text-amber-200 hover:text-amber-100 hover:border-amber-400/50"
                }`}
              >
                {suite.name}
              </button>
            );
          })}
        </div>

        {/* Selected Suite Showcase Box */}
        <div className="royal-glass-card rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image Box */}
            <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden border border-amber-500/40 shadow-2xl">
              <Image
                src={activeSuite.image}
                alt={activeSuite.name}
                width={800}
                height={550}
                className="w-full h-[380px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs px-3.5 py-1.5 rounded-full font-serif">
                {activeSuite.category}
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-amber-200">
                <span className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-500/30">
                  Size: {activeSuite.sqft}
                </span>
                <span className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-500/30">
                  Capacity: {activeSuite.occupancy}
                </span>
              </div>
            </div>

            {/* Details Box */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-serif font-semibold">
                  {activeSuite.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white mt-1">
                  {activeSuite.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-amber-100/70 font-light mt-3 leading-relaxed">
                  {activeSuite.description}
                </p>
              </div>

              {/* Price Tag */}
              <div className="p-4 rounded-2xl bg-amber-500/5 dark:bg-amber-950/40 border border-amber-500/25 flex items-baseline gap-2">
                <span className="text-xs text-amber-700 dark:text-amber-300 uppercase font-serif">Starting from</span>
                <span className="font-serif text-3xl font-bold text-gold-metallic">
                  {activeSuite.price}
                </span>
                <span className="text-xs text-neutral-600 dark:text-amber-200/60 font-sans">{activeSuite.period}</span>
              </div>

              {/* Features List */}
              <div className="space-y-2.5">
                <h4 className="text-xs uppercase font-serif tracking-wider text-amber-300 font-semibold">
                  Included Amenities & Privileges
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-800 dark:text-amber-100/90">
                  {activeSuite.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-[#FAF8F5] dark:bg-black/40 p-2 rounded-lg border border-amber-500/20 dark:border-amber-500/10">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-gold-metallic hover:bg-gold-metallic-hover text-black font-serif font-bold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Reserve This Suite</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
