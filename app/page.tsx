"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HeritageAboutSection from "./components/HeritageAboutSection";
import SuitesShowcase from "./components/SuitesShowcase";
import WeddingsBanquetsSection from "./components/WeddingsBanquetsSection";
import AmenitiesGrid from "./components/AmenitiesGrid";
import TestimonialsSection from "./components/TestimonialsSection";
import LocationContactSection from "./components/LocationContactSection";
import FooterSection from "./components/FooterSection";
import ReservationModal from "./components/ReservationModal";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{ eventType?: string; guests?: number } | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleOpenBooking = () => {
    setModalData(null);
    setIsBookingModalOpen(true);
  };

  const handleOpenBookingWithData = (data: { eventType: string; guests: number }) => {
    setModalData(data);
    setIsBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] dark:bg-[#0B0C10] text-neutral-900 dark:text-amber-50 relative selection:bg-amber-500 selection:text-black transition-colors duration-500">
      {/* Top Navbar with Theme Toggle */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Hero Section */}
      <HeroSection onOpenBooking={handleOpenBooking} />

      {/* Heritage & Overview */}
      <HeritageAboutSection />

      {/* Royal Accommodations & Suites */}
      <SuitesShowcase onOpenBooking={handleOpenBooking} />

      {/* Weddings, Banquets & Venue Recommender */}
      <WeddingsBanquetsSection
        onOpenBooking={handleOpenBooking}
        onOpenBookingWithData={handleOpenBookingWithData}
      />

      {/* Resort Amenities Grid */}
      <AmenitiesGrid />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Location, Contact & FAQs */}
      <LocationContactSection />

      {/* Footer */}
      <FooterSection />

      {/* Modal Drawer */}
      <ReservationModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialData={modalData}
      />
    </main>
  );
}
