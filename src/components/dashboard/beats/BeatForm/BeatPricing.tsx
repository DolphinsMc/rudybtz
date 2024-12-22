import React from 'react';
import { Beat } from '../../../../types/database';
import { FormField } from '../../../ui/FormField';

interface BeatPricingProps {
  beat?: Beat;
}

export default function BeatPricing({ beat }: BeatPricingProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white">Pricing & Availability</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Price"
          name="price"
          type="number"
          defaultValue={beat?.price || 0}
          min={0}
          step={0.01}
          required
        />
        
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="is_published"
            name="is_published"
            defaultChecked={beat?.is_published}
            className="rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
          />
          <label htmlFor="is_published" className="text-gray-300">
            Publish immediately
          </label>
        </div>
      </div>
    </div>
  );
}