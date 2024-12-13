import { useEffect, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { ReadingSession } from '../types/profile';

export const useReadingTracker = (essayId: string) => {
  const [sessions, setSessions] = useLocalStorage<ReadingSession[]>('reading_sessions', []);
  const [currentSession, setCurrentSession] = useLocalStorage<ReadingSession | null>(`current_session_${essayId}`, null);

  const startTracking = useCallback(() => {
    if (!currentSession) {
      setCurrentSession({
        essayId,
        startTime: Date.now(),
        endTime: 0,
        completed: false,
        timeSpent: 0,
      });
    }
  }, [essayId, currentSession, setCurrentSession]);

  const stopTracking = useCallback(() => {
    if (currentSession) {
      const endTime = Date.now();
      const timeSpent = Math.floor((endTime - currentSession.startTime) / 1000);
      const completed = timeSpent >= 180; // 3 minutes threshold

      const updatedSession = {
        ...currentSession,
        endTime,
        timeSpent,
        completed,
      };

      setSessions([...sessions, updatedSession]);
      setCurrentSession(null);
    }
  }, [currentSession, sessions, setSessions, setCurrentSession]);

  useEffect(() => {
    startTracking();
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopTracking();
      } else {
        startTracking();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', stopTracking);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', stopTracking);
      stopTracking();
    };
  }, [startTracking, stopTracking]);

  return { currentSession };
};