import React from 'react';

export default function MusicTableHeader() {
  return (
    <thead className="sticky top-0 bg-gray-800 text-gray-400 text-sm">
      <tr>
        <th className="w-16 py-3 px-4 text-left">#</th>
        <th className="w-16"></th>
        <th className="py-3 px-4 text-left">Title</th>
        <th className="py-3 px-4 text-left">Artist</th>
        <th className="w-32 py-3 px-4 text-left">Duration</th>
        <th className="w-48 py-3 px-4 text-right">Actions</th>
      </tr>
    </thead>
  );
}