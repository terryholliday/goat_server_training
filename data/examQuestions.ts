// Expanded Exam Questions for The French Goat Final Certification
// 75+ questions across multiple formats and difficulty levels

import type { MCQQuestion, MatchingQuestion, SequencingQuestion, FillBlankQuestion, ExamQuestion } from '../types/enhanced';

// ============================================
// MCQ QUESTIONS - GENERAL KNOWLEDGE
// ============================================

export const GENERAL_KNOWLEDGE_MCQ: MCQQuestion[] = [
    {
        id: 'gk-1',
        type: 'mcq',
        difficulty: 'easy',
        category: 'General Knowledge',
        points: 1,
        question: 'Where is The French Goat located?',
        options: ['123 Main Street, Lewisburg', '290 Lafayette St, Lewisburg', '100 Washington St, Charleston', '500 Elk Ave, Charleston'],
        correctIndex: 1,
        explanation: 'The French Goat is located at 290 Lafayette St in downtown Lewisburg.'
    },
    {
        id: 'gk-2',
        type: 'mcq',
        difficulty: 'easy',
        category: 'General Knowledge',
        points: 1,
        question: 'What is the restaurant\'s dress code?',
        options: ['Formal', 'Casual', 'Smart Casual', 'Business Casual'],
        correctIndex: 2,
        explanation: 'The French Goat maintains a smart casual dress code—no shorts, tank tops, or flip-flops.'
    },
    {
        id: 'gk-3',
        type: 'mcq',
        difficulty: 'easy',
        category: 'General Knowledge',
        points: 1,
        question: 'What time does dinner service begin?',
        options: ['4:00 PM', '4:30 PM', '5:00 PM', '6:00 PM'],
        correctIndex: 2
    },
    {
        id: 'gk-4',
        type: 'mcq',
        difficulty: 'medium',
        category: 'General Knowledge',
        points: 2,
        question: 'How many guests can be seated in the main dining room?',
        options: ['40', '50', '60', '70'],
        correctIndex: 2
    },
    {
        id: 'gk-5',
        type: 'mcq',
        difficulty: 'easy',
        category: 'General Knowledge',
        points: 1,
        question: 'When was The French Goat established?',
        options: ['2010', '2015', '2018', '2020'],
        correctIndex: 1
    },
    {
        id: 'gk-6',
        type: 'mcq',
        difficulty: 'medium',
        category: 'General Knowledge',
        points: 2,
        question: 'What is the restaurant\'s social media handle?',
        options: ['@TheFrenchGoat', '@FrenchGoatWV', '@the_french_goat', '@LewisburgEats'],
        correctIndex: 2
    },
    {
        id: 'gk-7',
        type: 'mcq',
        difficulty: 'medium',
        category: 'General Knowledge',
        points: 2,
        question: 'Besides the main dining room, what additional seating areas are available?',
        options: ['Rooftop bar and lounge', 'Wine cellar and ballroom', 'Private dining room and seasonal patio', 'Only the main dining room'],
        correctIndex: 2
    }
];

// ============================================
// MCQ QUESTIONS - SERVICE
// ============================================

export const SERVICE_MCQ: MCQQuestion[] = [
    {
        id: 'svc-1',
        type: 'mcq',
        difficulty: 'easy',
        category: 'Service',
        points: 1,
        question: 'How long should a guest wait before being greeted upon arrival?',
        options: ['Immediately', 'Within 30 seconds', 'Within 1 minute', 'Within 2 minutes'],
        correctIndex: 1
    },
    {
        id: 'svc-2',
        type: 'mcq',
        difficulty: 'medium',
        category: 'Service',
        points: 2,
        question: 'When taking beverage orders, where should you position yourself relative to the guest?',
        options: ['Directly in front', 'To the left', 'To the right', 'Behind the guest'],
        correctIndex: 2
    },
    {
        id: 'svc-3',
        type: 'mcq',
        difficulty: 'medium',
        category: 'Service',
        points: 2,
        question: 'When should you perform a check-back after guests have begun their entrées?',
        options: ['Immediately after serving', '1 minute after', '2-3 minutes after', '5 minutes after'],
        correctIndex: 2
    },
    {
        id: 'svc-4',
        type: 'mcq',
        difficulty: 'medium',
        category: 'Service',
        points: 2,
        question: 'When serving food, from which direction should you approach and serve?',
        options: ['Approach right, serve right', 'Approach left, serve left', 'Approach left, serve right', 'Approach right, serve left'],
        correctIndex: 2,
        explanation: 'In fine dining, we approach from the left and serve from the right whenever possible.'
    },
    {
        id: 'svc-5',
        type: 'mcq',
        difficulty: 'easy',
        category: 'Service',
        points: 1,
        question: 'What does "Mise en Place" refer to in service preparation?',
        options: ['Final check presentation', 'Guest seating chart', 'Pre-service preparation and station stocking', 'The dessert menu'],
        correctIndex: 2
    },
    {
        id: 'svc-6',
        type: 'mcq',
        difficulty: 'medium',
        category: 'Service',
        points: 2,
        question: 'When is the appropriate time to present the check?',
        options: ['As soon as main course is cleared', 'With the dessert menu', 'Only when requested or meal has concluded', 'Five minutes after dessert'],
        correctIndex: 2
    },
    {
        id: 'svc-7',
        type: 'mcq',
        difficulty: 'hard',
        category: 'Service',
        points: 3,
        question: 'A guest\'s wine glass is half empty. What should you do?',
        options: ['Wait until they finish', 'Ask if they\'d like more', 'Refill without asking', 'Top off without overfilling'],
        correctIndex: 3,
        explanation: 'Proactive service means topping off wine before the glass is empty, without overfilling.'
    },
    {
        id: 'svc-8',
        type: 'mcq',
        difficulty: 'hard',
        category: 'Service',
        points: 3,
        question: 'A table has finished their appetizers but entrées are delayed. What is the BEST action?',
        options: ['Wait silently', 'Clear plates and apologize', 'Clear plates, check with kitchen, offer bread/drinks, update guests proactively', 'Rush the kitchen'],
        correctIndex: 2
    }
];

// ============================================
// MCQ QUESTIONS - MENU KNOWLEDGE
// ============================================

export const MENU_MCQ: MCQQuestion[] = [
    {
        id: 'menu-1',
        type: 'mcq',
        difficulty: 'medium',
        category: 'Menu',
        points: 2,
        question: 'What accompanies the Seared Hamachi?',
        options: ['Lemon parsley garlic butter', 'Harissa aioli, pickled fennel, navel orange', 'Sultana chutney', 'Sheep\'s milk feta'],
        correctIndex: 1
    },
    {
        id: 'menu-2',
        type: 'mcq',
        difficulty: 'medium',
        category: 'Menu',
        points: 2,
        question: 'What are the main components of the Duck Leg Confit?',
        options: ['Potato pave and asparagus', 'Truffle fries and aioli', 'Braised lentils, frisée, carrot-lemongrass coulis', 'Heirloom tomatoes and pecorino'],
        correctIndex: 2
    },
    {
        id: 'menu-3',
        type: 'mcq',
        difficulty: 'hard',
        category: 'Menu',
        points: 3,
        question: 'Which side is available at brunch but NOT dinner?',
        options: ['Truffle Frites', 'Fondant Potatoes', 'Arbaugh Farms Cheese Grits', 'Glazed Asparagus'],
        correctIndex: 2
    },
    {
        id: 'menu-4',
        type: 'mcq',
        difficulty: 'medium',
        category: 'Menu',
        points: 2,
        question: 'What is served with the French Toast?',
        options: ['Berries and whipped cream', 'House-made ricotta, bacon, maple syrup', 'Fried chicken', 'Caramelized bananas'],
        correctIndex: 1
    },
    {
        id: 'menu-5',
        type: 'mcq',
        difficulty: 'medium',
        category: 'Menu',
        points: 2,
        question: 'The Croque Madame is topped with what type of egg?',
        options: ['Poached', 'Scrambled', 'Fried hen egg', 'Boiled'],
        correctIndex: 2
    },
    {
        id: 'menu-6',
        type: 'mcq',
        difficulty: 'medium',
        category: 'Menu',
        points: 2,
        question: 'What sauce is served with traditional Eggs Benedict?',
        options: ['Mornay', 'Béarnaise', 'Velouté', 'Hollandaise'],
        correctIndex: 3
    },
    {
        id: 'menu-7',
        type: 'mcq',
        difficulty: 'easy',
        category: 'Menu',
        points: 1,
        question: 'What type of steak is used for Steak Frites?',
        options: ['Ribeye', 'Filet Mignon', 'Coulotte', 'New York Strip'],
        correctIndex: 2
    },
    {
        id: 'menu-8',
        type: 'mcq',
        difficulty: 'hard',
        category: 'Menu',
        points: 3,
        question: 'The Sautéed Mussels Mouclade includes which spice that gives it warmth?',
        options: ['Paprika', 'Curry', 'Cumin', 'Turmeric'],
        correctIndex: 1
    },
    {
        id: 'menu-9',
        type: 'mcq',
        difficulty: 'hard',
        category: 'Menu',
        points: 3,
        question: 'Where does The French Goat source its chicken from?',
        options: ['Tyson Farms', 'Perdue', 'Joyce Farms', 'Bell & Evans'],
        correctIndex: 2,
        explanation: 'We exclusively use Joyce Farms heritage breed chickens, raised without antibiotics.'
    },
    {
        id: 'menu-10',
        type: 'mcq',
        difficulty: 'hard',
        category: 'Menu',
        points: 3,
        question: 'Which local farm provides our stone-ground grits?',
        options: ['Smith Creek Farm', 'Arbaugh Farms', 'Mountain Valley', 'Green Valley'],
        correctIndex: 1
    }
];

// ============================================
// MCQ QUESTIONS - CULINARY TERMS
// ============================================

export const CULINARY_TERMS_MCQ: MCQQuestion[] = [
    {
        id: 'term-1',
        type: 'mcq',
        difficulty: 'medium',
        category: 'Culinary Terms',
        points: 2,
        question: 'What is "Beurre Blanc"?',
        options: ['A red wine reduction', 'A seasoned butter sauce with white wine and shallots', 'A sweet pastry cream', 'A clarified broth'],
        correctIndex: 1
    },
    {
        id: 'term-2',
        type: 'mcq',
        difficulty: 'easy',
        category: 'Culinary Terms',
        points: 1,
        question: 'What is "Chèvre"?',
        options: ['Cow cheese', 'Sheep cheese', 'Cured sausage', 'Goat cheese'],
        correctIndex: 3
    },
    {
        id: 'term-3',
        type: 'mcq',
        difficulty: 'medium',
        category: 'Culinary Terms',
        points: 2,
        question: 'The term "Confit" describes cooking in what?',
        options: ['Water or stock', 'Fat or oil', 'Wine or vinegar', 'Direct heat'],
        correctIndex: 1
    },
    {
        id: 'term-4',
        type: 'mcq',
        difficulty: 'easy',
        category: 'Culinary Terms',
        points: 1,
        question: 'What are "Frites"?',
        options: ['A green bean', 'Fresh herbs', 'French fries', 'A mushroom'],
        correctIndex: 2
    },
    {
        id: 'term-5',
        type: 'mcq',
        difficulty: 'hard',
        category: 'Culinary Terms',
        points: 3,
        question: 'What is "Foie Gras"?',
        options: ['French cheese', 'Liver of fattened duck or goose', 'Beef tenderloin', 'Seafood stew'],
        correctIndex: 1
    },
    {
        id: 'term-6',
        type: 'mcq',
        difficulty: 'medium',
        category: 'Culinary Terms',
        points: 2,
        question: 'The knife cut "Julienne" results in what shape?',
        options: ['Small cubes', 'Thin rounds', 'Long thin strips', 'Large wedges'],
        correctIndex: 2
    },
    {
        id: 'term-7',
        type: 'mcq',
        difficulty: 'medium',
        category: 'Culinary Terms',
        points: 2,
        question: 'What is "Crème Anglaise"?',
        options: ['Thick baking cream', 'Light pouring custard', 'Savory herb sauce', 'Sour cream'],
        correctIndex: 1
    },
    {
        id: 'term-8',
        type: 'mcq',
        difficulty: 'hard',
        category: 'Culinary Terms',
        points: 3,
        question: 'What is a "Soubise"?',
        options: ['A beef reduction', 'An onion-based sauce or puree', 'A garnish of mushrooms', 'A type of bread'],
        correctIndex: 1
    }
];

// ============================================
// MCQ QUESTIONS - WINE
// ============================================

export const WINE_MCQ: MCQQuestion[] = [
    {
        id: 'wine-1',
        type: 'mcq',
        difficulty: 'medium',
        category: 'Wine',
        points: 2,
        question: 'Where does Montand Brut Rosé come from?',
        options: ['Bordeaux', 'Cotes du Jura', 'Napa Valley', 'Loire Valley'],
        correctIndex: 1
    },
    {
        id: 'wine-2',
        type: 'mcq',
        difficulty: 'medium',
        category: 'Wine',
        points: 2,
        question: 'What does "Blanc de Blancs" mean?',
        options: ['White from red grapes', 'White from white grapes', 'Red from white grapes', 'Red from red grapes'],
        correctIndex: 1
    },
    {
        id: 'wine-3',
        type: 'mcq',
        difficulty: 'easy',
        category: 'Wine',
        points: 1,
        question: 'Which region is famous for the Fleurs de Prairie rosé style?',
        options: ['Bordeaux', 'Provence', 'Champagne', 'Marlborough'],
        correctIndex: 1
    },
    {
        id: 'wine-4',
        type: 'mcq',
        difficulty: 'medium',
        category: 'Wine',
        points: 2,
        question: 'DAOU Vineyards is located in which California region?',
        options: ['Napa Valley', 'Sonoma Coast', 'Paso Robles', 'Santa Barbara'],
        correctIndex: 2
    },
    {
        id: 'wine-5',
        type: 'mcq',
        difficulty: 'easy',
        category: 'Wine',
        points: 1,
        question: 'Belle Glos is known for what type of wine?',
        options: ['Chardonnay', 'Cabernet Sauvignon', 'Pinot Noir', 'Sauvignon Blanc'],
        correctIndex: 2
    },
    {
        id: 'wine-6',
        type: 'mcq',
        difficulty: 'easy',
        category: 'Wine',
        points: 1,
        question: 'Which country produces Catena Malbec?',
        options: ['France', 'Spain', 'Argentina', 'Chile'],
        correctIndex: 2
    },
    {
        id: 'wine-7',
        type: 'mcq',
        difficulty: 'hard',
        category: 'Wine',
        points: 3,
        question: 'Ken Wright Cellars produces Pinot Noir from which state?',
        options: ['California', 'Washington', 'Oregon', 'New York'],
        correctIndex: 2
    },
    {
        id: 'wine-8',
        type: 'mcq',
        difficulty: 'hard',
        category: 'Wine',
        points: 3,
        question: 'What would you pair with oysters from our wine list?',
        options: ['Catena Malbec', 'Rubus Blanc de Blancs', 'Belle Glos Pinot Noir', 'DAOU Cabernet'],
        correctIndex: 1,
        explanation: 'Sparkling wine with bright acidity complements briny oysters perfectly.'
    },
    {
        id: 'wine-9',
        type: 'mcq',
        difficulty: 'hard',
        category: 'Wine',
        points: 3,
        question: 'A guest orders the Duck Confit. Which wine would be the BEST recommendation?',
        options: ['Dom. Paul Buisse Sauvignon Blanc', 'Louis Jadot Chorey-Les-Beaune', 'Montand Brut Rosé', 'DAOU Chardonnay'],
        correctIndex: 1,
        explanation: 'Burgundy Pinot Noir is a classic pairing with duck, offering earthy notes that complement the rich meat.'
    }
];

// ============================================
// MCQ QUESTIONS - ALLERGY & SAFETY
// ============================================

export const ALLERGY_MCQ: MCQQuestion[] = [
    {
        id: 'allergy-1',
        type: 'mcq',
        difficulty: 'hard',
        category: 'Allergies',
        points: 3,
        question: 'A guest has a severe gluten allergy. Which dish should you recommend?',
        options: ['French Goat Burger on bun', 'French Onion Soup', 'Duck Leg Confit', 'Croque Madame'],
        correctIndex: 2,
        explanation: 'The Duck Leg Confit is naturally gluten-free, while the other options contain gluten.'
    },
    {
        id: 'allergy-2',
        type: 'mcq',
        difficulty: 'hard',
        category: 'Allergies',
        points: 3,
        question: 'Which appetizer contains shellfish?',
        options: ['Fig & Chèvre Flatbread', 'Roasted Red Pepper Dip', 'Sautéed Mussels Mouclade', 'Spring Greens Salad'],
        correctIndex: 2
    },
    {
        id: 'allergy-3',
        type: 'mcq',
        difficulty: 'hard',
        category: 'Allergies',
        points: 3,
        question: 'A guest asks for a nut-free appetizer. Which should you NOT recommend?',
        options: ['Oysters on the Halfshell', 'Seared Hamachi', 'Roasted Red Pepper & Walnut Dip', 'Escargot Traditional'],
        correctIndex: 2
    },
    {
        id: 'allergy-4',
        type: 'mcq',
        difficulty: 'expert',
        category: 'Allergies',
        points: 4,
        question: 'A guest with celiac disease wants the burger. What is the correct modification?',
        options: ['Serve as-is', 'Remove the bun only', 'Offer lettuce wrap and verify fries preparation', 'Tell them it\'s not possible'],
        correctIndex: 2
    },
    {
        id: 'allergy-5',
        type: 'mcq',
        difficulty: 'expert',
        category: 'Allergies',
        points: 4,
        question: 'When a guest mentions a severe allergy, what is your FIRST action?',
        options: ['Tell them what to avoid', 'Write it down and inform the kitchen', 'Recommend safe items immediately', 'Get a manager'],
        correctIndex: 1,
        explanation: 'Always document and communicate with the kitchen first to ensure proper handling.'
    }
];

// ============================================
// MATCHING QUESTIONS
// ============================================

export const MATCHING_QUESTIONS: MatchingQuestion[] = [
    {
        id: 'match-1',
        type: 'matching',
        difficulty: 'medium',
        category: 'Culinary Terms',
        points: 5,
        instruction: 'Match each French culinary term to its correct definition:',
        leftItems: [
            { id: 'l1', text: 'Confit' },
            { id: 'l2', text: 'Julienne' },
            { id: 'l3', text: 'Chèvre' },
            { id: 'l4', text: 'Mirepoix' },
            { id: 'l5', text: 'Beurre Blanc' }
        ],
        rightItems: [
            { id: 'r1', text: 'Goat cheese' },
            { id: 'r2', text: 'Slow-cooked in fat' },
            { id: 'r3', text: 'White butter sauce' },
            { id: 'r4', text: 'Onion, carrot, celery base' },
            { id: 'r5', text: 'Long thin strips (matchsticks)' }
        ],
        correctPairs: [
            { left: 'l1', right: 'r2' },
            { left: 'l2', right: 'r5' },
            { left: 'l3', right: 'r1' },
            { left: 'l4', right: 'r4' },
            { left: 'l5', right: 'r3' }
        ]
    },
    {
        id: 'match-2',
        type: 'matching',
        difficulty: 'hard',
        category: 'Wine Pairing',
        points: 6,
        instruction: 'Match each dish to its ideal wine pairing:',
        leftItems: [
            { id: 'l1', text: 'Oysters on the Halfshell' },
            { id: 'l2', text: 'Duck Leg Confit' },
            { id: 'l3', text: 'Steak Frites' },
            { id: 'l4', text: 'Pan Seared Salmon' }
        ],
        rightItems: [
            { id: 'r1', text: 'Louis Jadot Chardonnay' },
            { id: 'r2', text: 'Rubus Blanc de Blancs' },
            { id: 'r3', text: 'Louis Jadot Chorey-Les-Beaune' },
            { id: 'r4', text: 'DAOU Cabernet Sauvignon' }
        ],
        correctPairs: [
            { left: 'l1', right: 'r2' },
            { left: 'l2', right: 'r3' },
            { left: 'l3', right: 'r4' },
            { left: 'l4', right: 'r1' }
        ]
    }
];

// ============================================
// SEQUENCING QUESTIONS
// ============================================

export const SEQUENCING_QUESTIONS: SequencingQuestion[] = [
    {
        id: 'seq-1',
        type: 'sequencing',
        difficulty: 'medium',
        category: 'Service',
        points: 5,
        instruction: 'Arrange the steps of service in the correct order:',
        items: [
            { id: 'a', text: 'Presenting menus & taking beverage orders' },
            { id: 'b', text: 'Pre-service preparation (Mise en Place)' },
            { id: 'c', text: 'Greeting and seating guests' },
            { id: 'd', text: 'Check-back and guest satisfaction' },
            { id: 'e', text: 'Taking appetizer and entrée orders' }
        ],
        correctOrder: ['b', 'c', 'a', 'e', 'd']
    },
    {
        id: 'seq-2',
        type: 'sequencing',
        difficulty: 'hard',
        category: 'Wine Service',
        points: 6,
        instruction: 'Arrange the proper wine service steps in order:',
        items: [
            { id: 'a', text: 'Pour a small taste for the host' },
            { id: 'b', text: 'Present the bottle label to the host' },
            { id: 'c', text: 'Cut the foil below the lip and remove cork' },
            { id: 'd', text: 'Pour for other guests, then fill host\'s glass' },
            { id: 'e', text: 'Wait for host approval before continuing' }
        ],
        correctOrder: ['b', 'c', 'a', 'e', 'd']
    }
];

// ============================================
// FILL-IN-THE-BLANK QUESTIONS
// ============================================

export const FILL_BLANK_QUESTIONS: FillBlankQuestion[] = [
    {
        id: 'fill-1',
        type: 'fill-blank',
        difficulty: 'medium',
        category: 'General Knowledge',
        points: 2,
        sentence: 'The French Goat is located at {{blank}} Lafayette St in downtown Lewisburg.',
        blanks: [
            { id: 'b1', correctAnswers: ['290', 'two-ninety'], caseSensitive: false }
        ]
    },
    {
        id: 'fill-2',
        type: 'fill-blank',
        difficulty: 'medium',
        category: 'Service',
        points: 2,
        sentence: 'Guests should be greeted within {{blank}} seconds of arrival.',
        blanks: [
            { id: 'b1', correctAnswers: ['30', 'thirty'], caseSensitive: false }
        ]
    },
    {
        id: 'fill-3',
        type: 'fill-blank',
        difficulty: 'hard',
        category: 'Culinary Terms',
        points: 3,
        sentence: 'The French term for goat cheese is {{blank}}.',
        blanks: [
            { id: 'b1', correctAnswers: ['chèvre', 'chevre', 'Chèvre', 'Chevre'], caseSensitive: false }
        ]
    }
];

// ============================================
// COMBINE ALL QUESTIONS
// ============================================

export const ALL_EXAM_QUESTIONS: ExamQuestion[] = [
    ...GENERAL_KNOWLEDGE_MCQ,
    ...SERVICE_MCQ,
    ...MENU_MCQ,
    ...CULINARY_TERMS_MCQ,
    ...WINE_MCQ,
    ...ALLERGY_MCQ,
    ...MATCHING_QUESTIONS,
    ...SEQUENCING_QUESTIONS,
    ...FILL_BLANK_QUESTIONS
];

// Shuffle function for exam generation
const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

// Generate exam with specified number of questions
export const generateExam = (questionCount: number = 75): ExamQuestion[] => {
    const shuffled = shuffleArray(ALL_EXAM_QUESTIONS);
    return shuffled.slice(0, Math.min(questionCount, shuffled.length));
};

// Get questions by category
export const getQuestionsByCategory = (category: string): ExamQuestion[] =>
    ALL_EXAM_QUESTIONS.filter(q => q.category === category);

// Get questions by difficulty
export const getQuestionsByDifficulty = (difficulty: ExamQuestion['difficulty']): ExamQuestion[] =>
    ALL_EXAM_QUESTIONS.filter(q => q.difficulty === difficulty);

// Calculate total possible points
export const getTotalPossiblePoints = (questions: ExamQuestion[]): number =>
    questions.reduce((sum, q) => sum + q.points, 0);
