import React, { useState, useEffect, useCallback } from 'react';
import './styles/pdfLayout.css';
import {
  Grouped11Page01Cover,
  Grouped11Page02Welcome,
  Grouped11Page03TaroudantFaculty,
  Grouped11Page04Programs,
  Grouped11Page05FirstStepsAccueil,
  Grouped11Page06DigitalServices,
  Grouped11Page07DemarchesReussite,
  Grouped11Page08SpecificNeeds,
  Grouped11Page09ClubsProjets,
  Grouped11Page10EventsCultureCareers,
  Grouped11Page11InternationalRightsContacts
} from './components/PDFGrouped11Pages';
import {
  GroupedPage01Cover,
  GroupedPage02Welcome,
  GroupedPage03TaroudantFaculty,
  GroupedPage04Programs,
  GroupedPage05FirstStepsAccueil,
  GroupedPage06DigitalServices,
  GroupedPage07DemarchesReussite,
  GroupedPage08SpecificNeeds,
  GroupedPage09ClubsProjets,
  GroupedPage10SemaineEvenementsUIZ,
  GroupedPage11CultureEmployabilite,
  GroupedPage12InternationalNewsletter,
  GroupedPage13DroitsFaq,
  GroupedPage14Contacts
} from './components/PDFGrouped14Pages';
import {
  PDFPage01,
  PDFPage02,
  PDFPage03,
  PDFPage04,
  PDFPage05,
  PDFPage06,
  PDFPage07,
  PDFPage08,
  PDFPage09,
  PDFPage10,
  PDFPage11,
  PDFPage12,
  PDFPage13,
  PDFPage14,
  PDFPage15,
  PDFPage16,
  PDFPage17,
  PDFPage18,
  PDFPage19,
  PDFPage20,
  PDFPage21,
  PDFPage22
} from './components/PDFPages';
import { ProgramModal } from './components/ProgramModal';
import { DemarcheModal } from './components/DemarcheModal';
import { ProjectProposalModal } from './components/ProjectProposalModal';
import { SearchModal } from './components/SearchModal';
import { TableOfContentsDrawer } from './components/TableOfContentsDrawer';
import { QuickJumpDropdown } from './components/QuickJumpDropdown';
import { GeminiChatbot } from './components/GeminiChatbot';
import { FEGTOfficialLogo } from './components/OfficialLogo';
import {
  PROGRAMS,
  DEMARCHES_ITEMS,
  ProgramDetail,
  TABLE_OF_CONTENTS_11,
  TABLE_OF_CONTENTS_14,
  TABLE_OF_CONTENTS_22
} from './data/guideData';
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Layers,
  Search,
  BookOpen,
  SlidersHorizontal,
  Maximize2,
  Minimize2,
  Bot
} from 'lucide-react';

export default function App() {
  // Format mode: '22pages' (Expanded 1 axe per page) vs '14pages' (Standard grouped) vs '11pages' (Compact update)
  const [guideFormat, setGuideFormat] = useState<'11pages' | '14pages' | '22pages'>('22pages');
  // View mode: 'all' (continuous scroll) vs 'single' (page flip)
  const [viewMode, setViewMode] = useState<'all' | 'single'>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [zoom, setZoom] = useState<number>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Fullscreen state listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = useCallback(() => {
    try {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    } catch {
      // ignore
    }
  }, []);

  // Modals
  const [selectedProgram, setSelectedProgram] = useState<ProgramDetail | null>(null);
  const [selectedDemarche, setSelectedDemarche] = useState<{ title: string; desc: string; steps: string } | null>(null);
  const [isProposalOpen, setIsProposalOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isTocOpen, setIsTocOpen] = useState<boolean>(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState<boolean>(false);

  const totalPages = guideFormat === '11pages' ? 11 : guideFormat === '14pages' ? 14 : 22;
  const currentTOC = guideFormat === '11pages' ? TABLE_OF_CONTENTS_11 : guideFormat === '14pages' ? TABLE_OF_CONTENTS_14 : TABLE_OF_CONTENTS_22;

  // Track scroll progress in 'all' view mode
  useEffect(() => {
    if (viewMode !== 'all') {
      setScrollProgress(((currentPage) / totalPages) * 100);
      return;
    }

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        setScrollProgress(100);
        return;
      }
      const scrolled = window.scrollY;
      const pct = Math.min(100, Math.max(0, (scrolled / scrollHeight) * 100));
      setScrollProgress(pct);

      // Detect which page is currently closest to the reading view
      const pages = document.querySelectorAll('.pdf-page');
      let activeIdx = 1;
      const referenceLine = window.innerHeight * 0.4;
      pages.forEach((p, idx) => {
        const rect = p.getBoundingClientRect();
        if (rect.top <= referenceLine) {
          activeIdx = idx + 1;
        }
      });
      setCurrentPage(Math.min(totalPages, Math.max(1, activeIdx)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode, totalPages, guideFormat]);

  // Keep currentPage in valid range when switching formats
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [guideFormat, totalPages, currentPage]);

  const activeProgress = viewMode === 'single'
    ? ((currentPage) / totalPages) * 100
    : scrollProgress;

  // Keyboard navigation for single page mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isSearchOpen || isProposalOpen || selectedProgram || selectedDemarche || isTocOpen) return;
      if (viewMode === 'single') {
        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
          setCurrentPage((p) => Math.min(totalPages, p + 1));
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
          setCurrentPage((p) => Math.max(1, p - 1));
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, totalPages, isSearchOpen, isProposalOpen, selectedProgram, selectedDemarche, isTocOpen]);

  const handleJumpToPage = useCallback((p: number) => {
    setCurrentPage(p);
    if (viewMode === 'single') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => {
        const pages = document.querySelectorAll('.pdf-page');
        const target = pages[p - 1];
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  }, [viewMode]);

  const handleSelectProgramCode = (code: string) => {
    const prog = PROGRAMS.find((p) => p.code.toLowerCase() === code.toLowerCase());
    if (prog) setSelectedProgram(prog);
  };

  const handleOpenAction = (actionTitle: string) => {
    const item = DEMARCHES_ITEMS.find((d) =>
      actionTitle.toLowerCase().includes(d.title.toLowerCase().slice(0, 10))
    ) || {
      title: actionTitle,
      desc: 'Démarche administrative officielle auprès du service de scolarité de la Faculté.',
      steps: 'Connectez-vous à MyUIZ ou présentez-vous au guichet de scolarité muni de votre carte d’étudiant.'
    };
    setSelectedDemarche(item);
  };

  const renderSingle11Page = (num: number) => {
    switch (num) {
      case 1:
        return <Grouped11Page01Cover />;
      case 2:
        return <Grouped11Page02Welcome />;
      case 3:
        return <Grouped11Page03TaroudantFaculty />;
      case 4:
        return <Grouped11Page04Programs onSelectProgram={handleSelectProgramCode} />;
      case 5:
        return <Grouped11Page05FirstStepsAccueil />;
      case 6:
        return <Grouped11Page06DigitalServices />;
      case 7:
        return <Grouped11Page07DemarchesReussite onOpenAction={handleOpenAction} />;
      case 8:
        return <Grouped11Page08SpecificNeeds />;
      case 9:
        return <Grouped11Page09ClubsProjets onOpenProposalModal={() => setIsProposalOpen(true)} />;
      case 10:
        return <Grouped11Page10EventsCultureCareers />;
      case 11:
        return <Grouped11Page11InternationalRightsContacts />;
      default:
        return <Grouped11Page01Cover />;
    }
  };

  const renderSingle14Page = (num: number) => {
    switch (num) {
      case 1:
        return <GroupedPage01Cover />;
      case 2:
        return <GroupedPage02Welcome />;
      case 3:
        return <GroupedPage03TaroudantFaculty />;
      case 4:
        return <GroupedPage04Programs onSelectProgram={handleSelectProgramCode} />;
      case 5:
        return <GroupedPage05FirstStepsAccueil />;
      case 6:
        return <GroupedPage06DigitalServices />;
      case 7:
        return <GroupedPage07DemarchesReussite onOpenAction={handleOpenAction} />;
      case 8:
        return <GroupedPage08SpecificNeeds />;
      case 9:
        return <GroupedPage09ClubsProjets onOpenProposalModal={() => setIsProposalOpen(true)} />;
      case 10:
        return <GroupedPage10SemaineEvenementsUIZ />;
      case 11:
        return <GroupedPage11CultureEmployabilite />;
      case 12:
        return <GroupedPage12InternationalNewsletter />;
      case 13:
        return <GroupedPage13DroitsFaq />;
      case 14:
        return <GroupedPage14Contacts />;
      default:
        return <GroupedPage01Cover />;
    }
  };

  const renderSingle22Page = (num: number) => {
    switch (num) {
      case 1:
        return <PDFPage01 />;
      case 2:
        return <PDFPage02 />;
      case 3:
        return <PDFPage03 />;
      case 4:
        return <PDFPage04 />;
      case 5:
        return <PDFPage05 onSelectProgram={handleSelectProgramCode} />;
      case 6:
        return <PDFPage06 />;
      case 7:
        return <PDFPage07 />;
      case 8:
        return <PDFPage08 />;
      case 9:
        return <PDFPage09 onOpenAction={handleOpenAction} />;
      case 10:
        return <PDFPage10 />;
      case 11:
        return <PDFPage11 />;
      case 12:
        return <PDFPage12 />;
      case 13:
        return <PDFPage13 onOpenProposalModal={() => setIsProposalOpen(true)} />;
      case 14:
        return <PDFPage14 />;
      case 15:
        return <PDFPage15 />;
      case 16:
        return <PDFPage16 />;
      case 17:
        return <PDFPage17 />;
      case 18:
        return <PDFPage18 />;
      case 19:
        return <PDFPage19 />;
      case 20:
        return <PDFPage20 />;
      case 21:
        return <PDFPage21 />;
      case 22:
        return <PDFPage22 />;
      default:
        return <PDFPage01 />;
    }
  };

  return (
    <div className="pdf-viewer-root">
      {/* Top Floating Control Bar (Hidden on print) */}
      <header className="app-shell-header sticky top-0 z-50 bg-[#03594E]/95 text-white shadow-lg shadow-[#012f27]/15 backdrop-blur-md border-b border-white/10 print:hidden">
        <div className="px-3 sm:px-5 py-2.5 sm:py-3">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
          {/* Logo & Document Title */}
          <div className="flex min-w-0 max-w-[calc(100%-3rem)] items-center gap-2.5">
            <FEGTOfficialLogo variant="boxed" size="sm" className="!px-2 !py-1 !rounded-lg shrink-0" />
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-sm sm:text-lg tracking-wide text-white drop-shadow-sm truncate">
                FEGT · Guide de la Vie de l’Étudiant
              </span>
              <span className="hidden sm:inline-flex shrink-0 text-[10px] sm:text-[11px] font-mono font-bold bg-[#F8C62F]/20 text-[#F8C62F] px-2 py-0.5 rounded-full border border-[#F8C62F]/40 shadow-xs">
                Édition 2026–2027
              </span>
            </div>
            {/* Reading position badge */}
            <span 
              className="hidden md:inline-flex items-center text-[10px] font-mono font-bold text-[#F8C62F] bg-black/25 px-2 py-0.5 rounded border border-white/10"
              title={`Page ${currentPage} sur ${totalPages} (${Math.round(activeProgress)}%)`}
            >
              Page {currentPage < 10 ? `0${currentPage}` : currentPage} / {totalPages} · {Math.round(activeProgress)}%
            </span>
          </div>

          {/* View mode & Page Controls */}
          <div className="order-3 flex w-full items-center justify-between gap-2 rounded-xl bg-[#024138] px-2 py-1.5 text-xs sm:order-none sm:w-auto sm:justify-start">
            <div className="flex bg-black/20 p-0.5 rounded-lg">
              <button
                onClick={() => setViewMode('all')}
                className={`px-2.5 py-1 rounded-md transition-all font-sans ${
                  viewMode === 'all'
                    ? 'bg-white text-[#03594E] font-bold shadow'
                    : 'text-stone-300 hover:text-white'
                }`}
                title="Toutes les pages défilables"
              >
                Défilement
              </button>
              <button
                onClick={() => setViewMode('single')}
                className={`px-2.5 py-1 rounded-md transition-all font-sans ${
                  viewMode === 'single'
                    ? 'bg-white text-[#03594E] font-bold shadow'
                    : 'text-stone-300 hover:text-white'
                }`}
                title="Consulter page par page"
              >
                Feuilletoir
              </button>
            </div>

            {viewMode === 'single' && (
              <div className="flex items-center gap-1 border-l border-white/20 pl-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage <= 1}
                  className="p-1 rounded hover:bg-white/10 disabled:opacity-30"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <select
                  value={currentPage}
                  onChange={(e) => setCurrentPage(Number(e.target.value))}
                  className="bg-transparent text-white font-mono text-xs font-bold px-1 py-0.5 rounded border border-white/20 cursor-pointer"
                >
                  {currentTOC.map((item) => (
                    <option key={item.page} value={item.page} className="text-stone-900">
                      Page {item.page < 10 ? `0${item.page}` : item.page}
                    </option>
                  ))}
                </select>
                <span className="text-stone-300 text-xs font-mono">/ {totalPages}</span>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage >= totalPages}
                  className="p-1 rounded hover:bg-white/10 disabled:opacity-30"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Zoom Controls */}
            <div className="hidden xl:flex items-center gap-1 border-l border-white/20 pl-2 text-stone-300">
              <button
                onClick={() => setZoom((z) => Math.max(0.6, z - 0.1))}
                className="p-1 hover:text-white rounded"
                title="Zoom arrière"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] font-mono">{Math.round(zoom * 100)}%</span>
              <button
                onClick={() => setZoom((z) => Math.min(1.3, z + 0.1))}
                className="p-1 hover:text-white rounded"
                title="Zoom avant"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setZoom(1)}
                className="text-[10px] px-1.5 py-0.5 rounded hover:bg-white/10 text-stone-200"
              >
                100%
              </button>
            </div>
          </div>

          {/* Actions: Accès Rapide (Quick Jump), Sommaire, Recherche, Plein écran */}
          <div className="flex items-center gap-1 sm:gap-2">
            <QuickJumpDropdown
              currentPage={currentPage}
              totalPages={totalPages}
              guideFormat={guideFormat}
              onJumpToPage={handleJumpToPage}
              onSwitchFormat={setGuideFormat}
            />

            <button
              onClick={() => setIsTocOpen(true)}
              className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8C62F] text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
              title="Consulter le sommaire complet"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#F8C62F]" />
              <span className="hidden sm:inline">Sommaire</span>
            </button>

            <button
              onClick={() => setIsSearchOpen(true)}
              className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8C62F] text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
              title="Rechercher dans le guide (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-[#FE8235]" />
              <span className="hidden sm:inline">Recherche</span>
            </button>

            <button
              onClick={() => setIsChatbotOpen((prev) => !prev)}
              className="px-2.5 py-1.5 rounded-lg bg-emerald-600/60 hover:bg-emerald-600 text-white text-xs font-medium flex items-center gap-1.5 border border-[#F8C62F]/40 shadow-xs transition-all"
              title="Assistant IA FEGT 2026-2027"
            >
              <Bot className="w-3.5 h-3.5 text-[#F8C62F]" />
              <span className="hidden md:inline font-semibold">Assistant IA</span>
            </button>

            <button
              onClick={toggleFullscreen}
              className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium flex items-center gap-1.5 transition-all"
              title={isFullscreen ? "Quitter le plein écran" : "Passer en mode plein écran"}
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5 text-[#F8C62F]" />
                  <span className="hidden sm:inline">Réduire</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-[#F8C62F]" />
                  <span className="hidden sm:inline">Plein écran</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

        {/* Fine barre de progression horizontale (Page actuelle / Total) */}
        <div 
          className="w-full h-[3.5px] bg-[#012f27] relative overflow-hidden"
          role="progressbar"
          aria-valuenow={Math.round(activeProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          title={`Progression : Page ${currentPage} / ${totalPages} (${Math.round(activeProgress)}%)`}
        >
          <div
            className="h-full bg-gradient-to-r from-[#F8C62F] via-[#FE8235] to-[#FF7020] transition-[width] duration-150 ease-out shadow-[0_0_8px_rgba(254,130,53,0.9)]"
            style={{ width: `${Math.max(1, activeProgress)}%` }}
          />
        </div>
      </header>

      {/* Main Pages Canvas Container */}
      <main className="app-main w-full flex flex-col items-center justify-start">
        {/* VIEW MODE: ALL PAGES */}
        {viewMode === 'all' && (
          <div
            className="w-full flex flex-col items-center transition-transform origin-top"
            style={{
              transform: zoom !== 1 ? `scale(${zoom})` : undefined,
              marginBottom: zoom > 1 ? `${(zoom - 1) * (totalPages * 300)}px` : undefined
            }}
          >
            {guideFormat === '11pages' ? (
              <>
                <Grouped11Page01Cover />
                <Grouped11Page02Welcome />
                <Grouped11Page03TaroudantFaculty />
                <Grouped11Page04Programs onSelectProgram={handleSelectProgramCode} />
                <Grouped11Page05FirstStepsAccueil />
                <Grouped11Page06DigitalServices />
                <Grouped11Page07DemarchesReussite onOpenAction={handleOpenAction} />
                <Grouped11Page08SpecificNeeds />
                <Grouped11Page09ClubsProjets onOpenProposalModal={() => setIsProposalOpen(true)} />
                <Grouped11Page10EventsCultureCareers />
                <Grouped11Page11InternationalRightsContacts />
              </>
            ) : guideFormat === '14pages' ? (
              <>
                <GroupedPage01Cover />
                <GroupedPage02Welcome />
                <GroupedPage03TaroudantFaculty />
                <GroupedPage04Programs onSelectProgram={handleSelectProgramCode} />
                <GroupedPage05FirstStepsAccueil />
                <GroupedPage06DigitalServices />
                <GroupedPage07DemarchesReussite onOpenAction={handleOpenAction} />
                <GroupedPage08SpecificNeeds />
                <GroupedPage09ClubsProjets onOpenProposalModal={() => setIsProposalOpen(true)} />
                <GroupedPage10SemaineEvenementsUIZ />
                <GroupedPage11CultureEmployabilite />
                <GroupedPage12InternationalNewsletter />
                <GroupedPage13DroitsFaq />
                <GroupedPage14Contacts />
              </>
            ) : (
              <>
                <PDFPage01 />
                <PDFPage02 />
                <PDFPage03 />
                <PDFPage04 />
                <PDFPage05 onSelectProgram={handleSelectProgramCode} />
                <PDFPage06 />
                <PDFPage07 />
                <PDFPage08 />
                <PDFPage09 onOpenAction={handleOpenAction} />
                <PDFPage10 />
                <PDFPage11 />
                <PDFPage12 />
                <PDFPage13 onOpenProposalModal={() => setIsProposalOpen(true)} />
                <PDFPage14 />
                <PDFPage15 />
                <PDFPage16 />
                <PDFPage17 />
                <PDFPage18 />
                <PDFPage19 />
                <PDFPage20 />
                <PDFPage21 />
                <PDFPage22 />
              </>
            )}
          </div>
        )}

        {/* VIEW MODE: SINGLE PAGE (Feuilletoir) */}
        {viewMode === 'single' && (
          <div className="w-full flex flex-col items-center py-4 print:hidden">
            <div className="relative w-full flex justify-center items-center">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage <= 1}
                className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-[#03594E] shadow-xl items-center justify-center transition-all hover:scale-105 disabled:opacity-20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div
                className="origin-top transition-transform"
                style={{
                  transform: zoom !== 1 ? `scale(${zoom})` : undefined,
                  marginBottom: zoom > 1 ? `${(zoom - 1) * 320}px` : undefined
                }}
              >
                {guideFormat === '11pages'
                  ? renderSingle11Page(currentPage)
                  : guideFormat === '14pages'
                  ? renderSingle14Page(currentPage)
                  : renderSingle22Page(currentPage)}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage >= totalPages}
                className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-[#03594E] shadow-xl items-center justify-center transition-all hover:scale-105 disabled:opacity-20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail selector */}
            <div className="w-full max-w-4xl mt-6 p-3 bg-white/90 backdrop-blur rounded-xl border border-stone-300 shadow-sm flex items-center gap-2 overflow-x-auto">
              <span className="text-[10px] font-mono font-bold uppercase text-[#03594E] shrink-0 px-2 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-[#FE8235]" />
                Planches ({totalPages}) :
              </span>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      currentPage === i + 1
                        ? 'bg-[#03594E] text-white shadow'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* MODALS */}
      <ProgramModal program={selectedProgram} onClose={() => setSelectedProgram(null)} />
      <DemarcheModal item={selectedDemarche} onClose={() => setSelectedDemarche(null)} />
      <ProjectProposalModal isOpen={isProposalOpen} onClose={() => setIsProposalOpen(false)} />
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateToPage={handleJumpToPage}
      />
      <TableOfContentsDrawer
        isOpen={isTocOpen}
        currentPage={currentPage}
        onClose={() => setIsTocOpen(false)}
        tocItems={currentTOC}
        onSelectPage={handleJumpToPage}
      />
      <GeminiChatbot
        isOpenExternal={isChatbotOpen}
        onToggleExternal={setIsChatbotOpen}
        onNavigateToPage={handleJumpToPage}
      />
    </div>
  );
}
