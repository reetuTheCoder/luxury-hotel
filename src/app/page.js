'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import RoomsSection from './components/RoomsSection';
import OffersSection from './components/OffersSection';
import DiningSection from './components/DiningSection';
import EventsSection from './components/EventsSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <RoomsSection />
      <OffersSection />
      <DiningSection />
      <EventsSection />
      <LocationSection />
      <Footer />
    </>
  );
}
