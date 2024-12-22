import React from 'react';
import { useBeatsFilter } from './hooks/useBeatsFilter';
import { DEMO_BEATS } from './data/beats';
import Filters from './Filters';
import BeatsGrid from './BeatsGrid';

export default function BeatsMarketplace() {
  const { filters, filteredBeats, setGenre, setSort } = useBeatsFilter(DEMO_BEATS);

  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Featured Beats</h2>
          <Filters
            selectedGenre={filters.genre}
            selectedSort={filters.sort}
            onGenreChange={setGenre}
            onSortChange={setSort}
          />
        </div>

        <BeatsGrid beats={filteredBeats} />
      </div>
    </section>
  );
}