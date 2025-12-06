
import React, { useState } from 'react';
import { GENERAL_INFO_PAGES, IMAGE_MAP } from '../constants';
import { SectionWrapper } from './SectionWrapper';
import { ProgressBar } from './ProgressBar';
import { Button } from './Button';
import { SafeImage } from './SafeImage';

interface GeneralInfoSectionProps {
  onComplete: () => void;
}

export const GeneralInfoSection: React.FC<GeneralInfoSectionProps> = ({ onComplete }) => {
  const [page, setPage] = useState(0);
  const total = GENERAL_INFO_PAGES.length;
  const data = GENERAL_INFO_PAGES[page];
  const isLastPage = page === total - 1;

  const handleNext = () => {
    if (isLastPage) {
      onComplete();
    } else {
      setPage((p) => Math.min(total - 1, p + 1));
    }
  };

  return (
    <SectionWrapper title={`General Information (${page + 1}/${total})`} accent="blue">
      <div className="space-y-6">

        <ProgressBar value={page + 1} total={total} color="bg-blue-600" />
        <div className="bg-blue-50/50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-900 mb-4">{data.title}</h3>
          <div className="text-base leading-relaxed text-gray-700 space-y-4">
            {data.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
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
