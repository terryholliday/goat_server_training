import React, { useState, useCallback } from 'react';
import type { Flashcard, FlashcardDeck as FlashcardDeckType } from '../types/enhanced';
import { Button } from './Button';
import { ProgressBar } from './ProgressBar';
import { SectionWrapper } from './SectionWrapper';

interface FlashcardDeckProps {
    deck: FlashcardDeckType;
    onComplete?: (knownCount: number, totalCount: number) => void;
    onBack?: () => void;
}

interface CardState {
    isFlipped: boolean;
    status: 'unseen' | 'known' | 'learning';
}

export const FlashcardDeckComponent: React.FC<FlashcardDeckProps> = ({ deck, onComplete, onBack }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardStates, setCardStates] = useState<CardState[]>(
        deck.cards.map(() => ({ isFlipped: false, status: 'unseen' }))
    );
    const [isFlipped, setIsFlipped] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const currentCard = deck.cards[currentIndex];
    const knownCount = cardStates.filter(s => s.status === 'known').length;
    const learningCount = cardStates.filter(s => s.status === 'learning').length;
    const progress = (knownCount + learningCount) / deck.cards.length;

    const handleFlip = useCallback(() => {
        setIsFlipped(prev => !prev);
    }, []);

    const handleMarkKnown = useCallback(() => {
        setCardStates(prev => prev.map((s, i) =>
            i === currentIndex ? { ...s, status: 'known' } : s
        ));
        goToNext();
    }, [currentIndex]);

    const handleMarkLearning = useCallback(() => {
        setCardStates(prev => prev.map((s, i) =>
            i === currentIndex ? { ...s, status: 'learning' } : s
        ));
        goToNext();
    }, [currentIndex]);

    const goToNext = () => {
        setIsFlipped(false);
        if (currentIndex < deck.cards.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            // Check if all cards are reviewed
            const allReviewed = cardStates.every(s => s.status !== 'unseen');
            if (allReviewed) {
                setIsComplete(true);
                onComplete?.(knownCount + 1, deck.cards.length); // +1 for current card
            } else {
                // Find next unseen card
                const nextUnseen = cardStates.findIndex((s, i) => i > currentIndex && s.status === 'unseen');
                if (nextUnseen !== -1) {
                    setCurrentIndex(nextUnseen);
                } else {
                    const firstUnseen = cardStates.findIndex(s => s.status === 'unseen');
                    if (firstUnseen !== -1) {
                        setCurrentIndex(firstUnseen);
                    } else {
                        setIsComplete(true);
                        onComplete?.(knownCount + 1, deck.cards.length);
                    }
                }
            }
        }
    };

    const handleRestart = () => {
        setCurrentIndex(0);
        setIsFlipped(false);
        setIsComplete(false);
        setCardStates(deck.cards.map(() => ({ isFlipped: false, status: 'unseen' })));
    };

    const handleStudyLearning = () => {
        // Filter to only learning cards and restart
        const learningIndices = cardStates.map((s, i) => s.status === 'learning' ? i : -1).filter(i => i !== -1);
        if (learningIndices.length > 0) {
            setCurrentIndex(learningIndices[0]);
            setIsFlipped(false);
            setIsComplete(false);
        }
    };

    if (isComplete) {
        const percentage = Math.round((knownCount / deck.cards.length) * 100);
        return (
            <SectionWrapper title={`${deck.name} - Complete!`}>
                <div className="text-center py-8">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Session Complete!</h3>
                    <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mb-6">
                        <div className="bg-green-100 rounded-lg p-4">
                            <div className="text-3xl font-bold text-green-700">{knownCount}</div>
                            <div className="text-sm text-green-600">Known</div>
                        </div>
                        <div className="bg-amber-100 rounded-lg p-4">
                            <div className="text-3xl font-bold text-amber-700">{learningCount}</div>
                            <div className="text-sm text-amber-600">Still Learning</div>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-6">
                        You know <span className="font-semibold text-green-700">{percentage}%</span> of the cards!
                    </p>
                    <div className="flex gap-3 justify-center flex-wrap">
                        {learningCount > 0 && (
                            <Button onClick={handleStudyLearning} variant="primary">
                                Study "Learning" Cards ({learningCount})
                            </Button>
                        )}
                        <Button onClick={handleRestart} variant="outline">
                            Start Over
                        </Button>
                        {onBack && (
                            <Button onClick={onBack} variant="ghost">
                                ← Back to Decks
                            </Button>
                        )}
                    </div>
                </div>
            </SectionWrapper>
        );
    }

    return (
        <SectionWrapper title={deck.name}>
            {/* Progress Header */}
            <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Card {currentIndex + 1} of {deck.cards.length}</span>
                    <span>
                        <span className="text-green-600">{knownCount} known</span>
                        {' • '}
                        <span className="text-amber-600">{learningCount} learning</span>
                    </span>
                </div>
                <ProgressBar progress={progress} color="bg-indigo-600" />
            </div>

            {/* Flashcard */}
            <div
                className="perspective-1000 cursor-pointer mb-6"
                onClick={handleFlip}
                style={{ perspective: '1000px' }}
            >
                <div
                    className={`relative w-full min-h-[280px] transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''
                        }`}
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                >
                    {/* Front */}
                    <div
                        className="absolute w-full h-full backface-hidden rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-8 flex flex-col justify-center items-center shadow-lg"
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <div className="text-xs uppercase tracking-wider opacity-75 mb-2">
                            {currentCard.front.subtitle || currentCard.category}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-center">
                            {currentCard.front.title}
                        </h3>
                        <div className="mt-6 text-sm opacity-75">
                            Tap to flip →
                        </div>
                    </div>

                    {/* Back */}
                    <div
                        className="absolute w-full h-full backface-hidden rounded-xl bg-white border-2 border-indigo-200 p-6 shadow-lg overflow-auto"
                        style={{
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)'
                        }}
                    >
                        {currentCard.back.pronunciation && (
                            <div className="text-sm text-indigo-600 font-medium mb-2">
                                🔊 {currentCard.back.pronunciation}
                            </div>
                        )}
                        <p className="text-gray-800 mb-4">
                            {currentCard.back.mainContent}
                        </p>
                        {currentCard.back.bulletPoints && currentCard.back.bulletPoints.length > 0 && (
                            <ul className="space-y-1 mb-4">
                                {currentCard.back.bulletPoints.map((point, i) => (
                                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                        <span className="text-indigo-500">•</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {currentCard.back.tips && (
                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
                                💡 <span className="font-medium">Tip:</span> {currentCard.back.tips}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-center">
                <Button
                    onClick={handleMarkLearning}
                    variant="outline"
                    className="flex-1 max-w-[200px] border-amber-400 text-amber-700 hover:bg-amber-50"
                >
                    Still Learning 📚
                </Button>
                <Button
                    onClick={handleMarkKnown}
                    variant="primary"
                    className="flex-1 max-w-[200px] bg-green-600 hover:bg-green-700"
                >
                    Got It! ✓
                </Button>
            </div>

            {/* Difficulty Badge */}
            <div className="mt-4 text-center">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${currentCard.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                        currentCard.difficulty === 'medium' ? 'bg-amber-100 text-amber-700' :
                            'bg-red-100 text-red-700'
                    }`}>
                    {currentCard.difficulty.charAt(0).toUpperCase() + currentCard.difficulty.slice(1)}
                </span>
            </div>
        </SectionWrapper>
    );
};

// Deck Selection Component
interface DeckSelectorProps {
    decks: FlashcardDeckType[];
    onSelectDeck: (deck: FlashcardDeckType) => void;
}

export const DeckSelector: React.FC<DeckSelectorProps> = ({ decks, onSelectDeck }) => {
    return (
        <SectionWrapper title="Flashcard Decks">
            <p className="text-gray-600 mb-6">
                Choose a deck to study. Mark cards as "Got It" or "Still Learning" to track your progress.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
                {decks.map(deck => (
                    <button
                        key={deck.id}
                        onClick={() => onSelectDeck(deck)}
                        className="text-left p-5 rounded-xl border-2 border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all bg-white"
                    >
                        <h3 className="font-bold text-lg text-gray-800 mb-1">{deck.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{deck.description}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>📇 {deck.cards.length} cards</span>
                            <span>⏱️ ~{deck.estimatedTime} min</span>
                        </div>
                    </button>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default FlashcardDeckComponent;
