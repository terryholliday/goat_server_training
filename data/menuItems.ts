// Enhanced Menu Items Database for The French Goat
// Complete menu with allergens, substitutions, chef stories, and upsell pairings

import type { EnhancedMenuItem } from '../types/enhanced';

export const ENHANCED_MENU_ITEMS: EnhancedMenuItem[] = [
    // ============================================
    // PETITE PLATES
    // ============================================
    {
        id: 'oysters-halfshell',
        name: 'Oysters on the Halfshell',
        category: 'petite-plate',
        price: 19,
        description: 'Half dozen seasonal oysters served on ice with classic mignonette and cocktail sauce.',
        ingredients: ['seasonal oysters', 'mignonette sauce', 'cocktail sauce', 'lemon', 'ice'],
        allergens: ['shellfish'],
        substitutions: [],
        chefStory: 'Our oysters are sourced fresh from the Chesapeake Bay and East Coast farms, selected for their briny sweetness and firm texture. Chef prefers them minimally adorned to let their natural ocean flavor shine.',
        pronunciation: 'OY-sters on the HALF-shell',
        upsellPairings: [
            { type: 'wine', itemName: 'Rubus Blanc de Blancs', suggestedScript: 'The crisp minerality of our Blanc de Blancs is a perfect complement to the briny oysters.' },
            { type: 'wine', itemName: 'Montand Brut Rosé', suggestedScript: 'For something special, our rosé sparkling adds a touch of elegance with berry notes.' }
        ],
        flavorNotes: ['briny', 'mineral', 'oceanic', 'clean finish'],
        serviceTime: 'both'
    },
    {
        id: 'pepper-walnut-dip',
        name: 'Roasted Red Pepper & Walnut Dip',
        category: 'petite-plate',
        price: 16,
        description: 'Creamy roasted red pepper dip with toasted walnuts and sheep\'s milk feta, served with assorted local breads and crackers.',
        ingredients: ['roasted red peppers', 'walnuts', 'sheep\'s milk feta', 'garlic', 'olive oil', 'local breads', 'crackers'],
        allergens: ['dairy', 'nuts', 'gluten'],
        substitutions: [
            { forAllergen: 'gluten', substitute: 'Request gluten-free crackers', notes: 'Available upon request' },
            { forAllergen: 'dairy', substitute: 'Cannot be made dairy-free', notes: 'Feta is integral to the dish' },
            { forAllergen: 'nuts', substitute: 'Cannot be made nut-free', notes: 'Walnuts are a key component' }
        ],
        chefStory: 'Inspired by the muhammara of the Levant, this dip brings together the sweetness of flame-roasted peppers with the richness of toasted walnuts. The sheep\'s milk feta adds a tangy creaminess unique to our bistro.',
        upsellPairings: [
            { type: 'wine', itemName: 'Fleurs de Prairie Rosé', suggestedScript: 'A glass of our Provence rosé pairs beautifully with the sweet peppers and tangy feta.' }
        ],
        flavorNotes: ['smoky', 'sweet', 'tangy', 'earthy'],
        isVegetarian: true,
        serviceTime: 'both'
    },

    {
        id: 'mussels-mouclade',
        name: 'Sautéed Mussels Mouclade',
        category: 'petite-plate',
        price: 16,
        description: 'Prince Edward Island mussels in a aromatic broth of leek, white wine, saffron, curry, and crème fraîche, served with grilled baguette.',
        ingredients: ['PEI mussels', 'leeks', 'white wine', 'saffron', 'curry', 'crème fraîche', 'baguette'],
        allergens: ['shellfish', 'dairy', 'gluten'],
        substitutions: [
            { forAllergen: 'gluten', substitute: 'Served without baguette', notes: 'Broth and mussels remain gluten-free' },
            { forAllergen: 'dairy', substitute: 'Cannot be made dairy-free', notes: 'Crème fraîche is essential to the sauce' }
        ],
        chefStory: 'Mouclade is a specialty of the Charentes region of France. Our version honors tradition while adding a touch of curry for warmth. The saffron threads are infused tableside for an aromatic presentation.',
        pronunciation: 'moo-CLAHD',
        upsellPairings: [
            { type: 'wine', itemName: 'Louis Jadot Chardonnay', suggestedScript: 'A classic Burgundy Chardonnay stands up to the rich, creamy broth wonderfully.' }
        ],
        flavorNotes: ['briny', 'creamy', 'aromatic', 'subtly spiced'],
        serviceTime: 'dinner'
    },
    {
        id: 'escargot-traditional',
        name: 'Escargot Traditional',
        category: 'petite-plate',
        price: 15,
        description: 'Classic Burgundian-style snails baked in lemon parsley garlic butter, served with grilled bread for dipping.',
        ingredients: ['escargot', 'butter', 'parsley', 'garlic', 'lemon', 'grilled bread'],
        allergens: ['shellfish', 'dairy', 'gluten'],
        substitutions: [
            { forAllergen: 'gluten', substitute: 'Served without bread', notes: 'Escargot and butter remain available' }
        ],
        chefStory: 'A true French classic. Our escargots are prepared using a traditional recipe from Burgundy, with generous amounts of garlic, fresh parsley, and European-style butter. We encourage guests to use the grilled bread to soak up every drop of the compound butter.',
        pronunciation: 'es-car-GOH',
        upsellPairings: [
            { type: 'wine', itemName: 'Louis Jadot Chardonnay', suggestedScript: 'The buttery notes in a Burgundy Chardonnay mirror the garlic butter in this dish.' },
            { type: 'wine', itemName: 'Chateau Bourdieu Bordeaux', suggestedScript: 'For red wine lovers, a lighter Bordeaux provides an excellent counterpoint.' }
        ],
        flavorNotes: ['garlicky', 'buttery', 'herbaceous', 'rich'],
        serviceTime: 'dinner'
    },
    {
        id: 'cauliflower-tahini-dip',
        name: 'Roasted Cauliflower & Tahini Dip',
        category: 'petite-plate',
        price: 16,
        description: 'Silky roasted cauliflower dip with sesame sumac vinaigrette, shaved vegetables, served with assorted local breads and crackers.',
        ingredients: ['roasted cauliflower', 'tahini', 'sesame', 'sumac', 'shaved vegetables', 'local breads', 'crackers'],
        allergens: ['gluten', 'nuts'],
        substitutions: [
            { forAllergen: 'gluten', substitute: 'Request gluten-free crackers', notes: 'Available upon request' },
            { forAllergen: 'nuts', substitute: 'Cannot be made nut-free', notes: 'Tahini (sesame) is essential to the dish' }
        ],
        chefStory: 'This Mediterranean-inspired dip transforms humble cauliflower through slow roasting until deeply caramelized. The tahini adds richness while the sumac provides a tangy, citrusy brightness that is quintessentially Middle Eastern.',
        pronunciation: 'tah-HEE-nee, SOO-mak',
        upsellPairings: [
            { type: 'wine', itemName: 'Dom. Paul Buisse Sauvignon Blanc', suggestedScript: 'The bright acidity of this Loire Valley white complements the earthy cauliflower and tangy sumac beautifully.' }
        ],
        flavorNotes: ['smoky', 'nutty', 'tangy', 'earthy'],
        isVegetarian: true,
        isVegan: true,
        serviceTime: 'dinner'
    },
    {
        id: 'tarte-flambe',
        name: 'Tarte Flambée',
        category: 'petite-plate',
        price: 16,
        description: 'Gallucci Family Farm naan topped with crème fraîche, smoked bacon, and caramelized onion.',
        ingredients: ['naan bread', 'crème fraîche', 'smoked bacon', 'onion'],
        allergens: ['gluten', 'dairy'],
        substitutions: [
            { forAllergen: 'gluten', substitute: 'Not available gluten-free', notes: 'Naan is essential to the dish' },
            { forAllergen: 'dairy', substitute: 'Cannot be made dairy-free', notes: 'Crème fraîche is integral to the dish' }
        ],
        chefStory: 'Tarte Flambée is the beloved Alsatian flatbread, traditionally baked in wood-fired ovens. Our version uses naan from Gallucci Family Farm as the base, topped with silky crème fraîche, house-smoked bacon, and sweet caramelized onions.',
        pronunciation: 'tart flahm-BAY',
        upsellPairings: [
            { type: 'wine', itemName: 'Louis Jadot Chardonnay', suggestedScript: 'A Burgundy Chardonnay pairs wonderfully with the creamy, smoky flavors of this Alsatian classic.' }
        ],
        flavorNotes: ['smoky', 'creamy', 'sweet onion', 'savory'],
        serviceTime: 'dinner'
    },
    {
        id: 'crab-macaroni-gratin',
        name: 'Lump Crab & Macaroni Gratin',
        category: 'petite-plate',
        price: 18,
        preparationNotes: 'Dinner $22 (Petite Plate), Brunch $18 (Starter)',
        description: 'Jumbo lump crab with caper-lemon béchamel, sharp cheddar, gruyère, and parmesan.',
        ingredients: ['jumbo lump crab', 'macaroni', 'capers', 'lemon', 'béchamel', 'sharp cheddar', 'gruyère', 'parmesan'],
        allergens: ['shellfish', 'gluten', 'dairy'],
        substitutions: [],
        chefStory: 'Our elevated take on mac and cheese features generous portions of sweet, delicate jumbo lump crab nestled in a silky caper-lemon béchamel. The trio of aged cheeses creates a golden, bubbling gratin that perfectly complements the briny crab.',
        pronunciation: 'GRAH-tan, bay-shah-MEL',
        upsellPairings: [
            { type: 'wine', itemName: 'DAOU Chardonnay', suggestedScript: 'The rich, buttery California Chardonnay is a luxurious match for the decadent crab gratin.' },
            { type: 'wine', itemName: 'Rubus Blanc de Blancs', suggestedScript: 'Champagne and crab is a timeless pairing—the bubbles cut through the richness beautifully.' }
        ],
        flavorNotes: ['rich', 'briny', 'cheesy', 'citrus-bright'],
        serviceTime: 'both'
    },
    {
        id: 'cheese-selection',
        name: 'Selection of Cheeses',
        category: 'petite-plate',
        price: 19,
        description: 'Three artisan cheeses served with marcona almonds, dried fruit, and local honey.',
        ingredients: ['artisan cheeses', 'marcona almonds', 'dried fruit', 'local honey'],
        allergens: ['dairy', 'nuts'],
        substitutions: [
            { forAllergen: 'nuts', substitute: 'Omit almonds', notes: 'Served without marcona almonds' }
        ],
        chefStory: 'Our cheese selection rotates with the seasons, featuring both domestic artisanal producers and imported European treasures. Each cheese is carefully paired with local honey from Greenbrier Valley apiaries, Spanish marcona almonds, and house-dried seasonal fruits.',
        upsellPairings: [
            { type: 'wine', itemName: 'Chateau Bourdieu Bordeaux', suggestedScript: 'A medium-bodied Bordeaux is the classic companion to a cheese course.' },
            { type: 'drink', itemName: 'Port', suggestedScript: 'For a truly indulgent finish, a glass of port with the cheeses is divine.' }
        ],
        flavorNotes: ['varied', 'nutty', 'sweet', 'complex'],
        isVegetarian: true,
        isGlutenFree: true,
        serviceTime: 'dinner'
    },

    // ============================================
    // SOUPS & SALADS
    // ============================================
    {
        id: 'french-onion-soup',
        name: 'French Onion Soup',
        category: 'soup',
        price: 12,
        description: 'Rich beef broth with slow-caramelized onions, topped with a crusty crostini and melted gruyère and baby swiss cheeses.',
        ingredients: ['beef broth', 'caramelized onions', 'crostini', 'gruyère cheese', 'baby swiss cheese', 'fresh thyme'],
        allergens: ['gluten', 'dairy'],
        substitutions: [
            { forAllergen: 'gluten', substitute: 'Not available gluten-free', notes: 'Crostini is essential to the presentation' },
            { forAllergen: 'dairy', substitute: 'Not available dairy-free', notes: 'Cheese gratin is the signature element' }
        ],
        chefStory: 'Our onion soup requires over three hours of patient caramelization and uses a rich house-made beef stock. The crostini is toasted to order and the cheese is broiled until bubbling and golden—a true labor of love.',
        upsellPairings: [
            { type: 'wine', itemName: 'Chateau Bourdieu Bordeaux', suggestedScript: 'The rich, savory depth of this soup pairs perfectly with a medium-bodied Bordeaux.' }
        ],
        flavorNotes: ['deeply savory', 'sweet onion', 'rich', 'umami'],
        isVegetarian: false,
        serviceTime: 'dinner'
    },
    {
        id: 'soup-of-the-day',
        name: 'Soup of the Day',
        category: 'soup',
        price: 12,
        preparationNotes: 'Dinner $12, Brunch $11',
        description: 'Chef\'s daily crafted soup made with seasonal ingredients.',
        ingredients: ['seasonal vegetables', 'house-made stock', 'herbs'],
        allergens: [],
        substitutions: [],
        chefStory: 'Our soup changes daily based on the freshest seasonal ingredients available. Chef carefully crafts each soup to complement the season—lighter broths and vegetables in summer, heartier preparations in winter. Ask your server about today\'s selection.',
        upsellPairings: [
            { type: 'wine', itemName: 'Louis Jadot Chardonnay', suggestedScript: 'A versatile Burgundy Chardonnay pairs well with most of our soup preparations.' }
        ],
        flavorNotes: ['seasonal', 'comforting', 'fresh'],
        serviceTime: 'both'
    },
    {
        id: 'house-green-salad',
        name: 'House Green Salad',
        category: 'salad',
        price: 12,
        description: 'Clean Acres Farm artisan salad mix with radish, shaved golden beet, rainbow carrot, cucumber, sunflower seeds, and dijon vinaigrette. Add blue cheese or goat cheese $3, add bacon $3.',
        ingredients: ['artisan mixed greens', 'radish', 'golden beet', 'rainbow carrot', 'cucumber', 'sunflower seeds', 'dijon vinaigrette'],
        allergens: [],
        substitutions: [],
        chefStory: 'Sourced directly from Clean Acres Farm, our salad greens are harvested just hours before service. The rainbow of root vegetables adds color, texture, and a celebration of our Appalachian terroir.',
        upsellPairings: [
            { type: 'wine', itemName: 'Fleurs de Prairie Rosé', suggestedScript: 'A light, crisp rosé complements the fresh vegetables beautifully.' }
        ],
        flavorNotes: ['fresh', 'crisp', 'tangy', 'earthy'],
        isVegetarian: true,
        isVegan: true,
        isGlutenFree: true,
        serviceTime: 'dinner'
    },
    {
        id: 'endive-salad',
        name: 'Endive Salad',
        category: 'salad',
        price: 14,
        description: 'Belgian endive, radicchio, and frisée with pan-fried croutons, anchovy, shaved parmesan, and lemon-garlic vinaigrette. Add chicken $16, add steak $24.',
        ingredients: ['Belgian endive', 'radicchio', 'frisée', 'croutons', 'anchovy', 'parmesan', 'lemon', 'garlic', 'olive oil'],
        allergens: ['gluten', 'fish', 'dairy'],
        substitutions: [
            { forAllergen: 'gluten', substitute: 'Omit croutons', notes: 'Available without croutons' },
            { forAllergen: 'fish', substitute: 'Omit anchovy', notes: 'Request without anchovy' },
            { forAllergen: 'dairy', substitute: 'Omit parmesan', notes: 'Request without cheese' }
        ],
        chefStory: 'This sophisticated salad celebrates bitter greens in the French tradition. The interplay of Belgian endive, radicchio, and frisée creates a complex flavor profile, while the anchovy adds umami depth and the parmesan provides salty richness.',
        pronunciation: 'AHN-deev, rah-DIK-ee-oh, free-ZAY',
        upsellPairings: [
            { type: 'wine', itemName: 'Dom. Paul Buisse Sauvignon Blanc', suggestedScript: 'The bright citrus notes of this Loire Valley white complement the lemon-garlic vinaigrette.' }
        ],
        flavorNotes: ['bitter', 'savory', 'bright', 'complex'],
        isGlutenFree: false,
        serviceTime: 'dinner'
    },
    {
        id: 'tuna-nicoise',
        name: 'Tuna Niçoise',
        category: 'main',
        price: 33,
        description: 'Seared ahi tuna, haricot verts, hard boiled egg, fingerlings, olives, baby greens, balsamic vinaigrette.',
        ingredients: ['ahi tuna', 'haricot verts', 'egg', 'fingerling potatoes', 'olives', 'baby greens', 'balsamic vinaigrette'],
        allergens: ['fish', 'eggs'],
        substitutions: [
            { forAllergen: 'fish', substitute: 'Sub Chicken or Steak', notes: 'Protein substitution available' }
        ],
        chefStory: 'A classic French salad composed of cooked and raw vegetables, protein, and garnish. We use sashimi-grade seared tuna and fingerling potatoes for an elevated touched.',
        pronunciation: 'nee-SWAHZ',
        upsellPairings: [
            { type: 'wine', itemName: 'Fleurs de Prairie Rosé', suggestedScript: 'A dry Rosé is the traditional pairing for a Niçoise salad.' }
        ],
        flavorNotes: ['fresh', 'savory', 'acidic', 'balanced'],
        serviceTime: 'dinner'
    },

    // ============================================
    // MAIN COURSES - DINNER
    // ============================================
    {
        id: 'pan-seared-salmon',
        name: 'Pan Seared Salmon',
        category: 'main',
        price: 44,
        description: 'Pan seared Atlantic salmon with parsnip-green grape purée, haricots verts, golden raisins, verjus, sourdough crouton, and caper brown butter.',
        ingredients: ['Atlantic salmon', 'parsnip', 'green grapes', 'haricots verts', 'golden raisins', 'verjus', 'sourdough', 'capers', 'brown butter'],
        allergens: ['fish', 'dairy', 'gluten'],
        substitutions: [
            { forAllergen: 'dairy', substitute: 'Request olive oil preparation', notes: 'Brown butter cannot be modified' },
            { forAllergen: 'gluten', substitute: 'Omit sourdough crouton', notes: 'Available without crouton' }
        ],
        chefStory: 'Our salmon showcases the perfect balance of sweet and savory. The parsnip-green grape purée adds a silky, subtly sweet base, while the caper brown butter brings nutty depth. Verjus—the juice of unripe grapes—adds a bright, wine-like acidity without alcohol.',
        pronunciation: 'vair-ZHOO, ah-ree-koh VAIR',
        upsellPairings: [
            { type: 'wine', itemName: 'Louis Jadot Chardonnay', suggestedScript: 'The rich, buttery Burgundy Chardonnay is a classic pairing with salmon.' },
            { type: 'wine', itemName: 'Ken Wright Pinot Noir', suggestedScript: 'For red wine lovers, an Oregon Pinot Noir with its earthy notes is surprisingly perfect with salmon.' }
        ],
        flavorNotes: ['buttery', 'sweet-tart', 'nutty', 'bright'],
        isGlutenFree: false,
        serviceTime: 'dinner'
    },
    {
        id: 'roasted-root-vegetable-risotto',
        name: 'Roasted Root Vegetable Risotto',
        category: 'main',
        price: 35,
        description: 'Creamy arborio rice with roasted root vegetables, celeriac apple slaw, pecorino, sage, and brown butter.',
        ingredients: ['arborio rice', 'seasonal root vegetables', 'celeriac', 'apple', 'pecorino', 'sage', 'brown butter', 'vegetable stock', 'white wine'],
        allergens: ['dairy'],
        substitutions: [
            { forAllergen: 'dairy', substitute: 'Cannot be made dairy-free', notes: 'Cheese and brown butter are integral' }
        ],
        chefStory: 'This autumn-inspired risotto celebrates the earthy sweetness of roasted root vegetables. The celeriac apple slaw adds a refreshing crunch and brightness, while brown butter and fried sage bring warming, nutty depth to the dish.',
        pronunciation: 'ree-ZOT-oh, SEL-er-ee-ak',
        upsellPairings: [
            { type: 'wine', itemName: 'DAOU Chardonnay', suggestedScript: 'The rich, oaky California Chardonnay complements the brown butter and sage beautifully.' }
        ],
        flavorNotes: ['creamy', 'earthy', 'nutty', 'herbaceous'],
        isVegetarian: true,
        isGlutenFree: true,
        serviceTime: 'dinner'
    },
    {
        id: 'french-goat-burger',
        name: 'French Goat Burger',
        category: 'main',
        price: 22,
        preparationNotes: 'Dinner $22, Brunch $21',
        description: 'House blend of short rib and tenderloin topped with NY sharp cheddar, crispy pork belly, fried shallot, tomato jam, and french onion mayo on a local asiago bun, served with truffle fries.',
        ingredients: ['short rib', 'beef tenderloin', 'sharp cheddar', 'pork belly', 'shallots', 'tomato jam', 'french onion mayo', 'asiago bun', 'truffle fries'],
        allergens: ['gluten', 'dairy', 'eggs'],
        substitutions: [
            { forAllergen: 'gluten', substitute: 'Lettuce wrap available', notes: 'Request burger on lettuce wrap' },
            { forAllergen: 'dairy', substitute: 'No cheese modification', notes: 'Omit cheddar and asiago bun' }
        ],
        chefStory: 'This isn\'t just a burger—it\'s our signature dish. The blend of short rib and tenderloin creates the perfect balance of richness and tenderness. The crispy pork belly adds an indulgent crunch that guests remember.',
        upsellPairings: [
            { type: 'wine', itemName: 'DAOU Cabernet Sauvignon', suggestedScript: 'A bold Cabernet stands up to all the rich flavors in this burger.' },
            { type: 'drink', itemName: 'Devil\'s Anse IPA', suggestedScript: 'For beer lovers, our local IPA cuts through the richness perfectly.' }
        ],
        flavorNotes: ['rich', 'savory', 'umami', 'indulgent'],
        serviceTime: 'both'
    },
    {
        id: 'steak-frites',
        name: 'Steak Frites',
        category: 'main',
        price: 38,
        description: 'Choice of coulotte sirloin ($38) or tenderloin of beef ($62), served with truffle marrow butter, truffle frites, and malt vinegar aioli.',
        ingredients: ['coulotte steak', 'beef tenderloin', 'truffle butter', 'bone marrow', 'truffle fries', 'malt vinegar', 'aioli'],
        allergens: ['dairy', 'eggs'],
        substitutions: [
            { forAllergen: 'dairy', substitute: 'Plain butter or olive oil', notes: 'Replace truffle marrow butter' }
        ],
        chefStory: 'Guests can choose between our coulotte sirloin—prized for its rich flavor and perfect marbling—or an indulgent tenderloin of beef for a truly special occasion. Both are finished with our signature truffle marrow butter that melts luxuriously into the meat.',
        pronunciation: 'koo-LOT, FREET',
        preparationNotes: 'Coulotte Sirloin $38, Tenderloin of Beef $62',
        upsellPairings: [
            { type: 'wine', itemName: 'DAOU Cabernet Sauvignon', suggestedScript: 'A powerful Paso Robles Cabernet is the ultimate steak pairing.' },
            { type: 'wine', itemName: 'Catena Malbec', suggestedScript: 'For an Argentinian touch, our Malbec brings dark fruit and spice to complement the beef.' }
        ],
        flavorNotes: ['beefy', 'truffle', 'rich', 'savory'],
        isGlutenFree: true,
        serviceTime: 'dinner'
    },
    {
        id: 'duck-leg-confit',
        name: 'Duck Leg Confit',
        category: 'main',
        price: 36,
        description: 'Slow-cooked duck leg with braised red cabbage, marrow beans, pickled green apple, and mustard-cider duck jus.',
        ingredients: ['duck leg', 'duck fat', 'red cabbage', 'marrow beans', 'green apple', 'whole grain mustard', 'apple cider', 'duck jus'],
        allergens: [],
        substitutions: [],
        chefStory: 'Confit is the original slow cooking technique, dating back centuries in France. Our duck legs are cured overnight, then slowly poached in their own fat for six hours until fork-tender. The mustard-cider jus and pickled green apple provide bright contrast to the rich, savory meat.',
        pronunciation: 'kon-FEE',
        upsellPairings: [
            { type: 'wine', itemName: 'Louis Jadot Chorey-Les-Beaune', suggestedScript: 'The earthy, mushroomy Burgundy Pinot Noir is a classic duck pairing.' },
            { type: 'wine', itemName: 'Ken Wright Pinot Noir', suggestedScript: 'Oregon Pinot brings bright fruit to balance the richness of the duck.' }
        ],
        flavorNotes: ['rich', 'savory', 'tangy', 'autumnal'],
        isGlutenFree: true,
        serviceTime: 'dinner'
    },
    {
        id: 'pan-roasted-chicken',
        name: 'Pan Roasted Chicken Breast',
        category: 'main',
        price: 36,
        description: 'Joyce Farms chicken breast with whipped potato subise, roasted baby carrots, glazed turnips, and creamy porcini-madeira chicken jus.',
        ingredients: ['Joyce Farms chicken', 'potatoes', 'onion subise', 'baby carrots', 'turnips', 'porcini mushrooms', 'madeira wine', 'chicken stock', 'cream'],
        allergens: ['dairy'],
        substitutions: [
            { forAllergen: 'dairy', substitute: 'Olive oil and stock finish', notes: 'Replace subise and creamy jus with pan jus' }
        ],
        chefStory: 'We source exclusively from Joyce Farms, known for their heritage breed chickens raised without antibiotics. The whipped potato subise—a silky blend of potato and caramelized onion purée—creates a luxurious bed for the perfectly seared chicken, while the porcini-madeira jus adds earthy depth.',
        pronunciation: 'soo-BEEZ, mah-DEER-ah, por-CHEE-nee',
        upsellPairings: [
            { type: 'wine', itemName: 'Louis Jadot Chardonnay', suggestedScript: 'A rich Burgundy Chardonnay mirrors the creamy subise beautifully.' },
            { type: 'side', itemName: 'Roasted Baby Carrots', suggestedScript: 'Add an extra side of our roasted baby carrots for more vegetables.' }
        ],
        flavorNotes: ['savory', 'earthy', 'creamy', 'rich'],
        isGlutenFree: true,
        serviceTime: 'dinner'
    },

    // ============================================
    // BRUNCH SPECIALTIES
    // ============================================
    {
        id: 'bread-basket',
        name: 'Bread Basket',
        category: 'brunch',
        subcategory: 'starters',
        price: 12,
        description: 'A selection of freshly baked croissant, seasonal pastry, and chocolate croissant with house-made butter.',
        ingredients: ['croissant', 'chocolate croissant', 'seasonal pastry', 'butter'],
        allergens: ['gluten', 'dairy', 'eggs'],
        substitutions: [],
        chefStory: 'Our pastries are baked fresh each morning by our pastry chef. The croissants require three days of preparation, with multiple folding sessions to achieve their signature flaky layers.',
        pronunciation: 'kwah-SAHN',
        upsellPairings: [
            { type: 'drink', itemName: 'French Press Coffee', suggestedScript: 'Our French press coffee is the perfect accompaniment to fresh pastries.' }
        ],
        flavorNotes: ['buttery', 'flaky', 'sweet', 'rich'],
        isVegetarian: true,
        serviceTime: 'brunch'
    },
    {
        id: 'house-omelet',
        name: 'House Omelet',
        category: 'brunch',
        subcategory: 'eggs',
        price: 15,
        description: 'A seasonal omelet prepared by the chef with market ingredients. Ask your server about today\'s preparation.',
        ingredients: ['eggs', 'butter', 'seasonal vegetables', 'cheese (varies)'],
        allergens: ['eggs', 'dairy'],
        substitutions: [
            { forAllergen: 'dairy', substitute: 'Request without cheese', notes: 'Cooked in olive oil instead of butter' }
        ],
        chefStory: 'Our omelet changes daily based on the finest seasonal ingredients. Chef takes pride in the French technique—silky, barely set eggs with a creamy interior.',
        upsellPairings: [
            { type: 'side', itemName: 'Cheese Grits', suggestedScript: 'Our Arbaugh Farms cheese grits make a wonderful accompaniment.' }
        ],
        flavorNotes: ['creamy', 'seasonal', 'delicate'],
        isVegetarian: true,
        isGlutenFree: true,
        serviceTime: 'brunch'
    },
    {
        id: 'eggs-benedict',
        name: 'Eggs Benedict',
        category: 'brunch',
        subcategory: 'eggs',
        price: 18,
        description: 'Toasted croissants topped with poached eggs, country ham, and classic hollandaise sauce, served with potato hash.',
        ingredients: ['croissant', 'eggs', 'country ham', 'hollandaise', 'potato hash'],
        allergens: ['gluten', 'dairy', 'eggs'],
        substitutions: [
            { forAllergen: 'gluten', substitute: 'Served on potato hash only', notes: 'Omit croissant' }
        ],
        chefStory: 'Our twist on the classic uses buttery croissants instead of English muffins, and locally cured country ham from a Greenbrier Valley farm. The hollandaise is made to order for optimal silkiness.',
        pronunciation: 'BEN-eh-dikt, hol-un-DAYZ',
        upsellPairings: [
            { type: 'wine', itemName: 'Montand Brut Rosé', suggestedScript: 'Champagne and eggs is a timeless brunch combination.' }
        ],
        flavorNotes: ['rich', 'savory', 'velvety', 'indulgent'],
        serviceTime: 'brunch'
    },
    {
        id: 'croque-madame',
        name: 'Croque Madame',
        category: 'brunch',
        subcategory: 'mains',
        price: 16,
        description: 'Brioche bread with country ham, gruyère cheese, and mornay sauce, topped with a fried hen egg. Served with petite salad or frites.',
        ingredients: ['brioche', 'country ham', 'gruyère', 'mornay sauce', 'fried egg'],
        allergens: ['gluten', 'dairy', 'eggs'],
        substitutions: [],
        chefStory: 'The Croque Madame is the "queen" of French café sandwiches—the fried egg crown distinguishes it from its "monsieur" counterpart. Our brioche is baked in-house for optimal richness.',
        pronunciation: 'krohk mah-DAHM, mor-NAY, gru-YAIR',
        upsellPairings: [
            { type: 'side', itemName: 'Truffle Frites', suggestedScript: 'Upgrade to truffle frites for the ultimate indulgence.' }
        ],
        flavorNotes: ['rich', 'cheesy', 'savory', 'indulgent'],
        serviceTime: 'brunch'
    },
    {
        id: 'french-toast',
        name: 'French Toast',
        category: 'brunch',
        subcategory: 'mains',
        price: 15,
        description: 'Griddled sourdough with house-made ricotta, applewood smoked bacon, and pure maple syrup.',
        ingredients: ['sourdough bread', 'eggs', 'ricotta', 'bacon', 'maple syrup', 'cinnamon'],
        allergens: ['gluten', 'dairy', 'eggs'],
        substitutions: [
            { forAllergen: 'dairy', substitute: 'Omit ricotta', notes: 'Served with maple syrup only' }
        ],
        chefStory: 'We use thick-cut sourdough for its slightly tangy flavor and sturdy texture. The house-made ricotta adds creaminess while the applewood bacon provides a perfect salty-sweet contrast.',
        upsellPairings: [
            { type: 'drink', itemName: 'Seasonal Mocktail', suggestedScript: 'Our seasonal mocktail provides a refreshing complement to the sweetness.' }
        ],
        flavorNotes: ['sweet', 'custardy', 'smoky', 'rich'],
        serviceTime: 'brunch'
    },
    {
        id: 'baked-eggs-florentine',
        name: 'Baked Eggs Florentine',
        category: 'brunch',
        subcategory: 'eggs',
        price: 17,
        description: 'Sautéed spinach, poached eggs, sauce mornay, shaved parmesan, petite salad.',
        ingredients: ['spinach', 'eggs', 'mornay sauce', 'parmesan', 'mixed greens'],
        allergens: ['eggs', 'dairy'],
        substitutions: [],
        chefStory: 'Florentine refers to a dish served with spinach. Our baked version features a rich mornay sauce that gratins beautifully over the eggs and spinach.',
        upsellPairings: [
            { type: 'drink', itemName: 'Mimosa', suggestedScript: 'A mimosa cuts through the richness of the mornay sauce.' }
        ],
        flavorNotes: ['creamy', 'iron-rich', 'savory'],
        isVegetarian: true,
        serviceTime: 'brunch'
    },
    {
        id: 'house-quiche',
        name: 'House Quiche',
        category: 'brunch',
        subcategory: 'eggs',
        price: 14,
        description: 'Quiche of the day served with salad or frites.',
        ingredients: ['eggs', 'cream', 'pastry shell', 'seasonal ingredients'],
        allergens: ['eggs', 'dairy', 'gluten'],
        substitutions: [],
        chefStory: 'Our quiche features a buttery house-made crust and a custard fillings that changes daily based on seasonal vegetables and meats.',
        pronunciation: 'KEESH',
        upsellPairings: [],
        flavorNotes: ['rich', 'buttery', 'seasonal'],
        serviceTime: 'brunch'
    },
    {
        id: 'steak-and-eggs',
        name: 'Steak and Eggs',
        category: 'brunch',
        subcategory: 'mains',
        price: 24,
        description: 'Chargrilled coulotte sirloin, sunny side eggs, sweet potato hash.',
        ingredients: ['coulotte sirloin', 'eggs', 'sweet potato', 'onions', 'peppers'],
        allergens: ['eggs'],
        substitutions: [],
        chefStory: 'A hearty brunch classic. We use the same high-quality coulotte steak from our dinner menu, paired with a savory sweet potato hash.',
        upsellPairings: [
            { type: 'drink', itemName: 'Bloody Mary', suggestedScript: 'A spicy Bloody Mary stands up to the steak perfectly.' }
        ],
        flavorNotes: ['beefy', 'savory', 'sweet potato'],
        serviceTime: 'brunch'
    },
    {
        id: 'salad-lyonnaise',
        name: 'Salade Lyonnaise',
        category: 'brunch',
        subcategory: 'salads',
        price: 14,
        description: 'Frisée lettuce with a perfectly poached egg, bacon lardons, pan-fried croutons, and dijon vinaigrette.',
        ingredients: ['frisée lettuce', 'poached egg', 'bacon lardons', 'croutons', 'dijon vinaigrette'],
        allergens: ['gluten', 'eggs'],
        substitutions: [
            { forAllergen: 'gluten', substitute: 'Omit croutons', notes: 'Available without croutons' }
        ],
        chefStory: 'Named for the city of Lyon, this classic bistro salad features the interplay of bitter frisée, rich poached egg, and smoky lardons. When the egg is broken, its yolk becomes part of the vinaigrette—pure French genius.',
        pronunciation: 'sah-LAHD lee-oh-NEZZ, free-ZAY, lar-DOHN',
        upsellPairings: [
            { type: 'wine', itemName: 'Rubus Blanc de Blancs', suggestedScript: 'A glass of sparkling wine elevates any brunch experience.' }
        ],
        flavorNotes: ['bitter', 'rich', 'smoky', 'tangy'],
        isGlutenFree: false,
        serviceTime: 'brunch'
    },

    // ============================================
    // DESSERTS
    // ============================================
    {
        id: 'creme-brulee',
        name: 'Crème Brûlée',
        category: 'dessert',
        price: 10,
        description: 'Chef\'s daily classic crème brûlée with a perfectly caramelized sugar top.',
        ingredients: ['cream', 'egg yolks', 'vanilla bean', 'sugar'],
        allergens: ['dairy', 'eggs'],
        substitutions: [],
        chefStory: 'The crème brûlée is torched to order, ensuring that satisfying crack when you break through the caramelized sugar. Our vanilla comes from Madagascar for its rich, complex flavor.',
        pronunciation: 'krem broo-LAY',
        upsellPairings: [
            { type: 'drink', itemName: 'Espresso', suggestedScript: 'A shot of espresso is the perfect finish alongside this rich dessert.' },
            { type: 'wine', itemName: 'Late Harvest Dessert Wine', suggestedScript: 'A touch of dessert wine complements the vanilla beautifully.' }
        ],
        flavorNotes: ['vanilla', 'caramel', 'creamy', 'rich'],
        isVegetarian: true,
        isGlutenFree: true,
        serviceTime: 'both'
    },
    {
        id: 'chocolate-mousse',
        name: 'Chocolate Mousse',
        category: 'dessert',
        price: 10,
        description: 'Rich, airy chocolate mousse made with 72% dark chocolate, served with Chantilly cream.',
        ingredients: ['dark chocolate', 'eggs', 'cream', 'sugar', 'vanilla'],
        allergens: ['dairy', 'eggs'],
        substitutions: [],
        chefStory: 'We use Valrhona 72% dark chocolate for its intense flavor and smooth finish. The mousse is whipped to achieve the perfect light-yet-rich texture—truly a chocolate lover\'s dream.',
        pronunciation: 'mooss, shahn-TIL-ee',
        upsellPairings: [
            { type: 'drink', itemName: 'Espresso', suggestedScript: 'An espresso enhances the chocolate notes wonderfully.' }
        ],
        flavorNotes: ['rich chocolate', 'airy', 'bittersweet', 'creamy'],
        isVegetarian: true,
        isGlutenFree: true,
        serviceTime: 'both'
    },

    // ============================================
    // SIDES
    // ============================================
    {
        id: 'truffle-frites',
        name: 'Truffle Frites',
        category: 'side',
        price: 10,
        preparationNotes: 'Dinner $10, Brunch $8',
        description: 'Crispy hand-cut fries tossed with truffle oil and fresh parsley, served with truffle parmesan aioli.',
        ingredients: ['potatoes', 'truffle oil', 'parsley', 'parmesan', 'aioli', 'sea salt'],
        allergens: ['dairy', 'eggs'],
        substitutions: [
            { forAllergen: 'dairy', substitute: 'Omit parmesan from aioli', notes: 'Request without cheese' }
        ],
        chefStory: 'Our frites are hand-cut daily and double-fried in the Belgian tradition—once at a lower temperature to cook through, then again at high heat for crispness. Finished with a generous drizzle of truffle oil and served with our house-made truffle parmesan aioli.',
        pronunciation: 'FREET',
        upsellPairings: [],
        flavorNotes: ['truffle', 'crispy', 'earthy', 'salty'],
        isVegetarian: true,
        isGlutenFree: true,
        serviceTime: 'both'
    },
    {
        id: 'cheese-grits',
        name: 'Arbaugh Farms Cheese Grits',
        category: 'side',
        price: 7,
        description: 'Creamy stone-ground grits from Arbaugh Farms with aged white cheddar.',
        ingredients: ['stone-ground grits', 'white cheddar', 'butter', 'cream'],
        allergens: ['dairy'],
        substitutions: [],
        chefStory: 'We partner with Arbaugh Farms, just 20 miles away, for our stone-ground grits. Cooked low and slow with plenty of cream and aged cheddar, these grits are our Appalachian tribute.',
        upsellPairings: [],
        flavorNotes: ['creamy', 'cheesy', 'comforting', 'rich'],
        isVegetarian: true,
        isGlutenFree: true,
        serviceTime: 'brunch'
    },
    {
        id: 'braised-red-cabbage',
        name: 'Braised Red Cabbage',
        category: 'side',
        price: 9,
        description: 'Slow-braised red cabbage with warming spices and a touch of sweetness.',
        ingredients: ['red cabbage', 'apple cider vinegar', 'brown sugar', 'juniper berries', 'bay leaf', 'butter'],
        allergens: ['dairy'],
        substitutions: [
            { forAllergen: 'dairy', substitute: 'Request without butter', notes: 'Available with olive oil finish' }
        ],
        chefStory: 'This classic European side showcases red cabbage at its best—slowly braised until silky and infused with warming spices. The addition of apple cider vinegar and a touch of brown sugar creates the perfect sweet-tart balance.',
        upsellPairings: [],
        flavorNotes: ['sweet-tart', 'earthy', 'warming', 'comforting'],
        isVegetarian: true,
        isGlutenFree: true,
        serviceTime: 'dinner'
    },
    {
        id: 'roasted-baby-carrots',
        name: 'Roasted Baby Carrots',
        category: 'side',
        price: 12,
        description: 'Tender roasted baby carrots glazed with honey and fresh herbs.',
        ingredients: ['baby carrots', 'honey', 'butter', 'fresh thyme', 'sea salt'],
        allergens: ['dairy'],
        substitutions: [
            { forAllergen: 'dairy', substitute: 'Olive oil preparation', notes: 'Available without butter' }
        ],
        chefStory: 'We source our baby carrots from local farms for their natural sweetness. Roasted at high heat to caramelize their natural sugars, then finished with local honey and fresh thyme for an elegant accompaniment to any main course.',
        upsellPairings: [],
        flavorNotes: ['sweet', 'caramelized', 'herbaceous', 'tender'],
        isVegetarian: true,
        isGlutenFree: true,
        serviceTime: 'dinner'
    },
    {
        id: 'whipped-potato-subise',
        name: 'Whipped Potato Subise',
        category: 'side',
        price: 10,
        description: 'Silky whipped potatoes blended with classic French onion subise.',
        ingredients: ['Yukon gold potatoes', 'caramelized onions', 'butter', 'cream', 'nutmeg'],
        allergens: ['dairy'],
        substitutions: [],
        chefStory: 'Subise is a classic French onion purée dating back to the 18th century. We fold it into silky whipped Yukon gold potatoes for a luxuriously smooth side dish with subtle sweetness from the slow-cooked onions.',
        pronunciation: 'soo-BEEZ',
        upsellPairings: [],
        flavorNotes: ['creamy', 'sweet onion', 'buttery', 'sophisticated'],
        isVegetarian: true,
        isGlutenFree: true,
        serviceTime: 'dinner'
    },
    {
        id: 'potato-hash',
        name: 'Potato Hash',
        category: 'side',
        price: 6,
        description: 'Crispy diced potatoes with onions and herbs.',
        ingredients: ['potatoes', 'onions', 'herbs', 'seasoning'],
        allergens: [],
        substitutions: [],
        chefStory: 'Classic brunch side, cooked until perfectly golden and crispy.',
        upsellPairings: [],
        flavorNotes: ['crispy', 'savory', 'comforting'],
        isVegetarian: true,
        isGlutenFree: true,
        serviceTime: 'brunch'
    },
    {
        id: 'petite-green-salad',
        name: 'Petite Green Salad',
        category: 'side',
        price: 7,
        description: 'Small mixed green salad with house vinaigrette.',
        ingredients: ['mixed greens', 'vinaigrette'],
        allergens: [],
        substitutions: [],
        chefStory: 'A simple, fresh side salad to balance richer brunch dishes.',
        upsellPairings: [],
        flavorNotes: ['fresh', 'crisp', 'acidic'],
        isVegetarian: true,
        isVegan: true,
        isGlutenFree: true,
        serviceTime: 'brunch'
    },
    {
        id: 'chefs-plat-du-jour',
        name: "Chef's Plat du Jour",
        category: 'brunch',
        subcategory: 'mains',
        price: 16,
        description: "Our daily specialty—a rotating selection prepared with the freshest seasonal ingredients. Ask your server for today's offering.",
        ingredients: ['seasonal ingredients'],
        allergens: [],
        substitutions: [],
        chefStory: "The Plat du Jour is our chef's daily canvas for creativity. It might feature seasonal produce from local farms, a special catch, or an inspired preparation that showcases what's best at the market that day. Always ask your server—it's often a hidden gem.",
        pronunciation: 'plah doo ZHOOR',
        upsellPairings: [
            { type: 'wine', itemName: 'Ask your server', suggestedScript: 'I can recommend a perfect wine pairing once you know what our special is today.' }
        ],
        flavorNotes: ['seasonal', 'creative', 'fresh'],
        serviceTime: 'brunch'
    }
];


// Helper function to get menu items by category
export const getMenuByCategory = (category: EnhancedMenuItem['category']) =>
    ENHANCED_MENU_ITEMS.filter(item => item.category === category);

// Helper function to get menu items by allergen (for allergy simulations)
export const getItemsWithAllergen = (allergen: string) =>
    ENHANCED_MENU_ITEMS.filter(item => item.allergens.includes(allergen as any));

// Helper function to get safe items for a given allergen
export const getSafeItemsForAllergen = (allergen: string) =>
    ENHANCED_MENU_ITEMS.filter(item => !item.allergens.includes(allergen as any));

// Helper function to search menu items
export const searchMenuItems = (query: string) => {
    const lowerQuery = query.toLowerCase();
    return ENHANCED_MENU_ITEMS.filter(item =>
        item.name.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.ingredients.some(ing => ing.toLowerCase().includes(lowerQuery))
    );
};
