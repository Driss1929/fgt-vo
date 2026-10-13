import React from 'react';
import { ProgramDetail } from '../data/guideData';
import { X, GraduationCap, CheckCircle2, Briefcase, Globe2, BookOpen } from 'lucide-react';

interface ProgramModalProps {
  program: ProgramDetail | null;
  onClose: () => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({ program, onClose }) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-6 text-white relative"
          style={{ backgroundColor: program.color }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-85">
            <GraduationCap className="w-4 h-4" />
            <span>{program.cycle} {program.number ? `· ${program.number}` : ''}</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1 tracking-tight">
            {program.code} — {program.name}
          </h2>
          <p className="text-sm font-sans opacity-90 mt-1">
            {program.fullName}
          </p>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#1F2432]">
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FE8235] mb-2 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              Présentation de la filière
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed bg-[#F0F4F5] p-3.5 rounded-xl border-l-4 border-[#03594E]">
              {program.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#03594E] mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FE8235]" />
                Objectifs de formation
              </h3>
              <ul className="text-xs space-y-2 text-stone-700">
                {program.objectifs.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FE8235] mt-1.5 shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#03594E] mb-3 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-[#03594E]" />
                Débouchés & Carrières
              </h3>
              <ul className="text-xs space-y-2 text-stone-700">
                {program.debouches.map((deb, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#03594E] mt-1.5 shrink-0" />
                    <span>{deb}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#F8C62F]/40 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-[#FE8235]" />
              <span className="text-xs font-medium text-stone-800">Langues d’enseignement :</span>
              <div className="flex gap-1.5">
                {program.langues.map((l, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 rounded bg-white border border-stone-200 text-stone-700 font-medium">
                    {l}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://fegt.uiz.ac.ma/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#03594E] hover:underline"
            >
              Consulter le syllabus complet sur fegt.uiz.ac.ma →
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors shadow-sm"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
