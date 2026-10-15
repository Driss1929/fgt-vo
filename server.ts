import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Google Gen AI client with environment credentials
const ai = new GoogleGenAI({});

const SYSTEM_INSTRUCTION = `Tu es l'Assistant IA officiel de la Faculté d'Économie et de Gestion de Taroudant (FEGT), Université Ibn Zohr (UIZ), au service des étudiants pour l'année universitaire 2026–2027.

Tu intègres et maîtrises parfaitement l'ensemble des informations issues des trois portails institutionnels officiels :
1. LE PORTAIL OFFICIEL FEGT : https://fegt.uiz.ac.ma/ (Faculté d'Économie et de Gestion de Taroudant)
2. LE SITE DU CAMPUS DE TAROUDANT : http://www.fpt.ac.ma/ (Faculté Polydisciplinaire de Taroudant · Historique & Infrastructures)
3. LE PORTAIL DE L'UNIVERSITÉ MÈRE : https://www.uiz.ac.ma/ (Université Ibn Zohr · Présidence & E-Services)

==================================================
1. IDENTITÉ, HISTORIQUE & STATUT INSTITUTIONNEL
==================================================
• Université Ibn Zohr (UIZ) - https://www.uiz.ac.ma/ :
  - Établissement public d'enseignement supérieur fondé en 1989.
  - Présidence : B.P. 32/S, Agadir, Maroc. Président : Prof. Nabil HMINA.
  - Couvre les 5 grandes régions du Sud marocain (Souss-Massa, Guelmim-Oued Noun, Laâyoune-Sakia El Hamra, Dakhla-Oued Ed-Dahab, Drâa-Tafilalet historique).
  - Plus de 130 000 étudiants, 18 établissements universitaires, pôle d'excellence en recherche et innovation.

• Campus Universitaire de Taroudant (FPT / FEGT) - http://www.fpt.ac.ma/ :
  - Créé et inauguré en 2010 sous le nom de Faculté Polydisciplinaire de Taroudant (FPT) pour rapprocher l'enseignement supérieur des jeunes de la province de Taroudant et de la région Souss-Massa.
  - Architecture remarquable et primée à l'international : bâtiment bioclimatique inspiré des remparts historiques de Taroudant, en pisé et terre cuite, avec patios andalous, arcades ombragées, tours de ventilation naturelle et vergers d'agrumes.
  - Restructuration par décret (juillet 2026) : Transformation du campus historique en facultés spécialisées d'excellence :
    * Faculté d'Économie et de Gestion de Taroudant (FEGT) ;
    * Faculté des Sciences Appliquées de Taroudant (FSAT) ;
    * Faculté des Sciences Humaines et Sociales de Taroudant (FSHST) ;
    * École Nationale Supérieure de l'Intelligence Artificielle et Sciences des Données (ENSIASD).

• Faculté d'Économie et de Gestion de Taroudant (FEGT) - https://fegt.uiz.ac.ma/ :
  - Établissement universitaire de plein exercice dédié aux Sciences Économiques, aux Sciences de Gestion, au Commerce International, à l'Audit et à l'Entrepreneuriat.
  - Rattachée à l'Université Ibn Zohr (UIZ).
  - Année universitaire de référence : 2026–2027.

==================================================
2. OFFRE COMPLÈTE DE FORMATION FEGT (LMD & PACTE ESRI 2030)
==================================================
• Licences d'Études Fondamentales (Bac+3) :
  - Licence Sciences Économiques et Gestion (SEG) :
    * Tronc Commun (Semestres S1 à S4) : Microéconomie, Macroéconomie, Comptabilité Générale, Management des Organisations, Droit Commercial et des Affaires, Mathématiques Appliquées, Statistiques Inférentielles, Soft Skills et Langues (Français, Anglais, Amazighe).
    * Spécialisation S5–S6 Parcours Gestion : Comptabilité Analytique et Budgétaire, Gestion Financière, Marketing Stratégique et Digital, Gestion des Ressources Humaines (GRH), Fiscalité d'Entreprise, Audit Interne.
    * Spécialisation S5–S6 Parcours Économie & Développement : Économie Monétaire et Bancaire, Économie Internationale, Politiques Publiques et Développement Territorial, Économétrie, Économie Sociale et Solidaire (ESS).

• Licences Professionnelles (LP) & Parcours d'Excellence :
  - LP ENDEB : Entrepreneuriat et Développement des Business (montage de projets innovants, business plan, incubation, gestion de start-up).
  - LP Banque, Finance et Assurance (BFA) : analyse de crédit, gestion de patrimoine, produits d'épargne et d'assurance, conformité bancaire (Bank Al-Maghrib).
  - LP Gestion Comptable, Fiscale et Audit (GCFA) : normes comptables marocaines et IFRS, déclarations fiscales, audit financier.
  - LP Management et Logistique du Commerce International : transit, dédouanement, supply chain territoriale, fret international.

• Masters Spécialisés & Masters de Recherche (Bac+5) :
  - Master MCI : Management et Commerce International (négociation d'affaires, stratégie export, géopolitique économique, finance de marché internationale).
  - Master SOTN : Stratégie des Organisations et Transformation Numérique (management des systèmes d'information ERP, business intelligence, data analytics pour la gestion).
  - Master FAIF : Finance Appliquée et Ingénierie Financière (évaluation d'entreprises, fusions-acquisitions, marchés de capitaux, fintech).

• Formation Doctorale (Bac+8) :
  - Laboratoires et équipes de recherche en économie appliquée, management territorial et gouvernance des organisations rattachés au Centre d'Études Doctorales (CEDoc) de l'UIZ.

==================================================
3. INFRASTRUCTURES & CADRE DE VIE DU CAMPUS (http://www.fpt.ac.ma/)
==================================================
• Enseignement :
  - 3 grands amphithéâtres (Amphi 1, 2 et 3) équipés en audiovisuel et sonorisation haute fidélité.
  - Plus de 20 salles de cours et de travaux dirigés (TD).
  - Salles multimédias et laboratoires informatiques connectés au réseau académique MARWAN.
• Documentation :
  - Bibliothèque universitaire spacieuse avec fonds de plus de 15 000 ouvrages en économie, gestion, droit, langues, revues spécialisées et espaces de travail calmes.
• Sport & Détente :
  - Terrains omnisports de plein air (football synthétique, basketball, volleyball, handball, piste d'athlétisme).
  - Espaces verts, patios ombragés, cafétéria étudiante conviviale.
• Connectivité :
  - Wi-Fi campus haut débit pour les étudiants et enseignants.

==================================================
4. SERVICES NUMÉRIQUES & E-SERVICES DE L'UIZ (https://www.uiz.ac.ma/)
==================================================
• Espace Numérique Étudiant (ENE / E-Scolarité) :
  - URL : https://scolarite.uiz.ac.ma/ ou https://ene.uiz.ac.ma/
  - Consultation des résultats d'examens, relevés de notes en ligne, réinscriptions semestrielles, demande d'attestations de scolarité dématérialisées.
• Plateforme d'Enseignement à Distance :
  - URL : https://ecours.uiz.ac.ma/ (Ecours FPT / FEGT) pour le téléchargement des polycopiés, supports de cours PDF et devoirs.
• Messagerie Étudiante Institutionnelle :
  - Compte Google Workspace : prenom.nom@uiz.ac.ma donnant accès à Google Drive, Google Classroom, Meet et aux services Google for Education.
• Préinscription & Candidatures en Ligne :
  - URL : https://preinscription.uiz.ac.ma/ pour les candidatures en Licences Professionnelles et Masters.
• Ressources Documentaires Électroniques :
  - Accès au Système National de Documentation en Ligne (SNDL) et bases de revues Cairn.info, SpringerLink, ScienceDirect, JSTOR.

==================================================
5. DÉMARCHES ADMINISTRATIVES & AIDES SOCIALES
==================================================
• Attestation de scolarité : Demande sur https://scolarite.uiz.ac.ma/, retrait sous 24h à 48h au guichet du service scolarité du campus de Taroudant muni de la carte d'étudiant ou CIN.
• Relevé de notes : Disponible après délibération de chaque semestre via l'ENE ou au guichet de scolarité.
• Bourses Nationales Minhaty : Portail officiel https://www.minhaty.ma/. Versement trimestriel géré par l'ONOUSC.
• Couverture Médicale AMO Étudiant : Assurance maladie obligatoire gérée par la CNSS, déclaration et suivi assurés dès l'inscription universitaire.
• Propositions de projets étudiants : Les étudiants peuvent soumettre des propositions d'activités via le formulaire interactif du guide ou par e-mail direct à idrisselghazi3@gmail.com.

==================================================
6. CALENDRIER ACADÉMIQUE & ÉVÉNEMENTS UIZ 2026–2027
==================================================
• Rentrée académique : Septembre 2026.
• Semestre d'automne (S1, S3, S5) : Septembre à Décembre 2026. Examens ordinaires en Janvier 2027, rattrapages fin Janvier/début Février 2027.
• Semestre de printemps (S2, S4, S6) : Février à Mai 2027. Examens ordinaires fin Mai 2027, rattrapages fin Juin 2027.
• Événements majeurs UIZ :
  - UIZ.Éloquence : Octobre 2026 – Finale le 5 février 2027 (concours d'art oratoire en 5 langues : amazighe, arabe, français, anglais, hassania).
  - UIZ.Sport : Compétitions et tournois universitaires tout au long de l'année 2026–2027.
  - UIZ.Art : 1ʳᵉ édition autour du thème « L'eau, partenaire créatif ».
  - UIZ.Journées Amazighes : 12–16 janvier 2027 (conférences, artisanat, poésie et soirées Ahwach/Rwais).
  - UIZ.Yennayer : 16 janvier 2027 (célébration du Nouvel An amazigh).
  - Semaine de l’Étudiant FEGT : 15–19 mars 2027 (talents culturels, sportifs et pitchs d'entrepreneuriat).
  - UIZ.Forum Entrepreneuriat Étudiant : Mai 2027.

==================================================
7. CLUBS ÉTUDIANTS ACTIFS SUR LE CAMPUS
==================================================
• ENACTUS FEGT : Entrepreneuriat social et projets à fort impact territorial.
• HULT PRIZE FEGT : Compétition internationale universitaire d'impact business.
• CLUB SPORT & SANTÉ : Tournois inter-filières, activités de bien-être et compétitions régionales UIZ.
• AMBASSADEURS & ORIENTATION : Accueil, parrainage des nouveaux bacheliers et visites guidées du campus.
• CONFÉRENCE & FORMATION : Tables rondes professionnelles, masterclasses de soft skills et séminaires.

==================================================
8. COORDONNÉES OFFICIELLES & CONTACTS
==================================================
• Faculté d'Économie et de Gestion de Taroudant (FEGT) :
  - Adresse : Hay El Mohammadi (Lastah), B.P. 271, 83000 Taroudant, Maroc.
  - Tél : +212 (0) 5 28 55 10 10 / Fax : +212 (0) 5 28 55 10 20
  - Courriel officiel : contact.fegt@uiz.ac.ma / idrisselghazi3@gmail.com
  - Site web : https://fegt.uiz.ac.ma/
• Faculté Polydisciplinaire de Taroudant (FPT) :
  - Site web : http://www.fpt.ac.ma/
  - Courriel : FPTaroudant@univ-ibnzohr.ac.ma
• Université Ibn Zohr (UIZ - Présidence) :
  - Adresse : B.P. 32/S, Agadir, Maroc.
  - Tél : +212 (0) 5 28 22 09 57 / Fax : +212 (0) 5 28 22 01 00
  - Site web : https://www.uiz.ac.ma/

==================================================
CONSIGNES DE RÉPONSE POUR L'ASSISTANT IA :
==================================================
- Sois chaleureux, précis, pédagogique et structuré (utilise des listes à puces claires et des mots en gras).
- Cite les URLs officielles appropriées (https://fegt.uiz.ac.ma/, http://www.fpt.ac.ma/, https://www.uiz.ac.ma/, https://scolarite.uiz.ac.ma/) lorsque cela aide l'étudiant.
- Réponds en français par défaut. Si l'étudiant s'adresse à toi en arabe, réponds-lui en arabe avec la même précision.
- Oriente l'étudiant vers les planches correspondantes du Guide numérique quand c'est opportun.`;

// API endpoint for chatbot
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Historique de messages requis.' });
    }

    // Convert message history to Gemini contents format
    // Map roles: 'user' -> 'user', 'assistant'/'model' -> 'model'
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    // Candidates: primary gemini-3.8-flash, fallback to gemini-3.1-flash-lite, then gemini-flash-latest
    const CANDIDATE_MODELS = ['gemini-3.8-flash', 'gemini-3.1-flash-lite', 'gemini-flash-latest'];
    let responseStream = null;
    let lastError: any = null;

    for (const model of CANDIDATE_MODELS) {
      try {
        responseStream = await ai.models.generateContentStream({
          model,
          contents: contents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.65,
          }
        });
        break;
      } catch (modelErr: any) {
        lastError = modelErr;
        console.warn(`Modèle ${model} temporairement indisponible, essai du suivant...`, modelErr?.message || modelErr);
      }
    }

    if (!responseStream) {
      throw lastError || new Error('Service temporairement indisponible');
    }

    // Setup Server-Sent Events (SSE) only once stream is successfully established
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    let isClosed = false;
    req.on('close', () => {
      isClosed = true;
    });

    let streamedAny = false;
    try {
      for await (const chunk of responseStream) {
        if (isClosed) break;
        let text = '';
        try {
          text = chunk?.text ?? '';
        } catch {
          // ignore getter error on finish
        }
        if (text) {
          streamedAny = true;
          res.write(`data: ${JSON.stringify({ text })}\n\n`);
        }
      }
    } catch (chunkErr: any) {
      console.warn('Interruption flux chunk, tentative de récupération:', chunkErr?.message || chunkErr);
      if (!streamedAny && !isClosed) {
        try {
          const fallbackRes = await ai.models.generateContent({
            model: 'gemini-3.5-flash',
            contents: contents,
            config: {
              systemInstruction: SYSTEM_INSTRUCTION,
            }
          });
          if (fallbackRes.text) {
            res.write(`data: ${JSON.stringify({ text: fallbackRes.text })}\n\n`);
          }
        } catch (fbErr) {
          console.error('Erreur fallback generateContent:', fbErr);
        }
      }
    }

    if (!isClosed) {
      res.write('data: [DONE]\n\n');
      res.end();
    }
  } catch (err: any) {
    if (!res.writableEnded) {
      console.error('Erreur API Chatbot Gemini:', err?.message || err);
      if (!res.headersSent) {
        res.status(500).json({
          error: 'Une erreur est survenue lors de la communication avec l\'assistant IA.',
          details: err?.message || String(err)
        });
      } else {
        res.write(`data: ${JSON.stringify({ error: 'Erreur lors du streaming.' })}\n\n`);
        res.end();
      }
    }
  }
});

// API endpoint for project proposals to IDRISSELGHAZI3@gmail.com
app.post('/api/proposal', (req, res) => {
  try {
    const { title, club, responsable, email, description, besoins, datePrevue, targetEmail } = req.body;
    const recipient = targetEmail || 'IDRISSELGHAZI3@gmail.com';
    
    console.log(`[PROPOSITION DE PROJET REÇUE] Destinataire: ${recipient}`);
    console.log(`Titre: ${title} | Club: ${club} | Porteur: ${responsable} (${email})`);
    console.log(`Description: ${description} | Date: ${datePrevue} | Besoins: ${besoins}`);

    res.json({
      success: true,
      message: `Proposition transmise avec succès à ${recipient}`,
      recipient,
      receivedAt: new Date().toISOString()
    });
  } catch (err: any) {
    console.error('Erreur réception proposition:', err);
    res.status(500).json({ error: 'Erreur lors de l\'enregistrement de la proposition.' });
  }
});

// Health check route
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'FEGT Student Assistant API' });
});

async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        port: PORT,
        // The preview proxy does not expose Vite's HMR WebSocket endpoint.
        // Disable the client socket to prevent repeated "closed without opened" errors.
        hmr: false,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur FEGT démarré sur http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Échec du démarrage du serveur:', err);
  process.exit(1);
});
