import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  Minimize2,
  Maximize2,
  ExternalLink,
  HelpCircle,
  GraduationCap,
  BookOpen,
  Users,
  Compass,
  CheckCircle2
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface GeminiChatbotProps {
  onNavigateToPage?: (page: number) => void;
  isOpenExternal?: boolean;
  onToggleExternal?: (open: boolean) => void;
}

const SUGGESTED_QUESTIONS = [
  {
    icon: GraduationCap,
    label: 'Filières & Licences FEGT',
    pillar: 'S’informer',
    prompt: 'Quelles sont les formations et filières de licence proposées à la FEGT Taroudant (fegt.uiz.ac.ma) en 2026-2027 ?',
    pageTarget: 4
  },
  {
    icon: ExternalLink,
    label: 'Portails & E-Services UIZ',
    pillar: 'E-Services',
    prompt: 'Quels sont les services en ligne et portails officiels de l\'Université Ibn Zohr (uiz.ac.ma, scolarite.uiz.ac.ma, ecours) ?',
    pageTarget: 8
  },
  {
    icon: Compass,
    label: 'Campus & Amphis Taroudant',
    pillar: 'Campus FPT',
    prompt: 'Quels sont les équipements et infrastructures du campus de Taroudant (fpt.ac.ma) : amphis, bibliothèque, sport ?',
    pageTarget: 3
  },
  {
    icon: BookOpen,
    label: 'Démarches, Bourses & AMO',
    pillar: 'Réussir',
    prompt: 'Comment demander une attestation de scolarité, un relevé de notes, la bourse Minhaty et la couverture AMO ?',
    pageTarget: 9
  },
  {
    icon: Users,
    label: 'Clubs & Projets Étudiants',
    pillar: 'Participer',
    prompt: 'Quels sont les clubs étudiants actifs (ENACTUS, HULT) et comment soumettre une proposition de projet étudiant ?',
    pageTarget: 12
  }
];

const getOfflineKnowledgeResponse = (query: string): string => {
  const q = query.toLowerCase();

  if (q.includes('uiz') || q.includes('ibn zohr') || q.includes('agadir') || q.includes('scolarite') || q.includes('ene') || q.includes('ecours') || q.includes('service')) {
    return `**Portail Officiel Université Ibn Zohr (UIZ) · https://www.uiz.ac.ma/** 🏛️

* **Présidence de l'UIZ :** Située à Agadir (B.P. 32/S), présidée par le Prof. Nabil HMINA. L'UIZ regroupe 18 établissements universitaires et plus de 130 000 étudiants couvrant tout le Sud marocain.
* **E-Services Étudiants majeurs :**
  • **Espace Numérique Étudiant (ENE / E-Scolarité) :** [scolarite.uiz.ac.ma](https://scolarite.uiz.ac.ma/) pour consultation des notes, réinscriptions et demandes d'attestations de scolarité.
  • **Plateforme Ecours :** [ecours.uiz.ac.ma](https://ecours.uiz.ac.ma/) (Ecours FPT / FEGT) pour le téléchargement des polycopiés et supports numériques.
  • **Compte Google Workspace :** adresse officielle \`prenom.nom@uiz.ac.ma\` avec Drive illimité, Classroom et Meet.
  • **Candidatures Licences Pro & Masters :** [preinscription.uiz.ac.ma](https://preinscription.uiz.ac.ma/).
* **Temps Forts & Concours UIZ 2026–2027 :**
  • **UIZ.Éloquence :** Grand concours d'art oratoire en 5 langues (amazighe, arabe, français, anglais, hassania).
  • **UIZ.Sport :** Championnats et tournois universitaires inter-facultés.
  • **UIZ.Journées Amazighes & Yennayer :** 12–16 janvier 2027.
  • **Semaine de l’Étudiant :** 15–19 mars 2027.`;
  }

  if (q.includes('fpt') || q.includes('campus') || q.includes('amphi') || q.includes('infrastructure') || q.includes('équipement') || q.includes('lastah')) {
    return `**Campus Universitaire de Taroudant (ex-FPT) · http://www.fpt.ac.ma/** 🏫

* **Historique :** Inauguré en 2010 pour créer un pôle universitaire d'excellence dans la province de Taroudant.
* **Architecture bioclimatique récompensée :** Bâtiment en pisé et terre crue avec arcades, patios andalous ombragés, tours de ventilation naturelle et vergers d'agrumes.
* **Infrastructures du campus :**
  • **3 grands amphithéâtres (Amphi 1, 2, 3)** équipés en projection et sonorisation.
  • **Plus de 20 salles d'enseignement et de travaux dirigés (TD).**
  • **Salles multimédias et laboratoires informatiques** reliés au réseau académique MARWAN.
  • **Bibliothèque Universitaire :** fonds de plus de 15 000 ouvrages en économie, gestion, droit et sciences, avec espaces de lecture silencieux.
  • **Terrains omnisports de plein air :** football synthétique, basketball, volleyball, handball, piste d'athlétisme.
  • **Cafétéria étudiante et espaces de détente ombragés.**
* **Localisation & Contact :** Hay El Mohammadi (Lastah), B.P. 271, 83000 Taroudant. Tél : 05 28 55 10 10.`;
  }

  if (q.includes('fegt') || q.includes('filière') || q.includes('licence') || q.includes('formation') || q.includes('master') || q.includes('endeb') || q.includes('mci') || q.includes('sotn') || q.includes('seg')) {
    return `**Offre de Formation FEGT 2026–2027 · https://fegt.uiz.ac.ma/** 🎓

* **Licence Fondamentale (Bac+3) :**
  • **Sciences Économiques et Gestion (SEG) :** Tronc commun national S1–S4 puis choix de parcours S5–S6 en **Sciences de Gestion** ou **Économie & Développement**.
* **Licences Professionnelles (LP) :**
  • **LP ENDEB :** Entrepreneuriat et Développement des Business (montage de start-up, business plan, incubation).
  • **LP Banque, Finance et Assurance (BFA)**.
  • **LP Gestion Comptable, Fiscale et Audit (GCFA)**.
  • **LP Management et Logistique du Commerce International**.
* **Masters Spécialisés & Recherche (Bac+5) :**
  • **Master MCI :** Management et Commerce International.
  • **Master SOTN :** Stratégie des Organisations et Transformation Numérique.
  • **Master FAIF :** Finance Appliquée et Ingénierie Financière.
* **Doctorat :** Rattaché au Centre d'Études Doctorales (CEDoc) de l'UIZ.
* **Contact FEGT :** Campus de Taroudant · contact.fegt@uiz.ac.ma · idrisselghazi3@gmail.com.`;
  }

  if (q.includes('bourse') || q.includes('minhaty') || q.includes('attestation') || q.includes('relevé') || q.includes('amo') || q.includes('démarche')) {
    return `**Démarches Administratives & Vie Pratique de l'Étudiant** 📋

* **Attestation de scolarité :** Demande préalable sur [scolarite.uiz.ac.ma](https://scolarite.uiz.ac.ma/), puis retrait sous 24h à 48h au guichet du service scolarité du campus de Taroudant muni de votre CIN ou carte d'étudiant.
* **Relevé de notes :** Disponible après délibérations via l'Espace Numérique Étudiant (ENE).
* **Bourse d'études Minhaty :** Portail national [www.minhaty.ma](https://www.minhaty.ma/) (versements trimestriels ONOUSC).
* **Couverture Médicale AMO Étudiant :** Assurance maladie obligatoire gérée par la CNSS, déclaration assurée lors de l'inscription administrative.
* **Projets & Initiatives :** Formulaire de proposition de projet accessible dans le guide numérique, transmis directement à **idrisselghazi3@gmail.com**.`;
  }

  return `**Informations Clés FEGT · UIZ · Campus Taroudant (2026–2027)** 📚

* 🌐 **Portail FEGT :** [fegt.uiz.ac.ma](https://fegt.uiz.ac.ma/) (Formations Licences & Masters)
* 🏛️ **Portail UIZ :** [www.uiz.ac.ma](https://www.uiz.ac.ma/) & [scolarite.uiz.ac.ma](https://scolarite.uiz.ac.ma/) (E-Scolarité)
* 🏫 **Campus Taroudant :** [www.fpt.ac.ma](http://www.fpt.ac.ma/) (Infrastructures, amphis, bibliothèque)
* 📍 **Adresse :** Hay El Mohammadi (Lastah), B.P. 271, 83000 Taroudant · Tél : 05 28 55 10 10
* ✉️ **Contact Projets & Scolarité :** idrisselghazi3@gmail.com`;
};

export const GeminiChatbot: React.FC<GeminiChatbotProps> = ({
  onNavigateToPage,
  isOpenExternal,
  onToggleExternal
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = isOpenExternal !== undefined ? isOpenExternal : internalOpen;
  const setIsOpen = (open: boolean) => {
    if (onToggleExternal) onToggleExternal(open);
    else setInternalOpen(open);
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `**Bienvenue sur l'Assistant Officiel FEGT · UIZ 2026–2027 !** 🎓

Je suis directement alimenté par les informations officielles des 3 portails institutionnels de référence :
* 🌐 **FEGT** : [fegt.uiz.ac.ma](https://fegt.uiz.ac.ma/) (Formations en économie, gestion, licences & masters)
* 🏛️ **UIZ** : [www.uiz.ac.ma](https://www.uiz.ac.ma/) (Université Ibn Zohr, e-scolarité, présidence, concours)
* 🏫 **Campus Taroudant** : [www.fpt.ac.ma](http://www.fpt.ac.ma/) (Infrastructures, amphis, bibliothèque & vie de campus)

Posez-moi n'importe quelle question sur vos cours, vos démarches ou la vie universitaire à Taroudant !`,
      timestamp: 'Maintenant'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (userText: string) => {
    if (!userText.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: userText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    const assistantMessageId = `assistant-${Date.now()}`;
    const initialAssistantMessage: ChatMessage = {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, initialAssistantMessage]);

    try {
      // Build conversation history for API
      const conversationHistory = [...messages, userMessage].map((m) => ({
        role: m.role === 'user' ? 'user' : 'model',
        content: m.content
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: conversationHistory })
      });

      if (!res.ok) {
        let msg = `Erreur (${res.status})`;
        try {
          const errorData = await res.json();
          if (errorData?.error) msg = errorData.error;
        } catch {
          // ignore
        }
        throw new Error(msg);
      }

      if (!res.body) {
        throw new Error('Aucun flux de données disponible');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let accumulatedText = '';
      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith('data: ')) {
            const dataStr = trimmed.slice(6);
            if (dataStr === '[DONE]') break;
            try {
              const parsed = JSON.parse(dataStr);
              if (parsed.text) {
                accumulatedText += parsed.text;
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantMessageId
                      ? { ...m, content: accumulatedText }
                      : m
                  )
                );
              }
            } catch (e) {
              // Ignore non-json chunk lines
            }
          }
        }
      }

      // If stream finished but text was empty, use offline knowledge base
      if (!accumulatedText) {
        const fallbackText = getOfflineKnowledgeResponse(userText);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMessageId
              ? { ...m, content: fallbackText }
              : m
          )
        );
      }
    } catch (err: any) {
      console.warn('Notice chatbot fallback:', err?.message || err);
      const fallbackText = getOfflineKnowledgeResponse(userText);
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantMessageId
            ? {
                ...m,
                content: fallbackText
              }
            : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'assistant',
        content: `Conversation réinitialisée. En quoi puis-je vous renseigner sur la FEGT, l'UIZ ou le campus de Taroudant (Édition 2026–2027) ?`,
        timestamp: 'Maintenant'
      }
    ]);
  };

  // Helper to format simple markdown elements (bold, bullet points, linebreaks)
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    return (
      <div className="space-y-1.5 text-sm leading-relaxed">
        {lines.map((line, idx) => {
          if (!line.trim()) return <div key={idx} className="h-2" />;

          // Highlight planche mentions (ex: Planche 04 or page 4)
          const parts = line.split(/(\*\*.*?\*\*)/g);

          return (
            <p key={idx} className="text-stone-800">
              {parts.map((part, pIdx) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return (
                    <strong key={pIdx} className="font-bold text-[#03594E]">
                      {part.slice(2, -2)}
                    </strong>
                  );
                }
                return part;
              })}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {/* Floating Trigger Button on bottom-right (hidden on print) */}
      <div className="fixed bottom-5 right-5 z-40 print:hidden flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2.5 bg-gradient-to-r from-[#03594E] to-[#024138] hover:from-[#024138] hover:to-[#012d26] text-white px-4 py-3 rounded-full shadow-2xl border border-[#F8C62F]/40 hover:border-[#F8C62F] transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#03594E]/30"
          title="Ouvrir l'Assistant IA FEGT"
          aria-label="Assistant IA Étudiant FEGT"
        >
          <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
            <Bot className="w-4 h-4 text-[#F8C62F]" />
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FE8235] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FE8235]"></span>
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold font-sans tracking-wide leading-none">
              Assistant IA FEGT
            </span>
            <span className="text-[10px] text-amber-200/90 font-mono tracking-tight leading-tight mt-0.5">
              Guide 2026–2027
            </span>
          </div>
          <Sparkles className="w-3.5 h-3.5 text-[#F8C62F] ml-1 opacity-80 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      {/* Main Chat Drawer / Window */}
      {isOpen && (
        <div
          className={`fixed z-50 print:hidden transition-all duration-300 flex flex-col bg-white border border-[#03594E]/20 shadow-2xl overflow-hidden ${
            isExpanded
              ? 'inset-3 sm:inset-10 rounded-2xl'
              : 'bottom-20 right-4 sm:right-6 w-[94vw] sm:w-[440px] max-w-[460px] h-[580px] max-h-[85vh] rounded-2xl'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Assistant IA Étudiant FEGT"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#03594E] via-[#024a40] to-[#01352e] text-white p-3.5 sm:p-4 flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-[#F8C62F]/40 flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-[#F8C62F]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif font-bold text-sm sm:text-base tracking-wide text-white">
                    Assistant Étudiant FEGT
                  </h3>
                  <span className="text-[9px] font-mono bg-[#F8C62F]/20 text-[#F8C62F] px-1.5 py-0.5 rounded border border-[#F8C62F]/30 uppercase font-bold">
                    IA Officielle
                  </span>
                </div>
                <p className="text-[11px] text-emerald-100/90 flex items-center gap-1.5 mt-0.5 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Édition 2026–2027 · S’informer · S’orienter · Participer · Réussir
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Recommencer la discussion"
                className="p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                title={isExpanded ? 'Réduire la taille' : 'Agrandir la fenêtre'}
                className="p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-white/10 transition-colors hidden sm:inline-flex"
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Fermer"
                className="p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Suggestion Pills */}
          <div className="bg-stone-50 border-b border-stone-200 px-3 py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
            <span className="text-[11px] font-bold text-stone-500 whitespace-nowrap pl-1 pr-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#FE8235]" /> Questions :
            </span>
            {SUGGESTED_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q.prompt)}
                className="text-[11px] whitespace-nowrap px-2.5 py-1 rounded-full bg-white hover:bg-emerald-50 text-[#03594E] hover:text-[#024138] border border-stone-200 hover:border-[#03594E]/40 font-medium transition-all shadow-2xs flex items-center gap-1 shrink-0"
              >
                <q.icon className="w-3 h-3 text-[#FE8235]" />
                <span>{q.label}</span>
              </button>
            ))}
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-4 bg-stone-100/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-[#03594E] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Bot className="w-4 h-4 text-[#F8C62F]" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3 shadow-xs ${
                    msg.role === 'user'
                      ? 'bg-[#03594E] text-white rounded-br-xs'
                      : 'bg-white text-stone-800 border border-stone-200/80 rounded-bl-xs'
                  }`}
                >
                  {msg.role === 'user' ? (
                    <p className="text-sm font-sans whitespace-pre-wrap leading-relaxed">
                      {msg.content}
                    </p>
                  ) : (
                    <div>
                      {msg.content ? (
                        renderFormattedContent(msg.content)
                      ) : (
                        <div className="flex items-center gap-1.5 py-1 text-xs text-stone-500 font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#03594E] animate-bounce"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#03594E] animate-bounce [animation-delay:0.2s]"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#03594E] animate-bounce [animation-delay:0.4s]"></span>
                          <span className="ml-1 text-stone-500">L'assistant prépare sa réponse...</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div
                    className={`text-[9px] mt-1 text-right font-mono ${
                      msg.role === 'user' ? 'text-emerald-100/70' : 'text-stone-400'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>

                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-[#FE8235] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Page Jump Shortcuts Bar */}
          <div className="bg-stone-50/90 border-t border-stone-200 px-3 py-1.5 flex items-center justify-between text-[11px] text-stone-600 shrink-0">
            <span className="font-mono text-[10px] text-stone-500">
              Navigation directe dans le guide :
            </span>
            <div className="flex items-center gap-1">
              {[
                { p: 1, label: 'Couverture' },
                { p: 4, label: 'Formations' },
                { p: 14, label: 'Démarches' },
                { p: 17, label: 'Clubs' }
              ].map((item) => (
                <button
                  key={item.p}
                  onClick={() => {
                    if (onNavigateToPage) onNavigateToPage(item.p);
                  }}
                  className="px-1.5 py-0.5 rounded bg-white hover:bg-stone-200 border border-stone-200 text-[#03594E] font-medium text-[10px] transition-colors"
                >
                  P.{item.p < 10 ? `0${item.p}` : item.p}
                </button>
              ))}
            </div>
          </div>

          {/* Message Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputMessage);
            }}
            className="p-3 bg-white border-t border-stone-200 flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Posez votre question sur la FEGT (ex: filières, bourses, stages)..."
              disabled={isLoading}
              className="flex-1 text-sm bg-stone-100 border border-stone-300 rounded-xl px-3.5 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#03594E] focus:bg-white transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className="p-2.5 rounded-xl bg-[#03594E] text-white hover:bg-[#024138] disabled:opacity-40 disabled:hover:bg-[#03594E] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#03594E]/40"
              title="Envoyer la question"
              aria-label="Envoyer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
