
import React, { useState } from 'react';
import { CULINARY_TERMS } from '../constants';
import { SectionWrapper } from './SectionWrapper';
import { Button } from './Button';
import { ProgressBar } from './ProgressBar';

interface TermsSectionProps {
    onComplete: () => void;
}

const TERMS_PER_PAGE = 5;

export const TermsSection: React.FC<TermsSectionProps> = ({ onComplete }) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(CULINARY_TERMS.length / TERMS_PER_PAGE);
  const isLastPage = page === totalPages - 1;

  const startIndex = page * TERMS_PER_PAGE;
  const endIndex = startIndex + TERMS_PER_PAGE;
  const currentTerms = CULINARY_TERMS.slice(startIndex, endIndex);

  const handleNext = () => {
    if (isLastPage) {
      onComplete();
    } else {
      setPage(p => p + 1);
    }
  };

  const handleBack = () => {
    setPage(p => p - 1);
  };

  return (
    <SectionWrapper title={`Culinary Terms (${page + 1}/${totalPages})`} accent="rose">
        <ProgressBar value={page + 1} total={totalPages} color="bg-rose-600" />
        <div className="space-y-6 mt-6">
            {currentTerms.map((term, idx) => (
            <div key={idx} className="border-b pb-4">
                <h3 className="text-lg font-bold text-gray-900">{term.term}</h3>
                <p className="text-sm italic text-rose-600 mb-1">{term.pronunciation}</p>
                <p className="text-sm text-gray-600 mt-2">{term.definition}</p>
            </div>
            ))}
        </div>
        <div className="flex justify-between items-center mt-8">
            <Button variant="outline" disabled={page === 0} onClick={handleBack}>Back</Button>
            <Button onClick={handleNext}>
                {isLastPage ? 'Complete Section' : 'Next'}
            </Button>
        </div>
    </SectionWrapper>
  );
};
