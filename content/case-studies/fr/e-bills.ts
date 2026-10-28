import type { CaseStudy } from "@/lib/case-study";

// Client work under NDA. Every image here is a blurred copy: biller, bank and people's names,
// account numbers, fees and figures are obscured. The originals are kept outside this repo.
const img = (name: string) => `/images/work/e-bills/${name}.webp`;

export const eBillsFr: CaseStudy = {
  headline: "Conception de la plateforme que les banques nigérianes utilisent pour configurer les facturiers et encaisser les paiements de factures.",
  roles: ["Designer UX/UI senior", "Un des 5 designers", "Travail avec NIBSS et le personnel des banques"],
  summary: {
    problem:
      "Payer une facture à la banque voulait dire que chaque banque configurait chaque facturier à sa façon. NIBSS avait besoin d’une plateforme commune où n’importe quelle banque pourrait intégrer des facturiers, pour que les guichetiers de tout le pays règlent rapidement la facture d’un client, et pour que d’autres applications puissent se brancher et vendre les mêmes factures.",
    did:
      "Comme l’un des cinq designers, j’ai conçu des portails pour 19 rôles utilisateurs répartis entre NIBSS, les banques et les facturiers : intégration, produits et frais, approbations, transactions et litiges. J’ai travaillé directement avec notre interlocuteur chez NIBSS et le personnel de banques clés pour bien cerner les règles et la documentation, et je me suis rendu en agence pour voir comment les guichetiers géraient alors les factures.",
    result:
      "La plateforme est utilisée par les banques et d’autres institutions financières dans tout le Nigeria. NIBSS a déclaré 1,1 million de transactions e-BillsPay, pour 2 200 milliards de nairas, en 2021.",
  },
  metrics: [
    { value: "2 200 Md ₦", label: "payés via e-BillsPay en 2021 (fiche d’information NIBSS)" },
    { value: "1,1 M", label: "de transactions cette année-là" },
    { value: "3", label: "niveaux sur une même plateforme : NIBSS, banques, facturiers" },
    { value: "19", label: "rôles utilisateurs, chacun avec sa propre vue" },
  ],
  hero: {
    desktop: {
      src: img("nibss-dashboard"),
      alt: "Tableau de bord E-Bills de NIBSS montrant les utilisateurs, les facturiers, les institutions et les demandes non approuvées, avec les noms et les chiffres floutés",
    },
  },
  meta: [
    { label: "Entreprise", value: "Chez SBSC, pour NIBSS (Nigeria Inter-Bank Settlement System)" },
    { label: "Rôle", value: "Designer UX/UI senior" },
    { label: "Équipe", value: "5 designers dirigés par Samuel Olumoyeke, avec des analystes d’affaires et des ingénieurs" },
    { label: "Plateforme", value: "Application Web d’entreprise" },
    { label: "Période", value: "2020 à 2021" },
  ],

  context: {
    takeaway: "Chaque banque et chaque facturier devaient se retrouver au même endroit.",
    body: [
      "NIBSS exploite l’infrastructure de paiement commune aux banques nigérianes. E-Bills est son service de paiement de factures : un client entre dans une agence, ou ouvre l’application de sa banque, et paie par exemple un abonnement télé, l’électricité ou un impôt.",
      "Pour que cela fonctionne partout, il fallait une plateforme d’agrégation unique. Une banque doit configurer un facturier une seule fois, avec ses produits et ses frais. Un guichetier, dans n’importe quelle agence, doit trouver ce facturier et régler la facture en quelques étapes. Le facturier doit voir l’argent arriver et ouvrir un litige quand ce n’est pas le cas. Et NIBSS doit superviser l’ensemble.",
      "Un second besoin s’ajoutait aux portails : des API, pour que des applications de commerçants et de fintechs puissent se brancher et permettre à leurs propres clients de payer les mêmes factures.",
    ],
    constraints: [
      "Travail client sous accord de confidentialité : les noms, numéros de compte, frais et chiffres des écrans sont floutés",
      "Un environnement réglementé où la plupart des changements exigent l’approbation d’une seconde personne",
      "De nombreuses organisations, chacune avec son personnel, ses agences et ses autorisations",
      "Cette étude de cas présente un échantillon des écrans, pas tout le système",
    ],
  },

  team: {
    takeaway: "Cinq designers, et beaucoup de conversations avec les futurs utilisateurs.",
    members: [
      {
        name: "Chukwuemeka Iheonye",
        role: "Designer UX/UI senior",
        owned: "Design des portails, et travail direct avec notre interlocuteur chez NIBSS et le personnel de banques clés pour recueillir les exigences et la documentation.",
        me: true,
      },
      { name: "Samuel Olumoyeke", role: "Designer principal", owned: "Direction du design sur l’ensemble du produit." },
      { name: "Design", role: "3 designers produit", owned: "Le reste des portails." },
      { name: "Analyse d’affaires", role: "Analystes d’affaires", owned: "Conduite de l’essentiel de la recherche et des exigences." },
      { name: "Client et partenaires", role: "Personnel de NIBSS et des banques", owned: "Règles, processus existants et revue des maquettes." },
    ],
  },

  insights: {
    takeaway: "Le plus difficile, ce n’était pas les écrans. C’était d’apprendre les règles.",
    intro:
      "Nos analystes d’affaires ont mené l’essentiel de la recherche. J’ai travaillé avec eux, auprès du personnel de NIBSS et des banques, pour comprendre les besoins de chaque groupe, la façon dont les paiements de factures étaient alors gérés, et si ce que nous construisions résolvait leur problème. Je me suis aussi rendu dans des banques pour observer comment les guichetiers réglaient déjà les factures des clients.",
    items: [
      { title: "Trois organisations, un seul parcours", body: "Un même paiement de facture concerne NIBSS, une banque et un facturier. Chacun devait voir sa propre partie sans voir celle des autres." },
      { title: "Les contrôles passent en premier", body: "Dans une institution financière, rien n’est mis en service sur la seule décision d’une personne. Quelqu’un configure, quelqu’un d’autre approuve." },
      { title: "Un très grand nombre d’utilisateurs", body: "Le personnel de NIBSS, de chaque banque et agence, et de chaque facturier utilise le même système, pour des métiers très différents." },
      { title: "Les règles existaient déjà", body: "Les frais, le règlement et les plafonds suivent des règles fixées par NIBSS. Le design devait rendre ces règles visibles au lieu de laisser les gens s’en souvenir." },
      { title: "Les guichetiers ont besoin de rapidité", body: "Au guichet, un client attend : la configuration se fait donc une fois, à l’avance, et le paiement reste court." },
    ],
  },

  process: {
    takeaway: "Comprendre les règles, cartographier les rôles, puis concevoir la vue de chaque rôle.",
    steps: [
      { title: "Apprendre", body: "Des séances avec notre interlocuteur chez NIBSS et le personnel des banques, la documentation qu’ils nous ont transmise, et des visites en agence pour observer les guichetiers au travail." },
      { title: "Cartographier", body: "Qui fait quoi à chaque niveau, ce qui doit être approuvé, et ce que chaque rôle doit voir ou non." },
      { title: "Concevoir", body: "Une mise en page et des composants communs à tous les portails, pour qu’une personne qui change de rôle retrouve tout au même endroit." },
      { title: "Valider", body: "Les maquettes repartaient chez NIBSS et dans les banques pour les confronter à la réalité du travail." },
    ],
  },

  decisions: {
    takeaway: "Quatre décisions qui ont façonné le système.",
    items: [
      {
        title: "Une plateforme à trois niveaux",
        context: "NIBSS, les banques et les facturiers participent tous à un paiement de facture, mais ils ont des rôles différents et ne doivent pas voir les données des autres.",
        choice: "Chaque niveau configure celui du dessous. NIBSS intègre les institutions, les banques intègrent les facturiers et leurs produits, et les facturiers gèrent leurs propres utilisateurs.",
        why: "La configuration suit la vraie chaîne de responsabilité, et chaque organisation ne voit jamais que sa propre partie.",
      },
      {
        title: "Une seconde personne approuve chaque configuration",
        context: "Un mauvais compte de règlement ou des frais erronés sur un facturier touchent de l’argent réel.",
        choice: "Une paire créateur et approbateur à la banque, et une paire initiateur et autorisateur chez le facturier. Chaque demande enregistre qui l’a faite, qui a décidé, et quand. Un refus est motivé et la demande peut être renvoyée pour un nouvel examen.",
        why: "Cela correspond à la façon dont les banques maîtrisent déjà le risque, et laisse une trace claire si quelque chose est remis en question plus tard.",
        tradeoff: "La configuration prend plus de temps qu’avec une seule étape. Pour ce type de produit, c’est le bon prix à payer.",
      },
      {
        title: "Dix-neuf rôles, chacun avec son propre menu",
        context: "Le système compte un très grand nombre d’utilisateurs aux métiers très différents, et les institutions financières ont besoin de contrôles entre eux. Tout montrer à tout le monde noierait la tâche quotidienne d’un guichetier ou d’un facturier, et permettrait à une seule personne d’en faire trop.",
        choice: "Dix-neuf rôles : trois chez le facturier, neuf à la banque et sept chez NIBSS, la plupart en paires créateur et approbateur. Un créateur d’agence a un approbateur d’agence, un guichetier de paiement a un approbateur de paiement, et ainsi de suite jusqu’à NIBSS. Le menu change selon le rôle, et les administrateurs définissent ce que chaque rôle peut faire dans une grille simple.",
        why: "Personne ne peut à la fois faire et approuver la même modification, chacun apprend un menu court, et il y a moins de place pour l’erreur.",
      },
      {
        title: "Placer la règle à côté du champ",
        context: "Les frais et les plafonds suivent des règles fixées par NIBSS, et une erreur entraîne le rejet de la demande.",
        choice: "La fourchette autorisée s’affiche à côté du champ des frais. Choisir une option désactive tout ce qui ne s’applique plus. Une banque peut organiser les informations qui apparaissent dans le libellé d’un paiement et voir un exemple avant d’enregistrer.",
        why: "Les gens font juste du premier coup, et moins de demandes reviennent de chez l’approbateur.",
      },
    ],
  },

  web: {
    takeaway: "Un échantillon des écrans, du sommet du système vers le bas.",
    intro: "Les informations sensibles sont floutées. La mise en page, la structure et les textes sont tels qu’ils ont été conçus (en anglais).",
    shots: [
      { src: img("institution-type"), alt: "Administrateur NIBSS choisissant le type d’institution à créer : types de banques, prestataires de services de paiement ou super-agent", caption: "NIBSS : choisir le type d’institution à intégrer." },
      { src: img("institution-wizard"), alt: "Étape 1 sur 4 de la création d’une institution, avec les informations bancaires floutées", caption: "NIBSS : une longue configuration découpée en quatre étapes." },
      { src: img("branch-limits"), alt: "Administrateur de banque configurant une agence avec des plafonds de transaction distincts pour l’agence et pour les guichetiers, valeurs floutées", caption: "Banque : configuration d’une agence, avec des plafonds pour l’agence et ses guichetiers." },
      { src: img("add-product"), alt: "Utilisateur de banque ajoutant le produit d’un facturier avec le type de montant et les options de frais, détails floutés", caption: "Banque : ajouter le produit d’un facturier et ses frais." },
      { src: img("narration"), alt: "Écran de libellé où les informations du paiement et du facturier sont ordonnées comme elles apparaîtront dans la description du paiement", caption: "Banque : organiser ce qui apparaît dans le libellé d’un paiement." },
      { src: img("billing"), alt: "Écran de facturation avec la fréquence des frais et la personne qui les supporte; choisir « hebdomadaire » désactive l’option payeur", caption: "Banque : un choix désactive les options qui ne s’appliquent plus." },
      { src: img("approvals"), alt: "Liste de l’approbateur avec les facturiers en attente d’approbation, noms et numéros floutés", caption: "Banque : la file de l’approbateur, avec les demandes resoumises signalées." },
      { src: img("permissions"), alt: "Grille d’autorisations montrant ce qu’un rôle peut approuver, traiter, consulter, modifier et supprimer", caption: "Banque : ce que chaque rôle peut faire, dans une seule grille." },
      { src: img("biller-create-user"), alt: "Administrateur facturier créant un utilisateur avec un rôle, un canal, un État et des produits attribués, détails floutés", caption: "Facturier : créer un utilisateur, qui doit ensuite être approuvé." },
      { src: img("biller-approvals"), alt: "Liste de l’autorisateur facturier avec les utilisateurs en attente d’approbation, noms floutés", caption: "Facturier : l’autorisateur approuve ou refuse." },
    ],
  },

  outcomes: {
    takeaway: "Une plateforme que les banques du pays partagent.",
    items: [
      "Utilisée par les banques et d’autres institutions financières dans tout le Nigeria pour intégrer des facturiers et encaisser les paiements de factures",
      "NIBSS a déclaré 1,1 million de transactions e-BillsPay pour 2 200 milliards de nairas en 2021 (fiche d’information e-Payments de NIBSS, janvier à décembre 2021)",
      "Les factures peuvent être payées en agence, en banque en ligne et mobile, par USSD et par l’intermédiaire d’agents",
      "Dix-neuf rôles utilisateurs répartis entre NIBSS, les banques et les facturiers, avec des approbations et une trace de qui a fait quoi à chaque niveau",
      "Des API pour que des applications de commerçants et de fintechs permettent à leurs propres clients de payer les mêmes factures",
    ],
  },

  reflection: {
    takeaway: "Sur un produit d’entreprise, le travail de design, c’est surtout de la compréhension.",
    learned: [
      "La majeure partie de mon temps a servi à comprendre comment les banques et NIBSS fonctionnaient déjà. Une fois les règles claires, les écrans sont venus facilement.",
      "Travailler directement avec les futurs utilisateurs, et pas seulement à partir de documents, a permis de repérer les malentendus tôt.",
      "Une mise en page cohérente entre les portails comptait plus que n’importe quel écran, parce que les mêmes personnes passent d’un rôle à l’autre.",
    ],
    next: {
      title: "Ce que je ferais autrement",
      body: "Je retournerais dans les mêmes agences avec les maquettes en main. J’ai observé le travail des guichetiers avant de commencer, et nous avons revu les maquettes avec NIBSS et les banques, mais regarder un guichetier accomplir une tâche sur les nouveaux écrans nous en aurait appris davantage qu’une réunion de revue.",
    },
  },
};
