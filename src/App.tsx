import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BeatsMarketplace from './components/BeatsMarketplace';
import Footer from './components/Footer';
import { ToastContainer } from './components/ui/Toast';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <BeatsMarketplace />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;