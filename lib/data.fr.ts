// French versions of the text in lib/data.ts. Anything not listed here falls back to English.
// Numbers follow French conventions (space before %, space as thousands separator).
import type { Article, Project } from "./data";
import { characterGuessFr } from "@/content/case-studies/fr/character-guess";
import { carbonLoansFr } from "@/content/case-studies/fr/carbon-loans";
import { albertFr } from "@/content/case-studies/fr/albert";
import { carbonZeroFr } from "@/content/case-studies/fr/carbon-zero";
import { africhangeFr } from "@/content/case-studies/fr/africhange";
import { nippyboxesFr } from "@/content/case-studies/fr/nippyboxes";
import { coinbycedarFr } from "@/content/case-studies/fr/coinbycedar";
import { eBillsFr } from "@/content/case-studies/fr/e-bills";

type ProjectText = Partial<Pick<Project, "title" | "category" | "description" | "tags" | "client" | "year" | "highlight" | "caseStudy">>;

export const projectsFr: Record<string, ProjectText> = {
  "character-guess": {
    client: "Cofondateur",
    category: "Grand public · Jeu · Conçu et construit avec l’IA",
    year: "2025–auj.",
    description:
      "Une soirée de jeux en famille devenue un quiz multijoueur en direct. Je l’ai conçu de bout en bout et j’en ai construit le front-end avec Claude Code.",
    tags: ["Design produit", "Construit avec l’IA", "Design system"],
    highlight: { value: "100+", label: "joueurs bêta, tous par bouche-à-oreille" },
    caseStudy: characterGuessFr,
  },
  "carbon-loans": {
    title: "Prêts Carbon",
    category: "Fintech · Design produit",
    description:
      "Refonte de bout en bout du produit de prêt de Carbon MFB. Les demandes de prêt ont augmenté de 20 %, au-delà de l’objectif de 15 %, tandis que les abandons et les prêts non performants ont chacun baissé de 10 %.",
    tags: ["Fintech", "Mobile", "Refonte"],
    highlight: { value: "+20 %", label: "de demandes de prêt, pour un objectif de 15 %" },
    caseStudy: carbonLoansFr,
  },
  "albert-sustainability-platform": {
    title: "albert — Plateforme de durabilité",
    client: "BAFTA (contrat)",
    category: "Durabilité · Design produit",
    description:
      "Refonte de la boîte à outils carbone d’albert (BAFTA) pour le cinéma et la télévision au Royaume-Uni, pensée pour les personnes qui détiennent les données. Les productions qui commencent leur bilan dès la préproduction sont passées de 30 % à 55 %, et les critères WCAG 2.2 AA respectés de 60 % à 85 %.",
    tags: ["Durabilité", "Entreprise", "Accessibilité"],
    highlight: { value: "30 % → 55 %", label: "des productions commencent en préproduction" },
    caseStudy: albertFr,
  },
  africhange: {
    client: "Freelance pour Africhange Ltd",
    category: "Fintech · Design UX",
    description:
      "Refonte de la façon dont la diaspora envoie de l’argent d’Amérique du Nord vers l’Afrique. Un système de portefeuille a réduit les transferts d’environ 2 heures à environ une minute, avec une inscription plus rapide et quatre façons d’envoyer.",
    tags: ["Fintech", "Refonte", "Recherche"],
    highlight: { value: "1 min", label: "par transfert, contre 2 heures" },
    caseStudy: africhangeFr,
  },
  "carbon-zero": {
    category: "Fintech · Design produit",
    description:
      "Conception du produit « Achetez maintenant, payez plus tard » de Carbon, de l’idée au lancement : un crédit sans intérêt qui permet d’acheter aujourd’hui et d’étaler les paiements, en moins d’une minute.",
    tags: ["Paiement différé", "Fintech", "B2C"],
    highlight: { value: "< 1 min", label: "de l’achat au paiement" },
    caseStudy: carbonZeroFr,
  },
  "e-bills-nibss": {
    title: "E-Bills pour NIBSS",
    client: "SBSC, pour NIBSS",
    category: "Fintech · Entreprise",
    description:
      "Conception de portails par rôle pour la plateforme commune que les banques nigérianes utilisent pour configurer les facturiers et encaisser les paiements de factures, avec une approbation à chaque niveau. NIBSS a déclaré 2 200 milliards de nairas payés via e-BillsPay en 2021.",
    tags: ["Fintech", "Entreprise", "B2B"],
    highlight: { value: "2 200 Md ₦", label: "de paiements de factures en 2021 (NIBSS)" },
    caseStudy: eBillsFr,
  },
  nippyboxes: {
    client: "SBSC (agence de conseil)",
    category: "Logistique · Design produit",
    description:
      "Conception d’une plateforme logistique, un « Uber de la livraison », où l’on compare les transporteurs, réserve et suit ses colis. Lancée avec plus de 50 fournisseurs et plus de 200 coursiers et chauffeurs, elle a dépassé 10 000 utilisateurs le premier mois.",
    tags: ["Logistique", "Mobile", "B2C"],
    highlight: { value: "10 000+", label: "utilisateurs le premier mois" },
    caseStudy: nippyboxesFr,
  },
  coinbycedar: {
    client: "SBSC (agence de conseil)",
    category: "Web3 · Design produit",
    description:
      "Conception d’un portefeuille de cryptomonnaies pour le Web et le mobile, qui rend la gestion d’actifs numériques accessible aux débutants grâce à une charge cognitive réduite, une pédagogie claire et un tableau de bord simple.",
    tags: ["Web3", "Crypto", "Mobile"],
    highlight: { value: "Web + mobile", label: "portefeuille crypto pour débutants" },
    caseStudy: coinbycedarFr,
  },
};

type ArticleText = Pick<Article, "title" | "date" | "readTime" | "tag" | "excerpt">;

export const articlesFr: Record<string, ArticleText> = {
  "design-for-the-person-holding-the-receipt": {
    title: "Concevoir pour la personne qui a le reçu",
    date: "3 octobre 2026",
    readTime: "6 min de lecture",
    tag: "Recherche",
    excerpt:
      "Ce qu’albert et Writesea m’ont appris : la personne qui a l’identifiant est rarement celle qui a les informations. Concevez pour les deux.",
  },
  "mastering-the-8pt-grid": {
    title: "Maîtriser la grille de 8 pt : le secret d’une interface au pixel près",
    date: "21 avril 2025",
    readTime: "6 min de lecture",
    tag: "Design",
    excerpt:
      "La grille de 8 pt n’est pas une contrainte, c’est un raccourci. Voici comment je l’utilise pour construire des interfaces d’une précision qui semble naturelle.",
  },
  "designing-for-everyone": {
    title: "Concevoir pour tout le monde : 5 conseils d’accessibilité que tout designer devrait connaître",
    date: "13 mars 2025",
    readTime: "7 min de lecture",
    tag: "Accessibilité",
    excerpt:
      "L’accessibilité n’est pas une fonctionnalité. C’est le minimum. Cinq choses concrètes à apporter à votre prochaine revue de design.",
  },
  "how-ai-is-shaping-better-ux": {
    title: "Comment l’IA améliore l’UX, que vous le sachiez ou non",
    date: "14 février 2025",
    readTime: "6 min de lecture",
    tag: "IA et design",
    excerpt:
      "L’IA est déjà intégrée aux produits que nous concevons. La comprendre change la façon dont vous prenez vos décisions, pas seulement leur vitesse.",
  },
  "from-flexbox-to-figma": {
    title: "De Flexbox à Figma : comment Flexbox a inspiré l’Auto Layout",
    date: "1er janvier 2025",
    readTime: "6 min de lecture",
    tag: "Figma",
    excerpt:
      "L’Auto Layout ne vient pas de nulle part. Comprendre ses racines CSS vous rend bien meilleur pour l’utiliser, et pour parler aux développeurs.",
  },
  "how-to-prioritize-like-a-pro": {
    title: "Prioriser comme un pro : mener plusieurs projets de design sans perdre la tête",
    date: "5 décembre 2024",
    readTime: "6 min de lecture",
    tag: "Méthode",
    excerpt:
      "La plupart des designers n’ont pas un problème de priorités. Ils ont un problème de clarté. Voici la méthode qui a réglé le mien.",
  },
};

type ExperienceText = { role?: string; location?: string; period?: string; description?: string };

export const experienceFr: Record<number, ExperienceText> = {
  9: {
    role: "Cofondateur, design produit et front-end",
    location: "À distance, Royaume-Uni",
    period: "août 2025 — aujourd’hui",
    description:
      "Cofondateur d’un quiz multijoueur en direct, je dirige le design produit de bout en bout, de la recherche et du design system jusqu’à chaque écran. Je construis le front-end avec Claude Code, avec un ingénieur backend et un chef de produit. Plus de 100 joueurs bêta par bouche-à-oreille, plus de 3 000 questions dans 6 catégories et 3 langues.",
  },
  1: {
    role: "Designer produit",
    location: "À distance",
    period: "oct. 2024 — sept. 2026",
    description:
      "Conception de parcours complets pour une plateforme d’écriture et de publication propulsée par l’IA, de l’inscription à la création de contenu. Lancement d’un générateur de modèles qui a raccourci les délais de mise en marché et allégé le support de 0,5 ETP, et conception de modules d’administration pour les universités et les revendeurs. Tests d’utilisabilité et contribution au design system.",
  },
  2: {
    role: "Designer produit senior (contrat)",
    location: "Londres, Royaume-Uni",
    period: "juil. 2024 — août 2025",
    description:
      "Direction de l’UX d’albert, la plateforme de durabilité de BAFTA pour l’industrie audiovisuelle britannique, de la découverte à la livraison. Recherche avec des productions et des diffuseurs, et refonte de la boîte à outils carbone pour chaque rôle : le taux de conformité WCAG 2.2 AA est passé de 60 % à 85 %, la satisfaction de 3,3 à 4,3 sur 5, et les productions qui commencent en préproduction de 30 % à 55 %.",
  },
  3: {
    role: "Designer produit principal",
    location: "À distance",
    period: "nov. 2022 — mars 2024",
    description:
      "Conception et lancement de produits financiers mobiles sur iOS et Android. Direction de la refonte complète des parcours d’épargne et de paiement différé, avec une hausse de 40 % de l’engagement. Maintien et extension d’un design system évolutif sur plusieurs gammes de produits, et présentation de la stratégie de design à la direction.",
  },
  4: {
    role: "Chercheur UX senior",
    location: "À distance",
    period: "mars 2022 — nov. 2022",
    description:
      "Recherche qualitative et quantitative pour éclairer les décisions produit. Modèles d’architecture de l’information, optimisation des parcours d’inscription et itérations de design qui ont amélioré la rétention de 25 %.",
  },
  5: {
    role: "Designer produit senior",
    location: "Lagos, Nigeria",
    period: "juil. 2021 — mars 2022",
    description:
      "Conception d’applications SaaS B2C et B2B2C axées sur l’utilisabilité et l’accessibilité. Expériences mobiles d’abord, propres à chaque plateforme, en étroite collaboration avec les développeurs pour respecter l’intention de design.",
  },
  6: {
    role: "Designer UX/UI senior",
    location: "Lagos, Nigeria",
    period: "oct. 2020 — juin 2021",
    description:
      "Conception d’E-Bills pour NIBSS (Nigeria Inter-Bank Settlement System), la plateforme commune que les banques nigérianes utilisent pour intégrer les facturiers et encaisser les paiements de factures : 19 rôles utilisateurs répartis entre NIBSS, les banques et les facturiers, avec des approbations à chaque niveau. Conception aussi de produits clients, dont NippyBoxes, une plateforme logistique, et Coinbycedar3, un portefeuille crypto, avec des tests d’utilisabilité et des itérations à partir des résultats.",
  },
  7: {
    role: "Designer produit",
    location: "Lagos, Nigeria",
    period: "déc. 2019 — sept. 2020",
    description:
      "Conception d’expériences de fidélité et de récompenses pour plus de 400 commerçants, des stations-service aux marques de café, au service de plus de 200 000 clients. Façonné la manière dont les entreprises émettent des récompenses et dont les clients les gagnent et les utilisent, sur le Web et le mobile.",
  },
  8: {
    role: "Designer produit et développeur front-end",
    location: "Lagos, Nigeria",
    period: "juin 2019 — déc. 2019",
    description:
      "Là où tout a commencé : concevoir et construire une plateforme pour faire passer la formation professionnelle au numérique. Design et code front-end pour plus de 40 enseignants et plus de 10 000 apprenants.",
  },
};

/** How LinkedIn describes each working relationship. The quotes themselves stay in English, word for word. */
export const testimonialMetaFr: Record<string, { relationship: string; date: string }> = {
  "Nabeel Ishaq": { relationship: "Mon manager chez Writesea", date: "oct. 2026" },
  "Afiola Etomi": { relationship: "Mon manager chez Carbon", date: "mars 2024" },
  "Olumide Olusesi": { relationship: "Membre de mon équipe", date: "mars 2024" },
  "Mojolaade Adegbite": { relationship: "Membre de mon équipe", date: "mars 2024" },
  "Habeeb Sanni": { relationship: "Mon manager chez Softcom", date: "mars 2024" },
  "Samuel Olumoyeke": { relationship: "Mon manager", date: "mai 2021" },
};
