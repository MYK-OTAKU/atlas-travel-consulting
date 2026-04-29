"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES_DATA, getWhatsAppUrl } from "@/lib/constants";

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-white" id="nos-services">
      <div className="container-custom">
        {/* Section Header - H2 is the section name, not description */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Ce que nous proposons
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Nos <span className="text-gradient">Services</span>
          </h2>
          <p className="text-secondary-medium text-lg leading-relaxed">
            De l&apos;orientation universitaire à la billetterie aérienne, en passant
            par l&apos;accompagnement visa, nous sommes à vos côtés.
          </p>
        </div>

        {/* Primary Service Cards - with images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {SERVICES_DATA.slice(0, 3).map((service, index) => (
            <Link
              key={service.id}
              href={`/${service.slug}`}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />

                {/* Priority Badge for first item */}
                {index === 0 && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
                    Prioritaire
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-secondary mb-1 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {service.subtitle}
                </p>
                <p className="text-secondary-medium text-sm leading-relaxed mb-5 line-clamp-3">
                  {service.shortDescription}
                </p>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(getWhatsAppUrl(service.whatsappMessage), "_blank");
                    }}
                    className="w-10 h-10 rounded-full bg-whatsapp/10 hover:bg-whatsapp hover:text-white text-whatsapp flex items-center justify-center transition-all flex-shrink-0"
                    aria-label={`Contacter pour ${service.title}`}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Secondary Services - also with images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SERVICES_DATA.slice(3).map((service) => (
            <div
              key={service.id}
              className="group flex items-center gap-5 p-4 bg-background-alt rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all"
            >
              {/* Small Image */}
              <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-bold text-secondary group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary-medium text-sm mt-1 line-clamp-2">
                  {service.shortDescription}
                </p>
              </div>
              <a
                href={getWhatsAppUrl(service.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-10 h-10 rounded-full bg-whatsapp/10 hover:bg-whatsapp hover:text-white text-whatsapp flex items-center justify-center transition-all"
                aria-label={`Contacter pour ${service.title}`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
