import type { Wine, MenuItem, InfoPage, SequenceStep, Term, MCQ } from './types';

// Available images in public/french_goat_images (excluding Marcel)
export const AVAILABLE_IMAGES = [
  "10_seven_year_anniversary_celebration.jpeg",
  "Dining_room_1.png",
  "drink1.jpg",
  "food1.jpeg",
  "food2.jpeg",
  "food3.jpeg",
  "food4.jpeg",
  "food5.jpeg",
  "food6.jpeg",
  "food7.jpeg",
  "food8.jpg",
  "food9.jpg",
  "storefront.jpg",
  "the-french-goat.jpg",
  "wine.jpeg",
  "wine2.jpeg"
];

const BASE_IMG_PATH = "/french_goat_images/";

// Helper to get a random image that isn't null/undefined
const getRandomImage = (index: number) => {
  return `${BASE_IMG_PATH}${AVAILABLE_IMAGES[index % AVAILABLE_IMAGES.length]}`;
};

// Image Categories populated from AVAILABLE_IMAGES
export const IMAGE_MAP = {
  generalInfo: [
    `${BASE_IMG_PATH}Dining_room_1.png`,
    `${BASE_IMG_PATH}food1.jpeg`,
    `${BASE_IMG_PATH}food2.jpeg`,
    `${BASE_IMG_PATH}food3.jpeg`
  ],
  sequencePages: [
    `${BASE_IMG_PATH}Dining_room_1.png`,
    `${BASE_IMG_PATH}food4.jpeg`,
    `${BASE_IMG_PATH}wine.jpeg`,
    `${BASE_IMG_PATH}drink1.jpg`,
    `${BASE_IMG_PATH}food5.jpeg`,
    `${BASE_IMG_PATH}food6.jpeg`,
    `${BASE_IMG_PATH}food7.jpeg`, // Index 6 used in FineDiningSection
    `${BASE_IMG_PATH}food8.jpg`
  ],
  menuKnowledge: [
    `${BASE_IMG_PATH}food9.jpg`,
    `${BASE_IMG_PATH}food1.jpeg`,
    `${BASE_IMG_PATH}food2.jpeg`,
    `${BASE_IMG_PATH}food3.jpeg`
  ],
  wineKnowledge: [
    `${BASE_IMG_PATH}wine.jpeg`,
    `${BASE_IMG_PATH}wine2.jpeg`,
    `${BASE_IMG_PATH}drink1.jpg`
  ],
  fallback: `${BASE_IMG_PATH}logo.png`, // Fallback
};

export const GENERAL_INFO_PAGES: InfoPage[] = [
  {
    title: "Welcome to The French Goat",
    content: "Welcome to The French Goat, an exquisite dining experience nestled in the heart of downtown Lewisburg.\n\nOur restaurant offers a unique blend of traditional French cuisine with a modern twist, all prepared with locally sourced ingredients.\n\nEstablished in 2015, The French Goat has quickly become a destination for food enthusiasts seeking an authentic taste of France in a warm, inviting atmosphere.\n\nOur commitment to excellence extends beyond our kitchen to every aspect of your dining experience, from our carefully curated wine list to our attentive, knowledgeable staff."
  },
  {
    title: "Our Mission",
    content: "At The French Goat, our mission is to provide an exceptional dining experience that celebrates the rich traditions of French cuisine while embracing innovation and creativity.\n\nWe are committed to sourcing the finest local and seasonal ingredients, supporting sustainable farming practices, and minimizing our environmental footprint.\n\nOur goal is to create memorable moments for our guests through impeccable service, exquisite food, and a warm, welcoming atmosphere.\n\nWe believe that dining is not just about nourishment, but about connection, celebration, and the joy of shared experiences."
  },
  {
    title: "Restaurant Information",
    content: "The French Goat is located at 290 Lafayette St, in the historic downtown district. We are open Wednesday through Sunday for dinner service from 5:00 PM to 10:00 PM and from 11 AM to 2:00 PM for Brunch on Sundays.\n\nThe restaurant features a main dining room with seating for 60 guests, a private dining room for special events, and a seasonal patio with additional seating for 30 guests.\n\nOur dress code is smart casual—no shorts, tank tops, or flip-flops please. We look forward to welcoming every guest to The French Goat and providing you with an unforgettable dining experience."
  },
  {
    title: "Contact and Reservations",
    content: "To make a reservation, please call us at (304) 647-1025 or book online through our website at www.thefrenchgoat.com.\n\nFollow us on social media @the_french_goat for updates on seasonal menus, special events, and promotions."
  }
];

export const GENERAL_INFO_QUIZ: MCQ[] = [
  { q: "Where is The French Goat located?", options: ["123 Main Street, Lewisburg", "290 Lafayette St, Lewisburg", "100 Washington St, Charleston", "500 Elk Ave, Charleston"], correctIndex: 1 },
  { q: "What is the correct phone number for reservations?", options: ["(304) 647-1025", "(555) 123-4567", "(304) 555-1025", "(304) 647-1234"], correctIndex: 0 },
  { q: "What are the restaurant's operating days?", options: ["Tuesday - Sunday", "Wednesday - Sunday", "Wednesday - Saturday", "Thursday - Monday"], correctIndex: 1 },
  { q: "What is the dress code?", options: ["Formal", "Casual", "Smart Casual", "Business Casual"], correctIndex: 2 },
  { q: "When was the restaurant established?", options: ["2010", "2015", "2018", "2020"], correctIndex: 1 },
  { q: "What is the restaurant's social media handle?", options: ["@TheFrenchGoat", "@FrenchGoatWV", "@the_french_goat", "@LewisburgEats"], correctIndex: 2 },
  { q: "What time does dinner service start?", options: ["4:00 PM", "4:30 PM", "5:00 PM", "6:00 PM"], correctIndex: 2 },
  { q: "What is a core part of The French Goat's mission?", options: ["To be the cheapest French restaurant.", "Sourcing the finest local and seasonal ingredients.", "Offering a large menu with many options.", "Providing the fastest service possible."], correctIndex: 1 },
  { q: "How many guests can be seated in the main dining room?", options: ["40", "50", "60", "70"], correctIndex: 2 },
  { q: "Besides the main dining room, what other seating areas are available?", options: ["A rooftop bar and a lounge", "A wine cellar and a ballroom", "A private dining room and a seasonal patio", "Only the main dining room"], correctIndex: 2 }
];

export const SEQUENCE_OF_SERVICE: SequenceStep[] = [
  {
    title: "1. The Art of Hospitality",
    content: "In fine dining, service is not just a process—it's an art form. The art of hospitality is about creating memorable experiences for our guests through attention to detail, anticipation of needs, and genuine warmth.\n\nAs a server at The French Goat, you are an ambassador of our restaurant's values and commitment to excellence. This training will guide you through each step of the service process, ensuring you deliver the exceptional experience our guests expect."
  },
  {
    title: "2. Pre-Service Preparation (Mise en Place)",
    content: "Before guests arrive, thorough preparation is essential. This includes reviewing reservations, studying the menu in detail, checking table settings for cleanliness and proper arrangement, ensuring all service stations are fully stocked, and discussing daily specials with the kitchen team.\n\nA well-prepared server can anticipate guest needs and provide seamless service throughout the meal."
  },
  {
    title: "3. Greeting and Seating",
    content: "The first impression sets the tone for the entire dining experience. Greet guests warmly within 30 seconds of their arrival, make eye contact, and introduce yourself by name.\n\nOffer to take coats if appropriate, and guide them to their table with confidence. Ensure chairs are pulled out for guests and napkins are placed on their laps as they are seated."
  },
  {
    title: "4. Presenting Menus & Taking Beverage Orders",
    content: "Present menus with care, opening them to the first page and placing them in front of each guest. Allow guests time to review the menu before approaching for beverage orders.\n\nWhen taking orders, stand to the right of the guest, recommend specials with enthusiasm, and repeat orders back for confirmation. Knowledge of our wine list is essential for proper recommendations."
  },
  {
    title: "5. Appetizer and Entrée Orders",
    content: "After guests have had time with their beverages, approach to take appetizer and entrée orders. Be prepared to answer detailed questions about ingredients, preparation methods, and potential allergens.\n\nSuggest wine pairings that complement their menu choices. Enter orders accurately into the POS system and communicate any special requests clearly to the kitchen."
  },
  {
    title: "6. Food Service and Table Maintenance",
    content: "When serving food, approach from the left and serve from the right whenever possible. Announce each dish as it's placed on the table, ensuring the correct guest receives their order.\n\nMaintain proper table clearance throughout the meal, removing empty plates and replacing utensils as needed. Monitor beverage levels and offer refills before glasses are empty."
  },
  {
    title: "7. Check-Back and Guest Satisfaction",
    content: "Perform a timely check-back after guests have begun their entrées—typically 2-3 minutes after serving. Inquire about their satisfaction with the meal and address any concerns immediately.\n\nThis is also an opportunity to suggest additional items such as sides, sauces, or wine pairings that might enhance their dining experience."
  },
  {
    title: "8. Dessert, Coffee, and After-Dinner Drinks",
    content: "When guests have finished their main course, present the dessert menu with enthusiasm. Describe desserts in appealing detail, highlighting ingredients and preparation methods.\n\nOffer coffee and after-dinner drink options, including our selection of digestifs and premium spirits. Take dessert orders with the same attention to detail as previous courses."
  },
  {
    title: "9. Presenting the Check and Farewell",
    content: "Present the check only when requested or when it's clear the meal has concluded. Place it in a clean check presenter. Thank guests sincerely for dining with us and invite them to return.\n\nAs they leave, express appreciation once more and offer assistance with coats or directions if needed."
  },
  {
    title: "10. Post-Service Duties",
    content: "After guests depart, promptly clear and reset tables according to restaurant standards. Complete all side work assigned, including polishing silverware, folding napkins, and restocking stations.\n\nParticipate in end-of-shift meetings to discuss service successes and areas for improvement. Continuous learning and refinement of service skills is essential in fine dining."
  }
];

export const SERVICE_QUIZ: MCQ[] = [
  { q: "What is the primary focus of the art of hospitality at The French Goat?", options: ["Quick table turnover", "Creating memorable guest experiences", "Upselling expensive items", "Following strict service protocols"], correctIndex: 1 },
  { q: "How long should a guest wait before being greeted upon arrival?", options: ["Immediately", "Within 30 seconds", "Within 1 minute", "Within 2 minutes"], correctIndex: 1 },
  { q: "When taking beverage orders, where should you position yourself relative to the guest?", options: ["Directly in front of the guest", "To the left of the guest", "To the right of the guest", "Behind the guest"], correctIndex: 2 },
  { q: "When should you perform a check-back after guests have begun their entrées?", options: ["Immediately after serving", "1 minute after serving", "2-3 minutes after serving", "5 minutes after serving"], correctIndex: 2 },
  { q: "When serving food, from which side should you generally approach the guest?", options: ["Always from the right", "Always from the left", "Approach from the left and serve from the right", "Approach from the right and serve from the left"], correctIndex: 2 },
  { q: "What does 'Mise en Place' refer to in the context of service?", options: ["The final check presentation", "The guest seating chart", "Pre-service preparation and station stocking", "The dessert menu"], correctIndex: 2 },
  { q: "What is a key action during the 'Greeting and Seating' step?", options: ["Asking for the order immediately", "Placing napkins on guests' laps", "Presenting the check", "Rushing them to the table"], correctIndex: 1 },
  { q: "What should be done with special requests or allergies when taking an order?", options: ["Ignored if they seem minor", "Communicated clearly to the kitchen", "Handled by the server alone", "Discouraged"], correctIndex: 1 },
  { q: "When is the most appropriate time to present the check?", options: ["As soon as the main course is cleared", "With the dessert menu", "Only when requested or the meal has clearly concluded", "Five minutes after dessert is served"], correctIndex: 2 },
  { q: "What is an important post-service duty?", options: ["Leaving immediately after your last table pays", "Completing all assigned side work", "Discussing tips with other servers", "Taking a break"], correctIndex: 1 }
];

export const CULINARY_TERMS: Term[] = [
  { term: "Almondine", pronunciation: "ahl-mon-DEEN", definition: "A garnish of almonds, usually cooked with butter and seasonings, then sprinkled with whole or flaked, toasted almonds." },
  { term: "Arugula Pesto", pronunciation: "ah-ROO-guh-lah PEH-stoh", definition: "A sauce made of basil, arugula, garlic confit, pistachios, grated Reggiano cheese and sea salt." },
  { term: "Baby Garbanzo", pronunciation: "BAY-bee gar-BAHN-zo", definition: "A bright yellow legume with a nutty texture and mild flavor, resembling a corn kernel when cooked." },
  { term: "Béarnaise", pronunciation: "bear-NAIZ", definition: "A sauce made of clarified butter, egg yolks, and herbs, traditionally tarragon." },
  { term: "Béchamel", pronunciation: "beh-shah-MEL", definition: "A white sauce made from milk and a roux (flour and butter). A mother sauce of French cuisine." },
  { term: "Beurre Blanc", pronunciation: "burr BLAHNK", definition: "A seasoned butter sauce flavored with white wine, shallots, and vinegar or lemon juice." },
  { term: "Blood Orange", pronunciation: "bluhd OR-inj", definition: "A variety of orange with crimson, almost-blood-colored flesh and a flavor profile that can include notes of raspberry." },
  { term: "Bordelaise Sauce", pronunciation: "bor-duh-LAIZ", definition: "A classic French sauce consisting of stock thickened with roux and flavored typically with red wine and shallots." },
  { term: "Bouillabaisse", pronunciation: "BOO-yuh-bays", definition: "A traditional Provençal fish stew originating from Marseille. Typically made with various fish, shellfish, vegetables, and herbs, flavored with saffron and served with rouille and toast." },
  { term: "Brioche", pronunciation: "BREE-ohsh", definition: "A highly enriched French bread made with eggs and butter. It has a light, fluffy texture and a slightly sweet flavor." },
  { term: "Broccolini", pronunciation: "brok-o-LEE-nee", definition: "A green vegetable similar to broccoli but with smaller florets and longer, thin stalks. A hybrid of broccoli and kai-lan." },
  { term: "Brown Butter", pronunciation: "brown BUT-ter", definition: "Butter that has been heated in a pan until the milk solids turn a light brown color, creating a nutty flavor and aroma." },
  { term: "Brunoise", pronunciation: "broon-WAHZ", definition: "A culinary knife cut in which ingredients are cut into small cubes of 1/8 inch (3mm) on each side." },
  { term: "Celeriac", pronunciation: "seh-LEH-ree-ak", definition: "Also called turnip-rooted celery or knob celery, it is a variety of celery cultivated for its edible roots." },
  { term: "Chanterelle", pronunciation: "shan-tuh-REL", definition: "Trumpet-shaped mushrooms with a mild, nutty flavor and chewy texture, often with an apricot-like aroma." },
  { term: "Chantilly Cream", pronunciation: "shan-TIL-ee kreem", definition: "A sweetened whipped cream, often flavored with vanilla." },
  { term: "Charcuterie", pronunciation: "shar-koo-tuh-REE", definition: "A branch of cooking devoted to prepared meat products, such as bacon, ham, sausage, terrines, pâtés, and confit." },
  { term: "Chasseur Sauce", pronunciation: "shah-SUR", definition: "A simple or compound brown sauce used in French cuisine, often including mushrooms, shallots, tomatoes, and tarragon." },
  { term: "Chiffonade", pronunciation: "shif-oh-NAHD", definition: "A culinary knife cut where leafy greens or herbs are cut into long, thin strips." },
  { term: "Chèvre", pronunciation: "SHEV-ruh", definition: "Goat cheese." },
  { term: "Confit", pronunciation: "kon-FEE", definition: "A cooking technique where food (like duck or garlic) is slowly poached in fat or oil at a low temperature." },
  { term: "Consommé", pronunciation: "kon-soo-MAY", definition: "A clear, strongly flavored soup or broth that has been clarified, often through the use of a raft of egg whites and ground meat." },
  { term: "Crème Anglaise", pronunciation: "krem ahn-GLAIZE", definition: "A light pouring custard made from a mixture of sugar, egg yolks, and hot milk, often flavored with vanilla." },
  { term: "Crème Brûlée", pronunciation: "krem broo-LAY", definition: "A dessert consisting of a rich custard base topped with a layer of hardened caramelized sugar." },
  { term: "Crème Fraîche", pronunciation: "krem FRESH", definition: "A thick, tangy cultured cream with a high fat content. Similar to sour cream but richer and less tangy." },
  { term: "Duxelles", pronunciation: "dooks-ELL", definition: "A finely chopped mixture of mushrooms, onions, shallots, and herbs sautéed in butter until reduced to a paste." },
  { term: "En Croute", pronunciation: "ahn KROOT", definition: "A French term meaning 'in crust,' referring to food wrapped in pastry and baked." },
  { term: "EVOO", pronunciation: "ee-vee-oh-oh", definition: "An acronym for Extra Virgin Olive Oil, the highest quality of olive oil." },
  { term: "Fines Herbes", pronunciation: "feen-Z-ERB", definition: "A classic mixture of herbs used as seasoning or garnish, typically including parsley, chives, tarragon, and chervil." },
  { term: "Flambé", pronunciation: "flahm-BAY", definition: "A cooking procedure in which alcohol is added to a hot pan to create a burst of flames." },
  { term: "Fleur de Sel", pronunciation: "flur duh SEL", definition: "A French gray salt - hand-harvested sea salt collected off the coast of Brittany." },
  { term: "Foie Gras", pronunciation: "fwah GRAH", definition: "The liver of a specially fattened duck or goose. It is a rich, buttery delicacy." },
  { term: "Frisée", pronunciation: "free-ZAY", definition: "Curly leaves of baby endive lettuce with a slightly bitter taste." },
  { term: "Frites", pronunciation: "FREET", definition: "French fries." },
  { term: "Gelee", pronunciation: "zhuh-LAY", definition: "A firm jelly made with different spices and flavorings, often from stock." },
  { term: "Julienne", pronunciation: "joo-lee-EN", definition: "A culinary knife cut in which food items are cut into long thin strips, like matchsticks." },
  { term: "Mirepoix", pronunciation: "meer-PWAH", definition: "A flavor base made from diced vegetables cooked slowly with butter or oil. The traditional French mirepoix consists of two parts onion, one part carrot, and one part celery." },
  { term: "Mousse", pronunciation: "mooss", definition: "A soft prepared food that incorporates air bubbles to give it a light, airy texture. It can be sweet or savory." },
  { term: "Pâté", pronunciation: "pah-TAY", definition: "A mixture of ground meat and fat minced into a spreadable paste." },
  { term: "Ratatouille", pronunciation: "ra-tuh-TOO-ee", definition: "A traditional Provençal stewed vegetable dish originating from Nice." },
  { term: "Rouille", pronunciation: "ROO-ee", definition: "A sauce that consists of olive oil with breadcrumbs, garlic, saffron, and chili peppers. It is traditionally served with fish soup." },
  { term: "Soubise", pronunciation: "soo-BEEZ", definition: "A thick white sauce or puree made with onions and Béchamel or cream." },
];

export const TERMS_QUIZ: MCQ[] = [
  { q: "What is 'Beurre Blanc'?", options: ["A red wine reduction sauce", "A seasoned butter sauce with white wine and shallots", "A type of sweet pastry cream", "A clarified chicken broth"], correctIndex: 1 },
  { q: "What is 'Charcuterie' primarily focused on?", options: ["Artisanal cheeses", "Prepared meat products", "Vegetable carving", "Bread baking"], correctIndex: 1 },
  { q: "The term 'Confit' describes a method of cooking in what?", options: ["Water or stock", "Fat or oil", "Wine or vinegar", "Direct heat or flame"], correctIndex: 1 },
  { q: "What are 'Frites'?", options: ["A type of small green bean", "A garnish of fresh herbs", "French fries", "A kind of mushroom"], correctIndex: 2 },
  { q: "What is 'Foie Gras'?", options: ["A type of French cheese", "The liver of a fattened duck or goose", "A cut of beef tenderloin", "A seafood stew"], correctIndex: 1 },
  { q: "What is the primary ingredient in a 'Duxelles'?", options: ["Carrots", "Onions", "Mushrooms", "Tomatoes"], correctIndex: 2 },
  { q: "The knife cut 'Julienne' results in what shape?", options: ["Small cubes", "Thin rounds", "Long thin strips (matchsticks)", "Large wedges"], correctIndex: 2 },
  { q: "What is 'Chèvre'?", options: ["Cow cheese", "Sheep cheese", "A type of cured sausage", "Goat cheese"], correctIndex: 3 },
  { q: "A 'Soubise' is a sauce or puree made primarily with which vegetable?", options: ["Celery", "Onions", "Leeks", "Garlic"], correctIndex: 1 },
  { q: "What is 'Crème Anglaise'?", options: ["A thick baking cream", "A light pouring custard", "A savory herb sauce", "A type of sour cream"], correctIndex: 1 }
];

export const MENU_KNOWLEDGE_PAGES: InfoPage[] = [
  {
    title: "Dinner: Petite Plates & Salads",
    content: "Our dinner service begins with a selection of refined small plates and fresh salads.\n\n**Petite Plates**\n*   **Oysters on the Halfshell ($19)**: Half dozen seasonal oysters.\n*   **Roasted Cauliflower & Tahini Dip ($16)**: with sesame sumac vinaigrette, shaved vegetables, assorted local breads and crackers.\n*   **Tarte Flambée ($16)**: Gallucci Family Farm naan with crème fraîche, smoked bacon, and onion.\n*   **Lump Crab & Macaroni Gratin ($22)**: with caper-lemon béchamel, sharp cheddar, gruyère, and parmesan.\n*   **Sautéed Mussels Mouclade ($16)**: with leek, white wine, saffron, curry, crème fraîche, and grilled baguette.\n*   **Selection of Cheeses ($19)**: Three artisan cheeses with marcona almonds, dried fruit, and local honey.\n*   **Escargot Traditional ($15)**: with lemon parsley garlic butter and grilled bread.\n\n**Salad and Soup**\n*   **Onion Soup ($12)**: with crostini, gruyère, and baby swiss.\n*   **Soup of the Day ($12)**: Chef's daily crafted soup.\n*   **House Green Salad ($12)**: Clean Acres Farm artisan mix, radish, shaved golden beet, rainbow carrot, cucumber, sunflower seeds, dijon vinaigrette. Add blue cheese or goat cheese $3, add bacon $3.\n*   **Endive Salad ($14)**: Belgian endive, radicchio, frisée, pan-fried croutons, anchovy, shaved parmesan, lemon-garlic vinaigrette. Add chicken $16, add steak $24."
  },
  {
    title: "Dinner: Main Courses",
    content: "Our main courses showcase classic French techniques with high-quality ingredients.\n\n**Pan Seared Salmon ($44)**: with parsnip-green grape purée, haricots verts, golden raisins, verjus, sourdough crouton, and caper brown butter.\n\n**Roasted Root Vegetable Risotto ($35)**: with celeriac apple slaw, pecorino, sage, and brown butter.\n\n**French Goat Burger ($22)**: A blend of ground short rib and tenderloin with Cabot sharp cheddar, bacon jam, pickled shallots, whole grain mustard aioli, arugula, on a local asiago bun with truffle fries.\n\n**Steak Frites**: Coulotte Sirloin ($38) or Tenderloin of Beef ($62) with truffle marrow butter, truffle frites, and malt vinegar aioli.\n\n**Duck Leg Confit ($36)**: with braised red cabbage, marrow beans, pickled green apple, and mustard-cider duck jus.\n\n**Pan Roasted Chicken Breast ($36)**: Joyce Farms chicken breast with whipped potato subise, roasted baby carrots, glazed turnips, and creamy porcini-madeira chicken jus.\n\n**Tuna Niçoise Salad ($33)**: Salad of seared ahi tuna, baby greens, haricot verts, boiled egg, sundried tomato, roasted fingerlings, calamata olives, and balsamic vinaigrette."
  },
  {
    title: "Brunch: Starters & Egg Specialties",
    content: "Brunch at The French Goat is a weekend highlight, featuring both light starters and classic egg dishes.\n\n**Starters**\n*   **Bread Basket ($12)**: A basket of freshly baked croissant, pastry, and chocolate croissant.\n*   **Onion Soup ($12)**: with crostini, gruyère, and baby swiss.\n*   **Soup of the Day ($11)**: Chef's soup of the day.\n*   **Oysters on the Halfshell ($19)**: Half dozen seasonal oysters.\n*   **Sautéed Mussels Mouclade ($16)**: with leek, white wine, saffron, curry, crème fraîche, and grilled baguette.\n*   **Roasted Red Pepper & Walnut Dip ($16)**: with sheep's milk feta, assorted local breads and crackers.\n*   **Escargot Traditional ($15)**: with lemon parsley garlic butter and grilled bread.\n*   **Lump Crab & Macaroni Gratin ($18)**: with caper-lemon béchamel, sharp cheddar, gruyère, and parmesan.\n\n**Egg Specialties**\n*   **House Omelet ($15)**: Chef's seasonal omelet.\n*   **House Quiche ($14)**: Quiche of the day, served with salad or frites."
  },
  {
    title: "Brunch: Main Dishes & Salads",
    content: "Our brunch mains offer hearty and flavorful options to satisfy any appetite.\n\n**Crafted Main Dishes**\n*   **Croque Madame ($16)**: Brioche bread, country ham, gruyère cheese, mornay sauce, fried hen egg, with petite salad or frites.\n*   **French Toast ($15)**: Griddled sourdough with house-made ricotta, bacon, and maple syrup.\n*   **Baked Eggs Florentine ($17)**: Sautéed spinach, poached eggs, sauce mornay, shaved parmesan, with petite salad.\n*   **Eggs Benedict ($18)**: Toasted croissants, poached eggs, country ham, sauce hollandaise, with potato hash.\n*   **French Goat Burger ($21)**: Blend of ground short rib and tenderloin with Cabot sharp cheddar, bacon jam, pickled shallots, whole grain mustard aioli, arugula, local asiago bun, truffle fries.\n*   **Steak and Eggs ($24)**: Chargrilled coulotte sirloin with sunny side eggs and sweet potato hash.\n*   **Chef's Plat du Jour ($16)**: Our daily specialty.\n\n**Salads**\n*   **House Green Salad ($12)**: Clean Acres Farm artisan salad mix with dijon vinaigrette. Add blue cheese or goat cheese $3, add bacon $3.\n*   **Salad Lyonnaise ($14)**: Frisée, poached egg, bacon lardons, pan-fried croutons, dijon vinaigrette.\n*   **Tuna Niçoise ($33)**: Seared ahi tuna, haricot verts, hard egg, fingerlings, olives, baby greens, balsamic vinaigrette."
  },
  {
    title: "Sides & Desserts",
    content: "Enhance your meal with one of our delicious sides, and don't forget to save room for dessert.\n\n**Sides (Dinner)**\n*   **Truffle Frites ($10)**: with truffle parmesan aioli.\n*   **Braised Red Cabbage ($9)**\n*   **Roasted Baby Carrots ($12)**\n*   **Whipped Potato Subise ($10)**\n\n**Sides (Brunch)**\n*   **Truffle Frites ($8)**\n*   **Arbaugh Farms Cheese Grits ($7)**\n*   **Potato Hash ($6)**\n\n**Desserts**\n*   **Crème Brûlée ($10)**: Chef's daily classic crème brûlée.\n*   **Chocolate Mousse ($10)**: Rich chocolate mousse with whipped cream."
  },
  {
    title: "Beverages",
    content: "We offer a selection of non-alcoholic beverages and beers to complement your meal.\n\n**Non-Alcoholic**\n*   **Seasonal Mocktail ($8)**\n*   **Coca Cola ($3)**\n*   **Diet Coke ($3)**\n*   **Sprite ($3)**\n*   **Lemonade ($3)**\n\n**Beer Selection**\n*   **Bud Light ($5)**\n*   **Michelob Ultra ($5)**\n*   **Stella Artois ($7)**\n*   **Devil's Anse IPA ($7)**\n*   **Wild Trail Pale Ale ($7)**\n*   **Mothman Black IPA ($7)**\n*   **Heineken Zero (Non-Alcoholic) ($6)**"
  }
];



export const WINE_KNOWLEDGE_PAGES: InfoPage[] = [
  {
    title: "Wine Philosophy",
    content: "At The French Goat, we believe that wine is an essential component of the dining experience, capable of enhancing food flavors and creating memorable moments.\n\nOur wine program is built on three pillars: quality, diversity, and education. We source our wines from reputable producers who share our commitment to craftsmanship and sustainability. Our list features a carefully curated selection of French wines alongside international offerings."
  },
  {
    title: "French Wine Regions",
    content: "Our wine list showcases the diversity of France's renowned wine regions. From Burgundy, we offer elegant Pinot Noirs and Chardonnays that reflect their unique terroir. Our Bordeaux selection includes both Left Bank Cabernet Sauvignon-dominant blends and Right Bank Merlot-based wines.\n\nThe Loire Valley is represented with crisp Sauvignon Blancs and elegant Chenin Blancs. From the Rhône Valley, we feature both Northern Rhône Syrahs and Southern Rhône blends."
  },
];

export const MENU_QUIZ: MCQ[] = [
  { q: 'What accompanies the Seared Hamachi?', options: ['Lemon parsley garlic butter', 'Harissa aioli, pickled fennel, navel orange', 'Sultana chutney', 'Sheep\'s milk feta'], correctIndex: 1 },
  { q: 'What are the main components of the Duck Leg Confit?', options: ['Potato pave and asparagus', 'Truffle fries and aioli', 'Braised lentils, frisée, carrot-lemongrass coulis', 'Heirloom tomatoes and pecorino'], correctIndex: 2 },
  { q: 'Which side is available at brunch but NOT dinner?', options: ['Truffle Frites', 'Fondant Potatoes', 'Arbaugh Farms Cheese Grits', 'Glazed Asparagus'], correctIndex: 2 },
  { q: 'What is served with the French Toast?', options: ['Berries and whipped cream', 'House-made ricotta, bacon, maple syrup', 'Fried chicken', 'Caramelized bananas'], correctIndex: 1 },
  { q: 'The Croque Madame is topped with what type of egg?', options: ['Poached', 'Scrambled', 'Fried hen egg', 'Boiled'], correctIndex: 2 },
  { q: 'What sauce is served with traditional Eggs Benedict?', options: ['Mornay', 'Béarnaise', 'Velouté', 'Hollandaise'], correctIndex: 3 },
  { q: 'What type of steak is used for Steak Frites?', options: ['Ribeye', 'Filet Mignon', 'Coulotte', 'New York Strip'], correctIndex: 2 },
  { q: 'The Sautéed Mussels Mouclade includes which spice that gives it warmth?', options: ['Paprika', 'Curry', 'Cumin', 'Turmeric'], correctIndex: 1 },
  { q: 'Where does The French Goat source its chicken from?', options: ['Tyson Farms', 'Perdue', 'Joyce Farms', 'Bell & Evans'], correctIndex: 2 },
  { q: 'Which local farm provides our stone-ground grits?', options: ['Smith Creek Farm', 'Arbaugh Farms', 'Mountain Valley', 'Green Valley'], correctIndex: 1 }
];

export const WINE_QUIZ: MCQ[] = [
  { q: 'Where does Montand Brut Rosé come from?', options: ['Bordeaux', 'Cotes du Jura', 'Napa Valley', 'Loire Valley'], correctIndex: 1 },
  { q: 'What does "Blanc de Blancs" mean?', options: ['White from red grapes', 'White from white grapes', 'Red from white grapes', 'Red from red grapes'], correctIndex: 1 },
  { q: 'Which region is famous for the Fleurs de Prairie rosé style?', options: ['Bordeaux', 'Provence', 'Champagne', 'Marlborough'], correctIndex: 1 },
  { q: 'DAOU Vineyards is located in which California region?', options: ['Napa Valley', 'Sonoma Coast', 'Paso Robles', "Santa Barbara"], correctIndex: 2 },
  { q: 'Belle Glos is known for what type of wine?', options: ['Chardonnay', 'Cabernet Sauvignon', 'Pinot Noir', 'Sauvignon Blanc'], correctIndex: 2 },
  { q: 'Which country produces Catena Malbec?', options: ['France', 'Spain', 'Argentina', 'Chile'], correctIndex: 2 },
  { q: 'Ken Wright Cellars produces Pinot Noir from which state?', options: ['California', 'Washington', 'Oregon', 'New York'], correctIndex: 2 },
  { q: 'What would you pair with oysters from our wine list?', options: ['Catena Malbec', 'Rubus Blanc de Blancs', 'Belle Glos Pinot Noir', 'DAOU Cabernet'], correctIndex: 1 },
  { q: 'A guest orders the Duck Confit. Which wine would be the BEST recommendation?', options: ['Dom. Paul Buisse Sauvignon Blanc', 'Louis Jadot Chorey-Les-Beaune', 'Montand Brut Rosé', 'DAOU Chardonnay'], correctIndex: 1 }
];

// ... existing exports ...

export const FINE_DINING_QUIZ: MCQ[] = [
  { q: "Where should you place a guest's napkin if they leave the table temporarily?", options: ["On the table", "On their chair seat or arm", "Take it to the kitchen", "Fold it into a swan"], correctIndex: 1 },
  { q: "What is the 'Sullivan Nod'?", options: ["A way to signal the kitchen", "A slight nod while suggesting an item to encourage agreement", "A bow to the guest upon arrival", "Shaking your head to indicate an item is 86'd"], correctIndex: 1 },
  { q: "When pouring wine, who should be served first?", options: [" The host", "The men", "The ladies", "Whoever is closest"], correctIndex: 2 },
  { q: "What should you do if a guest drops their napkin?", options: ["Pick it up and put it back on the table", "Ignore it until the end of the meal", "Pick it up and provide a fresh one immediately", "Kick it under the table"], correctIndex: 2 },
  { q: "How much wine should be poured for the initial taste for the host?", options: ["Half a glass", "1 ounce", "3 ounces", "A full glass"], correctIndex: 1 }
];

const allQuestions = [
  ...GENERAL_INFO_QUIZ,
  ...SERVICE_QUIZ,
  ...TERMS_QUIZ,
  ...MENU_QUIZ,
  ...WINE_QUIZ,
  ...FINE_DINING_QUIZ,
];

// Simple shuffle function for arrays
const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  let currentIndex = arr.length;
  let randomIndex: number;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }
  return arr;
};

export const FINAL_EXAM_QUESTIONS: MCQ[] = shuffleArray([...allQuestions]);

// Section IDs for progress tracking
export const SECTION_IDS = [
  'general-info',
  'general-info-quiz',
  'sequence-of-service',
  'service-quiz',
  'culinary-terms',
  'terms-quiz',
  'menu-knowledge',
  'menu-quiz',
  'wine-knowledge',
  'wine-quiz',
  'fine-dining-etiquette',
  'fine-dining-quiz',
  'final-exam'
] as const;

export type SectionId = typeof SECTION_IDS[number];
