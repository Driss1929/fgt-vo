import React from 'react';
import { X, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

interface DemarcheModalProps {
  item: { title: string; desc: string; steps: string } | null;
  onClose: () => void;
}

export const DemarcheModal: React.FC<DemarcheModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#03594E] p-5 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F8C62F]">
            <FileText className="w-4 h-4" />
            <span>Démarche Administrative FEGT</span>
          </div>
          <h2 className="text-xl font-serif font-bold mt-1 text-white">
            {item.title}
          </h2>
        </div>

        <div className="p-6 space-y-4 text-stone-800 text-xs">
          <div>
            <h4 className="font-mono font-bold uppercase text-[#FE8235] text-[11px] mb-1">
              Description & Utilité
            </h4>
            <p className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-stone-700 leading-relaxed">
              {item.desc}
            </p>
          </div>

          <div>
            <h4 className="font-mono font-bold uppercase text-[#03594E] text-[11px] mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#03594E]" />
              Procédure étape par étape
            </h4>
            <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#F8C62F]/50 text-stone-800 font-mono text-[11px] leading-relaxed">
              {item.steps}
            </div>
          </div>

          <div className="pt-2 border-t border-stone-200 flex items-center justify-between">
            <a
              href="https://fegt.uiz.ac.ma/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#03594E] font-bold inline-flex items-center gap-1 hover:underline text-[11px]"
            >
              Accéder au portail MyUIZ <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-stone-100 text-stone-700 font-bold rounded-lg hover:bg-stone-200"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
