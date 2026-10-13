import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, FileText, BookOpen } from 'lucide-react';
import { TABLE_OF_CONTENTS, PROGRAMS, SERVICES_NUMERIQUES, DEMARCHES_ITEMS, CLUBS_LIST, FAQ_LIST } from '../data/guideData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToPage: (page: number) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigateToPage
}) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();

    const results: Array<{ title: string; desc: string; page: number; category: string }> = [];

    // Search in Table of Contents
    TABLE_OF_CONTENTS.forEach((item) => {
      if (item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q) || item.kicker.toLowerCase().includes(q)) {
        results.push({
          title: item.title,
          desc: item.subtitle,
          page: item.page,
          category: 'Chapitre'
        });
      }
    });

    // Search in Programs
    PROGRAMS.forEach((prog) => {
      if (
        prog.code.toLowerCase().includes(q) ||
        prog.name.toLowerCase().includes(q) ||
        prog.description.toLowerCase().includes(q) ||
        prog.competences.some((c) => c.toLowerCase().includes(q))
      ) {
        results.push({
          title: `${prog.code} — ${prog.name}`,
          desc: prog.description,
          page: 4,
          category: 'Filière'
        });
      }
    });

    // Search in Services
    SERVICES_NUMERIQUES.forEach((srv) => {
      if (srv.title.toLowerCase().includes(q) || srv.desc.toLowerCase().includes(q)) {
        results.push({
          title: srv.title,
          desc: srv.desc,
          page: 6,
          category: 'Service Numérique'
        });
      }
    });

    // Search in Démarches
    DEMARCHES_ITEMS.forEach((d) => {
      if (d.title.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q) || d.steps.toLowerCase().includes(q)) {
        results.push({
          title: d.title,
          desc: d.desc,
          page: 7,
          category: 'Démarche'
        });
      }
    });

    // Search in Clubs
    CLUBS_LIST.forEach((c) => {
      if (c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q) || c.theme.toLowerCase().includes(q)) {
        results.push({
          title: c.name,
          desc: c.desc,
          page: 9,
          category: 'Club'
        });
      }
    });

    // Search in FAQ
    FAQ_LIST.forEach((f) => {
      if (f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)) {
        results.push({
          title: f.question,
          desc: f.answer,
          page: f.page,
          category: 'FAQ'
        });
      }
    });

    return results.slice(0, 8);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input header */}
        <div className="p-4 border-b border-stone-200 flex items-center gap-3 bg-stone-50">
          <Search className="w-5 h-5 text-[#FE8235]" />
          <input
            autoFocus
            type="text"
            placeholder="Rechercher une filière, bourse, démarche, club, contact..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm focus:outline-none text-[#1F2432] placeholder-stone-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-stone-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-mono px-2 py-1 bg-stone-200 hover:bg-stone-300 rounded text-stone-700 font-semibold"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          {query.trim() === '' ? (
            <div className="text-center py-6 text-stone-400 text-xs">
              <p>Tapez un mot-clé pour chercher dans les 14 planches du guide.</p>
              <div className="flex flex-wrap justify-center gap-2 mt-3 text-[11px]">
                {['Minhati', 'GEMD', 'Emploi du temps', 'Certificat', 'ENACTUS', 'Erasmus+'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="text-center py-8 text-stone-500 text-xs">
              Aucun résultat pour « {query} ».
            </div>
          ) : (
            searchResults.map((res, i) => (
              <div
                key={i}
                onClick={() => {
                  onNavigateToPage(res.page);
                  onClose();
                }}
                className="p-3 rounded-xl hover:bg-[#03594E]/5 cursor-pointer border border-stone-100 hover:border-[#03594E]/30 transition-all flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.2 rounded bg-[#FE8235]/15 text-[#FE8235]">
                      {res.category}
                    </span>
                    <span className="text-[10px] font-mono text-stone-400">
                      Page {res.page < 10 ? `0${res.page}` : res.page}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-xs text-[#03594E]">
                    {res.title}
                  </h4>
                  <p className="text-[11px] text-stone-600 line-clamp-1 mt-0.5">
                    {res.desc}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 shrink-0 ml-3" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
