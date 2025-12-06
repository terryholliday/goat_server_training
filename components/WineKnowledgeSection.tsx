import React, { useState, useMemo } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Button } from './Button';
import { WINES } from '../data/wines';
import { WINE_KNOWLEDGE_PAGES, IMAGE_MAP } from '../constants';
import { SafeImage } from './SafeImage';

interface WineKnowledgeSectionProps {
  onComplete: () => void;
}

export const WineKnowledgeSection: React.FC<WineKnowledgeSectionProps> = ({ onComplete }) => {
  // Mode: 'learn' (intro slides) or 'list' (searchable database)
  const [mode, setMode] = useState<'learn' | 'list'>('learn');
  const [learnPage, setLearnPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'All' | 'Red' | 'White' | 'Sparkling' | 'Rosé'>('All');

  // Learn Mode Logic
  const currentLearnPage = WINE_KNOWLEDGE_PAGES[learnPage];
  const isLastLearnPage = learnPage === WINE_KNOWLEDGE_PAGES.length - 1;

  const handleNextLearn = () => {
    if (isLastLearnPage) {
      setMode('list');
    } else {
      setLearnPage(prev => prev + 1);
    }
  };

  // List Mode Logic
  const filteredWines = useMemo(() => {
    return WINES.filter(wine => {
      const matchesSearch = wine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        wine.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (wine.varietal && wine.varietal.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesType = filterType === 'All' || wine.type === filterType;
      return matchesSearch && matchesType;
    });
  }, [searchTerm, filterType]);

  if (mode === 'learn') {
    return (
      <SectionWrapper title={`Wine Philosophy & Regions (${learnPage + 1}/${WINE_KNOWLEDGE_PAGES.length})`} accent="amber">
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="bg-amber-50/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-4">{currentLearnPage.title}</h3>
              <div className="text-base leading-relaxed text-gray-700 space-y-4 whitespace-pre-wrap">
                {currentLearnPage.content}
              </div>
            </div>
            <SafeImage src={IMAGE_MAP.wineKnowledge[learnPage] || IMAGE_MAP.fallback} alt={currentLearnPage.title} caption={currentLearnPage.title} />
          </div>
          <div className="flex justify-between items-center">
            <Button variant="outline" disabled={learnPage === 0} onClick={() => setLearnPage(p => p - 1)}>Back</Button>
            <Button onClick={handleNextLearn}>
              {isLastLearnPage ? 'Explore Wine List' : 'Next'}
            </Button>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper title="Interactive Wine List" accent="amber">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search wines..."
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-500 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {['All', 'Red', 'White', 'Sparkling', 'Rosé'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filterType === type
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWines.map((wine) => (
            <div key={wine.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wide ${wine.type === 'Red' ? 'bg-red-100 text-red-800' :
                    wine.type === 'White' ? 'bg-yellow-100 text-yellow-800' :
                      wine.type === 'Rosé' ? 'bg-pink-100 text-pink-800' :
                        'bg-slate-100 text-slate-800'
                  }`}>
                  {wine.type}
                </span>
                {wine.varietal && <span className="text-xs text-gray-500 font-medium">{wine.varietal}</span>}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">{wine.name}</h4>
              <p className="text-sm text-amber-700 font-medium mb-3">{wine.region}</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{wine.description}</p>
              {wine.pairing && (
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500"><span className="font-semibold">Best Pairing:</span> {wine.pairing}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button onClick={onComplete} size="lg" className="w-full md:w-auto">
            Complete Wine Module
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};
