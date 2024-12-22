import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { Beat } from '../../../../types/database';
import { Button } from '../../../ui';

interface BeatCoverUploadProps {
  beat?: Beat;
}

export default function BeatCoverUpload({ beat }: BeatCoverUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(beat?.cover_url || null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white">Cover Image</h3>
      
      <div className="border-2 border-dashed border-gray-700 rounded-lg p-6">
        {preview ? (
          <div className="relative">
            <img
              src={preview}
              alt="Cover preview"
              className="w-full h-48 object-cover rounded-lg"
            />
            <Button
              variant="ghost"
              size="sm"
              icon={X}
              className="absolute top-2 right-2"
              onClick={() => {
                setFile(null);
                setPreview(null);
              }}
              aria-label="Remove image"
            />
          </div>
        ) : (
          <label className="flex flex-col items-center cursor-pointer">
            <Upload className="text-gray-400 mb-2" size={24} />
            <span className="text-gray-400">Click to upload cover image</span>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
        )}
      </div>
    </div>
  );
}