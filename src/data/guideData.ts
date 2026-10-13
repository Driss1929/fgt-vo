export interface ProgramDetail {
  id: string;
  code: string;
  cycle: 'LICENCE' | 'MASTER';
  number?: string;
  name: string;
  fullName: string;
  color: string;
  accentBg: string;
  description: string;
  objectifs: string[];
  competences: string[];
  debouches: string[];
  langues: string[];
}

export interface ClubInfo {
  id: string;
  name: string;
  theme: string;
  desc: string;
  responsableRole: string;
  missions: string[];
  activitesTypes: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
  page: number;
}

export const PROGRAMS: ProgramDetail[] = [
  {
    id: 'gemd',
    code: 'GEMD',
    cycle: 'LICENCE',
    number: '01',
    name: 'Gestion, E-Business et Marketing Digital',
    fullName: 'Licence d’Études Fondamentales : Gestion, E-Business et Marketing Digital',
    color: '#03594E',
    accentBg: 'bg-[#03594E] text-white',
    description: 'Une formation d’avant-garde alliant les fondamentaux de la gestion commerciale, les stratégies web, le commerce électronique et l’analyse de données digitales.',
    objectifs: [
      'Maîtriser les leviers du marketing digital et du e-commerce',
      'Concevoir des stratégies de communication multicanale',
      'Analyser le comportement consommateur et piloter des campagnes'
    ],
    competences: [
      'SEO/SEA, Growth Hacking, Social Media Strategy',
      'Gestion de plateformes e-commerce & CRM',
      'Analyse de données marketing et Web Analytics'
    ],
    debouches: [
      'Digital Marketing Manager',
      'Responsable E-Commerce',
      'Chef de projet digital / Community Manager',
      'Poursuite d’études en Master Spécialisé'
    ],
    langues: ['Français', 'English', 'العربية']
  },
  {
    id: 'mge',
    code: 'MGE',
    cycle: 'LICENCE',
    number: '02',
    name: 'Management et Gestion des Entreprises',
    fullName: 'Licence d’Études Fondamentales : Management et Gestion des Entreprises',
    color: '#FE8235',
    accentBg: 'bg-[#FE8235] text-white',
    description: 'Le socle d’excellence en pilotage d’organisation, diagnostic financier, management d’équipe et stratégie d’entreprise dans un monde économique en mutation.',
    objectifs: [
      'Acquérir les méthodes d’analyse financière et comptable',
      'Développer des compétences opérationnelles en management d’équipe',
      'Comprendre l’écosystème légal et fiscal des entreprises marocaines'
    ],
    competences: [
      'Contrôle de gestion et audit opérationnel',
      'Gestion des ressources humaines et droit du travail',
      'Management stratégique et gestion de projets'
    ],
    debouches: [
      'Gestionnaire d’entreprise / Contrôleur de gestion junior',
      'Chargé de clientèle professionnelle en banque/assurance',
      'Assistant RH et administration du personnel',
      'Poursuite en Master Management / Finance'
    ],
    langues: ['Français', 'English']
  },
  {
    id: 'endeb',
    code: 'ENDEB',
    cycle: 'LICENCE',
    number: '03',
    name: 'Entrepreneuriat et Développement des Business',
    fullName: 'Licence Professionnelle : Entrepreneuriat et Développement des Business',
    color: '#F8C62F',
    accentBg: 'bg-[#F8C62F] text-[#1F2432]',
    description: 'Un cursus axé sur l’action pour transformer des idées innovantes en modèles économiques viables, créer sa start-up ou dynamiser le business de PME régionales.',
    objectifs: [
      'Favoriser l’esprit d’entreprise et l’intrapreneuriat',
      'Accompagner la création et la valorisation de projets innovants',
      'Structurer des business plans bancables et durables'
    ],
    competences: [
      'Design Thinking & Lean Startup',
      'Financement de l’innovation et levée de fonds',
      'Négociation commerciale et développement de partenariats'
    ],
    debouches: [
      'Créateur / Repreneur d’entreprise',
      'Business Developer / Chargé d’affaires',
      'Conseiller en création d’entreprise et incubateur',
      'Manager de centre de profit'
    ],
    langues: ['Français', 'English', 'العربية']
  },
  {
    id: 'mci',
    code: 'MCI',
    cycle: 'MASTER',
    name: 'Management et Commerce International',
    fullName: 'Master Spécialisé : Management et Commerce International',
    color: '#182A25',
    accentBg: 'bg-[#182A25] text-white',
    description: 'Un programme de haut niveau orienté vers la négociation internationale, la logistique globale, le supply chain management et l’expansion sur les marchés d’exportation.',
    objectifs: [
      'Piloter des opérations d’import-export complexes',
      'Négocier dans un environnement multiculturel',
      'Maîtriser les réglementations douanières et logistiques mondiales'
    ],
    competences: [
      'Supply Chain Management international & Incoterms',
      'Financement international et gestion du risque de change',
      'Intelligence économique et étude des marchés cibles'
    ],
    debouches: [
      'Responsable Export / Acheteur international',
      'Coordinateur Supply Chain & Transit',
      'Consultant en stratégie internationale',
      'Cadre dans les zones logistiques franches et ports'
    ],
    langues: ['English', 'Français', 'العربية']
  }
];

export const SERVICES_NUMERIQUES = [
  {
    id: '01',
    title: 'Services de la Faculté',
    desc: 'Portail administratif, annonces officielles, actualités et ressources pédagogiques de l’établissement.',
    linkText: 'fegt.uiz.ac.ma',
    tag: 'Portail FEGT'
  },
  {
    id: '02',
    title: 'MyUIZ / e-Scolarité',
    desc: 'Plateforme unifiée pour le suivi de la scolarité, attestations en ligne, réinscriptions et notes.',
    linkText: 'my.uiz.ac.ma',
    tag: 'E-Scolarité'
  },
  {
    id: '03',
    title: 'Emplois du temps',
    desc: 'Consultation hebdomadaire des plannings de cours, travaux dirigés (TD), et salles en temps réel.',
    linkText: 'Consulter plannings',
    tag: 'Organisation'
  },
  {
    id: '04',
    title: 'Avis aux étudiants',
    desc: 'Fil d’annonces prioritaires : calendriers d’examens, rattrapages, événements et avis de scolarité.',
    linkText: 'Affichage numérique',
    tag: 'Alertes'
  },
  {
    id: '05',
    title: 'Ressources pédagogiques',
    desc: 'Supports de cours numériques, bibliothèques en ligne (Cairn, ScienceDirect), et syllabus téléchargeables.',
    linkText: 'E-Learning UIZ',
    tag: 'Ressources'
  },
  {
    id: '06',
    title: 'Site de la Faculté',
    desc: 'Le site officiel de référence pour tout l’écosystème : actualités, recherche, corps enseignant.',
    linkText: 'https://fegt.uiz.ac.ma/',
    tag: 'Site Officiel'
  },
  {
    id: '07',
    title: 'Capsules et services UIZ',
    desc: 'Tutoriels vidéos, capsules explicatives en 4 langues et services transversaux de l’Université Ibn Zohr.',
    linkText: 'Chaine vidéo UIZ',
    tag: 'Multimédia'
  },
  {
    id: '08',
    title: 'Inscription · Bourses · MINHATI',
    desc: 'Portail national des bourses universitaires Minhati et suivi des versements et régularisations.',
    linkText: 'minhati.ma',
    tag: 'Aide sociale'
  },
  {
    id: '09',
    title: 'I.LOGHA · Santé · Sport',
    desc: 'Centres de langues I.LOGHA pour certifications, couverture médicale AMO étudiant et complexe sportif.',
    linkText: 'Vie de campus',
    tag: 'Bien-être'
  },
  {
    id: '10',
    title: 'Compte e-mail institutionnel · Erasmus+',
    desc: 'Messagerie @uiz.ac.ma donnant accès à Google Workspace, Microsoft 365 et candidatures Erasmus+.',
    linkText: 'Webmail UIZ',
    tag: 'International'
  }
];

export const DEMARCHES_ITEMS = [
  {
    title: 'Certificat de scolarité',
    desc: 'Demande en ligne via MyUIZ ou guichet de scolarité. Délivrance sous 24h ouvrées.',
    steps: 'Se connecter à MyUIZ > E-Services > Documents administratifs > Télécharger ou retirer.'
  },
  {
    title: 'Consultation des résultats',
    desc: 'Affichage numérique sécurisé après chaque session d’examens (Normale & Rattrapage).',
    steps: 'Accéder à votre espace e-Scolarité muni de votre CNE / Massar.'
  },
  {
    title: 'Relevé de notes officiel',
    desc: 'Nécessaire pour candidatures externes, poursuite d’études ou stages à l’international.',
    steps: 'Formulaire de demande de relevé semestriel ou global auprès du service de scolarité.'
  },
  {
    title: 'Carte d’étudiant & renouvellement',
    desc: 'Pass d’accès au campus, à la bibliothèque universitaire et aux services du CROUS.',
    steps: 'Délivrée lors de la première inscription. En cas de perte, déclaration sur l’honneur + photo.'
  },
  {
    title: 'Réclamations pédagogiques',
    desc: 'Procédure formelle de vérification matérielle des copies d’examen dans les délais impartis.',
    steps: 'Dépôt via le formulaire de réclamation en ligne dans les 48h suivant la publication des résultats.'
  },
  {
    title: 'Bourses et aides sociales',
    desc: 'Informations sur l’éligibilité, les tranches de versement et les réclamations Minhati.',
    steps: 'Guichet d’aide sociale de la faculté ou plateforme nationale minhati.ma.'
  },
  {
    title: 'Mobilité internationale',
    desc: 'Candidatures Erasmus+, bourses d’excellence et doubles diplômes partenaires.',
    steps: 'Bureau des relations internationales et de coopération de la FEGT.'
  }
];

export const CLUBS_LIST: ClubInfo[] = [
  {
    id: 'enactus',
    name: 'ENACTUS FEGT',
    theme: 'Entrepreneuriat social & Innovation',
    desc: 'Réseau mondial d’étudiants mobilisant l’action entrepreneuriale pour améliorer la vie des communautés locales du Souss-Massa.',
    responsableRole: 'Présidence étudiante élue + Tuteur enseignant',
    missions: ['Création de micro-entreprises sociales', 'Pitchs et compétitions nationales', 'Ateliers d’idéation et terrain'],
    activitesTypes: ['Hackathons d’impact', 'Campagnes de terrain dans la province de Taroudant', 'Participation à la National Cup']
  },
  {
    id: 'hult-prize',
    name: 'HULT PRIZE ON-CAMPUS',
    theme: 'Challenges internationaux',
    desc: 'Le prix Nobel étudiant doté de 1M$ de seed funding. Concours de résolutions d’enjeux planétaires par l’entreprise durable.',
    responsableRole: 'Campus Director + Comité d’organisation',
    missions: ['Organisation du sommet On-Campus', 'Coaching d’équipes multidisciplinaires', 'Représentation aux sommets régionaux'],
    activitesTypes: ['Masterclasses avec des experts', 'Pitch sessions en anglais', 'Bootcamps d’accélération']
  },
  {
    id: 'club-sport',
    name: 'CLUB SPORT & SANTÉ',
    theme: 'Compétitions & Activités physiques',
    desc: 'Animation des tournois inter-filières (football, basketball, volleyball, athlétisme, randonnées) et promotion du bien-être.',
    responsableRole: 'Capitaine général + Responsable des sections',
    missions: ['Sélection des équipes représentatives de la FEGT', 'Organisation de tournois réguliers', 'Sorties découverte nature'],
    activitesTypes: ['Coupe de la Faculté', 'Tournois inter-établissements UIZ', 'Séances de fitness et yoga de plein air']
  },
  {
    id: 'ambassadeurs',
    name: 'AMBASSADEURS & ORIENTATION',
    theme: 'Accueil, Tutorat & Accompagnement',
    desc: 'Étudiants aînés bénévoles accompagnant les nouveaux arrivants dans leur intégration universitaire et l’orientation des bacheliers.',
    responsableRole: 'Coordinateur des Ambassadeurs + Service Vie Étudiante',
    missions: ['Guidage lors des journées portes ouvertes', 'Permanence à l’espace d’accueil', 'Parrainage d’étudiants de 1ère année'],
    activitesTypes: ['Visites guidées du campus', 'Cafés d’orientation', 'Webinaires de conseils méthodologiques']
  },
  {
    id: 'conference',
    name: 'CONFÉRENCE & FORMATION',
    theme: 'Débats d’idées, Soft Skills & Masterclasses',
    desc: 'Organisation de tables rondes d’actualité économique, rencontres avec des décideurs et formations en prise de parole.',
    responsableRole: 'Secrétariat général + Responsable programmation',
    missions: ['Invitation d’experts et chefs d’entreprises', 'Ateliers de négociation et éloquence', 'Certifications professionnelles'],
    activitesTypes: ['Grandes conférences FEGT', 'Ateliers LinkedIn & CV', 'Tribunes économiques régionales']
  }
];

export interface UIZEventSchedule {
  id: string;
  date: string;
  name: string;
  desc: string;
  edition?: string;
  badge?: string;
  langues?: string[];
}

export const EVENTS_UIZ: UIZEventSchedule[] = [
  {
    id: 'eloquence',
    date: 'Oct. 2026 – 5 févr. 2027',
    name: 'UIZ.Éloquence',
    badge: 'Art Oratoire',
    desc: 'Début du concours en octobre 2026 ; finale le vendredi 5 février 2027, en cinq langues : amazighe, arabe, français, anglais et hassania.',
    langues: ['amazighe', 'arabe', 'français', 'anglais', 'hassania']
  },
  {
    id: 'sport',
    date: 'Année 2026–2027',
    name: 'UIZ.Sport',
    badge: 'Compétitions',
    desc: 'Des compétitions inter-établissements.',
    langues: ['Tous campus']
  },
  {
    id: 'art',
    date: '1ʳᵉ édition',
    edition: '1ʳᵉ édition',
    name: 'UIZ.Art',
    badge: 'Création artistique',
    desc: 'Création artistique performative autour d\'une thématique : « L\'eau, partenaire créatif ».',
    langues: ['Arts & Scène']
  },
  {
    id: 'journees-amazighes',
    date: '12–16 janv. 2027',
    name: 'UIZ.Journées Amazighes',
    badge: 'Culture & Patrimoine',
    desc: 'Conférences, expositions, artisanat du Souss, soirée Ahwach, Rwais et contes.',
    langues: ['Souss-Massa']
  },
  {
    id: 'yennayer',
    date: '16 janv. 2027',
    name: 'UIZ.Yennayer',
    badge: 'Nouvel An amazigh',
    desc: 'Le temps fort du Nouvel An amazigh, Yennayer, en clôture des Journées amazighes.',
    langues: ['Fête & Tradition']
  },
  {
    id: 'semaine-etudiant',
    date: '15–19 mars 2027',
    name: 'UIZ.Semaine de l\'Étudiant',
    badge: 'Talents & Scène',
    desc: 'Une semaine pour détecter et valoriser les talents artistiques du campus.',
    langues: ['Talents Campus']
  },
  {
    id: 'entrepreneuriat',
    date: 'Mai 2027',
    name: 'UIZ.Forum entrepreneuriat étudiant',
    badge: 'Innovation & Projets',
    desc: 'Présentation de projets étudiants innovants. Technologies, innovation et compétences d\'avenir au service de la communauté UIZ.',
    langues: ['Innovation UIZ']
  },
  {
    id: 'caps-pods',
    date: 'Année 2026–2027',
    name: 'UIZ.CAPS & PODS',
    badge: 'Média & Voix',
    desc: 'La parole étudiante, mise en voix et en ondes : former des créateurs de contenu éducatif, culturel et de sensibilisation.',
    langues: ['Podcasts & Vidéo']
  },
  {
    id: 'creation',
    date: 'Juin 2027',
    name: 'UIZ.Création',
    badge: 'Clôture universitaire',
    desc: 'L\'événement de clôture de l\'année universitaire.',
    langues: ['Gala Annuel']
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'Où trouver mon emploi du temps ?',
    answer: 'Votre emploi du temps est publié sur le site officiel fegt.uiz.ac.ma et sur la plateforme MyUIZ. Il est mis à jour chaque début de semestre et affiché sur les panneaux numériques du campus.',
    category: 'Organisation',
    page: 8
  },
  {
    question: 'Comment obtenir un certificat de scolarité ?',
    answer: 'La demande s’effectue en ligne via votre compte e-Scolarité MyUIZ (rubrique E-Services). Le document numérique certifié est téléchargeable ou disponible au guichet sous 24h ouvrées.',
    category: 'Démarches',
    page: 9
  },
  {
    question: 'Comment rejoindre un club étudiant ?',
    answer: 'Chaque club organise une campagne d’adhésion lors de la rentrée universitaire et de la Semaine de l’étudiant. Vous pouvez également vous renseigner à l’Espace d’Accueil de la Faculté.',
    category: 'Vie associative',
    page: 12
  },
  {
    question: 'Comment proposer une activité ou un projet ?',
    answer: 'Le parcours suit 7 étapes simples : Idée ➔ Proposition ➔ Validation par l’administration ➔ Organisation ➔ Communication ➔ Activité ➔ Bilan. Un formulaire est disponible au bureau de la vie étudiante.',
    category: 'Initiatives',
    page: 13
  },
  {
    question: 'Comment participer à la Semaine de l’étudiant ?',
    answer: 'Un appel à candidatures est lancé chaque semestre pour les sélections locales (orateurs, artistes, sportifs, porteurs de projets). Les lauréats représentent la FEGT à l’échelle de l’Université Ibn Zohr.',
    category: 'Événements',
    page: 14
  },
  {
    question: 'Comment participer aux événements et compétitions UIZ ?',
    answer: 'Les inscriptions se font auprès des responsables de clubs concernés ou du responsable de la vie étudiante de la Faculté selon le calendrier des manifestations de l’Université.',
    category: 'Événements',
    page: 15
  },
  {
    question: 'Où trouver les informations sur les bourses Minhati ?',
    answer: 'Les annonces de versement et de réclamations de bourses sont publiées sur minhati.ma et relayées sur le tableau d’affichage de la FEGT et notre compte officiel.',
    category: 'Bourses',
    page: 8
  },
  {
    question: 'Comment accéder à mon compte e-mail institutionnel ?',
    answer: 'Votre identifiant (@uiz.ac.ma) vous est attribué lors de la finalisation de votre inscription administrative. Il vous donne accès à Google Suite, Wi-Fi campus et ressources bibliographiques.',
    category: 'Numérique',
    page: 8
  },
  {
    question: 'À qui m’adresser pour une orientation ou un conseil ?',
    answer: 'Rendez-vous à l’Espace d’Accueil, d’Information et d’Accompagnement de la Faculté où des étudiants tuteurs et des conseillers administratifs vous reçoivent quotidiennement.',
    category: 'Accompagnement',
    page: 7
  },
  {
    question: 'Quels services sont prévus pour les étudiants à besoins spécifiques ?',
    answer: 'La FEGT propose un accueil personnalisé, des aménagements d’épreuves d’examens, un accompagnement pédagogique sur mesure, des cheminements accessibles et des contenus numériques sous-titrés.',
    category: 'Inclusion',
    page: 11
  }
];

// 11-PAGE OFFICIAL LATEST EDITION (Mise à jour officielle 12.10 - Guide N - 12.10.pdf)
export const TABLE_OF_CONTENTS_11 = [
  { page: 1, title: 'Couverture officielle', subtitle: 'La vie étudiante commence ici', kicker: 'GUIDE OFFICIEL 2026–2027 · ÉDITION 12.10' },
  { page: 2, title: 'Mot de bienvenue', subtitle: 'Votre guide. Votre Faculté. Votre année.', kicker: 'MOT DE BIENVENUE' },
  { page: 3, title: 'Taroudant & Ma Faculté', subtitle: 'AXE 01 : Découvrir Taroudant + AXE 02 : Ma Faculté FEGT', kicker: 'AXES 01 & 02 DISTINCTS' },
  { page: 4, title: 'Mes formations', subtitle: 'AXE 03 : Licences GEMD, MGE, ENDEB & Master MCI', kicker: 'AXE 03' },
  { page: 5, title: 'Premiers pas & Espace d’accueil', subtitle: 'AXE 04 : Mes premiers pas + AXE 05 : Espace d’accueil & écoute', kicker: 'AXES 04 & 05 DISTINCTS' },
  { page: 6, title: 'Services numériques', subtitle: 'AXE 06 : Vos dix outils numériques du quotidien', kicker: 'AXE 06' },
  { page: 7, title: 'Démarches & Réussite', subtitle: 'AXE 07 : Mes démarches + AXE 08 : Accompagnement & IA responsable', kicker: 'AXES 07 & 08 DISTINCTS' },
  { page: 8, title: 'Besoins spécifiques', subtitle: 'AXE 09 : Une Faculté accessible, solidaire et inclusive', kicker: 'AXE 09' },
  { page: 9, title: 'Clubs & Projets', subtitle: 'AXE 10 : Les clubs étudiants + AXE 11 : Proposer une activité', kicker: 'AXES 10 & 11 DISTINCTS' },
  { page: 10, title: 'Événements, Culture & Employabilité', subtitle: 'AXES 12 à 15 : Semaine étudiant, Événements UIZ, Culture & Stages', kicker: 'AXES 12, 13, 14 & 15' },
  { page: 11, title: 'International, Droits, FAQ & Contacts', subtitle: 'AXES 16 à 20 : Mobilité, Newsletter, Charte, FAQ & Contacts officiels', kicker: 'AXES 16 À 20 · CLÔTURE' }
];

// 14-PAGE OFFICIAL GROUPED TABLE OF CONTENTS (Exact PDF regroupe)
export const TABLE_OF_CONTENTS_14 = [
  { page: 1, title: 'Couverture officielle', subtitle: 'La vie étudiante commence ici', kicker: 'GUIDE OFFICIEL 2026–2027' },
  { page: 2, title: 'Mot de bienvenue', subtitle: 'Votre guide. Votre Faculté. Votre année.', kicker: 'MOT DE BIENVENUE' },
  { page: 3, title: 'Taroudant & Ma Faculté', subtitle: 'AXE 01 : Découvrir Taroudant + AXE 02 : Ma Faculté FEGT', kicker: 'AXES 01 & 02 DISTINCTS' },
  { page: 4, title: 'Mes formations', subtitle: 'AXE 03 : Licences GEMD, MGE, ENDEB & Master MCI', kicker: 'AXE 03' },
  { page: 5, title: 'Premiers pas & Espace d’accueil', subtitle: 'AXE 04 : Mes premiers pas + AXE 05 : Espace d’accueil & écoute', kicker: 'AXES 04 & 05 DISTINCTS' },
  { page: 6, title: 'Services numériques', subtitle: 'AXE 06 : Vos dix outils numériques du quotidien', kicker: 'AXE 06' },
  { page: 7, title: 'Démarches & Réussite', subtitle: 'AXE 07 : Mes démarches + AXE 08 : Accompagnement & IA responsable', kicker: 'AXES 07 & 08 DISTINCTS' },
  { page: 8, title: 'Besoins spécifiques', subtitle: 'AXE 09 : Une Faculté accessible, solidaire et inclusive', kicker: 'AXE 09' },
  { page: 9, title: 'Clubs & Projets', subtitle: 'AXE 10 : Les clubs étudiants + AXE 11 : Proposer une activité', kicker: 'AXES 10 & 11 DISTINCTS' },
  { page: 10, title: 'Semaine étudiant & Événements UIZ', subtitle: 'AXE 12 : La Semaine de l’étudiant + AXE 13 : Événements UIZ', kicker: 'AXES 12 & 13 DISTINCTS' },
  { page: 11, title: 'Culture, Sport & Employabilité', subtitle: 'AXE 14 : Culture & Sport + AXE 15 : Stages & Entrepreneuriat', kicker: 'AXES 14 & 15 DISTINCTS' },
  { page: 12, title: 'Mobilité & Newsletter', subtitle: 'AXE 16 : Mobilité internationale + AXE 17 : Newsletter semestrielle', kicker: 'AXES 16 & 17 DISTINCTS' },
  { page: 13, title: 'Droits, Devoirs & FAQ', subtitle: 'AXE 18 : Droits & devoirs + AXE 19 : Foire aux questions', kicker: 'AXES 18 & 19 DISTINCTS' },
  { page: 14, title: 'Contacts & Liens utiles', subtitle: 'AXE 20 : Coordonnées, Code QR & Message de clôture', kicker: 'AXE 20' }
];

// 22-PAGE DEVELOPED TABLE OF CONTENTS (1 page per axis)
export const TABLE_OF_CONTENTS_22 = [
  { page: 1, title: 'Couverture', subtitle: 'La vie étudiante commence ici', kicker: 'GUIDE OFFICIEL 2026–2027' },
  { page: 2, title: 'Mot de bienvenue', subtitle: 'Votre guide. Votre Faculté. Votre année.', kicker: 'MOT DE BIENVENUE' },
  { page: 3, title: 'Découvrir Taroudant', subtitle: 'Une ville d’histoire et d’avenir', kicker: '01 · DÉCOUVRIR TAROUDANT' },
  { page: 4, title: 'Ma Faculté (FEGT)', subtitle: 'Missions, recherche et formation', kicker: '02 · MA FACULTÉ' },
  { page: 5, title: 'Découvrir ma formation', subtitle: 'Licences GEMD, MGE, ENDEB & Master MCI', kicker: '03 · MES FORMATIONS' },
  { page: 6, title: 'Mes premiers pas', subtitle: 'Le premier mois, étape par étape', kicker: '04 · MES PREMIERS PAS' },
  { page: 7, title: 'Espace d’accueil & Écoute', subtitle: 'Un espace animé avec les étudiants', kicker: '05 · ESPACE D’ACCUEIL' },
  { page: 8, title: 'Mes services numériques', subtitle: 'Vos 10 outils du quotidien', kicker: '06 · SERVICES NUMÉRIQUES' },
  { page: 9, title: 'Mes démarches administratives', subtitle: 'Certificats, relevés, cartes et réclamations', kicker: '07 · MES DÉMARCHES' },
  { page: 10, title: 'Accompagnement & Réussite', subtitle: 'Tutorat, Soft Skills et IA responsable', kicker: '08 · ACCOMPAGNEMENT' },
  { page: 11, title: 'Étudiants à besoins spécifiques', subtitle: 'Une Faculté accessible et inclusive', kicker: '09 · BESOINS SPÉCIFIQUES' },
  { page: 12, title: 'Les clubs étudiants', subtitle: 'La vie associative, un terrain d’action', kicker: '10 · LES CLUBS' },
  { page: 13, title: 'Proposer une activité', subtitle: 'Le parcours de projet : de l’idée au bilan', kicker: '11 · PROPOSER UN PROJET' },
  { page: 14, title: 'La Semaine de l’étudiant', subtitle: 'Révélez vos talents sur le campus', kicker: '12 · SEMAINE DE L’ÉTUDIANT' },
  { page: 15, title: 'Les grands événements UIZ', subtitle: 'Éloquence, Olympiades, Id Yennayer, Création', kicker: '13 · ÉVÉNEMENTS UIZ' },
  { page: 16, title: 'Culture, Sport & Créativité', subtitle: 'Vivre pleinement son expérience universitaire', kicker: '14 · CULTURE & SPORT' },
  { page: 17, title: 'Stages & Employabilité', subtitle: 'Préparer son avenir professionnel', kicker: '15 · EMPLOYABILITÉ' },
  { page: 18, title: 'Mobilité internationale', subtitle: 'Erasmus+ et opportunités d’échanges', kicker: '16 · MOBILITÉ INTERNATIONALE' },
  { page: 19, title: 'Newsletter semestrielle', subtitle: 'Les moments forts et la mémoire du campus', kicker: '17 · NEWSLETTER' },
  { page: 20, title: 'Droits et devoirs', subtitle: 'Les règles pour avancer ensemble', kicker: '18 · DROITS & DEVOIRS' },
  { page: 21, title: 'Foire aux questions (FAQ)', subtitle: 'Réponses à toutes vos questions', kicker: '19 · FAQ' },
  { page: 22, title: 'Contacts et liens utiles', subtitle: 'Gardez ce guide à portée de main', kicker: '20 · CONTACTS & LIENS' }
];

export const TABLE_OF_CONTENTS = TABLE_OF_CONTENTS_11;
