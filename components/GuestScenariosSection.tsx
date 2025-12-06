import React, { useState } from 'react';
import { ScenarioSimulation } from './ScenarioSimulation';
import { SectionWrapper } from './SectionWrapper';
import { Button } from './Button';
import { ProgressBar } from './ProgressBar';
import { SCENARIOS, ALLERGY_SCENARIOS } from '../data/scenarios';

interface GuestScenariosSectionProps {
    onComplete: () => void;
}

type ViewMode = 'menu' | 'scenario' | 'allergy' | 'results';

export const GuestScenariosSection: React.FC<GuestScenariosSectionProps> = ({ onComplete }) => {
    const [viewMode, setViewMode] = useState<ViewMode>('menu');
    const [selectedScenarioId, setSelectedScenarioId] = useState<string | null>(null);
    const [completedScenarios, setCompletedScenarios] = useState<Set<string>>(new Set());
    const [scores, setScores] = useState<Record<string, { score: number; passed: boolean }>>({});

    const selectedScenario = SCENARIOS.find(s => s.id === selectedScenarioId);

    const totalScenarios = SCENARIOS.length;
    const completedCount = completedScenarios.size;
    const allCompleted = completedCount >= 3; // Require at least 3 scenarios to complete section

    const handleScenarioComplete = (score: number, passed: boolean) => {
        if (selectedScenarioId) {
            setCompletedScenarios(prev => new Set([...prev, selectedScenarioId]));
            setScores(prev => ({ ...prev, [selectedScenarioId]: { score, passed } }));
        }
        setViewMode('menu');
        setSelectedScenarioId(null);
    };

    const handleStartScenario = (scenarioId: string) => {
        setSelectedScenarioId(scenarioId);
        setViewMode('scenario');
    };

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'beginner': return 'bg-green-100 text-green-800';
            case 'intermediate': return 'bg-amber-100 text-amber-800';
            case 'advanced': return 'bg-rose-100 text-rose-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getCategoryIcon = (category: string) => {
        const icons: Record<string, string> = {
            complaint: '😤',
            allergy: '⚠️',
            vip: '⭐',
            timing: '⏱️',
            mistake: '❌',
            pressure: '🔥',
            upsell: '💰'
        };
        return icons[category] || '📋';
    };

    // Scenario selection menu
    if (viewMode === 'menu') {
        return (
            <SectionWrapper title="Guest Interaction Scenarios" accent="indigo">
                <div className="space-y-6">
                    {/* Progress */}
                    <div className="bg-white border rounded-lg p-4 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-700 font-medium">Your Progress</span>
                            <span className="text-sm text-gray-500">{completedCount} of {totalScenarios} completed</span>
                        </div>
                        <ProgressBar value={completedCount} total={totalScenarios} color="bg-indigo-600" />
                        <p className="text-sm text-gray-500 mt-2">
                            Complete at least 3 scenarios to unlock the next section.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                        <h3 className="font-semibold text-indigo-900 mb-2">🎭 Practice Real-World Situations</h3>
                        <p className="text-indigo-800 text-sm">
                            These interactive scenarios simulate high-pressure guest situations. Make decisions and receive
                            feedback on whether your choices were Best, Acceptable, or Poor. Learn to handle complaints,
                            allergies, VIPs, timing issues, and more.
                        </p>
                    </div>

                    {/* Scenario Cards */}
                    <div className="grid gap-4">
                        {SCENARIOS.map(scenario => {
                            const isCompleted = completedScenarios.has(scenario.id);
                            const result = scores[scenario.id];

                            return (
                                <div
                                    key={scenario.id}
                                    className={`bg-white border rounded-lg p-4 shadow-sm transition-all ${isCompleted ? 'border-green-300' : 'hover:border-indigo-300 hover:shadow-md'
                                        }`}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-2xl">{getCategoryIcon(scenario.category)}</span>
                                                <h4 className="font-semibold text-gray-800">{scenario.title}</h4>
                                                {isCompleted && (
                                                    <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                                                        ✓ Done
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-600 mb-3">{scenario.context.slice(0, 100)}...</p>
                                            <div className="flex items-center gap-2">
                                                <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(scenario.difficulty)}`}>
                                                    {scenario.difficulty}
                                                </span>
                                                <span className="text-xs text-gray-500">{scenario.steps.length} decisions</span>
                                                {result && (
                                                    <span className={`text-xs px-2 py-1 rounded-full ${result.passed ? 'bg-green-100 text-green-800' : 'bg-rose-100 text-rose-800'
                                                        }`}>
                                                        {result.score} pts
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <Button
                                            onClick={() => handleStartScenario(scenario.id)}
                                            variant={isCompleted ? 'outline' : 'primary'}
                                            className="shrink-0"
                                        >
                                            {isCompleted ? 'Retry' : 'Start'}
                                        </Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Allergy Quick Reference */}
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <h3 className="font-semibold text-amber-900 mb-2">⚠️ Allergy Quick Reference</h3>
                        <p className="text-amber-800 text-sm mb-3">
                            Review common allergy scenarios and safe recommendations:
                        </p>
                        <div className="space-y-2">
                            {ALLERGY_SCENARIOS.slice(0, 3).map(scenario => (
                                <div key={scenario.id} className="bg-white rounded p-3 text-sm">
                                    <p className="font-medium text-gray-800">{scenario.guestStatement}</p>
                                    <p className="text-gray-600 mt-1 italic">
                                        Safe picks: {scenario.safeMenuItems.slice(0, 3).join(', ')}...
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Complete Section Button */}
                    {allCompleted && (
                        <div className="text-center pt-4">
                            <Button onClick={onComplete} variant="primary">
                                Complete Section ✓
                            </Button>
                        </div>
                    )}
                </div>
            </SectionWrapper>
        );
    }

    // Active scenario
    if (viewMode === 'scenario' && selectedScenario) {
        return (
            <div>
                <Button
                    variant="outline"
                    onClick={() => { setViewMode('menu'); setSelectedScenarioId(null); }}
                    className="mb-4"
                >
                    ← Back to Scenarios
                </Button>
                <ScenarioSimulation
                    scenario={selectedScenario}
                    onComplete={handleScenarioComplete}
                />
            </div>
        );
    }

    return null;
};

export default GuestScenariosSection;
