export interface WineItem {
    id: string;
    name: string;
    region: string;
    type: 'Red' | 'White' | 'Sparkling' | 'Rosé';
    description: string;
    price?: string;
    pairing?: string;
    varietal?: string;
}

export const WINES: WineItem[] = [
    // Champagne & Sparkling
    {
        id: 'veuve-clicquot-yellow-label',
        name: "Veuve Clicquot, Yellow Label",
        region: "Reims, FR",
        type: 'Sparkling',
        description: "World-famous, full-bodied, and elegant. Offers notes of brioche, apple, and citrus with persistent, fine bubbles. Our most versatile and celebratory sparkling wine.",
        price: "HB: $68 / B: $109, $172",
        pairing: "Excellent with fried appetizers or any salty, rich food. A perfect match for our Truffle Frites or Oysters on the Halfshell.",
        varietal: "NV Brut Champagne"
    },
    {
        id: 'domaine-carneros-by-taittinger',
        name: "Domaine Carneros by Taittinger",
        region: "Napa, CA",
        type: 'Sparkling',
        description: "Classic French pedigree applied to California fruit. Offers fine bubbles, crisp lemon, green apple, and almond toast. A premium domestic choice.",
        price: "B: $85",
        pairing: "Versatile with seafood, poultry, or as an aperitif. Try it with the Pan Seared Salmon or Pan Roasted Chicken Breast.",
        varietal: "Sparkling Wine"
    },
    {
        id: 'montand-brut-rose',
        name: 'Montand Brut Rosé',
        region: 'Cotes du Jura, FR',
        type: 'Sparkling',
        description: 'A delightful pink sparkler and an affordable alternative to Champagne. Features delicate red berry fruit notes with a fine sparkle and dry finish.',
        price: "G: $10 / B: $29",
        pairing: "Pairs well with light appetizers and fruit. Recommend with the Fig & Chevre Flat Bread.",
        varietal: "NV Sparkling Rosé"
    },
    {
        id: 'rubus-blanc-de-blancs',
        name: 'Rubus, Blanc de Blancs',
        region: 'France',
        type: 'Sparkling',
        description: 'Very dry, crisp, and clean, made entirely from Chardonnay. Offers notes of green apple, citrus, and a hint of toast.',
        price: "G: $9 / B: $29",
        pairing: "Excellent choice for a refreshing aperitif or with our Oysters on the Halfshell.",
        varietal: "NV Sparkling (Chardonnay)"
    },
    {
        id: 'j-vineyards-ca-cuvee',
        name: "J Vineyards, \"CA Cuvée\"",
        region: "Sonoma, CA",
        type: 'Sparkling',
        description: "An excellent, high-quality, local sparkling option. It's bright and lively with flavors of pear and citrus, delivering great complexity.",
        price: "G: $16 / B: $65",
        pairing: "Good with lightly fried food or creamy sauces. Suggest with the Truffle Frites or Sauteed Mussels.",
        varietal: "Sparkling Wine"
    },

    // Rosé
    {
        id: 'fleurs-de-prairie-rose',
        name: "Fleurs de Prairie Rosé",
        region: "Côtes de Provence, FR",
        type: 'Rosé',
        description: "Quintessential, pale, dry Rosé from the South of France. Offers refreshing notes of watermelon and peach. Perfect for light appetizers and sunshine.",
        price: "G: $12 / B: $35",
        pairing: "Ideal with salads, charcuterie, or grilled fish. Pairs beautifully with our Spring Greens Salad or Seared Hamachi.",
        varietal: "Provençal Rosé"
    },
    {
        id: 'whispering-angel-rose',
        name: "Whispering Angel Rosé",
        region: "Provence, FR",
        type: 'Rosé',
        description: "The benchmark of luxury Rosé, extremely pale, dry, and delicate. It carries complex, subtle flavors of redcurrant and rose petal.",
        price: "B: $56",
        pairing: "Pairs well with light poultry and grilled shrimp. An excellent choice for the Pan Roasted Chicken Breast.",
        varietal: "Provençal Rosé"
    },
    {
        id: 'louis-jadot-rose',
        name: "Louis Jadot, Rosé",
        region: "Bourgogne, FR",
        type: 'Rosé',
        description: "A more restrained, structured Rosé made from Pinot Noir. Notes of wild cherry, cranberry, and earthiness.",
        price: "B: $24",
        pairing: "Pairs well with poultry and heartier fare, like the Pan Roasted Chicken Breast or even the French Goat Burger.",
        varietal: "Pinot Noir Rosé"
    },

    // White Wines
    {
        id: 'rombauer-sauvignon-blanc',
        name: "Rombauer, Sauvignon Blanc",
        region: "Napa Valley, CA",
        type: 'White',
        description: "A bolder, fruit-forward style. Rich, offering vibrant flavors of ripe grapefruit, nectarine, and tropical fruit with a creamy texture.",
        price: "B: $57",
        pairing: "Best with spicy dishes or creamy seafood preparations, such as our Sauteed Mussels Mouclade with its curry and creme fraiche sauce.",
        varietal: "Sauvignon Blanc"
    },
    {
        id: 'domaine-thomas-sancerre',
        name: "Domaine Thomas, Sancerre",
        region: "Sancerre, FR",
        type: 'White',
        description: "Definitive, mineral-driven French style. Bone-dry, zesty, with high acidity and notes of lime and crushed stone.",
        price: "B: $59",
        pairing: "Classic pairing for Goat Cheese and white fish. A great recommendation for the Fig & Chevre Flat Bread or the Pan Seared Salmon.",
        varietal: "Sauvignon Blanc"
    },
    {
        id: 'duckhorn-chardonnay',
        name: "Duckhorn, Chardonnay",
        region: "Napa, CA",
        type: 'White',
        description: "A recognizable and popular Napa Chardonnay. Medium-full bodied with notes of ripe pear, apple, and a delicate touch of vanilla from oak aging.",
        price: "HB: $29 / B: $59",
        pairing: "Excellent with roasted chicken or shellfish in butter/cream sauces. Suggest with the Pan Roasted Chicken Breast.",
        varietal: "Chardonnay (Oaked)"
    },
    {
        id: 'maison-shaps-meursault',
        name: "Maison Shaps, Meursault",
        region: "Burgundy, FR",
        type: 'White',
        description: "Our most luxurious white wine and a splurge from Burgundy. Full-bodied and rich, with complex notes of buttered toast and honeyed stone fruit.",
        price: "B: $223",
        pairing: "Requires rich dishes like scallops or lobster. A special occasion pairing for the Pan Roasted Chicken Breast.",
        varietal: "Chardonnay (Oaked)"
    },
    {
        id: 'paul-buisse-sauvignon-blanc',
        name: "Paul Buisse, Sauvignon Blanc",
        region: "Touraine, FR",
        type: 'White',
        description: "Crisp, dry, and mineral-driven. Zesty grapefruit, green apple, and \"cut grass\" notes. The benchmark, lean, and refreshing style.",
        price: "G: $11 / B: $41",
        pairing: "Classic pairing for Goat Cheese and light seafood. Perfect with the Fig & Chevre Flat Bread or the Spring Greens Salad.",
        varietal: "Sauvignon Blanc"
    },
    {
        id: 'branger-muscadet-terroir-moutons',
        name: "Branger, Muscadet, \"Terroir Moutons\"",
        region: "France",
        type: 'White',
        description: "Bone-dry and lean with prominent saline/oceanic minerality. Features light citrus notes and a slightly yeasty texture.",
        price: "B: $42",
        pairing: "The ultimate pairing for Oysters or raw bar items. Our number one recommendation for Oysters on the Halfshell.",
        varietal: "Melon de Bourgogne"
    },
    {
        id: 'solena-pinot-gris',
        name: "Soléna, Pinot Gris",
        region: "Willamette Valley, OR",
        type: 'White',
        description: "Richer than Pinot Grigio, offering flavors of pear, white peach, and mild spice. It has a slightly textured mouthfeel and moderate acidity.",
        price: "B: $49",
        pairing: "Great with spicy Asian cuisine or creamy poultry dishes. Try with the Pan Roasted Chicken Breast or Seared Hamachi.",
        varietal: "Pinot Gris"
    },
    {
        id: 'alain-de-la-treille-vouvray',
        name: "Alain de la Treille, Vouvray",
        region: "Loire Valley, FR",
        type: 'White',
        description: "A balance of sweetness (off-dry) and acidity. Features beautiful flavors of quince, honeycomb, and baked apple.",
        price: "G: $10 / B: $37",
        pairing: "Excellent with spicy dishes or light desserts. A great match for the Seared Hamachi with harissa aioli.",
        varietal: "Chenin Blanc"
    },
    {
        id: 'perrin-reserve-cotes-du-rhone',
        name: "Perrin, Reserve, Cotes du Rhone",
        region: "Rhone, FR",
        type: 'White',
        description: "A fuller-bodied white with low acidity. Features notes of honeysuckle, white peach, and fennel.",
        price: "B: $34",
        pairing: "Pair with richer chicken dishes or vegetable tagines. A good pairing for the Pan Roasted Chicken Breast.",
        varietal: "Rhône White Blend"
    },
    {
        id: 'chateau-peyrat-graves-blanc',
        name: "Chateau Peyrat, Graves Blanc",
        region: "Bordeaux, FR",
        type: 'White',
        description: "Dry, aromatic Bordeaux white. Features notes of grapefruit, passionfruit, and a hint of oak/waxiness from the Semillon.",
        price: "B: $41",
        pairing: "Ideal with smoked salmon or grilled poultry. Suggest with the Pan Roasted Chicken Breast.",
        varietal: "Sauvignon Blanc/Sémillon"
    },
    {
        id: 'maison-shaps-bouzeron-les-clos-aligote',
        name: "Maison Shaps, Bouzeron, Les Clos, Aligote",
        region: "Burgundy, FR",
        type: 'White',
        description: "Aligoté is a lean, highly acidic grape. Offers racy notes of lemon, lime, and pronounced minerality.",
        price: "B: $85",
        pairing: "Excellent with salty foods and rich, fatty fish. A great match for the Pan Seared Salmon.",
        varietal: "Aligoté"
    },
    {
        id: 'dom-louis-moreau-petit-chablis',
        name: "Dom. Louis Moreau, Petit Chablis",
        region: "Burgundy, FR",
        type: 'White',
        description: "Unoaked Chardonnay from the northernmost area of Burgundy. Extremely crisp and mineral-driven with notes of green apple and sea salt.",
        price: "B: $46",
        pairing: "Pairs perfectly with shellfish and raw preparations. Excellent with Oysters on the Halfshell.",
        varietal: "Chardonnay (Unoaked)"
    },
    {
        id: 'barboursville-chardonnay',
        name: "Barboursville, Chardonnay",
        region: "Virginia, USA",
        type: 'White',
        description: "A well-balanced domestic Chardonnay, offering a nice mix of freshness and light oak influence (pear, citrus, hint of vanilla).",
        price: "B: $34",
        pairing: "Versatile pairing for appetizers and simple poultry, like the Pan Roasted Chicken Breast.",
        varietal: "Chardonnay (Balanced)"
    },
    {
        id: 'sylvaine-and-alain-normand-pouilly-fuisse',
        name: "Sylvaine & Alain Normand, Pouilly-Fuissé",
        region: "Burgundy, FR",
        type: 'White',
        description: "A high-quality Chardonnay from the Mâcon region. Exhibits richer stone fruit (peach) and floral notes with elegant, subtle oak.",
        price: "B: $119",
        pairing: "Pair with rich white meats and vegetable gratins. A fine choice for the Pan Roasted Chicken Breast.",
        varietal: "Chardonnay (Oaked)"
    },
    {
        id: 'cave-de-lugny-macon-lugny',
        name: "Cave de Lugny, Macon Lugny",
        region: "Burgundy, FR",
        type: 'White',
        description: "Unoaked Chardonnay; light-bodied and refreshing. Features notes of green apple and citrus with a clean, brisk finish.",
        price: "B: $39",
        pairing: "A great choice for simple seafood or salads, like our Seared Hamachi or Spring Greens Salad.",
        varietal: "Chardonnay (Unoaked)"
    },
    {
        id: 'michael-shaps-chardonnay-wild-mtn-vin',
        name: "Michael Shaps Chardonnay, Wild Mtn. Vin.",
        region: "Virginia, USA",
        type: 'White',
        description: "A full-bodied, rich domestic Chardonnay with noticeable oak influence. Features deep notes of butterscotch and ripe pear.",
        price: "B: $73",
        pairing: "Best with creamy pasta dishes or roasted pork. Would stand up to the Heirloom Tomato Risotto.",
        varietal: "Chardonnay"
    },
    {
        id: 'louis-jadot-chardonnay-bourgogne',
        name: "Louis Jadot, Chardonnay Bourgogne",
        region: "Burgundy, FR",
        type: 'White',
        description: "An affordable, classic, unoaked White Burgundy. Offers bright, fresh citrus fruits, green apple, and clean minerality.",
        price: "G: $12 / B: $40",
        pairing: "Versatile with poultry, appetizers, and light sauces. Try with the Pan Roasted Chicken Breast.",
        varietal: "Chardonnay (Unoaked)"
    },
    {
        id: 'sonoma-cutrer-chardonnay',
        name: "Sonoma Cutrer, Chardonnay",
        region: "Russian River Valley, CA",
        type: 'White',
        description: "A highly popular California Chardonnay; balanced between richness and acidity. Notes of lemon curd, ripe apple, and a hint of spice.",
        price: "B: $76",
        pairing: "Excellent with prawns or richer poultry dishes like the Pan Roasted Chicken Breast.",
        varietal: "Chardonnay (Balanced)"
    },
    {
        id: 'beringer-chardonnay-private-reserve',
        name: "Beringer, Chardonnay, Private Reserve",
        region: "Napa, CA",
        type: 'White',
        description: "A top-tier, classic, heavily-oaked Napa Chardonnay. Full-bodied with rich vanilla, toasted marshmallow, and ripe tropical fruit.",
        price: "G: $15 / B: $59",
        pairing: "Match with rich seafood or strongly flavored cheeses. Complements the Pan Roasted Chicken Breast with its mushroom ragout.",
        varietal: "Chardonnay (Rich/Oaked)"
    },
    {
        id: 'patricia-raquin-chablis',
        name: "Patricia Raquin, Chablis",
        region: "Burgundy, FR",
        type: 'White',
        description: "The driest, most mineral-focused expression of Chardonnay. Features green citrus, oyster shell, and bracing acidity.",
        price: "B: $69",
        pairing: "The quintessential pairing for Oysters and raw seafood. The top recommendation for our Oysters on the Halfshell.",
        varietal: "Chardonnay (Unoaked)"
    },
    {
        id: 'trouillet-lebeau-saint-veran',
        name: "Trouillet Lebeau, Saint-Véran",
        region: "Burgundy, FR",
        type: 'White',
        description: "Unoaked Chardonnay from the Mâcon region. Offers clean notes of white peach, melon, and soft, pleasant acidity.",
        price: "B: $72",
        pairing: "Versatile with vegetable dishes and poultry, like the Heirloom Tomato Risotto or Pan Roasted Chicken Breast.",
        varietal: "Chardonnay (Unoaked)"
    },
    {
        id: 'flowers-chardonnay',
        name: "Flowers, Chardonnay",
        region: "Sonoma Coast, CA",
        type: 'White',
        description: "Known for its elegant, cool-climate style. Balances light oak with focused acidity and notes of lemon curd and sea spray.",
        price: "B: $99",
        pairing: "Pairs well with fresh fish and lighter sauces. A great pairing for the Pan Seared Salmon.",
        varietal: "Chardonnay (Elegant/Coastal)"
    },
    {
        id: 'rombauer-chardonnay-carneros',
        name: "Rombauer, Chardonnay, Carneros",
        region: "Napa, CA",
        type: 'White',
        description: "Rombauer's famous, powerful style. Very rich, buttery, and tropical. A crowd-pleaser known for its full body and vanilla notes.",
        price: "B: $89",
        pairing: "Best with roasted pork or cream-based pasta. A bold pairing for the Pan Roasted Chicken Breast.",
        varietal: "Chardonnay (Rich/Oaked)"
    },
    {
        id: 'ramey-chardonnay-russian-river-valley',
        name: "Ramey, Chardonnay, Russian River Valley",
        region: "Russian River Valley, CA",
        type: 'White',
        description: "An acclaimed, high-quality, complex Chardonnay. Notes of citrus oil, flint, and toasted brioche. Balanced, lengthy, and refined.",
        price: "B: $134",
        pairing: "Pair with complex seafood dishes or rich sauces. Excellent with the Pan Seared Salmon with its corn & fennel veloute.",
        varietal: "Chardonnay (Complex)"
    },
    {
        id: 'far-niente-chardonnay',
        name: "Far Niente, Chardonnay",
        region: "Napa Valley, CA",
        type: 'White',
        description: "Known for its signature graceful style. Full-bodied but elegant, featuring notes of citrus, melon, and refined vanilla.",
        price: "B: $124",
        pairing: "Excellent with butter-poached fish or lighter risottos. A premium pairing for our Pan Seared Salmon or Heirloom Tomato Risotto.",
        varietal: "Chardonnay (Elegant/Oaked)"
    },
    {
        id: 'terrasses-viognier-blend',
        name: "Terrasses, Viognier Blend",
        region: "Ventoux, FR",
        type: 'White',
        description: "Highly aromatic with notes of honeysuckle, apricot, and white peach. Full-bodied and lower acidity.",
        price: "B: $42",
        pairing: "Ideal with spicy cuisine (e.g., Indian or Thai). A great choice for the Sauteed Mussels Mouclade due to the curry notes.",
        varietal: "Viognier Blend"
    },
    {
        id: 'spy-valley-sauvignon-blanc',
        name: "Spy Valley, Sauvignon Blanc",
        region: "Marlborough, NZ",
        type: 'White',
        description: "Explosive aromas of passionfruit, gooseberry, and herbal notes. Racy acidity and an intense palate.",
        price: "HB: $27",
        pairing: "Great for those who want a punchy white with salads like the Spring Greens Salad.",
        varietal: "Sauvignon Blanc"
    },
    {
        id: 'frogs-leap-sauvignon-blanc',
        name: "Frog's Leap, Sauvignon Blanc",
        region: "Rutherford, CA",
        type: 'White',
        description: "A more restrained, food-friendly style of California SB. Fresh, bright, and slightly herbal, with less overt tropicality.",
        price: "HB: $34",
        pairing: "Pairs well with fresh poultry and light appetizers. A good match for the Pan Roasted Chicken Breast.",
        varietal: "Sauvignon Blanc"
    },

    // Red Wines
    {
        id: 'caymus-cabernet-sauvignon',
        name: "Caymus, Cabernet Sauvignon",
        region: "Napa Valley, CA",
        type: 'Red',
        description: "A famous, lush, and full-bodied Cabernet. Delivers immediate pleasure with flavors of dark black cherry, mocha, and smooth, supple tannins.",
        price: "G: $24 / B: $168",
        pairing: "Perfect match for fatty red meats like Ribeye or NY Strip. Highly recommend with our Steak Frites.",
        varietal: "Cabernet Sauvignon"
    },
    {
        id: 'jordan-cabernet-sauvignon',
        name: "Jordan, Cabernet Sauvignon",
        region: "Alexander Valley, CA",
        type: 'Red',
        description: "Built on elegance and finesse rather than power. Medium-full body with classic notes of cassis and cedar, balanced for pairing with a meal.",
        price: "B: $148",
        pairing: "Great with grilled lamb or lean cuts of red meat. An elegant choice for the Steak Frites.",
        varietal: "Cabernet Sauvignon"
    },
    {
        id: 'joseph-phelps-insignia',
        name: "Joseph Phelps, Insignia",
        region: "Napa Valley, CA",
        type: 'Red',
        description: "Our flagship, ultra-premium wine and an American icon. Extremely concentrated and powerful with deep layers of dark fruit and spice.",
        price: "B: $625",
        pairing: "Reserve for rich, powerful dishes or special occasions. The ultimate pairing for the Steak Frites.",
        varietal: "Bordeaux Blend"
    },
    {
        id: 'belle-glos-pinot-noir',
        name: "Belle Glos, Pinot Noir",
        region: "Santa Barbara, CA",
        type: 'Red',
        description: "Quintessential California powerhouse Pinot—rich, dark, and highly extracted. Offers bold flavors of black cherry, plum, and cocoa.",
        price: "G: $14 / B: $58",
        pairing: "Pairs well with pork loin or richer poultry dishes. Excellent with our Duck Leg Confit.",
        varietal: "Pinot Noir (Rich)"
    },
    {
        id: 'catena-malbec',
        name: "Catena, Malbec",
        region: "Mendoza, AR",
        type: 'Red',
        description: "Full-bodied and plush Argentinian Malbec. Offers concentrated flavors of dark plum, blueberry, and spicy vanilla.",
        price: "G: $13 / HB: $29 / B: $42",
        pairing: "Excellent with braised dishes or leaner grilled steaks. A great value pairing for the Steak Frites or French Goat Burger.",
        varietal: "Malbec"
    },
    {
        id: 'ch-de-fontenille-cotes-de-bourdeaux',
        name: "Ch. de Fontenille Cotes de Bourdeaux",
        region: "Bordeaux, FR",
        type: 'Red',
        description: "A classic, savory, and food-friendly Bordeaux red blend. Dry, medium-bodied, and offers notes of cassis, tobacco leaf, and earthy complexity.",
        price: "G: $12 / B: $42",
        pairing: "Ideal with steak frites or hard cheeses. A perfect by-the-glass option for the Steak Frites.",
        varietal: "Bordeaux Blend"
    },
    {
        id: 'boissieu-beaujolais-leynes',
        name: "Boissieu, Beaujolais-Leynes",
        region: "Burgundy, FR",
        type: 'Red',
        description: "A light-bodied, lively red that can be served slightly chilled. It's bursting with bright red berry fruit like raspberry and cherry and has a low tannin structure.",
        price: "B: $49",
        pairing: "Best served slightly chilled with charcuterie or poultry. A good match for the Pan Roasted Chicken Breast.",
        varietal: "Gamay"
    },
    {
        id: 'dom-de-maisons-neuves-brouilly',
        name: "Dom. De Maisons Neuves, Brouilly",
        region: "Burgundy, FR",
        type: 'Red',
        description: "A specific Cru (village) of Beaujolais. Features concentrated red fruit, structure, and earthy complexity.",
        price: "B: $56",
        pairing: "Excellent with grilled chicken and mushroom dishes. A fantastic pairing for our Pan Roasted Chicken Breast with mushroom ragout.",
        varietal: "Gamay (Cru Beaujolais)"
    },
    {
        id: 'belle-glos-pinot-noir-balade',
        name: "Belle Glos, Pinot Noir, Balade",
        region: "Santa Barbara, CA",
        type: 'Red',
        description: "Joe Wagner's signature bold, dark, and highly extracted style. Rich black cherry, boysenberry, mocha, and velvety tannins.",
        price: "G: $14 / B: $58",
        pairing: "A powerhouse Pinot for richer pork or veal. A great match for the Duck Leg Confit.",
        varietal: "Pinot Noir (Rich)"
    },
    {
        id: 'ken-wright-cellars-pinot-noir',
        name: "Ken Wright Cellars, Pinot Noir",
        region: "Willamette Valley, OR",
        type: 'Red',
        description: "Classic Oregon style: light body, bright acidity, and notes of delicate red cherry, forest floor, and spice.",
        price: "B: $65",
        pairing: "Ideal with salmon and lighter sauces. The perfect red wine for our Pan Seared Salmon.",
        varietal: "Pinot Noir (Elegant)"
    },
    {
        id: 'the-calling-pinot-noir',
        name: "The Calling, Pinot Noir",
        region: "Russian River Valley, CA",
        type: 'Red',
        description: "A classic Russian River style: elegant and medium-bodied with bright red fruit and a silky texture.",
        price: "B: $69",
        pairing: "Excellent with duck breast or mushroom risotto. A refined pairing for our Duck Leg Confit.",
        varietal: "Pinot Noir"
    },
    {
        id: 'louis-jadot-pinot-noir-bourgogne',
        name: "Louis Jadot, Pinot Noir, Bourgogne",
        region: "Burgundy, FR",
        type: 'Red',
        description: "An affordable, earthy introduction to Red Burgundy. Notes of cranberry, mushroom, and forest floor.",
        price: "B: $45",
        pairing: "Pairs well with mushroom dishes and simple poultry. Excellent with the New River Mushroom & Onion Ragout or Pan Roasted Chicken Breast.",
        varietal: "Pinot Noir (Earthy)"
    },
    {
        id: 'dom-des-fontonbles-gigondas',
        name: "Dom. Des Fontonbles, Gigondas",
        region: "Rhone, FR",
        type: 'Red',
        description: "A powerful wine from the Southern Rhône. Full-bodied, rustic, with dark fruit, pepper, and herbs.",
        price: "B: $73",
        pairing: "Needs hearty stews or grilled game meats. Stands up well to the French Goat Burger with pork belly.",
        varietal: "GSM Blend (Grenache dominant)"
    },
    {
        id: 'maison-shaps-pommard-burgundy',
        name: "Maison Shaps, Pommard, Burgundy",
        region: "Burgundy, FR",
        type: 'Red',
        description: "A high-end Pinot Noir known for its deep color, firm structure, and aging potential. Notes of dark cherry, leather, and spice.",
        price: "B: $110",
        pairing: "Best with roasted lamb or aged cheeses. A sophisticated choice for the Duck Leg Confit.",
        varietal: "Pinot Noir (Structured)"
    },
    {
        id: 'maison-shaps-maison-dieu-burgundy',
        name: "Maison Shaps, Maison Dieu, Burgundy",
        region: "Burgundy, FR",
        type: 'Red',
        description: "An elegant, refined expression of Burgundy Pinot Noir. Focuses on purity of red fruit and soft earthiness.",
        price: "B: $75",
        pairing: "Great pairing for simple roasts or duck. Perfect for the Duck Leg Confit.",
        varietal: "Pinot Noir"
    },
    {
        id: 'dom-de-la-mordoree-chateauneuf-du-pape',
        name: "Dom. de la Mordorée, Chateauneuf du Pape",
        region: "Rhone, FR",
        type: 'Red',
        description: "A flagship Southern Rhône wine. Full-bodied, rich, with powerful notes of dark plum, licorice, and garrigue (herbs).",
        price: "B: $259",
        pairing: "Match with game meats or beef dishes with high seasoning. A powerful choice for the Steak Frites.",
        varietal: "GSM Blend (Grenache dominant)"
    },
    {
        id: 'dom-bertrand-gonnet-chateauneuf-du-pape',
        name: "Dom. Bertrand Gonnet, Chateauneuf du Pape",
        region: "Rhone, FR",
        type: 'Red',
        description: "A more classic, rustic style of Chateauneuf. Intense dark fruit, leather, and spice, with firm structure.",
        price: "B: $149",
        pairing: "Pairs well with lamb shanks and strong cheeses. A bold pairing for the Steak Frites.",
        varietal: "GSM Blend"
    },
    {
        id: 'chateau-dorsan-cotes-du-rhone-villages',
        name: "Château d'Orsan, Cotes du Rhone Villages",
        region: "Rhone, FR",
        type: 'Red',
        description: "Medium-bodied, savory, and rustic. Ripe dark fruit with classic notes of black pepper and Provençal herbs.",
        price: "B: $39",
        pairing: "Pairs well with grilled/roasted meats like our French Goat Burger or Steak Frites.",
        varietal: "GSM Blend"
    },
    {
        id: 'ch-larose-perganson-medoc',
        name: "Ch. Larose Perganson, Medoc",
        region: "Bordeaux, FR",
        type: 'Red',
        description: "A classic Left Bank Bordeaux (Cabernet dominant). Features notes of graphite, cedar, and dark fruit with firm tannins.",
        price: "B: $110",
        pairing: "Excellent with prime rib or hearty beef roasts. A classic choice for the Steak Frites.",
        varietal: "Cabernet Sauvignon/Merlot"
    },
    {
        id: 'segla-chateau-rauzan-segla',
        name: "Segla, Chateau Rauzan Segla",
        region: "Margaux, FR",
        type: 'Red',
        description: "The second wine of a famed Margaux estate. Elegant, refined, and aromatic, with notes of violet, cassis, and soft cedar.",
        price: "B: $137",
        pairing: "Perfect with filet mignon or delicate beef preparations. An elegant pairing for the Steak Frites.",
        varietal: "Cabernet Sauvignon/Merlot"
    },
    {
        id: 'ch-larose-trintaudon-haut-medoc',
        name: "Ch. Larose Trintaudon, Haut-Medoc",
        region: "Bordeaux, FR",
        type: 'Red',
        description: "A reliable, traditional Left Bank Bordeaux. Medium-bodied, structured, with classic notes of tobacco, lead pencil, and firm fruit.",
        price: "B: $99",
        pairing: "Match with beef Wellington or rich pâtés. A solid pairing for the Steak Frites.",
        varietal: "Cabernet Sauvignon/Merlot"
    },
    {
        id: 'chateau-greysac-medoc',
        name: "Chateau Greysac, Médoc",
        region: "Bordeaux, FR",
        type: 'Red',
        description: "A classic, balanced, everyday Médoc. Offers good structure, dark fruit, and earthiness.",
        price: "B: $66",
        pairing: "Good pairing for Sunday roast or aged cheddar. Works well with the French Goat Burger.",
        varietal: "Cabernet Sauvignon/Merlot"
    },
    {
        id: 'lesprit-de-chevalier-pessac-leognan',
        name: "L'Esprit de Chevalier, Pessac-Leognan",
        region: "Bordeaux, FR",
        type: 'Red',
        description: "Known for its smoky, gravelly complexity. Medium-bodied, dry, with notes of dark fruit, smoke, and fine tannins.",
        price: "B: $78",
        pairing: "Pairs well with grilled fish (yes, red wine!) or roasted poultry. Try it with the Pan Seared Salmon or the Pan Roasted Chicken Breast.",
        varietal: "Cabernet/Merlot (Graves)"
    },
    {
        id: 'lions-de-batailley-pauillac',
        name: "Lions de Batailley, Pauillac",
        region: "Bordeaux, FR",
        type: 'Red',
        description: "The second wine of a 5th Growth Pauillac. Full-bodied, structured, with deep cassis, cedar, and firm tannins.",
        price: "B: $123",
        pairing: "Needs strong beef flavors and rich sauces. Built for the Steak Frites with truffle marrow butter.",
        varietal: "Cabernet Sauvignon/Merlot"
    },
    {
        id: 'orin-swift-8-years-in-the-desert',
        name: "Orin Swift, 8 Years in the Desert",
        region: "Red Blend, CA",
        type: 'Red',
        description: "A powerhouse blend—big, jammy, and extracted. Flavors of blackberry jam, chocolate, and black pepper.",
        price: "B: $95",
        pairing: "Needs BBQ sauces or heavily spiced pork/beef. A bold choice for the French Goat Burger.",
        varietal: "Zinfandel/Syrah/Petite Sirah"
    },
    {
        id: 'seghesio-zinfandel-sonoma-county',
        name: "Seghesio, Zinfandel, Sonoma County",
        region: "Sonoma, CA",
        type: 'Red',
        description: "A classic, well-balanced Zinfandel. Features notes of black cherry, black pepper, and moderate tannins.",
        price: "B: $64",
        pairing: "Excellent with pizza or meatloaf. A fun pairing for the French Goat Burger.",
        varietal: "Zinfandel"
    },
    {
        id: 'orin-swift-palermo-cabernet-sauvignon',
        name: "Orin Swift, Palermo, Cabernet Sauvignon",
        region: "Napa, CA",
        type: 'Red',
        description: "A full-bodied, rich Cabernet with powerful dark fruit and a lush texture, signature of the Orin Swift style.",
        price: "B: $81",
        pairing: "Great with grilled steak or strong, rich sauces. A perfect partner for the Steak Frites.",
        varietal: "Cabernet Sauvignon"
    },
    {
        id: 'barboursville-vineyards-octagon',
        name: "Barboursville Vineyards, \"Octagon\"",
        region: "Virginia, USA",
        type: 'Red',
        description: "A domestic Bordeaux blend showing balance and complexity. Features dark fruit, earthiness, and fine tannins.",
        price: "B: $99",
        pairing: "Pairs well with veal or elegant beef dishes. An excellent Virginia wine to pair with our Steak Frites.",
        varietal: "Bordeaux Blend"
    },
    {
        id: 'faust-cabernet-sauvignon',
        name: "Faust, Cabernet Sauvignon",
        region: "Napa Valley, CA",
        type: 'Red',
        description: "A full-bodied, classic Napa Cab. Powerful dark fruit (cassis), baking spices, and sturdy tannins.",
        price: "B: $115",
        pairing: "Needs a hearty cut of beef to balance the tannins. Made for our Steak Frites.",
        varietal: "Cabernet Sauvignon"
    },
    {
        id: 'orin-swift-papillon-red-blend',
        name: "Orin Swift, Papillon, Red Blend",
        region: "Napa Valley, CA",
        type: 'Red',
        description: "A luxurious, highly extracted blend. Intensely concentrated, with layers of dark cherry, chocolate, and spice.",
        price: "B: $169",
        pairing: "Best with the richest beef dishes on the menu. A top-tier recommendation for the Steak Frites.",
        varietal: "Bordeaux Blend"
    },
    {
        id: 'stags-leap-artemis-cabernet',
        name: "Stag's Leap, \"Artemis\" Cabernet",
        region: "Napa, CA",
        type: 'Red',
        description: "A well-known, elegant, medium-full bodied Cabernet. Notes of cherry, tobacco, and a silky, refined finish.",
        price: "B: $165",
        pairing: "Versatile with both lamb and beef; known for its soft tannins. An elegant choice for the Steak Frites.",
        varietal: "Cabernet Sauvignon"
    },
    {
        id: 'michael-shaps-cabernet-franc',
        name: "Michael Shaps Cabernet Franc",
        region: "Virginia, USA",
        type: 'Red',
        description: "A unique domestic expression. Features high acidity, medium body, and notes of red plum, raspberry, and classic green bell pepper.",
        price: "B: $75",
        pairing: "Excellent with herbal chicken or pork tenderloin. A unique pairing for the Pan Roasted Chicken Breast.",
        varietal: "Cabernet Franc"
    },
    {
        id: 'far-niente-cabernet-sauvignon',
        name: "Far Niente, Cabernet Sauvignon",
        region: "Napa Valley, CA",
        type: 'Red',
        description: "Known for its elegant, refined style. Full-bodied yet balanced, with notes of cassis, dark cocoa, and smooth tannins.",
        price: "B: $239",
        pairing: "Match with high-end beef and complex sauces. A luxurious choice for the Steak Frites.",
        varietal: "Cabernet Sauvignon"
    },
    {
        id: 'pine-ridge-cabernet-sauvignon',
        name: "Pine Ridge, Cabernet Sauvignon",
        region: "Napa Valley, CA",
        type: 'Red',
        description: "A reliable, high-quality Napa Cab. Features full body, dark fruit, and firm structure.",
        price: "B: $128",
        pairing: "Great with slow-cooked meats or braised short ribs. A solid choice for the Steak Frites.",
        varietal: "Cabernet Sauvignon"
    },
    {
        id: 'daou-cabernet-sauvignon',
        name: "Daou, Cabernet Sauvignon",
        region: "Paso Robles, CA",
        type: 'Red',
        description: "A very full-bodied, robust style from Paso Robles. Features deep, dark fruit and noticeable tannins.",
        price: "G: $15 / B: $65",
        pairing: "Perfect with burgers or heavily grilled meats. A go-to by-the-glass recommendation for the French Goat Burger and Steak Frites.",
        varietal: "Cabernet Sauvignon"
    },
    {
        id: 'louis-m-martini-cabernet-sauvignon',
        name: "Louis M. Martini, Cabernet Sauvignon",
        region: "Napa Valley, CA",
        type: 'Red',
        description: "A traditional, respected Napa producer. Offers classic notes of cherry, cola, and oak with a sturdy structure.",
        price: "B: $85",
        pairing: "Excellent with prime rib or hearty meat dishes. A classic pairing for the Steak Frites.",
        varietal: "Cabernet Sauvignon"
    },
    {
        id: 'gd-vajura-albe-barolo',
        name: "G.D. Vajura, 'Albe' Barolo",
        region: "Piedmont, IT",
        type: 'Red',
        description: "\"The King of Wines.\" Highly complex, tannic, and highly acidic. Aromas of rose petals, tar, and cherry.",
        price: "B: $75",
        pairing: "Needs rich, fatty foods to balance. A great suggestion with the Steak Frites, especially the truffle marrow butter.",
        varietal: "Nebbiolo"
    },
    {
        id: 'san-giorgio-ugolforte-brunello-di-montalcino',
        name: "San Giorgio Ugolforte, Brunello di Montalcino",
        region: "Tuscany, IT",
        type: 'Red',
        description: "A powerful, full-bodied Tuscan red. Features high acidity and firm tannins with notes of sour cherry, leather, and dried herbs.",
        price: "B: $124",
        pairing: "Classic pairing for lamb or tomato-based pasta dishes. An excellent match for our Heirloom Tomato Risotto.",
        varietal: "Sangiovese"
    },
    {
        id: 'gaja-camarcanda-promis-tuscany',
        name: "Gaja Ca'Marcanda, 'Promis', Tuscany",
        region: "Tuscany, IT",
        type: 'Red',
        description: "A modern, high-end \"Super Tuscan\" style. Rich and smooth with dark fruit, spice, and soft tannins.",
        price: "B: $75",
        pairing: "Great with flank steak or rich pork dishes. A sophisticated pairing for the French Goat Burger or Steak Frites.",
        varietal: "Sangiovese/Merlot/Syrah"
    },
    {
        id: 'sette-ponti-oreno',
        name: "Sette Ponti, \"Oreno\"",
        region: "Tuscany, IT",
        type: 'Red',
        description: "An extremely complex, modern Super Tuscan blend. Full-bodied, silky, with concentrated dark fruit and spice.",
        price: "B: $275",
        pairing: "A luxury pairing for filet mignon or aged cheeses. A premium recommendation for the Steak Frites.",
        varietal: "Merlot/Cabernet/Petit Verdot"
    },
    {
        id: 'renato-ratti-barolo',
        name: "Renato, \"Ratti\" Barolo",
        region: "Piedmont, IT",
        type: 'Red',
        description: "A classic, structured Barolo. Elegant and earthy with notes of cherry, dried flowers, and licorice.",
        price: "B: $156",
        pairing: "Pair with game meats or truffled pasta. A superb choice for the Steak Frites with its truffle notes.",
        varietal: "Nebbiolo"
    },
    {
        id: 'insoglio-del-cinghiale-super-tuscan',
        name: "Insoglio del Cinghiale, Super Tuscan",
        region: "Tuscany, IT",
        type: 'Red',
        description: "A modern, fruit-forward Tuscan blend. Full-bodied and smooth, with dark fruit and savory notes.",
        price: "B: $99",
        pairing: "Match with rich tomato sauces or simple grilled steak. Pairs well with the Heirloom Tomato Risotto or the Steak Frites.",
        varietal: "Blend (Syrah, Cab Franc, Merlot)"
    }
];
