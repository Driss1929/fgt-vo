import React from 'react';
import {
  Printer,
  Search,
  BookOpen,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ZoomIn,
  ZoomOut,
  Sparkles,
  FileDown
} from 'lucide-react';
import { TABLE_OF_CONTENTS } from '../data/guideData';

interface TopToolbarProps {
  currentPage: number;
  totalPages: number;
  viewMode: 'a4' | 'scroll';
  zoom: number;
  onPageChange: (page: number) => void;
  onToggleViewMode: (mode: 'a4' | 'scroll') => void;
  onZoomChange: (newZoom: number) => void;
  onOpenSearch: () => void;
  onOpenToc: () => void;
  onPrint: () => void;
}

export const TopToolbar: React.FC<TopToolbarProps> = ({
  currentPage,
  totalPages,
  viewMode,
  zoom,
  onPageChange,
  onToggleViewMode,
  onZoomChange,
  onOpenSearch,
  onOpenToc,
  onPrint
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#03594E] text-white border-b border-[#024138] shadow-md px-3 sm:px-6 py-2.5 print:hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Brand & Title */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#FE8235] text-white flex items-center justify-center font-serif font-bold text-base shadow-sm">
            FEG
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif font-bold text-sm sm:text-base leading-tight">
                Guide de la Vie de l’Étudiant
              </h1>
              <span className="hidden sm:inline-block text-[10px] font-mono bg-[#CD935A]/30 text-amber-200 px-1.5 py-0.5 rounded border border-[#CD935A]/40">
                2026–2027
              </span>
            </div>
            <p className="text-[11px] text-emerald-200/90 font-sans hidden sm:block">
              Faculté d’Économie et de Gestion de Taroudant · Université Ibn Zohr
            </p>
          </div>
        </div>

        {/* Center: Page Controls (for A4 mode) & View Switcher */}
        <div className="flex items-center gap-2 bg-[#024138] p-1 rounded-xl border border-white/10 text-xs">
          {/* View mode toggle */}
          <div className="flex bg-black/20 p-0.5 rounded-lg">
            <button
              onClick={() => onToggleViewMode('a4')}
              className={`px-2.5 py-1 rounded-md font-sans transition-all flex items-center gap-1.5 ${
                viewMode === 'a4'
                  ? 'bg-white text-[#03594E] font-bold shadow-sm'
                  : 'text-stone-300 hover:text-white'
              }`}
              title="Affichage page par page format A4"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Mode A4</span>
            </button>
            <button
              onClick={() => onToggleViewMode('scroll')}
              className={`px-2.5 py-1 rounded-md font-sans transition-all flex items-center gap-1.5 ${
                viewMode === 'scroll'
                  ? 'bg-white text-[#03594E] font-bold shadow-sm'
                  : 'text-stone-300 hover:text-white'
              }`}
              title="Défilement continu de tout le guide"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Défilement continu</span>
            </button>
          </div>

          {/* Page Navigation when in A4 mode */}
          {viewMode === 'a4' && (
            <div className="flex items-center gap-1 border-l border-white/10 pl-2">
              <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage <= 1}
                className="p-1 rounded hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent"
                title="Page précédente"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <select
                value={currentPage}
                onChange={(e) => onPageChange(Number(e.target.value))}
                className="bg-transparent text-white font-mono font-bold text-xs px-1 py-0.5 rounded border border-white/20 focus:outline-none cursor-pointer"
              >
                {TABLE_OF_CONTENTS.map((item) => (
                  <option key={item.page} value={item.page} className="text-stone-900">
                    Page {item.page < 10 ? `0${item.page}` : item.page} · {item.title}
                  </option>
                ))}
              </select>

              <span className="text-stone-400 font-mono text-[11px]">/ {totalPages}</span>

              <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage >= totalPages}
                className="p-1 rounded hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent"
                title="Page suivante"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Zoom controls for A4 */}
          {viewMode === 'a4' && (
            <div className="hidden lg:flex items-center gap-1 border-l border-white/10 pl-2 text-stone-300">
              <button
                onClick={() => onZoomChange(Math.max(0.65, zoom - 0.1))}
                className="p-1 hover:text-white rounded"
                title="Zoom arrière"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] font-mono">{Math.round(zoom * 100)}%</span>
              <button
                onClick={() => onZoomChange(Math.min(1.4, zoom + 0.1))}
                className="p-1 hover:text-white rounded"
                title="Zoom avant"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onZoomChange(1)}
                className="text-[10px] hover:text-white ml-0.5 px-1 rounded hover:bg-white/10"
                title="Réinitialiser zoom"
              >
                100%
              </button>
            </div>
          )}
        </div>

        {/* Right Actions: Sommaire, Search, Print */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenToc}
            className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="Sommaire du guide"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#F8C62F]" />
            <span className="hidden sm:inline">Sommaire</span>
          </button>

          <button
            onClick={onOpenSearch}
            className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="Rechercher dans le guide"
          >
            <Search className="w-3.5 h-3.5 text-[#FE8235]" />
            <span className="hidden sm:inline">Recherche</span>
          </button>

          <button
            onClick={onPrint}
            className="px-3 py-1.5 rounded-lg bg-[#FE8235] hover:bg-[#e67026] text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
            title="Imprimer ou enregistrer au format PDF (A4)"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimer / PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};
