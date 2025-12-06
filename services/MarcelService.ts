import { ALL_FLASHCARDS } from '../data/flashcards';
import { SCENARIOS } from '../data/scenarios';

export interface MarcelResponse {
    text: string;
    emotion: 'neutral' | 'happy' | 'thinking' | 'stern' | 'surprised';
    relatedArtifact?: any; // Could be a flashcard or scenario object
}

class MarcelService {

    // Keywords for different intents
    private intents = {
        GREETING: ['hello', 'hi', 'hey', 'bonjour', 'greetings', 'morning', 'afternoon', 'evening'],
        HELP: ['help', 'what can you do', 'guide', 'instructions', 'how to'],
        MENU: ['menu', 'food', 'dish', 'price', 'ingredients', 'allergens'],
        WINE: ['wine', 'paring', 'glass', 'bottle', 'drink'],
        TERM: ['what is', 'define', 'meaning', 'term', 'culinary'],
        SCENARIO: ['scenario', 'situation', 'unhappy', 'complaint', 'guest'],
        THANKS: ['thank', 'thanks', 'merci'],
    };

    async processMessage(message: string): Promise<MarcelResponse> {
        const lowerMsg = message.toLowerCase();

        // 1. Check for Greetings
        if (this.containsAny(lowerMsg, this.intents.GREETING)) {
            return {
                text: "Bonjour! I am Marcel, your Maitre D'. I am here to help you master our menu and service standards. Ask me about any dish, wine, or culinary term!",
                emotion: 'happy'
            };
        }

        // 2. Check for Thanks
        if (this.containsAny(lowerMsg, this.intents.THANKS)) {
            return {
                text: "Je vous en prie! (You are welcome!)",
                emotion: 'happy'
            };
        }

        // 3. Direct Search in Flashcards (Menu, Wine, Terms)
        // We search for cards where the query matches the title or keywords
        const foundCard = ALL_FLASHCARDS.find(card => {
            const titleMatch = lowerMsg.includes(card.front.title.toLowerCase());
            // Check specific keywords from tags if simple title match fails? 
            // For now, title match is strongest.
            return titleMatch;
        });

        if (foundCard) {
            let responseText = `${foundCard.front.title}. `;

            if (foundCard.front.subtitle) {
                responseText += `${foundCard.front.subtitle}. `;
            }

            if (foundCard.back.mainContent) {
                responseText += `\n\n${foundCard.back.mainContent}`;
            }

            if (foundCard.back.bulletPoints && foundCard.back.bulletPoints.length > 0) {
                responseText += `\n\nKey points: ${foundCard.back.bulletPoints.join(', ')}.`;
            }

            return {
                text: responseText,
                emotion: 'neutral',
                relatedArtifact: foundCard
            };
        }

        // 4. Check for Scenarios
        // Look for keywords related to scenarios
        const foundScenario = SCENARIOS.find(scenario => {
            return lowerMsg.includes(scenario.title.toLowerCase()) ||
                lowerMsg.includes(scenario.category.toLowerCase());
        });

        if (foundScenario) {
            return {
                text: `Ah, a tricky situation! For the "${foundScenario.title}" scenario: ${foundScenario.context} \n\nRemember: ${foundScenario.debriefNotes}`,
                emotion: 'thinking',
                relatedArtifact: foundScenario
            };
        }

        // 5. Broad Category Matching (if no specific item found)
        if (this.containsAny(lowerMsg, this.intents.MENU)) {
            return {
                text: "Our menu features classic French cuisine. Ask me about specific dishes like 'Duck Confit' or 'Steak Frites'!",
                emotion: 'neutral'
            };
        }

        if (this.containsAny(lowerMsg, this.intents.WINE)) {
            return {
                text: "Our wine program highlights French classics and excellent New World comparisons. Ask me about 'Bordeaux' or 'Pinot Noir'.",
                emotion: 'neutral'
            };
        }

        // 6. Fallback
        return {
            text: "Je suis désolé, I did not quite catch that. Try asking me about a specific menu item, wine, or culinary term. For example: 'Tell me about the Escargot'.",
            emotion: 'surprised'
        };
    }

    private containsAny(text: string, keywords: string[]): boolean {
        return keywords.some(keyword => text.includes(keyword));
    }
}

export const marcelService = new MarcelService();
