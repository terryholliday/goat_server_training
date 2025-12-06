// Guest Interaction Scenarios for The French Goat Training System
// High-pressure, realistic situations with Best/Acceptable/Poor grading

import type { Scenario, AllergyScenario, GuestPersona, RolePlayPrompt } from '../types/enhanced';

// ============================================
// GUEST PERSONAS FOR ROLE-PLAY
// ============================================

export const GUEST_PERSONAS: GuestPersona[] = [
    {
        id: 'adventurous-foodie',
        name: 'The Adventurous Foodie',
        description: 'A guest who loves trying new things and appreciates creative dishes. They want recommendations for the most unique items on the menu.',
        preferences: ['unusual ingredients', 'chef specials', 'bold flavors', 'wine pairings'],
        budget: 'splurge',
        wineKnowledge: 'enthusiast',
        diningStyle: 'leisurely'
    },
    {
        id: 'classic-traditionalist',
        name: 'The Classic Traditionalist',
        description: 'A guest who prefers familiar French classics executed perfectly. They value authenticity and technique over innovation.',
        preferences: ['traditional preparations', 'proven combinations', 'familiar wines'],
        budget: 'moderate',
        wineKnowledge: 'casual',
        diningStyle: 'leisurely'
    },
    {
        id: 'budget-conscious-couple',
        name: 'The Budget-Conscious Couple',
        description: 'Celebrating an anniversary but watching their spending. They want a special experience without the highest-priced items.',
        preferences: ['value', 'shareable plates', 'glass pours over bottles'],
        budget: 'budget',
        wineKnowledge: 'novice',
        diningStyle: 'leisurely'
    },
    {
        id: 'wine-novice',
        name: 'The Wine Novice',
        description: 'Wants to explore wine but feels intimidated by the list. Needs gentle guidance without condescension.',
        preferences: ['approachable wines', 'clear descriptions', 'patient explanations'],
        budget: 'moderate',
        wineKnowledge: 'novice',
        diningStyle: 'leisurely'
    },
    {
        id: 'celebration-group',
        name: 'The Celebration Party',
        description: 'A group of 6 celebrating a promotion. High energy, wants champagne and the full experience.',
        preferences: ['champagne', 'shared appetizers', 'dessert', 'photos'],
        budget: 'splurge',
        wineKnowledge: 'casual',
        diningStyle: 'celebration'
    }
];

// ============================================
// INTERACTIVE SCENARIOS
// ============================================

export const SCENARIOS: Scenario[] = [
    {
        id: 'complaint-overcooked-steak',
        title: 'The Overcooked Steak',
        category: 'complaint',
        difficulty: 'intermediate',
        context: 'A guest ordered the Steak Frites medium-rare, but it was served medium-well. They are visibly disappointed and have called you over.',
        guestProfile: 'A business professional dining with a client. This is an important meal for them.',
        tableNumber: 12,
        steps: [
            {
                id: 'step-1',
                situation: 'You approach the table and the guest says: "Excuse me, I ordered this medium-rare and it\'s clearly overcooked. This is embarrassing—I have a client here."',
                guestDialogue: 'I ordered this medium-rare and it\'s clearly overcooked. This is embarrassing—I have a client here.',
                choices: [
                    {
                        id: 'a',
                        text: '"I\'m so sorry about that. Let me take this back immediately and have the kitchen prepare a new steak exactly to your preference. In the meantime, may I offer a glass of wine on us while you wait?"',
                        quality: 'best',
                        points: 10,
                        feedback: 'Excellent response! You apologized sincerely, took immediate action, and offered something to improve the wait time. This shows ownership and hospitality.'
                    },
                    {
                        id: 'b',
                        text: '"I apologize for the error. I\'ll have the kitchen remake this right away."',
                        quality: 'acceptable',
                        points: 6,
                        feedback: 'Good response. You acknowledged the issue and promised action. Consider offering something to ease the wait and acknowledge the business context.'
                    },
                    {
                        id: 'c',
                        text: '"That looks medium-rare to me, but I can have them cook a new one if you want."',
                        quality: 'poor',
                        points: 0,
                        feedback: 'Never contradict the guest or minimize their concern. The guest\'s perception is their reality. This response damages trust and the relationship.'
                    }
                ]
            },
            {
                id: 'step-2',
                situation: 'The guest accepts your offer. The new steak will take about 12 minutes. What do you do next?',
                choices: [
                    {
                        id: 'a',
                        text: 'Inform the manager, then check back in 5 minutes to ensure the guest is comfortable. When the steak arrives, personally deliver it and verify it meets expectations.',
                        quality: 'best',
                        points: 10,
                        feedback: 'Perfect follow-through. Involving the manager ensures proper service recovery, and your personal attention demonstrates genuine care.'
                    },
                    {
                        id: 'b',
                        text: 'Bring the steak when it\'s ready and ask if everything is okay.',
                        quality: 'acceptable',
                        points: 5,
                        feedback: 'Adequate, but you missed the opportunity to check in during the wait and inform management of the service issue.'
                    },
                    {
                        id: 'c',
                        text: 'Move on to other tables and wait for the kitchen to ring the new steak.',
                        quality: 'poor',
                        points: 0,
                        feedback: 'This shows neglect of a table that already had a service failure. The guest will feel forgotten and the situation worsens.'
                    }
                ]
            }
        ],
        scoring: {
            maxPoints: 20,
            passingPoints: 12,
            excellentThreshold: 18,
            categories: [{ name: 'Guest Recovery', weight: 1 }]
        },
        learningObjectives: [
            'Apologize sincerely without making excuses',
            'Take immediate corrective action',
            'Offer compensation appropriate to the situation',
            'Follow through until the issue is fully resolved'
        ],
        debriefNotes: 'In service recovery, speed and sincerity are essential. Always inform management of significant complaints so they can also engage if appropriate.'
    },
    {
        id: 'allergy-emergency',
        title: 'The Serious Allergy',
        category: 'allergy',
        difficulty: 'advanced',
        context: 'A guest informs you they have a severe shellfish allergy after being seated. They seem anxious about dining out.',
        guestProfile: 'A first-time guest who has had bad experiences at other restaurants regarding their allergy.',
        tableNumber: 8,
        steps: [
            {
                id: 'step-1',
                situation: 'The guest says: "I need to tell you before we order—I have a severe shellfish allergy. Like, anaphylactic. I\'ve had restaurants not take it seriously before."',
                guestDialogue: 'I need to tell you before we order—I have a severe shellfish allergy. Like, anaphylactic. I\'ve had restaurants not take it seriously before.',
                choices: [
                    {
                        id: 'a',
                        text: '"Thank you for letting me know—we take all allergies very seriously here. Let me note this for the kitchen and I\'ll personally verify every dish that comes to your table. May I walk you through our menu and highlight which items are completely shellfish-free?"',
                        quality: 'best',
                        points: 10,
                        feedback: 'Excellent! You validated their concern, committed to personal oversight, and offered proactive guidance. This builds trust and eases anxiety.'
                    },
                    {
                        id: 'b',
                        text: '"Okay, I\'ll let the kitchen know. Just avoid the mussels and oysters and you should be fine."',
                        quality: 'poor',
                        points: 0,
                        feedback: 'This is dangerously casual. Cross-contamination is a real risk. You failed to take the allergy seriously or offer proper guidance.'
                    },
                    {
                        id: 'c',
                        text: '"Noted. I\'ll tell the kitchen."',
                        quality: 'acceptable',
                        points: 4,
                        feedback: 'While you acknowledged the allergy, your brief response doesn\'t reassure an anxious guest or demonstrate the seriousness of your attention.'
                    }
                ]
            },
            {
                id: 'step-2',
                situation: 'The guest asks about the Pan Seared Salmon. What do you tell them?',
                choices: [
                    {
                        id: 'a',
                        text: '"The salmon itself is shellfish-free. However, let me verify with the kitchen whether any shellfish is prepared in the same cooking area, just to be completely safe. I\'ll be right back with confirmation."',
                        quality: 'best',
                        points: 10,
                        feedback: 'Perfect response. You gave accurate initial information but also acknowledged the need to verify cross-contamination risks with the kitchen.'
                    },
                    {
                        id: 'b',
                        text: '"It\'s just salmon, fennel, and potatoes, so you\'re good."',
                        quality: 'acceptable',
                        points: 5,
                        feedback: 'The ingredients are correct, but you should always verify with the kitchen for severe allergies to confirm no cross-contamination.'
                    },
                    {
                        id: 'c',
                        text: '"I think it\'s fine? Let me check the menu again."',
                        quality: 'poor',
                        points: 0,
                        feedback: 'Uncertainty is dangerous with severe allergies. Never guess—always confirm with the kitchen for life-threatening allergies.'
                    }
                ]
            }
        ],
        scoring: {
            maxPoints: 20,
            passingPoints: 14,
            excellentThreshold: 18,
            categories: [{ name: 'Allergy Safety', weight: 1 }]
        },
        learningObjectives: [
            'Take all allergies seriously, especially severe ones',
            'Communicate with the kitchen for any allergy concern',
            'Never guess about ingredients—always verify',
            'Make the guest feel heard and safe'
        ],
        debriefNotes: 'Allergies can be life-threatening. When in doubt, ALWAYS check with the kitchen. It\'s better to take an extra minute than to put a guest at risk.'
    },
    {
        id: 'triple-sat',
        title: 'The Triple-Sat',
        category: 'pressure',
        difficulty: 'advanced',
        context: 'You\'ve just been sat three tables within 2 minutes. Table 5 is a couple, Table 6 is a party of 4, and Table 7 is an elderly couple who look impatient.',
        tableNumber: 5,
        steps: [
            {
                id: 'step-1',
                situation: 'All three tables need attention. You need to prioritize. What do you do first?',
                choices: [
                    {
                        id: 'a',
                        text: 'Quickly acknowledge all three tables with eye contact and a smile, saying "I\'ll be right with you." Then approach Table 7 (elderly couple) first since they appear impatient, take their drink order, then move to Tables 5 and 6.',
                        quality: 'best',
                        points: 10,
                        feedback: 'Excellent triage! Acknowledging all tables prevents anyone from feeling ignored. Addressing the impatient table first defuses potential complaints while being efficient.'
                    },
                    {
                        id: 'b',
                        text: 'Go to Table 5 first since they were sat first, take their complete order, then move to the other tables.',
                        quality: 'poor',
                        points: 2,
                        feedback: 'Taking a complete order from one table while others wait too long is inefficient. Touch all tables quickly before diving deep with any one.'
                    },
                    {
                        id: 'c',
                        text: 'Get drink orders from all three tables before taking any food orders.',
                        quality: 'acceptable',
                        points: 7,
                        feedback: 'Good efficiency thinking! Getting all drink orders in first is smart. However, you should still acknowledge all tables immediately before approaching any.'
                    }
                ]
            },
            {
                id: 'step-2',
                situation: 'While taking Table 6\'s order, Table 7 flags you down looking upset. How do you handle it?',
                choices: [
                    {
                        id: 'a',
                        text: '"Excuse me one moment," to Table 6, then briefly address Table 7: "I\'ll be with you in just two minutes—is there anything urgent I can help with right now?" Then return to finish Table 6\'s order.',
                        quality: 'best',
                        points: 10,
                        feedback: 'Perfect balance of acknowledging the interrupting table while respecting the table you\'re currently serving. You\'ve set expectations and shown care to both.'
                    },
                    {
                        id: 'b',
                        text: 'Ignore Table 7 and finish with Table 6 first.',
                        quality: 'poor',
                        points: 0,
                        feedback: 'Ignoring a guest who is trying to get your attention will escalate their frustration. A brief acknowledgment takes only seconds.'
                    },
                    {
                        id: 'c',
                        text: 'Immediately leave Table 6 to attend to Table 7.',
                        quality: 'acceptable',
                        points: 4,
                        feedback: 'While you\'re responding to the flagging guest, abandoning Table 6 mid-order can make them feel unimportant. A brief acknowledgment to Table 7 while staying with Table 6 is better.'
                    }
                ]
            }
        ],
        scoring: {
            maxPoints: 20,
            passingPoints: 12,
            excellentThreshold: 17,
            categories: [{ name: 'Time Management', weight: 0.5 }, { name: 'Guest Attention', weight: 0.5 }]
        },
        learningObjectives: [
            'Acknowledge all tables quickly to prevent anyone feeling ignored',
            'Prioritize based on guest needs and visual cues',
            'Balance efficiency with personal attention',
            'Handle interruptions gracefully'
        ],
        debriefNotes: 'Triple-sats test your composure. The key is quick acknowledgment, smart prioritization, and calm efficiency. Never rush so fast that guests feel like a burden.'
    },
    {
        id: 'vip-arrival',
        title: 'VIP Recognition',
        category: 'vip',
        difficulty: 'intermediate',
        context: 'A local business owner who is a regular and significant spender has arrived. The hostess has informed you this is their table.',
        guestProfile: 'The owner of the top real estate firm in town. Dines here monthly, usually brings clients.',
        tableNumber: 3,
        steps: [
            {
                id: 'step-1',
                situation: 'You approach the table where the VIP is seated with two guests you don\'t recognize. How do you greet them?',
                choices: [
                    {
                        id: 'a',
                        text: '"Good evening! It\'s wonderful to see you again. May I start everyone with some water, and perhaps a cocktail or glass of wine while you look over the menu?"',
                        quality: 'best',
                        points: 10,
                        feedback: 'Perfect! You recognized the regular warmly without being overly familiar, and included the entire party in your attention.'
                    },
                    {
                        id: 'b',
                        text: '"Welcome back, Mr. Smith! Great to see you! The usual Cabernet to start?"',
                        quality: 'acceptable',
                        points: 5,
                        feedback: 'While personalizing for the regular is nice, referencing "the usual" in front of guests might seem presumptuous or make the other guests feel secondary.'
                    },
                    {
                        id: 'c',
                        text: 'Treat them exactly like any other table with a standard greeting.',
                        quality: 'acceptable',
                        points: 6,
                        feedback: 'Consistency is good, but VIPs and regulars appreciate recognition. Missing the opportunity to acknowledge their loyalty is a missed connection.'
                    }
                ]
            }
        ],
        scoring: {
            maxPoints: 10,
            passingPoints: 6,
            excellentThreshold: 9,
            categories: [{ name: 'VIP Service', weight: 1 }]
        },
        learningObjectives: [
            'Recognize and warmly acknowledge regulars',
            'Include all guests at the table in your attention',
            'Personalize service without being presumptuous',
            'Make VIPs feel valued without making others feel lesser'
        ],
        debriefNotes: 'VIP service is about subtle recognition. The goal is to make the regular feel special while ensuring their guests also feel like VIPs.'
    },
    {
        id: 'long-ticket-time',
        title: 'The Long Wait',
        category: 'timing',
        difficulty: 'intermediate',
        context: 'Table 9 ordered their entrees 25 minutes ago. You check with the kitchen and learn there\'s a 10-minute delay due to a rush.',
        tableNumber: 9,
        steps: [
            {
                id: 'step-1',
                situation: 'The kitchen informs you of a 10-minute delay. What do you do?',
                choices: [
                    {
                        id: 'a',
                        text: 'Immediately go to the table and proactively communicate: "I wanted to let you know your entrees will be out in about 10 minutes. May I refresh your drinks or bring some bread while you wait?"',
                        quality: 'best',
                        points: 10,
                        feedback: 'Excellent! Proactive communication is key. You informed them before they had to ask, set expectations, and offered something to improve the wait.'
                    },
                    {
                        id: 'b',
                        text: 'Wait until they ask, then explain there\'s a delay.',
                        quality: 'poor',
                        points: 2,
                        feedback: 'Making guests ask about their food creates frustration. Proactive communication is always better than reactive explanations.'
                    },
                    {
                        id: 'c',
                        text: 'Let them know about the delay but don\'t offer anything additional.',
                        quality: 'acceptable',
                        points: 5,
                        feedback: 'Communicating the delay is good, but offering something (bread, drinks, an apology) shows you\'re actively managing their experience.'
                    }
                ]
            }
        ],
        scoring: {
            maxPoints: 10,
            passingPoints: 6,
            excellentThreshold: 9,
            categories: [{ name: 'Communication', weight: 0.5 }, { name: 'Hospitality', weight: 0.5 }]
        },
        learningObjectives: [
            'Communicate delays proactively',
            'Set accurate expectations',
            'Offer something to improve the waiting experience',
            'Never let guests wonder where their food is'
        ],
        debriefNotes: 'Delays happen in every restaurant. How you handle them determines whether they become a minor moment or a major complaint.'
    }
];

// ============================================
// ALLERGY SIMULATION SCENARIOS
// ============================================

export const ALLERGY_SCENARIOS: AllergyScenario[] = [
    {
        id: 'gluten-allergy',
        guestStatement: 'I have celiac disease and cannot have any gluten. What can I safely eat?',
        allergens: ['gluten'],
        safeMenuItems: ['pan-seared-salmon', 'heirloom-tomato-risotto', 'duck-leg-confit', 'steak-frites', 'spring-greens-salad', 'truffle-frites', 'creme-brulee', 'chocolate-mousse'],
        unsafeMenuItems: ['french-goat-burger', 'fig-chevre-flatbread', 'pepper-walnut-dip', 'escargot-traditional', 'french-onion-soup', 'croque-madame', 'eggs-benedict'],
        substitutionOptions: [
            { originalItem: 'French Goat Burger', safeAlternative: 'Lettuce-wrapped burger', modification: 'Request lettuce wrap instead of bun' },
            { originalItem: 'Escargot', safeAlternative: 'Escargot without bread', modification: 'Served without grilled bread' }
        ],
        communicationScript: 'For guests with celiac, I always recommend: Our risotto, salmon, duck confit, and steak frites are all naturally gluten-free. Our burger can be served in a lettuce wrap. I\'ll make sure to note the allergy for the kitchen to prevent any cross-contamination.'
    },
    {
        id: 'dairy-allergy',
        guestStatement: 'I\'m lactose intolerant. Which dishes should I avoid?',
        allergens: ['dairy'],
        safeMenuItems: ['oysters-halfshell', 'seared-hamachi', 'duck-leg-confit', 'spring-greens-salad', 'truffle-frites'],
        unsafeMenuItems: ['pepper-walnut-dip', 'fig-chevre-flatbread', 'mussels-mouclade', 'french-onion-soup', 'pan-seared-salmon', 'heirloom-tomato-risotto', 'fondant-potatoes', 'creme-brulee'],
        substitutionOptions: [
            { originalItem: 'Pan Seared Salmon', safeAlternative: 'Salmon with olive oil', modification: 'Request olive oil preparation, velouté on the side' },
            { originalItem: 'Steak Frites', safeAlternative: 'Steak with herb oil', modification: 'Replace truffle marrow butter with herb oil' }
        ],
        communicationScript: 'For dairy sensitivities, I\'d recommend our oysters, hamachi, duck confit, or spring salad as safe starters. For mains, the duck is completely dairy-free, and we can modify the steak frites to use oil instead of butter.'
    },
    {
        id: 'shellfish-allergy',
        guestStatement: 'I have a severe shellfish allergy—this includes shrimp, crab, lobster, mussels, and oysters.',
        allergens: ['shellfish'],
        safeMenuItems: ['pepper-walnut-dip', 'fig-chevre-flatbread', 'seared-hamachi', 'french-onion-soup', 'spring-greens-salad', 'all-main-courses', 'all-desserts'],
        unsafeMenuItems: ['oysters-halfshell', 'mussels-mouclade', 'escargot-traditional'],
        substitutionOptions: [],
        communicationScript: 'For shellfish allergies, I\'ll ensure the kitchen is notified. The only items to avoid are our oysters, mussels, and escargot. All of our main courses are shellfish-free, and I\'ll verify with the kitchen that your dishes are prepared in separate cookware.'
    },
    {
        id: 'nut-allergy',
        guestStatement: 'Both my husband and I have severe tree nut allergies.',
        allergens: ['nuts'],
        safeMenuItems: ['oysters-halfshell', 'seared-hamachi', 'mussels-mouclade', 'escargot-traditional', 'french-onion-soup', 'all-main-courses', 'creme-brulee', 'chocolate-mousse'],
        unsafeMenuItems: ['pepper-walnut-dip', 'fig-chevre-flatbread', 'glazed-asparagus'],
        substitutionOptions: [
            { originalItem: 'Glazed Asparagus', safeAlternative: 'Asparagus without almonds', modification: 'Omit almond topping' }
        ],
        communicationScript: 'For tree nut allergies, please avoid our red pepper dip and flatbread which contain walnuts. The glazed asparagus has almonds, but we can prepare it without. All proteins and most sides are nut-free. I\'ll ensure separate preparation for your dishes.'
    },
    {
        id: 'vegetarian-request',
        guestStatement: 'I\'m vegetarian. What are my options?',
        dietaryRestriction: 'vegetarian',
        allergens: [],
        safeMenuItems: ['pepper-walnut-dip', 'fig-chevre-flatbread', 'spring-greens-salad', 'heirloom-tomato-risotto', 'french-toast', 'all-desserts'],
        unsafeMenuItems: ['oysters-halfshell', 'seared-hamachi', 'mussels-mouclade', 'escargot-traditional', 'french-onion-soup', 'all-proteins'],
        substitutionOptions: [],
        communicationScript: 'We have wonderful vegetarian options! For starters, our red pepper dip, fig flatbread, and spring salad are all vegetarian. Our standout entrée for vegetarians is the Heirloom Tomato Risotto—it\'s absolutely beautiful. Note that our French Onion Soup contains beef stock and isn\'t vegetarian.'
    }
];

// ============================================
// ROLE PLAY PROMPTS
// ============================================

export const ROLE_PLAY_PROMPTS: RolePlayPrompt[] = [
    {
        id: 'sell-duck-confit',
        type: 'sell-dish',
        title: 'Sell the Duck Leg Confit',
        context: 'A guest is torn between the chicken and the duck. They\'ve never had duck confit before and seem hesitant.',
        targetItem: 'duck-leg-confit',
        objectives: [
            'Explain the confit technique in approachable terms',
            'Highlight what makes our duck special',
            'Address any hesitation about trying duck'
        ],
        sampleScript: 'The duck confit is one of our most popular dishes, and for good reason. "Confit" means the duck leg is slowly cooked in its own fat for about six hours until it becomes incredibly tender—you can cut it with a fork. It has a rich, savory flavor that\'s beautifully balanced by the cardamom apricot on the plate. If you enjoy the chicken but want something a bit more indulgent and special-occasion, the duck is the way to go.',
        keyPhrases: ['slowly cooked', 'incredibly tender', 'fork-tender', 'rich flavor', 'special occasion', 'one of our most popular'],
        avoidPhrases: ['gamey', 'you should', 'if you don\'t like it'],
        successCriteria: [
            'Explained confit in simple terms',
            'Made the dish sound appealing',
            'Addressed hesitation without pressure'
        ]
    },
    {
        id: 'wine-recommendation-novice',
        type: 'wine-recommendation',
        title: 'Wine for the Nervous Novice',
        context: 'A couple is celebrating their anniversary. The husband wants to order wine but admits he doesn\'t know much about it. He\'s ordered the steak, she\'s having the salmon.',
        guestPersona: GUEST_PERSONAS.find(p => p.id === 'wine-novice'),
        objectives: [
            'Put the guest at ease about wine selection',
            'Recommend wines that work for both dishes',
            'Explain your recommendation in accessible terms'
        ],
        sampleScript: 'That\'s a great pairing challenge—steak and salmon! I have a few options that would work beautifully with both. If you enjoy red wine, our Ken Wright Pinot Noir from Oregon has enough body for the steak but won\'t overpower the salmon. If you\'d prefer white, our Burgundy Chardonnay is rich enough to stand up to both dishes. Would you like to start with a glass of each to see which you prefer?',
        keyPhrases: ['great question', 'work beautifully with both', 'would you like to try', 'rich enough', 'won\'t overpower'],
        avoidPhrases: ['you should know', 'obviously', 'well actually', 'the rules say'],
        successCriteria: [
            'Made guest feel comfortable asking',
            'Offered logical recommendations for both dishes',
            'Used approachable, non-intimidating language'
        ]
    },
    {
        id: 'upsell-dessert',
        type: 'sell-dish',
        title: 'The Dessert Upsell',
        context: 'The table has finished their entrees and you\'re clearing plates. They haven\'t mentioned dessert. One guest says "That was wonderful, I\'m so full!"',
        objectives: [
            'Plant the seed for dessert without pressure',
            'Describe desserts enticingly',
            'Overcome the "I\'m full" objection'
        ],
        sampleScript: 'I\'m so glad you enjoyed everything! Before I bring the check, I have to tell you about our crème brûlée tonight—it\'s torched to order and that caramelized sugar crack is just magical. They\'re perfect for sharing if you just want a few bites to end the evening. Would you like me to bring the dessert menu, or perhaps two spoons and one crème brûlée?',
        keyPhrases: ['perfect for sharing', 'just a few bites', 'torched to order', 'magical', 'end the evening'],
        avoidPhrases: ['do you want dessert?', 'I\'ll bring the check', 'are you sure?'],
        successCriteria: [
            'Created desire without pressure',
            'Offered sharing as an option for "full" guests',
            'Made a specific, enticing recommendation'
        ]
    }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getScenariosByCategory = (category: Scenario['category']) =>
    SCENARIOS.filter(s => s.category === category);

export const getScenariosByDifficulty = (difficulty: Scenario['difficulty']) =>
    SCENARIOS.filter(s => s.difficulty === difficulty);

export const getAllergyScenarioByType = (allergen: string) =>
    ALLERGY_SCENARIOS.find(a => a.allergens.includes(allergen) || a.dietaryRestriction === allergen);
