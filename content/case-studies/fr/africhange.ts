import type { CaseStudy } from "@/lib/case-study";

const img = (name: string) => `/images/work/africhange/${name}.jpg`;

export const africhangeFr: CaseStudy = {
  liveUrl: "https://africhange.com",
  liveLabel: "Visiter Africhange",
  headline: "Des transferts de l’Amérique du Nord vers l’Afrique ramenés de 2 heures à environ une minute.",
  roles: ["Designer principal", "De la recherche au design system", "Mobile, Web et site vitrine"],
  summary: {
    problem:
      "Beaucoup d’applications envoient de l’argent vers l’Afrique, mais peu le font rapidement et sans accroc. Les transferts prenaient jusqu’à deux heures, et les inscriptions interminables renvoyaient les gens vers des solutions informelles.",
    did:
      "J’ai mené la recherche avec des utilisateurs actuels et potentiels au Canada et en Afrique, puis conçu une expérience centrée sur un portefeuille, une inscription plus rapide, de nouvelles façons d’envoyer et un système de parrainage, sur le mobile, le Web et un site vitrine.",
    result:
      "Un système de portefeuille qui réduit le délai de transfert d’environ 2 heures à environ une minute, avec une inscription réduite à l’essentiel.",
  },
  metrics: [
    { value: "~1 min", label: "par transfert, contre ~2 heures" },
    { value: "10", label: "utilisateurs interrogés au Canada et en Afrique" },
    { value: "4", label: "façons d’envoyer de l’argent" },
    { value: "3", label: "supports : application mobile, application Web, site Web" },
  ],
  hero: {
    mobile: { src: img("wallet"), alt: "Portefeuille Africhange affichant le solde en dollars canadiens et les transferts récents" },
    desktop: { src: img("web-dashboard"), alt: "Tableau de bord Web d’Africhange avec les soldes et les transferts récents" },
  },
  meta: [
    { label: "Entreprise", value: "Freelance, pour Africhange Ltd" },
    { label: "Rôle", value: "Designer principal (UX et UI)" },
    { label: "Équipe", value: "2 designers, un chef de produit, un responsable croissance, 2 ingénieurs" },
    { label: "Plateformes", value: "iOS, Android, application Web, site vitrine" },
    { label: "Outils", value: "Figma, Miro, Illustrator, Zoom" },
  ],

  context: {
    takeaway: "Envoyer de l’argent à sa famille ne devrait pas prendre plus de temps qu’une pause café.",
    body: [
      "Africhange permet aux personnes vivant en Amérique du Nord d’envoyer de l’argent vers l’Afrique. Le marché est encombré, mais le problème des transferts rapides et fluides vers et depuis l’Afrique n’était toujours pas résolu.",
      "La mission : repenser l’expérience pour que le produit se démarque sur ce qui compte le plus pour ses utilisateurs : la rapidité, la confiance et de bons taux.",
    ],
  },

  team: {
    takeaway: "J’ai dirigé le design, de la recherche au produit et au design system.",
    members: [
      {
        name: "Chukwuemeka Iheonye",
        role: "Designer principal",
        owned: "Plan de recherche, entretiens, synthèse, parcours utilisateurs, design system, interfaces mobile et Web, prototypes.",
        me: true,
      },
      { name: "Design", role: "Designer produit", owned: "Collaboration sur les interfaces de tout le produit." },
      { name: "Produit et ingénierie", role: "Chef de produit, responsable croissance, 2 ingénieurs", owned: "Priorités, croissance et développement." },
    ],
  },

  insights: {
    takeaway: "La rapidité et la confiance l’emportent sur tout le reste, y compris le taux.",
    intro:
      "J’ai recruté 6 utilisateurs actuels et 4 utilisateurs potentiels vivant au Canada et dans plusieurs pays d’Afrique, et mené des entretiens et des sondages à partir d’un plan de recherche et d’un guide d’entretien écrits.",
    items: [
      { title: "La rapidité, c’est le produit", body: "Attendre jusqu’à deux heures pour un transfert était de loin le plus gros point de friction." },
      { title: "Une inscription laborieuse fait fuir", body: "Certains utilisaient des services informels sans aucune inscription, juste pour éviter une inscription et un KYC interminables." },
      { title: "La confiance se gagne par la fiabilité", body: "Les utilisateurs faisaient confiance à Africhange parce que leurs transferts aboutissaient toujours. Il fallait préserver cela." },
      { title: "L’argent circule selon un calendrier", body: "Beaucoup de transferts sont récurrents, comme l’aide à la famille : les programmer ferait gagner un vrai temps." },
    ],
  },

  process: {
    takeaway: "Des entretiens aux croquis, puis à un mini design system.",
    steps: [
      { title: "Synthétiser", body: "Diagramme d’affinités, carte d’empathie, Crazy 8, plan du site et parcours utilisateurs." },
      { title: "Esquisser", body: "Captures d’écran et enregistrements de l’ancienne application, puis croquis de solutions sur papier." },
      { title: "Systématiser", body: "Un mini design system avant la haute fidélité, pour que chaque écran reste cohérent." },
    ],
    artifacts: [
      { src: img("sketches"), alt: "Croquis sur papier des nouveaux écrans d’Africhange", caption: "Premiers croquis sur papier." },
      { src: img("design-system"), alt: "Mini design system avec icônes, couleurs et composants", caption: "Un mini design system pour garder la cohérence." },
    ],
  },

  decisions: {
    takeaway: "Quatre décisions qui ont accéléré les envois et réduit le coût de la croissance.",
    items: [
      {
        title: "Mettre un portefeuille au centre",
        context: "Chaque transfert dépendait d’un trajet de banque à banque qui pouvait durer des heures.",
        choice: "Un portefeuille qui détient les fonds, pour que les transferts se règlent depuis le solde.",
        why: "Le délai de transfert est passé d’environ 2 heures à environ une minute.",
      },
      {
        title: "Demander moins à l’inscription",
        context: "Une inscription longue poussait les gens vers des solutions informelles.",
        choice: "Ne recueillir que le strict minimum à l’inscription et demander le reste quand il devient nécessaire.",
        why: "Moins d’abandons dès la toute première étape.",
      },
      {
        title: "Envoyer de l’argent comme on pense à ses proches",
        context: "Les utilisateurs envoient à leur famille, à leurs amis et à des comptes bancaires, pas à des « bénéficiaires ».",
        choice: "Quatre façons d’envoyer : à des utilisateurs d’Africhange, à des bénéficiaires enregistrés, à des contacts du téléphone et à des comptes bancaires.",
        why: "Moins d’étapes pour les transferts les plus fréquents.",
      },
      {
        title: "Laisser les utilisateurs faire grandir le produit",
        context: "Le bouche-à-oreille était déjà la façon dont beaucoup d’utilisateurs découvraient Africhange.",
        choice: "Un système de parrainage avec des codes, des liens à partager et des revenus de parrainage visibles.",
        why: "Un canal d’acquisition moins coûteux qui récompense les utilisateurs fidèles.",
      },
    ],
  },

  mobile: {
    takeaway: "Une application mobile construite autour du portefeuille.",
    shots: [
      { src: img("signup"), alt: "Formulaire d’inscription court", caption: "Une inscription réduite à l’essentiel." },
      { src: img("home"), alt: "Écran d’accueil avec le solde disponible et le bouton pour approvisionner le portefeuille", caption: "Votre solde, bien en vue." },
      { src: img("wallet"), alt: "Portefeuille avec le solde et l’historique des transferts", caption: "Chaque transfert et son statut." },
      { src: img("send-money"), alt: "Envoi d’argent vers un compte bancaire avec conversion au taux en direct", caption: "Envoyer avec le taux affiché d’emblée." },
      { src: img("referral"), alt: "Écran de parrainage avec revenus, code et options de partage", caption: "Un parrainage qui rapporte." },
    ],
  },

  web: {
    takeaway: "La même expérience sur le Web, plus un site vitrine pour attirer de nouveaux utilisateurs.",
    shots: [
      { src: img("web-dashboard"), alt: "Tableau de bord Web avec les soldes du portefeuille et les transactions", caption: "Tableau de bord Web." },
      { src: img("web-send"), alt: "Formulaire Web d’envoi d’argent", caption: "Envoyer de l’argent sur le Web." },
      { src: img("web-withdraw"), alt: "Parcours Web de retrait de fonds", caption: "Retirer des fonds." },
      { src: img("web-login"), alt: "Écran de connexion Web", caption: "Connexion." },
    ],
  },

  outcomes: {
    takeaway: "Des transferts plus rapides, un démarrage plus simple et de nouveaux leviers de croissance.",
    items: [
      "Un système de portefeuille qui ramène le délai de transfert d’environ 2 heures à environ une minute",
      "Une inscription rapide, avec un minimum d’informations",
      "Quatre façons d’envoyer : utilisateurs d’Africhange, bénéficiaires, contacts et comptes bancaires",
      "Un système de parrainage pour stimuler l’acquisition organique",
      "Livré sur le mobile, l’application Web et le site vitrine",
    ],
  },
};
