import { Metadata } from "next";
import Image from "next/image";
import { Plane, Shield, Car, MapPin, CheckCircle } from "lucide-react";
import Link from "next/link";
import { DESTINATIONS_DATA, getFlagUrl, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Agence de Voyage — Billets & Assurances Bamako Mali",
  description:
    "Agence de voyage à Bamako : billets d'avion toutes destinations, assurance voyage et assurance automobile. Service rapide et fiable. Contactez-nous sur WhatsApp.",
};

export default function AgenceDeVoyagePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero_agence.png" alt="Agence de Voyage" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/30" />
        </div>
        <div className="container-custom relative z-10">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-light text-sm font-semibold rounded-full mb-4 border border-white/10">
            Agence de Voyage
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Billetterie & Assurances
            <br />
            <span className="text-primary-light">toutes destinations</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-10">
            Des billets d&apos;avion compétitifs pour le monde entier, assurance voyage
            et assurance automobile. Un service rapide et fiable à Bamako.
          </p>
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.tickets)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-whatsapp hover:bg-green-600 text-white font-bold rounded-full shadow-2xl shadow-green-500/30 transition-all text-lg hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
            Demander un devis
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 40C1248 36.7 1344 33.3 1392 31.7L1440 30V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
              Nos services <span className="text-gradient">voyage</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Plane,
                title: "Billetterie aérienne",
                subtitle: "Toutes destinations",
                features: [
                  "Billets au meilleur prix",
                  "Toutes compagnies aériennes",
                  "Vols directs et avec escales",
                  "Service rapide et fiable",
                  "Conseil sur les itinéraires",
                ],
                whatsapp: WHATSAPP_MESSAGES.tickets,
              },
              {
                icon: Shield,
                title: "Assurance Voyage",
                subtitle: "Voyagez sereinement",
                features: [
                  "Couverture médicale à l'étranger",
                  "Annulation et retard de vol",
                  "Perte de bagages",
                  "Rapatriement d'urgence",
                  "Formules adaptées",
                ],
                whatsapp: WHATSAPP_MESSAGES.insurance,
              },
              {
                icon: Car,
                title: "Assurance Automobile",
                subtitle: "Protection quotidienne",
                features: [
                  "Responsabilité civile",
                  "Tous risques",
                  "Dommages collision",
                  "Vol et incendie",
                  "Tarifs compétitifs",
                ],
                whatsapp: WHATSAPP_MESSAGES.general,
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-background-alt rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <service.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-heading text-2xl font-bold text-secondary mb-2">
                  {service.title}
                </h3>
                <p className="text-primary text-sm font-medium mb-6">
                  {service.subtitle}
                </p>
                <div className="space-y-3 mb-8">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-secondary-medium text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={getWhatsAppUrl(service.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-whatsapp hover:bg-green-600 text-white font-semibold rounded-full transition-all text-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                  Demander un devis
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
              Nos <span className="text-gradient">destinations</span>
            </h2>
            <p className="text-secondary-medium text-lg">
              Des billets d&apos;avion pour le monde entier, au départ de Bamako.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {DESTINATIONS_DATA.map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="group bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all hover:-translate-y-1"
              >
                <img
                  src={getFlagUrl(dest.countryCode, 40)}
                  alt={dest.name}
                  width={40}
                  height={28}
                  className="mx-auto mb-3 rounded shadow-sm group-hover:scale-110 transition-transform"
                />
                <h3 className="font-heading font-bold text-secondary group-hover:text-primary transition-colors">
                  {dest.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à voyager ?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Contactez-nous sur WhatsApp pour obtenir un devis rapide et compétitif
            pour votre billet d&apos;avion ou votre assurance.
          </p>
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.tickets)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary font-bold rounded-full shadow-2xl transition-all text-lg hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
            Obtenir un devis
          </a>
        </div>
      </section>
    </>
  );
}
