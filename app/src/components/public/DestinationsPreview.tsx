import Link from "next/link";
import Image from "next/image";
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
              className={`group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="absolute inset-0 z-0">
                <Image 
                  src={destination.image} 
                  alt={destination.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-secondary/20" />
              </div>
              
              <div className="relative z-10 p-6 flex flex-col h-full min-h-[240px] text-left">
                <div className="mb-auto">
                  <img
                    src={getFlagUrl(destination.countryCode, 40)}
                    alt={destination.name}
                    width={32}
                    height={22}
                    className="rounded-sm shadow-md"
                  />
                </div>
                
                <div className="mt-4">
                  <h3 className="font-heading font-bold text-white text-xl mb-2 group-hover:text-primary-light transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-white/80 text-xs leading-relaxed line-clamp-2">
                    {destination.description}
                  </p>
                </div>

                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
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
