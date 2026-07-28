"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Crown, Sparkles, Heart, Users, Music, UtensilsCrossed, Calendar, Check, ArrowRight, ShieldCheck } from "lucide-react";

interface WeddingsBanquetsSectionProps {
  onOpenBookingWithData?: (data: { eventType: string; guests: number }) => void;
  onOpenBooking: () => void;
}

export default function WeddingsBanquetsSection({ onOpenBookingWithData, onOpenBooking }: WeddingsBanquetsSectionProps) {
  const [guestCount, setGuestCount] = useState(1200);
  const [selectedEventType, setSelectedEventType] = useState("Royal Wedding & Reception");

  // Determine venue recommendation based on guest count
  const getVenueRecommendation = (count: number) => {
    if (count <= 200) {
      return {
        venue: "Palace Regal AC Hall",
        capacity: "50 - 250 Guests",
        description: "Intimate climate-controlled ballroom with crystal chandeliers and golden jali work."
      };
    } else if (count <= 1000) {
      return {
        venue: "Sovereign Heritage Court",
        capacity: "300 - 1,000 Guests",
        description: "Lush green outdoor courtyard framed by carved palace arches and illuminated fountains."
      };
    } else {
      return {
        venue: "Grand Piyush Palace Lawn (7 Acres)",
        capacity: "1,000 - 5,000 Guests",
        description: "Gujarat's premier wedding mega-lawn with stage setups, fairy light canopy, and space for 5,000 guests."
      };
    }
  };

  const recommendation = getVenueRecommendation(guestCount);

  return (
    <section id="weddings" className="py-24 bg-[#F3EFE9] dark:bg-[#0E0F17] text-neutral-900 dark:text-amber-50 relative overflow-hidden border-t border-amber-500/15 transition-colors duration-500">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-950/60 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-serif uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 fill-amber-500 dark:fill-amber-400" />
            <span>Grand Weddings & Celebrations</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
            Crafting Unforgettable <span className="text-gold-metallic">Royal Marriages</span>
          </h2>

          <p className="text-base text-neutral-700 dark:text-amber-100/70 font-light leading-relaxed">
            Turn your dream wedding into a fairytale royal saga. Piyush Palace is Gujarat’s premier destination wedding venue featuring sprawling lawns, regal decor, and legendary hospitality.
          </p>
        </div>

        {/* Feature Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Main Visual Image */}
          <div className="lg:col-span-7 relative group rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-2xl">
            <Image
              src="/images/banquet.png"
              alt="Grand Wedding Banquet Setup at Piyush Palace"
              width={900}
              height={600}
              className="w-full h-[420px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-5 royal-glass-card rounded-2xl border border-amber-500/40">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-amber-200">The Grand Wedding Lawn</h3>
                  <p className="text-xs text-amber-100/70">Up to 5,000 Guests • Majestic Palace Lighting & Floral Setup</p>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-amber-500 text-black font-serif text-xs font-bold uppercase">
                  Destination Wedding Venue
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 royal-glass-card rounded-2xl border border-amber-500/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-1">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-neutral-950 dark:text-amber-200">Flexible Capacity (50 to 5,000 Guests)</h4>
                  <p className="text-xs text-neutral-700 dark:text-amber-100/70 mt-1">Whether an intimate family Mehendi or a 5,000-guest grand reception, our indoor halls & outdoor lawns adapt seamlessly.</p>
                </div>
              </div>
            </div>

            <div className="p-5 royal-glass-card rounded-2xl border border-amber-500/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-1">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-neutral-950 dark:text-amber-200">Pure Vegetarian Gourmet Feast</h4>
                  <p className="text-xs text-neutral-700 dark:text-amber-100/70 mt-1">Authentic Gujarati Thali, Rajasthani Royal Feasts, North & South Indian delicacies prepared by master chefs.</p>
                </div>
              </div>
            </div>

            <div className="p-5 royal-glass-card rounded-2xl border border-amber-500/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-1">
                  <Music className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-neutral-950 dark:text-amber-200">Complete Wedding Planning Support</h4>
                  <p className="text-xs text-neutral-700 dark:text-amber-100/70 mt-1">Bridal green rooms, grand Baraat procession pathway, stage mandap design, sound, lighting & 300+ car valet parking.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Event Capacity & Venue Recommender Widget */}
        <div className="royal-glass-card rounded-3xl p-6 sm:p-10 border border-amber-500/40 shadow-2xl backdrop-blur-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-serif text-2xl font-bold text-gold-metallic">
              Interactive Event Venue Recommender
            </h3>
            <p className="text-xs text-neutral-700 dark:text-amber-200/70 mt-1">
              Select your expected guest count to discover the perfect venue space at Piyush Palace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Selector Controls */}
            <div className="md:col-span-6 space-y-6">
              
              {/* Event Type Selector */}
              <div>
                <label className="block text-xs uppercase font-serif tracking-wider text-amber-300 mb-2">
                  1. Choose Celebration Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Royal Wedding & Reception", "Sangeet & Mehendi", "Royal Engagement", "Corporate Summit"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedEventType(type)}
                      className={`p-3 rounded-xl text-xs font-serif text-left transition-all ${
                        selectedEventType === type
                          ? "bg-gold-metallic text-black font-bold shadow-md"
                          : "bg-white dark:bg-black/50 text-neutral-800 dark:text-amber-200 border border-amber-500/20 hover:border-amber-400"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs uppercase font-serif tracking-wider text-amber-300">
                    2. Estimated Guests
                  </label>
                  <span className="font-serif font-bold text-lg text-gold-metallic">
                    {guestCount.toLocaleString()} Guests
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-amber-400 h-2 bg-neutral-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-neutral-600 dark:text-amber-200/60 mt-1">
                  <span>100 Guests</span>
                  <span>1,500 Guests</span>
                  <span>5,000 Guests</span>
                </div>
              </div>

            </div>

            {/* Right Recommendation Result Box */}
            <div className="md:col-span-6 bg-amber-500/5 dark:bg-amber-950/40 border border-amber-500/30 p-6 rounded-2xl text-center space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300 text-[10px] uppercase font-serif tracking-widest border border-amber-500/30">
                Recommended Venue Setting
              </div>
              <h4 className="font-serif text-2xl font-bold text-neutral-950 dark:text-white">
                {recommendation.venue}
              </h4>
              <p className="text-xs text-neutral-700 dark:text-amber-100/80 leading-relaxed font-light">
                {recommendation.description}
              </p>
              <div className="text-xs font-serif text-neutral-900 dark:text-amber-300 font-semibold bg-white dark:bg-black/40 py-2 rounded-lg border border-amber-500/20">
                Ideal Capacity: {recommendation.capacity}
              </div>

              <button
                onClick={() => {
                  if (onOpenBookingWithData) {
                    onOpenBookingWithData({ eventType: selectedEventType, guests: guestCount });
                  } else {
                    onOpenBooking();
                  }
                }}
                className="w-full bg-gold-metallic hover:bg-gold-metallic-hover text-black font-serif font-bold py-3 rounded-full text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Get Customized Proposal For {guestCount} Guests</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
