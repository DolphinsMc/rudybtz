import React from 'react';
import { useBeats } from '../../../hooks/useBeats';
import BeatsTable from './BeatsTable';
import BeatsToolbar from './BeatsToolbar';
import { LoadingSpinner } from '../../ui/LoadingSpinner';

export default function BeatsList() {
  const { beats, loading, deleteBeat } = useBeats();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-6">
      <BeatsToolbar />
      <BeatsTable beats={beats} onDelete={deleteBeat} />
    </div>
  );
}