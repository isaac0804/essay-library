import React from 'react';
import { BookOpen, Users, Globe, Bot, Play } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About Us</h1>

      <div className="space-y-8">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            This website is dedicated to helping students excel in their academic writing
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

        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Play className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Behind The Scenes</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            This project was inspired by a friend of mine who identified a significant
            challenge faced by students in Malaysia—limited access to high-quality essay
            examples for exam preparation. In response, he took the initiative to create
            a mobile app
            (<a href="https://play.google.com/store/apps/details?id=com.yieksiewhao.essay_guide" className="text-blue-600 underline">Android</a>, 
            <a href="http://apps.apple.com/my/app/essayguide-spm-essays-notes/id6504120853" className="text-blue-600 underline">iOS</a>).
            Around the same time, I was experimenting with language models and saw the 
            perfect opportunity to apply generative AI to address this issue.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Since then, this project has had its share of ups and downs, with some ideas 
            being put on hold to keep things manageable. But the current version is the 
            most refined and streamlined iteration, and there's so much more I plan to 
            build in the future. Your feedback—whether it's suggestions for new essays, 
            features, or general thoughts—is always appreciated!
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Bot className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">AI = ChatGPT?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beyond helping students with essays, I see this platform as an opportunity to introduce Malaysian students to a broader world of AI. While many are familiar with tools like ChatGPT, AI offers much more, including fine-tuning, in-context learning, and agent-based systems. I'll be writing a blog post on these exciting topics soon—stay tuned!
          </p>
          <p className="text-gray-700 leading-relaxed">
            All of the essays on this site are specifically curated for SPM preparation. Unlike simply asking ChatGPT to generate an essay, each piece is crafted to meet the curriculum's standards and help students effectively prepare for their exams.
          </p>
        </section>
      </div>
    </div>
  );
};
