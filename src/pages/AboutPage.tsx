import React from 'react';
import { BookOpen, Users, Globe } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About Essay Prep Hub</h1>
      
      <div className="space-y-8">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Essay Prep Hub is dedicated to helping students excel in their academic writing
            journey. We provide carefully curated essay examples across multiple subjects
            and languages to support students in their exam preparation.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Globe className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Multilingual Support</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We understand the diverse needs of our users. That's why we offer essays in
            English, Chinese, and Malay, making quality educational content accessible
            to a wider audience.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Users className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Our Community</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Join our growing community of students and educators. Share your feedback,
            request new topics, and help us improve our platform to better serve your
            educational needs.
          </p>
        </section>
      </div>
    </div>
  );
};