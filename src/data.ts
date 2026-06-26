import { Project, Service, Testimonial, ProcessStep, InfoCard } from "./types";

export const ARCHITECT_INFO = {
  name: "Hatim El Alami",
  title: "Architecte DPLG / Designer d'Espaces",
  location: "Salé, Maroc",
  bio: "Diplômé de l'École Nationale d'Architecture et fort de plus de 25 ans d'expérience, Hatim El Alami conçoit des architectures d'exception au Maroc. Son approche allie les lignes pures et épurées du minimalisme scandinave à la noblesse et au raffinement de l'artisanat marocain traditionnel.\n\nChaque projet est traité comme une œuvre unique, plaçant la fluidité de la lumière, la performance thermique passive et la relation intérieur-extérieur au cœur de la conception. Que ce soit pour une villa de prestige ou un immeuble collectif d'envergure, nous vous accompagnons de l'esquisse initiale jusqu'à la délivrance des autorisations administratives.",
  // heroImage: "/src/assets/images/moroccan_villa_hero_1782320220379.jpg",
  // profileImage: "/src/assets/images/architect_portrait_1782320236586.jpg",
  heroImage: "/images/moroccan_villa_hero_1782320220379.jpg",
  profileImage: "/images/architect_portrait_1782320236586.png",
  stats: [
    { value: 25, label: "Années d'expérience", suffix: "+" },
    { value: 420, label: "Projets réalisés", suffix: "+" },
    { value: 98, label: "Clients satisfaits", suffix: "%" },
    { value: 3, label: "Villes desservies", suffix: "" }
  ],
  certifications: [
    "Membre de l'Ordre National des Architectes du Maroc (Conseil Régional de Salé)",
    "Lauréat de l'École Nationale d'Architecture (ENA)",
    "Expert en Bâtiments à Haute Performance Énergétique (RTCM)",
    "Spécialiste de l'Architecture de Terre et Matériaux Locaux durables"
  ]
};

export const SERVICES_DATA: Service[] = [
  {
    id: "villas",
    title: "Conception de Villas de Luxe",
    description: "Architectures d'exception sur mesure combinant élégance contemporaine, patios de lumière, piscines à débordement et transition fluide dedans-dehors.",
    details: [
      "Études d'ensoleillement et d'orientation",
      "Perspectives 3D photoréalistes d'intérieur et extérieur",
      "Calculs d'inertie thermique passive pour le climat marocain",
      "Plans d'aménagement paysager et de terrasses"
    ],
    icon: "Gem"
  },
  {
    id: "r1",
    title: "Plans Architecturaux R+1",
    description: "Plans complets pour maisons individuelles ou jumelées à double niveau, optimisant l'usage de la surface habitable et la hauteur réglementaire.",
    details: [
      "Optimisation de la surface exploitable au sol",
      "Double façade et intégration des retours réglementaires",
      "Visualisation 3D pour validation des volumes",
      "Dossiers complets d'autorisation municipale"
    ],
    icon: "Home"
  },
  {
    id: "r2",
    title: "Plans Architecturaux R+2",
    description: "Modèles d'habitat collectif de taille moyenne ou immeubles mixtes, alliant commerces au rez-de-chaussée et appartements de standing aux étages.",
    details: [
      "Gestion optimale du rez-de-chaussée commercial",
      "Conception de duplex et d'appartements indépendants",
      "Agencement fluide des circulations communes",
      "Études d'éclairage et de puits de lumière verticaux"
    ],
    icon: "Layers"
  },
  {
    id: "r3",
    title: "Plans Architecturaux R+3",
    description: "Immeubles résidentiels haut de gamme et résidences collectives, intégrant parking en sous-sol, ascenseur et conformité technique complète.",
    details: [
      "Plans d'intégration des parkings sous-sol réglementaires",
      "Respect rigoureux du cahier des charges d'aménagement urbain",
      "Liaisonnement avec le bureau de contrôle et BET structures",
      "Structure parasismique optimale (RPS 2011)"
    ],
    icon: "Building"
  },
  {
    id: "commerciaux",
    title: "Projets Commerciaux",
    description: "Boutiques de luxe, espaces corporatifs, cafés, restaurants et showrooms conçus pour maximiser l'identité de marque et le flux de visiteurs.",
    details: [
      "Conception de façades vitrées et de structures légères suspendues",
      "Optimisation des flux intérieurs et expérience utilisateur",
      "Conformité avec les normes d'accessibilité et de sécurité incendie",
      "Acoustique et éclairage architectural intégré"
    ],
    icon: "Briefcase"
  },
  {
    id: "etudes",
    title: "Études & Conseils",
    description: "Expertise technique complète de votre terrain, audit de projet existant, estimation de faisabilité réglementaire et de budget de travaux.",
    details: [
      "Audits d'urbanisme (relevé de contraintes du plan d'aménagement)",
      "Conseil en performance énergétique (RTCM)",
      "Suivi de conformité auprès des bureaux de contrôle",
      "Modélisation de maquettes numériques BIM"
    ],
    icon: "Compass"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "p1",
    title: "Villa Atlas Oasis",
    category: "Villa de Luxe",
    description: "Une luxueuse résidence contemporaine de plain-pied à Salé, mêlant béton banché brut, pierre de Taza et piscine miroir réfléchissant l'Atlas.",
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
    location: "Salé, Maroc",
    year: "2025",
    surface: "650 m²"
  },
  {
    id: "p2",
    title: "Résidence Duplex R+1",
    category: "Résidence R+1",
    description: "Villa jumelée contemporaine à Rabat Harhoura, optimisant l'ensoleillement sud avec de larges baies vitrées coulissantes et des brise-soleil en bois précieux.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    location: "Rabat, Maroc",
    year: "2024",
    surface: "420 m²"
  },
  {
    id: "p3",
    title: "Immeuble Mixte Al Amal R+2",
    category: "Résidence R+2",
    description: "Projet d'immeuble R+2 à Casablanca intégrant un showroom d'exposition double hauteur au rez-de-chaussée et quatre appartements de prestige.",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
    location: "Casablanca, Maroc",
    year: "2024",
    surface: "980 m²"
  },
  {
    id: "p4",
    title: "Résidence Horizon R+3",
    category: "Résidence R+3",
    description: "Immeuble résidentiel d'angle haut standing à Tanger face au détroit, équipé d'une isolation thermique avancée et de loggias brise-vent.",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
    location: "Tanger, Maroc",
    year: "2025",
    surface: "1 650 m²"
  },
  {
    id: "p5",
    title: "Boutique Concept Store",
    category: "Projet Commercial",
    description: "Showroom de design haut de gamme doté d'une façade rideau transparente et d'une structure intérieure minimaliste en acier poli et béton ciré.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    location: "Casablanca, Maroc",
    year: "2024",
    surface: "350 m²"
  },
  {
    id: "p6",
    title: "Villa Lumina",
    category: "Villa de Luxe",
    description: "Villa d'inspiration balnéaire à Dar Bouazza, construite autour d'un grand patio central moderne réinterprétant le riad marocain traditionnel.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    location: "Casablanca, Maroc",
    year: "2023",
    surface: "540 m²"
  }
];

export const INFO_CARDS: InfoCard[] = [
  {
    id: "zone",
    title: "Zones d'Intervention",
    description: "Projets principalement basés à Salé, Casablanca, Rabat, Tanger et Agadir, avec la possibilité d'études à distance pour tout le Maroc.",
    highlight: "Salé - Rabat",
    icon: "MapPin"
  },
  {
    id: "delais",
    title: "Délais de Conception",
    description: "Une réactivité maximale : dossier d'avant-projet rendu sous 3 à 5 semaines. Dossiers administratifs déposés rapidement sur Rokhas.",
    highlight: "3 à 5 semaines",
    icon: "Clock"
  },
  {
    id: "rokhas",
    title: "Accompagnement Rokhas.ma",
    description: "Prise en charge digitale complète de la soumission de vos plans sur la plateforme nationale Rokhas.ma jusqu'à l'obtention du Permis de Construire.",
    highlight: "100% Clé en Main",
    icon: "FileText"
  },
  {
    id: "normes",
    title: "Normes & Réglementations",
    description: "Conformité stricte aux exigences techniques nationales : règlement thermique (RTCM), normes parasismiques (RPS 2011) et sécurité incendie.",
    highlight: "RPS 2011 & RTCM Garanti",
    icon: "ShieldCheck"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "step1",
    stepNumber: "01",
    title: "Premier Contact & Échange",
    description: "Discussion libre pour définir vos objectifs, les particularités de votre terrain au Maroc (plan de situation, titre de propriété) et votre enveloppe budgétaire.",
    details: "Étape d'écoute active pour traduire vos idées en un premier programme de besoins.",
    icon: "PhoneCall"
  },
  {
    id: "step2",
    stepNumber: "02",
    title: "Analyse Foncière & Réglementaire",
    description: "Analyse rigoureuse de la note de renseignements d'urbanisme du terrain afin d'identifier les règles d'alignement, de hauteur (R+1, R+2, etc.) et d'emprise au sol.",
    details: "Nous nous assurons de la faisabilité totale du projet avant tout coup de crayon.",
    icon: "Search"
  },
  {
    id: "step3",
    stepNumber: "03",
    title: "Esquisses & Modélisation 3D",
    description: "Création des premiers croquis, plans de masse et volumes en 3D. Cette phase interactive vous permet d'ajuster les espaces en temps réel.",
    details: "Vous visualisez les perspectives réelles de votre future villa ou résidence de manière immersive.",
    icon: "PenTool"
  },
  {
    id: "step4",
    stepNumber: "04",
    title: "Dossier d'Autorisation (APS / APD)",
    description: "Élaboration des plans détaillés à l'échelle (1/100e) pour dépôt du permis. Coordination avec le Bureau d'Études Techniques (BET) pour la structure béton armé.",
    details: "Préparation rigoureuse de toutes les pièces graphiques réglementaires demandées par l'administration.",
    icon: "FileCheck"
  },
  {
    id: "step5",
    stepNumber: "05",
    title: "Dépôt & Instruction Rokhas.ma",
    description: "Soumission dématérialisée de l'ensemble du dossier d'architecture sur Rokhas. Suivi proactif des avis de la Commission (Commune, Agence Urbaine, Protection Civile).",
    details: "Nous gérons les rectifications éventuelles pour une obtention rapide du Permis de Construire.",
    icon: "CloudUpload"
  },
  {
    id: "step6",
    stepNumber: "06",
    title: "Dossier d'Exécution & Lancement",
    description: "Remise des plans définitifs d'exécution (plans de coffrage, plans de second œuvre, calepinages) permettant aux entreprises de gros œuvre d'ouvrir le chantier.",
    details: "Livraison d'un dossier d'exécution complet avec un suivi régulier du bon déroulement esthétique des travaux.",
    icon: "CheckCircle"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    author: "Lamiaa Serraf",
    projectType: "Villa Moderne R+1, Salé",
    text: "شكراً مهندس حاتم… على الاحتراف ديالك، وعلى الأخلاق، وعلى الدقّة اللي ترفع الراس. هاذي شهادة حق: إنت قدوة فشغلك، وفخر لأي مشروع يشيل اسمك.وكل الشكر والتقدير للمهندس حاتم العالمي… راجل اللي ورّانا أن الدقّة ماشي غير مهارة، هاذي طريقة فالحياة. وشهادتي فيك مهما نقول تبقى قليلة، بس الحق ينقال: تعاملك راقي، والتزامك بالمواعيد كأن الوقت أمانة بيدك، وأمانتك بالشغل تعلّم قبل لا تنجز",
    rating: 5,
    date: "Décembre 2025"
  },
  {
    id: "t2",
    author: "meriyem Elidrissi",
    projectType: "Immeuble R+2, Salé",
    text: "Mon expérience avec l'ingénieur Hatem Al-Alami a été exceptionnelle. Ses services se sont distingués par leur précision et leur excellence, une communication claire et professionnelle, et une ponctualité irréprochable.",
    rating: 5,
    date: "Février 2026"
  },
  {
    id: "t3",
    author: "Smail Smail",
    projectType: "Villa Contemporaine, Rabat ",
    text: "أتقدم بجزيل الشكر والعرفان للأستاذ المهندس المعماري حاتم العلمي على تعامله الراقي، واحترافيته العالية، وحسن تعاونه طوال فترة العمل معه. لقد أبان عن كفاءةٍ مميزة، وحرصٍ كبير على جودة التنفيذ والدقة في التفاصيل، مما عكس إخلاصه وحبه لمهنته. نثمن عالياً روحه الطيبة، وأسلوبه الرفيع في التواصل والتعامل، الذي جعل من تجربة العمل معه تجربة مميزة يسودها الاحترام والتفاهم. جزاه الله خيرًا ووفقه في مسيرته المهنية، ونسأل الله أن يكتب له مزيدًا من النجاح والتوفيق.مع خالص التقدير والاحترام،",
    rating: 5,
    date: "Novembre 2025"
  },
  {
    id: "t4",
    author: "Fatima akabli",
    projectType: "Concept Commercial Store de Luxe, Rabat",
    text: "كانت تجربتي مع المهندس حاتم العلمي على قدرٍ عالٍ من التميّز. فقد اتّسمت خدماته بالدقة والإتقان، وتّميز بالتواصل الواضح والمهني، إضافة إلى التزامه الكامل بالمواعيد. أظهر مستوى رفيعًا من الاحترافية والأمانة في أداء مهامه، وأوصي بالتعامل معه لما يقدّمه من جودة وثقة",
    rating: 5,
    date: "janvier 2026"
  },
  {
    id: "t5",
    author: "MOHAMMED MCHIOUER",
    projectType: "Résidence Collective R+3, Salé",
    text: "Un homme honnête est une personne intègre, droite et loyale.",
    rating: 5,
    date: "Février 2025"
  }
];
