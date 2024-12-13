import React from 'react';
import { Essay } from '../../types/essay';
import { useHighlightTerms } from '../../hooks/useHighlightTerms';

interface EssayContentProps {
  essay: Essay;
}

export const EssayContent: React.FC<EssayContentProps> = ({ essay }) => {
  const highlightedContent = useHighlightTerms(essay.essay, essay.terms || []);

  return (
    <div className="prose max-w-none mb-8">
      {essay.essay.split('\n\n').map((paragraph, index) => (
        <p
          key={index}
          className="mb-4 leading-relaxed text-gray-800"
          dangerouslySetInnerHTML={{
            __html: highlightedContent[index] || paragraph,
          }}
        />
      ))}
    </div>
  );
};