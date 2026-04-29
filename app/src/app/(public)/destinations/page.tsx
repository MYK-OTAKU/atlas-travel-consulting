import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
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
          <div className="absolute inset-0 z-0">
            <Image src="/images/hero_destinations.png" alt="Destinations Atlas Travel" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          </div>
          <div className="container-custom relative z-10">
            <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-sm font-semibold rounded-full mb-4 border border-white/20 backdrop-blur-md">
              Destinations
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nos <span className="text-primary-light">destinations</span>
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl leading-relaxed">
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
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={dest.image} 
                    alt={dest.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/60 to-secondary/20" />
                </div>
                
                <div className="relative z-10 p-8 flex flex-col h-full min-h-[320px] text-left">
                  <div className="mb-auto">
                    <img
                      src={getFlagUrl(dest.countryCode, 80)}
                      alt={dest.name}
                      width={48}
                      height={34}
                      className="rounded shadow-md"
                    />
                  </div>
                  
                  <div className="mt-6">
                    <h2 className="font-heading font-bold text-white text-3xl mb-3 group-hover:text-primary-light transition-colors">
                      {dest.name}
                    </h2>
                    <p className="text-white/80 text-sm leading-relaxed mb-6 line-clamp-3">
                      {dest.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-primary-light text-sm font-semibold flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Explorer
                    </span>
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
