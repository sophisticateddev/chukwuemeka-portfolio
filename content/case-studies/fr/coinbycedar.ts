import type { CaseStudy } from "@/lib/case-study";

const img = (name: string) => `/images/work/coinbycedar/${name}.jpg`;

export const coinbycedarFr: CaseStudy = {
  headline: "Rendre l’achat et la vente de cryptomonnaies simples pour les débutants.",
  roles: ["Designer UX/UI senior", "Direction d’une équipe de 2 designers", "Mobile et Web"],
  summary: {
    problem:
      "Les plateformes crypto supposaient que les utilisateurs comprenaient la finance et parlaient un jargon technique : les débutants étaient dépassés avant même leur première transaction.",
    did:
      "J’ai mené la recherche et l’analyse concurrentielle pendant la pandémie, puis conçu un portefeuille pour le mobile et le Web : inscription avec vérification d’identité (KYC), achat, vente, envoi et réception, un marché en direct et une page d’accueil pensée pour convertir.",
    result:
      "Un portefeuille crypto qui réduit la charge cognitive à chaque étape, avec les soldes visibles d’un coup d’œil et des parcours en langage clair.",
  },
  metrics: [
    { value: "2", label: "plateformes : mobile et Web" },
    { value: "4", label: "actions clés : acheter, vendre, envoyer, recevoir" },
    { value: "2", label: "leaders du marché analysés : Binance, Luno" },
    { value: "KYC", label: "intégré à l’inscription" },
  ],
  hero: {
    mobile: { src: img("wallet"), alt: "Portefeuille Coinbycedar3 affichant le solde total et le solde de chaque cryptomonnaie" },
    desktop: { src: img("web-dashboard"), alt: "Tableau de bord Web de Coinbycedar3 avec la valeur du portefeuille et les avoirs" },
  },
  meta: [
    { label: "Entreprise", value: "Chez SBSC, une agence de conseil en logiciels" },
    { label: "Rôle", value: "Designer UX/UI senior (responsable design)" },
    { label: "Équipe", value: "3 designers, un chef de produit, 2 ingénieurs, un analyste d’affaires" },
    { label: "Plateformes", value: "iOS, Android et Web" },
    { label: "Outils", value: "Figma, Miro, Google Docs, Jira" },
  ],

  context: {
    takeaway: "La crypto était faite pour les initiés. Nous l’avons conçue pour tous les autres.",
    body: [
      "Coinbycedar3 est un portefeuille crypto pour le Web et le mobile : acheter, vendre, envoyer et recevoir des cryptomonnaies, suivre les cours et l’actualité crypto, le tout relié à une passerelle de paiement mondiale.",
      "La plupart des gens ne comprennent pas le trading de cryptomonnaies, et la plupart des plateformes sont trop compliquées. Notre travail : rendre la première transaction rassurante et évidente.",
    ],
    constraints: [
      "Recherche pendant la COVID-19 : tous les entretiens se sont faits à distance",
      "Vérifications d’identité (KYC) strictes pour prévenir la fraude",
    ],
  },

  team: {
    takeaway: "J’ai dirigé le design des deux applications.",
    members: [
      {
        name: "Chukwuemeka Iheonye",
        role: "Designer UX/UI senior",
        owned: "Recherche, analyse concurrentielle, design d’interaction, interfaces mobile et Web; direction de deux designers.",
        me: true,
      },
      { name: "Design", role: "2 designers produit", owned: "Production des interfaces mobile et Web." },
      { name: "Produit et ingénierie", role: "Chef de produit, 2 ingénieurs, analyste d’affaires", owned: "Exigences et développement." },
    ],
  },

  insights: {
    takeaway: "Le principal obstacle du secteur, c’était son propre langage.",
    intro:
      "En raison de la COVID-19, nous avons interrogé des utilisateurs de cryptomonnaies sur Zoom et Google Meet, mené des sondages, ainsi qu’une évaluation heuristique et une analyse concurrentielle.",
    items: [
      { title: "Le jargon exclut", body: "Les plateformes abusaient des termes techniques et supposaient que les utilisateurs connaissaient déjà la finance et la crypto." },
      { title: "Binance gagnait sur le choix", body: "Appréciée pour sa variété de cryptomonnaies et son application simplifiée, accessible aux débutants." },
      { title: "Luno gagnait sur la simplicité", body: "Appréciée pour son utilisabilité et son interface épurée et simple." },
      { title: "Les gens voulaient apprendre en contexte", body: "La pédagogie dans le produit comptait autant que les outils de trading." },
    ],
  },

  process: {
    takeaway: "Étudier les leaders, puis esquisser quelque chose de plus simple.",
    steps: [
      { title: "Analyse comparative", body: "Recensement des concurrents, comparaison des fonctionnalités côte à côte et étude de ce qui faisait le succès de Binance et de Luno." },
      { title: "Esquisses", body: "Remue-méninges et croquis pour simplifier l’achat et la vente." },
      { title: "Design", body: "Parcours mobile et Web haute fidélité, avec des modèles cohérents entre les deux." },
    ],
    artifacts: [
      { src: img("competitors"), alt: "Tableau des concurrents avec leurs notes et leurs téléchargements", caption: "Nos concurrents." },
      { src: img("feature-matrix"), alt: "Matrice de comparaison des fonctionnalités des concurrents", caption: "Comparaison des fonctionnalités des concurrents." },
    ],
  },

  decisions: {
    takeaway: "Chaque décision visait à réduire la charge cognitive.",
    items: [
      {
        title: "Un solde, puis le détail",
        context: "Un portefeuille réparti sur de nombreuses cryptomonnaies est difficile à lire.",
        choice: "Un portefeuille qui affiche d’abord le solde total, puis le solde de chaque cryptomonnaie en dessous.",
        why: "Répond à « où en suis-je? » avant « qu’est-ce que je détiens? ».",
      },
      {
        title: "Recevoir avec un code QR ou une adresse",
        context: "Les longues adresses de portefeuille sont source d’erreurs quand on les partage.",
        choice: "Un écran de réception avec à la fois un code QR et une adresse à copier.",
        why: "Moins de transferts échoués ou erronés.",
      },
      {
        title: "Acheter et vendre sans intermédiaire",
        context: "Beaucoup d’utilisateurs devaient trouver des acheteurs ou des vendeurs à l’extérieur.",
        choice: "Acheter et vendre directement dans l’application, avec une confirmation claire des frais avant chaque ordre.",
        why: "Plus simple et plus sûr, sans surprise sur le prix.",
      },
      {
        title: "Intégrer le KYC à l’inscription",
        context: "Pour un produit financier, la prévention de la fraude n’était pas négociable.",
        choice: "Une vérification d’identité, reconnaissance faciale comprise, intégrée à une inscription courte.",
        why: "La sécurité, sans que l’inscription ressemble à de la paperasse.",
      },
    ],
  },

  mobile: {
    takeaway: "Une application mobile qui rend la première transaction évidente.",
    shots: [
      { src: img("home"), alt: "Accueil avec des cartes d’apprentissage, une liste de suivi et les plus fortes hausses", caption: "Apprentissage, liste de suivi et plus fortes variations." },
      { src: img("market"), alt: "Liste du marché avec les cours et les variations", caption: "Le marché d’un coup d’œil." },
      { src: img("coin-detail"), alt: "Détail du Bitcoin avec graphique de cours et actualités", caption: "Cours, contexte et actualités." },
      { src: img("wallet"), alt: "Portefeuille avec le solde total et le solde de chaque cryptomonnaie", caption: "Le total d’abord, puis chaque cryptomonnaie." },
      { src: img("receive"), alt: "Réception de Bitcoin avec code QR et adresse", caption: "Recevoir avec un code QR." },
      { src: img("send"), alt: "Envoi de cryptomonnaies vers une adresse externe", caption: "Envoyer vers n’importe quelle adresse." },
      { src: img("sell"), alt: "Pavé numérique pour saisir le montant à vendre", caption: "Vendre en toute simplicité." },
      { src: img("confirm"), alt: "Confirmation d’ordre avec les frais", caption: "Les frais affichés avant de confirmer." },
      { src: img("kyc"), alt: "Étape de reconnaissance faciale de la vérification d’identité", caption: "Le KYC intégré à l’inscription." },
    ],
  },

  web: {
    takeaway: "La même simplicité sur un plus grand écran.",
    shots: [
      { src: img("web-dashboard"), alt: "Tableau de bord Web avec le portefeuille et les avoirs", caption: "Tableau de bord du portefeuille." },
      { src: img("web-landing"), alt: "Page d’accueil : acheter et vendre des cryptomonnaies n’a jamais été aussi simple", caption: "Une page d’accueil conçue pour convertir." },
      { src: img("web-coin"), alt: "Page de détail d’une cryptomonnaie avec graphique et panneau d’ordre", caption: "Détail d’une cryptomonnaie avec panneau de trading." },
      { src: img("web-buy"), alt: "Formulaire d’achat de cryptomonnaies avec récapitulatif de l’ordre", caption: "Acheter sur le Web." },
    ],
  },

  outcomes: {
    takeaway: "Un portefeuille crypto conçu pour les personnes que le secteur avait oubliées.",
    items: [
      "Une inscription rapide et sécurisée, avec vérification KYC intégrée",
      "Un portefeuille pour acheter, vendre, envoyer et recevoir",
      "Un tableau de bord avec cours en direct et historique des transactions",
      "Un fil d’actualité crypto intégré à l’expérience",
      "Une page d’accueil pensée pour la conversion et l’acquisition d’utilisateurs",
    ],
  },
};
