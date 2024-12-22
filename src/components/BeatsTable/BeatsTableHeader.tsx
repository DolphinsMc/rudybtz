import React from 'react';

export default function BeatsTableHeader() {
  return (
    <thead className="text-gray-400 text-sm">
      <tr>
        <th className="py-3 px-4 font-medium">#</th>
        <th className="py-3 px-4 font-medium">Title</th>
        <th className="py-3 px-4 font-medium">BPM</th>
        <th className="py-3 px-4 font-medium">Key</th>
        <th className="py-3 px-4 font-medium">Genre</th>
        <th className="py-3 px-4 font-medium">Price</th>
        <th className="py-3 px-4 font-medium sr-only">Actions</th>
      </tr>
    </thead>
  );
}