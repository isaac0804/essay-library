import React from 'react';
import { Book } from 'lucide-react';
import { Term } from '../../types/essay';
import { GlossaryTerm } from './GlossaryTerm';

interface GlossaryProps {
  terms: Term[];
}

export const Glossary: React.FC<GlossaryProps> = ({ terms }) => {
  if (!terms || terms.length === 0) return null;

  return (
    <section className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-semibold mb-6 flex items-center">
        <Book className="w-6 h-6 mr-2 text-blue-600" />
        Glossary
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {terms.map((term, index) => (
          <GlossaryTerm key={index} term={term} />
        ))}
      </div>
    </section>
  );
};