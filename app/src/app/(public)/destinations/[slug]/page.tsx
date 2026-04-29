import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, CheckCircle, MapPin } from "lucide-react";
import Link from "next/link";
import { DESTINATIONS_DATA, getFlagUrl, getWhatsAppUrl } from "@/lib/constants";
import ContactCTA from "@/components/public/ContactCTA";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = DESTINATIONS_DATA.find((d) => d.slug === slug);

  if (!destination) {
    return { title: "Destination introuvable" };
  }

  return {
    title: `Voyage vers ${destination.name} — ATLAS TRAVEL & CONSULTING`,
    description: destination.description,
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = DESTINATIONS_DATA.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={destination.image}
            alt={`Atlas Travel - ${destination.name}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/30" />
        </div>
        
        <div className="container-custom relative z-10">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux destinations
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <img
              src={getFlagUrl(destination.countryCode, 80)}
              alt={destination.name}
              width={64}
              height={44}
              className="rounded shadow-lg"
            />
            <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-sm font-semibold rounded-full border border-white/20 backdrop-blur-md">
              Destination
            </span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
            <span className="text-primary-light">Découvrir</span> {destination.name}
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            {destination.description}
          </p>
          
          <a
            href={getWhatsAppUrl(`Bonjour, je souhaite organiser mon voyage vers ${destination.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-whatsapp hover:bg-green-600 text-white font-bold rounded-full shadow-2xl shadow-green-500/30 transition-all text-lg hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
            Planifier ce voyage
          </a>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-secondary mb-6">
              Pourquoi choisir {destination.name} ?
            </h2>
            <p className="text-secondary-medium text-lg leading-relaxed mb-10">
              Atlas Travel & Consulting vous accompagne de A à Z pour votre projet vers {destination.name}. Que ce soit pour y étudier dans des universités reconnues, pour développer vos affaires, ou simplement pour découvrir de nouveaux horizons, nous facilitons toutes vos démarches administratives et logistiques.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Conseils et orientation personnalisés",
                "Aide à la constitution de votre dossier",
                "Réservation de billets au meilleur tarif",
                "Assistance pour l'obtention du visa",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-background-alt p-6 rounded-2xl border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-secondary-medium font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
