import React from 'react';
import { Term } from '../../types/essay';

interface GlossaryTermProps {
  term: Term;
}

export const GlossaryTerm: React.FC<GlossaryTermProps> = ({ term }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-all duration-200">
      <h3 className="font-bold text-lg text-gray-900 mb-3">
        {term.term}
      </h3>
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          {term.explanation}
        </p>
        <div className="border-t pt-4 mt-4">
          <h4 className="font-semibold text-sm text-gray-600 mb-2">Examples:</h4>
          <div className="space-y-2">
            {term.examples.split('\n').map((example, i) => (
              <p key={i} className="text-gray-600 italic pl-4 border-l-2 border-blue-200">
                {example}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};