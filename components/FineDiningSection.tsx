import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Button } from './Button';
import { SafeImage } from './SafeImage';
import { IMAGE_MAP } from '../constants';

interface FineDiningSectionProps {
    onComplete: () => void;
}

const FINE_DINING_STEPS = [
    {
        title: "Table Maintenance & Crumbing",
        content: `A clean table is the canvas of fine dining.

1.  **Crumbing**: Use a crumber to clear crumbs between courses, typically before dessert. Sweep from the guest's left side onto a small plate held below the table edge.
2.  **Cutlery**: Reset cutlery for the next course *before* the food arrives. Never let a guest hold used cutlery while you clear a plate.
3.  **Glassware**: Remove empty glasses immediately, unless the guest requests to keep them. Handle all glassware by the stem.`,
        image: IMAGE_MAP.sequencePages[6] // Using check-back image as fallback for maintenance
    },
    {
        title: "Napkin Etiquette",
        content: `The napkin is a silent signal of the guest's status.

*   **Guest Leaves Temporarily**: If a guest stands up (e.g., for the restroom), neatly fold their napkin and place it on the arm of their chair or the seat (if no arms). This signals to other staff that the guest is returning.
*   **Guest Departs**: When the guest leaves for good, the napkin stays on the table.
*   **Dropped Napkin**: If a guest drops a napkin, immediately pick it up and replace it with a fresh one from your service tray. Do not place the dirty napkin back on the table.`,
        image: IMAGE_MAP.sequencePages[2] // Seating image
    },
    {
        title: "Wine Service Ritual",
        content: `Presenting and pouring wine is a ceremony.

1.  **Presentation**: Present the bottle to the host, label facing them, confirming the vintage and producer.
2.  **Opening**: Cut the foil neatly below the lip. Wipe the bottle top. Insert the corkscrew and pull smoothly without a 'pop'. Present the cork to the host.
3.  **The Taste**: Pour a small 1oz taste for the host. Wait for approval.
4.  **The Pour**: Pour for ladies first (clockwise), then gentlemen, and finally the host. Fill glasses no more than 1/3 to 1/2 full to allow the wine to breathe.
5.  **The Drop**: Twist the bottle at the end of each pour to prevent dripping. Wipe with a serviette if needed.`,
        image: IMAGE_MAP.wineKnowledge[0] // Wine philosophy image
    },
    {
        title: "Professional Upselling",
        content: `Upselling in fine dining is about enhancing the experience, not just increasing the check.

*   **Descriptive Language**: Don't just say "It's good." Say, "The halibut is pan-seared with a beautiful caper-brown butter that really highlights the fish's delicate texture."
*   **The Sullivan Nod**: When suggesting a specific item (e.g., "Would you like to start with the Oysters?"), nod your head slightly. It subconsciously encourages agreement.
*   **Pairings**: Always offer a specific pairing. "The Sautéed Mussels are fantastic with a glass of the Dom. Paul Buisse Sauvignon Blanc."`,
        image: IMAGE_MAP.menuKnowledge[1] // Main course image
    }
];

export const FineDiningSection: React.FC<FineDiningSectionProps> = ({ onComplete }) => {
    const [step, setStep] = useState(0);
    const data = FINE_DINING_STEPS[step];
    const isLast = step === FINE_DINING_STEPS.length - 1;

    const handleNext = () => {
        if (isLast) {
            onComplete();
        } else {
            setStep(s => s + 1);
        }
    };

    return (
        <SectionWrapper title={`Fine Dining Etiquette (${step + 1}/${FINE_DINING_STEPS.length})`} accent="rose">
            <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-800">{data.title}</h3>
                        <div className="prose prose-indigo text-gray-600 leading-relaxed whitespace-pre-wrap">
                            {data.content}
                        </div>
                    </div>
                    <div className="relative rounded-lg overflow-hidden shadow-lg bg-slate-50 dark:bg-zinc-800 flex items-center justify-center p-2">
                        <SafeImage
                            src={data.image || IMAGE_MAP.fallback}
                            alt={data.title}
                            className="w-full max-h-80 object-contain mx-auto"
                        />
                    </div>
                </div>

                <div className="flex justify-between pt-4 border-t border-gray-100">
                    <Button
                        variant="outline"
                        disabled={step === 0}
                        onClick={() => setStep(s => s - 1)}
                    >
                        Previous
                    </Button>
                    <Button onClick={handleNext}>
                        {isLast ? 'Complete Module' : 'Next Topic'}
                    </Button>
                </div>
            </div>
        </SectionWrapper>
    );
};
