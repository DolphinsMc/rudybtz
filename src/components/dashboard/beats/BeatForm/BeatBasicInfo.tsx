import React from 'react';
import { Beat } from '../../../../types/database';
import { FormField } from '../../../ui/FormField';

interface BeatBasicInfoProps {
  beat?: Beat;
}

export default function BeatBasicInfo({ beat }: BeatBasicInfoProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white">Basic Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Title"
          name="title"
          type="text"
          defaultValue={beat?.title}
          required
        />
        
        <FormField
          label="Genre"
          name="genre"
          type="text"
          defaultValue={beat?.genre || ''}
        />
        
        <FormField
          label="BPM"
          name="bpm"
          type="number"
          defaultValue={beat?.bpm || ''}
          min={1}
        />
        
        <FormField
          label="Key"
          name="key"
          type="text"
          defaultValue={beat?.key || ''}
        />
        
        <div className="md:col-span-2">
          <FormField
            label="Description"
            name="description"
            type="textarea"
            defaultValue={beat?.description || ''}
          />
        </div>
      </div>
    </div>
  );
}