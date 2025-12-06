
import React from 'react';

export const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800 border border-purple-200 whitespace-nowrap">{children}</span>;
};
