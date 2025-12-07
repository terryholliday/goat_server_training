import React, { useState } from 'react';
import { FlashcardStudy } from './Flashcard';
import { SectionWrapper } from './SectionWrapper';
import { Button } from './Button';
import { ProgressBar } from './ProgressBar';
import { ENHANCED_MENU_ITEMS } from '../data/menuItems';
import type { Flashcard, FlashcardDeck, EnhancedMenuItem } from '../types/enhanced';
import { AVAILABLE_IMAGES } from '../constants';

interface MenuMasterySectionProps {
    onComplete: () => void;
}

type ViewMode = 'menu' | 'learn' | 'flashcards' | 'practice';

const BASE_IMG_PATH = "/";

const GENERATED_IMAGES = [
    'tuna-nicoise', 'creme-brulee', 'french-goat-burger', 'steak-frites',
    'escargot-traditional', 'french-onion-soup', 'duck-leg-confit', 'chocolate-mousse'
];

// Convert menu items to flashcards
const createMenuFlashcards = (): FlashcardDeck => {
    // Filter for food-appropriate images (excluding wine/drinks/storefront if possible, or just use all)
    // For simplicity, we use the food images we identified: food1-9
    const foodImages = AVAILABLE_IMAGES.filter(img => img.startsWith('food'));

    const cards: Flashcard[] = ENHANCED_MENU_ITEMS.map((item, index) => ({
        id: item.id,
        category: 'menu',
        front: {
            title: item.name,
            subtitle: `$${item.price} • ${item.category}`,
            // Prioritize generated specific image, else deterministically assign based on index
            image: GENERATED_IMAGES.includes(item.id)
                ? `${BASE_IMG_PATH}${item.id}.png`
                : `${BASE_IMG_PATH}${foodImages[index % foodImages.length]}`
        },
        back: {
            mainContent: item.description,
            pronunciation: item.pronunciation,
            bulletPoints: [
                `Allergens: ${item.allergens.length > 0 ? item.allergens.join(', ') : 'None'}`,
                `Key ingredients: ${item.ingredients.slice(0, 4).join(', ')}`,
                ...(item.isVegetarian ? ['✓ Vegetarian'] : []),
                ...(item.isGlutenFree ? ['✓ Gluten-Free'] : [])
            ],
            tips: item.upsellPairings.length > 0
                ? `Upsell: ${item.upsellPairings[0].suggestedScript.slice(0, 80)}...`
                : undefined
        },
        difficulty: 'medium',
        tags: [item.category, ...(item.allergens || [])]
    }));

    return {
        id: 'menu-deck',
        name: 'Menu Mastery Flashcards',
        description: 'Study all menu items, ingredients, allergens, and upsell opportunities',
        cards,
        estimatedTime: 20
    };
};

// Group items by category
const groupByCategory = (items: EnhancedMenuItem[]) => {
    const groups: Record<string, EnhancedMenuItem[]> = {};
    items.forEach(item => {
        const cat = item.category;
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push(item);
    });
    return groups;
};

const CategoryLabel: Record<string, string> = {
    'petite-plate': '🥂 Petite Plates',
    'soup': '🥣 Soups',
    'salad': '🥗 Salads',
    'main': '🍽️ Main Courses',
    'brunch': '🍳 Brunch',
    'dessert': '🍮 Desserts',
    'side': '🥔 Sides',
    'beverage': '🍷 Beverages'
};

export const MenuMasterySection: React.FC<MenuMasterySectionProps> = ({ onComplete }) => {
    const [viewMode, setViewMode] = useState<ViewMode>('menu');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [flashcardsCompleted, setFlashcardsCompleted] = useState(false);
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    const menuDeck = createMenuFlashcards();
    const groupedItems = groupByCategory(ENHANCED_MENU_ITEMS);
    const categories = Object.keys(groupedItems);

    const handleFlashcardsComplete = () => {
        setFlashcardsCompleted(true);
        setViewMode('menu');
    };

    // Main menu view
    if (viewMode === 'menu') {
        return (
            <SectionWrapper title="Menu & Culinary Mastery" accent="purple">
                <div className="space-y-6">
                    {/* Progress Indicator */}
                    <div className="bg-white border rounded-lg p-4 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${flashcardsCompleted ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                                }`}>
                                {flashcardsCompleted ? '✓' : '1'}
                            </div>
                            <span className={flashcardsCompleted ? 'text-green-700' : 'text-gray-700'}>
                                Complete Flashcard Study
                            </span>
                        </div>
                    </div>

                    {/* Learning Modes */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <button
                            onClick={() => setViewMode('learn')}
                            className="bg-white border rounded-lg p-5 shadow-sm hover:border-purple-400 hover:shadow-md transition-all text-left"
                        >
                            <div className="text-2xl mb-2">📖</div>
                            <h3 className="font-semibold text-gray-800 mb-1">Learn Menu Items</h3>
                            <p className="text-sm text-gray-600">
                                Browse the full menu with details, allergens, chef stories, and upsell suggestions.
                            </p>
                        </button>

                        <button
                            onClick={() => setViewMode('flashcards')}
                            className="bg-white border rounded-lg p-5 shadow-sm hover:border-purple-400 hover:shadow-md transition-all text-left"
                        >
                            <div className="text-2xl mb-2">🎴</div>
                            <h3 className="font-semibold text-gray-800 mb-1">Flashcard Study</h3>
                            <p className="text-sm text-gray-600">
                                Test your recall of {ENHANCED_MENU_ITEMS.length} menu items with interactive flashcards.
                            </p>
                            {flashcardsCompleted && (
                                <span className="inline-block mt-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                    ✓ Completed
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <h3 className="font-semibold text-purple-900 mb-3">📊 Menu at a Glance</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                            <div className="bg-white rounded p-2 text-center">
                                <div className="text-2xl font-bold text-purple-700">{ENHANCED_MENU_ITEMS.length}</div>
                                <div className="text-gray-600">Total Items</div>
                            </div>
                            <div className="bg-white rounded p-2 text-center">
                                <div className="text-2xl font-bold text-green-700">
                                    {ENHANCED_MENU_ITEMS.filter(i => i.isVegetarian).length}
                                </div>
                                <div className="text-gray-600">Vegetarian</div>
                            </div>
                            <div className="bg-white rounded p-2 text-center">
                                <div className="text-2xl font-bold text-blue-700">
                                    {ENHANCED_MENU_ITEMS.filter(i => i.isGlutenFree).length}
                                </div>
                                <div className="text-gray-600">Gluten-Free</div>
                            </div>
                            <div className="bg-white rounded p-2 text-center">
                                <div className="text-2xl font-bold text-amber-700">{categories.length}</div>
                                <div className="text-gray-600">Categories</div>
                            </div>
                        </div>
                    </div>

                    {/* Complete Button */}
                    {/* Complete Button */}
                    <div className="text-center pt-8 border-t border-purple-100 flex flex-col gap-3 items-center">
                        {flashcardsCompleted && (
                            <p className="text-green-600 font-medium animate-pulse">
                                Flashcards Mastered!
                            </p>
                        )}
                        <Button onClick={onComplete} variant={flashcardsCompleted ? 'primary' : 'outline'}>
                            {flashcardsCompleted ? 'Complete Section ✓' : 'Mark Section Completed'}
                        </Button>
                        {!flashcardsCompleted && (
                            <p className="text-xs text-gray-400 max-w-xs mx-auto">
                                You can mark this as completed if you've studied the menu extensively offline.
                            </p>
                        )}
                    </div>
                </div>
            </SectionWrapper>
        );
    }

    // Learn mode - browse menu
    if (viewMode === 'learn') {
        return (
            <div>
                <Button variant="outline" onClick={() => setViewMode('menu')} className="mb-4">
                    ← Back to Menu Mastery
                </Button>
                <SectionWrapper title="Full Menu Reference" accent="purple">
                    <div className="space-y-6">
                        {categories.map(category => (
                            <div key={category} className="bg-white border rounded-lg overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                                    className="w-full px-4 py-3 flex items-center justify-between bg-purple-50 hover:bg-purple-100 transition-colors"
                                >
                                    <span className="font-semibold text-purple-900">
                                        {CategoryLabel[category] || category} ({groupedItems[category].length})
                                    </span>
                                    <span className="text-purple-600">
                                        {selectedCategory === category ? '▼' : '▶'}
                                    </span>
                                </button>

                                {selectedCategory === category && (
                                    <div className="divide-y">
                                        {groupedItems[category].map(item => (
                                            <div key={item.id} className="p-4">
                                                <button
                                                    onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                                                    className="w-full text-left"
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h4 className="font-semibold text-gray-800">{item.name}</h4>
                                                            {item.pronunciation && (
                                                                <p className="text-xs text-indigo-600 font-mono">🔊 {item.pronunciation}</p>
                                                            )}
                                                        </div>
                                                        <span className="text-purple-700 font-bold">${item.price}</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                                </button>

                                                {expandedItem === item.id && (
                                                    <div className="mt-4 pt-4 border-t space-y-3 text-sm">
                                                        <div>
                                                            <span className="font-medium text-gray-700">Ingredients:</span>
                                                            <p className="text-gray-600">{item.ingredients.join(', ')}</p>
                                                        </div>

                                                        {item.allergens.length > 0 && (
                                                            <div className="bg-rose-50 border border-rose-200 rounded p-2">
                                                                <span className="font-medium text-rose-800">⚠️ Allergens:</span>
                                                                <p className="text-rose-700">{item.allergens.join(', ')}</p>
                                                            </div>
                                                        )}

                                                        {item.substitutions.length > 0 && (
                                                            <div className="bg-amber-50 border border-amber-200 rounded p-2">
                                                                <span className="font-medium text-amber-800">🔄 Substitutions:</span>
                                                                {item.substitutions.map((sub, idx) => (
                                                                    <p key={idx} className="text-amber-700">
                                                                        For {sub.forAllergen}: {sub.substitute}
                                                                    </p>
                                                                ))}
                                                            </div>
                                                        )}

                                                        <div className="bg-blue-50 border border-blue-200 rounded p-2">
                                                            <span className="font-medium text-blue-800">👨‍🍳 Chef's Story:</span>
                                                            <p className="text-blue-700">{item.chefStory}</p>
                                                        </div>

                                                        {item.upsellPairings.length > 0 && (
                                                            <div className="bg-green-50 border border-green-200 rounded p-2">
                                                                <span className="font-medium text-green-800">💰 Upsell Script:</span>
                                                                <p className="text-green-700 italic">
                                                                    "{item.upsellPairings[0].suggestedScript}"
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </SectionWrapper>
            </div>
        );
    }

    // Flashcard mode
    if (viewMode === 'flashcards') {
        return (
            <div>
                <Button variant="outline" onClick={() => setViewMode('menu')} className="mb-4">
                    ← Back to Menu Mastery
                </Button>
                <FlashcardStudy deck={menuDeck} onComplete={handleFlashcardsComplete} />
            </div>
        );
    }

    return null;
};

export default MenuMasterySection;
