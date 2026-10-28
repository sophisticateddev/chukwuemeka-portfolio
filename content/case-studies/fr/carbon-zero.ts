import type { CaseStudy } from "@/lib/case-study";

const img = (name: string) => `/images/work/carbon-zero/${name}.jpg`;

export const carbonZeroFr: CaseStudy = {
  liveUrl: "https://getcarbon.co",
  liveLabel: "Visiter Carbon",
  headline: "Achetez maintenant, payez plus tard à 0 % d’intérêt, de l’achat au paiement en moins d’une minute.",
  roles: ["Designer produit principal", "Animateur du sprint de design", "De la recherche à la livraison aux développeurs"],
  summary: {
    problem:
      "Carbon Zero permet d’acheter aujourd’hui et de payer en plusieurs fois à 0 % d’intérêt, mais le parcours était lent, demandait trop d’informations et ne mettait pas le « zéro » en évidence.",
    did:
      "J’ai mené la découverte avec des clients, des commerçants et des parties prenantes, animé un sprint de design, et repensé le tableau de bord ainsi que les parcours d’achat, de paiement et de remboursement.",
    result:
      "Un parcours d’achat plus rapide avec une option de paiement immédiat, une action « Payer en avance » bien visible qui a amélioré les remboursements anticipés, et des reçus partageables auxquels les commerçants font confiance.",
  },
  metrics: [
    { value: "0 %", label: "d’intérêt, rappelé à chaque étape" },
    { value: "< 1 min", label: "visée de l’achat au paiement" },
    { value: "4", label: "versements pour étaler un achat" },
    { value: "Top 3", label: "objectif à long terme parmi les moyens de paiement préférés" },
  ],
  hero: {
    mobile: { src: img("new-purchase"), alt: "Écran de nouvel achat Carbon Zero avec un plan de paiement réparti en versements" },
  },
  meta: [
    { label: "Entreprise", value: "Carbon MFB" },
    { label: "Rôle", value: "Designer produit principal" },
    { label: "Équipe", value: "3 designers, 1 chef de produit, 5 ingénieurs, 1 scrum master" },
    { label: "Plateformes", value: "iOS et Android" },
    { label: "Outils", value: "Figma, Miro, Confluence, Jira" },
  ],

  context: {
    takeaway: "Le crédit ne fonctionne que si les gens lui font confiance et le comprennent en quelques secondes.",
    body: [
      "Carbon Zero est un produit de paiement différé : les clients achètent aujourd’hui et étalent leurs paiements sans intérêt. L’objectif à long terme : en faire l’un des trois moyens de paiement préférés des consommateurs.",
      "Pour y arriver, tout le parcours devait sembler instantané et la promesse « 0 % d’intérêt » devait être impossible à manquer, tout en protégeant l’entreprise contre les remboursements manqués.",
    ],
    constraints: [
      "Le remboursement protège l’entreprise : il devait rester visible sans paraître menaçant",
      "L’obtention d’une carte pouvait prendre jusqu’à une semaine, trop lent pour un achat en magasin",
      "Sous accord de confidentialité : les informations personnelles des écrans ci-dessous sont floutées",
    ],
  },

  team: {
    takeaway: "J’ai dirigé le design et animé le sprint qui a façonné le produit.",
    members: [
      {
        name: "Chukwuemeka Iheonye",
        role: "Designer produit principal",
        owned: "Découverte, animation du sprint, design d’interaction, interface et prototypes; direction de deux designers.",
        me: true,
      },
      { name: "Design", role: "2 designers produit", owned: "Production des interfaces et contrôle qualité du design." },
      { name: "Produit et ingénierie", role: "Chef de produit, 5 ingénieurs, scrum master", owned: "Périmètre, développement et livraison." },
    ],
  },

  process: {
    takeaway: "Un sprint de design nous a menés des risques aux croquis, puis à un plan.",
    steps: [
      { title: "Écouter", body: "Des échanges avec des clients, des commerçants et des parties prenantes pour comprendre ce qui ralentissait les achats." },
      { title: "Cartographier", body: "Une carte de sprint avec l’objectif à long terme, les indicateurs à suivre, les risques et des questions « Comment pourrions-nous… »." },
      { title: "Esquisser et décider", body: "Des Crazy 8 où aucune idée n’était trop folle, puis un vote sur les concepts à prototyper." },
    ],
    artifacts: [
      { src: img("research-map"), alt: "Carte de sprint avec l’objectif à long terme, les indicateurs et les risques", caption: "Cartographier les objectifs, les indicateurs et les risques." },
      { src: img("crazy-8"), alt: "Croquis Crazy 8 épinglés sur un tableau de décision", caption: "Des croquis Crazy 8, puis une décision." },
    ],
  },

  decisions: {
    takeaway: "Chaque décision rendait l’achat plus rapide ou le remboursement plus simple.",
    items: [
      {
        title: "Payer par virement, sur place",
        context: "Obtenir une carte Carbon pouvait prendre jusqu’à une semaine, beaucoup trop pour quelqu’un qui attend à la caisse.",
        choice: "Ajout du virement vers le compte du commerçant comme option de paiement, en plus de la carte.",
        why: "Les clients peuvent finaliser leur achat immédiatement, ce que « acheter maintenant » devrait vouloir dire.",
      },
      {
        title: "Choisir le montant et l’étalement ensemble",
        context: "L’ancien parcours demandait des informations sur plusieurs écrans avant d’afficher un plan.",
        choice: "Un seul écran pour saisir le montant, voir le plan de versements et ajuster l’acompte.",
        why: "Moins d’étapes, et le 0 % d’intérêt est visible juste à côté des chiffres.",
      },
      {
        title: "Rendre « Payer en avance » impossible à manquer",
        context: "Le crédit impayé nuit à l’entreprise, et le remboursement anticipé était caché.",
        choice: "Un bouton « Payer en avance » bien visible dans le détail de l’achat, avec l’échéancier complet en dessous.",
        why: "Les remboursements anticipés se sont améliorés sans que les clients se sentent relancés.",
      },
      {
        title: "Un reçu auquel les commerçants peuvent se fier",
        context: "Il n’y avait aucun moyen de prouver qu’un paiement avait bien été effectué.",
        choice: "Un reçu de transaction partageable pour chaque achat.",
        why: "Les clients présentent une preuve de paiement instantanément, ce qui crée la confiance des deux côtés du comptoir.",
      },
    ],
  },

  before: {
    takeaway: "Le point de départ : une bonne idée cachée derrière un parcours lent.",
    shots: [
      { src: img("before-dashboard"), alt: "Ancien tableau de bord Carbon Zero, vide", caption: "Un point de départ vide et peu clair." },
      { src: img("before-fund"), alt: "Ancien formulaire de financement d’un achat, avec de nombreux champs", caption: "Trop de questions dès le départ." },
      { src: img("before-repayment"), alt: "Ancien écran de détails du remboursement", caption: "Un plan difficile à lire." },
    ],
  },

  mobile: {
    takeaway: "Acheter, étaler et rembourser, en misant sur la vitesse et la clarté.",
    shots: [
      { src: img("welcome"), alt: "Écran d’accueil Carbon Zero : achetez ce que vous voulez, payez en 4 fois à 0 % d’intérêt", caption: "La promesse, dès le départ." },
      { src: img("dashboard"), alt: "Tableau de bord avec la limite de dépenses et l’historique des achats", caption: "La limite de dépenses et chaque achat d’un coup d’œil." },
      { src: img("new-purchase"), alt: "Nouvel achat avec plan de versements et curseur d’acompte", caption: "Le montant et le plan sur un seul écran." },
      { src: img("payment-options"), alt: "Choix entre la carte Carbon et le virement vers le compte du commerçant", caption: "Payer par carte ou par virement." },
      { src: img("purchase-summary"), alt: "Récapitulatif de l’achat avec les frais et le montant dû aujourd’hui", caption: "Aucune surprise au paiement." },
      { src: img("purchase-details"), alt: "Détail de l’achat avec le bouton Payer en avance et l’échéancier", caption: "« Payer en avance », bien en vue." },
      { src: img("repay"), alt: "Écran de remboursement : prochain versement ou remboursement total", caption: "Rembourser en deux touches." },
      { src: img("receipt"), alt: "Reçu de transaction partageable (informations personnelles floutées)", caption: "Une preuve de paiement à partager." },
    ],
  },

  outcomes: {
    takeaway: "Un parcours de paiement différé construit autour de la vitesse et de la confiance.",
    items: [
      "Un nouveau tableau de bord qui montre les achats en cours et passés d’un coup d’œil",
      "Un parcours d’achat simplifié, avec le montant et les versements ensemble",
      "Le virement ajouté pour que les achats puissent se faire sur place",
      "Un remboursement anticipé bien visible, qui a amélioré les remboursements anticipés",
      "Des reçus partageables qui donnent aux commerçants une preuve de paiement",
    ],
  },
};
