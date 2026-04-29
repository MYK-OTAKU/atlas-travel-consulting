import { Eye, Award, Zap } from "lucide-react";
import { VALUES_DATA } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Eye,
  Award,
  Zap,
};

export default function ValuesSection() {
  return (
    <section className="section-padding bg-background-alt relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Pourquoi nous faire confiance
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Nos <span className="text-gradient">Valeurs</span>
          </h2>
          <p className="text-secondary-medium text-lg leading-relaxed">
            Ce qui nous distingue ? La transparence, le sérieux et l&apos;efficacité au service de votre projet.
          </p>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES_DATA.map((value, index) => {
            const IconComponent = iconMap[value.icon];
            return (
              <div
                key={value.title}
                className="group relative text-center p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                  <IconComponent className="w-10 h-10 text-primary" />
                </div>

                <h3 className="font-heading text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>

                <p className="text-secondary-medium leading-relaxed">
                  {value.description}
                </p>

                {/* Order number */}
                <span className="absolute bottom-4 right-6 text-7xl font-heading font-bold text-gray-50 group-hover:text-primary/5 transition-colors select-none">
                  {index + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
