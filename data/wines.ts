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
    // Sparkling & Rosé
    {
        id: 'montand-brut-rose',
        name: 'Montand Brut Rosé',
        region: 'Cotes du Jura, France',
        type: 'Sparkling',
        description: 'Flavors of red berries like strawberry and raspberry, with fine bubbles and crisp acidity.',
    },
    {
        id: 'rubus-blanc-de-blancs',
        name: 'Rubus, Blanc de Blancs, Brut',
        region: 'France',
        type: 'Sparkling',
        description: 'A "white from whites" made from Chardonnay, it has flavors of green apple, pear, and citrus with a touch of brioche and minerality.',
        varietal: 'Chardonnay'
    },
    {
        id: 'fleurs-de-prairie',
        name: 'Fleurs de Prairie',
        region: 'Côtes de Provence, France',
        type: 'Rosé',
        description: 'A classic Provence rosé with flavors of red berries, hints of citrus, and floral notes. Light, refreshing, and crisp.',
    },

    // White Wines
    {
        id: 'dom-paul-buisse-sb',
        name: 'Dom. Paul Buisse',
        region: 'Touraine, Loire Valley, FR',
        type: 'White',
        description: 'A crisp and aromatic Sauvignon Blanc with flavors of green apple, citrus, gooseberry, and mineral notes.',
        varietal: 'Sauvignon Blanc'
    },
    {
        id: 'louis-jadot-chard',
        name: 'Louis Jadot',
        region: 'Burgundy, FR',
        type: 'White',
        description: 'Expect flavors of green apple, pear, and citrus, with balanced acidity and a touch of oak.',
        varietal: 'Chardonnay'
    },
    {
        id: 'daou-chard',
        name: 'DAOU Vineyards',
        region: 'Paso Robles, CA',
        type: 'White',
        description: 'Rich profile of tropical fruits, vanilla, and a creamy texture, balanced by bright acidity.',
        varietal: 'Chardonnay'
    },

    // Red Wines
    {
        id: 'belle-glos-balade',
        name: 'Belle Glos, Balade',
        region: 'Santa Barbara, CA',
        type: 'Red',
        description: 'Rich and full-bodied with notes of dark cherry, raspberry, and a hint of vanilla and sweet spice from oak aging.',
        varietal: 'Pinot Noir'
    },
    {
        id: 'ken-wright-willamette',
        name: 'Ken Wright Cellars',
        region: 'Willamette Valley, OR',
        type: 'Red',
        description: 'Complex with flavors of red and dark fruits like cherry and plum, along with earthy undertones and a touch of spice.',
        varietal: 'Pinot Noir'
    },
    {
        id: 'louis-jadot-chorey',
        name: 'Louis Jadot, Chorey-Les-Beaune',
        region: 'Burgundy, FR',
        type: 'Red',
        description: 'Aromas and flavors of red fruits like cherry and raspberry, with hints of earth and mushroom.',
        varietal: 'Pinot Noir'
    },
    {
        id: 'chateau-bourdieu',
        name: 'Chateau Bourdieu-Blaye',
        region: 'Bordeaux, France',
        type: 'Red',
        description: 'Merlot-dominant blend showing flavors of dark fruits like black cherry and plum, with notes of tobacco, cedar, and spices.',
        varietal: 'Bordeaux Blend'
    },
    {
        id: 'daou-cab',
        name: 'DAOU Vineyards',
        region: 'Paso Robles, CA',
        type: 'Red',
        description: 'Powerful and expressive with flavors of blackcurrant, blackberry, and plum, with a long, elegant finish.',
        varietal: 'Cabernet Sauvignon'
    },
    {
        id: 'catena-malbec',
        name: 'Catena',
        region: 'Mendoza, AR',
        type: 'Red',
        description: 'Rich and complex flavors of blackberry, plum, and dark cherry, with hints of violet and vanilla.',
        varietal: 'Malbec'
    }
];
