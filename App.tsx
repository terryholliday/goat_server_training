
import React, { useState } from 'react';
import { GeneralInfoSection } from './components/GeneralInfoSection';
import { TermsSection } from './components/TermsSection';
import { Quiz } from './components/Quiz';
import { SequenceSection } from './components/SequenceSection';
import { MenuKnowledgeSection } from './components/MenuKnowledgeSection';
import { WineKnowledgeSection } from './components/WineKnowledgeSection';
import { FinalExamSection } from './components/FinalExamSection';
import { 
    GENERAL_INFO_QUIZ, 
    SERVICE_QUIZ, 
    TERMS_QUIZ, 
    MENU_QUIZ,
    WINE_QUIZ,
} from './constants';
import { CourseDashboard } from './components/CourseDashboard';
import { Button } from './components/Button';

const SECTIONS = [
  { title: "General Information", Component: GeneralInfoSection, description: "Key facts, hours, and policies." },
  { title: "General Info Quiz", Component: (props: any) => <Quiz {...props} title="General Info Quiz" accent="blue" questionsSource={GENERAL_INFO_QUIZ} />, description: "Test your knowledge of our restaurant." },
  { title: "Sequence of Service", Component: SequenceSection, description: "Learn the core steps of service." },
  { title: "Service Quiz", Component: (props: any) => <Quiz {...props} title="Service Quiz" accent="green" questionsSource={SERVICE_QUIZ} />, description: "Test your knowledge of the service sequence." },
  { title: "Culinary Terms", Component: TermsSection, description: "Learn key French culinary vocabulary." },
  { title: "Terms Quiz", Component: (props: any) => <Quiz {...props} title="Terms Quiz" accent="rose" questionsSource={TERMS_QUIZ} />, description: "Test your knowledge of culinary terms." },
  { title: "Menu Knowledge", Component: MenuKnowledgeSection, description: "Explore our dinner, brunch, and beverage menus." },
  { title: "Menu Quiz", Component: (props: any) => <Quiz {...props} title="Menu Quiz" accent="purple" questionsSource={MENU_QUIZ} />, description: "Test your knowledge of our food and drinks." },
  { title: "Wine Knowledge", Component: WineKnowledgeSection, description: "Explore our wine philosophy and offerings." },
  { title: "Wine Quiz", Component: (props: any) => <Quiz {...props} title="Wine Quiz" accent="amber" questionsSource={WINE_QUIZ} />, description: "Test your knowledge of our wine program." },
  { title: "Final Exam", Component: FinalExamSection, description: "A comprehensive exam covering all topics." },
];

const App: React.FC = () => {
  const [unlockedSectionIndex, setUnlockedSectionIndex] = useState(0);
  const [viewingSectionIndex, setViewingSectionIndex] = useState<number | null>(null);

  const handleSectionComplete = () => {
    if (viewingSectionIndex !== null) {
      // Unlock the next section if the completed one was the latest available one
      if (viewingSectionIndex === unlockedSectionIndex && unlockedSectionIndex < SECTIONS.length -1) {
        setUnlockedSectionIndex(prev => prev + 1);
      }
       if (viewingSectionIndex === SECTIONS.length - 1) {
         setUnlockedSectionIndex(SECTIONS.length); // Mark all as complete
       }
      // Return to dashboard
      setViewingSectionIndex(null);
    }
  };
  
  const handleViewSection = (index: number) => {
    if (index <= unlockedSectionIndex) {
        setViewingSectionIndex(index);
    }
  };
  
  const handleReturnToDashboard = () => {
    setViewingSectionIndex(null);
  }

  const ActiveComponent = viewingSectionIndex !== null ? SECTIONS[viewingSectionIndex].Component : null;
  
  return (
    <main className="min-h-screen text-[#333] bg-[#fdfcf9]">
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#2c2c2c] tracking-tight mb-4">
              The French Goat Training Program
            </h1>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Welcome to your immersive training portal. Complete each section to unlock the next and master your knowledge of our standards.
            </p>
        </header>

        {viewingSectionIndex === null ? (
          <CourseDashboard 
            sections={SECTIONS}
            unlockedSectionIndex={unlockedSectionIndex}
            onSelectSection={handleViewSection}
          />
        ) : (
          ActiveComponent && (
            <div>
              <Button variant="outline" onClick={handleReturnToDashboard} className="mb-6">
                &larr; Back to Course Outline
              </Button>
              <ActiveComponent onComplete={handleSectionComplete} />
            </div>
          )
        )}

      </div>
       <footer className="text-center py-6 text-sm text-gray-500 border-t mt-10">
          <p>&copy; {new Date().getFullYear()} The French Goat. All Rights Reserved.</p>
       </footer>
    </main>
  );
};

export default App;
