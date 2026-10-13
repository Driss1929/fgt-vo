import React from 'react';
import { X, BookOpen, ChevronRight, Check } from 'lucide-react';
import { TABLE_OF_CONTENTS } from '../data/guideData';
import { FEGTOfficialLogo } from './OfficialLogo';

interface TableOfContentsDrawerProps {
  isOpen: boolean;
  currentPage: number;
  onClose: () => void;
  onSelectPage: (page: number) => void;
  tocItems?: typeof TABLE_OF_CONTENTS;
}

export const TableOfContentsDrawer: React.FC<TableOfContentsDrawerProps> = ({
  isOpen,
  currentPage,
  onClose,
  onSelectPage,
  tocItems = TABLE_OF_CONTENTS
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col border-l border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#03594E] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-[#F8C62F]" />
            <div>
              <h2 className="font-serif font-bold text-lg leading-tight">
                Sommaire du Guide
              </h2>
              <span className="text-xs text-stone-300 font-mono">
                {tocItems.length} planches · Année 2026–2027
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of pages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
          {tocItems.map((item) => {
            const isCurrent = currentPage === item.page;
            return (
              <div
                key={item.page}
                onClick={() => {
                  onSelectPage(item.page);
                  onClose();
                }}
                className={`p-3 rounded-xl cursor-pointer transition-all flex items-center justify-between ${
                  isCurrent
                    ? 'bg-[#03594E]/10 border-2 border-[#03594E] text-[#03594E]'
                    : 'hover:bg-stone-100 text-stone-800 border border-transparent'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                      isCurrent
                        ? 'bg-[#03594E] text-white'
                        : 'bg-stone-200 text-stone-700'
                    }`}
                  >
                    {item.page < 10 ? `0${item.page}` : item.page}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#FE8235] block font-semibold">
                      {item.kicker}
                    </span>
                    <h3 className="font-serif font-bold text-sm leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-500 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 ml-2">
                  {isCurrent ? (
                    <Check className="w-4 h-4 text-[#03594E]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 text-center flex flex-col items-center">
          <FEGTOfficialLogo variant="boxed" size="sm" className="mb-2 !px-2.5 !py-1" />
          <p className="text-xs text-stone-600 font-serif">
            Faculté d’Économie et de Gestion de Taroudant
          </p>
          <span className="text-[10px] text-stone-400 font-mono">
            Université Ibn Zohr · Édition officielle
          </span>
        </div>
      </div>
    </div>
  );
};
