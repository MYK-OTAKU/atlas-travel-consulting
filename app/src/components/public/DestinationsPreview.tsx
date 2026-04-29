import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { DESTINATIONS_DATA, getFlagUrl } from "@/lib/constants";

export default function DestinationsPreview() {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Destinations
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Nos{" "}
            <span className="text-gradient">Destinations</span>
          </h2>
          <p className="text-secondary-medium text-lg leading-relaxed">
            Que ce soit pour les études, le tourisme, les affaires ou le
            pèlerinage, nous vous accompagnons vers ces destinations.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {DESTINATIONS_DATA.map((destination, index) => (
            <Link
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              className={`group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-2 text-center ${
                index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <img
                src={getFlagUrl(destination.countryCode, 80)}
                alt={destination.name}
                width={64}
                height={44}
                className="mx-auto mb-4 rounded shadow-sm group-hover:scale-110 transition-transform"
              />
              <h3 className="font-heading font-bold text-secondary text-lg mb-2 group-hover:text-primary transition-colors">
                {destination.name}
              </h3>
              <p className="text-secondary-medium text-xs leading-relaxed line-clamp-2">
                {destination.description}
              </p>
              <div className="mt-4 flex items-center justify-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <MapPin className="w-4 h-4" />
                Découvrir
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-secondary hover:bg-secondary-medium text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Toutes nos destinations
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
