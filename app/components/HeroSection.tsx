"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Crown, Sparkles, MapPin, ArrowRight, ShieldCheck, Star, Users, Calendar, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const [eventType, setEventType] = useState("wedding");
  const [guests, setGuests] = useState("500+");

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-neutral-950 pt-8 pb-16">
      {/* Background Image with Dark Golden Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/real_piyush_palace_night.jpg"
          alt="Piyush Palace Authentic Building Dusk View"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-85 contrast-110 animate-fade-in"
        />
        {/* Radial Dark & Gold Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/60 to-black/70" />
        <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-black/90 pointer-events-none" />
      </div>

      {/* Decorative Golden Pattern Accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        
        {/* Royal Crest Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full royal-dark-glass-card border border-amber-500/40 text-amber-300 text-xs sm:text-sm tracking-[0.2em] font-serif uppercase mb-6 shadow-2xl animate-pulse-slow">
          <Crown className="w-4 h-4 text-amber-400" />
          <span>✦ 7-Acre Sovereign Palacial Resort & Convention ✦</span>
        </div>

        {/* Main Royal Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.15] max-w-5xl mx-auto drop-shadow-2xl">
          Where Royalty Meets{" "}
          <span className="text-gold-metallic block sm:inline mt-1 sm:mt-0">
            Modern Grandeur
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-amber-100/80 font-sans max-w-3xl mx-auto font-light leading-relaxed drop-shadow">
          Immerse yourself in authentic Indian palatial grandeur at Goblej, Kheda Highway. 
          Featuring sprawling 7-acre manicured wedding lawns for up to 5,000 guests, 
          opulent royal suites, and 5-star resort leisure.
        </p>

        {/* Interactive Quick Reservation / Inquiry Ribbon */}
        <div className="mt-10 max-w-4xl mx-auto royal-dark-glass-card p-3 sm:p-4 rounded-2xl sm:rounded-full border border-amber-500/30 shadow-2xl backdrop-blur-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
            {/* Event / Stay Selector */}
            <div className="bg-black/40 border border-amber-500/20 rounded-xl sm:rounded-full px-4 py-2.5 text-left">
              <label className="block text-[10px] uppercase font-serif tracking-wider text-amber-400 font-semibold">
                Occasion / Stay
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full bg-transparent text-amber-100 text-xs font-medium focus:outline-none cursor-pointer border-none p-0 mt-0.5"
              >
                <option value="wedding" className="bg-neutral-900 text-amber-100">Royal Wedding & Reception</option>
                <option value="suite" className="bg-neutral-900 text-amber-100">Luxury Resort Stay</option>
                <option value="corporate" className="bg-neutral-900 text-amber-100">Corporate Summit / Gala</option>
                <option value="anniversary" className="bg-neutral-900 text-amber-100">Private Regal Celebration</option>
              </select>
            </div>

            {/* Guest Capacity */}
            <div className="bg-black/40 border border-amber-500/20 rounded-xl sm:rounded-full px-4 py-2.5 text-left">
              <label className="block text-[10px] uppercase font-serif tracking-wider text-amber-400 font-semibold">
                Guest Count
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-transparent text-amber-100 text-xs font-medium focus:outline-none cursor-pointer border-none p-0 mt-0.5"
              >
                <option value="50-200" className="bg-neutral-900 text-amber-100">50 - 200 Guests (Indoor Hall)</option>
                <option value="200-1000" className="bg-neutral-900 text-amber-100">200 - 1,000 Guests (Royal Lawn)</option>
                <option value="1000-3000" className="bg-neutral-900 text-amber-100">1,000 - 3,000 Guests (Grand Lawn)</option>
                <option value="5000+" className="bg-neutral-900 text-amber-100">Up to 5,000 Guests (Mega Lawn)</option>
              </select>
            </div>

            {/* Location Tag */}
            <div className="bg-black/40 border border-amber-500/20 rounded-xl sm:rounded-full px-4 py-2.5 text-left flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-serif tracking-wider text-amber-400 font-semibold">
                  Location
                </span>
                <span className="text-xs text-amber-100 font-medium block truncate">
                  AHMEDABAD-KHEDA HWY
                </span>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={onOpenBooking}
              className="w-full h-full min-h-[46px] bg-gold-metallic hover:bg-gold-metallic-hover text-black font-serif font-bold text-xs uppercase tracking-wider rounded-xl sm:rounded-full shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 px-4"
            >
              <span>Check Availability</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Feature Highlights Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-amber-200/80">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> 7 Acres Sprawling Grounds
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> 35 km from Ahmedabad Airport
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> Pure Veg Multi-Cuisine Gourmet
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> 300+ Dedicated Car Parking
          </span>
        </div>

        {/* Stats Grid Bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <div className="royal-dark-glass-card p-4 sm:p-6 rounded-2xl text-center border-t-2 border-t-amber-400">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-metallic block">
              7+ Acres
            </span>
            <span className="text-xs text-amber-200/70 font-sans tracking-wide uppercase mt-1 block">
              Palacial Resort Estate
            </span>
          </div>

          <div className="royal-dark-glass-card p-4 sm:p-6 rounded-2xl text-center border-t-2 border-t-amber-400">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-metallic block">
              5,000
            </span>
            <span className="text-xs text-amber-200/70 font-sans tracking-wide uppercase mt-1 block">
              Max Banquet Capacity
            </span>
          </div>

          <div className="royal-dark-glass-card p-4 sm:p-6 rounded-2xl text-center border-t-2 border-t-amber-400">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-metallic block">
              27+
            </span>
            <span className="text-xs text-amber-200/70 font-sans tracking-wide uppercase mt-1 block">
              Royal Luxury Suites
            </span>
          </div>

          <div className="royal-dark-glass-card p-4 sm:p-6 rounded-2xl text-center border-t-2 border-t-amber-400">
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="font-serif text-xl font-bold text-amber-100 block">
              4.9 / 5.0
            </span>
            <span className="text-[10px] text-amber-200/70 font-sans tracking-wide uppercase block">
              Guest Distinction Rating
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
