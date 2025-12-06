import React, { useState } from 'react';
import { Quiz } from './Quiz';
import { FINAL_EXAM_QUESTIONS } from '../constants';
import { SectionWrapper } from './SectionWrapper';
import { Button } from './Button';
import { ProgressBar } from './ProgressBar';
import type { ExamAttempt } from '../types';

interface FinalExamSectionProps {
  onComplete: (passed: boolean, score: number, total: number) => void;
  previousAttempts?: ExamAttempt[];
  isSaving?: boolean;
}

export const FinalExamSection: React.FC<FinalExamSectionProps> = ({
  onComplete,
  previousAttempts = [],
  isSaving = false
}) => {
  const [showExam, setShowExam] = useState(previousAttempts.length === 0);
  const passedPreviously = previousAttempts.some(a => a.passed);
  const bestScore = previousAttempts.length > 0
    ? Math.max(...previousAttempts.map(a => Math.round((a.score / a.totalQuestions) * 100)))
    : 0;

  if (!showExam && previousAttempts.length > 0) {
    return (
      <SectionWrapper title="Final Exam" accent="indigo">
        <div className="bg-white border rounded-lg p-6 shadow-sm space-y-6">
          {passedPreviously ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <div className="text-5xl mb-4" role="img" aria-label="Celebration">🎉</div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                Congratulations!
              </h3>
              <p className="text-green-700">
                You have successfully completed all training modules and passed the final exam.
              </p>
              <p className="text-green-600 text-sm mt-2">
                Best Score: {bestScore}%
              </p>
            </div>
          ) : (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-amber-800 mb-2">
                Previous Attempts
              </h3>
              <p className="text-amber-700 mb-4">
                You have made {previousAttempts.length} attempt(s). Your best score was {bestScore}%.
              </p>
              <p className="text-amber-600 text-sm">
                You need 80% to pass. Keep trying!
              </p>
            </div>
          )}

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Attempt History</h4>
            {previousAttempts.map((attempt, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg border ${attempt.passed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                  }`}
              >
                <div>
                  <span className="font-medium text-gray-900">
                    Attempt {attempt.attemptNumber}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">
                    • {attempt.completedAt.toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-24">
                    <ProgressBar
                      value={attempt.score}
                      total={attempt.totalQuestions}
                      color={attempt.passed ? 'bg-green-600' : 'bg-gray-400'}
                    />
                  </div>
                  <span className={`font-bold ${attempt.passed ? 'text-green-700' : 'text-gray-600'}`}>
                    {Math.round((attempt.score / attempt.totalQuestions) * 100)}%
                  </span>
                  {attempt.passed && (
                    <span className="text-green-600 text-sm font-medium">✓ Passed</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 pt-4">
            {!passedPreviously && (
              <Button onClick={() => setShowExam(true)} variant="primary">
                Retake Exam
              </Button>
            )}
            {passedPreviously && (
              <Button onClick={() => onComplete(true, bestScore, 100)} variant="primary">
                View Certificate
              </Button>
            )}
          </div>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <Quiz
      title="Final Exam"
      quizId="final-exam"
      accent="indigo"
      questionsSource={FINAL_EXAM_QUESTIONS}
      onComplete={(passed, score, total) => {
        onComplete(passed, score, total);
        if (!passed) {
          setShowExam(false); // Show attempt history after failing
        }
      }}
      isSaving={isSaving}
    />
  );
};
