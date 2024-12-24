import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { EssayContent } from '../components/essay/EssayContent';
import { Glossary } from '../components/essay/Glossary';
import { EssayNotFound } from '../components/essay/EssayNotFound';
import { useSupabase } from '../supabaseContext';
import { Essay } from '../types/essay';

export const EssayPage: React.FC = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const navigate = useNavigate();
  const { supabase } = useSupabase();
  const [essay, setEssay] = useState<Essay | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const fetchEssay = async () => {
      setIsLoading(true); // Start loading
      if (!supabase || !uuid) {
        setIsLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('essays')
          .select('*')
          .eq('uuid', uuid)
          .single();

        if (error) {
          console.error('Error fetching essay:', error);
          setEssay(null);
        } else if (data) {
          setEssay(data as Essay);
        } else {
          setEssay(null);
        }
      } catch (err) {
        console.error('Error:', err);
        setEssay(null);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchEssay();
  }, [supabase, uuid]);

  if (!essay && !isLoading) {
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

      {/* Skeleton Loading State */}
      {isLoading && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
          <div className="p-6">
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>{' '}
            {/* Title Skeleton */}
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>{' '}
            {/* Tag Skeleton */}
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-6"></div>{' '}
            {/* Tag Skeleton */}
            <div className="h-6 bg-gray-300 rounded w-full mb-2"></div>{' '}
            {/* Content Skeleton */}
            <div className="h-6 bg-gray-300 rounded w-full mb-2"></div>{' '}
            {/* Content Skeleton */}
            <div className="h-6 bg-gray-300 rounded w-5/6 mb-2"></div>{' '}
            {/* Content Skeleton */}
            <div className="h-6 bg-gray-300 rounded w-full mb-2"></div>{' '}
            {/* Content Skeleton */}
            <div className="h-6 bg-gray-300 rounded w-2/3"></div>{' '}
            {/* Content Skeleton */}
            {/* Add more skeleton elements as needed */}
          </div>
        </div>
      )}

      {/* Actual Content */}
      {!isLoading && essay && (
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {essay.title}
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
            <Glossary terms={essay.glossary} />
          </div>
        </article>
      )}
    </div>
  );
};