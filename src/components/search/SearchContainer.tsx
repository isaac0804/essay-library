import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { SearchInput } from './SearchInput';
import { SearchFilters } from './SearchFilters';

interface SearchContainerProps {
  searchTerm: string;
  selectedLanguage: string;
  selectedTags: string[];
  availableTags: string[];
  onSearchChange: (value: string) => void;
  onLanguageChange: (language: string) => void;
  onTagSelect: (tag: string) => void;
  onTagRemove: (tag: string) => void;
}

export const SearchContainer: React.FC<SearchContainerProps> = ({
  searchTerm,
  selectedLanguage,
  selectedTags,
  availableTags,
  onSearchChange,
  onLanguageChange,
  onTagSelect,
  onTagRemove,
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = React.useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <SearchInput value={searchTerm} onChange={onSearchChange} />
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center text-gray-500 hover:text-gray-700"
        >
          Filters
          <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {isFiltersOpen && (
        <SearchFilters
          selectedLanguage={selectedLanguage}
          selectedTags={selectedTags}
          availableTags={availableTags}
          onLanguageChange={onLanguageChange}
          onTagSelect={onTagSelect}
          onTagRemove={onTagRemove}
        />
      )}
    </div>
  );
};