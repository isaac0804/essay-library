export interface Essay {
  uuid: string;
  title: string;
  content: string;
  language: string;
  glossary: {
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