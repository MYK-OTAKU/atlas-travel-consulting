"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    question: "Comment fonctionne l'accompagnement Campus France ?",
    answer:
      "Nous vous guidons à chaque étape : orientation, constitution du dossier Campus France, choix stratégique des universités, coaching pour l'entretien et suivi jusqu'à la demande de visa étudiant. Tout commence par un échange WhatsApp gratuit pour évaluer votre profil.",
  },
  {
    question: "Est-ce que vous garantissez l'obtention du visa ?",
    answer:
      "Non. Les visas sont accordés ou refusés uniquement par les consulats concernés. Notre rôle est de vous aider à constituer le meilleur dossier possible, en toute transparence. Nous ne faisons aucune fausse promesse et refusons toute démarche impliquant de faux documents.",
  },
  {
    question: "Quels types de visa accompagnez-vous ?",
    answer:
      "Nous accompagnons les visas touristiques, professionnels, étudiants et le regroupement familial, vers toutes les destinations (Europe, Dubaï, USA, Canada, Maroc, Chine, etc.).",
  },
  {
    question: "Comment obtenir un billet d'avion via Atlas Travel ?",
    answer:
      "Contactez-nous simplement sur WhatsApp avec votre destination et vos dates souhaitées. Nous vous proposons les meilleurs tarifs disponibles avec toutes les compagnies aériennes. Le service est rapide et fiable.",
  },
  {
    question: "Proposez-vous des assurances voyage ?",
    answer:
      "Oui, nous proposons des assurances voyage complètes (couverture médicale, annulation, perte de bagages, rapatriement) ainsi que des assurances automobile à des tarifs compétitifs.",
  },
  {
    question: "Où se trouve votre agence ?",
    answer:
      "Notre agence est située à Hamdallaye ACI 2000, près du Palais des Sports, à Bamako, Mali. Vous pouvez nous rendre visite du lundi au samedi de 08h00 à 18h00, ou nous contacter directement sur WhatsApp.",
  },
  {
    question: "Le premier contact est-il gratuit ?",
    answer:
      "Oui, le premier échange sur WhatsApp est entièrement gratuit et sans engagement. Nous analysons votre situation et vous orientons vers la meilleure solution avant tout engagement.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Questions <span className="text-gradient">fréquentes</span>
          </h2>
          <p className="text-secondary-medium text-lg leading-relaxed">
            Retrouvez les réponses aux questions les plus posées par nos clients.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {FAQ_DATA.map((item, index) => (
            <div
              key={index}
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index
                  ? "border-primary/20 shadow-lg shadow-primary/5 bg-primary/[0.02]"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full px-6 py-5 text-left"
              >
                <span
                  className={`font-heading font-semibold pr-4 transition-colors ${
                    openIndex === index ? "text-primary" : "text-secondary"
                  }`}
                >
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index
                      ? "rotate-180 text-primary"
                      : "text-gray-400"
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-60 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-6 text-secondary-medium leading-relaxed text-sm">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
