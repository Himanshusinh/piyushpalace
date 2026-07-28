"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Crown, Sparkles, Building2, Trees, Award, Check, Sun, Moon } from "lucide-react";

export default function HeritageAboutSection() {
  const [activeTab, setActiveTab] = useState<"day" | "night">("night");

  return (
    <section id="about" className="py-24 bg-[#0E0F17] relative overflow-hidden border-t border-amber-500/15">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Column - Authentic Piyush Palace Image Showcase */}
          <div className="lg:col-span-6 relative">
            
            {/* View Switcher Tabs (Daytime vs Golden Evening) */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase font-serif text-amber-300 font-semibold tracking-wider flex items-center gap-2">
                <Crown className="w-4 h-4 text-amber-400" />
                <span>Authentic Piyush Palace Estate</span>
              </span>

              <div className="flex items-center gap-1.5 bg-black/60 border border-amber-500/30 p-1 rounded-full text-xs">
                <button
                  onClick={() => setActiveTab("day")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-serif transition-all ${
                    activeTab === "day"
                      ? "bg-amber-500 text-black font-bold shadow-md"
                      : "text-amber-200/70 hover:text-amber-100"
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>Day Estate View</span>
                </button>
                <button
                  onClick={() => setActiveTab("night")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-serif transition-all ${
                    activeTab === "night"
                      ? "bg-amber-500 text-black font-bold shadow-md"
                      : "text-amber-200/70 hover:text-amber-100"
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>Golden Dusk</span>
                </button>
              </div>
            </div>

            {/* Main Showcase Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-2xl shadow-black/80 group">
              <Image
                src={activeTab === "day" ? "/images/real_piyush_palace.jpg" : "/images/real_piyush_palace_night.jpg"}
                alt="Piyush Palace Real Hotel Building Architecture"
                width={800}
                height={600}
                className="w-full h-[450px] sm:h-[500px] object-cover group-hover:scale-105 transition-all duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 royal-glass-card rounded-2xl border border-amber-500/40">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                      <Crown className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-amber-200">
                        {activeTab === "day" ? "Piyush Palace 7-Acre Estate Grounds" : "Illuminated Royal Sandstone Facade"}
                      </h4>
                      <p className="text-xs text-amber-100/70">Authentic Red Sandstone Palacial Architecture in Goblej</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 font-serif border border-amber-500/40 px-2.5 py-1 rounded-full uppercase">
                    Official Photo
                  </span>
                </div>
              </div>
            </div>

            {/* Accent Decorative Card Overlay */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 z-20 w-64 royal-glass-card p-5 rounded-2xl border border-amber-500/40 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-6 h-6 text-amber-400" />
                <span className="font-serif font-bold text-sm text-gold-metallic">Official Estate Grounds</span>
              </div>
              <p className="text-xs text-amber-200/80 leading-relaxed">
                Featuring classic red-sandstone arches, balconies, and lush mango orchards on NH-8.
              </p>
            </div>
          </div>

          {/* Right Text Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-serif uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Sovereign Estate Overview</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              The Sovereign Splendour of <span className="text-gold-metallic">Piyush Palace</span>
            </h2>

            <p className="text-base text-amber-100/80 leading-relaxed font-light">
              Located at Goblej on the Bareja-Kheda Highway (NH-8), <strong className="text-amber-200 font-semibold">Piyush Palace</strong> stands as an authentic architectural marvel. Built with magnificent red-sandstone, royal balconies, carved window jalis, and sprawling manicured green lawns, the estate offers an unmatched setting for grand destination weddings and luxury staycations.
            </p>

            {/* Key Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-black/40 border border-amber-500/20 hover:border-amber-400/50 transition-colors">
                <Building2 className="w-6 h-6 text-amber-400 mb-2" />
                <h3 className="font-serif text-base font-semibold text-amber-200">Red Sandstone Mansion</h3>
                <p className="text-xs text-amber-100/70 mt-1">Multi-story palacial suite building with open terrace balconies and lawn views.</p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-amber-500/20 hover:border-amber-400/50 transition-colors">
                <Trees className="w-6 h-6 text-amber-400 mb-2" />
                <h3 className="font-serif text-base font-semibold text-amber-200">Lush Orchard Gardens</h3>
                <p className="text-xs text-amber-100/70 mt-1">Sprawling 7-acre green orchards, decorative fountains, and grand event lawns.</p>
              </div>
            </div>

            {/* Bullet Points */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-3 text-sm text-amber-100/90">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span>Convenient location: ~35 km from Ahmedabad City Center & Airport on NH-8</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-amber-100/90">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span>Full-service resort with swimming pool, spa, sports club & seminar halls</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-amber-100/90">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span>Renowned multi-cuisine vegetarian catering & royal banquet management</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
