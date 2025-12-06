
import React from 'react';

type AccentColor = "gray" | "blue" | "green" | "purple" | "rose" | "amber" | "indigo";

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
  accent?: AccentColor;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, children, accent = "gray" }) => {
  const colorMap: Record<AccentColor, string> = {
    gray: "text-gray-800 border-gray-300",
    blue: "text-blue-800 border-blue-300",
    green: "text-green-800 border-green-300",
    purple: "text-purple-800 border-purple-300",
    rose: "text-rose-800 border-rose-300",
    amber: "text-amber-800 border-amber-300",
    indigo: "text-indigo-800 border-indigo-300",
  };

  return (
    <section className="mb-10 px-6 py-4 sm:px-8 sm:py-6 lg:px-10 lg:py-8 bg-white rounded-xl shadow-sm">
      <h2 className={`text-2xl font-bold border-b-2 pb-3 mb-6 tracking-wide uppercase ${colorMap[accent]}`}>
        {title}
      </h2>
      {children}
    </section>
  );
};
