import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SERVICES_DATA, getWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nos Services — Études, Visa, Billets & Assurances",
  description:
    "Découvrez tous les services d'ATLAS TRAVEL & CONSULTING : accompagnement Campus France, assistance visa, billetterie internationale, assurance voyage et automobile.",
};



export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero_services.png" alt="Nos Services" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/30" />
        </div>
        <div className="container-custom relative z-10">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-light text-sm font-semibold rounded-full mb-4 border border-white/10">
            Nos Services
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Tous nos <span className="text-primary-light">services</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Un accompagnement complet pour vos projets de voyage, d&apos;études et de visa.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 40C1248 36.7 1344 33.3 1392 31.7L1440 30V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-8">
            {SERVICES_DATA.map((service, index) => {
              return (
                <div
                  key={service.id}
                  className={`flex flex-col lg:flex-row gap-10 items-center p-8 lg:p-10 rounded-3xl bg-background-alt border border-gray-100 shadow-sm hover:shadow-xl transition-all ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="w-full lg:w-5/12">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-7/12">
                    {index === 0 && (
                      <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-3">
                        Service Prioritaire
                      </span>
                    )}
                    <h2 className="font-heading text-2xl font-bold text-secondary mb-2">
                      {service.title}
                    </h2>
                    <p className="text-primary font-medium text-sm mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-secondary-medium leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={getWhatsAppUrl(service.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-whatsapp hover:bg-green-600 text-white font-semibold rounded-full transition-all text-sm"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                        </svg>
                        Nous contacter
                      </a>
                      <Link
                        href={`/${service.slug}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-primary font-semibold hover:text-primary-dark transition-colors"
                      >
                        En savoir plus <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
