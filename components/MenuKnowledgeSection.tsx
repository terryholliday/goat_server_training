
import React, { useState } from 'react';
import { MENU_KNOWLEDGE_PAGES, IMAGE_MAP } from '../constants';
import { SectionWrapper } from './SectionWrapper';
import { SafeImage } from './SafeImage';
import { Button } from './Button';
import { ProgressBar } from './ProgressBar';

interface MenuKnowledgeSectionProps {
    onComplete: () => void;
}

// Helper function to parse simple markdown for bolding
const renderWithBold = (text: string) => {
    return text.split(/\*\*(.*?)\*\*/g).map((part, i) => {
        return i % 2 === 1 ? <strong key={i}>{part}</strong> : part;
    });
};

export const MenuKnowledgeSection: React.FC<MenuKnowledgeSectionProps> = ({ onComplete }) => {
  const [page, setPage] = useState(0);
  const total = MENU_KNOWLEDGE_PAGES.length;
  const data = MENU_KNOWLEDGE_PAGES[page];
  const isLastPage = page === total - 1;

  const handleNext = () => {
    if (isLastPage) {
      onComplete();
    } else {
      setPage((p) => Math.min(total - 1, p + 1));
    }
  };

  return (
    <SectionWrapper title={`Menu Knowledge (${page + 1}/${total})`} accent="purple">
      <div className="space-y-6">
        <ProgressBar value={page + 1} total={total} color="bg-purple-600" />
        <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="bg-purple-50/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-4">{data.title}</h3>
                <div className="text-base text-gray-700 space-y-3">
                    {data.content.split('\n').map((line, index) => {
                        if (line.trim() === '') return null; // Skip empty lines

                        // List item (menu item)
                        if (line.trim().startsWith('*')) {
                            const content = line.replace(/^\s*\*\s*/, '');
                            const parts = content.split(':');
                            const titlePart = parts[0];
                            const descriptionPart = parts.slice(1).join(':').trim();

                            return (
                                <div key={index} className="py-2">
                                    <p className="font-semibold text-gray-800">{renderWithBold(titlePart)}</p>
                                    {descriptionPart && <p className="text-sm text-gray-600 pl-4">{descriptionPart}</p>}
                                </div>
                            );
                        }

                        // Subheading (Category)
                        if (line.trim().startsWith('**') && line.trim().endsWith('**') && line.split('**').length === 3) {
                            const content = line.replace(/\*\*/g, '');
                            return <h4 key={index} className="text-xl font-bold text-purple-900 pt-4 pb-2 mt-2 border-b border-purple-200">{content}</h4>;
                        }

                        // Regular paragraph
                        return <p key={index} className="mb-2">{renderWithBold(line)}</p>;
                    })}
                </div>
            </div>
            <SafeImage src={IMAGE_MAP.menuKnowledge[page]} alt={data.title} caption={data.title} />
        </div>
        <div className="flex justify-between items-center">
          <Button variant="outline" disabled={page === 0} onClick={() => setPage((p) => Math.max(0, p - 1))}>Back</Button>
          <Button onClick={handleNext}>
            {isLastPage ? 'Complete Section' : 'Next'}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};
