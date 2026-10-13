import React from 'react';
import {
  userImgRampartsStreet,
  userImgRampartsSunset,
  userImgRampartsTowers,
  userImgFegtSign,
  userImgFegtFacade,
  studentsSportImg,
  campusCourtyardImg
} from '../assets/assetRegistry';
import { FEGTOfficialLogo, FEGTQrCode } from './OfficialLogo';
import { FAQ_LIST, EVENTS_UIZ } from '../data/guideData';

interface GroupedPageProps {
  onSelectProgram?: (code: string) => void;
  onOpenAction?: (title: string) => void;
  onOpenProposalModal?: () => void;
}

/* =========================================================================
   PAGE 01 — COUVERTURE OFFICIELLE (11 PAGES)
   ========================================================================= */
export const Grouped11Page01Cover: React.FC = () => (
  <section id="page-01" className="pdf-page pdf-cover">
    <img
      className="pdf-cover-photo"
      src={userImgRampartsSunset}
      alt="Remparts de Taroudant au coucher du soleil"
    />
    <div className="pdf-cover-shade" />
    <div className="pdf-cover-content">
      <div className="brand">
        <FEGTOfficialLogo variant="white" size="lg" />
      </div>
      <div className="pdf-cover-kicker">GUIDE NUMÉRIQUE DE LA VIE DE L’ÉTUDIANT</div>
      <h1>
        La vie étudiante<br />
        <i>commence ici.</i>
      </h1>

      {/* Slogan officiel FEGT — Ultra-clair, contrasté et lisible */}
      <div className="pdf-cover-slogan-pill" role="text" aria-label="S’informer · S’orienter · Participer · Réussir">
        <span className="pdf-cover-slogan-item">S’informer</span>
        <span className="pdf-cover-slogan-sep" aria-hidden="true">✦</span>
        <span className="pdf-cover-slogan-item">S’orienter</span>
        <span className="pdf-cover-slogan-sep" aria-hidden="true">✦</span>
        <span className="pdf-cover-slogan-item">Participer</span>
        <span className="pdf-cover-slogan-sep" aria-hidden="true">✦</span>
        <span className="pdf-cover-slogan-item">Réussir</span>
      </div>

      {/* Cartouche officiel haute lisibilité — Édition 2026–2027 · Faculté d’Économie et de Gestion de Taroudant */}
      <div className="pdf-cover-official-block">
        <div className="pdf-cover-edition-tag">
          <span className="pdf-cover-edition-pulse" aria-hidden="true" />
          Édition 2026–2027
        </div>
        <div className="pdf-cover-faculty-title">
          Faculté d’Économie et de Gestion de Taroudant
        </div>
        <div className="pdf-cover-univ-details">
          <span>Université Ibn Zohr</span>
          <span aria-hidden="true">•</span>
          <span>Guide officiel de l’étudiant</span>
        </div>
      </div>
    </div>
    <div className="pdf-cover-footer">
      <span>Un guide pour trouver sa place, apprendre et prendre part.</span>
      <b>01 / 11</b>
    </div>
  </section>
);

/* =========================================================================
   PAGE 02 — MOT DE BIENVENUE (11 PAGES)
   ========================================================================= */
export const Grouped11Page02Welcome: React.FC = () => (
  <section id="page-02" className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">MOT DE BIENVENUE</div>
          <h1 className="pdf-title">Votre guide. Votre Faculté. Votre année.</h1>
        </div>
        <div className="pdf-pageno">02 / 11</div>
      </div>
      <div className="pdf-split">
        <div>
          <div className="pdf-pullquote">
            La vie universitaire ne se limite pas aux cours et aux examens.
          </div>
          <p>Chères étudiantes, chers étudiants,</p>
          <p>
            Bienvenue à la Faculté d’Économie et de Gestion de Taroudant (FEGT), relevant de l’Université Ibn Zohr.
          </p>
          <p>
            Ce Guide numérique de la vie de l’étudiant a été conçu pour vous accompagner tout au long de votre parcours universitaire. Il vous permet de retrouver, dans un même espace, les informations essentielles concernant votre Faculté, vos formations, vos démarches, les services qui vous sont proposés, les clubs, les activités culturelles et sportives ainsi que les différentes possibilités de participation à la vie universitaire.
          </p>
          <p>
            La vie universitaire constitue également une occasion de développer ses compétences, de participer à des projets, de pratiquer des activités culturelles et sportives, de créer, de communiquer et de s’ouvrir sur son environnement.
          </p>
          <p>
            Ce guide est le vôtre. Consultez-le, utilisez-le et participez à la vie de votre Faculté.
          </p>
        </div>
        <div className="pdf-quote-photo">
          <img src={userImgRampartsStreet} alt="Taroudant ville universitaire" />
          <span>Taroudant · un environnement propice aux études et à la vie étudiante.</span>
        </div>
      </div>
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027 · Page 02 / 11</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 03 — AXE 01 & AXE 02 : TAROUDANT & MA FACULTÉ (11 PAGES)
   ========================================================================= */
export const Grouped11Page03TaroudantFaculty: React.FC = () => (
  <section id="page-03" className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">CADRE DE VIE & INSTITUTION</div>
          <h1 className="pdf-title">Une ville d’histoire, une Faculté d’avenir.</h1>
        </div>
        <div className="pdf-pageno">03 / 11</div>
      </div>

      {/* --- AXE 01 DISTINCT --- */}
      <div className="pdf-axe-block">
        <div className="pdf-axe-header-distinct">
          <div className="flex items-center">
            <span className="pdf-axe-badge">AXE 01</span>
            <h2 className="pdf-axe-title-distinct">
              <b>DÉCOUVRIR TAROUDANT :</b> Une ville d’histoire, de savoir et d’avenir.
            </h2>
          </div>
          <span className="text-[10px] font-mono text-stone-500 font-bold">SOUSS-MASSA</span>
        </div>
        <div className="pdf-compact-split">
          <div className="pdf-photo-card" style={{ height: '48mm' }}>
            <img src={userImgRampartsTowers} alt="Remparts séculaires de Taroudant" />
            <div>
              <b>Taroudant</b>
              <span>Cité historique aux remparts séculaires du Souss</span>
            </div>
          </div>
          <div className="pdf-compact-card green">
            <h4>Au cœur du Souss-Massa</h4>
            <p>
              Située au cœur de la région Souss-Massa, Taroudant offre un cadre agréable pour poursuivre ses études universitaires. Connue pour son patrimoine historique, ses remparts et sa richesse culturelle, la ville propose un environnement à taille humaine, propice aux études et à la sérénité.
            </p>
            <p>
              Étudier à Taroudant, c’est aussi découvrir une ville authentique et dynamique, tout en profitant de sa proximité avec Agadir et les principaux pôles économiques régionaux.
            </p>
          </div>
        </div>
      </div>

      <div className="pdf-axe-divider" />

      {/* --- AXE 02 DISTINCT --- */}
      <div className="pdf-axe-block">
        <div className="pdf-axe-header-distinct rust">
          <div className="flex items-center">
            <span className="pdf-axe-badge rust">AXE 02</span>
            <h2 className="pdf-axe-title-distinct">
              <b>MA FACULTÉ (FEGT) :</b> Faculté d’Économie et de Gestion de Taroudant.
            </h2>
          </div>
          <span className="text-[10px] font-mono text-stone-500 font-bold">UNIVERSITÉ IBN ZOHR</span>
        </div>
        <div className="pdf-compact-split">
          <div className="pdf-photo-card" style={{ height: '48mm' }}>
            <img src={userImgFegtFacade} alt="Campus moderne FEGT" />
            <div>
              <b>Campus FEGT</b>
              <span>Un environnement moderne d’apprentissage</span>
            </div>
          </div>
          <div className="pdf-compact-card ochre">
            <h4>Missions fondamentales & excellence</h4>
            <p>
              La Faculté d’Économie et de Gestion de Taroudant (FEGT) est un établissement d'enseignement supérieur relevant de l’Université Ibn Zohr. Elle assure des missions de formation, de recherche appliquée et d'accompagnement des étudiants.
            </p>
            <p>
              Elle propose des formations de pointe dans les domaines de l’économie, de la gestion, du commerce et du management, organisées principalement en Licences et Masters.
            </p>
          </div>
        </div>
        <div className="pdf-note" style={{ marginTop: '3mm', padding: '5px 10px', fontSize: '10px' }}>
          <strong>Son objectif :</strong> offrir un environnement favorable à l’apprentissage, à la réussite universitaire et à la préparation de l’insertion professionnelle.
        </div>
      </div>

      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027 · Page 03 / 11</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 04 — AXE 03 : DÉCOUVRIR MA FORMATION (11 PAGES)
   ========================================================================= */
export const Grouped11Page04Programs: React.FC<GroupedPageProps> = ({ onSelectProgram }) => (
  <section id="page-04" className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-axe-header-distinct">
            <div className="flex items-center">
              <span className="pdf-axe-badge">AXE 03</span>
              <span className="pdf-kicker">MES FORMATIONS</span>
            </div>
          </div>
          <h1 className="pdf-title">Des parcours pour comprendre, entreprendre et agir.</h1>
        </div>
        <div className="pdf-pageno">04 / 11</div>
      </div>
      <p className="pdf-intro" style={{ marginBottom: '4mm' }}>
        Retrouvez ici la présentation des 4 formations d’excellence de la Faculté d’Économie et de Gestion de Taroudant. Cliquez sur chaque filière pour afficher son programme complet :
      </p>

      <div className="pdf-program-grid">
        <div className="pdf-program cursor-pointer" onClick={() => onSelectProgram?.('GEMD')}>
          <span>LICENCE FONDAMENTALE 01</span>
          <h3>GEMD</h3>
          <p>Gestion, E-Business et Marketing Digital</p>
          <b>Consulter la fiche filière →</b>
        </div>
        <div className="pdf-program rust cursor-pointer" onClick={() => onSelectProgram?.('MGE')}>
          <span>LICENCE FONDAMENTALE 02</span>
          <h3>MGE</h3>
          <p>Management et Gestion des Entreprises</p>
          <b>Consulter la fiche filière →</b>
        </div>
        <div className="pdf-program ochre cursor-pointer" onClick={() => onSelectProgram?.('ENDEB')}>
          <span>LICENCE PROFESSIONNELLE 03</span>
          <h3>ENDEB</h3>
          <p>Entrepreneuriat et Développement des Business</p>
          <b>Consulter la fiche filière →</b>
        </div>
        <div className="pdf-program dark cursor-pointer" onClick={() => onSelectProgram?.('MCI')}>
          <span>MASTER SPÉCIALISÉ</span>
          <h3>MCI</h3>
          <p>Management et Commerce International</p>
          <b>Consulter la fiche filière →</b>
        </div>
      </div>

      <div className="pdf-photo-ribbon" style={{ marginTop: '5mm' }}>
        <img src={userImgFegtSign} alt="Enseigne officielle FEGT" />
        <img src={campusCourtyardImg} alt="Patio étudiant" />
        <div>
          <b>Un campus qui se construit avec ses étudiants.</b>
          <span>Formation · échange · ouverture professionnelle</span>
        </div>
      </div>

      <div className="pdf-language-strip" style={{ marginTop: '5mm' }}>
        <b>CAPSULES DES FILIÈRES DISPONIBLES EN :</b>
        <span>العربية</span>
        <span>Français</span>
        <span>English</span>
        <span>Tamazight</span>
      </div>

      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027 · Page 04 / 11</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 05 — AXE 04 & AXE 05 : PREMIERS PAS & ESPACE ACCUEIL (11 PAGES)
   ========================================================================= */
export const Grouped11Page05FirstStepsAccueil: React.FC = () => (
  <section id="page-05" className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">INTÉGRATION & ACCOMPAGNEMENT</div>
          <h1 className="pdf-title">Bien démarrer son parcours à la Faculté.</h1>
        </div>
        <div className="pdf-pageno">05 / 11</div>
      </div>

      {/* --- AXE 04 DISTINCT --- */}
      <div className="pdf-axe-block">
        <div className="pdf-axe-header-distinct">
          <div className="flex items-center">
            <span className="pdf-axe-badge">AXE 04</span>
            <h2 className="pdf-axe-title-distinct">
              <b>MES PREMIERS PAS :</b> Le premier mois, étape par étape.
            </h2>
          </div>
          <span className="text-[10px] font-mono text-stone-500 font-bold">CALENDRIER RENTRÉE</span>
        </div>
        <div className="pdf-timeline">
          <div><b>01</b><span>Je m’inscris administrativement et je dépose mon dossier</span></div>
          <div><b>02</b><span>J’active mon compte institutionnel et mon e-mail @uiz.ac.ma</span></div>
          <div><b>03</b><span>Je découvre ma filière et je rencontre mes coordonnateurs</span></div>
          <div><b>04</b><span>Je consulte mon emploi du temps sur les panneaux d'affichage et MyUIZ</span></div>
          <div><b>05</b><span>Je localise mes services : scolarité, bibliothèque, amphis</span></div>
          <div><b>06</b><span>Je rejoins un club étudiant et prends part aux activités</span></div>
          <div><b>07</b><span>Je commence sereinement mes cours et travaux dirigés</span></div>
        </div>
      </div>

      <div className="pdf-axe-divider" />

      {/* --- AXE 05 DISTINCT --- */}
      <div className="pdf-axe-block">
        <div className="pdf-axe-header-distinct ochre">
          <div className="flex items-center">
            <span className="pdf-axe-badge ochre">AXE 05</span>
            <h2 className="pdf-axe-title-distinct">
              <b>ESPACE D’ACCUEIL :</b> Un espace de proximité, d’écoute et d’orientation.
            </h2>
          </div>
          <span className="text-[10px] font-mono text-stone-500 font-bold">ANIMÉ AVEC LES ÉTUDIANTS</span>
        </div>
        <div className="pdf-compact-split">
          <div className="pdf-compact-card green">
            <h4>Accueil et accompagnement continu</h4>
            <p>
              La Faculté met à la disposition des étudiants un <strong>espace de proximité, d’écoute et d’orientation</strong>. Il permet d’obtenir des réponses rapides sur les démarches, l’orientation pédagogique, les clubs, les ateliers et les événements universitaires.
            </p>
            <p>
              <strong>Objectif :</strong> mieux informer, orienter et accompagner l’étudiant tout au long de son parcours.
            </p>
          </div>
          <div className="pdf-compact-card ochre">
            <h4>Un lieu ouvert et convivial</h4>
            <p>
              Les étudiants des dernières années de Licence et de Master animent cet espace sous la supervision du responsable de la vie de l’étudiant.
            </p>
            <p>
              📍 <strong>Localisation :</strong> RDC, Bâtiment central d'accueil<br />
              🕐 <strong>Horaires :</strong> Du Lundi au Vendredi, 09h00 – 16h30
            </p>
          </div>
        </div>
      </div>

      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027 · Page 05 / 11</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 06 — AXE 06 : MES SERVICES NUMÉRIQUES (11 PAGES)
   ========================================================================= */
export const Grouped11Page06DigitalServices: React.FC = () => (
  <section id="page-06" className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-axe-header-distinct">
            <div className="flex items-center">
              <span className="pdf-axe-badge">AXE 06</span>
              <span className="pdf-kicker">SERVICES NUMÉRIQUES</span>
            </div>
          </div>
          <h1 className="pdf-title">Vos dix outils numériques du quotidien.</h1>
        </div>
        <div className="pdf-pageno">06 / 11</div>
      </div>

      <div className="pdf-service-grid">
        <div>
          <span>01</span>
          <h3>Services de la Faculté</h3>
          <p>Informations, actualités officielles et ressources de l’établissement.</p>
        </div>
        <div>
          <span>02</span>
          <h3>MyUIZ / e-Scolarité</h3>
          <p>Suivi en temps réel de la scolarité, inscriptions et démarches administratives.</p>
        </div>
        <div>
          <span>03</span>
          <h3>Emplois du temps</h3>
          <p>Consulter les horaires des cours magistraux, TD et organiser sa semaine.</p>
        </div>
        <div>
          <span>04</span>
          <h3>Avis aux étudiants</h3>
          <p>Rester informé des annonces prioritaires, dates d'examens et sessions.</p>
        </div>
        <div>
          <span>05</span>
          <h3>Ressources pédagogiques</h3>
          <p>Supports numériques de cours, syllabus et bibliothèques académiques.</p>
        </div>
        <div>
          <span>06</span>
          <h3>Site officiel de la Faculté</h3>
          <p>Portail de référence : https://fegt.uiz.ac.ma/</p>
        </div>
        <div>
          <span>07</span>
          <h3>Capsules et services UIZ</h3>
          <p>Accéder aux contenus multimédias et services transversaux de l’Université.</p>
        </div>
        <div>
          <span>08</span>
          <h3>Inscription · Bourses · MINHATI</h3>
          <p>Toutes les démarches relatives aux bourses et aux dispositifs d’aide sociale.</p>
        </div>
        <div>
          <span>09</span>
          <h3>I.LOGHA · Santé · Sport</h3>
          <p>Centre de langues, couverture médicale AMO étudiant et complexe sportif.</p>
        </div>
        <div>
          <span>10</span>
          <h3>Compte institutionnel · Erasmus+</h3>
          <p>Adresse e-mail @uiz.ac.ma, suite Google/Microsoft et échanges internationaux.</p>
        </div>
      </div>

      <div className="pdf-note" style={{ marginTop: '5mm', fontSize: '10.5px' }}>
        <strong>Accès unique :</strong> Votre identifiant institutionnel @uiz.ac.ma vous permet de vous authentifier sur l'ensemble de ces plateformes avec un mot de passe unique.
      </div>

      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027 · Page 06 / 11</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 07 — AXE 07 & AXE 08 : DÉMARCHES & RÉUSSITE (11 PAGES)
   ========================================================================= */
export const Grouped11Page07DemarchesReussite: React.FC<GroupedPageProps> = ({ onOpenAction }) => (
  <section id="page-07" className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">ADMINISTRATION & MÉTHODOLOGIE</div>
          <h1 className="pdf-title">Démarches fluides et réussite académique.</h1>
        </div>
        <div className="pdf-pageno">07 / 11</div>
      </div>

      {/* --- AXE 07 DISTINCT --- */}
      <div className="pdf-axe-block">
        <div className="pdf-axe-header-distinct">
          <div className="flex items-center">
            <span className="pdf-axe-badge">AXE 07</span>
            <h2 className="pdf-axe-title-distinct">
              <b>MES DÉMARCHES :</b> Démarches administratives & guichet étudiant.
            </h2>
          </div>
          <span className="text-[10px] font-mono text-stone-500 font-bold">MYUIZ & GUICHET</span>
        </div>
        <div className="pdf-compact-split">
          <div className="pdf-action-list" style={{ padding: '8px 12px' }}>
            <h3 style={{ fontSize: '12px', marginBottom: '4px' }}>Que voulez-vous faire ?</h3>
            <ul style={{ fontSize: '10px' }}>
              <li className="cursor-pointer hover:underline text-[#03594E]" onClick={() => onOpenAction?.('certificat de scolarité')}>
                • Obtenir un certificat de scolarité
              </li>
              <li className="cursor-pointer hover:underline text-[#03594E]" onClick={() => onOpenAction?.('résultats examens')}>
                • Consulter ses résultats d'examens
              </li>
              <li className="cursor-pointer hover:underline text-[#03594E]" onClick={() => onOpenAction?.('relevé de notes')}>
                • Obtenir un relevé de notes officiel
              </li>
              <li className="cursor-pointer hover:underline text-[#03594E]" onClick={() => onOpenAction?.('carte étudiant')}>
                • Obtenir ou renouveler sa carte d’étudiant
              </li>
              <li className="cursor-pointer hover:underline text-[#03594E]" onClick={() => onOpenAction?.('réclamation')}>
                • Effectuer une réclamation pédagogique
              </li>
            </ul>
          </div>
          <div className="pdf-compact-card green">
            <h4>Guichet numérique & physique</h4>
            <p>
              La majorité des attestations sont délivrées en ligne via le portail MyUIZ avec signature numérique sécurisée sous 24h ouvrées.
            </p>
            <p>
              Pour les démarches en présentiel, le guichet de scolarité de la Faculté accueille les étudiants chaque jour ouvré.
            </p>
          </div>
        </div>
      </div>

      <div className="pdf-axe-divider" />

      {/* --- AXE 08 DISTINCT --- */}
      <div className="pdf-axe-block">
        <div className="pdf-axe-header-distinct rust">
          <div className="flex items-center">
            <span className="pdf-axe-badge rust">AXE 08</span>
            <h2 className="pdf-axe-title-distinct">
              <b>ACCOMPAGNEMENT & RÉUSSITE :</b> Tutorat, méthodes et IA responsable.
            </h2>
          </div>
          <span className="text-[10px] font-mono text-stone-500 font-bold">COMPÉTENCES & SOFT SKILLS</span>
        </div>
        <div className="pdf-compact-split">
          <div className="pdf-compact-card">
            <h4>Accompagnement pédagogique</h4>
            <p>
              Orientation et soutien pédagogiques, méthodologie du travail universitaire, apprentissage des langues étrangères et développement des Soft Skills indispensables à l'employabilité.
            </p>
          </div>
          <div className="pdf-compact-card rust">
            <h4>L’IA comme outil d’apprentissage</h4>
            <p>
              Usage responsable, transparent et réfléchi de l’IA dans les études, pour en faire un levier d’aide à la recherche tout en respectant l’intégrité académique et l'esprit critique.
            </p>
          </div>
        </div>
      </div>

      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027 · Page 07 / 11</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 08 — AXE 09 : ÉTUDIANTS À BESOINS SPÉCIFIQUES (11 PAGES)
   ========================================================================= */
export const Grouped11Page08SpecificNeeds: React.FC = () => (
  <section id="page-08" className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-axe-header-distinct">
            <div className="flex items-center">
              <span className="pdf-axe-badge">AXE 09</span>
              <span className="pdf-kicker">BESOINS SPÉCIFIQUES</span>
            </div>
          </div>
          <h1 className="pdf-title">Une Faculté accessible, solidaire et inclusive.</h1>
        </div>
        <div className="pdf-pageno">08 / 11</div>
      </div>

      <div className="pdf-access-grid">
        <div className="pdf-access-card">
          <b>01</b>
          <h3>Accueil et orientation</h3>
          <p>
            Des informations facilitent l’arrivée à la Faculté, l’orientation vers les services concernés et l’accès aux différents espaces du campus.
          </p>
        </div>
        <div className="pdf-access-card">
          <b>02</b>
          <h3>Accompagnement pédagogique</h3>
          <p>
            Selon les besoins et les possibilités de la Faculté, l’étudiant peut être orienté vers les services compétents pour faciliter le suivi des cours.
          </p>
        </div>
        <div className="pdf-access-card">
          <b>03</b>
          <h3>Études et examens</h3>
          <p>
            Aménagements d'épreuves d'examens (temps additionnel, assistance matérielle) conformément aux réglementations académiques en vigueur.
          </p>
        </div>
        <div className="pdf-access-card">
          <b>04</b>
          <h3>Accessibilité des espaces</h3>
          <p>
            Identification des espaces et cheminements accessibles facilitant les déplacements quotidiens au sein des amphithéâtres et bâtiments.
          </p>
        </div>
        <div className="pdf-access-card">
          <b>05</b>
          <h3>Accessibilité numérique</h3>
          <p>
            Supports de cours et capsules vidéo conçus avec sous-titres, contrastes lisibles et contenus simplifiés pour tous les profils d'apprenants.
          </p>
        </div>
      </div>

      <div className="pdf-help-band" style={{ marginTop: '7mm' }}>
        <b>Besoin d’aide ou d’un aménagement personnalisé ?</b>
        <p>
          L’étudiant pourra s’adresser à l’administration de la Faculté pour être orienté vers le référent inclusion & accessibilité. E-mail : contact@uiz.ac.ma.
        </p>
      </div>

      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027 · Page 08 / 11</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 09 — AXE 10 & AXE 11 : CLUBS & PROJETS ÉTUDIANTS (11 PAGES)
   ========================================================================= */
export const Grouped11Page09ClubsProjets: React.FC<GroupedPageProps> = ({ onOpenProposalModal }) => (
  <section id="page-09" className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">ENGAGEMENT ASSOCIATIF & PROJETS</div>
          <h1 className="pdf-title">Vivre la vie étudiante en action.</h1>
        </div>
        <div className="pdf-pageno">09 / 11</div>
      </div>

      {/* --- AXE 10 DISTINCT --- */}
      <div className="pdf-axe-block">
        <div className="pdf-axe-header-distinct">
          <div className="flex items-center">
            <span className="pdf-axe-badge">AXE 10</span>
            <h2 className="pdf-axe-title-distinct">
              <b>LES CLUBS ÉTUDIANTS :</b> La vie associative, un véritable terrain d’action.
            </h2>
          </div>
          <span className="text-[10px] font-mono text-stone-500 font-bold">5 CLUBS ACTIFS</span>
        </div>
        <div className="pdf-club-grid" style={{ marginBottom: '3mm' }}>
          <div>
            <b>ENACTUS</b>
            <span>Entrepreneuriat social et impact territorial dans le Souss.</span>
          </div>
          <div>
            <b>HULT PRIZE</b>
            <span>Compétition mondiale d'innovation étudiante à impact.</span>
          </div>
          <div>
            <b>CLUB SPORT</b>
            <span>Tournois inter-filières, football, basket, randonnées.</span>
          </div>
          <div>
            <b>AMBASSADEURS</b>
            <span>Accueil, tutorat et parrainage des nouveaux arrivants.</span>
          </div>
          <div>
            <b>CONFÉRENCE</b>
            <span>Débats d'idées, masterclasses et prise de parole en public.</span>
          </div>
        </div>
      </div>

      <div className="pdf-axe-divider" />

      {/* --- AXE 11 DISTINCT --- */}
      <div className="pdf-axe-block">
        <div className="pdf-axe-header-distinct rust">
          <div className="flex items-center">
            <span className="pdf-axe-badge rust">AXE 11</span>
            <h2 className="pdf-axe-title-distinct">
              <b>PROPOSER UNE ACTIVITÉ :</b> Une idée ? Un projet ? Donnez-lui vie.
            </h2>
          </div>
          <span className="text-[10px] font-mono text-stone-500 font-bold">PARCOURS EN 7 ÉTAPES</span>
        </div>
        <div
          className="pdf-proposal"
          style={{ cursor: 'pointer', padding: '10px 14px' }}
          onClick={onOpenProposalModal}
        >
          <div className="pdf-proposal-title">Le parcours d’une idée : en 7 étapes simples</div>
          <div className="pdf-proposal-flow">
            <span>IDÉE</span><i>→</i>
            <span>PROPOSITION</span><i>→</i>
            <span>VALIDATION</span><i>→</i>
            <span>ORGANISATION</span><i>→</i>
            <span>COMMUNICATION</span><i>→</i>
            <span>ACTIVITÉ</span><i>→</i>
            <span>BILAN</span>
          </div>
          <p style={{ marginTop: '8px', fontSize: '10.5px', fontWeight: 'bold', color: '#03594E' }}>
            ▶ Cliquez ici pour ouvrir le formulaire de proposition (envoi direct à IDRISSELGHAZI3@gmail.com)
          </p>
        </div>
      </div>

      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027 · Page 09 / 11</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 10 — AXES 12, 13, 14 & 15 : ÉVÉNEMENTS, CULTURE & EMPLOYABILITÉ (11 PAGES)
   ========================================================================= */
export const Grouped11Page10EventsCultureCareers: React.FC = () => (
  <section id="page-10" className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">ÉVÉNEMENTS, CULTURE & CARRIÈRES</div>
          <h1 className="pdf-title">Faire vivre ses talents, préparer son avenir et rayonner.</h1>
        </div>
        <div className="pdf-pageno">10 / 11</div>
      </div>

      {/* AXE 12 : LA SEMAINE DE L'ÉTUDIANT */}
      <div className="pdf-axe-block">
        <div className="pdf-axe-header-distinct">
          <div className="flex items-center">
            <span className="pdf-axe-badge">AXE 12</span>
            <h2 className="pdf-axe-title-distinct">
              <b>LA SEMAINE DE L’ÉTUDIANT :</b> Prendre la parole, créer, se dépasser.
            </h2>
          </div>
          <span className="text-[10px] font-mono text-stone-500 font-bold">CAMPUS FEGT</span>
        </div>
        <div className="pdf-compact-split">
          <div className="pdf-compact-card green">
            <h4>Un tremplin pour les passions</h4>
            <p>
              Chaque année, la Semaine de l’étudiant est rythmée par des tournois sportifs, des concours d'éloquence, des pitchs de projets et des performances culturelles.
            </p>
            <p>
              Elle permet de sélectionner les orateurs, artistes et sportifs qui représenteront la Faculté lors des manifestations de l’Université Ibn Zohr.
            </p>
          </div>
          <div className="pdf-photo-card" style={{ height: '38mm' }}>
            <img src={userImgFegtFacade} alt="Façade FEGT · Campus de Taroudant" />
            <div>
              <b>Talents en action</b>
              <span>Sport, culture, éloquence et création</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pdf-axe-divider" style={{ margin: '1.25rem 0' }} />

      {/* AXE 13 : LES GRANDS ÉVÉNEMENTS UIZ */}
      <div className="pdf-axe-block">
        <div className="pdf-axe-header-distinct ochre">
          <div className="flex items-center">
            <span className="pdf-axe-badge ochre">AXE 13</span>
            <h2 className="pdf-axe-title-distinct">
              <b>LES GRANDS ÉVÉNEMENTS UIZ :</b> Les rendez-vous de l'année.
            </h2>
          </div>
          <span className="text-[10px] font-mono text-stone-500 font-bold">CALENDRIER OFFICIEL UIZ</span>
        </div>
        <div className="pdf-calendar-table-compact">
          {EVENTS_UIZ.map((ev) => (
            <div key={ev.id} className="pdf-calendar-row-compact">
              <div className="pdf-calendar-date-col-compact">{ev.date}</div>
              <div className="pdf-calendar-name-col-compact">{ev.name}</div>
              <div className="pdf-calendar-desc-col-compact">{ev.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="pdf-axe-divider" style={{ margin: '1.25rem 0' }} />

      {/* AXE 14 & AXE 15 : CULTURE & EMPLOYABILITÉ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* AXE 14 */}
        <div className="pdf-axe-block">
          <div className="pdf-axe-header-distinct">
            <div className="flex items-center">
              <span className="pdf-axe-badge">AXE 14</span>
              <h2 className="pdf-axe-title-distinct text-sm">
                <b>CULTURE & SPORT :</b> Au-delà des cours.
              </h2>
            </div>
          </div>
          <div className="pdf-compact-card green">
            <h4>Développer ses talents</h4>
            <p className="text-xs">
              Sport, culture, arts, communication, langues et créativité. Ces activités permettent de renforcer ses compétences, de prendre des initiatives, de travailler en équipe et d'enrichir sa vie universitaire.
            </p>
            <p className="text-xs">Un agenda numérique permet de consulter toutes les activités programmées.</p>
          </div>
        </div>

        {/* AXE 15 */}
        <div className="pdf-axe-block">
          <div className="pdf-axe-header-distinct rust">
            <div className="flex items-center">
              <span className="pdf-axe-badge rust">AXE 15</span>
              <h2 className="pdf-axe-title-distinct text-sm">
                <b>STAGES & EMPLOYABILITÉ :</b> Préparer l'avenir.
              </h2>
            </div>
          </div>
          <div className="pdf-compact-card rust">
            <h4>Stages & Entrepreneuriat</h4>
            <p className="text-xs">
              Accompagnement pour la rédaction du CV, préparation aux entretiens d'embauche, recherche de stages et validation des conventions avec les entreprises régionales.
            </p>
            <p className="text-xs">
              Incubateur pour lancer sa start-up : des mentors et chefs d'entreprises locaux animent des bootcamps de Business Plan.
            </p>
          </div>
        </div>
      </div>

      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027 · Page 10 / 11</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 11 — AXES 16 À 20 : MOBILITÉ, CHARTE, FAQ & CONTACTS OFFICIELS (11 PAGES)
   ========================================================================= */
export const Grouped11Page11InternationalRightsContacts: React.FC = () => (
  <section id="page-11" className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">OUVERTURE, CADRE COMMUN & CONTACTS</div>
          <h1 className="pdf-title">Mobilité, droits, devoirs et coordonnées officielles.</h1>
        </div>
        <div className="pdf-pageno">11 / 11</div>
      </div>

      {/* AXE 16 & 17 : MOBILITÉ & NEWSLETTER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* AXE 16 */}
        <div className="pdf-axe-block">
          <div className="pdf-axe-header-distinct">
            <div className="flex items-center">
              <span className="pdf-axe-badge">AXE 16</span>
              <h2 className="pdf-axe-title-distinct text-sm">
                <b>MOBILITÉ :</b> Erasmus+ et l'international.
              </h2>
            </div>
          </div>
          <div className="pdf-mobility" style={{ padding: '8px 10px' }}>
            <div className="pdf-mobility-list" style={{ fontSize: '9.5px' }}>
              <span>• Erasmus+ et programmes européens</span>
              <span>• Programmes bilatéraux partenaires</span>
              <span>• Appels à candidatures semestriels</span>
              <span>• Échanges universitaires et crédits ECTS</span>
              <span>• Bourses de soutien à la mobilité</span>
            </div>
          </div>
        </div>

        {/* AXE 17 */}
        <div className="pdf-axe-block">
          <div className="pdf-axe-header-distinct ochre">
            <div className="flex items-center">
              <span className="pdf-axe-badge ochre">AXE 17</span>
              <h2 className="pdf-axe-title-distinct text-sm">
                <b>NEWSLETTER :</b> La mémoire du campus.
              </h2>
            </div>
          </div>
          <div className="pdf-newsletter" style={{ padding: '8px 10px' }}>
            <div className="pdf-newsletter-label">NEWS SEMESTRIELLE</div>
            <p style={{ fontSize: '9.5px', margin: '3px 0' }}>
              Partage les moments forts : événements, activités des clubs, initiatives étudiantes, réussites et partenariats socio-économiques.
            </p>
            <div className="pdf-issues" style={{ margin: '3px 0', fontSize: '9px' }}>
              <span>S1 (Automne / Hiver)</span>
              <span>S2 (Printemps / Été)</span>
            </div>
          </div>
        </div>
      </div>

      {/* AXE 18 & 19 : DROITS & FAQ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* AXE 18 */}
        <div className="pdf-axe-block">
          <div className="pdf-axe-header-distinct">
            <div className="flex items-center">
              <span className="pdf-axe-badge">AXE 18</span>
              <h2 className="pdf-axe-title-distinct text-sm">
                <b>DROITS & DEVOIRS :</b> La charte étudiante.
              </h2>
            </div>
          </div>
          <div className="pdf-rights" style={{ gap: '3mm', margin: '0' }}>
            <div className="pdf-right-box" style={{ padding: '6px 8px' }}>
              <b style={{ fontSize: '10px' }}>VOUS AVEZ DROIT À</b>
              <p style={{ fontSize: '9px', margin: '2px 0 0' }}>
                L’information claire, l’orientation, l’accompagnement pédagogique, le respect de votre dignité et l’accès équitable aux services.
              </p>
            </div>
            <div className="pdf-right-box dark" style={{ padding: '6px 8px' }}>
              <b style={{ fontSize: '10px' }}>VOUS VOUS ENGAGEZ À</b>
              <p style={{ fontSize: '9px', margin: '2px 0 0' }}>
                Respecter les personnes, les locaux, les équipements collectifs, les règles de l’établissement et l’intégrité académique.
              </p>
            </div>
          </div>
        </div>

        {/* AXE 19 : FAQ */}
        <div className="pdf-axe-block">
          <div className="pdf-axe-header-distinct rust">
            <div className="flex items-center">
              <span className="pdf-axe-badge rust">AXE 19</span>
              <h2 className="pdf-axe-title-distinct text-sm">
                <b>FAQ ÉTUDIANTE :</b> Questions clés.
              </h2>
            </div>
          </div>
          <div className="pdf-faq" style={{ padding: '6px 8px' }}>
            <div className="space-y-1.5">
              {FAQ_LIST.slice(0, 3).map((faq, i) => (
                <div key={i} className="pb-1 border-b border-stone-200 last:border-0">
                  <b className="text-[#03594E] block text-[9.5px] leading-tight">{faq.question}</b>
                  <span className="text-[8.5px] text-stone-600 line-clamp-2 leading-tight block mt-0.5">
                    {faq.answer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pdf-axe-divider" style={{ margin: '1rem 0' }} />

      {/* AXE 20 : CONTACTS ET LIENS UTILES */}
      <div className="pdf-axe-block">
        <div className="pdf-axe-header-distinct">
          <div className="flex items-center">
            <span className="pdf-axe-badge">AXE 20</span>
            <span className="pdf-kicker">CONTACTS ET LIENS UTILES · CLÔTURE</span>
          </div>
        </div>

        <div className="pdf-contact-layout">
          <div className="pdf-contact-main">
            <FEGTOfficialLogo variant="white" size="sm" className="mb-2" />
            <div className="pdf-contact-title">FEGT</div>
            <h3>Faculté d’Économie et de Gestion de Taroudant</h3>
            <p className="text-xs">Université Ibn Zohr</p>
            <p className="text-xs">
              Adresse : Hay El Mohammadi (Lastah), Taroudant, 83 000<br />
              Téléphone : +212 528 227 125<br />
              E-mail : contact@uiz.ac.ma
            </p>
            <h3 className="text-xs mt-2">Site officiel</h3>
            <p className="url text-xs">https://fegt.uiz.ac.ma/</p>
            <p className="text-[10px] text-stone-300 mt-1">
              Accueil RDC : Lun–Ven 09h00–16h30 · Scolarité · Bibliothèque · Orientation · Clubs
            </p>
          </div>
          <div className="pdf-contact-side">
            <FEGTQrCode size={95} />
            <p className="text-[10px]">
              Scannez pour accéder directement au portail officiel, aux emplois du temps et aux actualités.
            </p>
          </div>
        </div>

        <div className="pdf-closing" style={{ marginTop: '3mm' }}>
          LA VIE DE L’ÉTUDIANT,<br />
          <i>C’EST AUSSI VOUS !</i>
          <span>Participez · Proposez · Créez · Apprenez · Partagez</span>
        </div>
      </div>

      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027 · Page 11 / 11</span>
      </div>
    </div>
  </section>
);
