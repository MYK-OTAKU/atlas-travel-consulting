import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { CAMPUS_FRANCE_STEPS, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

export default function CampusFranceSpotlight() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Service Prioritaire
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-5 leading-tight">
              Campus France
              <br />
              <span className="text-gradient">Études en France</span>
            </h2>
            <p className="text-secondary-medium leading-relaxed mb-6">
              De l&apos;orientation jusqu&apos;au visa étudiant, nous accompagnons
              les étudiants post-bac vers la France.
            </p>

            {/* Key Points - compact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {[
                "Orientation personnalisée",
                "Dossier Campus France",
                "Choix des universités",
                "Coaching entretien",
                "Demande de visa",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-secondary-medium text-sm">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.studies)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-whatsapp hover:bg-green-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all text-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
                Commencer mon projet
              </a>
              <Link
                href="/etudes-campus-france"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-primary hover:text-primary-dark font-semibold transition-colors text-sm"
              >
                En savoir plus
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right - Image + Steps overlay */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/campus-france.png"
                alt="Étudiant Campus France"
                width={600}
                height={450}
                className="object-cover w-full h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />

              {/* France flag badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                <img
                  src="https://flagcdn.com/w20/fr.png"
                  alt="France"
                  width={20}
                  height={14}
                  className="rounded-sm"
                />
                <span className="text-secondary text-sm font-semibold">France</span>
              </div>
            </div>

            {/* Steps mini-cards overlaid at bottom */}
            <div className="absolute -bottom-6 left-4 right-4 flex gap-2">
              {CAMPUS_FRANCE_STEPS.slice(0, 5).map((step) => (
                <div
                  key={step.step}
                  className="flex-1 bg-white rounded-xl p-3 shadow-lg border border-gray-100 text-center"
                >
                  <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs mx-auto mb-1 shadow-sm">
                    {step.step}
                  </div>
                  <span className="text-secondary text-[10px] font-semibold leading-tight block">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
