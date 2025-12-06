import React from 'react';
import { Button } from './Button';
import { ProgressBar } from './ProgressBar';

interface CourseDashboardProps {
    sections: { title: string; description: string; }[];
    unlockedSectionIndex: number;
    completedSections: number[];
    quizScores: Record<string, { score: number; total: number }>;
    onSelectSection: (index: number) => void;
}

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
    </svg>
);

const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
);


export const CourseDashboard: React.FC<CourseDashboardProps> = ({
    sections,
    unlockedSectionIndex,
    completedSections,
    quizScores,
    onSelectSection
}) => {
    const totalCompleted = completedSections.length;
    const totalSections = sections.length;
    const progressPercentage = Math.round((totalCompleted / totalSections) * 100);

    return (
        <div className="space-y-6">
            {/* Progress Summary */}
            <div className="bg-white border rounded-lg p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900">Your Progress</h3>
                    <span className="text-sm text-gray-600">
                        {totalCompleted} of {totalSections} sections
                    </span>
                </div>
                <ProgressBar
                    value={totalCompleted}
                    total={totalSections}
                    color={totalCompleted === totalSections ? 'bg-green-600' : 'bg-indigo-600'}
                />
                <p className="text-sm text-gray-500 mt-2">
                    {progressPercentage === 100
                        ? '🎉 Congratulations! You have completed all training sections.'
                        : `${progressPercentage}% complete`
                    }
                </p>
            </div>

            {/* Section List */}
            <div className="space-y-3" role="list" aria-label="Training sections">
                {sections.map((section, index) => {
                    const isCompleted = completedSections.includes(index);
                    const isCurrent = index === unlockedSectionIndex;
                    const isLocked = index > unlockedSectionIndex;

                    // Get quiz score if this is a quiz section
                    const quizId = getQuizIdForSection(index);
                    const quizScore = quizId ? quizScores[quizId] : null;

                    let statusIcon, statusText, button;

                    if (isCompleted) {
                        statusIcon = <CheckIcon />;
                        statusText = quizScore
                            ? `Completed • ${Math.round((quizScore.score / quizScore.total) * 100)}%`
                            : "Completed";
                        button = (
                            <Button
                                variant="outline"
                                onClick={() => onSelectSection(index)}
                                aria-label={`Review ${section.title}`}
                            >
                                Review
                            </Button>
                        );
                    } else if (isCurrent) {
                        statusIcon = <PlayIcon />;
                        statusText = "Next up";
                        button = (
                            <Button
                                variant="primary"
                                onClick={() => onSelectSection(index)}
                                aria-label={`Start ${section.title}`}
                            >
                                Start
                            </Button>
                        );
                    } else {
                        statusIcon = <LockIcon />;
                        statusText = "Locked";
                        button = (
                            <Button disabled aria-label={`${section.title} is locked`}>
                                Locked
                            </Button>
                        );
                    }

                    return (
                        <div
                            key={index}
                            role="listitem"
                            className={`p-4 border rounded-lg flex items-center justify-between transition-all ${isLocked ? 'bg-gray-50 opacity-75' : 'bg-white hover:shadow-sm'
                                }`}
                        >
                            <div className="flex items-center gap-4 min-w-0 flex-grow">
                                <div className="flex-shrink-0">{statusIcon}</div>
                                <div className="min-w-0 flex-grow">
                                    <h3 className={`font-bold text-lg truncate ${isLocked ? 'text-gray-500' : 'text-gray-900'}`}>
                                        {section.title}
                                    </h3>
                                    <p className={`text-sm truncate ${isLocked ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {section.description}
                                    </p>
                                    {isCompleted && quizScore && (
                                        <p className="text-xs text-green-600 mt-1">
                                            Score: {quizScore.score}/{quizScore.total}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="ml-4 flex-shrink-0 flex items-center gap-3">
                                <span className={`text-xs font-medium hidden sm:block ${isCompleted ? 'text-green-600' : isCurrent ? 'text-indigo-600' : 'text-gray-400'
                                    }`}>
                                    {statusText}
                                </span>
                                {button}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// Helper to map section index to quiz ID
function getQuizIdForSection(sectionIndex: number): string | null {
    const quizSectionMap: Record<number, string> = {
        1: 'general-info-quiz',
        3: 'service-quiz',
        5: 'terms-quiz',
        7: 'menu-quiz',
        9: 'wine-quiz',
        10: 'final-exam'
    };
    return quizSectionMap[sectionIndex] || null;
}