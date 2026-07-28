"use client";

import React, { useState } from "react";
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

  const handleOpenBooking = () => {
    setModalData(null);
    setIsBookingModalOpen(true);
  };

  const handleOpenBookingWithData = (data: { eventType: string; guests: number }) => {
    setModalData(data);
    setIsBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#0B0C10] text-amber-50 relative selection:bg-amber-500 selection:text-black">
      {/* Top Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

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
