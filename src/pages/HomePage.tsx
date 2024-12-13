import React from 'react';
import { EssayCard } from '../components/EssayCard';
import { SearchContainer } from '../components/search/SearchContainer';
import { useEssaySearch } from '../hooks/useEssaySearch';
import essayData from '../data/essays.json';

export const HomePage: React.FC = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedLanguage,
    setSelectedLanguage,
    selectedTags,
    availableTags,
    filteredEssays,
    handleTagSelect,
    handleTagRemove,
  } = useEssaySearch(essayData);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SearchContainer
        searchTerm={searchTerm}
        selectedLanguage={selectedLanguage}
        selectedTags={selectedTags}
        availableTags={availableTags}
        onSearchChange={setSearchTerm}
        onLanguageChange={setSelectedLanguage}
        onTagSelect={handleTagSelect}
        onTagRemove={handleTagRemove}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEssays.length > 0 ? (
          filteredEssays.map((essay) => (
            <EssayCard key={essay.essay_title} essay={essay} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">No essays found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedTags([]);
              }}
              className="mt-4 text-blue-600 hover:text-blue-800"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
};