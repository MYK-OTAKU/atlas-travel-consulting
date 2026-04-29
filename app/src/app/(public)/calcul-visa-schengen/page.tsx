"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Info, Plus, Trash2, Calculator, AlertTriangle, CheckCircle } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

interface Trip {
  id: string;
  entry: string;
  exit: string;
}

export default function SchengenCalculatorPage() {
  const [trips, setTrips] = useState<Trip[]>([{ id: Date.now().toString(), entry: "", exit: "" }]);
  const [targetDate, setTargetDate] = useState<string>(new Date().toISOString().split("T")[0]);

  const addTrip = () => {
    setTrips([...trips, { id: Date.now().toString(), entry: "", exit: "" }]);
  };

  const removeTrip = (id: string) => {
    setTrips(trips.filter((t) => t.id !== id));
  };

  const updateTrip = (id: string, field: "entry" | "exit", value: string) => {
    setTrips(trips.map((t) => (t.id === id ? { ...t, [field]: value } : t)));
  };

  // Logic to calculate days in the 180-day window
  const calculateDays = () => {
    if (!targetDate) return 0;
    
    const endWindow = new Date(targetDate);
    endWindow.setHours(23, 59, 59, 999);
    
    const startWindow = new Date(endWindow);
    startWindow.setDate(endWindow.getDate() - 179); // 180 days inclusive
    startWindow.setHours(0, 0, 0, 0);

    let totalDays = 0;

    trips.forEach((trip) => {
      if (!trip.entry || !trip.exit) return;
      
      const tripEntry = new Date(trip.entry);
      tripEntry.setHours(0, 0, 0, 0);
      
      const tripExit = new Date(trip.exit);
      tripExit.setHours(23, 59, 59, 999);

      if (tripExit < startWindow || tripEntry > endWindow) return; // Completely outside

      // Find overlap
      const overlapStart = tripEntry > startWindow ? tripEntry : startWindow;
      const overlapEnd = tripExit < endWindow ? tripExit : endWindow;

      const diffTime = Math.abs(overlapEnd.getTime() - overlapStart.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      totalDays += diffDays;
    });

    return totalDays;
  };

  const consumedDays = calculateDays();
  const remainingDays = Math.max(0, 90 - consumedDays);
  const isOverstay = consumedDays > 90;
  const progressPercent = Math.min(100, (consumedDays / 90) * 100);

  const handleWhatsAppHelp = () => {
    const message = `${WHATSAPP_MESSAGES.visaCalculator}\n\nJ'ai utilisé votre calculateur et j'ai actuellement consommé ${consumedDays} jours sur les 90 autorisés. J'aurais besoin d'un accompagnement pour mon prochain projet de voyage.`;
    window.open(getWhatsAppUrl(message), "_blank");
  };

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_etudes.png"
            alt="Calculateur Schengen"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Calculateur <span className="text-gradient">Schengen</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              Vérifiez facilement si vous respectez la règle des 90 jours sur 180 jours dans l'espace Schengen pour vos voyages passés et futurs.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background-alt relative -mt-10 z-20">
        <div className="container-custom max-w-5xl">
          <div className="bg-white rounded-3xl shadow-xl shadow-primary/5 border border-gray-100 p-6 md:p-10">
            
            {/* Info Banner */}
            <div className="flex items-start gap-4 p-4 mb-8 bg-blue-50 text-blue-800 rounded-2xl border border-blue-100">
              <Info className="w-6 h-6 shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">
                <strong>Règle des 90/180 jours :</strong> Vous pouvez séjourner dans l'espace Schengen pour un maximum de 90 jours sur toute période de 180 jours consécutifs. Ce calculateur vous aide à estimer les jours restants.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Form */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-secondary flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-primary" />
                    Date de calcul (Date actuelle ou future)
                  </label>
                  <input
                    type="date"
                    value={targetDate}
                    onChange={(e) => setTargetDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-secondary"
                  />
                </div>

                <div className="pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading font-bold text-secondary text-lg">Vos séjours</h3>
                    <button
                      onClick={addTrip}
                      className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                    >
                      <Plus className="w-4 h-4" /> Ajouter un séjour
                    </button>
                  </div>

                  <div className="space-y-4">
                    {trips.map((trip, index) => (
                      <div key={trip.id} className="flex flex-col sm:flex-row items-end sm:items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                        <div className="w-full space-y-1">
                          <label className="text-xs font-medium text-gray-500">Date d'entrée</label>
                          <input
                            type="date"
                            value={trip.entry}
                            onChange={(e) => updateTrip(trip.id, "entry", e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-primary outline-none"
                          />
                        </div>
                        <div className="w-full space-y-1">
                          <label className="text-xs font-medium text-gray-500">Date de sortie</label>
                          <input
                            type="date"
                            value={trip.exit}
                            onChange={(e) => updateTrip(trip.id, "exit", e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-primary outline-none"
                          />
                        </div>
                        <button
                          onClick={() => removeTrip(trip.id)}
                          disabled={trips.length === 1}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-400"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Results */}
              <div className="lg:col-span-5">
                <div className="bg-background-alt rounded-2xl p-6 md:p-8 h-full flex flex-col border border-gray-100">
                  <h3 className="font-heading font-bold text-secondary text-xl mb-6">Résultat</h3>
                  
                  <div className="flex-1 flex flex-col items-center justify-center py-6 text-center">
                    <div className="relative w-48 h-48 mb-6 flex flex-col items-center justify-center rounded-full border-[12px] shadow-inner" style={{ borderColor: isOverstay ? '#ef4444' : '#16a34a' }}>
                      <span className={`text-5xl font-black ${isOverstay ? 'text-red-500' : 'text-primary'}`}>
                        {remainingDays}
                      </span>
                      <span className="text-sm font-medium text-secondary-medium uppercase tracking-wider mt-1">
                        Jours restants
                      </span>
                    </div>

                    <div className="w-full space-y-2 mb-6">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-secondary-medium">Jours consommés</span>
                        <span className="text-secondary">{consumedDays} / 90</span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-1000 ${isOverstay ? 'bg-red-500' : 'bg-primary'}`}
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>

                    {isOverstay ? (
                      <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg text-sm font-medium w-full text-left">
                        <AlertTriangle className="w-5 h-5 shrink-0" />
                        Attention, vous avez dépassé la limite de 90 jours.
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-green-700 bg-green-50 px-4 py-3 rounded-lg text-sm font-medium w-full text-left">
                        <CheckCircle className="w-5 h-5 shrink-0" />
                        Vous êtes en règle. Il vous reste {remainingDays} jours.
                      </div>
                    )}
                  </div>

                  <div className="mt-auto pt-6">
                    <button
                      onClick={handleWhatsAppHelp}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-primary text-secondary hover:text-primary font-semibold rounded-xl transition-all shadow-sm"
                    >
                      <svg className="w-5 h-5 text-whatsapp" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                      </svg>
                      Besoin d'aide ?
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
