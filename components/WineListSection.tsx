
import React, { useState } from 'react';
import { MENU_KNOWLEDGE_PAGES, IMAGE_MAP } from '../constants';
import { SectionWrapper } from './SectionWrapper';
import { SafeImage } from './SafeImage';
import { Button } from './Button';
import { ProgressBar } from './ProgressBar';

interface MenuKnowledgeSectionProps {
    onComplete: () => void;
}

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
            <div className="bg-purple-50/50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-2">{data.title}</h3>
                <div className="text-base leading-relaxed text-gray-700 space-y-4 whitespace-pre-line">
                    {data.content}
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
