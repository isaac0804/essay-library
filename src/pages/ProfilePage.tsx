import React, { useState } from 'react';
import { User } from 'lucide-react';
import { ReadingProgress } from '../components/profile/ReadingProgress';
import { StudyTimeChart } from '../components/profile/StudyTimeChart';
import { RecentActivities } from '../components/profile/RecentActivities';
import { TopicDistribution } from '../components/profile/TopicDistribution';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ReadingSession } from '../types/profile';

export const ProfilePage: React.FC = () => {
  const [timeView, setTimeView] = useState<'daily' | 'weekly' | 'monthly'>('weekly');
  const [sessions] = useLocalStorage<ReadingSession[]>('reading_sessions', []);

  const stats = {
    totalEssaysRead: sessions.filter(s => s.completed).length,
    totalStudyTime: sessions.reduce((acc, s) => acc + s.timeSpent, 0),
    completionRate: Math.round((sessions.filter(s => s.completed).length / sessions.length) * 100) || 0,
    topTopics: [
      { tag: 'Literature', count: 15, percentage: 30 },
      { tag: 'History', count: 12, percentage: 24 },
      { tag: 'Science', count: 10, percentage: 20 },
      { tag: 'Arts', count: 8, percentage: 16 },
      { tag: 'Philosophy', count: 5, percentage: 10 },
    ],
  };

  const timeBreakdown = {
    daily: Array.from({ length: 7 }, (_, i) => ({
      date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString(),
      minutes: Math.floor(Math.random() * 120),
    })).reverse(),
    weekly: Array.from({ length: 4 }, (_, i) => ({
      week: `Week ${i + 1}`,
      minutes: Math.floor(Math.random() * 600),
    })),
    monthly: Array.from({ length: 6 }, (_, i) => ({
      month: new Date(Date.now() - i * 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short' }),
      minutes: Math.floor(Math.random() * 2400),
    })).reverse(),
  };

  const recentActivities = sessions
    .sort((a, b) => b.endTime - a.endTime)
    .slice(0, 10)
    .map(session => ({
      essayId: session.essayId,
      essayTitle: 'Essay Title', // You'll need to fetch this from your essays data
      timestamp: session.endTime,
      timeSpent: session.timeSpent,
      completed: session.completed,
    }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="bg-blue-600 p-6">
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full">
              <User className="w-16 h-16 text-blue-600" />
            </div>
            <div className="ml-6">
              <h1 className="text-2xl font-bold text-white">Student Profile</h1>
              <p className="text-blue-100">example@student.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <ReadingProgress stats={stats} />
        <TopicDistribution stats={stats} />
      </div>

      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Study Time Analytics</h2>
            <div className="flex gap-2">
              {(['daily', 'weekly', 'monthly'] as const).map((view) => (
                <button
                  key={view}
                  onClick={() => setTimeView(view)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    timeView === view
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {view.charAt(0).toUpperCase() + view.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <StudyTimeChart breakdown={timeBreakdown} view={timeView} />
        </div>
      </div>

      <RecentActivities activities={recentActivities} />
    </div>
  );
};