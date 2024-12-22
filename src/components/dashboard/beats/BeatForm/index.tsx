import React from 'react';
import { Beat } from '../../../../types/database';
import { useBeats } from '../../../../hooks/useBeats';
import { useToast } from '../../../ui/Toast';
import BeatBasicInfo from './BeatBasicInfo';
import BeatAudioUpload from './BeatAudioUpload';
import BeatCoverUpload from './BeatCoverUpload';
import BeatPricing from './BeatPricing';

interface BeatFormProps {
  beat?: Beat;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function BeatForm({ beat, onSuccess, onCancel }: BeatFormProps) {
  const { createBeat, updateBeat } = useBeats();
  const { addToast } = useToast();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    try {
      const beatData = {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        genre: formData.get('genre') as string,
        bpm: parseInt(formData.get('bpm') as string),
        key: formData.get('key') as string,
        price: parseFloat(formData.get('price') as string),
        is_published: formData.get('is_published') === 'true'
      };

      if (beat) {
        await updateBeat(beat.id, beatData);
        addToast('success', 'Beat updated successfully');
      } else {
        await createBeat(beatData);
        addToast('success', 'Beat created successfully');
      }
      onSuccess();
    } catch (error) {
      addToast('error', 'Failed to save beat');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <BeatBasicInfo beat={beat} />
      <BeatAudioUpload beat={beat} />
      <BeatCoverUpload beat={beat} />
      <BeatPricing beat={beat} />
      
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-300 hover:text-white"
          disabled={loading}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          disabled={loading}
        >
          {loading ? 'Saving...' : beat ? 'Update Beat' : 'Create Beat'}
        </button>
      </div>
    </form>
  );
}