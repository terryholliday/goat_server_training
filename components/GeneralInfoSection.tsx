
import React, { useState } from 'react';
import { GENERAL_INFO_PAGES, IMAGE_MAP } from '../constants';
import { SectionWrapper } from './SectionWrapper';
import { ProgressBar } from './ProgressBar';
import { Button } from './Button';

interface GeneralInfoSectionProps {
  onComplete: () => void;
}

export const GeneralInfoSection: React.FC<GeneralInfoSectionProps> = ({ onComplete }) => {
  const [page, setPage] = useState(0);
  const total = GENERAL_INFO_PAGES.length;
  const data = GENERAL_INFO_PAGES[page];
  const isLastPage = page === total - 1;
  const pageImage = IMAGE_MAP.generalInfo[page % IMAGE_MAP.generalInfo.length];

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

        {/* Featured Image */}
        <div className="rounded-xl overflow-hidden shadow-lg bg-slate-100">
          <img
            src={pageImage}
            alt={data.title}
            className="w-full max-h-72 object-contain mx-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).src = IMAGE_MAP.fallback;
            }}
          />
        </div>

        <div className="bg-blue-50/50 dark:bg-zinc-900/50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400 mb-4">{data.title}</h3>
          <div className="text-base leading-relaxed text-gray-700 dark:text-gray-300 space-y-4">
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
