"use client";

import React from "react";
import { Star, Quote, Crown } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "We hosted our daughter's destination wedding at Piyush Palace for 2,500 guests. The grand lawn backdrop illuminated at dusk was surreal! The catering, parking management, and royal suite hospitality exceeded all expectations.",
    author: "Vikramraj & Radhika Patel",
    location: "Ahmedabad, Gujarat",
    event: "Royal Destination Wedding"
  },
  {
    quote: "Piyush Palace is a hidden gem along the Kheda highway. The palacial architecture, peaceful 7-acre resort grounds, and pristine swimming pool made our weekend staycation truly majestic.",
    author: "Dr. Ananya Sharma",
    location: "Vadodara, Gujarat",
    event: "Weekend Resort Staycation"
  },
  {
    quote: "Our annual corporate summit was hosted at Piyush Palace's seminar hall followed by a gala dinner on the lawn. Flawless execution, high-speed Wi-Fi, and exemplary vegetarian catering.",
    author: "Siddharth Mehta",
    location: "Surat, Gujarat",
    event: "Corporate Leadership Summit"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#F3EFE9] dark:bg-[#0E0F17] text-neutral-900 dark:text-amber-50 relative overflow-hidden border-t border-amber-500/15 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-950/60 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-serif uppercase tracking-widest">
            <Crown className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            <span>Patron Testimonials</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Words of Distinction from <span className="text-gold-metallic">Our Royal Guests</span>
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="royal-glass-card p-8 rounded-3xl border border-amber-500/25 relative flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-amber-500/20 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 dark:text-amber-100/80 font-light leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-amber-500/20">
                <h4 className="font-serif font-bold text-sm text-gold-metallic">{t.author}</h4>
                <p className="text-[11px] text-neutral-500 dark:text-amber-200/60 font-sans">{t.location} • <span className="text-amber-700 dark:text-amber-400">{t.event}</span></p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
