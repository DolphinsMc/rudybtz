import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image - Studio/Production Setup */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500">
            <img 
              src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&q=80" 
              alt="RudyBtz"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bio */}
          <div className="md:flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Sonic Innovation Unleashed
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Versatile producer and artist blending Trap, UK Drill, and Drum and Bass with 
              reggae and lo-fi influences. Creator of the acclaimed album "Rudy B Bass" and 
              known for innovative audio-visual experiences that push creative boundaries.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors">
                Explore Beats
              </button>
              <button className="border-2 border-purple-500 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-500/20 transition-colors">
                Listen to Rudy B Bass
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}