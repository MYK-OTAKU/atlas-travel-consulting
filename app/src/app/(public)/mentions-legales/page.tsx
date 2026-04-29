import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: `Mentions légales du site ${SITE_CONFIG.name}.`,
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container-custom relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Mentions légales
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 40C1248 36.7 1344 33.3 1392 31.7L1440 30V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-2xl font-bold text-secondary mb-4">
              Éditeur du site
            </h2>
            <p className="text-secondary-medium mb-6">
              <strong>{SITE_CONFIG.name}</strong><br />
              Adresse : {SITE_CONFIG.address}<br />
              Téléphone : {SITE_CONFIG.phones[0]}<br />
              Email : {SITE_CONFIG.email}
            </p>

            <h2 className="font-heading text-2xl font-bold text-secondary mb-4 mt-10">
              Hébergement
            </h2>
            <p className="text-secondary-medium mb-6">
              Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
            </p>

            <h2 className="font-heading text-2xl font-bold text-secondary mb-4 mt-10">
              Propriété intellectuelle
            </h2>
            <p className="text-secondary-medium mb-6">
              L&apos;ensemble du contenu de ce site (textes, images, logos, vidéos) est la propriété
              exclusive de {SITE_CONFIG.name} ou de ses partenaires. Toute reproduction, représentation
              ou diffusion, en tout ou partie, est interdite sans autorisation préalable.
            </p>

            <h2 className="font-heading text-2xl font-bold text-secondary mb-4 mt-10">
              Responsabilité
            </h2>
            <p className="text-secondary-medium mb-6">
              {SITE_CONFIG.name} s&apos;efforce de fournir des informations exactes et à jour sur ce site.
              Cependant, le site ne saurait garantir l&apos;exactitude, la complétude ou l&apos;actualité
              des informations diffusées. L&apos;agence ne saurait être tenue responsable de toute
              décision prise sur la base des informations présentes sur ce site.
            </p>

            <h2 className="font-heading text-2xl font-bold text-secondary mb-4 mt-10">
              Avertissement visa
            </h2>
            <p className="text-secondary-medium mb-6">
              {SITE_CONFIG.name} propose un service d&apos;accompagnement et de conseil pour les démarches
              de visa. L&apos;agence ne délivre pas de visa, ne garantit pas l&apos;obtention d&apos;un visa et
              ne se substitue pas au demandeur auprès des autorités consulaires. Les décisions
              d&apos;octroi ou de refus de visa relèvent exclusivement des consulats concernés.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
