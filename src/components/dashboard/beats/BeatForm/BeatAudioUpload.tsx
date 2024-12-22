import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { Beat } from '../../../../types/database';
import { Button } from '../../../ui';

interface BeatAudioUploadProps {
  beat?: Beat;
}

export default function BeatAudioUpload({ beat }: BeatAudioUploadProps) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith('audio/')) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white">Audio File</h3>
      
      <div className="border-2 border-dashed border-gray-700 rounded-lg p-6">
        {file || beat?.audio_url ? (
          <div className="flex items-center justify-between">
            <span className="text-gray-300">
              {file?.name || beat?.audio_url}
            </span>
            <Button
              variant="ghost"
              size="sm"
              icon={X}
              onClick={() => setFile(null)}
              aria-label="Remove file"
            />
          </div>
        ) : (
          <label className="flex flex-col items-center cursor-pointer">
            <Upload className="text-gray-400 mb-2" size={24} />
            <span className="text-gray-400">Click to upload audio file</span>
            <input
              type="file"
              className="hidden"
              accept="audio/*"
              onChange={handleFileChange}
            />
          </label>
        )}
      </div>
    </div>
  );
}