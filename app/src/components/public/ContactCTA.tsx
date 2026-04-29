import { MapPin, Phone, Clock } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Prêt à{" "}
              <span className="text-primary-light">concrétiser</span> votre
              projet ?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Que ce soit pour des études à l&apos;étranger, un accompagnement
              visa ou un billet d&apos;avion, notre équipe est là pour vous.
              Contactez-nous dès maintenant.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-whatsapp hover:bg-green-600 text-white font-bold rounded-full shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all text-lg hover:scale-105"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
                Écrivez-nous sur WhatsApp
              </a>
              <a
                href={`tel:${SITE_CONFIG.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 backdrop-blur-sm transition-all"
              >
                <Phone className="w-5 h-5" />
                Appelez-nous
              </a>
            </div>
          </div>

          {/* Right - Contact Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <h3 className="font-heading text-xl font-bold text-white mb-6">
              📍 Venez nous rendre visite
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-light" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Adresse</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {SITE_CONFIG.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-light" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Téléphone</p>
                  <div className="space-y-1">
                    {SITE_CONFIG.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="block text-gray-300 text-sm hover:text-primary-light transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-light" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Horaires</p>
                  <p className="text-gray-300 text-sm">
                    Lundi - Samedi : 08h00 - 18h00
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    Dimanche : Fermé
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
