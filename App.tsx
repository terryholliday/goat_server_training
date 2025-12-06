import React, { useState, useEffect, useCallback } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { GeneralInfoSection } from './components/GeneralInfoSection';
import { TermsSection } from './components/TermsSection';
import { Quiz } from './components/Quiz';
import { SequenceSection } from './components/SequenceSection';

import { WineKnowledgeSection } from './components/WineKnowledgeSection';
import { FinalExamSection } from './components/FinalExamSection';
import { CourseDashboard } from './components/CourseDashboard';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { ManagerDashboard } from './components/ManagerDashboard';

import { Button } from './components/Button';
import { MenuMasterySection } from './components/MenuMasterySection';
import { GuestScenariosSection } from './components/GuestScenariosSection';
import { TrainerProvider, useTrainer } from './contexts/TrainerContext';
import VirtualTrainer from './components/VirtualTrainer';
import { getRandomScript } from './data/marcelScripts';
import {
  GENERAL_INFO_QUIZ,
  SERVICE_QUIZ,
  TERMS_QUIZ,
  MENU_QUIZ,
  WINE_QUIZ,
} from './constants';
import {
  getTrainingProgress,
  initializeProgress,
  markSectionComplete,
  saveQuizScore,
  saveFinalExamAttempt,
} from './services/trainingProgress';
import type { TrainingProgress, ExamAttempt } from './types';

// Define section structure
const SECTIONS = [
  { id: 'general-info', title: "General Information", description: "Key facts, hours, and policies.", type: 'content' as const },
  { id: 'general-info-quiz', title: "General Info Quiz", description: "Test your knowledge of our restaurant.", type: 'quiz' as const },
  { id: 'sequence-of-service', title: "Sequence of Service", description: "Learn the core steps of service.", type: 'content' as const },
  { id: 'service-quiz', title: "Service Quiz", description: "Test your knowledge of the service sequence.", type: 'quiz' as const },
  { id: 'culinary-terms', title: "Culinary Terms", description: "Learn key French culinary vocabulary.", type: 'content' as const },
  { id: 'terms-quiz', title: "Terms Quiz", description: "Test your knowledge of culinary terms.", type: 'quiz' as const },
  { id: 'menu-mastery', title: "Menu & Culinary Mastery", description: "Master menu items with flashcards, allergens, and upsell scripts.", type: 'content' as const },
  { id: 'menu-quiz', title: "Menu Quiz", description: "Test your knowledge of our food and drinks.", type: 'quiz' as const },
  { id: 'wine-knowledge', title: "Wine Knowledge", description: "Explore our wine philosophy and offerings.", type: 'content' as const },
  { id: 'wine-quiz', title: "Wine Quiz", description: "Test your knowledge of our wine program.", type: 'quiz' as const },
  { id: 'guest-scenarios', title: "Guest Interaction Scenarios", description: "Practice handling real-world guest situations.", type: 'content' as const },
  { id: 'final-exam', title: "Final Certification Exam", description: "75+ question comprehensive exam. 80% required to pass.", type: 'exam' as const },
];

// Quiz data map
const QUIZ_DATA: Record<string, { questions: typeof GENERAL_INFO_QUIZ; accent: 'blue' | 'green' | 'rose' | 'purple' | 'amber' }> = {
  'general-info-quiz': { questions: GENERAL_INFO_QUIZ, accent: 'blue' },
  'service-quiz': { questions: SERVICE_QUIZ, accent: 'green' },
  'terms-quiz': { questions: TERMS_QUIZ, accent: 'rose' },
  'menu-quiz': { questions: MENU_QUIZ, accent: 'purple' },
  'wine-quiz': { questions: WINE_QUIZ, accent: 'amber' },
};

// Main App Content (requires auth)
const AppContent: React.FC = () => {
  const { user, userProfile, logout, loading: authLoading } = useAuth();
  const { showTrainer, say } = useTrainer();

  // Welcome message on load
  useEffect(() => {
    if (user) {
      const script = getRandomScript('login');
      // Short delay to allow UI to settle
      setTimeout(() => say(script.text, 4000), 1000);
    }
  }, [user, say]);

  // Training state
  const [progress, setProgress] = useState<TrainingProgress | null>(null);
  const [viewingSectionIndex, setViewingSectionIndex] = useState<number | null>(null);
  const [showManagerDashboard, setShowManagerDashboard] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(true);

  // Calculate unlocked section based on progress
  const unlockedSectionIndex = progress?.currentSectionIndex ?? 0;
  const completedSections = progress?.completedSections ?? [];

  // Build quiz scores map
  const quizScores: Record<string, { score: number; total: number }> = {};
  if (progress?.quizScores) {
    for (const qs of progress.quizScores) {
      // Keep the best score for each quiz
      if (!quizScores[qs.quizId] || qs.score > quizScores[qs.quizId].score) {
        quizScores[qs.quizId] = { score: qs.score, total: qs.totalQuestions };
      }
    }
  }

  // Load progress on mount
  const loadProgress = useCallback(async () => {
    if (!user) return;

    try {
      setLoadingProgress(true);
      let userProgress = await getTrainingProgress(user.uid);

      if (!userProgress) {
        userProgress = await initializeProgress(user.uid);
      }

      setProgress(userProgress);
    } catch (error) {
      console.error('Error loading progress:', error);
    } finally {
      setLoadingProgress(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      loadProgress();
    }
  }, [user, loadProgress]);

  // Handle section completion
  const handleSectionComplete = async () => {
    if (viewingSectionIndex === null || !user) return;

    try {
      setIsSaving(true);
      await markSectionComplete(user.uid, viewingSectionIndex);
      await loadProgress(); // Reload to get updated state
    } catch (error) {
      console.error('Error saving progress:', error);
    } finally {
      setIsSaving(false);
      setViewingSectionIndex(null);
      // Trigger Marcel for section completion
      const script = getRandomScript('streak');
      say(script.text, 3000);
    }
  };

  // Handle quiz completion
  const handleQuizComplete = async (quizId: string, passed: boolean, score: number, total: number) => {
    if (viewingSectionIndex === null || !user) return;

    try {
      setIsSaving(true);

      // Save quiz score
      await saveQuizScore(user.uid, {
        quizId,
        score,
        totalQuestions: total,
        passed,
        completedAt: new Date()
      });

      // Mark section complete if passed
      if (passed) {
        await markSectionComplete(user.uid, viewingSectionIndex);
      }

      await loadProgress();
    } catch (error) {
      console.error('Error saving quiz result:', error);
    } finally {
      setIsSaving(false);
      setViewingSectionIndex(null);

      if (passed) {
        const script = getRandomScript('correct');
        showTrainer(script.text, script.emotion);
      } else {
        const script = getRandomScript('incorrect');
        showTrainer(script.text, script.emotion);
      }
    }
  };

  // Handle final exam completion
  const handleFinalExamComplete = async (passed: boolean, score: number, total: number) => {
    if (!user) return;

    try {
      setIsSaving(true);
      await saveFinalExamAttempt(user.uid, score, total, passed);

      if (passed) {
        await markSectionComplete(user.uid, SECTIONS.length - 1);
      }

      await loadProgress();
    } catch (error) {
      console.error('Error saving exam result:', error);
    } finally {
      setIsSaving(false);
      if (passed) {
        setViewingSectionIndex(null);
        showTrainer("Congratulations! You have passed the final exam!", 'happy');
      } else {
        showTrainer("Do not give up! Review the material and try again.", 'stern');
      }
    }
  };

  const handleViewSection = (index: number) => {
    if (index <= unlockedSectionIndex) {
      setViewingSectionIndex(index);
    }
  };

  const handleReturnToDashboard = () => {
    setViewingSectionIndex(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // Render active section component
  const renderActiveSection = () => {
    if (viewingSectionIndex === null) return null;

    const section = SECTIONS[viewingSectionIndex];

    // Content sections
    if (section.type === 'content') {
      switch (section.id) {
        case 'general-info':
          return <GeneralInfoSection onComplete={handleSectionComplete} />;
        case 'sequence-of-service':
          return <SequenceSection onComplete={handleSectionComplete} />;
        case 'culinary-terms':
          return <TermsSection onComplete={handleSectionComplete} />;
        case 'menu-mastery':
          return <MenuMasterySection onComplete={handleSectionComplete} />;
        case 'wine-knowledge':
          return <WineKnowledgeSection onComplete={handleSectionComplete} />;
        case 'guest-scenarios':
          return <GuestScenariosSection onComplete={handleSectionComplete} />;
        default:
          return null;
      }
    }

    // Quiz sections
    if (section.type === 'quiz') {
      const quizData = QUIZ_DATA[section.id];
      if (quizData) {
        return (
          <Quiz
            title={section.title}
            quizId={section.id}
            accent={quizData.accent}
            questionsSource={quizData.questions}
            onComplete={(passed, score, total) => handleQuizComplete(section.id, passed, score, total)}
            isSaving={isSaving}
          />
        );
      }
    }

    // Final exam
    if (section.type === 'exam') {
      return (
        <FinalExamSection
          onComplete={handleFinalExamComplete}
          previousAttempts={progress?.finalExamAttempts as ExamAttempt[] || []}
          isSaving={isSaving}
        />
      );
    }

    return null;
  };

  // Loading state
  if (authLoading || loadingProgress) {
    return (
      <div className="min-h-screen bg-[#fdfcf9] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
          <p className="mt-4 text-gray-600">Loading your training progress...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen text-[#333] bg-[#fdfcf9]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#2c2c2c] tracking-tight">
              The French Goat Training Program
            </h1>
            <div className="flex items-center gap-3">
              {userProfile?.role === 'manager' && !showManagerDashboard && (
                <Button
                  variant="outline"
                  onClick={() => setShowManagerDashboard(true)}
                  aria-label="Open manager dashboard"
                >
                  Manager Dashboard
                </Button>
              )}
              <Button
                variant="ghost"
                onClick={handleLogout}
                aria-label="Sign out"
              >
                Sign Out
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-base text-gray-600">
              Welcome back, <span className="font-semibold">{userProfile?.displayName || user?.email}</span>
            </p>
            {userProfile?.role === 'manager' && (
              <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full font-medium">
                Manager
              </span>
            )}
          </div>
        </header>

        {/* Main Content */}
        {showManagerDashboard ? (
          <ManagerDashboard
            totalSections={SECTIONS.length}
            onBack={() => setShowManagerDashboard(false)}
          />
        ) : viewingSectionIndex === null ? (
          <CourseDashboard
            sections={SECTIONS}
            unlockedSectionIndex={unlockedSectionIndex}
            completedSections={completedSections}
            quizScores={quizScores}
            onSelectSection={handleViewSection}
          />
        ) : (
          <div className="relative">
            <Button
              variant="outline"
              onClick={handleReturnToDashboard}
              className="mb-6"
              aria-label="Go back to course outline"
            >
              &larr; Back to Course Outline
            </Button>
            {renderActiveSection()}
          </div>
        )}

        {/* Virtual Trainer Component */}
        <VirtualTrainer />
      </div>

      <footer className="text-center py-6 text-sm text-gray-500 border-t mt-10">
        <p>&copy; {new Date().getFullYear()} The French Goat. All Rights Reserved.</p>
      </footer>
    </main>
  );
};

// Auth wrapper component
const AuthWrapper: React.FC = () => {
  const { user, loading } = useAuth();
  const [authView, setAuthView] = useState<'login' | 'signup'>('login');

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fdfcf9] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return authView === 'login'
      ? <LoginPage onSwitchToSignup={() => setAuthView('signup')} />
      : <SignupPage onSwitchToLogin={() => setAuthView('login')} />;
  }

  return <AppContent />;
};

// Root App component with provider
const App: React.FC = () => {
  return (
    <AuthProvider>
      <TrainerProvider>
        <AuthWrapper />
      </TrainerProvider>
    </AuthProvider>
  );
};

export default App;
