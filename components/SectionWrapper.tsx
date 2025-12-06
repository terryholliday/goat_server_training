
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
    <section className="mb-10">
      <h2 className={`text-2xl font-bold border-b-2 pb-2 mb-6 tracking-wide uppercase ${colorMap[accent]}`}>
        {title}
      </h2>
      {children}
    </section>
  );
};
