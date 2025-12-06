
import type { InfoPage, SequenceStep, Term, MCQ } from './types';

export const IMAGE_MAP = {
  generalInfo: [
    "https://storage.googleapis.com/user-assets.aistudio.google.com/15235ac9-f628-444f-b67f-c02dc215c290", // Welcome (Dining Room)
    "https://storage.googleapis.com/user-assets.aistudio.google.com/15235ac9-f628-444f-b67f-c02dc215c290", // Mission (Dining Room)
    "https://storage.googleapis.com/user-assets.aistudio.google.com/15235ac9-f628-444f-b67f-c02dc215c290", // Info (Dining Room)
    "https://storage.googleapis.com/user-assets.aistudio.google.com/15235ac9-f628-444f-b67f-c02dc215c290", // Contact (Dining Room)
  ],
  sequencePages: [
    "https://storage.googleapis.com/user-assets.aistudio.google.com/15235ac9-f628-444f-b67f-c02dc215c290", // 1. Hospitality
    "https://storage.googleapis.com/user-assets.aistudio.google.com/15235ac9-f628-444f-b67f-c02dc215c290", // 2. Preparation
    "https://storage.googleapis.com/user-assets.aistudio.google.com/15235ac9-f628-444f-b67f-c02dc215c290", // 3. Seating
    "https://storage.googleapis.com/user-assets.aistudio.google.com/f045b85e-f55a-464a-ad1b-1a0701b7e416", // 4. Beverages
    "https://storage.googleapis.com/user-assets.aistudio.google.com/7b7d7213-9a3d-4c3e-8621-e0f3404c085b", // 5. Appetizers
    "https://storage.googleapis.com/user-assets.aistudio.google.com/970868f0-1090-4131-b924-118006e89cd3", // 6. Food Service
    "https://storage.googleapis.com/user-assets.aistudio.google.com/15235ac9-f628-444f-b67f-c02dc215c290", // 7. Check-Back
    "https://storage.googleapis.com/user-assets.aistudio.google.com/f045b85e-f55a-464a-ad1b-1a0701b7e416", // 8. After-Dinner Drinks
    "https://storage.googleapis.com/user-assets.aistudio.google.com/15235ac9-f628-444f-b67f-c02dc215c290", // 9. Farewell
    "https://storage.googleapis.com/user-assets.aistudio.google.com/15235ac9-f628-444f-b67f-c02dc215c290", // 10. Post-Service
  ],
  menuKnowledge: [
    "https://storage.googleapis.com/user-assets.aistudio.google.com/7b7d7213-9a3d-4c3e-8621-e0f3404c085b", // Dinner - Petite Plates
    "https://storage.googleapis.com/user-assets.aistudio.google.com/970868f0-1090-4131-b924-118006e89cd3", // Dinner - Main Courses
    "https://storage.googleapis.com/user-assets.aistudio.google.com/7b7d7213-9a3d-4c3e-8621-e0f3404c085b", // Brunch - Starters & Egg
    "https://storage.googleapis.com/user-assets.aistudio.google.com/970868f0-1090-4131-b924-118006e89cd3", // Brunch - Mains & Salads
    "https://storage.googleapis.com/user-assets.aistudio.google.com/d9492160-c3d3-4911-b75d-639a60e0d5d5", // Desserts & Sides
    "https://storage.googleapis.com/user-assets.aistudio.google.com/f045b85e-f55a-464a-ad1b-1a0701b7e416", // Beverages
  ],
  wineKnowledge: [
      "https://storage.googleapis.com/user-assets.aistudio.google.com/f045b85e-f55a-464a-ad1b-1a0701b7e416", // Wine Philosophy
      "https://storage.googleapis.com/user-assets.aistudio.google.com/f045b85e-f55a-464a-ad1b-1a0701b7e416", // French Wine Regions
      "https://storage.googleapis.com/user-assets.aistudio.google.com/f045b85e-f55a-464a-ad1b-1a0701b7e416", // Sparkling & Rose
      "https://storage.googleapis.com/user-assets.aistudio.google.com/f045b85e-f55a-464a-ad1b-1a0701b7e416", // White Wines
      "https://storage.googleapis.com/user-assets.aistudio.google.com/f045b85e-f55a-464a-ad1b-1a0701b7e416", // Red Wines - Pinot Noir
      "https://storage.googleapis.com/user-assets.aistudio.google.com/f045b85e-f55a-464a-ad1b-1a0701b7e416", // Red Wines - Bordeaux & Other
  ],
  fallback: "https://storage.googleapis.com/user-assets.aistudio.google.com/a823b160-2580-48e0-a7d1-e6c1a85c7c13",
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
    { q: "Where is The French Goat located?", options: [ "123 Main Street, Lewisburg", "290 Lafayette St, Lewisburg", "100 Washington St, Charleston", "500 Elk Ave, Charleston" ], correctIndex: 1 },
    { q: "What is the correct phone number for reservations?", options: [ "(304) 647-1025", "(555) 123-4567", "(304) 555-1025", "(304) 647-1234" ], correctIndex: 0 },
    { q: "What are the restaurant's operating days?", options: [ "Tuesday - Sunday", "Wednesday - Sunday", "Wednesday - Saturday", "Thursday - Monday" ], correctIndex: 1 },
    { q: "What is the dress code?", options: [ "Formal", "Casual", "Smart Casual", "Business Casual" ], correctIndex: 2 },
    { q: "When was the restaurant established?", options: [ "2010", "2015", "2018", "2020" ], correctIndex: 1 },
    { q: "What is the restaurant's social media handle?", options: [ "@TheFrenchGoat", "@FrenchGoatWV", "@the_french_goat", "@LewisburgEats" ], correctIndex: 2 },
    { q: "What time does dinner service start?", options: [ "4:00 PM", "4:30 PM", "5:00 PM", "6:00 PM" ], correctIndex: 2 },
    { q: "What is a core part of The French Goat's mission?", options: [ "To be the cheapest French restaurant.", "Sourcing the finest local and seasonal ingredients.", "Offering a large menu with many options.", "Providing the fastest service possible." ], correctIndex: 1 },
    { q: "How many guests can be seated in the main dining room?", options: [ "40", "50", "60", "70" ], correctIndex: 2 },
    { q: "Besides the main dining room, what other seating areas are available?", options: [ "A rooftop bar and a lounge", "A wine cellar and a ballroom", "A private dining room and a seasonal patio", "Only the main dining room" ], correctIndex: 2 }
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
    { q: "What is the primary focus of the art of hospitality at The French Goat?", options: [ "Quick table turnover", "Creating memorable guest experiences", "Upselling expensive items", "Following strict service protocols" ], correctIndex: 1 },
    { q: "How long should a guest wait before being greeted upon arrival?", options: [ "Immediately", "Within 30 seconds", "Within 1 minute", "Within 2 minutes" ], correctIndex: 1 },
    { q: "When taking beverage orders, where should you position yourself relative to the guest?", options: [ "Directly in front of the guest", "To the left of the guest", "To the right of the guest", "Behind the guest" ], correctIndex: 2 },
    { q: "When should you perform a check-back after guests have begun their entrées?", options: [ "Immediately after serving", "1 minute after serving", "2-3 minutes after serving", "5 minutes after serving" ], correctIndex: 2 },
    { q: "When serving food, from which side should you generally approach the guest?", options: [ "Always from the right", "Always from the left", "Approach from the left and serve from the right", "Approach from the right and serve from the left" ], correctIndex: 2 },
    { q: "What does 'Mise en Place' refer to in the context of service?", options: ["The final check presentation", "The guest seating chart", "Pre-service preparation and station stocking", "The dessert menu"], correctIndex: 2},
    { q: "What is a key action during the 'Greeting and Seating' step?", options: ["Asking for the order immediately", "Placing napkins on guests' laps", "Presenting the check", "Rushing them to the table"], correctIndex: 1},
    { q: "What should be done with special requests or allergies when taking an order?", options: ["Ignored if they seem minor", "Communicated clearly to the kitchen", "Handled by the server alone", "Discouraged"], correctIndex: 1},
    { q: "When is the most appropriate time to present the check?", options: ["As soon as the main course is cleared", "With the dessert menu", "Only when requested or the meal has clearly concluded", "Five minutes after dessert is served"], correctIndex: 2},
    { q: "What is an important post-service duty?", options: ["Leaving immediately after your last table pays", "Completing all assigned side work", "Discussing tips with other servers", "Taking a break"], correctIndex: 1}
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
        content: "Our dinner service begins with a selection of refined small plates and fresh salads.\n\n**Petite Plates**\n*   **Oysters on the Halfshell ($19)**: Half dozen seasonal oysters.\n*   **Roasted Red Pepper & Walnut Dip ($16)**: with sheep's milk feta, assorted local breads and crackers.\n*   **Fig & Chevre Flat Bread ($16)**: Naan with walnut butter, red onion marmalade, kalamata, pecorino, and fig gastrique.\n*   **Seared Hamachi ($22)**: with harissa aioli, pickled fennel, navel orange, and smoked chili oil.\n*   **Sauteed Mussels Mouclade ($16)**: with leek, white wine, saffron, curry, creme fraiche, and grilled baguette.\n*   **Escargot Traditional ($15)**: with lemon parsley garlic butter and grilled bread.\n\n**Salad and Soup**\n*   **Onion Soup ($12)**: with crostini, gruyere, and baby swiss.\n*   **Spring Greens Salad ($12)**: Artisan mix, radish, shaved golden beet, rainbow carrot, cucumber, sunflower seeds, and dijon vinaigrette."
    },
    {
        title: "Dinner: Main Courses",
        content: "Our main courses showcase classic French techniques with high-quality ingredients.\n\n**Pan Seared Salmon ($44)**: Served with corn & fennel veloute, potato pave, haricots vert, citrus braised fennel, and blistered corn relish.\n\n**Heirloom Tomato Risotto ($35)**: with pickled & roasted cherry tomatoes, fromage blanc, pecorino crisp, and basil.\n\n**French Goat Burger ($22)**: A blend of short rib and tenderloin with NY sharp cheddar, crispy pork belly, fried shallot, tomato jam, french onion mayo, on a local asiago bun with truffle fries.\n\n**Steak Frites ($38)**: Sliced coulotte steak with truffle marrow butter, truffle frites, and malt vinegar aioli.\n\n**Duck Leg Confit ($36)**: with cardamom apricot, braised green lentils, warm frisee salad, carrot-lemongrass coulis, and natural jus.\n\n**Pan Roasted Chicken Breast ($36)**: Joyce Farms chicken with a new river mushroom & pearl onion ragout, fondant potatoes, glazed asparagus, and sherry-chicken veloute."
    },
    {
        title: "Brunch: Starters & Egg Specialties",
        content: "Brunch at The French Goat is a weekend highlight, featuring both light starters and classic egg dishes.\n\n**Starters**\n*   **Bread Basket ($12)**: A selection of freshly baked croissant, pastry, and chocolate croissant.\n*   **Oysters on the Halfshell ($19)**\n*   **Roasted Red Pepper & Walnut Dip ($16)**\n\n**Egg Specialties**\n*   **House Omelet ($15)**: A seasonal omelet prepared by the chef.\n*   **House Quiche ($14)**: Quiche of the day, served with a choice of salad or frites.\n*   **Baked Eggs Florentine ($17)**: Sauteed spinach, poached eggs, sauce mornay, shaved parmesan, with a petite salad.\n*   **Eggs Benedict ($18)**: Toasted croissants, poached eggs, country ham, and hollandaise sauce with potato hash."
    },
    {
        title: "Brunch: Main Dishes & Salads",
        content: "Our brunch mains offer hearty and flavorful options to satisfy any appetite.\n\n**Crafted Main Dishes**\n*   **Croque Madame ($16)**: Brioche bread, country ham, gruyere cheese, mornay sauce, and a fried hen egg, with a petite salad or frites.\n*   **French Toast ($15)**: Griddled sourdough with house-made ricotta, bacon, and maple syrup.\n*   **French Goat Burger ($19)**\n*   **Steak and Eggs ($24)**: Chargrilled coulotte sirloin with sunny side eggs and sweet potato hash.\n\n**Salads**\n*   **Salad Lyonnaise ($14)**: Frisee lettuce with a poached egg, bacon lardons, pan-fried croutons, and dijon vinaigrette.\n*   **Tuna Nicoise ($33)**: Seared ahi tuna, haricot verts, hard egg, fingerlings, olives, baby greens, balsamic vinaigrette."
    },
    {
        title: "Sides & Desserts",
        content: "Enhance your meal with one of our delicious sides, and don't forget to save room for dessert.\n\n**Sides (Dinner)**\n*   **Truffle Frites ($9)**\n*   **New River Mushroom & Onion Ragout ($9)**\n*   **Glazed Asparagus ($12)**\n*   **Fondant Potatoes ($10)**\n\n**Sides (Brunch)**\n*   **Truffle Frites ($8)**\n*   **Arbaugh Farms Cheese Grits ($7)**\n*   **Potato Hash ($6)**\n\n**Desserts**\n*   **Creme Brulee ($10)**: Chef's daily classic creme brulee.\n*   **Chocolate Mousse ($10)**: Rich chocolate mousse served with whipped cream."
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
    {
        title: "Sparkling & Rosé Wines",
        content: "**Montand Brut Rosé, Cotes du Jura, France**: This sparkling rosé has flavors of red berries like strawberry and raspberry, with fine bubbles and crisp acidity.\n\n**Rubus, Blanc de Blancs, Brut, France**: A 'white from whites' made from Chardonnay, it has flavors of green apple, pear, and citrus with a touch of brioche and minerality.\n\n**Fleurs de Prairie, Côtes de Provence, France**: A classic Provence rosé with flavors of red berries, hints of citrus, and floral notes. Light, refreshing, and crisp."
    },
    {
        title: "White Wines",
        content: "**Dom. Paul Buisse, Sauvignon Blanc, Touraine, FR**: A crisp and aromatic Sauvignon Blanc from the Loire Valley, with flavors of green apple, citrus, gooseberry, and mineral notes.\n\n**Louis Jadot, Chardonnay, Burgundy, FR**: From a renowned Burgundy producer, expect flavors of green apple, pear, and citrus, with balanced acidity and a touch of oak.\n\n**DAOU Vineyards, Chardonnay, Paso Robles, CA**: A California Chardonnay known for its rich profile of tropical fruits, vanilla, and a creamy texture, balanced by bright acidity."
    },
    {
        title: "Red Wines - Pinot Noir",
        content: "**Belle Glos, Pinot Noir, Balade, Santa Barbara, CA**: Rich and full-bodied for a Pinot Noir, with notes of dark cherry, raspberry, and a hint of vanilla and sweet spice from oak aging.\n\n**Ken Wright Cellars, Pinot Noir, Willamette, OR**: A complex Oregon Pinot with flavors of red and dark fruits like cherry and plum, along with earthy undertones and a touch of spice.\n\n**Louis Jadot, Chorey-Les-Beaune, Burgundy, FR**: A French Pinot Noir with aromas and flavors of red fruits like cherry and raspberry, with hints of earth and mushroom."
    },
    {
        title: "Red Wines - Bordeaux & Other",
        content: "**Chateau Bourdieu-Blaye, Bordeaux, France**: A Merlot-dominant blend from Bordeaux showing flavors of dark fruits like black cherry and plum, with notes of tobacco, cedar, and spices.\n\n**DAOU Vineyards, Cabernet Sauvignon, Paso Robles, CA**: A powerful and expressive Cabernet with flavors of blackcurrant, blackberry, and plum, with a long, elegant finish.\n\n**Catena, Malbec, Mendoza, AR**: A classic Argentinian Malbec known for its rich and complex flavors of blackberry, plum, and dark cherry, with hints of violet and vanilla."
    },
];

export const MENU_QUIZ: MCQ[] = [
    { q: "What accompanies the Seared Hamachi?", options: ["Lemon parsley garlic butter", "Harissa aioli, pickled fennel, navel orange, smoked chili oil", "Sultana chutney and violet mustard", "Sheep's milk feta and crackers"], correctIndex: 1 },
    { q: "What are the main components of the Duck Leg Confit main course?", options: ["Potato pave and glazed asparagus", "Truffle fries and malt vinegar aioli", "Braised green lentils, warm frisee salad, and carrot-lemongrass coulis", "Heirloom tomatoes and pecorino crisps"], correctIndex: 2 },
    { q: "Which of these is a side dish available during Brunch but not Dinner?", options: ["Truffle Frites", "Fondant Potatoes", "Arbaugh Farms Cheese Grits", "Glazed Asparagus"], correctIndex: 2 },
    { q: "What is served with the French Toast for brunch?", options: ["Fresh berries and whipped cream", "House-made ricotta, bacon, and maple syrup", "Fried chicken and gravy", "Caramelized bananas and walnuts"], correctIndex: 1 },
    { q: "The Croque Madame is topped with what kind of egg?", options: ["Poached egg", "Scrambled egg", "Fried hen egg", "Boiled egg"], correctIndex: 2 },
    { q: "What sauce is served with the Eggs Benedict?", options: ["Mornay sauce", "Béarnaise sauce", "Velouté sauce", "Hollandaise sauce"], correctIndex: 3 },
    { q: "Which of the following is NOT a beer we offer?", options: ["Stella Artois", "Corona", "Mothman Black IPA", "Devil's Anse IPA"], correctIndex: 1 },
    { q: "What are the key ingredients in the Salad Lyonnaise?", options: ["Seared tuna and olives", "Artisan greens and shaved beets", "Frisee, poached egg, and bacon lardons", "Romaine, parmesan, and anchovy"], correctIndex: 2 },
    { q: "The dinner version of the French Goat Burger costs $22. What does the brunch version cost?", options: ["$22", "$24", "$19", "$16"], correctIndex: 2 },
    { q: "What kind of potatoes are served with the Pan Roasted Chicken Breast?", options: ["Truffle Frites", "Potato Hash", "Fondant Potatoes", "Potato Pave"], correctIndex: 2 },
];

export const WINE_QUIZ: MCQ[] = [
    { q: "Where does Montand Brut Rosé come from?", options: ["Bordeaux", "Cotes du Jura", "Napa Valley", "Loire Valley"], correctIndex: 1 },
    { q: "What does 'Blanc de Blancs' mean?", options: ["White from red grapes", "White from white grapes", "Red from white grapes", "Red from red grapes"], correctIndex: 1 },
    { q: "Which region is famous for producing dry and aromatic rosé wines like Fleurs de Prairie?", options: ["Bordeaux", "Provence", "Champagne", "Marlborough"], correctIndex: 1 },
    { q: "Domaine Paul Buisse produces a Sauvignon Blanc from which famous French region?", options: ["Cotes du Jura", "Loire Valley", "Napa Valley", "Sonoma County"], correctIndex: 1 },
    { q: "DAOU Vineyards is located in which California AVA?", options: ["Napa Valley", "Sonoma Coast", "Paso Robles", "Santa Barbara"], correctIndex: 2 },
    { q: "Belle Glos is a producer known for what type of wine?", options: ["Chardonnay", "Cabernet Sauvignon", "Pinot Noir", "Sauvignon Blanc"], correctIndex: 2 },
    { q: "Which Argentinian wine is featured on the menu?", options: ["Cabernet Sauvignon", "Pinot Noir", "Torrontés", "Malbec"], correctIndex: 3 },
    { q: "Chateau Bourdieu-Blaye from Bordeaux is a blend dominated by which grape?", options: ["Cabernet Sauvignon", "Merlot", "Cabernet Franc", "Malbec"], correctIndex: 1 },
    { q: "Ken Wright Cellars produces a Pinot Noir from which well-regarded American state?", options: ["California", "Washington", "Oregon", "New York"], correctIndex: 2 },
    { q: "What are the typical tasting notes for Rubus Blanc de Blancs?", options: ["Blackberry and plum", "Green apple and citrus", "Strawberry and raspberry", "Chocolate and vanilla"], correctIndex: 1 }
];

const allQuestions = [
    ...GENERAL_INFO_QUIZ,
    ...SERVICE_QUIZ,
    ...TERMS_QUIZ,
    ...MENU_QUIZ,
    ...WINE_QUIZ,
];

// Simple shuffle function for arrays
const shuffleArray = (array: any[]) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

export const FINAL_EXAM_QUESTIONS: MCQ[] = shuffleArray([...allQuestions]);
