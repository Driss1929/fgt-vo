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

interface PDFPageProps {
  onSelectProgram?: (code: string) => void;
  onOpenAction?: (title: string) => void;
  onOpenProposalModal?: () => void;
}

/* =========================================================================
   PAGE 01 — COUVERTURE
   ========================================================================= */
export const PDFPage01: React.FC = () => (
  <section className="pdf-page pdf-cover">
    <img className="pdf-cover-photo" src={userImgRampartsSunset} alt="Remparts de Taroudant au coucher du soleil" />
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
      <b>01</b>
    </div>
  </section>
);

/* =========================================================================
   PAGE 02 — MOT DE BIENVENUE
   ========================================================================= */
export const PDFPage02: React.FC = () => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">MOT DE BIENVENUE</div>
          <h1 className="pdf-title">Votre guide. Votre Faculté. Votre année.</h1>
        </div>
        <div className="pdf-pageno">02</div>
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
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 03 — AXE 01 : DÉCOUVRIR TAROUDANT
   ========================================================================= */
export const PDFPage03: React.FC = () => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">01 · DÉCOUVRIR TAROUDANT</div>
          <h1 className="pdf-title">Une ville d’histoire, de savoir et d’avenir.</h1>
        </div>
        <div className="pdf-pageno">03</div>
      </div>
      <div className="pdf-feature-grid">
        <div className="pdf-photo-card" style={{ height: '76mm' }}>
          <img src={userImgRampartsTowers} alt="Remparts de Taroudant" />
          <div>
            <b>Taroudant</b>
            <span>Cité historique aux remparts séculaires du Souss</span>
          </div>
        </div>
        <div className="pdf-card green">
          <h3>Au cœur du Souss-Massa</h3>
          <p>
            Située au cœur de la région Souss-Massa, Taroudant offre un cadre agréable pour poursuivre ses études universitaires. Connue pour son patrimoine historique, ses remparts et sa richesse culturelle, la ville propose un environnement à taille humaine, propice aux études et à la vie étudiante.
          </p>
          <p>
            Étudier à Taroudant, c’est aussi découvrir une ville authentique et dynamique, tout en profitant de sa proximité avec Agadir et les principaux pôles économiques de la région.
          </p>
        </div>
      </div>
      <div className="pdf-card" style={{ marginTop: '7mm' }}>
        <h3>Un cadre de vie étudiant équilibré</h3>
        <p>
          Avec un coût de la vie accessible, un climat doux tout au long de l'année et une convivialité proverbiale, Taroudant permet aux étudiants de se concentrer sur leur apprentissage tout en profitant d'une immersion culturelle stimulante. Les bibliothèques, les espaces sportifs et la douceur des allées ombragées font de la ville un havre studieux.
        </p>
      </div>
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 04 — AXE 02 : MA FACULTÉ (FEGT)
   ========================================================================= */
export const PDFPage04: React.FC = () => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">02 · MA FACULTÉ</div>
          <h1 className="pdf-title">Faculté d’Économie et de Gestion de Taroudant.</h1>
        </div>
        <div className="pdf-pageno">04</div>
      </div>
      <div className="pdf-feature-grid">
        <div className="pdf-photo-card" style={{ height: '76mm' }}>
          <img src={userImgFegtFacade} alt="Bâtiment principal FEGT" />
          <div>
            <b>Campus FEGT</b>
            <span>Un environnement moderne d’apprentissage</span>
          </div>
        </div>
        <div className="pdf-card green">
          <h3>Un pôle universitaire d'excellence</h3>
          <p>
            La Faculté d’Économie et de Gestion de Taroudant (FEGT) est un établissement d'enseignement supérieur et de recherche scientifique relevant de l’Université Ibn Zohr.
          </p>
          <p>
            Elle assure des missions fondamentales de formation des compétences économiques et managériales, de recherche appliquée et d'accompagnement individualisé des étudiants pour leur épanouissement personnel et professionnel.
          </p>
        </div>
      </div>
      <div className="pdf-faculty-band" style={{ marginTop: '7mm' }}>
        <div className="pdf-big-label">FEG</div>
        <div>
          <h3>Missions et engagements académiques</h3>
          <p>
            Elle propose des formations complètes dans les domaines de l’économie, de la gestion, du commerce et du management, organisées principalement en Licences et Masters. Elle met à disposition des étudiants la scolarité numérique, l’orientation pédagogique, les activités parascolaires, ainsi que la coopération internationale.
          </p>
        </div>
      </div>
      <div className="pdf-note" style={{ marginTop: '7mm' }}>
        Son objectif : offrir un environnement favorable à l’apprentissage, à la réussite universitaire et à la préparation de l’insertion professionnelle.
      </div>
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 05 — AXE 03 : DÉCOUVRIR MA FORMATION
   ========================================================================= */
export const PDFPage05: React.FC<PDFPageProps> = ({ onSelectProgram }) => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">03 · MES FORMATIONS</div>
          <h1 className="pdf-title">Des parcours pour comprendre, entreprendre et agir.</h1>
        </div>
        <div className="pdf-pageno">05</div>
      </div>
      <p className="pdf-intro">
        Retrouvez ici une présentation des formations proposées par la Faculté d’Économie et de Gestion de Taroudant. Chaque filière prépare aux défis économiques contemporains avec des compétences spécialisées et transversales :
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
      <div className="pdf-photo-ribbon" style={{ marginTop: '7mm' }}>
        <img src={userImgFegtSign} alt="Enseigne FEGT" />
        <img src={campusCourtyardImg} alt="Patio étudiant" />
        <div>
          <b>Un campus qui se construit avec ses étudiants.</b>
          <span>Formation · échange · ouverture professionnelle</span>
        </div>
      </div>
      <div className="pdf-language-strip" style={{ marginTop: '7mm' }}>
        <b>CAPSULES DES FILIÈRES DISPONIBLES EN :</b>
        <span>العربية</span>
        <span>Français</span>
        <span>English</span>
        <span>Tamazight</span>
      </div>
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 06 — AXE 04 : MES PREMIERS PAS
   ========================================================================= */
export const PDFPage06: React.FC = () => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">04 · MES PREMIERS PAS</div>
          <h1 className="pdf-title">Le premier mois, étape par étape.</h1>
        </div>
        <div className="pdf-pageno">06</div>
      </div>
      <div className="pdf-timeline">
        <div><b>01</b><span>Je m’inscris administrativement et je dépose mon dossier</span></div>
        <div><b>02</b><span>J’obtiens mes accès numériques et mon adresse institutionnelle @uiz.ac.ma</span></div>
        <div><b>03</b><span>Je découvre ma filière et je rencontre mes enseignants coordonnateurs</span></div>
        <div><b>04</b><span>Je consulte mon emploi du temps sur les panneaux d'affichage et en ligne</span></div>
        <div><b>05</b><span>Je localise mes services : scolarité, bibliothèque, amphithéâtres</span></div>
        <div><b>06</b><span>Je découvre les clubs étudiants et les opportunités associatives</span></div>
        <div><b>07</b><span>Je commence sereinement ma vie universitaire et mes cours magistraux</span></div>
      </div>
      <div className="pdf-card green" style={{ marginTop: '8mm' }}>
        <h3>Conseils pour une intégration réussie</h3>
        <p>
          Dès vos premiers jours, prenez l'initiative de créer votre profil sur la plateforme MyUIZ, de récupérer votre carte d'étudiant et de vous rapprocher des délégués de promotion. L'équipe pédagogique et les étudiants tuteurs sont à vos côtés pour répondre à toutes vos interrogations.
        </p>
      </div>
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 07 — AXE 05 : ESPACE D’ACCUEIL & ACCOMPAGNEMENT
   ========================================================================= */
export const PDFPage07: React.FC = () => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">05 · ESPACE D’ACCUEIL</div>
          <h1 className="pdf-title">Un espace de proximité, d’écoute et d’orientation.</h1>
        </div>
        <div className="pdf-pageno">07</div>
      </div>
      <div className="pdf-split">
        <div>
          <h3>Accueil et accompagnement continu</h3>
          <p>
            La Faculté met à la disposition des étudiants un <strong>espace de proximité, d’écoute et d’orientation</strong>.
          </p>
          <p>
            Il permet notamment d’obtenir des informations sur les formations, les démarches universitaires, l’orientation pédagogique et les services de la Faculté, mais aussi sur les clubs, les activités, les ateliers, les formations complémentaires et les événements universitaires.
          </p>
          <p>
            <strong>Objectif :</strong> mieux informer, orienter et accompagner l’étudiant tout au long de son parcours.
          </p>
        </div>
        <div className="pdf-card ochre">
          <h3>Un espace animé avec les étudiants</h3>
          <p>
            Les étudiants, notamment ceux des dernières années de Licence ainsi que les étudiants de Master, pourront contribuer à l’animation de cet espace, sous la supervision du responsable de la vie de l’étudiant.
          </p>
          <p>
            📍 <strong>Localisation :</strong> Rez-de-chaussée, Bâtiment central d'accueil<br />
            🕐 <strong>Horaires d'ouverture :</strong> Du Lundi au Vendredi, 09h00 – 16h30
          </p>
          <p style={{ marginTop: '10px', fontWeight: 'bold' }}>
            ▶ Regarder la capsule de présentation de l’espace d’accueil
          </p>
        </div>
      </div>
      <div className="pdf-note" style={{ marginTop: '12mm' }}>
        L'Espace d'Accueil organise régulièrement des sessions de tutorat par les pairs pour aider les nouveaux inscrits à s'adapter aux exigences du travail universitaire.
      </div>
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 08 — AXE 06 : MES SERVICES NUMÉRIQUES
   ========================================================================= */
export const PDFPage08: React.FC = () => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">06 · SERVICES NUMÉRIQUES</div>
          <h1 className="pdf-title">Vos dix outils numériques du quotidien.</h1>
        </div>
        <div className="pdf-pageno">08</div>
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
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 09 — AXE 07 : MES DÉMARCHES ADMINISTRATIVES
   ========================================================================= */
export const PDFPage09: React.FC<PDFPageProps> = ({ onOpenAction }) => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">07 · MES DÉMARCHES</div>
          <h1 className="pdf-title">Démarches administratives & guichet étudiant.</h1>
        </div>
        <div className="pdf-pageno">09</div>
      </div>
      <div className="pdf-split">
        <div>
          <div className="pdf-action-list">
            <h3>Que voulez-vous faire ?</h3>
            <ul>
              <li className="cursor-pointer hover:underline" onClick={() => onOpenAction?.('obtenir un certificat de scolarité')}>obtenir un certificat de scolarité ;</li>
              <li className="cursor-pointer hover:underline" onClick={() => onOpenAction?.('consulter ses résultats')}>consulter ses résultats d'examens ;</li>
              <li className="cursor-pointer hover:underline" onClick={() => onOpenAction?.('obtenir un relevé de notes')}>obtenir un relevé de notes officiel ;</li>
              <li className="cursor-pointer hover:underline" onClick={() => onOpenAction?.('obtenir ou renouveler sa carte d’étudiant')}>obtenir ou renouveler sa carte d’étudiant ;</li>
              <li className="cursor-pointer hover:underline" onClick={() => onOpenAction?.('effectuer une réclamation')}>effectuer une réclamation pédagogique ;</li>
              <li className="cursor-pointer hover:underline" onClick={() => onOpenAction?.('demander un document administratif')}>demander un document administratif ;</li>
              <li className="cursor-pointer hover:underline" onClick={() => onOpenAction?.('se renseigner sur une bourse')}>se renseigner sur la bourse d'études ;</li>
              <li className="cursor-pointer hover:underline" onClick={() => onOpenAction?.('obtenir des informations sur la mobilité')}>obtenir des informations sur la mobilité internationale ;</li>
            </ul>
            <p>
              <strong>Contact Scolarité :</strong> contact@uiz.ac.ma<br />
              <strong>Plateforme :</strong> https://fegt.uiz.ac.ma/demarches
            </p>
          </div>
        </div>
        <div className="pdf-card green">
          <h3>Un guichet numérique fluide</h3>
          <p>
            Pour faciliter le quotidien de chaque étudiante et étudiant, la majorité des documents administratifs (attestations, relevés provisoires) sont délivrés de manière dématérialisée via le portail MyUIZ avec signature numérique sécurisée.
          </p>
          <p>
            Pour les démarches nécessitant un retrait en présentiel, le guichet de scolarité de la Faculté accueille les étudiants aux horaires d'ouverture avec un traitement sous 24h à 48h ouvrées.
          </p>
        </div>
      </div>
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 10 — AXE 08 : ACCOMPAGNEMENT & RÉUSSITE
   ========================================================================= */
export const PDFPage10: React.FC = () => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">08 · ACCOMPAGNEMENT & RÉUSSITE</div>
          <h1 className="pdf-title">Tutorat, méthodes et intelligence artificielle.</h1>
        </div>
        <div className="pdf-pageno">10</div>
      </div>
      <div className="pdf-split">
        <div className="pdf-card green">
          <h3>Accompagnement pédagogique et réussite</h3>
          <p>
            La Faculté accompagne les étudiants tout au long de leur parcours afin de favoriser leur réussite universitaire et le développement optimal de leurs compétences.
          </p>
          <p>
            Orientation et soutien pédagogiques, méthodologie du travail universitaire, apprentissage des langues étrangères, communication orale et écrite, et développement des Soft Skills. Des ateliers de formation et de préparation aux examens sont régulièrement proposés, en présentiel ou à distance.
          </p>
        </div>
        <div className="pdf-card rust">
          <h3>L’intelligence artificielle comme outil</h3>
          <p>
            Une attention particulière est accordée à l’utilisation responsable, transparente et réfléchie de l’IA dans les études universitaires, afin d’en faire un outil d’aide à l’apprentissage tout en respectant scrupuleusement les règles académiques et l'intégrité intellectuelle.
          </p>
          <p>
            Des sessions de sensibilisation forment les étudiants aux bonnes pratiques pour utiliser l'IA générative comme levier de recherche sans compromettre leur esprit critique.
          </p>
        </div>
      </div>
      <div className="pdf-card" style={{ marginTop: '10mm' }}>
        <h3>Ateliers de Soft Skills & Développement Personnel</h3>
        <p>
          La maîtrise des savoirs académiques va de pair avec les compétences relationnelles. Des formations certifiantes en prise de parole en public, travail en équipe, résolution de problèmes et gestion du temps sont programmées chaque semestre.
        </p>
      </div>
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 11 — AXE 09 : ÉTUDIANTS À BESOINS SPÉCIFIQUES
   ========================================================================= */
export const PDFPage11: React.FC = () => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">09 · BESOINS SPÉCIFIQUES</div>
          <h1 className="pdf-title">Une Faculté accessible, solidaire et inclusive.</h1>
        </div>
        <div className="pdf-pageno">11</div>
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
      <div className="pdf-help-band">
        <b>Besoin d’aide ou d’un aménagement personnalisé ?</b>
        <p>
          L’étudiant pourra s’adresser à l’administration de la Faculté pour être orienté vers le référent inclusion & accessibilité. E-mail : contact@uiz.ac.ma.
        </p>
      </div>
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 12 — AXE 10 : LES CLUBS ÉTUDIANTS
   ========================================================================= */
export const PDFPage12: React.FC = () => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">10 · LES CLUBS ÉTUDIANTS</div>
          <h1 className="pdf-title">La vie associative, un véritable terrain d’action.</h1>
        </div>
        <div className="pdf-pageno">12</div>
      </div>
      <p className="pdf-intro">
        Les clubs constituent un élément essentiel de la vie de l’étudiant. Ils permettent de développer des projets concrets, de tisser des liens solides et d'acquérir une précieuse expérience de gestion d'équipe :
      </p>
      <div className="pdf-photo-strip pdf-photo-strip-clean">
        <div className="pdf-action-learning-card">
          <b>Participer, c’est aussi apprendre autrement.</b>
          <span>Des rencontres, des projets concrets et des moments partagés au sein de la Faculté.</span>
        </div>
      </div>
      <div className="pdf-club-grid">
        <div>
          <b>ENACTUS</b>
          <span>Entrepreneuriat social, innovation et projets à fort impact territorial.</span>
        </div>
        <div>
          <b>HULT PRIZE</b>
          <span>Compétition internationale d'entrepreneuriat étudiant et résolution d'enjeux mondiaux.</span>
        </div>
        <div>
          <b>CLUB SPORT</b>
          <span>Organisation de tournois inter-filières, activités physiques et compétitions régionales.</span>
        </div>
        <div>
          <b>AMBASSADEURS & ORIENTATION</b>
          <span>Accueil, parrainage des nouveaux arrivants et visites guidées du campus.</span>
        </div>
        <div>
          <b>CONFÉRENCE & FORMATION</b>
          <span>Organisation de tables rondes d'actualité, masterclasses et ateliers de compétences.</span>
        </div>
      </div>
      <div className="pdf-club-note">
        Chaque club dispose d’une fiche numérique : <b>Présentation · Responsable · Activités · Actualités · Comment adhérer ? · Contact</b>
      </div>
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 13 — AXE 11 : PROPOSER UNE ACTIVITÉ OU UN PROJET
   ========================================================================= */
export const PDFPage13: React.FC<PDFPageProps> = ({ onOpenProposalModal }) => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">11 · PROPOSER UN PROJET</div>
          <h1 className="pdf-title">Une idée ? Un projet ? Donnez-lui vie.</h1>
        </div>
        <div className="pdf-pageno">13</div>
      </div>
      <div className="pdf-card green">
        <h3>Encourager l’initiative et la créativité étudiante</h3>
        <p>
          La Faculté encourage chaque étudiant, individuellement ou au sein d'une équipe, à soumettre des idées de projets : séminaires, compétitions sportives, actions solidaires, expositions artistiques ou ateliers thématiques.
        </p>
        <p>
          L'administration met à disposition les infrastructures (amphithéâtres, espaces verts, matériel de sonorisation et de projection) pour donner vie aux initiatives validées.
        </p>
      </div>
      <div className="pdf-proposal" style={{ marginTop: '9mm', cursor: 'pointer' }} onClick={onOpenProposalModal}>
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
        <p style={{ marginTop: '10px', fontSize: '11px', fontWeight: 'bold', color: '#03594E' }}>
          Cliquez ici pour ouvrir le formulaire de proposition (envoi direct à IDRISSELGHAZI3@gmail.com) →
        </p>
      </div>
      <div className="pdf-card" style={{ marginTop: '9mm' }}>
        <h3>Accompagnement méthodologique</h3>
        <p>
          Le responsable de la vie étudiante et les professeurs tuteurs accompagnent les porteurs de projets dans la rédaction du cahier des charges, le plan de communication et la gestion logistique de l'événement.
        </p>
      </div>
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 14 — AXE 12 : LA SEMAINE DE L’ÉTUDIANT
   ========================================================================= */
export const PDFPage14: React.FC = () => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">12 · SEMAINE DE L’ÉTUDIANT</div>
          <h1 className="pdf-title">Prendre la parole, créer, se dépasser.</h1>
        </div>
        <div className="pdf-pageno">14</div>
      </div>
      <div className="pdf-split">
        <div>
          <div className="pdf-number-hero">12</div>
          <img className="pdf-small-photo" src={userImgFegtFacade} alt="Façade FEGT · Campus de Taroudant" />
          <div className="pdf-caption">
            Sport, culture et représentation : les talents étudiants trouvent leur scène.
          </div>
        </div>
        <div>
          <h3>La Semaine de l’étudiant : un tremplin pour vos passions</h3>
          <p>
            Chaque année, la Faculté organise la <strong>Semaine de l’étudiant</strong>, rythmée par des tournois sportifs, des concours d'éloquence, des présentations de projets entrepreneuriaux et des performances artistiques.
          </p>
          <p>
            Cette semaine phare permet notamment de repérer et de valoriser les étudiants talentueux :
          </p>
          <ul>
            <li style={{ fontSize: '11px', marginBottom: '5px' }}>• Oratrices et orateurs en langues nationales et internationales ;</li>
            <li style={{ fontSize: '11px', marginBottom: '5px' }}>• Artistes, musiciens, créateurs de contenus et podcasteurs ;</li>
            <li style={{ fontSize: '11px', marginBottom: '5px' }}>• Athlètes et sportifs de compétition ;</li>
            <li style={{ fontSize: '11px', marginBottom: '5px' }}>• Porteurs de projets innovants à impact territorial.</li>
          </ul>
          <p>
            Les lauréats sélectionnés représentent ensuite fièrement la FEGT lors des grandes compétitions régionales organisées à l’échelle de l’Université Ibn Zohr.
          </p>
        </div>
      </div>
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 15 — AXE 13 : LES GRANDS ÉVÉNEMENTS UIZ
   ========================================================================= */
export const PDFPage15: React.FC = () => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">13 · LES GRANDS ÉVÉNEMENTS UIZ</div>
          <h1 className="pdf-title">Les grands rendez-vous de l’Université Ibn Zohr.</h1>
        </div>
        <div className="pdf-pageno">15</div>
      </div>
      <div className="pdf-calendar-container">
        <h2 className="pdf-calendar-main-title">Les rendez-vous de l'année</h2>
        <p className="pdf-calendar-lead">
          La stratégie se déploie à travers des temps forts qui rythment l'année, communs à l'ensemble des établissements de l'UIZ.
        </p>

        <div className="pdf-calendar-table">
          {EVENTS_UIZ.map((ev) => (
            <div key={ev.id} className="pdf-calendar-row">
              <div className="pdf-calendar-date-col">
                {ev.date}
              </div>
              <div className="pdf-calendar-name-col">
                {ev.name}
              </div>
              <div className="pdf-calendar-desc-col">
                {ev.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 16 — AXE 14 : CULTURE, SPORT & CRÉATIVITÉ
   ========================================================================= */
export const PDFPage16: React.FC = () => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">14 · CULTURE & SPORT</div>
          <h1 className="pdf-title">Une expérience qui dépasse les enseignements.</h1>
        </div>
        <div className="pdf-pageno">16</div>
      </div>
      <div className="pdf-culture-hero">
        <img className="pdf-culture-photo" src={userImgRampartsSunset} alt="Coucher de soleil sur Taroudant" />
        <div className="pdf-big-word">VIVRE</div>
        <p>
          La Faculté souhaite favoriser une vie universitaire dynamique, enrichissante et ouverte, en encourageant la participation des étudiants à différentes activités : sport, culture, arts, communication, langues, créativité, entrepreneuriat et formation.
        </p>
      </div>
      <div className="pdf-two-cards">
        <div className="pdf-card">
          <h3>Développer ses talents</h3>
          <p>
            Ces activités permettent de développer ses talents, renforcer ses compétences, prendre des initiatives, travailler en équipe et enrichir son expérience universitaire, au-delà des enseignements académiques.
          </p>
          <p>Un agenda numérique permettra de consulter les activités programmées.</p>
          <b>▣ Voir l’agenda de la vie de l’étudiant</b>
        </div>
        <div className="pdf-card green">
          <h3>Santé, bien-être et épanouissement</h3>
          <p>
            Des infrastructures de plein air et des partenariats locaux offrent aux étudiants un accès privilégié aux pratiques sportives et aux événements culturels régionaux pour concilier équilibre personnel et réussite académique.
          </p>
        </div>
      </div>
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 17 — AXE 15 : STAGES, EMPLOYABILITÉ & ENTREPRENEURIAT
   ========================================================================= */
export const PDFPage17: React.FC = () => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">15 · EMPLOYABILITÉ</div>
          <h1 className="pdf-title">Préparer son avenir professionnel et entreprendre.</h1>
        </div>
        <div className="pdf-pageno">17</div>
      </div>
      <div className="pdf-card rust">
        <h3>Stages, employabilité et entrepreneuriat</h3>
        <p>
          La Faculté accompagne les étudiants dans la préparation de leur avenir professionnel et le développement de leur esprit entrepreneurial.
        </p>
        <p>
          Recherche de stages, préparation du CV et des entretiens, Soft Skills, rencontres avec les professionnels, conférences économiques, concours d'innovation et opportunités d'insertion.
        </p>
      </div>
      <div className="pdf-split" style={{ marginTop: '7mm' }}>
        <div className="pdf-card">
          <h3>Pôle Carrières & Stages</h3>
          <p>
            Un accompagnement dédié pour la validation des conventions de stage, la mise en relation avec le tissu économique régional du Souss-Massa et des simulations d'entretiens d'embauche.
          </p>
        </div>
        <div className="pdf-card green">
          <h3>Incubateur & Esprit d'entreprise</h3>
          <p>
            Pour les étudiants souhaitant créer leur propre entreprise, des mentors et des chefs d'entreprises locaux animent des bootcamps de modélisation de Business Plan et d'accès aux financements.
          </p>
        </div>
      </div>
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 18 — AXE 16 : MOBILITÉ INTERNATIONALE
   ========================================================================= */
export const PDFPage18: React.FC = () => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">16 · MOBILITÉ INTERNATIONALE</div>
          <h1 className="pdf-title">Élargir ses horizons avec Erasmus+ et les échanges.</h1>
        </div>
        <div className="pdf-pageno">18</div>
      </div>
      <div className="pdf-mobility">
        <div className="pdf-mobility-title">MOBILITÉ</div>
        <div className="pdf-mobility-list">
          <span>Erasmus+ et programmes européens</span>
          <span>Programmes de mobilité bilatéraux</span>
          <span>Partenariats universitaires internationaux</span>
          <span>Appels à candidatures semestriels</span>
          <span>Échanges universitaires et crédits ECTS</span>
          <span>Possibilités de stages à l'étranger</span>
          <span>Conditions et procédures de candidature</span>
          <span>Bourses de soutien à la mobilité</span>
        </div>
      </div>
      <div className="pdf-card green" style={{ marginTop: '10mm' }}>
        <h3>Une ouverture sur le monde académique</h3>
        <p>
          Grâce aux accords de coopération de l’Université Ibn Zohr, les étudiants de la FEGT peuvent effectuer des semestres d'études dans des universités partenaires européennes et internationales, avec pleine reconnaissance académique de leurs crédits.
        </p>
        <p>
          Le bureau de la coopération internationale assiste les candidats dans la constitution de leur dossier et les démarches de préparation au départ.
        </p>
      </div>
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 19 — AXE 17 : NEWSLETTER DE LA FACULTÉ
   ========================================================================= */
export const PDFPage19: React.FC = () => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">17 · NEWSLETTER</div>
          <h1 className="pdf-title">Les moments forts de la Faculté, semestre après semestre.</h1>
        </div>
        <div className="pdf-pageno">19</div>
      </div>
      <div className="pdf-newsletter">
        <div className="pdf-newsletter-label">NEWS SEMESTRIELLE</div>
        <h3>La mémoire et le rayonnement de notre communauté.</h3>
        <p>
          La News semestrielle permettra de partager et de valoriser les moments forts de la vie de la Faculté : événements, activités des clubs, initiatives des étudiants, réussites, nouveaux projets, partenariats et prochaines activités.
        </p>
        <div className="pdf-issues">
          <span>Semestre 1 (Automne / Hiver)</span>
          <span>Semestre 2 (Printemps / Été)</span>
        </div>
        <p>
          Les différentes éditions seront accessibles en ligne afin de garder une trace des activités et réalisations de la Faculté et de les partager avec les étudiants, les anciens diplômés et ses partenaires socio-économiques.
        </p>
      </div>
      <div className="pdf-card" style={{ marginTop: '9mm' }}>
        <h3>Contribuez à la prochaine édition</h3>
        <p>
          Vous avez mené à bien un projet innovant, remporté un prix ou organisé une action marquante ? Contactez le comité éditorial de la News semestrielle pour faire figurer votre initiative dans le prochain numéro.
        </p>
      </div>
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 20 — AXE 18 : DROITS & DEVOIRS DE L’ÉTUDIANT
   ========================================================================= */
export const PDFPage20: React.FC = () => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">18 · DROITS & DEVOIRS</div>
          <h1 className="pdf-title">Les règles et valeurs pour avancer ensemble.</h1>
        </div>
        <div className="pdf-pageno">20</div>
      </div>
      <div className="pdf-rights">
        <div className="pdf-right-box">
          <b>VOUS AVEZ DROIT À</b>
          <p>
            L’information claire, à l’orientation, à l’accompagnement pédagogique, au respect de votre dignité et à l’accès équitable aux services universitaires conformément aux règles applicables.
          </p>
        </div>
        <div className="pdf-right-box dark">
          <b>VOUS VOUS ENGAGEZ À</b>
          <p>
            Respecter les personnes, les locaux, les équipements collectifs, les règles de l’établissement et les principes rigoureux d’intégrité académique.
          </p>
        </div>
      </div>
      <div className="pdf-card" style={{ marginTop: '10mm' }}>
        <h3>Charte de civisme et de responsabilité</h3>
        <p>
          La vie universitaire repose sur le respect mutuel, la tolérance et la bienveillance. La préservation du matériel informatique, de la propreté du campus et de la sérénité des espaces d'étude est l'affaire de tous les membres de la communauté de la FEGT.
        </p>
      </div>
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 21 — AXE 19 : FOIRE AUX QUESTIONS (FAQ)
   ========================================================================= */
export const PDFPage21: React.FC = () => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">19 · FAQ</div>
          <h1 className="pdf-title">Foire aux questions : les réponses à vos interrogations.</h1>
        </div>
        <div className="pdf-pageno">21</div>
      </div>
      <div className="pdf-faq">
        <h3>FAQ · Une question sur la vie universitaire ?</h3>
        <div className="pdf-faq-grid">
          {FAQ_LIST.map((faq, i) => (
            <div key={i} style={{ padding: '6px 0', borderBottom: '1px solid #d5ccbd' }}>
              <b style={{ color: '#03594E', display: 'block', fontSize: '10.5px' }}>{faq.question}</b>
              <span style={{ fontSize: '9.5px', color: '#4B5563', lineHeight: '1.35', display: 'block', marginTop: '3px' }}>
                {faq.answer}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);

/* =========================================================================
   PAGE 22 — AXE 20 : CONTACTS ET LIENS UTILES
   ========================================================================= */
export const PDFPage22: React.FC = () => (
  <section className="pdf-page">
    <div className="pdf-inner">
      <div className="pdf-top">
        <div>
          <div className="pdf-kicker">20 · CONTACTS ET LIENS UTILES</div>
          <h1 className="pdf-title">Gardez votre Faculté à portée de main.</h1>
        </div>
        <div className="pdf-pageno">22</div>
      </div>
      <div className="pdf-contact-layout">
        <div className="pdf-contact-main">
          <FEGTOfficialLogo variant="white" className="mb-3" />
          <div className="pdf-contact-title">FEGT</div>
          <h3>Faculté d’Économie et de Gestion de Taroudant</h3>
          <p>Université Ibn Zohr</p>
          <p>
            Adresse : Hay El Mohammadi (Lastah), Taroudant, 83 000<br />
            Téléphone : +212 528 227 125<br />
            E-mail : contact@uiz.ac.ma
          </p>
          <h3>Site officiel</h3>
          <p className="url">https://fegt.uiz.ac.ma/</p>
          <h3>Espace d’accueil, d’information et d’accompagnement</h3>
          <p>
            Localisation : Bâtiment d'accueil, rez-de-chaussée<br />
            Horaires : Du Lundi au Vendredi, 09h00 – 16h30
          </p>
          <p>
            Autres contacts<br />
            Scolarité · Bibliothèque · Orientation · Clubs · Mobilité internationale
          </p>
        </div>
        <div className="pdf-contact-side">
          <FEGTQrCode size={115} />
          <p>
            Scannez pour accéder directement au site officiel, aux formations, aux emplois du temps et aux actualités.
          </p>
        </div>
      </div>
      <div className="pdf-closing">
        LA VIE DE L’ÉTUDIANT,<br />
        <i>C’EST AUSSI VOUS !</i>
        <span>Participez · Proposez · Créez · Apprenez · Partagez</span>
      </div>
      <div className="pdf-footer">
        <span>FEGT · Université Ibn Zohr</span>
        <span>Guide étudiant · 2026–2027</span>
      </div>
    </div>
  </section>
);
