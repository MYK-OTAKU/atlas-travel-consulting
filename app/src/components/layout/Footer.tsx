import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 overflow-hidden rounded-full bg-white shadow-md border-2 border-primary/20">
                <Image
                  src="/logo.jpeg"
                  alt={SITE_CONFIG.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white block">
                  ATLAS TRAVEL
                </span>
                <span className="text-primary-light text-xs font-medium">
                  & CONSULTING
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {SITE_CONFIG.slogan}. Votre agence de confiance à Bamako pour vos projets
              de voyage, d&apos;études et de visa.
            </p>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-whatsapp hover:bg-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.33 0-4.512-.647-6.379-1.77l-.458-.274-3.134 1.049 1.049-3.134-.274-.458A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Écrivez-nous
            </a>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-white">
              Nos Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/etudes-campus-france"
                  className="text-gray-400 hover:text-primary-light transition-colors text-sm"
                >
                  Études / Campus France
                </Link>
              </li>
              <li>
                <Link
                  href="/accompagnement-visa"
                  className="text-gray-400 hover:text-primary-light transition-colors text-sm"
                >
                  Accompagnement Visa
                </Link>
              </li>
              <li>
                <Link
                  href="/agence-de-voyage"
                  className="text-gray-400 hover:text-primary-light transition-colors text-sm"
                >
                  Billetterie & Voyages
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="text-gray-400 hover:text-primary-light transition-colors text-sm"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/avis"
                  className="text-gray-400 hover:text-primary-light transition-colors text-sm"
                >
                  Avis Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-white">
              Liens utiles
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/a-propos"
                  className="text-gray-400 hover:text-primary-light transition-colors text-sm"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-primary-light transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-gray-400 hover:text-primary-light transition-colors text-sm"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="text-gray-400 hover:text-primary-light transition-colors text-sm"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-white">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-light mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {SITE_CONFIG.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-light mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm space-y-1">
                  {SITE_CONFIG.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="block hover:text-primary-light transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-light mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-gray-400 text-sm hover:text-primary-light transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-light mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Lun - Sam : 08h00 - 18h00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {SITE_CONFIG.name}. Tous droits réservés.
          </p>
          <p className="text-gray-600 text-xs">
            Bamako, Mali — Votre partenaire de confiance
          </p>
        </div>
      </div>
    </footer>
  );
}
