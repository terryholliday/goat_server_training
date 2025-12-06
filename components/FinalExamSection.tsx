import React from 'react';
import { Quiz } from './Quiz';
import { FINAL_EXAM_QUESTIONS } from '../constants';

interface FinalExamSectionProps {
  onComplete: () => void;
}

export const FinalExamSection: React.FC<FinalExamSectionProps> = ({ onComplete }) => {
  return (
    <Quiz
      title="Final Exam"
      accent="indigo"
      questionsSource={FINAL_EXAM_QUESTIONS}
      onComplete={(passed) => {
        if (passed) {
          onComplete();
        }
      }}
    />
  );
};
