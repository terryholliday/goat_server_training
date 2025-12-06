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
import { TrainingCockpit } from './components/TrainingCockpit';
import { MarcelWelcome } from './components/MarcelWelcome';
import VirtualTrainer from './components/VirtualTrainer';
import { soundService } from './services/SoundService';
import { getRandomScript } from './data/marcelScripts';
import {
  GENERAL_INFO_QUIZ,
  SERVICE_QUIZ,
  TERMS_QUIZ,
  MENU_QUIZ,
  WINE_QUIZ,
  FINE_DINING_QUIZ,
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
  { id: 'fine-dining-etiquette', title: "Fine Dining Etiquette", description: "Master advanced service skills like crumbing and wine rituals.", type: 'content' as const },
  { id: 'fine-dining-quiz', title: "Etiquette Quiz", description: "Test your knowledge of fine dining standards.", type: 'quiz' as const },
  { id: 'final-exam', title: "Final Certification Exam", description: "75+ question comprehensive exam. 80% required to pass.", type: 'exam' as const },
];

// Quiz data map
const QUIZ_DATA: Record<string, { questions: typeof GENERAL_INFO_QUIZ; accent: 'blue' | 'green' | 'rose' | 'purple' | 'amber' }> = {
  'general-info-quiz': { questions: GENERAL_INFO_QUIZ, accent: 'blue' },
  'service-quiz': { questions: SERVICE_QUIZ, accent: 'green' },
  'terms-quiz': { questions: TERMS_QUIZ, accent: 'rose' },
  'menu-quiz': { questions: MENU_QUIZ, accent: 'purple' },

  'wine-quiz': { questions: WINE_QUIZ, accent: 'amber' },
  'fine-dining-quiz': { questions: FINE_DINING_QUIZ, accent: 'rose' },
};

// Main App Content (requires auth)
const AppContent: React.FC = () => {
  const { user, userProfile, logout, loading: authLoading } = useAuth();
  const { showTrainer, say } = useTrainer();

  // Welcome message on load
  useEffect(() => {
    if (user) {
      const script = getRandomScript('login');
      if (script) {
        // Short delay to allow UI to settle
        setTimeout(() => say(script.text, script.audio, 4000), 1000);
      }
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
  useEffect(() => {
    async function loadProgress() {
      if (user) {
        try {
          const p = await getTrainingProgress(user.uid);
          if (p) {
            setProgress(p);
          } else {
            console.log('No progress found, initializing...');
            const newProgress = await initializeProgress(user.uid);
            setProgress(newProgress);
          }
        } catch (error) {
          console.error("Failed to load progress:", error);
        } finally {
          setLoadingProgress(false);
        }
      }
    }
    loadProgress();
  }, [user]);

  const handleSectionComplete = async () => {
    if (!user || !progress || viewingSectionIndex === null) return;

    // Award point for completing content
    setIsSaving(true);
    try {
      const currentSection = SECTIONS[viewingSectionIndex];
      // Only unlock next if this is the currently unlocked one (prevent re-unlocking)
      const shouldUnlockNext = viewingSectionIndex === unlockedSectionIndex; // && currentSection.type === 'content';

      // Always mark as completed in list
      const newProgress = await markSectionComplete(user.uid, viewingSectionIndex, shouldUnlockNext);
      setProgress(newProgress);
      setViewingSectionIndex(null); // Return to dashboard
    } catch (error) {
      console.error("Failed to save progress:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleQuizComplete = async (score: number, total: number, passed: boolean) => {
    if (!user || !progress || viewingSectionIndex === null) return;
    setIsSaving(true);
    try {
      const section = SECTIONS[viewingSectionIndex];
      // Save specific quiz score
      if (section.id) {
        await saveQuizScore(user.uid, section.id, score, total);
      }

      if (passed) {
        // Unlock next section
        const newProgress = await markSectionComplete(user.uid, viewingSectionIndex, true);
        setProgress(newProgress);
        setViewingSectionIndex(null); // Return to dashboard on pass
        soundService.playSuccess();
        const script = getRandomScript('correct');
        if (script) say(script.text, script.audio, 3000);
      } else {
        const script = getRandomScript('incorrect');
        if (script) say(script.text, script.audio, 3000);
      }
    } catch (error) {
      console.error("Failed to save quiz:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleExamComplete = async (score: number, total: number, passed: boolean) => {
    if (!user || !progress) return;
    setIsSaving(true);
    try {
      await saveFinalExamAttempt(user.uid, score, total, passed);
      // Reload progress to update state
      const p = await getTrainingProgress(user.uid);
      setProgress(p);
      setViewingSectionIndex(null);

      if (passed) {
        say("Félicitations! You are now a certified French Goat server!", 5000, 'happy');
      }
    } catch (error) {
      console.error("Failed to save exam:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleViewSection = (index: number) => {
    setViewingSectionIndex(index);
    // Trigger virtual trainer for this section?
    const section = SECTIONS[index];
    say(`Starting ${section.title}. Good luck!`, 2000);
  };

  const handleReturnToDashboard = () => {
    setViewingSectionIndex(null);
  };

  // Render the active content (Dashboard or Specific Section)
  const renderActiveArtifact = () => {
    if (loadingProgress) {
      return (
        <div className="flex justify-center p-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      );
    }

    if (showManagerDashboard) {
      return (
        <div className="p-4">
          <ManagerDashboard totalSections={SECTIONS.length} onBack={() => setShowManagerDashboard(false)} />
        </div>
      );
    }

    if (viewingSectionIndex === null) {
      return (
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Server Training Portal</h1>
            <p className="text-gray-600">Master the art of service at The French Goat.</p>
            {userProfile?.role === 'manager' && (
              <Button
                variant="outline"
                onClick={() => setShowManagerDashboard(true)}
                className="mt-4"
              >
                Manager Dashboard
              </Button>
            )}
          </div>

          <CourseDashboard
            sections={SECTIONS}
            unlockedSectionIndex={unlockedSectionIndex}
            completedSections={completedSections}
            quizScores={quizScores}
            onSelectSection={handleViewSection}
          />
        </div>
      );
    }

    // Render Active Section
    const renderActiveSection = () => {
      const section = SECTIONS[viewingSectionIndex];
      const commonProps = {
        onComplete: handleSectionComplete,
      };

      switch (section.id) {
        // Content Sections
        case 'general-info': return <GeneralInfoSection {...commonProps} />;
        case 'sequence-of-service': return <SequenceSection {...commonProps} />;
        case 'culinary-terms': return <TermsSection {...commonProps} />;
        case 'menu-mastery': return <MenuMasterySection {...commonProps} />;
        case 'wine-knowledge': return <WineKnowledgeSection {...commonProps} />;
        case 'guest-scenarios': return <GuestScenariosSection {...commonProps} />;
        case 'fine-dining-etiquette': return <FineDiningSection {...commonProps} />;

        // Quiz Sections
        case 'general-info-quiz':
        case 'service-quiz':
        case 'terms-quiz':
        case 'menu-quiz':
        case 'wine-quiz':
        case 'fine-dining-quiz':
          const quizData = QUIZ_DATA[section.id];
          return (
            <Quiz
              title={section.title}
              questionsSource={quizData.questions} // Changed from 'questions' to 'questionsSource' to match original Quiz prop
              accent={quizData.accent}
              onComplete={(passed, score, total) => handleQuizComplete(score, total, passed)} // Adjusted signature
              onCancel={handleReturnToDashboard}
            />
          );

        // Final Exam
        case 'final-exam':
          return <FinalExamSection onComplete={(passed, score, total) => handleExamComplete(score, total, passed)} previousAttempts={progress?.finalExamAttempts as ExamAttempt[] || []} onCancel={handleReturnToDashboard} isSaving={isSaving} />; // Added previousAttempts and isSaving to match original FinalExamSection props

        default:
          return <div>Section component not implemented yet.</div>;
      }
    };

    return (
      <div className="relative max-w-5xl mx-auto">
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
    );
  };

  return (
    <>
      {/* 
        TrainingCockpit is the new Shell.
        We pass the active content (Dashboard or Section) as 'activeArtifact'.
        The ChatHistory is mocked for now or could be hooked up later.
      */}
      <TrainingCockpit
        activeArtifact={renderActiveArtifact()}
        chatHistory={[
          { role: 'ai', content: "Bonjour! I am Marcel, your virtual maitre d'. I am here to help you master our menu and service standards." }
        ]}
        onSendMessage={(msg) => say(msg, 3000)} // Simple echo for now
        onLogout={logout}
      />

      {/* Virtual Trainer (Marcel) Floats above everything */}
      <VirtualTrainer />

      {/* Onboarding Overlay */}
      {showWelcome && <MarcelWelcome onDismiss={handleWelcomeDismiss} />}
    </>
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
