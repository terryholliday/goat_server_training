import React, { useState } from 'react';
import { Quiz } from './Quiz';
import { FINAL_EXAM_QUESTIONS } from '../constants';
import { SectionWrapper } from './SectionWrapper';
import { Button } from './Button';
import { ProgressBar } from './ProgressBar';
import { Certificate } from './Certificate';
import { useAuth } from '../contexts/AuthContext';
import type { ExamAttempt } from '../types';

interface FinalExamSectionProps {
  onComplete: (passed: boolean, score: number, total: number) => void;
  previousAttempts?: ExamAttempt[];
  onCancel: () => void;
  isSaving?: boolean;
}

export const FinalExamSection: React.FC<FinalExamSectionProps> = ({
  onComplete,
  previousAttempts = [],
  onCancel,
  isSaving = false
}) => {
  const { user, userProfile } = useAuth();
  const [showExam, setShowExam] = useState(previousAttempts.length === 0);
  const passedPreviously = previousAttempts.some(a => a.passed);
  const bestScore = previousAttempts.length > 0
    ? Math.max(...previousAttempts.map(a => Math.round((a.score / a.totalQuestions) * 100)))
    : 0;

  // New state for Certificate flow
  const [recipientName, setRecipientName] = useState(userProfile?.displayName || user?.displayName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  // If name/email not populated initially, try to sync when available
  React.useEffect(() => {
    if (!recipientName && (userProfile?.displayName || user?.displayName)) {
      setRecipientName(userProfile?.displayName || user?.displayName || '');
    }
    if (!email && user?.email) {
      setEmail(user.email);
    }
  }, [user, userProfile, recipientName, email]);


  const handlePrintCertificate = (e: React.MouseEvent) => {
    e.preventDefault();
    // In our CSS, we have @media print that hides everything except .print-only-certificate
    // We just need to trigger window.print()
    window.print();

    // Also simulate "email sending" if they clicked the combined action or just assume printed is good
    // But let's handle the "Email" part separately or as part of the flow below
  };

  const handleEmailCertificate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate API call to email service
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSending(false);
    setSentSuccess(true);

    // Optionally trigger print automatically if that's the expected workflow
    // window.print();
  };

  if (!showExam && previousAttempts.length > 0) {
    return (
      <>
        {/* Hidden Certificate for Print only */}
        {passedPreviously && (
          <div className="print-only-certificate hidden">
            <div className="w-full h-full flex items-center justify-center p-8">
              <Certificate
                recipientName={recipientName || "Staff Member"}
                date={new Date().toLocaleDateString()}
              />
            </div>
          </div>
        )}

        <SectionWrapper title="Final Exam" accent="indigo">
          <div className="bg-white border rounded-lg p-6 shadow-sm space-y-6">
            {passedPreviously ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center space-y-4">
                <div className="text-5xl mb-4" role="img" aria-label="Celebration">🎉</div>
                <h3 className="text-2xl font-bold text-green-800">
                  Congratulations!
                </h3>
                <p className="text-green-700">
                  You have successfully completed all training modules and passed the final exam.
                </p>
                <div className="inline-block bg-white px-4 py-2 rounded border border-green-200 text-green-800 font-bold">
                  Score: {bestScore}%
                </div>

                {/* Certificate Request Form */}
                <div className="mt-8 border-t border-green-200 pt-6 max-w-md mx-auto text-left">
                  <h4 className="font-semibold text-green-900 mb-4 text-center">Get Your Certificate</h4>

                  {!sentSuccess ? (
                    <form onSubmit={handleEmailCertificate} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-green-800 mb-1">
                          Name on Certificate
                        </label>
                        <input
                          type="text"
                          required
                          value={recipientName}
                          onChange={(e) => setRecipientName(e.target.value)}
                          className="w-full px-3 py-2 border border-green-300 rounded-md focus:ring-green-500 focus:border-green-500"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-green-800 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3 py-2 border border-green-300 rounded-md focus:ring-green-500 focus:border-green-500"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button
                          type="submit"
                          variant="primary"
                          disabled={isSending}
                          className="flex-1"
                        >
                          {isSending ? 'Sending...' : '📨 Email & Save'}
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handlePrintCertificate}
                          className="flex-1 bg-white"
                        >
                          🖨️ Print Now
                        </Button>
                      </div>
                      <p className="text-xs text-green-600 text-center mt-2">
                        Click "Print Now" to generate a PDF or print instantly.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center space-y-4 animate-fade-in">
                      <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-green-200 shadow-sm">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl mb-2">
                          ✓
                        </div>
                        <h5 className="font-bold text-gray-900">Sent Successfully!</h5>
                        <p className="text-sm text-gray-500 mt-1">
                          Check your inbox ({email}) for your certificate.
                        </p>
                      </div>

                      <Button
                        onClick={handlePrintCertificate}
                        variant="primary"
                        className="w-full"
                      >
                        🖨️ Print Certificate
                      </Button>

                      <button
                        onClick={() => setSentSuccess(false)}
                        className="text-sm text-green-700 hover:text-green-900 underline"
                      >
                        Send to another email
                      </button>
                    </div>
                  )}
                </div>
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

            <div className="flex justify-center gap-4 pt-4 border-t">
              {!passedPreviously && (
                <Button onClick={() => setShowExam(true)} variant="primary">
                  Retake Exam
                </Button>
              )}
              <Button onClick={onCancel} variant="outline">
                Close
              </Button>
            </div>
          </div>
        </SectionWrapper>
      </>
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
      onCancel={onCancel}
      isSaving={isSaving}
    />
  );
};
