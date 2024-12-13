export interface ReadingSession {
  essayId: string;
  startTime: number;
  endTime: number;
  completed: boolean;
  timeSpent: number;
}

export interface ReadingStats {
  totalEssaysRead: number;
  totalStudyTime: number;
  completionRate: number;
  topTopics: Array<{
    tag: string;
    count: number;
    percentage: number;
  }>;
}

export interface StudyTimeBreakdown {
  daily: Array<{
    date: string;
    minutes: number;
  }>;
  weekly: Array<{
    week: string;
    minutes: number;
  }>;
  monthly: Array<{
    month: string;
    minutes: number;
  }>;
}

export interface RecentActivity {
  essayId: string;
  essayTitle: string;
  timestamp: number;
  timeSpent: number;
  completed: boolean;
}