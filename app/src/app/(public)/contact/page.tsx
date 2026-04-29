import { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Nous contacter à Bamako",
  description:
    "Contactez ATLAS TRAVEL & CONSULTING à Bamako, Mali. WhatsApp, téléphone, email ou visitez-nous à Hamdallaye ACI 2000, près du Palais des Sports.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero_contact.png" alt="Contactez-nous" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/30" />
        </div>
        <div className="container-custom relative z-10">
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-sm font-semibold rounded-full mb-4 border border-white/20 backdrop-blur-md">
            📞 Contact
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contactez<span className="text-primary-light">-nous</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Notre équipe est disponible pour répondre à toutes vos questions.
            Le moyen le plus rapide est WhatsApp.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 40C1248 36.7 1344 33.3 1392 31.7L1440 30V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Contact Methods */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-secondary mb-8">
                Comment nous <span className="text-gradient">joindre</span>
              </h2>

              {/* WhatsApp - Primary */}
              <div className="bg-whatsapp/5 border-2 border-whatsapp/20 rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-whatsapp text-white flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-secondary text-lg">
                      WhatsApp
                    </h3>
                    <p className="text-sm text-whatsapp font-medium">
                      ⚡ Moyen le plus rapide
                    </p>
                  </div>
                </div>
                <p className="text-secondary-medium text-sm mb-4">
                  Écrivez-nous directement sur WhatsApp pour obtenir une réponse rapide.
                </p>
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-whatsapp hover:bg-green-600 text-white font-semibold rounded-full transition-all"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                  Ouvrir WhatsApp
                </a>
              </div>

              {/* Other Methods */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 bg-background-alt rounded-xl">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-secondary mb-1">
                      Téléphone
                    </h3>
                    {SITE_CONFIG.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="block text-secondary-medium hover:text-primary transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-background-alt rounded-xl">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-secondary mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-secondary-medium hover:text-primary transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-background-alt rounded-xl">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-secondary mb-1">
                      Horaires d&apos;ouverture
                    </h3>
                    <p className="text-secondary-medium">Lundi - Samedi : 08h00 - 18h00</p>
                    <p className="text-secondary-medium text-sm">Dimanche : Fermé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Visit Card */}
            <div>
              <div className="bg-gradient-to-br from-secondary to-secondary-medium rounded-3xl p-8 text-white h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                    <MapPin className="w-8 h-8 text-primary-light" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">
                    Venez nous rendre visite
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    Notre bureau est situé en plein cœur de Bamako, facilement
                    accessible. N&apos;hésitez pas à venir nous rencontrer pour
                    discuter de votre projet en personne.
                  </p>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <p className="font-semibold text-lg mb-2">📍 Notre adresse</p>
                    <p className="text-gray-300">{SITE_CONFIG.address}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-gray-400 text-sm">
                    Nous vous accueillons du lundi au samedi, de 08h00 à 18h00.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
