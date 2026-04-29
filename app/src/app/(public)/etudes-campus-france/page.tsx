import { Metadata } from "next";
import { CheckCircle, AlertTriangle, GraduationCap, BookOpen, Users, Award } from "lucide-react";
import { CAMPUS_FRANCE_STEPS, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Études à l'étranger — Accompagnement Campus France Mali",
  description:
    "Accompagnement complet pour vos études en France depuis le Mali : orientation, dossier Campus France, choix d'universités, coaching entretien, visa étudiant. Agence basée à Bamako.",
};

export default function EtudesCampusFrancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-light text-sm font-semibold rounded-full border border-white/10">
              Service Prioritaire
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Études à l&apos;étranger
            <br />
            <span className="text-primary-light">Campus France</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-10">
            Vous êtes étudiant post-bac et souhaitez poursuivre vos études en
            licence ou master en France ? Nous vous accompagnons de A à Z.
          </p>

          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.studies)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-whatsapp hover:bg-green-600 text-white font-bold rounded-full shadow-2xl shadow-green-500/30 transition-all text-lg hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
            Commencer mon projet d&apos;études
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 40C1248 36.7 1344 33.3 1392 31.7L1440 30V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Who is it for */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
                À qui s&apos;adresse ce <span className="text-gradient">service</span> ?
              </h2>
              <p className="text-secondary-medium text-lg leading-relaxed mb-8">
                Notre accompagnement Campus France est conçu pour les étudiants
                post-bac qui souhaitent poursuivre leurs études en licence ou en
                master dans une université française.
              </p>

              <div className="space-y-4">
                {[
                  { icon: GraduationCap, text: "Étudiants titulaires du baccalauréat" },
                  { icon: BookOpen, text: "Candidats en licence ou master" },
                  { icon: Users, text: "Étudiants cherchant un accompagnement structuré" },
                  { icon: Award, text: "Profils motivés et sérieux dans leur démarche" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl">
                    <item.icon className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-secondary font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl mb-4 block">🇫🇷</span>
                <h3 className="font-heading text-2xl font-bold text-secondary mb-2">
                  Campus France
                </h3>
                <p className="text-secondary-medium">
                  Spécialité France depuis Bamako, Mali
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
              Notre parcours <span className="text-gradient">d&apos;accompagnement</span>
            </h2>
            <p className="text-secondary-medium text-lg">
              Un processus structuré en 5 étapes pour maximiser vos chances.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {CAMPUS_FRANCE_STEPS.map((step) => (
              <div
                key={step.step}
                className="flex gap-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center font-heading font-bold text-xl shadow-lg shadow-primary/30 flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-secondary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-secondary-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
              Ce que comprend notre <span className="text-gradient">accompagnement</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Évaluation de votre profil académique",
              "Orientation vers les filières adaptées",
              "Aide à la constitution du dossier Campus France",
              "Sélection stratégique des universités",
              "Préparation intensive à l'entretien",
              "Simulations d'entretien personnalisées",
              "Conseils sur la lettre de motivation",
              "Accompagnement pour la demande de visa étudiant",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-secondary font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à commencer votre aventure en France ?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Contactez-nous sur WhatsApp pour un premier échange gratuit. Nous
            évaluerons votre profil et définirons ensemble votre plan d&apos;action.
          </p>
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.studies)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary font-bold rounded-full shadow-2xl transition-all text-lg hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
            Commencer mon projet
          </a>
        </div>
      </section>
    </>
  );
}
