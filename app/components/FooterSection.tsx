"use client";

import React from "react";
import { Crown, Sparkles, MapPin, Phone, Mail, ArrowUp } from "lucide-react";

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-amber-100/80 border-t border-amber-500/25 relative pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-amber-500/20">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-amber-700 p-0.5 shadow-md">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                  <Crown className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-gold-metallic">
                PIYUSH PALACE
              </span>
            </div>

            <p className="text-xs text-amber-100/70 leading-relaxed max-w-sm font-light">
              Gujarat’s premier 7-acre royal heritage resort and luxury wedding venue. Situated at Goblej on the Ahmedabad-Kheda Highway.
            </p>

            <div className="text-xs text-amber-300 font-serif flex items-center gap-2 pt-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Goblej, Ahmedabad-Kheda Highway (NH-8), Gujarat 387550</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold text-amber-200 uppercase tracking-widest mb-4">
              Palace Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-amber-100/70">
              <li><a href="#about" className="hover:text-amber-300 transition-colors">Overview & Heritage</a></li>
              <li><a href="#suites" className="hover:text-amber-300 transition-colors">Maharaja Suites</a></li>
              <li><a href="#weddings" className="hover:text-amber-300 transition-colors">Royal Weddings (5,000 Cap)</a></li>
              <li><a href="#amenities" className="hover:text-amber-300 transition-colors">Swimming Pool & Club</a></li>
              <li><a href="#location" className="hover:text-amber-300 transition-colors">Location & Directions</a></li>
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h4 className="font-serif text-sm font-bold text-amber-200 uppercase tracking-widest mb-4">
              Celebrations
            </h4>
            <ul className="space-y-2.5 text-xs text-amber-100/70">
              <li><span className="text-amber-300">Destination Marriages</span></li>
              <li><span>Sangeet & Gala Nights</span></li>
              <li><span>Corporate Retreats & Summits</span></li>
              <li><span>Pure Veg Multi-Cuisine Dining</span></li>
              <li><span>Spa & Wellness Retreat</span></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="font-serif text-sm font-bold text-amber-200 uppercase tracking-widest mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-amber-100/80">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>+91 98795 24500</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>+91 98250 12345</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>concierge@piyushpalace.co.in</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-200/60 font-light">
          <p>© {new Date().getFullYear()} Piyush Palace Hotel & Resort. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-200 font-serif font-medium transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
