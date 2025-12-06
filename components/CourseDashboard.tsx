import React from 'react';
import { Button } from './Button';

interface CourseDashboardProps {
    sections: { title: string; description: string; }[];
    unlockedSectionIndex: number;
    onSelectSection: (index: number) => void;
}

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
    </svg>
);

const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
);


export const CourseDashboard: React.FC<CourseDashboardProps> = ({ sections, unlockedSectionIndex, onSelectSection }) => {
    return (
        <div className="space-y-4">
            {sections.map((section, index) => {
                const isCompleted = index < unlockedSectionIndex;
                const isCurrent = index === unlockedSectionIndex;
                const isLocked = index > unlockedSectionIndex;

                let statusIcon, statusText, button;

                if (isCompleted) {
                    statusIcon = <CheckIcon />;
                    statusText = "Completed";
                    button = <Button variant="outline" onClick={() => onSelectSection(index)}>Review</Button>;
                } else if (isCurrent) {
                    statusIcon = <PlayIcon />;
                    statusText = "Next up";
                    button = <Button variant="primary" onClick={() => onSelectSection(index)}>Start</Button>;
                } else {
                    statusIcon = <LockIcon />;
                    statusText = "Locked";
                    button = <Button disabled>Locked</Button>;
                }

                return (
                    <div
                        key={index}
                        className={`p-4 border rounded-lg flex items-center justify-between transition-all ${isLocked ? 'bg-gray-50' : 'bg-white'}`}
                    >
                        <div className="flex items-center gap-4 min-w-0 flex-grow">
                            <div className="flex-shrink-0">{statusIcon}</div>
                            <div className="min-w-0 flex-grow">
                                <h3 className={`font-bold text-lg truncate ${isLocked ? 'text-gray-500' : 'text-gray-900'}`}>{section.title}</h3>
                                <p className={`text-sm truncate ${isLocked ? 'text-gray-400' : 'text-gray-600'}`}>{section.description}</p>
                            </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                            {button}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};