import { useMemo } from 'react';
import { Glossary } from '../types/essay';

export const useHighlightTerms = (content: string, glossaries: Glossary[]) => {
  return useMemo(() => {
    if (!glossaries.length) return content.split('\n\n');

    const paragraphs = content.split('\n\n');
    return paragraphs.map(paragraph => {
      let highlightedParagraph = paragraph;
      glossaries.forEach(({ term, explanation }) => {
        const regex = new RegExp(`(${term})`, 'gi');
        highlightedParagraph = highlightedParagraph.replace(
          regex,
          `<span class="bg-yellow-100 hover:bg-yellow-200 cursor-help transition-colors duration-200 px-1 rounded" title="${explanation}">$1</span>`
        );
      });
      return highlightedParagraph;
    });
  }, [content, glossaries]);
};