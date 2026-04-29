import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: `Politique de confidentialité du site ${SITE_CONFIG.name}.`,
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container-custom relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Politique de confidentialité
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
              Collecte des données
            </h2>
            <p className="text-secondary-medium mb-6">
              {SITE_CONFIG.name} collecte uniquement les données personnelles nécessaires au
              traitement de vos demandes : nom, prénom, email, numéro de téléphone et
              éventuellement les informations relatives à votre projet (études, visa, voyage).
            </p>

            <h2 className="font-heading text-2xl font-bold text-secondary mb-4 mt-10">
              Utilisation des données
            </h2>
            <p className="text-secondary-medium mb-6">
              Les données collectées sont utilisées exclusivement pour :<br />
              - Répondre à vos demandes de renseignements<br />
              - Vous accompagner dans vos démarches<br />
              - Améliorer nos services<br />
              - Vous envoyer des informations pertinentes si vous y avez consenti
            </p>

            <h2 className="font-heading text-2xl font-bold text-secondary mb-4 mt-10">
              Protection des données
            </h2>
            <p className="text-secondary-medium mb-6">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
              pour protéger vos données personnelles contre tout accès non autorisé,
              modification, divulgation ou destruction.
            </p>

            <h2 className="font-heading text-2xl font-bold text-secondary mb-4 mt-10">
              Partage des données
            </h2>
            <p className="text-secondary-medium mb-6">
              Vos données ne sont jamais vendues, échangées ou louées à des tiers.
              Elles peuvent être partagées uniquement avec les partenaires nécessaires
              au traitement de votre demande (compagnies aériennes, consulats, universités),
              avec votre accord préalable.
            </p>

            <h2 className="font-heading text-2xl font-bold text-secondary mb-4 mt-10">
              Vos droits
            </h2>
            <p className="text-secondary-medium mb-6">
              Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression
              de vos données personnelles. Pour exercer ces droits, contactez-nous à
              l&apos;adresse : {SITE_CONFIG.email}
            </p>

            <h2 className="font-heading text-2xl font-bold text-secondary mb-4 mt-10">
              Cookies
            </h2>
            <p className="text-secondary-medium mb-6">
              Ce site utilise des cookies essentiels au bon fonctionnement du site.
              Aucun cookie publicitaire ou de tracking n&apos;est utilisé en V1.
            </p>

            <h2 className="font-heading text-2xl font-bold text-secondary mb-4 mt-10">
              Contact
            </h2>
            <p className="text-secondary-medium mb-6">
              Pour toute question relative à la protection de vos données :<br />
              Email : {SITE_CONFIG.email}<br />
              Téléphone : {SITE_CONFIG.phones[0]}<br />
              Adresse : {SITE_CONFIG.address}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
