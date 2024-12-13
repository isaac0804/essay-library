export interface Essay {
  essay_title: string;
  essay: string;
  terms: {
    term: string;
    explanation: string;
    examples: string;
  }[];
  tags: string[];
}

export interface FeedbackForm {
  type: 'essay_request' | 'website_suggestion';
  name: string;
  email: string;
  subject: string;
  message: string;
  language?: 'en' | 'zh' | 'ms';
}