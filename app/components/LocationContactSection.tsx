"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Sparkles, CheckCircle2, ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Where is Piyush Palace located and how far is it from Ahmedabad?",
    a: "Piyush Palace is located at Village Goblej on the Bareja-Kheda Highway (NH-8), Gujarat. It is conveniently situated approximately 35 km (around 40-45 minutes drive) from Ahmedabad City Center and Airport."
  },
  {
    q: "What is the guest capacity for weddings and receptions?",
    a: "Our outdoor Grand Wedding Lawn can accommodate up to 5,000 guests for mega receptions. Additionally, we offer indoor climate-controlled banquet halls for gatherings of 50 to 200 guests."
  },
  {
    q: "Is parking available for large events?",
    a: "Yes, Piyush Palace features an expansive paved private parking lot accommodating over 300 vehicles with 24/7 security personnel and valet parking services."
  },
  {
    q: "What type of food and catering is offered?",
    a: "We offer 100% pure vegetarian gourmet catering featuring authentic Gujarati Thali, Rajasthani Royal Thali, North Indian, and international cuisines tailored for weddings and resort guests."
  }
];

export default function LocationContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "Royal Wedding",
    guests: "500+",
    date: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // keep success visible
    }, 1000);
  };

  return (
    <section id="location" className="py-24 bg-[#0B0C10] relative overflow-hidden border-t border-amber-500/15">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-serif uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Estate Location & Concierge</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Plan Your Visit to <span className="text-gold-metallic">Piyush Palace</span>
          </h2>

          <p className="text-base text-amber-100/70 font-light leading-relaxed">
            Reach out to our royal concierge team to schedule a personal site visit, request wedding packages, or book resort accommodations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact & Location Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="royal-glass-card p-6 rounded-3xl border border-amber-500/25 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-amber-200">Resort & Venue Address</h3>
                  <p className="text-xs text-amber-100/80 mt-1 leading-relaxed">
                    Piyush Palace Hotel & Resort<br />
                    Village Goblej, Ahmedabad-Kheda Highway (NH-8),<br />
                    Kheda District, Gujarat 387550, India
                  </p>
                  <span className="inline-block mt-2 text-[11px] text-amber-400 font-serif font-semibold">
                    📍 35 km from Ahmedabad City Center
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Lines */}
            <div className="royal-glass-card p-6 rounded-3xl border border-amber-500/25 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-amber-200">Direct Reservations Line</h3>
                  <div className="mt-2 space-y-1 text-xs text-amber-100/90 font-medium">
                    <p className="flex items-center gap-2">
                      <span className="text-amber-400 font-serif">Front Desk:</span> +91 98795 24500
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-amber-400 font-serif">Wedding Desk:</span> +91 98250 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timings & Email */}
            <div className="royal-glass-card p-6 rounded-3xl border border-amber-500/25 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-amber-200">Concierge Desk</h3>
                  <p className="text-xs text-amber-100/80 mt-1">
                    Email: concierge@piyushpalace.co.in<br />
                    Resort Desk: Open 24 Hours / 7 Days
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-3 pt-4">
              <h3 className="font-serif text-lg font-bold text-gold-metallic">Frequently Asked Questions</h3>
              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-black/50 border border-amber-500/20 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 text-left font-serif text-xs font-semibold text-amber-200 flex justify-between items-center gap-2 hover:text-amber-300"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 pb-4 text-xs text-amber-100/70 font-sans leading-relaxed border-t border-amber-500/10 pt-2">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="royal-glass-card p-8 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl backdrop-blur-2xl">
              
              <div className="mb-8">
                <span className="text-xs uppercase font-serif tracking-widest text-amber-400 font-semibold">
                  Royal Concierge Inquiry
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  Request Proposals & Booking Details
                </h3>
                <p className="text-xs text-amber-100/70 mt-2 font-light">
                  Fill in your requirements below and our estate manager will contact you within 2 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-amber-950/60 border border-amber-500/40 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center mx-auto text-amber-400">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-gold-metallic">
                    Inquiry Received with Distinction
                  </h4>
                  <p className="text-xs text-amber-100/80 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong className="text-amber-300">{formData.name}</strong>. Our royal concierge team at Piyush Palace will contact you shortly on {formData.phone || "your number"}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-gold-metallic text-black font-serif text-xs font-bold uppercase"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-serif uppercase tracking-wider text-amber-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikramaditya Singh"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-black/60 border border-amber-500/25 rounded-xl px-4 py-3 text-xs text-amber-100 focus:outline-none focus:border-amber-400 placeholder:text-amber-100/30"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-serif uppercase tracking-wider text-amber-300 mb-1">
                        Mobile Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-black/60 border border-amber-500/25 rounded-xl px-4 py-3 text-xs text-amber-100 focus:outline-none focus:border-amber-400 placeholder:text-amber-100/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-serif uppercase tracking-wider text-amber-300 mb-1">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full bg-black/60 border border-amber-500/25 rounded-xl px-4 py-3 text-xs text-amber-100 focus:outline-none focus:border-amber-400 cursor-pointer"
                      >
                        <option value="Royal Wedding" className="bg-neutral-900">Royal Wedding & Reception</option>
                        <option value="Suite Stay" className="bg-neutral-900">Luxury Suite Stay</option>
                        <option value="Sangeet" className="bg-neutral-900">Sangeet / Mehendi</option>
                        <option value="Corporate" className="bg-neutral-900">Corporate Seminar</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-serif uppercase tracking-wider text-amber-300 mb-1">
                        Guests Count
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-black/60 border border-amber-500/25 rounded-xl px-4 py-3 text-xs text-amber-100 focus:outline-none focus:border-amber-400 cursor-pointer"
                      >
                        <option value="Resort Stay (1-4)" className="bg-neutral-900">1 - 4 Guests (Resort Stay)</option>
                        <option value="50-200" className="bg-neutral-900">50 - 200 Guests</option>
                        <option value="200-1000" className="bg-neutral-900">200 - 1,000 Guests</option>
                        <option value="1000-5000" className="bg-neutral-900">1,000 - 5,000 Guests</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-serif uppercase tracking-wider text-amber-300 mb-1">
                        Target Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-black/60 border border-amber-500/25 rounded-xl px-4 py-3 text-xs text-amber-100 focus:outline-none focus:border-amber-400 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-serif uppercase tracking-wider text-amber-300 mb-1">
                      Special Requirements or Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Specify your wedding dates, catering preferences, or accommodation needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-black/60 border border-amber-500/25 rounded-xl px-4 py-3 text-xs text-amber-100 focus:outline-none focus:border-amber-400 placeholder:text-amber-100/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-metallic hover:bg-gold-metallic-hover text-black font-serif font-bold py-4 rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Royal Inquiry</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
