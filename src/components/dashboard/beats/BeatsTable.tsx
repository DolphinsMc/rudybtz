import React from 'react';
import { Edit2, Trash2, Eye } from 'lucide-react';
import { Beat } from '../../../types/database';
import { Button } from '../../ui';
import { formatPrice } from '../../../utils/formatters';

interface BeatsTableProps {
  beats: Beat[];
  onDelete: (id: string) => Promise<boolean>;
}

export default function BeatsTable({ beats, onDelete }: BeatsTableProps) {
  if (beats.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-800 rounded-lg">
        <p className="text-gray-400">No beats found. Create your first beat to get started!</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Genre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">BPM</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {beats.map((beat) => (
            <tr key={beat.id} className="hover:bg-gray-700/50">
              <td className="px-6 py-4 whitespace-nowrap text-white">{beat.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">{beat.genre}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">{beat.bpm}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">{formatPrice(beat.price)}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  beat.is_published ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {beat.is_published ? 'Published' : 'Draft'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right">
                <div className="flex justify-end space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={Eye}
                    aria-label="Preview beat"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={Edit2}
                    aria-label="Edit beat"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={Trash2}
                    onClick={() => onDelete(beat.id)}
                    aria-label="Delete beat"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}