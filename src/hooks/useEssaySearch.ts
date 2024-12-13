import { useState, useMemo } from 'react';
import { Essay } from '../types/essay';

export const useEssaySearch = (essays: Essay[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('zh');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    essays.forEach(essay => {
      essay.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, [essays]);

  const filteredEssays = useMemo(() => {
    return essays.filter((essay) => {
      const searchLower = searchTerm.toLowerCase();
      const tagMatch = selectedTags.length === 0 || 
        selectedTags.some(tag => essay.tags.includes(tag));
      
      const searchMatch = searchTerm === '' || 
        essay.essay_title.toLowerCase().includes(searchLower) ||
        essay.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        essay.essay.toLowerCase().includes(searchLower);

      return tagMatch && searchMatch;
    });
  }, [essays, searchTerm, selectedTags]);

  const handleTagSelect = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleTagRemove = (tag: string) => {
    setSelectedTags(prev => prev.filter(t => t !== tag));
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedLanguage,
    setSelectedLanguage,
    selectedTags,
    availableTags,
    filteredEssays,
    handleTagSelect,
    handleTagRemove,
  };
};