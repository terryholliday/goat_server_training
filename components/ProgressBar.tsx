
import React from 'react';

interface ProgressBarProps {
  value: number;
  total: number;
  color?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, total, color = "bg-indigo-600" }) => {
  const pct = total <= 0 ? 0 : Math.max(0, Math.min(100, Math.round((value / total) * 100)));
  return (
    <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden" aria-label={`Progress ${pct}%`}>
      <div className={`h-full rounded-full transition-all duration-300 ${color}`} style={{ width: `${pct}%` }} />
    </div>
  );
};
