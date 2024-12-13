import React from 'react';
import { Filter, X } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { LanguageSelector } from './LanguageSelector';

interface FilterBarProps {
  searchTerm: string;
  selectedLanguage: string;
  selectedTags: string[];
  onSearchChange: (value: string) => void;
  onLanguageChange: (language: string) => void;
  onTagRemove: (tag: string) => void;
  availableTags: string[];
  onTagSelect: (tag: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchTerm,
  selectedLanguage,
  selectedTags,
  onSearchChange,
  onLanguageChange,
  onTagRemove,
  availableTags,
  onTagSelect,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <SearchBar value={searchTerm} onChange={onSearchChange} />
        </div>
        <div className="flex gap-4">
          <LanguageSelector selectedLanguage={selectedLanguage} onLanguageChange={onLanguageChange} />
          <button
            className="flex items-center px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            onClick={() => document.getElementById('filterDialog')?.showModal()}
          >
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </button>
        </div>
      </div>

      {selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedTags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tag}
              <button
                onClick={() => onTagRemove(tag)}
                className="hover:bg-blue-200 rounded-full p-1"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      )}

      <dialog id="filterDialog" className="rounded-lg shadow-xl p-0">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Filter Essays</h3>
            <button
              onClick={() => document.getElementById('filterDialog')?.close()}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {availableTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => onTagSelect(tag)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedTags.includes(tag)
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};