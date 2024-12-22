import React from 'react';
import AboutSection from './AboutSection';
import QuickLinks from './QuickLinks';
import ContactInfo from './ContactInfo';
import Newsletter from './Newsletter';
import BottomBar from './BottomBar';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AboutSection />
          <QuickLinks />
          <ContactInfo />
          <Newsletter />
        </div>
        <BottomBar />
      </div>
    </footer>
  );
}