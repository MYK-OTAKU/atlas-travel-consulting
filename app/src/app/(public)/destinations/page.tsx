import { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { DESTINATIONS_DATA, getFlagUrl, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Destinations — Europe, Dubaï, USA, Canada, Maroc & plus",
  description:
    "Découvrez toutes les destinations proposées par ATLAS TRAVEL & CONSULTING : Europe, Dubaï, Chine, Maroc, USA, Canada, Mecque. Billets, visa et études.",
};

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container-custom relative z-10">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-light text-sm font-semibold rounded-full mb-4 border border-white/10">
            Destinations
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nos <span className="text-primary-light">destinations</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Études, tourisme, affaires ou pèlerinage — nous vous accompagnons vers ces destinations.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 40C1248 36.7 1344 33.3 1392 31.7L1440 30V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS_DATA.map((dest) => (
              <div
                key={dest.slug}
                className="group bg-background-alt rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={getFlagUrl(dest.countryCode, 80)}
                  alt={dest.name}
                  width={72}
                  height={50}
                  className="mb-6 rounded shadow-sm group-hover:scale-110 transition-transform"
                />
                <h2 className="font-heading text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {dest.name}
                </h2>
                <p className="text-secondary-medium leading-relaxed mb-6">
                  {dest.description}
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={getWhatsAppUrl(
                      `Bonjour, je souhaite des informations pour un voyage vers ${dest.name}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-whatsapp hover:bg-green-600 text-white font-semibold rounded-full transition-all text-sm"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                    </svg>
                    S&apos;informer
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
