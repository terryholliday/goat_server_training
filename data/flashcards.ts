// Flashcard Data for The French Goat Training System
import type { Flashcard, FlashcardDeck } from '../types/enhanced';
import { AVAILABLE_IMAGES } from '../constants';

const BASE_IMG_PATH = "/";

// Helper to get image path
const getImg = (name: string) => `${BASE_IMG_PATH}${name}`;

// MENU ITEM FLASHCARDS
export const MENU_FLASHCARDS: Flashcard[] = [
    {
        id: 'fc-oysters', category: 'menu',
        front: { title: 'Oysters on the Halfshell', subtitle: '$19 • Petite Plate' },
        back: {
            mainContent: 'Half dozen seasonal oysters from Chesapeake Bay with mignonette and cocktail sauce.',
            pronunciation: 'OY-sters on the HALF-shell',
            bulletPoints: ['Allergen: Shellfish', 'Pair: Rubus Blanc de Blancs or Montand Brut Rosé'],
            tips: 'Emphasize freshness and minimal adornment.'
        },
        difficulty: 'easy', tags: ['seafood', 'starter']
    },
    {
        id: 'fc-pepper-dip', category: 'menu',
        front: { title: 'Roasted Red Pepper & Walnut Dip', subtitle: '$16 • Vegetarian' },
        back: {
            mainContent: 'Roasted red pepper dip with toasted walnuts and sheep\'s milk feta, served with local breads.',
            bulletPoints: ['Allergens: Dairy, Nuts, Gluten', 'GF crackers available', 'Pair: Fleurs de Prairie Rosé'],
            tips: 'Inspired by muhammara.'
        },
        difficulty: 'easy', tags: ['vegetarian', 'starter']
    },
    {
        id: 'fc-fig-flatbread', category: 'menu',
        front: { title: 'Fig & Chèvre Flatbread', subtitle: '$16 • Vegetarian' },
        back: {
            mainContent: 'Naan with walnut butter, red onion marmalade, kalamata, pecorino, fig gastrique.',
            pronunciation: 'SHEV-ruh (chèvre)',
            bulletPoints: ['Allergens: Gluten, Dairy, Nuts', 'Pair: DAOU Chardonnay']
        },
        difficulty: 'medium', tags: ['vegetarian', 'starter']
    },
    {
        id: 'fc-hamachi', category: 'menu',
        front: { title: 'Seared Hamachi', subtitle: '$22 • Petite Plate' },
        back: {
            mainContent: 'Sashimi-grade yellowtail with harissa aioli, pickled fennel, orange, smoked chili oil.',
            pronunciation: 'hah-MAH-chee',
            bulletPoints: ['Allergens: Fish, Eggs', 'Pair: Dom. Paul Buisse Sauvignon Blanc']
        },
        difficulty: 'medium', tags: ['seafood', 'dinner-only']
    },
    {
        id: 'fc-mussels', category: 'menu',
        front: { title: 'Sautéed Mussels Mouclade', subtitle: '$16' },
        back: {
            mainContent: 'PEI mussels in leek, white wine, saffron, curry, crème fraîche broth with baguette.',
            pronunciation: 'moo-CLAHD',
            bulletPoints: ['Allergens: Shellfish, Dairy, Gluten', 'Pair: Louis Jadot Chardonnay']
        },
        difficulty: 'medium', tags: ['seafood', 'dinner-only']
    },
    {
        id: 'fc-escargot', category: 'menu',
        front: { title: 'Escargot Traditional', subtitle: '$15' },
        back: {
            mainContent: 'Burgundian-style snails in lemon parsley garlic butter with grilled bread.',
            pronunciation: 'es-car-GOH',
            bulletPoints: ['Allergens: Shellfish, Dairy, Gluten', 'Pair: Louis Jadot Chardonnay']
        },
        difficulty: 'easy', tags: ['french-classic', 'dinner-only']
    },
    {
        id: 'fc-onion-soup', category: 'menu',
        front: { title: 'French Onion Soup', subtitle: '$12' },
        back: {
            mainContent: 'Rich beef broth with 3+ hour caramelized onions, crostini, gruyère, baby swiss.',
            bulletPoints: ['Allergens: Gluten, Dairy', 'Cannot be modified', 'Pair: Chateau Bourdieu Bordeaux']
        },
        difficulty: 'easy', tags: ['soup', 'french-classic']
    },
    {
        id: 'fc-spring-salad', category: 'menu',
        front: { title: 'House Green Salad', subtitle: '$12 • Vegan & GF' },
        back: {
            mainContent: 'Artisan greens, radish, golden beet, rainbow carrot, cucumber, sunflower seeds, dijon vinaigrette.',
            bulletPoints: ['No allergens', 'Pair: Fleurs de Prairie Rosé']
        },
        difficulty: 'easy', tags: ['salad', 'vegan', 'gluten-free']
    },
    {
        id: 'fc-salmon', category: 'menu',
        front: { title: 'Pan Seared Salmon', subtitle: '$44 • Main' },
        back: {
            mainContent: 'Atlantic salmon with corn & fennel velouté, potato pavé, haricots verts, citrus braised fennel.',
            pronunciation: 'pah-VAY (potato pavé)',
            bulletPoints: ['Allergens: Fish, Dairy', 'GF', 'Pair: Louis Jadot Chardonnay or Ken Wright Pinot']
        },
        difficulty: 'medium', tags: ['seafood', 'main']
    },
    {
        id: 'fc-risotto', category: 'menu',
        front: { title: 'Heirloom Tomato Risotto', subtitle: '$35 • Vegetarian' },
        back: {
            mainContent: 'Arborio rice with roasted/pickled/fresh tomatoes, fromage blanc, pecorino crisp, basil.',
            pronunciation: 'ree-ZOT-oh, from-AHJJ BLAHNK',
            bulletPoints: ['Allergen: Dairy', 'Vegetarian, GF', 'Pair: Dom. Paul Buisse Sauvignon Blanc']
        },
        difficulty: 'medium', tags: ['vegetarian', 'main']
    },
    {
        id: 'fc-burger', category: 'menu',
        front: { title: 'French Goat Burger', subtitle: '$22/$21 • SIGNATURE' },
        back: {
            mainContent: 'Short rib & tenderloin blend, sharp cheddar, crispy pork belly, tomato jam, french onion mayo, asiago bun, truffle fries.',
            bulletPoints: ['Allergens: Gluten, Dairy, Eggs', 'Lettuce wrap for GF', 'Pair: DAOU Cabernet or Devil\'s Anse IPA'],
            tips: 'Our SIGNATURE dish!'
        },
        difficulty: 'easy', tags: ['signature', 'main']
    },
    {
        id: 'fc-steak-frites', category: 'menu',
        front: { title: 'Steak Frites', subtitle: '$38 • Main' },
        back: {
            mainContent: 'Sliced coulotte steak with truffle marrow butter, truffle frites, malt vinegar aioli.',
            pronunciation: 'koo-LOT, FREET',
            bulletPoints: ['Allergens: Dairy, Eggs', 'GF', 'Pair: DAOU Cabernet or Catena Malbec']
        },
        difficulty: 'medium', tags: ['steak', 'main']
    },
    {
        id: 'fc-duck', category: 'menu',
        front: { title: 'Duck Leg Confit', subtitle: '$36 • Main' },
        back: {
            mainContent: 'Duck leg (6 hrs in duck fat) with cardamom apricot, green lentils, frisée, carrot-lemongrass coulis.',
            pronunciation: 'kon-FEE, free-ZAY, koo-LEE',
            bulletPoints: ['No common allergens', 'GF', 'Pair: Louis Jadot Chorey-Les-Beaune']
        },
        difficulty: 'hard', tags: ['french-classic', 'main']
    },
    {
        id: 'fc-chicken', category: 'menu',
        front: { title: 'Pan Roasted Chicken', subtitle: '$36 • Main' },
        back: {
            mainContent: 'Joyce Farms chicken with mushroom & pearl onion ragout, fondant potatoes, asparagus, sherry-chicken velouté.',
            pronunciation: 'fon-DAHN, veh-loo-TAY, ra-GOO',
            bulletPoints: ['Allergen: Dairy', 'GF', 'Pair: Louis Jadot Chardonnay']
        },
        difficulty: 'medium', tags: ['main', 'farm-to-table']
    },
    {
        id: 'fc-eggs-benny', category: 'menu',
        front: { title: 'Eggs Benedict', subtitle: '$18 • Brunch' },
        back: {
            mainContent: 'Toasted croissants, poached eggs, country ham, hollandaise made to order, potato hash.',
            pronunciation: 'hol-un-DAYZ',
            bulletPoints: ['Allergens: Gluten, Dairy, Eggs', 'Pair: Montand Brut Rosé']
        },
        difficulty: 'easy', tags: ['brunch', 'eggs']
    },
    {
        id: 'fc-croque', category: 'menu',
        front: { title: 'Croque Madame', subtitle: '$16 • Brunch' },
        back: {
            mainContent: 'Brioche, country ham, gruyère, mornay sauce, topped with fried egg. Choice of salad or frites.',
            pronunciation: 'krohk mah-DAHM, mor-NAY, gru-YAIR',
            bulletPoints: ['Allergens: Gluten, Dairy, Eggs', 'Egg crown = Madame vs Monsieur']
        },
        difficulty: 'medium', tags: ['brunch', 'french-classic']
    },
    {
        id: 'fc-lyonnaise', category: 'menu',
        front: { title: 'Salade Lyonnaise', subtitle: '$14 • Brunch' },
        back: {
            mainContent: 'Frisée with poached egg, bacon lardons, pan-fried croutons, dijon vinaigrette.',
            pronunciation: 'sah-LAHD lee-oh-NEZZ, lar-DOHN',
            bulletPoints: ['Allergens: Gluten, Eggs', 'Can omit croutons for GF']
        },
        difficulty: 'medium', tags: ['brunch', 'french-classic']
    },
    {
        id: 'fc-brulee', category: 'menu',
        front: { title: 'Crème Brûlée', subtitle: '$10 • Dessert' },
        back: {
            mainContent: 'Vanilla custard with caramelized sugar top. Torched to order. Madagascar vanilla.',
            pronunciation: 'krem broo-LAY',
            bulletPoints: ['Allergens: Dairy, Eggs', 'GF', 'Pair: Espresso']
        },
        difficulty: 'easy', tags: ['dessert', 'french-classic']
    },
    {
        id: 'fc-mousse', category: 'menu',
        front: { title: 'Chocolate Mousse', subtitle: '$10 • Dessert' },
        back: {
            mainContent: 'Valrhona 72% dark chocolate mousse with Chantilly cream.',
            pronunciation: 'mooss, shahn-TIL-ee',
            bulletPoints: ['Allergens: Dairy, Eggs', 'GF', 'Pair: Espresso']
        },
        difficulty: 'easy', tags: ['dessert']
    },
    {
        id: 'fc-nicoise', category: 'menu',
        front: { title: 'Tuna Niçoise', subtitle: '$33 • Main' },
        back: {
            mainContent: 'Seared ahi tuna, haricot verts, egg, fingerlings, olives, baby greens.',
            pronunciation: 'nee-SWAHZ',
            bulletPoints: ['Allergens: Fish, Eggs', 'GF', 'Pair: Fleurs de Prairie Rosé']
        },
        difficulty: 'medium', tags: ['salad', 'dinner-only']
    },
    {
        id: 'fc-florentine', category: 'menu',
        front: { title: 'Baked Eggs Florentine', subtitle: '$17 • Brunch' },
        back: {
            mainContent: 'Sautéed spinach, poached eggs, sauce mornay, parmesan.',
            bulletPoints: ['Allergens: Eggs, Dairy', 'Vegetarian', 'Pair: Mimosa']
        },
        difficulty: 'medium', tags: ['brunch', 'eggs']
    },
    {
        id: 'fc-quiche', category: 'menu',
        front: { title: 'House Quiche', subtitle: '$14 • Brunch' },
        back: {
            mainContent: 'Quiche of the day with buttery crust and seasonal fillings.',
            pronunciation: 'KEESH',
            bulletPoints: ['Allergens: Eggs, Dairy, Gluten', 'Changes Daily']
        },
        difficulty: 'easy', tags: ['brunch', 'eggs']
    },
    {
        id: 'fc-steak-eggs', category: 'menu',
        front: { title: 'Steak and Eggs', subtitle: '$24 • Brunch' },
        back: {
            mainContent: 'Chargrilled coulotte sirloin, sunny side eggs, sweet potato hash.',
            bulletPoints: ['Allergens: Eggs', 'GF', 'Pair: Bloody Mary']
        },
        difficulty: 'medium', tags: ['brunch', 'steak']
    },
    {
        id: 'fc-sorbet', category: 'menu',
        front: { title: 'Sorbet', subtitle: '$9 • Dessert' },
        back: {
            mainContent: 'House-made seasonal sorbet. Dairy-free.',
            pronunciation: 'sor-BAY',
            bulletPoints: ['Vegan', 'GF', 'Changes Daily']
        },
        difficulty: 'easy', tags: ['dessert', 'vegan']
    },
    {
        id: 'fc-gelato', category: 'menu',
        front: { title: 'Gelato', subtitle: '$9 • Dessert' },
        back: {
            mainContent: 'House-made Italian-style ice cream. Denser and creamier.',
            pronunciation: 'jeh-LAH-toh',
            bulletPoints: ['Allergens: Dairy', 'GF', 'Changes Daily']
        },
        difficulty: 'easy', tags: ['dessert']
    }
];

// WINE FLASHCARDS
export const WINE_FLASHCARDS: Flashcard[] = [
    { id: 'fc-wine-montand', category: 'wine', front: { title: 'Montand Brut Rosé', subtitle: 'Sparkling • Jura' }, back: { mainContent: 'Sparkling rosé - strawberry, raspberry, fine bubbles, crisp.', pronunciation: 'mohn-TAHND', bulletPoints: ['Pairs: Oysters, Eggs Benedict'] }, difficulty: 'easy', tags: ['sparkling'] },
    { id: 'fc-wine-rubus', category: 'wine', front: { title: 'Rubus Blanc de Blancs', subtitle: 'Sparkling' }, back: { mainContent: '100% Chardonnay. Green apple, pear, citrus, brioche.', pronunciation: 'blahnk duh BLAHNK', bulletPoints: ['Blanc de Blancs = white from white grapes'] }, difficulty: 'medium', tags: ['sparkling'] },
    { id: 'fc-wine-fleurs', category: 'wine', front: { title: 'Fleurs de Prairie', subtitle: 'Rosé • Provence' }, back: { mainContent: 'Classic Provence rosé - red berries, citrus, floral.', pronunciation: 'flur duh pray-REE', bulletPoints: ['Provence = rosé benchmark'] }, difficulty: 'easy', tags: ['rosé'] },
    { id: 'fc-wine-buisse', category: 'wine', front: { title: 'Dom. Paul Buisse Sauvignon Blanc', subtitle: 'Loire Valley' }, back: { mainContent: 'Crisp Loire white - green apple, citrus, mineral.', pronunciation: 'boo-EES', bulletPoints: ['Pairs: Hamachi, Risotto'] }, difficulty: 'medium', tags: ['white'] },
    { id: 'fc-wine-jadot-chard', category: 'wine', front: { title: 'Louis Jadot Chardonnay', subtitle: 'Burgundy' }, back: { mainContent: 'Premier Burgundy - apple, pear, balanced oak.', pronunciation: 'loo-EE zhah-DOH', bulletPoints: ['Pairs: Salmon, Mussels, Chicken'] }, difficulty: 'easy', tags: ['white'] },
    { id: 'fc-wine-daou-chard', category: 'wine', front: { title: 'DAOU Chardonnay', subtitle: 'Paso Robles' }, back: { mainContent: 'Rich California - tropical, vanilla, creamy.', pronunciation: 'DOW', bulletPoints: ['Pairs: Fig Flatbread'] }, difficulty: 'easy', tags: ['white'] },
    { id: 'fc-wine-belle-glos', category: 'wine', front: { title: 'Belle Glos Pinot Noir', subtitle: 'Santa Barbara' }, back: { mainContent: 'Full-bodied Pinot - dark cherry, vanilla, spice.', pronunciation: 'bell GLOH', bulletPoints: ['Fuller than typical Pinot'] }, difficulty: 'medium', tags: ['red'] },
    { id: 'fc-wine-ken-wright', category: 'wine', front: { title: 'Ken Wright Pinot Noir', subtitle: 'Willamette Valley' }, back: { mainContent: 'Complex Oregon Pinot - cherry, plum, earthy.', pronunciation: 'wil-LAM-et', bulletPoints: ['Pairs: Salmon, Duck'] }, difficulty: 'medium', tags: ['red'] },
    { id: 'fc-wine-jadot-pinot', category: 'wine', front: { title: 'Louis Jadot Chorey-Les-Beaune', subtitle: 'Burgundy' }, back: { mainContent: 'Classic Burgundy - cherry, earth, mushroom.', pronunciation: 'shor-AY lay BOHN', bulletPoints: ['Pairs: Duck Confit'] }, difficulty: 'hard', tags: ['red'] },
    { id: 'fc-wine-bourdieu', category: 'wine', front: { title: 'Chateau Bourdieu-Blaye', subtitle: 'Bordeaux' }, back: { mainContent: 'Merlot-dominant - cherry, plum, tobacco.', pronunciation: 'boor-DYUH', bulletPoints: ['Pairs: Onion Soup, Escargot'] }, difficulty: 'medium', tags: ['red'] },
    { id: 'fc-wine-daou-cab', category: 'wine', front: { title: 'DAOU Cabernet', subtitle: 'Paso Robles' }, back: { mainContent: 'Powerful - blackcurrant, plum, elegant finish.', pronunciation: 'DOW', bulletPoints: ['Pairs: Burger, Steak'] }, difficulty: 'easy', tags: ['red'] },
    { id: 'fc-wine-catena', category: 'wine', front: { title: 'Catena Malbec', subtitle: 'Mendoza' }, back: { mainContent: 'Argentine classic - blackberry, plum, violet.', pronunciation: 'kah-TEH-nah', bulletPoints: ['Pairs: Steak Frites'] }, difficulty: 'easy', tags: ['red'] }
];

// CULINARY TERMS FLASHCARDS
export const CULINARY_TERMS_FLASHCARDS: Flashcard[] = [
    { id: 'fc-term-confit', category: 'term', front: { title: 'Confit', subtitle: 'Technique', image: getImg('food8.jpg') }, back: { mainContent: 'Slow poaching in fat at low temp.', pronunciation: 'kon-FEE', bulletPoints: ['Used: Duck Leg Confit'] }, difficulty: 'medium', tags: ['technique'] },
    { id: 'fc-term-veloute', category: 'term', front: { title: 'Velouté', subtitle: 'Mother Sauce', image: getImg('food9.jpg') }, back: { mainContent: 'Stock-based sauce thickened with roux.', pronunciation: 'veh-loo-TAY', bulletPoints: ['Used: Chicken, Salmon'] }, difficulty: 'medium', tags: ['sauce'] },
    { id: 'fc-term-mornay', category: 'term', front: { title: 'Mornay', subtitle: 'Sauce', image: getImg('food3.jpeg') }, back: { mainContent: 'Béchamel + gruyère cheese.', pronunciation: 'mor-NAY', bulletPoints: ['Used: Croque Madame'] }, difficulty: 'medium', tags: ['sauce'] },
    { id: 'fc-term-hollandaise', category: 'term', front: { title: 'Hollandaise', subtitle: 'Mother Sauce', image: getImg('food5.jpeg') }, back: { mainContent: 'Egg yolk + butter + lemon emulsion.', pronunciation: 'hol-un-DAYZ', bulletPoints: ['Used: Eggs Benedict'] }, difficulty: 'easy', tags: ['sauce'] },
    { id: 'fc-term-coulis', category: 'term', front: { title: 'Coulis', subtitle: 'Sauce', image: getImg('food7.jpeg') }, back: { mainContent: 'Puréed/strained vegetable or fruit sauce.', pronunciation: 'koo-LEE', bulletPoints: ['Used: Duck (carrot-lemongrass)'] }, difficulty: 'medium', tags: ['sauce'] },
    { id: 'fc-term-pave', category: 'term', front: { title: 'Pavé', subtitle: 'Term', image: getImg('food6.jpeg') }, back: { mainContent: '"Cobblestone" - layered, pressed, sliced.', pronunciation: 'pah-VAY', bulletPoints: ['Used: Salmon (potato pavé)'] }, difficulty: 'hard', tags: ['technique'] },
    { id: 'fc-term-fondant', category: 'term', front: { title: 'Fondant Potatoes', subtitle: 'Side', image: getImg('food4.jpeg') }, back: { mainContent: 'Seared, then braised in butter/stock.', pronunciation: 'fon-DAHN', bulletPoints: ['Crispy outside, creamy inside'] }, difficulty: 'medium', tags: ['potato'] },
    { id: 'fc-term-ragout', category: 'term', front: { title: 'Ragoût', subtitle: 'Stew', image: getImg('food2.jpeg') }, back: { mainContent: 'Slow-cooked vegetable/meat stew.', pronunciation: 'ra-GOO', bulletPoints: ['Used: Chicken (mushroom)'] }, difficulty: 'easy', tags: ['technique'] },
    { id: 'fc-term-frisee', category: 'term', front: { title: 'Frisée', subtitle: 'Green', image: getImg('food1.jpeg') }, back: { mainContent: 'Curly baby endive. Slightly bitter.', pronunciation: 'free-ZAY', bulletPoints: ['Used: Lyonnaise, Duck'] }, difficulty: 'easy', tags: ['ingredient'] },
    { id: 'fc-term-lardons', category: 'term', front: { title: 'Lardons', subtitle: 'Bacon', image: getImg('food5.jpeg') }, back: { mainContent: 'Small bacon/pork belly strips.', pronunciation: 'lar-DOHN', bulletPoints: ['Used: Salade Lyonnaise'] }, difficulty: 'easy', tags: ['ingredient'] },
    { id: 'fc-term-chantilly', category: 'term', front: { title: 'Chantilly', subtitle: 'Cream', image: getImg('drink1.jpg') }, back: { mainContent: 'Sweetened vanilla whipped cream.', pronunciation: 'shahn-TIL-ee', bulletPoints: ['Used: Chocolate Mousse'] }, difficulty: 'easy', tags: ['dessert'] },
    { id: 'fc-term-chevre', category: 'term', front: { title: 'Chèvre', subtitle: 'Cheese', image: getImg('food3.jpeg') }, back: { mainContent: 'Goat cheese. Tangy, creamy.', pronunciation: 'SHEV-ruh', bulletPoints: ['Used: Fig Flatbread'] }, difficulty: 'easy', tags: ['cheese'] },
    { id: 'fc-term-brulee', category: 'term', front: { title: 'Brûlée', subtitle: 'Term', image: getImg('drink1.jpg') }, back: { mainContent: '"Burnt" - torched sugar shell.', pronunciation: 'broo-LAY', bulletPoints: ['Used: Crème Brûlée'] }, difficulty: 'easy', tags: ['dessert'] },
    { id: 'fc-term-escargot', category: 'term', front: { title: 'Escargot', subtitle: 'Dish', image: getImg('food3.jpeg') }, back: { mainContent: 'Land snails in garlic-herb butter.', pronunciation: 'es-car-GOH', bulletPoints: ['Burgundian tradition'] }, difficulty: 'easy', tags: ['french-classic'] }
];

// FLASHCARD DECKS
export const FLASHCARD_DECKS: FlashcardDeck[] = [
    { id: 'deck-menu-basics', name: 'Menu Essentials', description: 'Core menu items every server must know.', cards: MENU_FLASHCARDS.filter(c => c.difficulty === 'easy'), estimatedTime: 10 },
    { id: 'deck-menu-advanced', name: 'Menu Mastery', description: 'Advanced menu with pronunciations.', cards: MENU_FLASHCARDS.filter(c => c.difficulty !== 'easy'), estimatedTime: 12 },
    { id: 'deck-wine', name: 'Wine Program', description: 'Know our wines inside and out.', cards: WINE_FLASHCARDS, estimatedTime: 15 },
    { id: 'deck-terms', name: 'French Culinary Terms', description: 'Speak French cuisine with confidence.', cards: CULINARY_TERMS_FLASHCARDS, estimatedTime: 15 },
    { id: 'deck-all', name: 'Complete Collection', description: 'All flashcards for full review.', cards: [...MENU_FLASHCARDS, ...WINE_FLASHCARDS, ...CULINARY_TERMS_FLASHCARDS], estimatedTime: 40 }
];

export const ALL_FLASHCARDS = [...MENU_FLASHCARDS, ...WINE_FLASHCARDS, ...CULINARY_TERMS_FLASHCARDS];
