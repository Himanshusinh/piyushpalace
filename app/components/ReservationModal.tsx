"use client";

import React, { useState } from "react";
import { X, Crown, Calendar, Send, CheckCircle2, Sparkles } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: { eventType?: string; guests?: number } | null;
}

export default function ReservationModal({ isOpen, onClose, initialData }: ReservationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: initialData?.eventType || "Royal Wedding",
    guests: initialData?.guests ? String(initialData.guests) : "500+",
    checkIn: "",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-xl royal-glass-card rounded-3xl p-6 sm:p-8 border border-amber-500/40 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-amber-300 hover:text-amber-100 hover:bg-amber-950/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <Crown className="w-5 h-5 text-amber-400" />
          <span className="text-xs uppercase font-serif tracking-widest text-amber-400 font-semibold">
            Piyush Palace Concierge
          </span>
        </div>

        <h3 className="font-serif text-2xl font-bold text-white">
          Reserve Estate or Check Rates
        </h3>
        <p className="text-xs text-amber-100/70 mt-1 mb-6 font-light">
          Submit your dates & details to receive immediate availability confirmation and tailored royal packages.
        </p>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center mx-auto text-amber-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-xl font-bold text-gold-metallic">
              Reservation Inquiry Submitted
            </h4>
            <p className="text-xs text-amber-100/80 max-w-sm mx-auto leading-relaxed">
              Thank you! Our estate desk at Piyush Palace will reach out directly on <strong className="text-amber-300">{formData.phone}</strong>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-gold-metallic text-black font-serif text-xs font-bold uppercase"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-serif uppercase tracking-wider text-amber-300 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Maharani Meera / Rajesh Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black/60 border border-amber-500/30 rounded-xl px-4 py-2.5 text-xs text-amber-100 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-serif uppercase tracking-wider text-amber-300 mb-1">
                  Mobile / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98795 24500"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-black/60 border border-amber-500/30 rounded-xl px-4 py-2.5 text-xs text-amber-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-serif uppercase tracking-wider text-amber-300 mb-1">
                  Booking Type
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-black/60 border border-amber-500/30 rounded-xl px-4 py-2.5 text-xs text-amber-100 focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  <option value="Royal Wedding" className="bg-neutral-900">Royal Wedding & Reception</option>
                  <option value="Resort Suite Stay" className="bg-neutral-900">Luxury Suite Accommodation</option>
                  <option value="Corporate Event" className="bg-neutral-900">Corporate Summit / Seminar</option>
                  <option value="Private Banquet" className="bg-neutral-900">Private Celebration / Sangeet</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-serif uppercase tracking-wider text-amber-300 mb-1">
                  Target Date
                </label>
                <input
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  className="w-full bg-black/60 border border-amber-500/30 rounded-xl px-4 py-2.5 text-xs text-amber-100 focus:outline-none focus:border-amber-400 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-[11px] font-serif uppercase tracking-wider text-amber-300 mb-1">
                  Guests Capacity
                </label>
                <input
                  type="text"
                  placeholder="e.g. 500 Guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-black/60 border border-amber-500/30 rounded-xl px-4 py-2.5 text-xs text-amber-100 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-serif uppercase tracking-wider text-amber-300 mb-1">
                Special Requests
              </label>
              <textarea
                rows={3}
                placeholder="Mention any specific room preferences, pure-veg catering requirements, or wedding stage preferences..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-black/60 border border-amber-500/30 rounded-xl px-4 py-2.5 text-xs text-amber-100 focus:outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold-metallic hover:bg-gold-metallic-hover text-black font-serif font-bold py-3.5 rounded-full text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 mt-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Confirm & Send Inquiry</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
