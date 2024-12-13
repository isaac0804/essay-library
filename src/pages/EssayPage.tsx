import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { EssayContent } from '../components/essay/EssayContent';
import { Glossary } from '../components/essay/Glossary';
import { EssayNotFound } from '../components/essay/EssayNotFound';
import essayData from '../data/essays.json';

export const EssayPage: React.FC = () => {
  const { uuid } = useParams();
  const navigate = useNavigate();
  const essay = essayData.find((e) => e.uuid === uuid);

  if (!essay) {
    return <EssayNotFound />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-200"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Essays
      </button>

      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {essay.essay_title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {essay.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <EssayContent essay={essay} />
          <Glossary terms={essay.terms} />
        </div>
      </article>
    </div>
  );
};