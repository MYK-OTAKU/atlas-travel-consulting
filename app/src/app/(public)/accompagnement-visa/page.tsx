import { Metadata } from "next";
import { CheckCircle, AlertTriangle, ShieldAlert, FileWarning, Palmtree, Briefcase, Users } from "lucide-react";
import { VISA_STEPS, VISA_DISCLAIMER, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Accompagnement Visa — Assistance Visa Bamako Mali",
  description:
    "Accompagnement visa touristique, professionnel et regroupement familial au Mali. Service transparent et sérieux : aide à la préparation du dossier, prise de rendez-vous. Basé à Bamako.",
};

export default function AccompagnementVisaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-light text-sm font-semibold rounded-full mb-4 border border-white/10">
            Accompagnement Visa
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Accompagnement Visa
            <br />
            <span className="text-primary-light">sérieux et transparent</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-10">
            Nous vous guidons dans la compréhension et la préparation de vos
            démarches visa avec honnêteté et professionnalisme.
          </p>

          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.visa)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-whatsapp hover:bg-green-600 text-white font-bold rounded-full shadow-2xl shadow-green-500/30 transition-all text-lg hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
            Être accompagné pour mon visa
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 40C1248 36.7 1344 33.3 1392 31.7L1440 30V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Visa Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
              Types de visas <span className="text-gradient">accompagnés</span>
            </h2>
            <p className="text-secondary-medium text-lg">
              Nous accompagnons les clients pour différents types de visas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Visa Touristique",
                icon: Palmtree,
                description:
                  "Accompagnement pour les visas de séjour touristique vers toutes destinations.",
              },
              {
                title: "Visa Professionnel",
                icon: Briefcase,
                description:
                  "Aide à la préparation des dossiers pour visas d'affaires et professionnels.",
              },
              {
                title: "Regroupement Familial",
                icon: Users,
                description:
                  "Orientation et accompagnement pour les démarches de regroupement familial.",
              },
            ].map((visa) => (
              <div
                key={visa.title}
                className="bg-background-alt rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <visa.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-secondary mb-3">
                  {visa.title}
                </h3>
                <p className="text-secondary-medium text-sm leading-relaxed">
                  {visa.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
              Notre <span className="text-gradient">processus</span>
            </h2>
            <p className="text-secondary-medium text-lg">
              Un accompagnement étape par étape, clair et structuré.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {VISA_STEPS.map((step) => (
              <div
                key={step.step}
                className="flex gap-5 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-heading font-bold text-lg shadow-lg shadow-primary/30 flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-secondary text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-secondary-medium text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-3xl font-bold text-secondary mb-6">
                Ce que nous <span className="text-gradient">faisons</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Accompagnement personnalisé pour comprendre les démarches",
                  "Conseils sur les documents à préparer",
                  "Aide à la constitution d'un dossier solide",
                  "Transmission de la liste des pièces selon la destination",
                  "Assistance à la prise de rendez-vous consulaire",
                  "Orientation et suivi tout au long du processus",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer - CRITICAL BUSINESS RULE */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <ShieldAlert className="w-8 h-8 text-amber-600" />
                <h2 className="font-heading text-2xl font-bold text-amber-800">
                  {VISA_DISCLAIMER.title}
                </h2>
              </div>

              <div className="space-y-4">
                {VISA_DISCLAIMER.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-amber-800 font-medium text-sm">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-amber-100 rounded-xl">
                <p className="text-amber-800 text-sm leading-relaxed">
                  <strong>Important :</strong> Les visas sont accordés ou
                  refusés uniquement par les consulats concernés. Notre rôle est
                  de vous aider à préparer le meilleur dossier possible, en
                  toute honnêteté et transparence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Besoin d&apos;aide pour votre visa ?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Écrivez-nous sur WhatsApp pour un premier échange. Nous analyserons
            votre situation et vous guiderons sur les démarches à suivre.
          </p>
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.visa)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary font-bold rounded-full shadow-2xl transition-all text-lg hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
            Être accompagné
          </a>
        </div>
      </section>
    </>
  );
}
