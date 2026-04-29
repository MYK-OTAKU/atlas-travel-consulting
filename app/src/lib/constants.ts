export const SITE_CONFIG = {
  name: "ATLAS TRAVEL & CONSULTING",
  slogan: "Votre partenaire de confiance pour aller plus loin",
  description:
    "ATLAS TRAVEL & CONSULTING accompagne les clients dans leurs projets de voyage, de visa et d'études à l'étranger avec sérieux, transparence et efficacité. Basée à Bamako, Mali.",
  address: "Hamdallaye ACI 2000, près du Palais des Sports, Bamako, Mali",
  city: "Bamako",
  country: "Mali",
  phones: ["+223 76 44 75 60", "+223 44 39 39 47"],
  whatsapp: "+22376447560",
  email: "atlastravelnconsult@gmail.com",
  url: "https://atlastravelconsulting.com",
} as const;

export const WHATSAPP_MESSAGES = {
  general:
    "Bonjour, je viens depuis votre site web et je souhaite avoir des informations.",
  studies:
    "Bonjour, je souhaite avoir des informations sur votre accompagnement pour les études à l'étranger / Campus France.",
  visa: "Bonjour, je souhaite être accompagné pour comprendre et préparer une demande de visa.",
  tickets:
    "Bonjour, je souhaite avoir des informations pour un billet d'avion.",
  insurance:
    "Bonjour, je souhaite avoir des informations sur vos services d'assurance voyage.",
} as const;

export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\+|\s/g, "")}?text=${encoded}`;
}

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  {
    label: "Nos Services",
    href: "/services",
    children: [
      { label: "Études / Campus France", href: "/etudes-campus-france" },
      { label: "Accompagnement Visa", href: "/accompagnement-visa" },
      { label: "Agence de voyage", href: "/agence-de-voyage" },
    ],
  },
  { label: "Destinations", href: "/destinations" },
  { label: "Avis", href: "/avis" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES_DATA = [
  {
    id: "studies",
    title: "Études à l'étranger",
    subtitle: "Spécialité Campus France",
    slug: "etudes-campus-france",
    icon: "GraduationCap",
    image: "/images/service-studies.png",
    shortDescription:
      "Accompagnement complet pour vos études en France et à l'étranger : orientation, dossier Campus France, choix d'universités, coaching entretien.",
    whatsappMessage: WHATSAPP_MESSAGES.studies,
  },
  {
    id: "visa",
    title: "Accompagnement Visa",
    subtitle: "Touristique, Professionnel, Familial",
    slug: "accompagnement-visa",
    icon: "FileCheck",
    image: "/images/service-visa.png",
    shortDescription:
      "Nous vous guidons dans la préparation de votre dossier visa avec sérieux et transparence. Assistance prise de rendez-vous incluse.",
    whatsappMessage: WHATSAPP_MESSAGES.visa,
  },
  {
    id: "tickets",
    title: "Billetterie",
    subtitle: "Toutes destinations",
    slug: "agence-de-voyage",
    icon: "Plane",
    image: "/images/service-tickets.png",
    shortDescription:
      "Billets d'avion pour toutes destinations au meilleur prix. Service rapide et fiable pour vos voyages d'affaires ou de loisirs.",
    whatsappMessage: WHATSAPP_MESSAGES.tickets,
  },
  {
    id: "travel-insurance",
    title: "Assurance Voyage",
    subtitle: "Voyagez l'esprit tranquille",
    slug: "agence-de-voyage",
    icon: "Shield",
    image: "/images/service-insurance.png",
    shortDescription:
      "Protégez votre voyage avec nos solutions d'assurance voyage complètes et adaptées à votre destination.",
    whatsappMessage: WHATSAPP_MESSAGES.insurance,
  },
  {
    id: "auto-insurance",
    title: "Assurance Automobile",
    subtitle: "Protection complète",
    slug: "agence-de-voyage",
    icon: "Car",
    image: "/images/service-auto.png",
    shortDescription:
      "Solutions d'assurance automobile fiables et compétitives pour protéger votre véhicule au quotidien.",
    whatsappMessage: WHATSAPP_MESSAGES.general,
  },
] as const;

// Flag images from CDN (emoji flags don't render on Windows)
export function getFlagUrl(countryCode: string, width = 40): string {
  return `https://flagcdn.com/w${width}/${countryCode.toLowerCase()}.png`;
}

export const DESTINATIONS_DATA = [
  {
    name: "Europe",
    slug: "europe",
    description: "Études, tourisme et opportunités professionnelles au cœur de l'Europe.",
    countryCode: "eu",
  },
  {
    name: "Dubaï",
    slug: "dubai",
    description: "Destination d'affaires et de tourisme de luxe aux Émirats Arabes Unis.",
    countryCode: "ae",
  },
  {
    name: "Chine",
    slug: "chine",
    description: "Opportunités d'études et de commerce dans la première puissance asiatique.",
    countryCode: "cn",
  },
  {
    name: "Maroc",
    slug: "maroc",
    description: "Destination proche pour tourisme, études et échanges commerciaux.",
    countryCode: "ma",
  },
  {
    name: "USA",
    slug: "usa",
    description: "Le rêve américain : études prestigieuses, tourisme et opportunités uniques.",
    countryCode: "us",
  },
  {
    name: "Canada",
    slug: "canada",
    description: "Immigration, études de qualité et qualité de vie exceptionnelle.",
    countryCode: "ca",
  },
  {
    name: "La Mecque",
    slug: "mecque",
    description: "Pèlerinage sacré : Hajj et Omra avec un accompagnement dédié.",
    countryCode: "sa",
  },
] as const;

export const VALUES_DATA = [
  {
    title: "Transparence",
    description:
      "Pas de frais cachés ni de fausses promesses. Nous communiquons clairement sur nos tarifs, les procédures réelles et les délais.",
    icon: "Eye",
  },
  {
    title: "Sérieux",
    description:
      "Chaque dossier est traité avec rigueur, confidentialité absolue et professionnalisme. Votre confiance est notre priorité.",
    icon: "Award",
  },
  {
    title: "Efficacité",
    description:
      "Notre connaissance des procédures nous permet d'optimiser vos démarches pour des résultats rapides et concrets.",
    icon: "Zap",
  },
] as const;

export const CAMPUS_FRANCE_STEPS = [
  {
    step: 1,
    title: "Orientation",
    description:
      "Évaluation de votre profil académique et identification des filières et universités adaptées à votre projet.",
  },
  {
    step: 2,
    title: "Constitution du dossier",
    description:
      "Aide à la préparation et à la vérification de votre dossier Campus France pour maximiser vos chances.",
  },
  {
    step: 3,
    title: "Choix des universités",
    description:
      "Sélection stratégique des établissements en fonction de votre parcours, budget et objectifs de carrière.",
  },
  {
    step: 4,
    title: "Coaching entretien",
    description:
      "Préparation intensive pour l'entretien Campus France avec simulations et conseils personnalisés.",
  },
  {
    step: 5,
    title: "Accompagnement visa",
    description:
      "Après acceptation universitaire, assistance complète pour la demande de visa étudiant.",
  },
] as const;

export const VISA_STEPS = [
  {
    step: 1,
    title: "Prise de contact",
    description: "Échange via WhatsApp pour comprendre votre besoin et votre situation.",
  },
  {
    step: 2,
    title: "Analyse du besoin",
    description: "Identification du type de visa requis et de la destination souhaitée.",
  },
  {
    step: 3,
    title: "Destination choisie",
    description: "Transmission de la liste des pièces à fournir selon le pays concerné.",
  },
  {
    step: 4,
    title: "Préparation du dossier",
    description: "Vérification et accompagnement pour constituer un dossier solide et complet.",
  },
  {
    step: 5,
    title: "Prise de rendez-vous",
    description: "Assistance pour la prise de rendez-vous consulaire quand nécessaire.",
  },
] as const;

export const VISA_DISCLAIMER = {
  title: "Notre engagement de transparence",
  points: [
    "L'agence accompagne et conseille, mais ne délivre pas de visa.",
    "Les visas sont accordés ou refusés uniquement par les consulats concernés.",
    "Aucune promesse de résultat ni solution miracle.",
    "L'agence ne se substitue pas au demandeur.",
    "L'agence ne produit pas de documents personnels à la place du client.",
    "Nous refusons toute démarche impliquant de faux documents.",
  ],
} as const;

export const DEMO_REVIEWS = [
  {
    id: 1,
    author: "Amadou D.",
    content:
      "ATLAS TRAVEL m'a accompagné pour mon dossier Campus France. Leur sérieux et leur transparence m'ont rassuré tout au long du processus. Je recommande vivement !",
    rating: 5,
    service: "Études / Campus France",
  },
  {
    id: 2,
    author: "Fatoumata K.",
    content:
      "Service rapide et professionnel pour mon billet d'avion. L'équipe est à l'écoute et toujours disponible sur WhatsApp.",
    rating: 5,
    service: "Billetterie",
  },
  {
    id: 3,
    author: "Ibrahim S.",
    content:
      "Très bon accompagnement pour la préparation de mon dossier visa. Ils expliquent clairement chaque étape et ne font aucune fausse promesse.",
    rating: 4,
    service: "Accompagnement Visa",
  },
] as const;
