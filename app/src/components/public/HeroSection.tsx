"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, FileCheck, Plane } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Atlas Travel & Consulting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/75 to-secondary/50" />
      </div>

      <div className="container-custom relative z-10 flex items-center justify-between gap-8 lg:gap-16 w-full">
        {/* Left Content */}
        <div className={`max-w-xl pt-10 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Main Title */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.15] mb-4">
            Concrétisez vos
            <br />
            <span className="text-gradient">projets de voyage.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md mb-8 leading-relaxed">
            Études, visa et billetterie : l&apos;agence experte à Bamako qui vous accompagne de A à Z.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row items-center gap-3 mb-10">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-7 sm:py-3.5 bg-whatsapp hover:bg-green-600 text-white font-bold rounded-full shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all hover:scale-105 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
              </svg>
              Contactez-nous
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-7 sm:py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 backdrop-blur-sm transition-all hover:scale-105 text-sm sm:text-base"
            >
              Nos services
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>

          {/* Service Stat Cards */}
          <div className="grid grid-cols-3 gap-3">
            <Link
              href="/etudes-campus-france"
              className="group flex flex-col items-center gap-2 p-4 bg-white/8 hover:bg-white/15 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary/30 transition-all text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <GraduationCap className="w-5 h-5 text-primary-light" />
              </div>
              <span className="text-white text-sm font-semibold">Études</span>
              <span className="text-gray-400 text-[11px] leading-tight">Campus France</span>
            </Link>

            <Link
              href="/accompagnement-visa"
              className="group flex flex-col items-center gap-2 p-4 bg-white/8 hover:bg-white/15 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary/30 transition-all text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <FileCheck className="w-5 h-5 text-primary-light" />
              </div>
              <span className="text-white text-sm font-semibold">Visa</span>
              <span className="text-gray-400 text-[11px] leading-tight">Tous types</span>
            </Link>

            <Link
              href="/agence-de-voyage"
              className="group flex flex-col items-center gap-2 p-4 bg-white/8 hover:bg-white/15 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary/30 transition-all text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Plane className="w-5 h-5 text-primary-light" />
              </div>
              <span className="text-white text-sm font-semibold">Billets</span>
              <span className="text-gray-400 text-[11px] leading-tight">Toutes destinations</span>
            </Link>
          </div>
        </div>

        {/* Right - Globe Animation */}
        <div className={`hidden lg:flex items-center justify-center flex-1 max-w-lg transition-all duration-1000 delay-300 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <div className="relative w-[400px] h-[400px]">
            {/* Orbit rings */}
            <div className="absolute inset-0 rounded-full border border-primary/20" />
            <div className="absolute inset-8 rounded-full border border-primary/15" />
            <div className="absolute inset-16 rounded-full border border-primary/10" />

            {/* Slow rotating globe wireframe */}
            <div className="absolute inset-0 hero-globe-spin">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <circle cx="200" cy="200" r="150" fill="none" stroke="#16a34a" strokeWidth="1" opacity="0.25" />
                <ellipse cx="200" cy="200" rx="150" ry="40" fill="none" stroke="#16a34a" strokeWidth="0.7" opacity="0.2" />
                <ellipse cx="200" cy="155" rx="130" ry="30" fill="none" stroke="#16a34a" strokeWidth="0.5" opacity="0.12" />
                <ellipse cx="200" cy="245" rx="130" ry="30" fill="none" stroke="#16a34a" strokeWidth="0.5" opacity="0.12" />
                <ellipse cx="200" cy="200" rx="40" ry="150" fill="none" stroke="#16a34a" strokeWidth="0.7" opacity="0.18" />
                <ellipse cx="200" cy="200" rx="100" ry="150" fill="none" stroke="#16a34a" strokeWidth="0.5" opacity="0.12" />
              </svg>
            </div>

            {/* Center glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/15 rounded-full blur-2xl" />

            {/* Orbiting airplane */}
            <div className="absolute inset-[-10px] hero-orbit">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="hero-orbit-counter w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/40">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Trail dots */}
            <div className="absolute inset-[-10px] hero-orbit" style={{ animationDelay: "-1.5s" }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/30" />
            </div>
            <div className="absolute inset-[-10px] hero-orbit" style={{ animationDelay: "-3s" }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary/15" />
            </div>

            {/* Destination labels with FLAG IMAGES (not emoji) */}
            <div className="absolute top-4 right-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-sm text-white border border-white/10 flex items-center gap-2 hero-label-float">
              <img src="https://flagcdn.com/w20/fr.png" alt="France" width={20} height={14} className="rounded-sm" />
              France
            </div>
            <div className="absolute bottom-16 left-[-10px] px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-sm text-white border border-white/10 flex items-center gap-2 hero-label-float" style={{ animationDelay: "1s" }}>
              <img src="https://flagcdn.com/w20/ae.png" alt="Dubaï" width={20} height={14} className="rounded-sm" />
              Dubaï
            </div>
            <div className="absolute top-1/4 left-0 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-sm text-white border border-white/10 flex items-center gap-2 hero-label-float" style={{ animationDelay: "2s" }}>
              <img src="https://flagcdn.com/w20/ca.png" alt="Canada" width={20} height={14} className="rounded-sm" />
              Canada
            </div>
            <div className="absolute bottom-6 right-4 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-sm text-white border border-white/10 flex items-center gap-2 hero-label-float" style={{ animationDelay: "1.5s" }}>
              <img src="https://flagcdn.com/w20/us.png" alt="USA" width={20} height={14} className="rounded-sm" />
              USA
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 40C1248 36.7 1344 33.3 1392 31.7L1440 30V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
