import type { CaseStudy } from "@/lib/case-study";

const img = (name: string) => `/images/work/nippyboxes/${name}.jpg`;

export const nippyboxesFr: CaseStudy = {
  headline: "Conception d’un « Uber de la livraison » qui a dépassé 10 000 utilisateurs dès son premier mois.",
  roles: ["Designer produit", "Application client et plateforme partenaires", "De la recherche aux tests d’utilisabilité"],
  summary: {
    problem:
      "Les particuliers et les entreprises qui expédiaient des colis ne pouvaient pas comparer les transporteurs, payaient trop cher parce que les colis étaient mal mesurés, et faisaient rarement confiance aux délais de livraison.",
    did:
      "J’ai interrogé 15 expéditeurs, cartographié les parcours de trois types d’utilisateurs, et conçu une application mobile client ainsi qu’une plateforme Web permettant aux propriétaires de flottes de gérer leurs véhicules, leurs chauffeurs et leurs livraisons.",
    result:
      "Les deux côtés de la plateforme étaient au rendez-vous au lancement : plus de 50 fournisseurs et plus de 200 coursiers et chauffeurs côté offre, et plus de 10 000 utilisateurs qui ont réservé des livraisons dès le premier mois.",
  },
  metrics: [
    { value: "10 000+", label: "utilisateurs le premier mois" },
    { value: "200+", label: "coursiers et chauffeurs au lancement" },
    { value: "50+", label: "fournisseurs au lancement" },
    { value: "2", label: "produits : application client et application Web partenaires" },
  ],
  hero: {
    mobile: { src: img("compare-services"), alt: "Réservation de livraison NippyBoxes comparant les prix de quatre transporteurs" },
    desktop: { src: img("web-dashboard"), alt: "Tableau de bord partenaire de NippyBoxes avec des statistiques de livraison" },
  },
  meta: [
    { label: "Entreprise", value: "Chez SBSC, une agence de conseil en logiciels" },
    { label: "Rôle", value: "Designer produit (UX et UI)" },
    { label: "Équipe", value: "2 designers, un chef de produit, 2 analystes d’affaires, 4 ingénieurs" },
    { label: "Plateformes", value: "Application mobile et application Web" },
    { label: "Outils", value: "Figma, Miro, Illustrator, Zoom" },
  ],

  context: {
    takeaway: "Au Nigeria, envoyer un colis, c’était deviner le prix et espérer qu’il arrive.",
    body: [
      "NippyBoxes est une plateforme de réservation et de gestion logistique : à la fois une entreprise de livraison avec sa propre flotte et un agrégateur de transporteurs tiers, pour les livraisons locales, entre États et internationales.",
      "Elle devait fonctionner pour trois profils très différents : les particuliers qui envoient un colis, les entreprises qui expédient régulièrement, et les propriétaires de flottes qui gèrent véhicules et chauffeurs.",
    ],
  },

  team: {
    takeaway: "J’ai travaillé sur les deux côtés de la plateforme.",
    members: [
      {
        name: "Chukwuemeka Iheonye",
        role: "Designer produit",
        owned: "Entretiens, parcours utilisateurs, design system, application mobile client, application Web partenaires, tests d’utilisabilité.",
        me: true,
      },
      { name: "Design", role: "Designer produit", owned: "Collaboration sur l’interface et le site vitrine." },
      { name: "Produit et ingénierie", role: "Chef de produit, 2 analystes d’affaires, 4 ingénieurs", owned: "Exigences et développement." },
    ],
  },

  insights: {
    takeaway: "Les gens ne voulaient pas le transporteur le moins cher. Ils voulaient choisir en confiance.",
    intro:
      "Nous avons interrogé 15 personnes, petites entreprises et particuliers, en personne et à distance, et mené un sondage sur les plateformes logistiques utilisées et pourquoi.",
    items: [
      { title: "Impossible de comparer", body: "80 % des personnes interrogées n’avaient pas le temps de consulter plusieurs plateformes pour trouver le meilleur prix." },
      { title: "Des prix qui semblaient inventés", body: "Des mesures de colis imprécises entraînaient des surfacturations." },
      { title: "Un suivi au jugé", body: "Beaucoup de plateformes n’utilisaient pas le GPS, d’où des problèmes de ramassage, de livraison et de suivi." },
      { title: "Peu de confiance", body: "La plupart des participants ne croyaient pas que leur colis arriverait à l’heure." },
    ],
  },

  process: {
    takeaway: "Des séances de remue-méninges aux parcours utilisateurs, puis à un mini design system.",
    steps: [
      { title: "Prioriser", body: "Des séances de remue-méninges avec l’équipe ont transformé la recherche et les demandes des parties prenantes en fonctionnalités clés." },
      { title: "Cartographier", body: "Des parcours utilisateurs pour les clients, les entreprises et les partenaires de flotte." },
      { title: "Esquisser et systématiser", body: "Croquis sur papier, maquettes fonctionnelles, puis un mini design system pour la typographie, les couleurs et les composants." },
    ],
    artifacts: [
      { src: img("user-flow"), alt: "Diagramme du parcours utilisateur NippyBoxes", caption: "Cartographie du parcours de réservation." },
      { src: img("sketches"), alt: "Croquis d’écrans de l’application sur papier", caption: "Esquisser avant les pixels." },
      { src: img("colours"), alt: "Palette de couleurs du design system NippyBoxes", caption: "Styles de couleur." },
      { src: img("components"), alt: "Bibliothèque de composants avec boutons, champs et sélecteurs de date", caption: "Composants de base." },
    ],
  },

  decisions: {
    takeaway: "Les décisions qui ont rendu la plateforme digne de confiance.",
    items: [
      {
        title: "Afficher le prix de chaque transporteur côte à côte",
        context: "Les gens ne pouvaient pas comparer les prestataires logistiques sans consulter chacun d’eux.",
        choice: "La réservation se termine par un choix de services de livraison, chacun avec son prix et son heure de ramassage estimée.",
        why: "C’est la comparaison des prix qui a suscité le plus d’intérêt lors des tests avec les utilisateurs.",
      },
      {
        title: "Un prix au poids",
        context: "La surfacturation venait d’une taille de colis devinée.",
        choice: "Les détails et le poids du colis sont saisis pendant la réservation pour calculer le prix.",
        why: "Des prix plus justes et plus prévisibles.",
      },
      {
        title: "Garder les paiements en séquestre",
        context: "Le paiement valide la réservation, mais il arrive qu’une livraison échoue.",
        choice: "Un portefeuille avec séquestre, pour que les remboursements soient simples en cas de problème.",
        why: "Les clients paient rapidement sans craindre de ne pas récupérer leur argent.",
      },
      {
        title: "Donner aux propriétaires de flottes leur propre outil",
        context: "Les partenaires devaient s’inscrire, faire vérifier leurs documents et gérer véhicules et chauffeurs.",
        choice: "Une plateforme Web dédiée avec vérification guidée, gestion de la flotte et des chauffeurs, et statistiques de livraison.",
        why: "Le côté offre de la plateforme devait être aussi simple que le côté demande.",
      },
    ],
  },

  mobile: {
    takeaway: "Pour les clients : réserver, comparer, payer et suivre depuis une seule application.",
    shots: [
      { src: img("register"), alt: "Inscription avec seulement un nom et un numéro de téléphone", caption: "S’inscrire avec un nom et un numéro." },
      { src: img("home"), alt: "Accueil avec livraison locale, entre États et internationale", caption: "Local, entre États ou international." },
      { src: img("compare-services"), alt: "Comparaison de quatre services de livraison avec leurs prix", caption: "Comparer les transporteurs, puis choisir." },
      { src: img("wallet"), alt: "Portefeuille avec solde et historique des transactions", caption: "Un portefeuille adossé à un séquestre." },
    ],
  },

  web: {
    takeaway: "Pour les partenaires : une plateforme Web pour gérer une entreprise de livraison.",
    shots: [
      { src: img("web-dashboard"), alt: "Tableau de bord partenaire avec statistiques de livraison", caption: "Les statistiques de livraison d’un coup d’œil." },
      { src: img("web-onboarding"), alt: "Inscription partenaire avec choix du type de partenaire", caption: "Une inscription partenaire guidée." },
      { src: img("web-fleets"), alt: "Tableau de gestion des flottes", caption: "Gérer les flottes actives et inactives." },
      { src: img("web-drivers"), alt: "Tableau de gestion des chauffeurs", caption: "Inviter et suivre les chauffeurs." },
    ],
  },

  outcomes: {
    takeaway: "Une plateforme biface qui s’est remplie rapidement.",
    items: [
      "Plus de 10 000 utilisateurs le premier mois après le lancement",
      "Plus de 50 fournisseurs et plus de 200 coursiers et chauffeurs sur la plateforme au lancement",
      "Comparaison des prix entre prestataires logistiques",
      "Estimations au poids pour des prix plus justes",
      "Une inscription fluide pour les clients et les partenaires",
      "Suivi des colis et portefeuille avec séquestre",
      "Les tests ont confirmé une inscription plus simple et un fort intérêt pour la comparaison des prix; ils ont aussi montré que l’attribution des chauffeurs était difficile et que la page d’accueil ne mettait pas assez le produit en valeur, deux points intégrés à l’itération suivante",
    ],
  },
};
