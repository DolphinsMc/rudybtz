import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div>
      <h3 className="text-white font-semibold mb-4">Join the Journey</h3>
      <p className="mb-4">Subscribe for exclusive tracks, remixes, and behind-the-scenes content.</p>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="flex-1 px-4 py-2 bg-gray-800 rounded-l focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-purple-600 text-white rounded-r hover:bg-purple-700 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}