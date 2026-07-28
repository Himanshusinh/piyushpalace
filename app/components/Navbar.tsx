"use client";

import React, { useState, useEffect } from "react";
import { Crown, Phone, Calendar, Menu, X, Sparkles, Sun, Moon } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export default function Navbar({ onOpenBooking, theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Royal Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-950 via-neutral-900 to-amber-950 dark:from-amber-950 dark:via-neutral-900 dark:to-amber-950 border-b border-amber-500/20 text-amber-200 text-[11px] sm:text-xs py-2 px-4 text-center tracking-widest font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
        <span className="truncate">ROYAL HERITAGE RESORT & WEDDING DESTINATION • AHMEDABAD-KHEDA HIGHWAY, GUJARAT</span>
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0 hidden sm:inline" />
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? theme === "dark"
              ? "bg-[#0B0C10]/95 backdrop-blur-xl border-b border-amber-500/25 py-3 shadow-2xl shadow-black/80"
              : "bg-white/95 backdrop-blur-xl border-b border-amber-800/15 py-3 shadow-xl shadow-amber-900/5"
            : theme === "dark"
              ? "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 border-b border-amber-500/10"
              : "bg-gradient-to-b from-amber-150/80 via-white/60 to-transparent py-5 border-b border-amber-900/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0B0C10] dark:bg-[#0B0C10] rounded-full flex items-center justify-center">
                <Crown className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-gold-metallic block leading-none">
                PIYUSH PALACE
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-amber-600 dark:text-amber-200/70 font-sans uppercase block mt-1">
                Resort & Banquets
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Visible on XL screens) */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-xs 2xl:text-sm font-medium text-neutral-800 dark:text-amber-100/80">
            <a href="#about" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors tracking-wide shrink-0">
              Overview
            </a>
            <a href="#suites" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors tracking-wide shrink-0">
              Royal Suites
            </a>
            <a href="#weddings" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors tracking-wide flex items-center gap-1.5 shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              Weddings & Events
            </a>
            <a href="#amenities" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors tracking-wide shrink-0">
              Amenities & Club
            </a>
            <a href="#location" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors tracking-wide shrink-0">
              Location
            </a>
          </nav>

          {/* Right Action Callouts & Theme Switcher */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 dark:text-amber-300 transition-all flex items-center gap-1.5 text-xs font-serif"
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Theme`}
            >
              {theme === "dark" ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="hidden md:inline font-semibold">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-amber-700" />
                  <span className="hidden md:inline font-semibold">Dark</span>
                </>
              )}
            </button>

            <a
              href="tel:+919879524500"
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-500/10 dark:bg-amber-950/40 hover:bg-amber-500/20 dark:hover:bg-amber-900/60 border border-amber-500/30 px-3.5 py-2 rounded-full transition-all hover:border-amber-400"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>+91 98795 24500</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden rounded-full p-[1px] font-medium text-xs sm:text-sm transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 active:scale-95 shrink-0"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-600 rounded-full animate-pulse-glow"></span>
              <span className="relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white dark:bg-[#0B0C10] flex items-center gap-1.5 sm:gap-2 text-neutral-900 dark:text-amber-200 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-amber-700 group-hover:text-black transition-all font-semibold">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Reserve Estate</span>
              </span>
            </button>
          </div>

          {/* Mobile/Tablet Menu & Theme Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg border border-amber-500/30 text-amber-600 dark:text-amber-300"
              title="Toggle Light/Dark Theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-amber-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-amber-600 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100 hover:bg-amber-500/10 focus:outline-none border border-amber-500/20 shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile/Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="absolute top-[100%] left-0 w-full xl:hidden bg-white/98 dark:bg-[#0B0C10]/98 border-b border-amber-500/30 px-6 py-6 space-y-4 shadow-2xl backdrop-blur-2xl text-neutral-900 dark:text-amber-50">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-serif text-neutral-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              Overview & Heritage
            </a>
            <a
              href="#suites"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-serif text-neutral-800 dark:text-amber-200 hover:text-amber-400 transition-colors"
            >
              Royal Accommodations
            </a>
            <a
              href="#weddings"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-serif text-neutral-800 dark:text-amber-200 hover:text-amber-400 transition-colors"
            >
              Grand Weddings & Banquets
            </a>
            <a
              href="#amenities"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-serif text-neutral-800 dark:text-amber-200 hover:text-amber-400 transition-colors"
            >
              Resort Amenities & Club
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-serif text-neutral-800 dark:text-amber-200 hover:text-amber-400 transition-colors"
            >
              Location & Contact
            </a>

            <div className="pt-4 border-t border-amber-500/20 flex flex-col gap-3">
              <a
                href="tel:+919879524500"
                className="flex items-center justify-center gap-2 text-sm text-amber-700 dark:text-amber-300 bg-amber-500/10 dark:bg-amber-950/60 border border-amber-500/40 py-2.5 rounded-full"
              >
                <Phone className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Call Concierge: +91 98795 24500</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-gold-metallic text-black font-semibold text-sm py-3 rounded-full shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Event / Room</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
