import Link from "next/link";
import { Calculator, Plane, ArrowRight } from "lucide-react";

export default function ToolsSpotlight() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
            Nos outils <span className="text-gradient">pratiques</span>
          </h2>
          <p className="text-secondary-medium text-lg">
            Facilitez l'organisation de vos voyages grâce à nos outils de simulation gratuits et instantanés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Schengen Calculator Card */}
          <Link href="/calcul-visa-schengen" className="group block">
            <div className="h-full bg-background-alt rounded-3xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-gray-100 group-hover:border-primary/20 transition-colors">
                <Calculator className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-secondary mb-4">
                Calculateur Schengen 90/180
              </h3>
              
              <p className="text-secondary-medium mb-8 leading-relaxed">
                Vérifiez facilement si vous respectez la limite des 90 jours autorisés dans l'espace Schengen sur une période de 180 jours. Évitez les dépassements grâce à cet outil précis.
              </p>
              
              <div className="flex items-center gap-2 text-primary font-semibold group-hover:translate-x-2 transition-transform">
                Essayer l'outil
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>

          {/* Flight Simulator Card */}
          <Link href="/simulation-itineraire" className="group block">
            <div className="h-full bg-background-alt rounded-3xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-gray-100 group-hover:border-primary/20 transition-colors">
                <Plane className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-secondary mb-4">
                Simulateur d'itinéraire & Devis
              </h3>
              
              <p className="text-secondary-medium mb-8 leading-relaxed">
                Planifiez votre vol en quelques clics. Entrez vos dates, destinations et préférences pour obtenir rapidement une estimation tarifaire sur-mesure par notre agence.
              </p>
              
              <div className="flex items-center gap-2 text-primary font-semibold group-hover:translate-x-2 transition-transform">
                Obtenir un devis
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
