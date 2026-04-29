import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Users, Globe, Heart } from "lucide-react";
import { SITE_CONFIG, VALUES_DATA, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "À propos — Qui sommes-nous ?",
  description: `${SITE_CONFIG.name} est une agence basée à Bamako, Mali, spécialisée dans l'accompagnement des projets de voyage, de visa et d'études à l'étranger. Transparence, sérieux et efficacité.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero_about.png" alt="À propos d'Atlas Travel" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/30" />
        </div>
        <div className="container-custom relative z-10">
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-sm font-semibold rounded-full mb-4 border border-white/20 backdrop-blur-md">
            À propos
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Votre partenaire de confiance
            <br />
            <span className="text-primary-light">à Bamako</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Découvrez l&apos;équipe et la vision derrière {SITE_CONFIG.name}.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 40C1248 36.7 1344 33.3 1392 31.7L1440 30V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
                Qui sommes-nous ?
              </h2>
              <p className="text-secondary-medium text-lg leading-relaxed mb-6">
                {SITE_CONFIG.name} est une agence basée à Bamako, au Mali,
                spécialisée dans l&apos;accompagnement des projets de voyage, de
                visa et d&apos;études à l&apos;étranger.
              </p>
              <p className="text-secondary-medium leading-relaxed mb-6">
                Que vous souhaitiez vous envoler vers de nouveaux horizons,
                obtenir un visa en toute sérénité, ou réaliser votre rêve
                d&apos;étudier en France, notre équipe d&apos;experts est là
                pour vous accompagner à chaque étape.
              </p>
              <p className="text-secondary-medium leading-relaxed mb-8">
                Nous avons à cœur de simplifier vos démarches complexes et de
                vous offrir un service sur mesure, parfaitement adapté à vos
                besoins.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-primary/5 rounded-2xl">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-heading font-bold text-2xl text-secondary">3</p>
                  <p className="text-secondary-medium text-xs">Pôles d&apos;expertise</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-2xl">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-heading font-bold text-2xl text-secondary">7+</p>
                  <p className="text-secondary-medium text-xs">Destinations</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-2xl">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-heading font-bold text-2xl text-secondary">100%</p>
                  <p className="text-secondary-medium text-xs">Engagement</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 flex items-center justify-center">
                <Image
                  src="/logo.jpeg"
                  alt={SITE_CONFIG.name}
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
              Notre <span className="text-gradient">expertise</span>
            </h2>
            <p className="text-secondary-medium text-lg">
              Trois pôles d&apos;expertise pour répondre à tous vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Études à l'étranger",
                image: "/images/service-studies.png",
                description:
                  "De l'orientation vers la formation idéale à l'inscription, en passant par toutes les démarches administratives (Campus France, logement, visa étudiant), nous offrons un accompagnement complet et personnalisé aux futurs étudiants.",
              },
              {
                title: "Accompagnement Visa",
                image: "/images/service-visa.png",
                description:
                  "Les démarches consulaires peuvent être longues et fastidieuses. Nous vous guidons et préparons avec vous des dossiers solides et conformes. Notre rôle est d'accompagner, conseiller et simplifier.",
              },
              {
                title: "Billetterie & Voyages",
                image: "/images/service-tickets.png",
                description:
                  "Nous trouvons pour vous les meilleurs itinéraires et les tarifs les plus avantageux pour vos vols, quelle que soit votre destination. Assurance voyage et automobile incluses dans nos services.",
              },
            ].map((pole) => (
              <div
                key={pole.title}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image src={pole.image} alt={pole.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-secondary mb-3">
                    {pole.title}
                  </h3>
                  <p className="text-secondary-medium leading-relaxed text-sm">
                    {pole.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Notre Histoire */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
              Notre <span className="text-gradient">histoire</span>
            </h2>
            <p className="text-secondary-medium text-lg">
              De notre création à aujourd&apos;hui, une évolution constante pour mieux vous servir.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto py-10">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 rounded-full"></div>

            <div className="space-y-12">
              {[
                { year: "2018", title: "Création de l'agence", desc: "Lancement d'Atlas Travel à Bamako avec une petite équipe passionnée.", side: "left" },
                { year: "2020", title: "Développement Campus France", desc: "Création d'un pôle dédié à l'accompagnement des étudiants vers la France.", side: "right" },
                { year: "2022", title: "Nouveaux partenariats", desc: "Extension de nos services de billetterie avec les majeures compagnies aériennes.", side: "left" },
                { year: "Aujourd'hui", title: "Leader à Bamako", desc: "Plus de 500+ étudiants accompagnés et des milliers de voyageurs satisfaits.", side: "right" },
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center justify-between w-full ${item.side === "left" ? "flex-row-reverse" : ""}`}>
                  {/* Empty space for the other side */}
                  <div className="hidden md:block w-5/12"></div>
                  
                  {/* Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-primary shadow-lg z-10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-5/12">
                    <div className={`p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 ${item.side === "left" ? "md:text-right" : "text-left"}`}>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold rounded-full text-sm mb-3">
                        {item.year}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-secondary mb-2">{item.title}</h3>
                      <p className="text-secondary-medium text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
              Pourquoi nous{" "}
              <span className="text-gradient">faire confiance</span> ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES_DATA.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-secondary mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-medium leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Commencez votre projet dès aujourd&apos;hui
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Contactez-nous sur WhatsApp pour discuter de votre projet. Notre
            équipe vous répondra rapidement.
          </p>
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all text-lg hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
            Contactez-nous sur WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
