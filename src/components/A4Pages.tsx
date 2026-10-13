import React from 'react';
import {
  FEGTLogo,
  TaroudantRampartsArt,
  CampusBuildingArt,
  CampusCourtyardArt,
  StudentsSportArt,
  QRCodeSVG
} from './illustrations/VectorArt';
import {
  PROGRAMS,
  SERVICES_NUMERIQUES,
  DEMARCHES_ITEMS,
  CLUBS_LIST,
  EVENTS_UIZ,
  FAQ_LIST,
  ProgramDetail
} from '../data/guideData';
import {
  ArrowRight,
  ExternalLink,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Sparkles,
  ChevronRight,
  Award,
  BookOpen
} from 'lucide-react';

interface PageProps {
  onSelectProgram?: (prog: ProgramDetail) => void;
  onOpenDemarche?: (item: { title: string; desc: string; steps: string }) => void;
  onOpenProposalModal?: () => void;
}

/**
 * Standard Page Frame for print and screen
 */
const PageContainer: React.FC<{
  pageNumber: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
  isCover?: boolean;
}> = ({ pageNumber, kicker, title, children, isCover = false }) => {
  if (isCover) {
    return (
      <div className="a4-sheet relative w-full h-[297mm] max-h-[297mm] overflow-hidden bg-[#03594E] text-white p-12 sm:p-14 flex flex-col justify-between select-text print:p-12 print:h-[297mm] print:m-0 print:border-none shadow-2xl rounded-sm">
        {children}
      </div>
    );
  }

  return (
    <div className="a4-sheet relative w-full h-[297mm] max-h-[297mm] overflow-hidden bg-white text-[#1F2432] px-10 py-8 sm:px-12 sm:py-9 flex flex-col justify-between select-text print:px-10 print:py-8 print:h-[297mm] print:m-0 print:border-none shadow-2xl rounded-sm">
      {/* Top Header */}
      <div className="flex items-start justify-between border-b border-stone-200 pb-3 mb-4 shrink-0">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FE8235] block">
            {kicker}
          </span>
          <h2 className="text-xl sm:text-2xl font-serif text-[#03594E] tracking-tight leading-tight mt-0.5">
            {title}
          </h2>
        </div>
        <div className="font-serif text-2xl font-bold text-[#FE8235] shrink-0 ml-4">
          {pageNumber}
        </div>
      </div>

      {/* Main Page Body (Flex grow with controlled padding to prevent spillover) */}
      <div className="flex-1 flex flex-col justify-start overflow-hidden">
        {children}
      </div>

      {/* Standardized Bottom Footer */}
      <div className="border-t border-stone-200 pt-2.5 mt-3 flex items-center justify-between text-[9px] text-stone-500 font-sans shrink-0">
        <span className="font-medium text-stone-600">
          FEGT · Faculté d’Économie et de Gestion de Taroudant · Université Ibn Zohr
        </span>
        <span className="font-mono text-stone-400">
          Guide étudiant · 2026–2027 · Page {pageNumber}
        </span>
      </div>
    </div>
  );
};

/* =========================================================================
   PAGE 01 — COUVERTURE
   ========================================================================= */
export const Page01Cover: React.FC = () => {
  return (
    <PageContainer pageNumber="01" kicker="" title="" isCover>
      {/* Background Graphic and Shade */}
      <div className="absolute inset-0 z-0">
        <TaroudantRampartsArt height="h-full" className="opacity-45 mix-blend-luminosity scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03594E] via-[#03594E]/92 to-[#03594E]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02312b] via-transparent to-black/30" />
      </div>

      {/* Cover Content */}
      <div className="relative z-10 flex flex-col justify-between h-full py-2">
        {/* Top Header with official logo */}
        <div className="pt-2">
          <FEGTLogo variant="light" size="lg" />
          <div className="mt-14 inline-block">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#CD935A] uppercase border-b-2 border-[#FE8235] pb-1">
              GUIDE NUMÉRIQUE DE LA VIE DE L’ÉTUDIANT
            </span>
          </div>
        </div>

        {/* Center / Lower Main Typography */}
        <div className="my-auto max-w-xl">
          <h1 className="text-5xl sm:text-6xl font-serif leading-[1.05] tracking-tight text-white mb-4">
            La vie étudiante <br />
            <span className="italic font-normal text-[#F8C62F] drop-shadow-md">
              commence ici.
            </span>
          </h1>

          {/* Slogan officiel FEGT — Ultra-clair & contrasté */}
          <div className="inline-flex flex-wrap items-center gap-2 bg-[#022C26]/85 backdrop-blur-md border border-[#F8C62F]/50 px-4 py-2 rounded-full mb-5 shadow-lg">
            <span className="font-bold text-white text-sm sm:text-base">S’informer</span>
            <span className="text-[#F8C62F] text-xs">✦</span>
            <span className="font-bold text-white text-sm sm:text-base">S’orienter</span>
            <span className="text-[#F8C62F] text-xs">✦</span>
            <span className="font-bold text-white text-sm sm:text-base">Participer</span>
            <span className="text-[#F8C62F] text-xs">✦</span>
            <span className="font-bold text-white text-sm sm:text-base">Réussir</span>
          </div>

          {/* Cartouche d'édition officiel — Haute lisibilité */}
          <div className="bg-[#022C26]/90 backdrop-blur-md border border-[#FE8235]/40 border-l-4 border-l-[#FE8235] p-3.5 rounded-xl max-w-md shadow-lg">
            <div className="text-[11px] font-mono font-bold tracking-widest text-[#F8C62F] uppercase mb-1">
              ÉDITION OFFICIELLE 2026–2027
            </div>
            <div className="text-sm sm:text-base font-bold text-white leading-snug">
              Faculté d’Économie et de Gestion de Taroudant
            </div>
            <p className="text-xs font-sans text-stone-200 mt-1 leading-relaxed">
              Université Ibn Zohr. Un guide complet pour trouver ses repères, enrichir son parcours académique et s’engager dans la vie du campus.
            </p>
          </div>
        </div>

        {/* Cover Bottom bar */}
        <div className="border-t border-white/25 pt-4 flex items-center justify-between text-xs text-stone-300">
          <span className="font-sans">
            Un guide pour trouver sa place, apprendre et prendre part.
          </span>
          <span className="font-serif font-bold text-xl text-[#CD935A]">
            01
          </span>
        </div>
      </div>
    </PageContainer>
  );
};

/* =========================================================================
   PAGE 02 — MOT DE BIENVENUE
   ========================================================================= */
export const Page02Welcome: React.FC = () => {
  return (
    <PageContainer
      pageNumber="02"
      kicker="MOT DE BIENVENUE"
      title="Votre guide. Votre Faculté. Votre année."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 h-full items-stretch">
        {/* Left Column: Welcome text */}
        <div className="flex flex-col justify-between space-y-3.5 text-xs text-stone-700 leading-relaxed">
          <div className="border-l-4 border-[#F8C62F] pl-4 py-1.5 bg-[#FAF8F5] rounded-r-xl">
            <blockquote className="font-serif text-lg text-[#03594E] leading-snug font-medium italic">
              « La vie universitaire ne se limite pas aux cours et aux examens. »
            </blockquote>
          </div>

          <p className="font-medium text-stone-900">
            Chères étudiantes, chers étudiants,
          </p>
          <p>
            Bienvenue à la <strong>Faculté d’Économie et de Gestion de Taroudant (FEGT)</strong>, relevant de l’Université Ibn Zohr.
          </p>
          <p>
            Ce <em>Guide numérique de la vie de l’étudiant</em> a été conçu pour vous accompagner tout au long de votre parcours universitaire. Il vous permet de retrouver, dans un même espace, les informations essentielles concernant votre Faculté, vos formations, vos démarches, les services qui vous sont proposés, les clubs, les activités culturelles et sportives ainsi que les différentes possibilités de participation à la vie universitaire.
          </p>
          <p>
            La vie universitaire constitue également une occasion de développer ses compétences, de participer à des projets, de pratiquer des activités culturelles et sportives, de créer, de communiquer et de s’ouvrir sur son environnement.
          </p>
          <div className="p-3 bg-[#03594E]/5 rounded-xl border border-[#03594E]/15">
            <p className="font-serif italic text-stone-800">
              « Ce guide est le vôtre. Consultez-le, utilisez-le et participez activement à la vie de votre Faculté. »
            </p>
          </div>
          <p className="font-serif font-semibold text-[#03594E] pt-1">
            L’Équipe Décanale & Pédagogique de la FEGT
          </p>
        </div>

        {/* Right Column: Visual illustration */}
        <div className="flex flex-col h-full justify-between">
          <div className="overflow-hidden rounded-xl border border-stone-200 shadow-md">
            <TaroudantRampartsArt height="h-64" />
            <div className="bg-[#03594E] text-white p-3.5 text-xs font-serif flex items-center justify-between">
              <span>Taroudant · Un environnement propice aux études et à la vie étudiante.</span>
              <span className="text-[#F8C62F] text-base">✦</span>
            </div>
          </div>

          <div className="bg-[#F0F4F5] p-4 rounded-xl border border-stone-200 text-xs text-stone-700 mt-4 space-y-2">
            <h4 className="font-mono font-bold uppercase text-[#FE8235] text-[11px]">
              Conseil aux nouveaux étudiants
            </h4>
            <p>
              Prenez le temps dès la première semaine de visiter la bibliothèque, de créer vos identifiants MyUIZ et de rencontrer vos délégués de filière.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

/* =========================================================================
   PAGE 03 — DÉCOUVRIR TAROUDANT & MA FACULTÉ
   ========================================================================= */
export const Page03TaroudantFaculty: React.FC = () => {
  return (
    <PageContainer
      pageNumber="03"
      kicker="01 · DÉCOUVRIR TAROUDANT + 02 · MA FACULTÉ"
      title="Une ville, une Faculté, des possibles."
    >
      <div className="space-y-4 flex-1 flex flex-col justify-between">
        {/* Top 2-col card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative rounded-xl overflow-hidden shadow-sm border border-stone-200 h-44">
            <CampusBuildingArt height="h-full" />
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white">
              <b className="font-serif text-base block">Taroudant</b>
              <span className="text-[11px] text-stone-200">
                Une ville agréable pour poursuivre ses études supérieures
              </span>
            </div>
          </div>

          <div className="bg-[#03594E] text-white p-4 rounded-xl flex flex-col justify-center space-y-2 text-xs leading-relaxed">
            <h3 className="font-serif text-base text-[#CD935A] font-semibold">
              Au cœur du Souss-Massa
            </h3>
            <p className="text-stone-200">
              Située au cœur de la région Souss-Massa, Taroudant offre un cadre agréable pour poursuivre ses études universitaires. Connue pour son patrimoine historique, ses remparts et sa richesse culturelle, la ville propose un environnement à taille humaine, propice aux études et à la vie étudiante.
            </p>
            <p className="text-stone-200">
              Étudier à Taroudant, c’est aussi découvrir une ville authentique et dynamique, tout en profitant de sa proximité avec Agadir et les principaux pôles économiques de la région.
            </p>
          </div>
        </div>

        {/* Faculty band */}
        <div className="bg-[#FAF8F5] border-t-4 border-[#FE8235] p-4 rounded-xl border border-stone-200 grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 items-center">
          <div className="flex flex-col items-center justify-center font-serif text-4xl font-bold text-[#FE8235] border-r border-stone-200 pr-3">
            <span>FEG</span>
            <span className="text-[10px] font-mono tracking-widest text-stone-500 uppercase mt-1">
              UIZ
            </span>
          </div>
          <div className="space-y-1.5 text-xs text-stone-700">
            <h3 className="font-serif text-base text-[#03594E] font-bold">
              Faculté d’Économie et de Gestion de Taroudant
            </h3>
            <p>
              La Faculté d’Économie et de Gestion de Taroudant (FEG) est un établissement relevant de l’Université Ibn Zohr. Elle assure des missions de formation, de recherche scientifique et d’accompagnement des étudiants.
            </p>
            <p>
              Elle propose des formations dans les domaines de l’économie, de la gestion et du management, organisées principalement en Licences et Masters, en adéquation avec les mutations économiques régionales et internationales.
            </p>
            <p className="text-stone-600 text-[11px]">
              Services intégrés : Scolarité numérique · Orientation pédagogique · Clubs & associations · Ateliers Soft Skills · Mobilité internationale Erasmus+.
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="border-l-4 border-[#F8C62F] p-3 bg-[#F0F4F5] rounded-r-xl text-xs font-serif text-[#03594E] flex items-center justify-between">
          <span>
            <strong>Son objectif :</strong> offrir un environnement favorable à l’apprentissage, à la réussite universitaire et à la préparation de l’insertion professionnelle.
          </span>
          <span className="text-[#FE8235] font-sans font-bold text-[10px] uppercase tracking-wider ml-2 shrink-0">
            Excellence & Proximité
          </span>
        </div>
      </div>
    </PageContainer>
  );
};

/* =========================================================================
   PAGE 04 — DÉCOUVRIR MA FORMATION
   ========================================================================= */
export const Page04Programs: React.FC<PageProps> = ({ onSelectProgram }) => {
  return (
    <PageContainer
      pageNumber="04"
      kicker="03 · DÉCOUVRIR MA FORMATION"
      title="Des parcours pour comprendre, entreprendre et agir."
    >
      <div className="flex-1 flex flex-col justify-between space-y-3">
        <p className="font-serif text-sm text-[#03594E] leading-relaxed max-w-2xl">
          Retrouvez ici une présentation simple des formations proposées par la Faculté d’Économie et de Gestion de Taroudant. Cliquez sur chaque filière pour accéder à sa fiche détaillée : objectifs, principaux enseignements, compétences et débouchés.
        </p>

        {/* 4 Program Cards */}
        <div className="grid grid-cols-2 gap-3">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              onClick={() => onSelectProgram?.(prog)}
              className={`p-3.5 rounded-xl cursor-pointer transition-all hover:scale-[1.01] hover:shadow-lg flex flex-col justify-between min-h-[92px] ${prog.accentBg}`}
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono tracking-wider opacity-85 uppercase">
                  <span>{prog.cycle} {prog.number ? `· ${prog.number}` : ''}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xl font-serif font-bold tracking-tight mt-1 leading-none">
                  {prog.code}
                </h3>
                <p className="text-[11px] font-sans mt-1 opacity-90 line-clamp-2">
                  {prog.name}
                </p>
              </div>
              <div className="mt-2 pt-1.5 border-t border-white/20 flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider">
                <span>Fiche filière</span>
                <span className="flex items-center gap-0.5">
                  Détails <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Strip */}
        <div className="grid grid-cols-[1fr_1fr_1.3fr] rounded-xl overflow-hidden bg-[#F0F4F5] border border-stone-200 h-28 items-center shadow-sm">
          <CampusCourtyardArt height="h-full" />
          <CampusBuildingArt height="h-full" />
          <div className="p-3 flex flex-col justify-center text-xs">
            <b className="font-serif text-[#03594E] text-sm leading-snug">
              Un campus qui se construit avec ses étudiants.
            </b>
            <span className="text-[#FE8235] font-mono text-[10px] uppercase tracking-wider mt-1 font-semibold">
              Formation · Échange · Ouverture
            </span>
            <p className="text-[11px] text-stone-600 mt-1 line-clamp-2">
              Des cours magistraux, travaux dirigés et projets appliqués au service de votre employabilité.
            </p>
          </div>
        </div>

        {/* Language Strip */}
        <div className="bg-[#FAF8F5] p-2.5 rounded-xl border border-stone-200 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FE8235]"></span>
            <b className="text-[#FE8235] uppercase font-mono tracking-wider text-[11px]">
              CAPSULES VIDÉO DES FILIÈRES :
            </b>
          </div>
          <div className="flex items-center gap-3 font-semibold text-stone-700 text-xs">
            <span className="hover:text-[#03594E] cursor-pointer">العربية</span>
            <span className="text-stone-300">·</span>
            <span className="hover:text-[#03594E] cursor-pointer">Français</span>
            <span className="text-stone-300">·</span>
            <span className="hover:text-[#03594E] cursor-pointer">English</span>
            <span className="text-stone-300">·</span>
            <span className="hover:text-[#03594E] cursor-pointer">ⵜⴰⵎⴰⵣⵉⵖⵜ (Tamazight)</span>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

/* =========================================================================
   PAGE 05 — MES PREMIERS PAS + ESPACE D'ACCUEIL
   ========================================================================= */
export const Page05FirstSteps: React.FC = () => {
  const steps = [
    { num: '01', title: 'Je m’inscris', desc: 'Inscription administrative et dépôt des pièces' },
    { num: '02', title: 'J’obtiens mes accès numériques', desc: 'Compte institutionnel @uiz.ac.ma et code MyUIZ' },
    { num: '03', title: 'Je découvre ma filière', desc: 'Rencontre avec les enseignants coordinateurs' },
    { num: '04', title: 'Je consulte mon emploi du temps', desc: 'Affichage numérique hebdomadaire sur fegt.uiz.ac.ma' },
    { num: '05', title: 'Je localise mes services', desc: 'Scolarité, bibliothèque, amphithéâtres, espace d’écoute' },
    { num: '06', title: 'Je découvre les clubs', desc: 'Vie associative, Enactus, Hult Prize, club sport' },
    { num: '07', title: 'Je commence ma vie universitaire', desc: 'Cours, ateliers méthodologiques et engagement' }
  ];

  return (
    <PageContainer
      pageNumber="05"
      kicker="04 · MES PREMIERS PAS + 05 · ESPACE D’ACCUEIL"
      title="Le premier mois, étape par étape."
    >
      <div className="flex-1 flex flex-col justify-between space-y-4">
        {/* Timeline Horizontal / Vertical Steps Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
          {steps.map((st) => (
            <div
              key={st.num}
              className="p-2.5 rounded-xl bg-[#F0F4F5] border-t-2 border-[#FE8235] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="w-5 h-5 rounded-full bg-[#FE8235] text-white flex items-center justify-center font-mono text-[10px] font-bold">
                  {st.num}
                </span>
                <span className="text-[10px] text-stone-400 font-mono">STEP</span>
              </div>
              <h4 className="font-serif font-bold text-xs text-[#03594E] mt-2 leading-tight">
                {st.title}
              </h4>
              <p className="text-[9px] text-stone-600 mt-1 leading-snug">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Lower Split: Espace d'Accueil */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-2">
            <h3 className="font-serif text-base text-[#03594E] font-bold">
              Espace d’accueil, d’information et d’accompagnement
            </h3>
            <p>
              La Faculté met à la disposition des étudiants un <strong>espace de proximité, d’écoute et d’orientation</strong>.
            </p>
            <p>
              Il permet notamment d’obtenir des informations sur les formations, les démarches universitaires, l’orientation pédagogique et les services de la Faculté, mais aussi sur les clubs, les activités, les ateliers, les formations complémentaires et les événements universitaires.
            </p>
            <div className="p-2.5 bg-[#03594E]/10 rounded-lg border-l-2 border-[#03594E]">
              <strong className="text-[#03594E]">Objectif :</strong> mieux informer, orienter et accompagner l’étudiant tout au long de son parcours.
            </div>
          </div>

          <div className="p-4 bg-[#FAF8F5] rounded-xl border-2 border-[#F8C62F] flex flex-col justify-between text-xs space-y-3">
            <div>
              <h3 className="font-serif text-base text-[#03594E] font-bold">
                Un espace animé avec les étudiants
              </h3>
              <p className="text-stone-700 mt-1">
                Les étudiants, notamment ceux des dernières années de Licence ainsi que les étudiants de Master, contribuent activement à l’animation de cet espace, sous la supervision du Responsable de la Vie de l’Étudiant.
              </p>
            </div>

            <div className="bg-white p-3 rounded-lg border border-stone-200 space-y-1.5 font-mono text-[11px] text-stone-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FE8235]" />
                <span>Localisation : Bâtiment Central, Rez-de-Chaussée (Accueil)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#03594E]" />
                <span>Horaires : Du Lundi au Vendredi · 09h00 – 16h30</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-[#03594E] hover:underline cursor-pointer">
              <span>▶ Regarder la capsule de présentation de l’Espace d’Accueil</span>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

/* =========================================================================
   PAGE 06 — MES SERVICES NUMÉRIQUES
   ========================================================================= */
export const Page06DigitalServices: React.FC = () => {
  return (
    <PageContainer
      pageNumber="06"
      kicker="06 · MES SERVICES NUMÉRIQUES"
      title="Vos outils du quotidien."
    >
      <div className="flex-1 flex flex-col justify-between">
        <p className="font-serif text-xs text-[#03594E] mb-2">
          Tous les accès numériques sont centralisés pour simplifier votre scolarité, vos apprentissages et vos démarches administratives.
        </p>

        {/* 10 Services Grid (2x5 compact, visually pleasing) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-2.5">
          {SERVICES_NUMERIQUES.map((srv) => (
            <div
              key={srv.id}
              className="bg-[#F0F4F5] p-3 rounded-xl border-t-3 border-[#F8C62F] flex flex-col justify-between min-h-[98px] hover:bg-stone-100 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-[#FE8235] text-base font-bold">
                    {srv.id}
                  </span>
                  <span className="text-[9px] font-mono text-stone-400 uppercase">
                    {srv.tag}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-xs text-[#03594E] mt-1 leading-snug">
                  {srv.title}
                </h3>
                <p className="text-[10px] text-stone-600 mt-1 leading-snug line-clamp-3">
                  {srv.desc}
                </p>
              </div>

              <div className="mt-2 pt-1 border-t border-stone-200/80 flex items-center justify-between text-[9px] font-mono text-[#03594E] font-semibold">
                <span className="truncate">{srv.linkText}</span>
                <ChevronRight className="w-3 h-3 text-[#FE8235] shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Helpful Tip Box */}
        <div className="mt-3 p-2.5 bg-[#FAF8F5] rounded-xl border border-stone-200 text-[11px] text-stone-700 flex items-center justify-between">
          <span>
            💡 <strong>Astuce :</strong> Enregistrez le portail <strong>https://fegt.uiz.ac.ma/</strong> et <strong>MyUIZ</strong> dans les favoris de votre navigateur pour ne manquer aucun avis officiel.
          </span>
          <span className="font-mono text-[10px] text-[#FE8235] font-bold uppercase ml-2">
            Accès 24h/7j
          </span>
        </div>
      </div>
    </PageContainer>
  );
};

/* =========================================================================
   PAGE 07 — MES DÉMARCHES & ACCOMPAGNEMENT
   ========================================================================= */
export const Page07Demarches: React.FC<PageProps> = ({ onOpenDemarche }) => {
  return (
    <PageContainer
      pageNumber="07"
      kicker="06 · MES DÉMARCHES + 07 · ACCOMPAGNEMENT"
      title="Quand vous avez besoin d’aide, voici par où commencer."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 items-stretch">
        {/* Left: Action Checklist */}
        <div className="bg-[#FAF8F5] p-4 rounded-xl border-l-4 border-[#F8C62F] border-stone-200 flex flex-col justify-between text-xs">
          <div>
            <h3 className="font-serif text-base text-[#03594E] font-bold mb-2">
              Que voulez-vous faire ?
            </h3>
            <p className="text-stone-600 text-[11px] mb-3">
              Cliquez sur une démarche pour consulter la procédure et les pièces requises :
            </p>

            <ul className="space-y-1.5 text-stone-800 text-[11px]">
              {DEMARCHES_ITEMS.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => onOpenDemarche?.(item)}
                  className="p-1.5 rounded-lg hover:bg-stone-200/60 cursor-pointer flex items-center justify-between transition-colors border border-transparent hover:border-stone-300"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FE8235]" />
                    <span>{item.title}</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#03594E] font-semibold">
                    Consulter →
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3 border-t border-stone-200 font-mono text-[11px] text-stone-600 space-y-1">
            <p><strong>Contact Scolarité :</strong> scolarite.fegt@uiz.ac.ma</p>
            <p><strong>Guichet Numérique :</strong> https://fegt.uiz.ac.ma/demarches</p>
          </div>
        </div>

        {/* Right: Accompagnement & IA */}
        <div className="flex flex-col justify-between space-y-3">
          <div className="bg-[#03594E] text-white p-4 rounded-xl flex-1 flex flex-col justify-center space-y-2 text-xs">
            <h3 className="font-serif text-base text-[#CD935A] font-bold">
              Accompagnement et réussite
            </h3>
            <p className="text-stone-200 leading-relaxed">
              La Faculté accompagne les étudiants tout au long de leur parcours afin de favoriser leur réussite universitaire et le développement de leurs compétences.
            </p>
            <p className="text-stone-200 leading-relaxed">
              Orientation et soutien pédagogiques, méthodologie du travail universitaire, langues, communication et Soft Skills. Des ateliers de formation et de préparation aux examens sont proposés régulièrement, en présentiel ou à distance.
            </p>
          </div>

          <div className="bg-[#FE8235] text-white p-4 rounded-xl flex flex-col justify-center space-y-1.5 text-xs">
            <h3 className="font-serif text-base text-amber-100 font-bold">
              L’intelligence artificielle comme outil
            </h3>
            <p className="leading-relaxed opacity-95">
              Une attention particulière est accordée à l’utilisation responsable, transparente et réfléchie de l’IA dans les études, afin d’en faire un outil d’aide à l’apprentissage tout en respectant scrupuleusement les règles académiques et l’intégrité scientifique.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

/* =========================================================================
   PAGE 08 — ÉTUDIANTS À BESOINS SPÉCIFIQUES
   ========================================================================= */
export const Page08SpecificNeeds: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Accueil et orientation',
      desc: 'Des informations facilitent l’arrivée à la Faculté, l’orientation vers les services concernés et l’accès aux différents espaces.'
    },
    {
      num: '02',
      title: 'Accompagnement pédagogique',
      desc: 'Selon les besoins et les possibilités de la Faculté, l’étudiant peut être orienté vers les services compétents pour faciliter le suivi des enseignements et son parcours académique.'
    },
    {
      num: '03',
      title: 'Études et examens',
      desc: 'Les étudiants peuvent se renseigner sur les démarches et les dispositions prévues concernant le suivi des études, les évaluations et les examens (tiers-temps, salles adaptées).'
    },
    {
      num: '04',
      title: 'Accessibilité des espaces',
      desc: 'Identifier les espaces et services accessibles et fournir les informations pratiques facilitant les déplacements au sein de la Faculté.'
    },
    {
      num: '05',
      title: 'Accessibilité numérique',
      desc: 'Les supports et capsules vidéo seront conçus, autant que possible, avec sous-titres, textes lisibles et contenus simples et clairement présentés.'
    }
  ];

  return (
    <PageContainer
      pageNumber="08"
      kicker="08 · ÉTUDIANTS À BESOINS SPÉCIFIQUES"
      title="Une Faculté accessible à tous."
    >
      <div className="flex-1 flex flex-col justify-between space-y-3">
        <p className="font-serif text-xs text-[#03594E] max-w-2xl">
          L’Université Ibn Zohr et la FEGT s’engagent pour une inclusion totale, garantissant à chaque étudiante et étudiant les meilleures conditions pour étudier, progresser et s’épanouir.
        </p>

        {/* 5 pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {pillars.map((pil) => (
            <div
              key={pil.num}
              className="bg-[#F0F4F5] p-3.5 rounded-xl border-l-4 border-[#F8C62F] flex flex-col justify-between"
            >
              <div>
                <b className="font-serif text-xl text-[#FE8235] block">
                  {pil.num}
                </b>
                <h3 className="font-serif font-bold text-xs text-[#03594E] mt-1">
                  {pil.title}
                </h3>
                <p className="text-[11px] text-stone-600 mt-1.5 leading-snug">
                  {pil.desc}
                </p>
              </div>
              <span className="text-[9px] font-mono text-stone-400 uppercase mt-2">
                Pôle Solidarité FEGT
              </span>
            </div>
          ))}

          {/* Additional card for visual balance */}
          <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-stone-200 flex flex-col justify-center text-xs space-y-1.5">
            <h4 className="font-serif font-bold text-[#03594E] text-xs">
              Engagement Institutionnel
            </h4>
            <p className="text-[11px] text-stone-600">
              Chaque situation fait l’objet d’une écoute attentive dans la plus stricte confidentialité afin de mettre en place les adaptations nécessaires.
            </p>
          </div>
        </div>

        {/* Help Band */}
        <div className="bg-[#03594E] text-white p-4 rounded-xl flex items-center justify-between text-xs">
          <div>
            <b className="font-serif text-base text-[#CD935A] block">
              Besoin d’aide ou d’information personnalisée ?
            </b>
            <p className="text-stone-200 text-[11px] mt-0.5">
              L’étudiant pourra s’adresser à l’administration de la Faculté pour être orienté vers le référent handicap & inclusion.
            </p>
          </div>
          <div className="text-right shrink-0 ml-4 font-mono text-[11px]">
            <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/20 text-[#F8C62F] block">
              inclusion.fegt@uiz.ac.ma
            </span>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

/* =========================================================================
   PAGE 09 — LES CLUBS & PROPOSER
   ========================================================================= */
export const Page09Clubs: React.FC<PageProps> = ({ onOpenProposalModal }) => {
  return (
    <PageContainer
      pageNumber="09"
      kicker="09 · LES CLUBS + 10 · PROPOSER"
      title="La vie associative est un terrain d’action."
    >
      <div className="flex-1 flex flex-col justify-between space-y-3">
        <p className="font-serif text-xs text-[#03594E]">
          Les clubs constituent un élément essentiel de la vie de l’étudiant. À la suite des échanges avec les étudiants, la vie associative est structurée autour des pôles suivants :
        </p>

        {/* Photo Strip */}
        <div className="grid grid-cols-[1fr_1fr_1.3fr] rounded-xl overflow-hidden bg-[#03594E] text-white h-24 items-center shadow-sm">
          <CampusBuildingArt height="h-full" />
          <StudentsSportArt height="h-full" />
          <div className="p-3 flex flex-col justify-center">
            <b className="font-serif text-[#CD935A] text-sm leading-snug">
              Participer, c’est aussi apprendre autrement.
            </b>
            <span className="text-[10px] text-emerald-100 mt-1">
              Des rencontres, des projets concrets et des moments partagés.
            </span>
          </div>
        </div>

        {/* 5 Clubs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {CLUBS_LIST.map((club) => (
            <div
              key={club.id}
              className="p-2.5 rounded-xl bg-[#F0F4F5] border-b-3 border-[#FE8235] flex flex-col justify-between min-h-[94px]"
            >
              <div>
                <b className="font-serif text-xs text-[#03594E] uppercase tracking-wide block">
                  {club.name}
                </b>
                <span className="text-[9px] font-mono text-[#FE8235] block mt-0.5">
                  {club.theme}
                </span>
                <span className="text-[10px] text-stone-600 block mt-1 leading-tight line-clamp-3">
                  {club.desc}
                </span>
              </div>
              <span className="text-[8px] font-mono text-stone-400 mt-1 uppercase">
                Adhésion ouverte
              </span>
            </div>
          ))}
        </div>

        <div className="p-2 bg-[#FAF8F5] rounded-lg border border-stone-200 text-[10px] text-stone-700 flex items-center justify-between">
          <span>
            Chaque club dispose d’une fiche numérique : <strong>Présentation · Responsable · Activités · Comment adhérer ? · Contact</strong>
          </span>
          <span className="text-[#03594E] font-bold text-[9px] uppercase font-mono">
            Guichet Associations
          </span>
        </div>

        {/* Proposal Interactive Band */}
        <div
          onClick={onOpenProposalModal}
          className="bg-[#F8C62F] p-3.5 rounded-xl text-[#1F2432] cursor-pointer hover:brightness-105 transition-all shadow-sm"
        >
          <div className="flex items-center justify-between mb-1.5">
            <div className="font-serif font-bold text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FE8235]" />
              <span>Une idée ? Un projet ? Déposez votre proposition</span>
            </div>
            <span className="text-xs font-mono font-bold bg-[#1F2432] text-white px-2.5 py-1 rounded-md">
              Envoi à IDRISSELGHAZI3@gmail.com →
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono font-bold">
            <span className="bg-white/80 px-2 py-0.5 rounded">IDÉE</span>
            <span className="text-[#FE8235] text-sm">→</span>
            <span className="bg-white/80 px-2 py-0.5 rounded">PROPOSITION</span>
            <span className="text-[#FE8235] text-sm">→</span>
            <span className="bg-white/80 px-2 py-0.5 rounded">VALIDATION</span>
            <span className="text-[#FE8235] text-sm">→</span>
            <span className="bg-white/80 px-2 py-0.5 rounded">ORGANISATION</span>
            <span className="text-[#FE8235] text-sm">→</span>
            <span className="bg-white/80 px-2 py-0.5 rounded">COMMUNICATION</span>
            <span className="text-[#FE8235] text-sm">→</span>
            <span className="bg-white/80 px-2 py-0.5 rounded">ACTIVITÉ</span>
            <span className="text-[#FE8235] text-sm">→</span>
            <span className="bg-[#03594E] text-white px-2 py-0.5 rounded">BILAN</span>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

/* =========================================================================
   PAGE 10 — SEMAINE DE L’ÉTUDIANT & ÉVÉNEMENTS UIZ
   ========================================================================= */
export const Page10EventsUIZ: React.FC = () => {
  return (
    <PageContainer
      pageNumber="10"
      kicker="11 · SEMAINE DE L’ÉTUDIANT + 12 · ÉVÉNEMENTS UIZ"
      title="Prendre la parole, créer, se dépasser."
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.25fr] gap-5 flex-1 items-stretch">
        {/* Left Column: Semaine de l'étudiant */}
        <div className="flex flex-col justify-between space-y-3">
          <div>
            <div className="font-serif text-6xl font-bold text-[#FE8235] leading-none mb-1">
              11
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm border border-stone-200 h-28 mb-1.5">
              <StudentsSportArt height="h-full" />
            </div>
            <p className="text-[10px] text-stone-500 italic mb-2">
              Sport, culture et représentation : les talents étudiants trouvent leur scène.
            </p>
            <h3 className="font-serif text-base text-[#03594E] font-bold">
              La Semaine de l’étudiant
            </h3>
            <p className="text-xs text-stone-700 leading-relaxed mt-1">
              La Faculté organise une Semaine de l’étudiant avec un tour de sélection locale. Cette semaine permet de repérer et de valoriser les talents étudiants : orateurs, créatifs, artistes, sportifs et porteurs de projets innovants.
            </p>
          </div>

          <div className="p-3 bg-[#FAF8F5] rounded-xl border-l-3 border-[#03594E] text-xs text-stone-700">
            <strong>Représentation :</strong> Les étudiants sélectionnés représentent la FEGT lors des grandes manifestations au niveau de l’Université Ibn Zohr.
          </div>
        </div>

        {/* Right Column: UIZ Event Table */}
        <div className="flex flex-col justify-between border-t-3 border-[#B4533C] pt-2">
          <h4 className="font-serif text-sm font-bold text-[#1E293B] mb-0.5">
            Les rendez-vous de l'année
          </h4>
          <p className="text-[10px] text-stone-500 mb-2 leading-relaxed">
            La stratégie se déploie à travers des temps forts qui rythment l'année, communs à l'ensemble des établissements de l'UIZ.
          </p>
          <div className="divide-y divide-stone-200 flex-1 flex flex-col justify-between text-xs">
            {EVENTS_UIZ.map((ev) => (
              <div key={ev.id} className="py-2 grid grid-cols-[105px_130px_1fr] gap-2 items-baseline">
                <span className="text-[10px] text-stone-500 font-sans">
                  {ev.date}
                </span>
                <b className="text-[#B4533C] font-serif text-xs block leading-tight">
                  {ev.name}
                </b>
                <p className="text-[11px] text-stone-700 leading-snug">
                  {ev.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

/* =========================================================================
   PAGE 11 — CULTURE, SPORT & EMPLOYABILITÉ
   ========================================================================= */
export const Page11CultureEmployability: React.FC = () => {
  return (
    <PageContainer
      pageNumber="11"
      kicker="13 · CULTURE, SPORT & CRÉATIVITÉ + 14 · EMPLOYABILITÉ"
      title="Une expérience qui dépasse les enseignements."
    >
      <div className="flex-1 flex flex-col justify-between space-y-4">
        {/* Culture Hero Banner */}
        <div className="bg-[#03594E] text-white p-4 rounded-xl grid grid-cols-1 md:grid-cols-[140px_90px_1fr] gap-4 items-center shadow-sm">
          <div className="rounded-lg overflow-hidden h-24">
            <CampusCourtyardArt height="h-full" />
          </div>
          <div className="font-serif text-5xl text-[#CD935A] font-bold leading-none text-center">
            VIVRE
          </div>
          <div className="text-xs leading-relaxed text-stone-200">
            La Faculté souhaite favoriser une vie universitaire dynamique, enrichissante et ouverte, en encourageant la participation des étudiants à différentes activités : sport, culture, arts, communication, langues, créativité, entrepreneuriat et formation.
          </div>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          <div className="bg-[#FAF8F5] p-4 rounded-xl border border-stone-200 flex flex-col justify-between text-xs space-y-2">
            <div>
              <h3 className="font-serif text-base text-[#03594E] font-bold">
                Développer ses talents
              </h3>
              <p className="text-stone-700 leading-relaxed mt-1">
                Ces activités permettent de développer ses talents, renforcer ses compétences, prendre des initiatives, travailler en équipe et enrichir son expérience universitaire, au-delà des enseignements académiques.
              </p>
              <p className="text-stone-600 text-[11px] mt-2">
                Un <strong>agenda numérique</strong> permettra de consulter en temps réel les ateliers, tournois et activités programmés chaque trimestre.
              </p>
            </div>
            <div className="pt-2 border-t border-stone-200 font-serif font-bold text-[#FE8235] flex items-center gap-1.5 cursor-pointer">
              <span>▣ Voir l’agenda de la vie de l’étudiant</span>
            </div>
          </div>

          <div className="bg-[#FE8235] text-white p-4 rounded-xl flex flex-col justify-between text-xs space-y-2 shadow-sm">
            <div>
              <h3 className="font-serif text-base text-amber-100 font-bold">
                Stages, employabilité et entrepreneuriat
              </h3>
              <p className="leading-relaxed opacity-95 mt-1">
                La Faculté accompagne les étudiants dans la préparation de leur avenir professionnel et le développement de leur esprit entrepreneurial.
              </p>
              <ul className="mt-2 space-y-1 text-[11px] opacity-95">
                <li>• Recherche de stages et conventionnement numérique</li>
                <li>• Préparation du CV, profil LinkedIn et simulations d’entretiens</li>
                <li>• Ateliers Soft Skills & intelligence relationnelle</li>
                <li>• Rencontres avec les chefs d’entreprises et alumni de la région</li>
              </ul>
            </div>
            <div className="pt-2 border-t border-white/20 text-[11px] font-mono uppercase tracking-wider text-amber-200 font-semibold">
              Pôle Carrières & Insertion FEGT
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

/* =========================================================================
   PAGE 12 — MOBILITÉ & NEWSLETTER
   ========================================================================= */
export const Page12InternationalNewsletter: React.FC = () => {
  return (
    <PageContainer
      pageNumber="12"
      kicker="15 · INTERNATIONAL + 16 · NEWSLETTER"
      title="Élargir son horizon, garder une trace."
    >
      <div className="flex-1 flex flex-col justify-between space-y-4">
        {/* Mobility Section */}
        <div className="bg-[#03594E] text-white p-5 rounded-xl grid grid-cols-1 md:grid-cols-[130px_1fr] gap-5 items-center shadow-sm">
          <div className="font-serif text-3xl font-bold text-[#CD935A] tracking-wider text-center md:text-left border-b md:border-b-0 md:border-r border-white/20 pb-2 md:pb-0 md:pr-4">
            MOBILITÉ
            <span className="text-[10px] font-mono tracking-widest text-stone-300 block uppercase mt-1">
              INTERNATIONAL
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <span className="p-1.5 bg-white/10 rounded border border-white/10">• Erasmus+ & Bourses d’excellence</span>
            <span className="p-1.5 bg-white/10 rounded border border-white/10">• Programmes de mobilité académique</span>
            <span className="p-1.5 bg-white/10 rounded border border-white/10">• Partenariats universitaires internationaux</span>
            <span className="p-1.5 bg-white/10 rounded border border-white/10">• Appels à candidatures semestriels</span>
            <span className="p-1.5 bg-white/10 rounded border border-white/10">• Échanges universitaires et crédits ECTS</span>
            <span className="p-1.5 bg-white/10 rounded border border-white/10">• Accompagnement visa et séjour</span>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-2 border-[#FE8235] p-5 rounded-xl bg-[#FAF8F5] flex-1 flex flex-col justify-between text-xs space-y-3">
          <div>
            <span className="text-[#FE8235] font-mono font-bold tracking-widest uppercase text-[10px] block">
              PUBLICATION SEMESTRIELLE · FEGT NEWS
            </span>
            <h3 className="font-serif text-xl text-[#03594E] font-bold mt-1">
              Les moments forts de la Faculté, semestre après semestre.
            </h3>
            <p className="text-stone-700 leading-relaxed mt-2">
              La <strong>News semestrielle</strong> permettra de partager et de valoriser les moments forts de la vie de la Faculté : événements universitaires, activités des clubs, initiatives étudiantes, réussites des lauréats, nouveaux projets, partenariats académiques et calendrier des manifestations à venir.
            </p>
          </div>

          <div className="flex gap-3 my-1">
            <div className="px-5 py-2.5 bg-[#F8C62F] font-serif font-bold text-[#1F2432] rounded-lg shadow-sm">
              Semestre 1 (Automne / Hiver)
            </div>
            <div className="px-5 py-2.5 bg-[#03594E] font-serif font-bold text-white rounded-lg shadow-sm">
              Semestre 2 (Printemps / Été)
            </div>
          </div>

          <p className="text-[11px] text-stone-600 border-t border-stone-200 pt-2">
            Les différentes éditions seront accessibles en ligne au format numérique afin de garder une trace des réalisations et de les partager avec les étudiants, les enseignants et les partenaires socio-économiques.
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

/* =========================================================================
   PAGE 13 — DROITS, DEVOIRS & FAQ
   ========================================================================= */
export const Page13RightsFaq: React.FC = () => {
  return (
    <PageContainer
      pageNumber="13"
      kicker="17 · DROITS + 18 · FAQ"
      title="Les règles pour avancer ensemble."
    >
      <div className="flex-1 flex flex-col justify-between space-y-3">
        {/* Rights & Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-[#F8C62F] text-[#1F2432] rounded-xl flex flex-col justify-between shadow-sm">
            <b className="font-mono text-xs uppercase tracking-wider block text-stone-900">
              VOUS AVEZ DROIT À
            </b>
            <p className="font-serif text-base font-medium leading-snug mt-2">
              L’information claire, à l’orientation pédagogique, à l’accompagnement, au respect de votre dignité et à l’accès équitable aux services universitaires conformément aux règles applicables.
            </p>
            <span className="text-[10px] font-mono text-stone-800 uppercase mt-2">
              Charte de l’étudiant UIZ
            </span>
          </div>

          <div className="p-4 bg-[#03594E] text-white rounded-xl flex flex-col justify-between shadow-sm">
            <b className="font-mono text-xs uppercase tracking-wider block text-[#CD935A]">
              VOUS VOUS ENGAGEZ À
            </b>
            <p className="font-serif text-base font-medium leading-snug mt-2 text-stone-100">
              Respecter les personnes, les locaux, les équipements collectifs, le règlement intérieur de l’établissement et les principes stricts d’intégrité académique et scientifique.
            </p>
            <span className="text-[10px] font-mono text-emerald-200 uppercase mt-2">
              Responsabilité & Citoyenneté
            </span>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="bg-[#FAF8F5] p-4 rounded-xl border border-stone-200 flex-1 flex flex-col justify-between">
          <h3 className="font-serif text-base text-[#03594E] font-bold mb-2">
            FAQ · Questions fréquentes les plus posées
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-stone-700">
            {FAQ_LIST.map((faq, i) => (
              <div
                key={i}
                className="py-1 border-b border-stone-200 flex items-center justify-between hover:text-[#03594E] cursor-pointer"
              >
                <span className="truncate pr-2">❓ {faq.question}</span>
                <span className="text-[10px] font-mono text-[#FE8235] shrink-0 font-bold">
                  p. {faq.page < 10 ? `0${faq.page}` : faq.page}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

/* =========================================================================
   PAGE 14 — CONTACTS ET LIENS UTILES
   ========================================================================= */
export const Page14Contacts: React.FC = () => {
  return (
    <PageContainer
      pageNumber="14"
      kicker="19 · CONTACTS ET LIENS UTILES"
      title="Gardez ce guide à portée de main."
    >
      <div className="flex-1 flex flex-col justify-between space-y-4">
        {/* Contact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.6fr] gap-4">
          {/* Main Official Contact Box */}
          <div className="bg-[#03594E] text-white p-5 rounded-xl flex flex-col justify-between space-y-3 shadow-md">
            <div className="flex items-center justify-between border-b border-white/20 pb-3">
              <FEGTLogo variant="light" size="md" />
              <div className="font-serif text-3xl font-bold text-[#CD935A]">
                FEGT
              </div>
            </div>

            <div className="space-y-2 text-xs text-stone-200">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FE8235] shrink-0 mt-0.5" />
                <span>
                  <strong>Adresse :</strong> Hay El Mohammadi (Lastah), Taroudant, 83 000 · Maroc
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FE8235] shrink-0" />
                <span>
                  <strong>Téléphone :</strong> +212 528 227 125
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FE8235] shrink-0" />
                <span>
                  <strong>E-mail :</strong> contact@uiz.ac.ma · scolarite.fegt@uiz.ac.ma
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#F8C62F] shrink-0" />
                <span>
                  <strong>Site web officiel :</strong>{' '}
                  <a href="https://fegt.uiz.ac.ma/" target="_blank" rel="noopener noreferrer" className="text-[#CD935A] underline font-bold">
                    https://fegt.uiz.ac.ma/
                  </a>
                </span>
              </p>
            </div>

            <div className="pt-2 border-t border-white/20 text-[11px] text-stone-300">
              <strong className="text-white">Services dédiés :</strong> Scolarité · Bibliothèque · Orientation · Clubs · Mobilité internationale
            </div>
          </div>

          {/* QR Code Side */}
          <div className="bg-[#FAF8F5] p-4 rounded-xl border border-stone-200 flex flex-col items-center justify-center text-center shadow-sm">
            <QRCodeSVG size={120} />
            <p className="text-[11px] text-stone-700 mt-3 leading-snug">
              Scannez pour accéder au site officiel, aux formations, aux emplois du temps et aux actualités.
            </p>
          </div>
        </div>

        {/* Emotional Closing Banner */}
        <div className="bg-gradient-to-r from-[#FAF8F5] via-white to-[#FAF8F5] p-5 rounded-xl border-2 border-[#FE8235] text-center shadow-sm">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#03594E] leading-tight">
            LA VIE DE L’ÉTUDIANT, <br />
            <span className="italic text-[#FE8235]">C’EST AUSSI VOUS !</span>
          </h3>
          <p className="font-mono text-xs font-bold text-stone-600 tracking-widest uppercase mt-2">
            Participez · Proposez · Créez · Apprenez · Partagez
          </p>
        </div>
      </div>
    </PageContainer>
  );
};
