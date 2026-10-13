import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  Compass,
  ChevronDown,
  Search,
  X,
  Check,
  Building2,
  GraduationCap,
  Laptop,
  FileCheck2,
  Users,
  Award,
  ShieldCheck,
  Layers,
  ArrowRight
} from 'lucide-react';
import { TABLE_OF_CONTENTS_22 } from '../data/guideData';

export interface MajorSection {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  startPage: number;
  endPage: number;
  color: string;
  badgeBg: string;
}

export const MAJOR_SECTIONS_22: MajorSection[] = [
  {
    id: 'decouverte',
    number: 'I',
    title: 'Découverte du Campus & Taroudant',
    description: 'Couverture, Mot de bienvenue, Ville de Taroudant & Faculté FEGT',
    icon: Building2,
    startPage: 1,
    endPage: 4,
    color: '#03594E',
    badgeBg: 'bg-[#03594E]/10 text-[#03594E]'
  },
  {
    id: 'formations',
    number: 'II',
    title: 'Offre de Formation & Pédagogie',
    description: 'Licences GEMD, MGE, ENDEB & Master MCI',
    icon: GraduationCap,
    startPage: 5,
    endPage: 5,
    color: '#0284C7',
    badgeBg: 'bg-sky-50 text-sky-700'
  },
  {
    id: 'accueil-numerique',
    number: 'III',
    title: 'Premiers Pas & Outils Numériques',
    description: 'Le premier mois, Espace d’accueil & écoute, 10 outils numériques',
    icon: Laptop,
    startPage: 6,
    endPage: 8,
    color: '#D97706',
    badgeBg: 'bg-amber-50 text-amber-700'
  },
  {
    id: 'demarches-reussite',
    number: 'IV',
    title: 'Démarches, IA & Accompagnement',
    description: 'Guichet administratif, Tutorat, IA responsable & Besoins spécifiques',
    icon: FileCheck2,
    startPage: 9,
    endPage: 11,
    color: '#059669',
    badgeBg: 'bg-emerald-50 text-emerald-700'
  },
  {
    id: 'vie-etudiante',
    number: 'V',
    title: 'Vie Associative & Projets Étudiants',
    description: 'Clubs étudiants actifs & Parcours de proposition de projet',
    icon: Users,
    startPage: 12,
    endPage: 13,
    color: '#7C3AED',
    badgeBg: 'bg-purple-50 text-purple-700'
  },
  {
    id: 'evenements-rayonnement',
    number: 'VI',
    title: 'Événements, Culture & Rayonnement',
    description: 'Semaine de l’étudiant, UIZ, Sport, Stages, Erasmus+ & Newsletter',
    icon: Award,
    startPage: 14,
    endPage: 19,
    color: '#DC2626',
    badgeBg: 'bg-rose-50 text-rose-700'
  },
  {
    id: 'cadre-contacts',
    number: 'VII',
    title: 'Cadre Réglementaire, FAQ & Contacts',
    description: 'Charte des droits & devoirs, Foire aux questions & Répertoire officiel',
    icon: ShieldCheck,
    startPage: 20,
    endPage: 22,
    color: '#4B5563',
    badgeBg: 'bg-stone-100 text-stone-700'
  }
];

interface QuickJumpDropdownProps {
  currentPage: number;
  totalPages: number;
  guideFormat: '11pages' | '14pages' | '22pages';
  onJumpToPage: (page: number) => void;
  onSwitchFormat?: (format: '11pages' | '14pages' | '22pages') => void;
}

export const QuickJumpDropdown: React.FC<QuickJumpDropdownProps> = ({
  currentPage,
  totalPages,
  guideFormat,
  onJumpToPage,
  onSwitchFormat
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'chapters' | 'all-pages'>('chapters');
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setSearchQuery('');
    }
  }, [isOpen]);

  // Current active section
  const currentSection = useMemo(() => {
    return MAJOR_SECTIONS_22.find(
      (sec) => currentPage >= sec.startPage && currentPage <= sec.endPage
    ) || MAJOR_SECTIONS_22[0];
  }, [currentPage]);

  // Filtered pages for search
  const filteredPages = useMemo(() => {
    if (!searchQuery.trim()) return TABLE_OF_CONTENTS_22;
    const q = searchQuery.toLowerCase().trim();
    return TABLE_OF_CONTENTS_22.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.kicker.toLowerCase().includes(q) ||
        `page ${item.page}`.includes(q) ||
        `axe ${item.page - 2}`.includes(q)
    );
  }, [searchQuery]);

  // Filtered sections for search
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return MAJOR_SECTIONS_22;
    const q = searchQuery.toLowerCase().trim();
    return MAJOR_SECTIONS_22.filter(
      (sec) =>
        sec.title.toLowerCase().includes(q) ||
        sec.description.toLowerCase().includes(q) ||
        `section ${sec.number.toLowerCase()}`.includes(q)
    );
  }, [searchQuery]);

  const handleSelectPage = (pageNum: number) => {
    if (guideFormat !== '22pages' && onSwitchFormat) {
      onSwitchFormat('22pages');
    }
    onJumpToPage(pageNum);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button in Header */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all shadow-sm border ${
          isOpen
            ? 'bg-white text-[#03594E] border-white shadow-md'
            : 'bg-[#024138] hover:bg-[#012f27] text-white border-white/20 hover:border-white/40'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Accès rapide aux 22 chapitres du guide"
      >
        <Compass
          className={`w-3.5 h-3.5 transition-transform duration-300 ${
            isOpen ? 'rotate-90 text-[#03594E]' : 'text-[#F8C62F]'
          }`}
        />
        <span className="font-semibold tracking-wide">Accès rapide</span>
        <span className="hidden sm:inline-flex items-center text-[10px] font-mono px-1.5 py-0.2 rounded bg-black/25 text-[#F8C62F] border border-white/10 font-bold">
          22 ch.
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 opacity-80 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu Overlay & Card */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-[340px] sm:w-[420px] md:w-[460px] max-w-[calc(100vw-1.5rem)] rounded-2xl bg-white text-stone-900 shadow-2xl border border-stone-200/80 z-50 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150"
          style={{ maxHeight: 'calc(85vh - 70px)' }}
        >
          {/* Header Bar */}
          <div className="bg-[#03594E] text-white px-4 py-3 flex items-center justify-between border-b border-[#024138]">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#F8C62F]">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm sm:text-base leading-tight">
                  Accès Rapide · 22 Chapitres
                </h3>
                <p className="text-[11px] text-stone-200 font-sans opacity-90">
                  Navigation directe au format développé (1 page / axe)
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fermer le menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Search Input */}
          <div className="p-3 bg-stone-50 border-b border-stone-200">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un chapitre, axe, mot-clé..."
                className="w-full pl-9 pr-8 py-1.5 bg-white border border-stone-300 rounded-xl text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#03594E] focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-stone-400 hover:text-stone-600 rounded"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Navigation Tabs (Grands Chapitres vs Toutes les Planches) */}
            {!searchQuery && (
              <div className="mt-2.5 flex items-center bg-stone-200/80 p-0.5 rounded-lg text-xs">
                <button
                  onClick={() => setActiveTab('chapters')}
                  className={`flex-1 py-1 px-2 rounded-md font-medium text-[11px] sm:text-xs transition-all ${
                    activeTab === 'chapters'
                      ? 'bg-white text-[#03594E] font-bold shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  7 Sections Majeures
                </button>
                <button
                  onClick={() => setActiveTab('all-pages')}
                  className={`flex-1 py-1 px-2 rounded-md font-medium text-[11px] sm:text-xs transition-all ${
                    activeTab === 'all-pages'
                      ? 'bg-white text-[#03594E] font-bold shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  22 Planches Détaillées
                </button>
              </div>
            )}
          </div>

          {/* Format Alert if not in 22-page mode */}
          {guideFormat !== '22pages' && (
            <div className="px-3 py-2 bg-amber-50 border-b border-amber-200 flex items-center justify-between text-xs text-amber-900">
              <span className="text-[11px]">
                Actuellement en mode compact ({totalPages} pages).
              </span>
              <button
                onClick={() => onSwitchFormat && onSwitchFormat('22pages')}
                className="font-bold underline text-[#03594E] hover:text-[#012f27] text-[11px] ml-2 shrink-0"
              >
                Activer 22 pages
              </button>
            </div>
          )}

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {/* SEARCH RESULTS VIEW */}
            {searchQuery ? (
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500 px-1 font-bold">
                  Résultats ({filteredPages.length})
                </div>
                {filteredPages.length === 0 ? (
                  <div className="py-8 text-center text-xs text-stone-500">
                    Aucun chapitre trouvé pour « {searchQuery} »
                  </div>
                ) : (
                  filteredPages.map((item) => {
                    const isCurrent = currentPage === item.page;
                    return (
                      <button
                        key={item.page}
                        onClick={() => handleSelectPage(item.page)}
                        className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between group ${
                          isCurrent
                            ? 'bg-[#03594E]/10 border border-[#03594E] text-[#03594E]'
                            : 'hover:bg-stone-100 text-stone-800 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`w-7 h-7 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 ${
                              isCurrent
                                ? 'bg-[#03594E] text-white'
                                : 'bg-stone-200 text-stone-700 group-hover:bg-[#03594E] group-hover:text-white'
                            }`}
                          >
                            {item.page < 10 ? `0${item.page}` : item.page}
                          </span>
                          <div className="truncate">
                            <span className="text-[10px] font-mono text-[#FE8235] font-semibold block truncate">
                              {item.kicker}
                            </span>
                            <span className="font-serif font-bold text-xs sm:text-sm text-stone-900 block truncate">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-stone-500 truncate block">
                              {item.subtitle}
                            </span>
                          </div>
                        </div>
                        {isCurrent ? (
                          <Check className="w-4 h-4 text-[#03594E] shrink-0 ml-2" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })
                )}
              </div>
            ) : activeTab === 'chapters' ? (
              /* TAB 1: 7 MAJOR CHAPTERS */
              <div className="space-y-2">
                {filteredSections.map((sec) => {
                  const Icon = sec.icon;
                  const isCurrentSection =
                    currentPage >= sec.startPage && currentPage <= sec.endPage;

                  return (
                    <div
                      key={sec.id}
                      className={`p-3 rounded-xl border transition-all ${
                        isCurrentSection
                          ? 'border-[#03594E] bg-[#03594E]/5 shadow-sm'
                          : 'border-stone-200/90 hover:border-stone-300 bg-white hover:bg-stone-50/70'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2.5">
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${sec.badgeBg}`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-mono font-bold text-[#FE8235]">
                                SECTION {sec.number}
                              </span>
                              <span className="text-[10px] font-mono text-stone-400">
                                · Planches {sec.startPage === sec.endPage ? `P.${sec.startPage}` : `P.${sec.startPage} à ${sec.endPage}`}
                              </span>
                            </div>
                            <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-900 leading-snug">
                              {sec.title}
                            </h4>
                            <p className="text-[11px] text-stone-500 leading-tight mt-0.5 line-clamp-1">
                              {sec.description}
                            </p>
                          </div>
                        </div>

                        {/* Direct Jump to Section Start */}
                        <button
                          onClick={() => handleSelectPage(sec.startPage)}
                          className={`px-2 py-1 rounded-lg text-[11px] font-bold font-mono shrink-0 transition-colors flex items-center gap-1 ${
                            isCurrentSection
                              ? 'bg-[#03594E] text-white hover:bg-[#024138]'
                              : 'bg-stone-100 hover:bg-[#03594E] text-stone-700 hover:text-white'
                          }`}
                          title={`Aller à la page ${sec.startPage}`}
                        >
                          <span>P.{sec.startPage < 10 ? `0${sec.startPage}` : sec.startPage}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Sub-pages pills for multi-page section */}
                      {sec.startPage !== sec.endPage && (
                        <div className="mt-2.5 pt-2 border-t border-stone-100 flex flex-wrap gap-1">
                          {Array.from({ length: sec.endPage - sec.startPage + 1 }).map((_, idx) => {
                            const pNum = sec.startPage + idx;
                            const isPNumActive = currentPage === pNum;
                            const pageItem = TABLE_OF_CONTENTS_22.find((item) => item.page === pNum);
                            return (
                              <button
                                key={pNum}
                                onClick={() => handleSelectPage(pNum)}
                                className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                                  isPNumActive
                                    ? 'bg-[#03594E] text-white font-bold'
                                    : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
                                }`}
                                title={pageItem ? `${pageItem.title} - ${pageItem.subtitle}` : `Page ${pNum}`}
                              >
                                P.{pNum < 10 ? `0${pNum}` : pNum} {pageItem ? `· ${pageItem.title.split(' ')[0]}` : ''}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              /* TAB 2: ALL 22 PAGES DETAILED LIST */
              <div className="space-y-1">
                {TABLE_OF_CONTENTS_22.map((item) => {
                  const isCurrent = currentPage === item.page;
                  return (
                    <button
                      key={item.page}
                      onClick={() => handleSelectPage(item.page)}
                      className={`w-full text-left p-2 rounded-xl transition-all flex items-center justify-between group ${
                        isCurrent
                          ? 'bg-[#03594E]/10 border border-[#03594E] text-[#03594E]'
                          : 'hover:bg-stone-100 text-stone-800 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`w-7 h-7 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 ${
                            isCurrent
                              ? 'bg-[#03594E] text-white'
                              : 'bg-stone-200 text-stone-700 group-hover:bg-[#03594E] group-hover:text-white'
                          }`}
                        >
                          {item.page < 10 ? `0${item.page}` : item.page}
                        </span>
                        <div className="truncate">
                          <span className="text-[10px] font-mono text-[#FE8235] font-semibold block truncate">
                            {item.kicker}
                          </span>
                          <span className="font-serif font-bold text-xs text-stone-900 block truncate">
                            {item.title}
                          </span>
                        </div>
                      </div>
                      {isCurrent ? (
                        <Check className="w-4 h-4 text-[#03594E] shrink-0 ml-1.5" />
                      ) : (
                        <span className="text-[10px] font-mono text-stone-400 group-hover:text-stone-700 shrink-0 ml-1.5">
                          P.{item.page < 10 ? `0${item.page}` : item.page}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Quick Page Jump Number Strip (Bottom) */}
          <div className="bg-stone-100 border-t border-stone-200 px-3 py-2">
            <div className="flex items-center justify-between text-[11px] mb-1.5">
              <span className="font-mono text-stone-500 font-semibold flex items-center gap-1">
                <Layers className="w-3 h-3 text-[#FE8235]" />
                Accès direct par numéro :
              </span>
              <span className="font-mono font-bold text-[#03594E]">
                Page {currentPage < 10 ? `0${currentPage}` : currentPage} / 22
              </span>
            </div>
            <div className="flex flex-wrap gap-1 max-h-16 overflow-y-auto">
              {Array.from({ length: 22 }).map((_, i) => {
                const p = i + 1;
                const isSelected = currentPage === p;
                return (
                  <button
                    key={p}
                    onClick={() => handleSelectPage(p)}
                    className={`w-7 h-6 rounded text-[11px] font-mono font-bold transition-all ${
                      isSelected
                        ? 'bg-[#03594E] text-white shadow-sm ring-1 ring-[#03594E]'
                        : 'bg-white hover:bg-stone-200 text-stone-700 border border-stone-300'
                    }`}
                  >
                    {p < 10 ? `0${p}` : p}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
