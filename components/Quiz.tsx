import React, { useState, useMemo, useEffect } from 'react';
import type { MCQ } from '../types';
import { SectionWrapper } from './SectionWrapper';
import { Button } from './Button';
import { ProgressBar } from './ProgressBar';
import { Separator } from './Separator';

type AccentColor = "amber" | "blue" | "green" | "indigo" | "purple" | "rose";

const CorrectIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-600 flex-shrink-0" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const IncorrectIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-rose-600 flex-shrink-0" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);


interface QuizProps {
  title: string;
  quizId: string;
  accent?: AccentColor;
  questionsSource: MCQ[];
  onComplete: (passed: boolean, score: number, total: number) => void;
  passingThreshold?: number;
  onCancel: () => void;
  isSaving?: boolean;
}

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const accentColorStyles: Record<AccentColor, { bg: string; border: string; ring: string; progress: string; }> = {
  amber: { bg: 'bg-amber-100', border: 'border-amber-400', ring: 'ring-amber-300', progress: 'bg-amber-600' },
  blue: { bg: 'bg-blue-100', border: 'border-blue-400', ring: 'ring-blue-300', progress: 'bg-blue-600' },
  green: { bg: 'bg-green-100', border: 'border-green-400', ring: 'ring-green-300', progress: 'bg-green-600' },
  indigo: { bg: 'bg-indigo-100', border: 'border-indigo-400', ring: 'ring-indigo-300', progress: 'bg-indigo-600' },
  purple: { bg: 'bg-purple-100', border: 'border-purple-400', ring: 'ring-purple-300', progress: 'bg-purple-600' },
  rose: { bg: 'bg-rose-100', border: 'border-rose-400', ring: 'ring-rose-300', progress: 'bg-rose-600' },
};

interface QuizState {
  questions: MCQ[];
  index: number;
  selected: number | null;
  answers: (number | null)[];
  showResult: boolean;
}

const createInitialState = (questionsSource: MCQ[]): QuizState => {
  // We shuffle the question order AND the option order for each quiz attempt
  const questions = shuffle(questionsSource).map((q) => ({ ...q, options: shuffle(q.options) }));
  return {
    questions,
    index: 0,
    selected: null,
    answers: Array(questions.length).fill(null),
    showResult: false,
  };
};

export const Quiz: React.FC<QuizProps> = ({
  title,
  quizId,
  accent = "amber",
  questionsSource,
  onComplete,
  passingThreshold = 0.8,
  onCancel,
  isSaving = false
}) => {
  const [quizState, setQuizState] = useState(() => createInitialState(questionsSource));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setQuizState(createInitialState(questionsSource));
    // Reset `started` to false when the component is effectively "re-run" for a retake.
    // This allows the start screen to show again.
    setStarted(false);
  }, [questionsSource]);

  const { questions, index, selected, answers, showResult } = quizState;
  const total = questions.length;
  const currentQuestion = questions[index];
  const styles = accentColorStyles[accent];

  const setSelected = (i: number | null) => {
    setQuizState(prev => ({ ...prev, selected: i }));
  };

  const submitAnswer = () => {
    if (selected === null) return;
    const newAnswers = [...answers];
    newAnswers[index] = selected;

    if (index + 1 < total) {
      setQuizState(prev => ({
        ...prev,
        answers: newAnswers,
        index: prev.index + 1,
        selected: null,
      }));
    } else {
      setQuizState(prev => ({ ...prev, answers: newAnswers, showResult: true }));
    }
  };

  const restart = () => {
    setQuizState(createInitialState(questionsSource));
    setStarted(true);
  };

  // Calculate score for result display
  const calculateScore = useMemo(() => {
    if (!showResult) return { correctCount: 0, pct: 0, passed: false };

    const correctCount = questions.reduce((acc, q, i) => {
      const originalQuestion = questionsSource.find(baseQ => baseQ.q === q.q)!;
      const correctText = originalQuestion.options[originalQuestion.correctIndex];
      const selectedAnswer = answers[i] !== null ? q.options[answers[i]!] : null;
      return acc + (selectedAnswer === correctText ? 1 : 0);
    }, 0);
    const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const passed = total > 0 ? (correctCount / total) >= passingThreshold : true;

    return { correctCount, pct, passed };
  }, [showResult, questions, answers, questionsSource, total, passingThreshold]);

  if (!started) {
    return (
      <SectionWrapper title={title} accent={accent}>
        <div className="bg-white border rounded-lg p-6 shadow-sm text-center">
          <p className="text-gray-700 mb-4">
            Test your knowledge with {total} questions. You must score at least {passingThreshold * 100}% to pass.
          </p>
          <Button onClick={() => setStarted(true)} variant="primary" aria-label={`Start ${title}`}>
            Start Quiz
          </Button>
        </div>
      </SectionWrapper>
    );
  }

  if (showResult) {
    const { correctCount, pct, passed } = calculateScore;

    return (
      <SectionWrapper title={`${title} — Results`} accent={accent}>
        <div className="bg-white border rounded-lg p-6 shadow-sm space-y-4 max-h-[80vh] overflow-y-auto">
          <div
            className={`p-4 rounded-lg ${passed ? 'bg-green-50' : 'bg-rose-50'}`}
            role="alert"
            aria-live="polite"
          >
            <p className={`text-2xl font-bold text-center ${passed ? 'text-green-800' : 'text-rose-800'}`}>
              {passed ? 'Congratulations, you passed!' : 'Please try again.'}
            </p>
            <p className="text-lg font-bold text-center" aria-label={`Score: ${pct} percent`}>{pct}%</p>
            <ProgressBar value={correctCount} total={total} color={passed ? 'bg-green-600' : 'bg-rose-600'} />
            <p className="text-sm text-gray-800 text-center mt-2">
              You answered <span className="font-semibold">{correctCount}</span> out of <span className="font-semibold">{total}</span> questions correctly.
            </p>
          </div>

          <Separator />

          <h3 className="text-xl font-bold text-gray-800">Review Your Answers</h3>

          <div className="space-y-6">
            {questions.map((q, i) => {
              const originalQuestion = questionsSource.find(baseQ => baseQ.q === q.q)!;
              const correctAnswerText = originalQuestion.options[originalQuestion.correctIndex];
              const userAnswerIndex = answers[i];
              const userAnswerText = userAnswerIndex !== null ? q.options[userAnswerIndex] : null;
              const isCorrect = userAnswerText === correctAnswerText;

              return (
                <div key={i} className="border-t pt-4">
                  <div className="flex gap-3 items-start">
                    {isCorrect ? <CorrectIcon /> : <IncorrectIcon />}
                    <p className="font-semibold text-gray-900 flex-1">{q.q}</p>
                  </div>
                  <div className="pl-9 mt-3 space-y-2">
                    {q.options.map((option, optionIndex) => {
                      const isSelectedAnswer = optionIndex === userAnswerIndex;
                      const isCorrectAnswer = option === correctAnswerText;

                      let optionClasses = "border rounded-md px-3 py-2 text-sm text-gray-800";
                      if (isCorrectAnswer) {
                        optionClasses += " bg-green-100 border-green-400 font-semibold";
                      } else if (isSelectedAnswer && !isCorrect) {
                        optionClasses += " bg-rose-100 border-rose-400 line-through";
                      } else {
                        optionClasses += " bg-gray-50 border-gray-200";
                      }

                      return <div key={optionIndex} className={optionClasses}>{option}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <Separator />

          <div className="text-center pt-4">
            {passed ? (
              <Button
                onClick={() => onComplete(true, correctCount, total)}
                variant="primary"
                disabled={isSaving}
                aria-busy={isSaving}
              >
                {isSaving ? 'Saving...' : 'Continue'}
              </Button>
            ) : (
              <Button onClick={restart} variant="outline" aria-label="Retake this quiz">
                Retake Quiz
              </Button>
            )}
          </div>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper title={`${title} - Question ${index + 1} of ${total}`} accent={accent}>
      <div className="space-y-4">
        <ProgressBar value={index + 1} total={total} color={styles.progress} />
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <p className="text-lg font-semibold text-gray-900 mb-4" id={`question-${quizId}-${index}`}>
            {currentQuestion.q}
          </p>
          <div className="grid gap-3" role="radiogroup" aria-labelledby={`question-${quizId}-${index}`}>
            {currentQuestion.options.map((option, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                role="radio"
                aria-checked={selected === i}
                className={`w-full text-left border rounded-md px-4 py-3 transition-colors text-gray-800 ${selected === i
                  ? `${styles.bg} ${styles.border} ring-2 ${styles.ring}`
                  : 'bg-white hover:bg-gray-50 border-gray-300'
                  }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={() => {
                if (index === 0) {
                  onCancel();
                } else {
                  setQuizState(prev => ({ ...prev, index: prev.index - 1, selected: answers[index - 1] }));
                }
              }}
              aria-label={index === 0 ? "Cancel quiz" : "Go to previous question"}
            >
              {index === 0 ? "Cancel" : "Back"}
            </Button>
            <Button
              onClick={submitAnswer}
              disabled={selected === null}
              aria-label={index + 1 === total ? "Finish quiz" : "Go to next question"}
            >
              {index + 1 === total ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
