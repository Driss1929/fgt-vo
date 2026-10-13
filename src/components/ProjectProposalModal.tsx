import React, { useState } from 'react';
import { X, CheckCircle, FileText, Send, Sparkles, Mail, Copy, Check, ExternalLink } from 'lucide-react';

interface ProjectProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectProposalModal: React.FC<ProjectProposalModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    club: 'ENACTUS',
    responsable: '',
    cne: '',
    email: '',
    description: '',
    objectifs: '',
    datePrevue: '',
    besoins: ''
  });

  if (!isOpen) return null;

  const TARGET_EMAIL = 'idrisselghazi3@gmail.com';
  const [copied, setCopied] = useState(false);

  const getEmailContent = (data: typeof formData) => {
    const subject = `[FEGT 2026-2027] Proposition d'activité : ${data.title || 'Initiative étudiante'}`;
    const body = 
`Bonjour Monsieur El Ghazi,

Une nouvelle proposition d'activité ou de projet étudiant a été rédigée pour la Faculté d'Économie et de Gestion de Taroudant (FEGT) :

==================================================
FICHE DE PROPOSITION D'ACTIVITÉ ÉTUDIANTE (2026–2027)
==================================================
• Intitulé du projet : ${data.title}
• Club / Pôle porteur : ${data.club}
• Porteur du projet : ${data.responsable}
• E-mail du porteur : ${data.email}
• Date prévisionnelle : ${data.datePrevue || 'À définir'}
• Besoins logistiques : ${data.besoins || 'Non spécifiés'}

DESCRIPTION ET OBJECTIFS DU PROJET :
${data.description}

==================================================
Transmis via le Guide Numérique de la Vie de l'Étudiant 2026–2027
Faculté d'Économie et de Gestion de Taroudant · Université Ibn Zohr
Destinataire officiel : ${TARGET_EMAIL}`;

    return { subject, body };
  };

  const openGmailWeb = (data: typeof formData) => {
    const { subject, body } = getEmailContent(data);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(TARGET_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  const triggerMailto = (data: typeof formData) => {
    const { subject, body } = getEmailContent(data);
    const mailtoUrl = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const copyToClipboard = (data: typeof formData) => {
    const { body } = getEmailContent(data);
    navigator.clipboard.writeText(body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // 1. Try forwarding through Formspree direct forwarder to ensure email delivery
      await fetch('https://formspree.io/f/xvgzweon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _to: TARGET_EMAIL,
          _subject: `[FEGT] Proposition de projet : ${formData.title}`,
          ...formData,
          submittedAt: new Date().toISOString()
        })
      }).catch(() => null);

      // 2. Also register in local server
      await fetch('/api/proposal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          targetEmail: TARGET_EMAIL,
          submittedAt: new Date().toISOString()
        })
      }).catch(() => null);
    } catch (err) {
      console.warn('Notice transmission:', err);
    } finally {
      setIsSending(false);
      setSubmitted(true);
      
      // Also automatically trigger mail compose window for immediate send
      setTimeout(() => {
        openGmailWeb(formData);
      }, 400);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#03594E] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F8C62F]">
            <Sparkles className="w-4 h-4" />
            <span>Vie Associative · Espace Initiatives Étudiantes</span>
          </div>
          
          <h2 className="text-2xl font-serif font-bold mt-1 tracking-tight">
            Proposer une activité ou un projet
          </h2>
          <p className="text-xs font-sans text-stone-200 mt-1">
            Parcours officiel FEGT : IDÉE ➔ PROPOSITION ➔ VALIDATION ➔ ORGANISATION ➔ COMMUNICATION ➔ ACTIVITÉ ➔ BILAN
          </p>
          <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 border border-white/20 text-[11px] font-mono text-emerald-100">
            <span>Boîte de réception :</span>
            <strong className="text-[#F8C62F] font-semibold">{TARGET_EMAIL}</strong>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-[#1F2432]">
          {submitted ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#03594E] mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#03594E]">
                Fiche prête pour {TARGET_EMAIL} !
              </h3>
              <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
                Votre proposition pour <strong className="text-stone-900">« {formData.title || 'Projet étudiant'} »</strong> a été enregistrée. Choisissez l'option ci-dessous pour confirmer l'envoi immédiat dans votre boîte de réception :
              </p>
              
              <div className="p-3.5 bg-[#F0F4F5] rounded-xl text-xs text-stone-700 max-w-md mx-auto font-mono text-left space-y-1.5 border border-stone-200">
                <div className="flex items-center justify-between border-b border-stone-200 pb-1.5">
                  <span className="font-bold text-[#03594E]">DESTINATAIRE :</span>
                  <span className="font-semibold text-emerald-800 bg-white px-2 py-0.5 rounded border border-emerald-200">{TARGET_EMAIL}</span>
                </div>
                <div>• Porteur : {formData.responsable} ({formData.email})</div>
                <div>• Pôle : {formData.club}</div>
                <div>• Date : {formData.datePrevue || 'À définir'}</div>
              </div>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-md mx-auto pt-1">
                {/* 1. Gmail Web */}
                <button
                  type="button"
                  onClick={() => openGmailWeb(formData)}
                  className="px-4 py-3 bg-[#EA4335] hover:bg-[#d33828] text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 group"
                >
                  <Mail className="w-4 h-4" />
                  <span>Envoyer via Gmail Web</span>
                  <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                </button>

                {/* 2. Client Mail par défaut */}
                <button
                  type="button"
                  onClick={() => triggerMailto(formData)}
                  className="px-4 py-3 bg-[#03594E] hover:bg-[#024138] text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#F8C62F]" />
                  <span>Client Mail (Outlook/Apple)</span>
                </button>

                {/* 3. Copier le texte complet */}
                <button
                  type="button"
                  onClick={() => copyToClipboard(formData)}
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-xl border border-stone-300 transition-colors flex items-center justify-center gap-1.5 sm:col-span-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Texte de l'e-mail copié dans le presse-papier !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-stone-600" />
                      <span>Copier le texte complet du mail</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2 text-xs font-medium text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-xl transition-colors"
                >
                  Fermer et retourner au guide
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                  Intitulé du projet ou de l’activité *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Ex : Forum de l’Entrepreneuriat Vert à Taroudant"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#03594E]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                    Club porteur *
                  </label>
                  <select
                    value={formData.club}
                    onChange={(e) => setFormData({ ...formData, club: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#03594E]"
                  >
                    <option value="ENACTUS">ENACTUS FEGT</option>
                    <option value="HULT PRIZE">HULT PRIZE</option>
                    <option value="CLUB SPORT">CLUB SPORT</option>
                    <option value="AMBASSADEURS">AMBASSADEURS & ORIENTATION</option>
                    <option value="CONFERENCE">CONFÉRENCE & FORMATION</option>
                    <option value="AUTRE">Nouveau Club / Initiative Libre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                    Date prévisionnelle
                  </label>
                  <input
                    type="date"
                    value={formData.datePrevue}
                    onChange={(e) => setFormData({ ...formData, datePrevue: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#03594E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                    Nom & Prénom du porteur *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Votre nom complet"
                    value={formData.responsable}
                    onChange={(e) => setFormData({ ...formData, responsable: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#03594E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                    E-mail institutionnel (@uiz.ac.ma) *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="etudiant@uiz.ac.ma"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#03594E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                  Description succincte & Objectifs *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Décrivez l'impact attendu, le public cible (étudiants, lycéens, communauté) et le déroulement..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#03594E]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                  Besoins logistiques (Amphi, Sono, Vidéoprojecteur, etc.)
                </label>
                <input
                  type="text"
                  placeholder="Ex : Amphithéâtre A + micro HF"
                  value={formData.besoins}
                  onChange={(e) => setFormData({ ...formData, besoins: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#03594E]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-stone-200">
                <span className="text-[11px] text-stone-500 flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-[#FE8235]" />
                  Validation sous 48h ouvrées
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-medium text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-xl"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={isSending}
                    className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#03594E] hover:bg-[#024138] disabled:opacity-50 rounded-xl flex items-center gap-1.5 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {isSending ? 'Transmission en cours...' : 'Soumettre à IDRISSELGHAZI3@gmail.com'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
