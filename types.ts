export interface Wine {
  producer: string;
  name: string;
  appellation: string;
  region: string;
  country: string;
  grape: string;
  vintage: number;
  price: number;
  notes: string;
  pairings: string;
  img: string;
}

export interface MenuItem {
  name: string;
  category: string;
  description: string;
}

export interface InfoPage {
  title: string;
  content: string;
}

export interface SequenceStep {
  title: string;
  content: string;
}

export interface Term {
  term: string;
  pronunciation: string;
  definition: string;
}

export interface MCQ {
  q: string;
  options: string[];
  correctIndex: number;
}

// User & Authentication Types
export type UserRole = 'staff' | 'manager';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
  createdAt: Date;
  lastActive: Date;
}

// Progress Tracking Types
export interface QuizResult {
  quizId: string;
  score: number;
  totalQuestions: number;
  passed: boolean;
  completedAt: Date;
}

export interface ExamAttempt {
  score: number;
  totalQuestions: number;
  passed: boolean;
  attemptNumber: number;
  completedAt: Date;
}

export interface TrainingProgress {
  userId: string;
  completedSections: number[];
  quizScores: QuizResult[];
  finalExamAttempts: ExamAttempt[];
  currentSectionIndex: number;
  lastUpdated: Date;
}

// Section Definition Type
export interface SectionDefinition {
  id: string;
  title: string;
  description: string;
  type: 'content' | 'quiz' | 'exam';
}
