"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

export default function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  const options = [
    { label: "Études / Campus France", message: WHATSAPP_MESSAGES.studies },
    { label: "Accompagnement Visa", message: WHATSAPP_MESSAGES.visa },
    { label: "Billet d'avion", message: WHATSAPP_MESSAGES.tickets },
    { label: "Autre demande", message: WHATSAPP_MESSAGES.general },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded Options */}
      {isExpanded && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-72 animate-fade-in-up">
          <div className="bg-whatsapp px-5 py-4">
            <p className="text-white font-heading font-semibold text-sm">
              💬 Comment pouvons-nous vous aider ?
            </p>
            <p className="text-white/80 text-xs mt-1">
              Choisissez un sujet pour nous contacter
            </p>
          </div>
          <div className="p-2">
            {options.map((option) => (
              <a
                key={option.label}
                href={getWhatsAppUrl(option.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 rounded-xl transition-colors group"
                onClick={() => setIsExpanded(false)}
              >
                <div className="w-8 h-8 rounded-full bg-whatsapp/10 flex items-center justify-center group-hover:bg-whatsapp/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-whatsapp" />
                </div>
                <span className="text-sm text-secondary font-medium">
                  {option.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`relative w-16 h-16 rounded-full bg-whatsapp hover:bg-green-600 text-white shadow-2xl hover:shadow-green-500/30 flex items-center justify-center transition-all duration-300 hover:scale-105 ${
          showPulse ? "animate-pulse-slow" : ""
        }`}
        aria-label="Contacter via WhatsApp"
      >
        {isExpanded ? (
          <X className="w-7 h-7" />
        ) : (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.33 0-4.512-.647-6.379-1.77l-.458-.274-3.134 1.049 1.049-3.134-.274-.458A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
        )}

        {/* Notification Badge */}
        {!isExpanded && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white animate-bounce">
            1
          </span>
        )}
      </button>
    </div>
  );
}
