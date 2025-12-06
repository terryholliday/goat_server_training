
import React, { useState } from 'react';
import { SEQUENCE_OF_SERVICE, IMAGE_MAP } from '../constants';
import { SectionWrapper } from './SectionWrapper';
import { SafeImage } from './SafeImage';
import { Button } from './Button';
import { ProgressBar } from './ProgressBar';

interface SequenceSectionProps {
  onComplete: () => void;
}

export const SequenceSection: React.FC<SequenceSectionProps> = ({ onComplete }) => {
  const [page, setPage] = useState(0);
  const total = SEQUENCE_OF_SERVICE.length;
  const data = SEQUENCE_OF_SERVICE[page];
  const isLastPage = page === total - 1;

  const handleNext = () => {
    if (isLastPage) {
      onComplete();
    } else {
      setPage((p) => Math.min(total - 1, p + 1));
    }
  };

  return (
    <SectionWrapper title={`Sequence of Service (${page + 1}/${total})`} accent="green">
      <div className="space-y-6">
        <ProgressBar value={page + 1} total={total} color="bg-green-600" />
        <div className="bg-green-50/50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-green-900 mb-4">{data.title}</h3>
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
