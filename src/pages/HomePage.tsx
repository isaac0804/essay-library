import React, { useEffect } from 'react';
import { EssayCard } from '../components/EssayCard';
import { SearchContainer } from '../components/search/SearchContainer';
import { useEssaySearch } from '../hooks/useEssaySearch';
import essayData from '../data/essays.json';
import { themeChange } from 'theme-change';
import { Essay } from '../types/essay';

export const HomePage: React.FC = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedLanguage,
    setSelectedLanguage,
    selectedTags,
    setSelectedTags,
    availableTags,
    filteredEssays,
    handleTagSelect,
    handleTagRemove,
  } = useEssaySearch(essayData as Essay[]);

  useEffect(() => {
    themeChange(false); // Initialize theme change
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-blue-600 text-white py-12 mb-8 rounded-lg shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Essay Collection</h1>
          <p className="text-lg py-6">Explore a wide range of essays on various topics.</p>
          
            {/* DaisyUI Stats */}
            <div className="stats shadow w-full">
              <div className="stat">
                <div className="stat-title">Total Essays</div>
                <div className="stat-value">{essayData.length}</div>
                <div className="stat-desc">From all categories</div>
              </div>

              <div className="stat">
                <div className="stat-title">Languages</div>
                <div className="stat-value">
                  {new Set(essayData.map((essay) => essay.language)).size}
                </div>
                <div className="stat-desc">Available in the collection</div>
              </div>

              <div className="stat">
                <div className="stat-title">Unique Tags</div>
                <div className="stat-value">{availableTags.length}</div>
                <div className="stat-desc">Across all essays</div>
              </div>
            </div>
            {/* End DaisyUI Stats */}
        </div>
      </div>

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