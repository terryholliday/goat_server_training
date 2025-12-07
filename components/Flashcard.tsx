import React, { useState, useCallback } from 'react';
import type { Flashcard as FlashcardType, FlashcardDeck } from '../types/enhanced';
import { Button } from './Button';
import { ProgressBar } from './ProgressBar';
import { SectionWrapper } from './SectionWrapper';
import { SafeImage } from './SafeImage';

interface FlashcardProps {
    card: FlashcardType;
    isFlipped: boolean;
    onFlip: () => void;
}

const FlashcardCard: React.FC<FlashcardProps> = ({ card, isFlipped, onFlip }) => {
    return (
        <div
            className="relative w-full h-80 cursor-pointer perspective-1000"
            onClick={onFlip}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onFlip()}
            aria-label={isFlipped ? 'Click to see front of card' : 'Click to flip card'}
        >
            <div
                className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''
                    }`}
                style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
            >
                {/* Front of card */}
                <div
                    className="absolute w-full h-full bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-lg border-2 border-amber-200 p-6 flex flex-col items-center justify-center overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    {card.front.image && (
                        <div className="w-full h-40 mb-4 overflow-hidden rounded-lg bg-white/50 flex items-center justify-center">
                            <SafeImage
                                src={card.front.image}
                                alt={card.front.title}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    )}
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-amber-900 mb-2">{card.front.title}</h3>
                        {card.front.subtitle && (
                            <p className="text-amber-700 italic">{card.front.subtitle}</p>
                        )}
                    </div>
                    <p className="text-sm text-amber-600 mt-4">Tap to flip</p>
                </div>

                {/* Back of card */}
                <div
                    className="absolute w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-lg border-2 border-slate-200 p-6 overflow-y-auto"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    <div className="text-slate-800">
                        {card.back.pronunciation && (
                            <p className="text-indigo-600 font-mono text-sm mb-2">
                                🔊 {card.back.pronunciation}
                            </p>
                        )}
                        <p className="text-base leading-relaxed mb-3">{card.back.mainContent}</p>
                        {card.back.bulletPoints && card.back.bulletPoints.length > 0 && (
                            <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                                {card.back.bulletPoints.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        )}
                        {card.back.tips && (
                            <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded text-sm text-green-800">
                                💡 {card.back.tips}
                            </div>
                        )}
                    </div>
                    <p className="text-sm text-slate-500 mt-4 text-center">Tap to flip back</p>
                </div>
            </div>
        </div>
    );
};

interface FlashcardDeckProps {
    deck: FlashcardDeck;
    onComplete: () => void;
}

export const FlashcardStudy: React.FC<FlashcardDeckProps> = ({ deck, onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [knewIt, setKnewIt] = useState<boolean[]>(new Array(deck.cards.length).fill(false));
    const [showResults, setShowResults] = useState(false);
    const [shuffledCards, setShuffledCards] = useState(() => [...deck.cards]);

    const currentCard = shuffledCards[currentIndex];
    const totalCards = shuffledCards.length;

    const handleFlip = useCallback(() => {
        setIsFlipped(prev => !prev);
    }, []);

    const handleResponse = (knew: boolean) => {
        const newKnewIt = [...knewIt];
        newKnewIt[currentIndex] = knew;
        setKnewIt(newKnewIt);

        if (currentIndex + 1 < totalCards) {
            setCurrentIndex(prev => prev + 1);
            setIsFlipped(false);
        } else {
            setShowResults(true);
        }
    };

    const handleShuffle = () => {
        const shuffled = [...deck.cards].sort(() => Math.random() - 0.5);
        setShuffledCards(shuffled);
        setCurrentIndex(0);
        setIsFlipped(false);
        setKnewIt(new Array(deck.cards.length).fill(false));
        setShowResults(false);
    };

    const handleStudyMissed = () => {
        const missed = shuffledCards.filter((_, idx) => !knewIt[idx]);
        if (missed.length > 0) {
            setShuffledCards(missed);
            setCurrentIndex(0);
            setIsFlipped(false);
            setKnewIt(new Array(missed.length).fill(false));
            setShowResults(false);
        }
    };

    if (showResults) {
        const knewCount = knewIt.filter(Boolean).length;
        const percentage = Math.round((knewCount / totalCards) * 100);
        const missedCount = totalCards - knewCount;

        return (
            <SectionWrapper title={`${deck.name} - Complete!`} accent="amber">
                <div className="bg-white border rounded-lg p-6 shadow-sm space-y-6">
                    <div className={`p-4 rounded-lg ${percentage >= 80 ? 'bg-green-50' : 'bg-amber-50'}`}>
                        <p className={`text-2xl font-bold text-center ${percentage >= 80 ? 'text-green-800' : 'text-amber-800'}`}>
                            {percentage >= 80 ? '🎉 Great Job!' : '📚 Keep Practicing!'}
                        </p>
                        <p className="text-lg font-bold text-center mt-2">{percentage}% Mastered</p>
                        <ProgressBar value={knewCount} total={totalCards} color={percentage >= 80 ? 'bg-green-600' : 'bg-amber-600'} />
                        <p className="text-sm text-gray-700 text-center mt-2">
                            You knew <span className="font-semibold">{knewCount}</span> out of <span className="font-semibold">{totalCards}</span> cards.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center">
                        {missedCount > 0 && (
                            <Button onClick={handleStudyMissed} variant="primary">
                                Study {missedCount} Missed Cards
                            </Button>
                        )}
                        <Button onClick={handleShuffle} variant="outline">
                            Shuffle & Restart
                        </Button>
                        <Button onClick={onComplete} variant="outline">
                            Complete Section
                        </Button>
                    </div>
                </div>
            </SectionWrapper>
        );
    }

    return (
        <SectionWrapper title={deck.name} accent="amber">
            <div className="space-y-4">
                <ProgressBar value={currentIndex + 1} total={totalCards} color="bg-amber-600" />
                <p className="text-sm text-gray-600 text-center">
                    Card {currentIndex + 1} of {totalCards}
                </p>

                <FlashcardCard
                    card={currentCard}
                    isFlipped={isFlipped}
                    onFlip={handleFlip}
                />

                {isFlipped && (
                    <div className="flex gap-4 justify-center mt-4">
                        <Button
                            onClick={() => handleResponse(false)}
                            variant="outline"
                            className="border-rose-300 text-rose-700 hover:bg-rose-50"
                        >
                            ❌ Still Learning
                        </Button>
                        <Button
                            onClick={() => handleResponse(true)}
                            variant="primary"
                            className="bg-green-600 hover:bg-green-700"
                        >
                            ✓ Got It!
                        </Button>
                    </div>
                )}

                {!isFlipped && (
                    <p className="text-center text-gray-500 text-sm">
                        Click the card to reveal the answer
                    </p>
                )}
            </div>
        </SectionWrapper>
    );
};

export default FlashcardStudy;
