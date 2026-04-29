"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Users, PlaneTakeoff, PlaneLanding, Briefcase } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

export default function SimulationItinerairePage() {
  const [formData, setFormData] = useState({
    departure: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    adults: "1",
    children: "0",
    flightClass: "Économique",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppQuote = () => {
    const { departure, destination, departureDate, returnDate, adults, children, flightClass } = formData;
    
    // Build the message
    let message = `${WHATSAPP_MESSAGES.simulator}\n\n*Détails du vol souhaité :*\n`;
    if (departure) message += `- 🛫 Départ : ${departure}\n`;
    if (destination) message += `- 🛬 Destination : ${destination}\n`;
    if (departureDate) message += `- 📅 Date aller : ${departureDate}\n`;
    if (returnDate) message += `- 📅 Date retour : ${returnDate}\n`;
    message += `- 👥 Passagers : ${adults} Adulte(s), ${children} Enfant(s)\n`;
    message += `- 💺 Classe : ${flightClass}\n\n`;
    message += `Pouvez-vous me proposer un devis pour ce trajet ?`;

    window.open(getWhatsAppUrl(message), "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_services.png"
            alt="Simulateur d'itinéraire"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Simulateur <span className="text-gradient">d'itinéraire</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              Préparez votre prochain voyage en toute simplicité. Indiquez vos préférences de vol et obtenez rapidement un devis personnalisé de la part de nos experts.
            </p>
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section className="section-padding bg-background-alt relative -mt-10 z-20">
        <div className="container-custom max-w-5xl">
          <div className="bg-white rounded-3xl shadow-xl shadow-primary/5 border border-gray-100 p-6 md:p-10">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <PlaneTakeoff className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-secondary">Votre vol idéal</h2>
                <p className="text-secondary-medium text-sm">Remplissez les champs pour une estimation précise</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Departure */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary flex items-center gap-2">
                  <PlaneTakeoff className="w-4 h-4 text-primary" />
                  Ville de départ
                </label>
                <input
                  type="text"
                  name="departure"
                  value={formData.departure}
                  onChange={handleChange}
                  placeholder="Ex: Bamako (BKO)"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary flex items-center gap-2">
                  <PlaneLanding className="w-4 h-4 text-primary" />
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Ex: Paris (CDG)"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              {/* Dates */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Date de départ
                </label>
                <input
                  type="date"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-secondary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Date de retour (optionnel)
                </label>
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-secondary"
                />
              </div>

              {/* Passengers */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Passagers
                </label>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <select
                      name="adults"
                      value={formData.adults}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-secondary appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} Adulte{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-1">
                    <select
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-secondary appearance-none"
                    >
                      {[0, 1, 2, 3, 4].map(num => (
                        <option key={num} value={num}>{num} Enfant{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Class */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-primary" />
                  Classe de voyage
                </label>
                <select
                  name="flightClass"
                  value={formData.flightClass}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-secondary appearance-none"
                >
                  <option value="Économique">Économique</option>
                  <option value="Premium Économique">Premium Économique</option>
                  <option value="Affaires (Business)">Affaires (Business)</option>
                  <option value="Première Classe">Première Classe</option>
                </select>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-secondary-medium text-sm max-w-md">
                Les tarifs des billets d'avion varient constamment. En cliquant sur le bouton, vous serez mis en relation avec notre équipe pour recevoir la meilleure offre du jour.
              </p>
              
              <button
                onClick={handleWhatsAppQuote}
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-whatsapp hover:bg-green-600 text-white font-bold rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all hover:-translate-y-1"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
                Obtenir un devis via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
