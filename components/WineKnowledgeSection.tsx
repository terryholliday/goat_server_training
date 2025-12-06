
import React, { useState } from 'react';
import { WINE_KNOWLEDGE_PAGES, IMAGE_MAP } from '../constants';
import { SectionWrapper } from './SectionWrapper';
import { SafeImage } from './SafeImage';
import { Button } from './Button';
import { ProgressBar } from './ProgressBar';

interface WineKnowledgeSectionProps {
    onComplete: () => void;
}

// Helper function to parse simple markdown for bolding
const renderWithBold = (text: string) => {
    return text.split(/\*\*(.*?)\*\*/g).map((part, i) => {
        return i % 2 === 1 ? <strong key={i}>{part}</strong> : part;
    });
};

export const WineKnowledgeSection: React.FC<WineKnowledgeSectionProps> = ({ onComplete }) => {
  const [page, setPage] = useState(0);
  const total = WINE_KNOWLEDGE_PAGES.length;
  const data = WINE_KNOWLEDGE_PAGES[page];
  const isLastPage = page === total - 1;

  const handleNext = () => {
    if (isLastPage) {
      onComplete();
    } else {
      setPage((p) => Math.min(total - 1, p + 1));
    }
  };

  return (
    <SectionWrapper title={`Wine Knowledge (${page + 1}/${total})`} accent="amber">
      <div className="space-y-6">
        <ProgressBar value={page + 1} total={total} color="bg-amber-600" />
        <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="bg-amber-50/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-amber-900 mb-4">{data.title}</h3>
                <div className="text-base leading-relaxed text-gray-700 space-y-4">
                  {data.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{renderWithBold(paragraph)}</p>
                  ))}
                </div>
            </div>
            <SafeImage src={IMAGE_MAP.wineKnowledge[page]} alt={data.title} caption={data.title} />
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
