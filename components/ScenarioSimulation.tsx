import React, { useState } from 'react';
import type { Scenario, ScenarioStep, Choice } from '../types/enhanced';
import { Button } from './Button';
import { ProgressBar } from './ProgressBar';
import { SectionWrapper } from './SectionWrapper';

interface ScenarioSimulationProps {
    scenario: Scenario;
    onComplete: (score: number, passed: boolean) => void;
}

const ChoiceButton: React.FC<{
    choice: Choice;
    isSelected: boolean;
    isRevealed: boolean;
    onClick: () => void;
}> = ({ choice, isSelected, isRevealed, onClick }) => {
    const getQualityStyles = () => {
        if (!isRevealed) {
            return isSelected
                ? 'bg-indigo-100 border-indigo-400 ring-2 ring-indigo-300'
                : 'bg-white hover:bg-gray-50 border-gray-300';
        }

        switch (choice.quality) {
            case 'best':
                return 'bg-green-100 border-green-500';
            case 'acceptable':
                return 'bg-amber-100 border-amber-500';
            case 'poor':
                return 'bg-rose-100 border-rose-500';
        }
    };

    const getQualityBadge = () => {
        if (!isRevealed) return null;

        switch (choice.quality) {
            case 'best':
                return <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">Best Response</span>;
            case 'acceptable':
                return <span className="bg-amber-600 text-white text-xs px-2 py-1 rounded-full">Acceptable</span>;
            case 'poor':
                return <span className="bg-rose-600 text-white text-xs px-2 py-1 rounded-full">Poor Choice</span>;
        }
    };

    return (
        <button
            onClick={onClick}
            disabled={isRevealed}
            className={`w-full text-left border-2 rounded-lg px-4 py-3 transition-all ${getQualityStyles()} ${isRevealed ? 'cursor-default' : 'cursor-pointer'
                }`}
        >
            <div className="flex items-start justify-between gap-3">
                <p className="text-gray-800 flex-1">{choice.text}</p>
                {getQualityBadge()}
            </div>
            {isRevealed && isSelected && (
                <div className={`mt-3 p-3 rounded text-sm ${choice.quality === 'best' ? 'bg-green-50 text-green-800' :
                        choice.quality === 'acceptable' ? 'bg-amber-50 text-amber-800' :
                            'bg-rose-50 text-rose-800'
                    }`}>
                    <strong>Feedback:</strong> {choice.feedback}
                </div>
            )}
        </button>
    );
};

export const ScenarioSimulation: React.FC<ScenarioSimulationProps> = ({ scenario, onComplete }) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [selectedChoices, setSelectedChoices] = useState<(string | null)[]>(
        new Array(scenario.steps.length).fill(null)
    );
    const [revealedSteps, setRevealedSteps] = useState<boolean[]>(
        new Array(scenario.steps.length).fill(false)
    );
    const [showFinalResults, setShowFinalResults] = useState(false);
    const [started, setStarted] = useState(false);

    const currentStep = scenario.steps[currentStepIndex];
    const totalSteps = scenario.steps.length;

    const handleChoiceSelect = (choiceId: string) => {
        if (revealedSteps[currentStepIndex]) return;

        const newSelections = [...selectedChoices];
        newSelections[currentStepIndex] = choiceId;
        setSelectedChoices(newSelections);
    };

    const handleSubmit = () => {
        if (!selectedChoices[currentStepIndex]) return;

        const newRevealed = [...revealedSteps];
        newRevealed[currentStepIndex] = true;
        setRevealedSteps(newRevealed);
    };

    const handleNext = () => {
        if (currentStepIndex + 1 < totalSteps) {
            setCurrentStepIndex(prev => prev + 1);
        } else {
            setShowFinalResults(true);
        }
    };

    const calculateResults = () => {
        let totalPoints = 0;
        const stepResults: { step: ScenarioStep; choice: Choice | null; }[] = [];

        scenario.steps.forEach((step, idx) => {
            const selectedId = selectedChoices[idx];
            const choice = step.choices.find(c => c.id === selectedId) || null;
            if (choice) {
                totalPoints += choice.points;
            }
            stepResults.push({ step, choice });
        });

        const maxPoints = scenario.scoring.maxPoints;
        const percentage = Math.round((totalPoints / maxPoints) * 100);
        const passed = totalPoints >= scenario.scoring.passingPoints;
        const excellent = totalPoints >= scenario.scoring.excellentThreshold;

        return { totalPoints, maxPoints, percentage, passed, excellent, stepResults };
    };

    // Start screen
    if (!started) {
        return (
            <SectionWrapper title={scenario.title} accent="indigo">
                <div className="bg-white border rounded-lg p-6 shadow-sm space-y-4">
                    <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${scenario.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                                scenario.difficulty === 'intermediate' ? 'bg-amber-100 text-amber-800' :
                                    'bg-rose-100 text-rose-800'
                            }`}>
                            {scenario.difficulty.charAt(0).toUpperCase() + scenario.difficulty.slice(1)}
                        </span>
                        <span className="text-gray-500 text-sm">{totalSteps} decisions to make</span>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">📋 Situation</h3>
                        <p className="text-gray-700">{scenario.context}</p>
                        {scenario.guestProfile && (
                            <p className="text-gray-600 mt-2 italic">Guest: {scenario.guestProfile}</p>
                        )}
                        {scenario.tableNumber && (
                            <p className="text-sm text-gray-500 mt-1">Table #{scenario.tableNumber}</p>
                        )}
                    </div>

                    <div className="bg-indigo-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-indigo-800 mb-2">🎯 Learning Objectives</h3>
                        <ul className="list-disc list-inside text-sm text-indigo-700 space-y-1">
                            {scenario.learningObjectives.map((obj, idx) => (
                                <li key={idx}>{obj}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center pt-2">
                        <Button onClick={() => setStarted(true)} variant="primary">
                            Begin Scenario
                        </Button>
                    </div>
                </div>
            </SectionWrapper>
        );
    }

    // Results screen
    if (showFinalResults) {
        const { totalPoints, maxPoints, percentage, passed, excellent, stepResults } = calculateResults();

        return (
            <SectionWrapper title={`${scenario.title} - Results`} accent="indigo">
                <div className="bg-white border rounded-lg p-6 shadow-sm space-y-6">
                    <div className={`p-4 rounded-lg ${excellent ? 'bg-green-50' : passed ? 'bg-amber-50' : 'bg-rose-50'
                        }`}>
                        <p className={`text-2xl font-bold text-center ${excellent ? 'text-green-800' : passed ? 'text-amber-800' : 'text-rose-800'
                            }`}>
                            {excellent ? '🌟 Excellent Service!' : passed ? '✓ Passed!' : '❌ Needs Improvement'}
                        </p>
                        <p className="text-lg font-bold text-center mt-2">{totalPoints} / {maxPoints} points ({percentage}%)</p>
                        <ProgressBar
                            value={totalPoints}
                            total={maxPoints}
                            color={excellent ? 'bg-green-600' : passed ? 'bg-amber-600' : 'bg-rose-600'}
                        />
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-bold text-gray-800">Your Decisions:</h3>
                        {stepResults.map((result, idx) => (
                            <div key={idx} className="border rounded-lg p-4">
                                <p className="font-medium text-gray-700 mb-2">Step {idx + 1}: {result.step.situation.slice(0, 80)}...</p>
                                {result.choice && (
                                    <div className={`p-3 rounded ${result.choice.quality === 'best' ? 'bg-green-50 border-l-4 border-green-500' :
                                            result.choice.quality === 'acceptable' ? 'bg-amber-50 border-l-4 border-amber-500' :
                                                'bg-rose-50 border-l-4 border-rose-500'
                                        }`}>
                                        <p className="text-sm mb-1"><strong>Your choice:</strong> {result.choice.quality}</p>
                                        <p className="text-sm text-gray-600">{result.choice.feedback}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-2">📝 Debrief</h3>
                        <p className="text-blue-700 text-sm">{scenario.debriefNotes}</p>
                    </div>

                    <div className="text-center">
                        <Button onClick={() => onComplete(totalPoints, passed)} variant="primary">
                            Continue
                        </Button>
                    </div>
                </div>
            </SectionWrapper>
        );
    }

    // Active scenario step
    return (
        <SectionWrapper title={scenario.title} accent="indigo">
            <div className="space-y-4">
                <ProgressBar value={currentStepIndex + 1} total={totalSteps} color="bg-indigo-600" />
                <p className="text-sm text-gray-600 text-center">Step {currentStepIndex + 1} of {totalSteps}</p>

                <div className="bg-white border rounded-lg p-6 shadow-sm space-y-4">
                    {/* Situation */}
                    <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="text-gray-800">{currentStep.situation}</p>
                        {currentStep.guestDialogue && (
                            <div className="mt-3 p-3 bg-white border-l-4 border-indigo-400 italic text-gray-700">
                                "{currentStep.guestDialogue}"
                            </div>
                        )}
                    </div>

                    {/* Choices */}
                    <div className="space-y-3">
                        <p className="font-medium text-gray-700">What do you do?</p>
                        {currentStep.choices.map((choice) => (
                            <ChoiceButton
                                key={choice.id}
                                choice={choice}
                                isSelected={selectedChoices[currentStepIndex] === choice.id}
                                isRevealed={revealedSteps[currentStepIndex]}
                                onClick={() => handleChoiceSelect(choice.id)}
                            />
                        ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex justify-end gap-3 pt-4">
                        {!revealedSteps[currentStepIndex] ? (
                            <Button
                                onClick={handleSubmit}
                                disabled={!selectedChoices[currentStepIndex]}
                            >
                                Submit Answer
                            </Button>
                        ) : (
                            <Button onClick={handleNext} variant="primary">
                                {currentStepIndex + 1 === totalSteps ? 'See Results' : 'Next Step'}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ScenarioSimulation;
