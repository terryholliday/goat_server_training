// Enhanced TypeScript types for The French Goat Training System

// ============================================
// MENU & CULINARY TYPES
// ============================================

export interface Substitution {
    forAllergen: string;
    substitute: string;
    notes?: string;
}

export interface UpsellPairing {
    type: 'wine' | 'appetizer' | 'side' | 'dessert' | 'drink';
    itemName: string;
    suggestedScript: string;
}

export interface EnhancedMenuItem {
    id: string;
    name: string;
    category: 'petite-plate' | 'salad' | 'soup' | 'main' | 'dessert' | 'side' | 'brunch' | 'beverage';
    subcategory?: string;
    price: number;
    description: string;
    ingredients: string[];
    allergens: ('gluten' | 'dairy' | 'shellfish' | 'nuts' | 'eggs' | 'soy' | 'fish')[];
    substitutions: Substitution[];
    chefStory: string;
    pronunciation?: string;
    pronunciationAudio?: string;
    upsellPairings: UpsellPairing[];
    flavorNotes: string[];
    preparationNotes?: string;
    isVegetarian?: boolean;
    isVegan?: boolean;
    isGlutenFree?: boolean;
    serviceTime?: 'dinner' | 'brunch' | 'both';
}

// ============================================
// WINE & BEVERAGE TYPES
// ============================================

export interface EnhancedWine {
    id: string;
    producer: string;
    name: string;
    appellation: string;
    region: string;
    country: string;
    grape: string;
    vintage?: number;
    priceGlass?: number;
    priceBottle: number;
    tastingNotes: string[];
    aromaNotes: string[];
    palateNotes: string;
    pairingLogic: string;
    suggestedDishes: string[];
    pronunciation: string;
    serviceTemperature: string;
    glassType: string;
    decantRequired: boolean;
    guestPersonaMatch: ('adventurous' | 'classic' | 'budget-conscious' | 'celebration' | 'wine-novice')[];
    sellingPoints: string[];
}

export interface BottleServiceStep {
    step: number;
    action: string;
    details: string;
    commonMistakes?: string[];
}

// ============================================
// SCENARIO & SIMULATION TYPES
// ============================================

export interface Choice {
    id: string;
    text: string;
    quality: 'best' | 'acceptable' | 'poor';
    points: number;
    feedback: string;
    nextStepId?: string;
}

export interface ScenarioStep {
    id: string;
    situation: string;
    guestDialogue?: string;
    visualCue?: string;
    choices: Choice[];
    timeLimit?: number; // seconds
}

export interface ScoringCriteria {
    maxPoints: number;
    passingPoints: number;
    excellentThreshold: number;
    categories: {
        name: string;
        weight: number;
    }[];
}

export interface Scenario {
    id: string;
    title: string;
    category: 'complaint' | 'allergy' | 'vip' | 'timing' | 'mistake' | 'pressure' | 'upsell';
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    context: string;
    guestProfile?: string;
    tableNumber?: number;
    steps: ScenarioStep[];
    scoring: ScoringCriteria;
    learningObjectives: string[];
    debriefNotes: string;
}

// ============================================
// QUIZ & EXAM TYPES
// ============================================

export type QuestionType = 'mcq' | 'matching' | 'sequencing' | 'fill-blank' | 'short-answer' | 'drag-drop';

export interface BaseQuestion {
    id: string;
    type: QuestionType;
    difficulty: 'easy' | 'medium' | 'hard' | 'expert';
    category: string;
    points: number;
    timeLimit?: number;
}

export interface MCQQuestion extends BaseQuestion {
    type: 'mcq';
    question: string;
    options: string[];
    correctIndex: number;
    explanation?: string;
}

export interface MatchingQuestion extends BaseQuestion {
    type: 'matching';
    instruction: string;
    leftItems: { id: string; text: string }[];
    rightItems: { id: string; text: string }[];
    correctPairs: { left: string; right: string }[];
}

export interface SequencingQuestion extends BaseQuestion {
    type: 'sequencing';
    instruction: string;
    items: { id: string; text: string }[];
    correctOrder: string[];
}

export interface FillBlankQuestion extends BaseQuestion {
    type: 'fill-blank';
    sentence: string; // Use {{blank}} for blank positions
    blanks: {
        id: string;
        correctAnswers: string[]; // Multiple acceptable answers
        caseSensitive: boolean;
    }[];
}

export interface ShortAnswerQuestion extends BaseQuestion {
    type: 'short-answer';
    question: string;
    sampleAnswer: string;
    keyPoints: string[];
    minWords?: number;
}

export interface DragDropQuestion extends BaseQuestion {
    type: 'drag-drop';
    instruction: string;
    items: { id: string; text: string; category?: string }[];
    dropZones: { id: string; label: string; acceptsItems: string[] }[];
}

export type ExamQuestion =
    | MCQQuestion
    | MatchingQuestion
    | SequencingQuestion
    | FillBlankQuestion
    | ShortAnswerQuestion
    | DragDropQuestion;

export interface ExamVersion {
    id: string;
    name: string;
    questionIds: string[];
    passingPercentage: number;
    timeLimit?: number; // minutes
}

// ============================================
// FLASHCARD TYPES
// ============================================

export interface Flashcard {
    id: string;
    category: 'menu' | 'wine' | 'term' | 'service' | 'allergy';
    front: {
        title: string;
        subtitle?: string;
        image?: string;
    };
    back: {
        mainContent: string;
        pronunciation?: string;
        bulletPoints?: string[];
        tips?: string;
    };
    difficulty: 'easy' | 'medium' | 'hard';
    tags: string[];
}

export interface FlashcardDeck {
    id: string;
    name: string;
    description: string;
    cards: Flashcard[];
    estimatedTime: number; // minutes
}

// ============================================
// SERVICE SEQUENCE TYPES
// ============================================

export interface ServiceStep {
    id: string;
    stepNumber: number;
    title: string;
    description: string;
    keyActions: string[];
    timing?: string;
    commonMistakes: string[];
    proTips: string[];
    visualCue?: string;
}

export interface ServiceChallenge {
    id: string;
    title: string;
    type: 'next-action' | 'mistake-identification' | 'timing';
    scenario: string;
    currentStep?: number;
    options: {
        id: string;
        text: string;
        isCorrect: boolean;
        feedback: string;
    }[];
}

// ============================================
// ALLERGY SIMULATION TYPES
// ============================================

export interface AllergyScenario {
    id: string;
    guestStatement: string;
    allergens: string[];
    dietaryRestriction?: string;
    safeMenuItems: string[];
    unsafeMenuItems: string[];
    substitutionOptions: {
        originalItem: string;
        safeAlternative: string;
        modification: string;
    }[];
    communicationScript: string;
}

// ============================================
// ROLE PLAY TYPES
// ============================================

export interface GuestPersona {
    id: string;
    name: string;
    description: string;
    preferences: string[];
    budget: 'budget' | 'moderate' | 'splurge';
    wineKnowledge: 'novice' | 'casual' | 'enthusiast' | 'expert';
    diningStyle: 'quick' | 'leisurely' | 'celebration';
    avatar?: string;
}

export interface RolePlayPrompt {
    id: string;
    type: 'sell-dish' | 'wine-recommendation' | 'handle-objection' | 'create-experience';
    title: string;
    context: string;
    guestPersona?: GuestPersona;
    targetItem?: string;
    objectives: string[];
    sampleScript: string;
    keyPhrases: string[];
    avoidPhrases: string[];
    successCriteria: string[];
}

// ============================================
// PROGRESS TRACKING TYPES
// ============================================

export interface ModuleProgress {
    moduleId: string;
    status: 'locked' | 'available' | 'in-progress' | 'completed';
    completedSections: string[];
    quizScores: { quizId: string; score: number; attempts: number; passed: boolean }[];
    lastAccessed?: Date;
    timeSpent: number; // minutes
}

export interface UserProgress {
    odId: string;
    name: string;
    startDate: Date;
    modules: ModuleProgress[];
    scenariosCompleted: string[];
    flashcardsStudied: string[];
    examAttempts: { examId: string; score: number; passed: boolean; date: Date }[];
    certificationStatus: 'not-started' | 'in-progress' | 'certified';
    certificationDate?: Date;
}
