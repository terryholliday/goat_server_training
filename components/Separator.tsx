import React from 'react';

export const Separator: React.FC<{ className?: string }> = ({ className = '' }) => {
  return <div className={`bg-gray-200 h-[1px] w-full my-8 ${className}`} />;
};
