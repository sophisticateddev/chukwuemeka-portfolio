import type { CaseStudy } from "@/lib/case-study";
import { carbonLoans } from "../carbon-loans";

const img = (name: string) => `/images/work/carbon-loans/${name}.jpg`;

export const carbonLoansFr: CaseStudy = {
  liveUrl: "https://getcarbon.co",
  liveLabel: "Visiter Carbon",
  headline: "+20 % de demandes de prêt et −10 % de mauvais prêts, pour une banque de plus de 3 millions de clients.",
  roles: ["Designer produit principal", "Direction d’une équipe de 2 designers", "De la recherche à la livraison aux développeurs"],
  summary: {
    problem:
      "Les prêts sont au cœur de l’activité de Carbon, mais les clients étaient perdus face à des écrans verbeux, des offres floues et des refus sans explication : beaucoup ne contractaient jamais les prêts auxquels ils avaient droit.",
    did:
      "J’ai dirigé la refonte de bout en bout : entretiens avec les parties prenantes, recherche auprès de 15 clients et plus de 2 700 réponses à un sondage, puis un nouveau tableau de bord des prêts et de nouveaux parcours de demande, d’offre, de relevé bancaire et de remboursement.",
    result:
      "Chaque objectif atteint ou dépassé : demandes de prêt en hausse de 20 % pour un objectif de 15 %, abandons en baisse de 10 % et prêts non performants en baisse de 10 %. Plus de gens ont emprunté, et plus d’entre eux ont remboursé.",
  },
  metrics: [
    { value: "+20 %", label: "de demandes de prêt (objectif : +15 %)" },
    { value: "−10 %", label: "d’abandons de prêt (objectif atteint)" },
    { value: "−10 %", label: "de prêts non performants" },
    { value: "3 M+", label: "clients sur la plateforme" },
  ],
  hero: {
    mobile: { src: img("dashboard"), alt: "Tableau de bord des prêts Carbon repensé, avec le montant restant à payer, les prêts actifs et l’historique" },
  },
  meta: [
    { label: "Entreprise", value: "Carbon MFB" },
    { label: "Rôle", value: "Designer produit principal" },
    { label: "Équipe", value: "3 designers, 1 chef de produit, 6 ingénieurs, 1 testeur QA, 1 scrum master" },
    { label: "Plateformes", value: "iOS et Android" },
    { label: "Outils", value: "Figma, FigJam, Confluence, Jira" },
  ],

  context: {
    takeaway: "Le crédit fait tourner l’économie, et le produit de prêt de Carbon gênait ses propres clients.",
    body: [
      "Carbon est une banque numérique axée sur le crédit : prêts instantanés, paiement différé et épargne. Les prêts sont au cœur de l’activité, donc la moindre confusion se traduit directement par des revenus et de la confiance perdus.",
      "L’objectif : repenser l’expérience pour récompenser les clients fidèles, rendre le parcours plus facile à comprendre et améliorer les marges en réduisant les prêts proposés mais jamais contractés.",
    ],
    constraints: [
      "Un produit en production avec des millions de clients : pas de changement brutal",
      "Les règles de prêt et les décisions de crédit relevaient d’une autre équipe",
      "Sous accord de confidentialité : les données sensibles des écrans ci-dessous sont floutées",
    ],
  },

  team: {
    takeaway: "J’ai dirigé le design au sein d’une équipe pluridisciplinaire de douze personnes.",
    members: [
      {
        name: "Chukwuemeka Iheonye",
        role: "Designer produit principal",
        owned: "Recherche, cadrage du problème, design d’interaction, interface et prototypes; direction de deux designers, en partenariat avec le produit et l’ingénierie.",
        me: true,
      },
      { name: "Design", role: "2 designers produit", owned: "Production des interfaces et contrôle qualité du design sur tous les parcours." },
      { name: "Produit et ingénierie", role: "Chef de produit, 6 ingénieurs, QA, scrum master", owned: "Périmètre, développement, tests et livraison." },
    ],
  },

  insights: {
    takeaway: "Les clients n’évitaient pas les prêts. Ils évitaient la confusion.",
    intro:
      "Nous avons interrogé 15 clients sur les raisons pour lesquelles ils ne contractaient pas de prêt, et un sondage a recueilli plus de 2 700 réponses. Un diagramme d’affinités a transformé ce que nous avions entendu en thèmes clairs.",
    items: [
      { title: "Les offres ne correspondaient pas au montant", body: "Les durées n’étaient pas adaptées au prêt. Un prêt de 2 000 ₦ ne devrait pas s’accompagner d’une durée de 3 mois." },
      { title: "Un refus ressemblait à une impasse", body: "Les clients étaient refusés sans raison : ils ne savaient ni quoi changer ni s’il valait la peine de réessayer." },
      { title: "Les bons emprunteurs voulaient de la reconnaissance", body: "Les clients fiables s’attendaient à de meilleures offres, à des compléments sur leurs limites inutilisées et à des récompenses comme une remise en argent pour un paiement anticipé." },
      { title: "Les mots faisaient obstacle", body: "Un écran d’accueil verbeux et des boutons « Passer et continuer » sur des étapes obligatoires rendaient le parcours peu digne de confiance." },
    ],
  },

  process: {
    takeaway: "Des entretiens aux notes autocollantes, puis à un ensemble de correctifs priorisés.",
    steps: [
      { title: "Auditer le parcours actuel", body: "Sept problèmes concrets relevés dans l’application en production, des écrans verbeux jusqu’à l’application qui revenait à l’accueil quand le téléphone se verrouillait." },
      { title: "Écouter à grande échelle", body: "15 entretiens approfondis et un sondage de plus de 2 700 réponses, pour combiner le pourquoi et le combien." },
      { title: "Synthétiser et agir", body: "Un diagramme d’affinités a regroupé les constats en thèmes, puis en actions que l’équipe pouvait prendre en charge." },
    ],
    artifacts: [
      { src: img("affinity-map"), alt: "Diagramme d’affinités dans FigJam, avec les constats de recherche regroupés par thème", caption: "Regrouper la recherche en thèmes." },
    ],
  },

  decisions: {
    takeaway: "Six changements, chacun lié à quelque chose que les clients nous ont dit.",
    items: [
      {
        title: "Donner aux prêts un endroit à eux : un tableau de bord dédié",
        context: "Il n’existait aucun chemin clair pour demander un prêt ou consulter son historique.",
        choice: "Un tableau de bord des prêts qui montre le montant restant à payer, les prêts actifs, l’historique, le score de remboursement à temps et le dossier auprès du bureau de crédit.",
        why: "Une demande démarre plus vite, et les clients connaissent leur situation de crédit avant de décider.",
      },
      {
        title: "Expliquer chaque offre, et chaque refus",
        context: "Les clients avaient du mal à comprendre leur offre et étaient refusés sans raison.",
        choice: "Un écran d’offre simplifié avec un plan de paiement clair, des offres alternatives et des motifs de refus explicites.",
        why: "Comprendre favorise l’acceptation. Les motifs de refus donnent aussi à l’équipe crédit des données pour améliorer les critères d’offre.",
        tradeoff: "Afficher les motifs a demandé de travailler étroitement avec l’équipe d’octroi sur ce qui pouvait être partagé sans risque.",
      },
      {
        title: "Adapter les durées au prêt",
        context: "Chaque montant proposait les mêmes durées, aussi petit que soit le prêt.",
        choice: "Des durées qui s’adaptent au montant de l’offre.",
        why: "Moins de choix impossibles et des plans de remboursement plus sensés.",
      },
      {
        title: "Dire ce que fait vraiment chaque étape",
        context: "Des étapes obligatoires affichaient encore « Passer et continuer », même une fois remplies.",
        choice: "Réécriture des textes d’interface pour que les boutons et la progression reflètent l’état réel de chaque étape.",
        why: "Un langage honnête crée la confiance dans un produit qui gère l’argent des gens.",
      },
      {
        title: "Accepter les relevés de plus de banques",
        context: "Les offres étaient limitées par les informations que Carbon pouvait voir.",
        choice: "Un nouveau parcours de relevé bancaire qui relie les comptes d’autres banques.",
        why: "Plus d’informations, c’est de meilleures offres pour les clients et de meilleures décisions de risque pour l’entreprise.",
      },
      {
        title: "Faire du remboursement l’écran le plus simple de l’application",
        context: "Le remboursement est le moment le plus important du parcours de prêt pour l’entreprise.",
        choice: "Un écran de remboursement clair avec un montant total ou partiel, l’approvisionnement du portefeuille sur place et une option « payer au fil des revenus ».",
        why: "Si rembourser ne demande aucun effort, plus de prêts sont remboursés à temps, et les clients ont accès à davantage.",
      },
    ],
  },

  before: {
    takeaway: "Le point de départ : verbeux, ambigu et facile à abandonner.",
    shots: [
      { src: img("before-welcome"), alt: "Ancien écran d’accueil des prêts avec un long texte explicatif", caption: "Un écran d’accueil trop verbeux pour être utile." },
      { src: img("before-steps"), alt: "Ancien écran des étapes avec un bouton Passer et continuer", caption: "« Passer et continuer » sur une étape obligatoire." },
      { src: img("before-offers"), alt: "Ancien écran des offres de prêt avec des durées fixes", caption: "Des offres difficiles à comparer." },
    ],
  },

  mobile: {
    takeaway: "Le parcours repensé, du premier coup d’œil au dernier remboursement.",
    shots: [
      { src: img("dashboard"), alt: "Tableau de bord des prêts avec les prêts actifs et l’historique", caption: "Tout sur vos prêts, d’un coup d’œil." },
      { src: img("dashboard-offer"), alt: "Tableau de bord invitant le client à consulter son offre de prêt", caption: "Une offre qui attend, à une touche." },
      { src: img("apply-amount"), alt: "Écran Obtenir un prêt demandant le montant souhaité", caption: "Une question par écran." },
      { src: img("loan-offer"), alt: "Offre de prêt avec la durée, la mensualité et le taux d’intérêt", caption: "L’offre, expliquée simplement." },
      { src: img("terms"), alt: "Conditions d’utilisation résumant les règles de paiement anticipé et de retard", caption: "Avantages et pénalités en termes simples." },
      { src: img("statement-select"), alt: "Choix d’un compte bancaire pour partager ses relevés (détails floutés)", caption: "Relier le relevé d’une autre banque." },
      { src: img("statement-add"), alt: "Formulaire d’ajout de relevé bancaire (détails floutés)", caption: "Confirmer le compte à ajouter." },
      { src: img("repay"), alt: "Écran de remboursement avec le prochain versement ou le remboursement total", caption: "Rembourser en totalité ou en partie." },
      { src: img("repay-success"), alt: "Écran de félicitations après un remboursement réussi", caption: "Un moment qui mérite d’être célébré." },
    ],
  },

  outcomes: {
    takeaway: "Chaque objectif atteint ou dépassé, et de meilleurs prêts au bilan.",
    items: [
      "Un nouveau tableau de bord qui donne un accès immédiat aux demandes et à l’historique",
      "Un parcours de demande et d’offre plus simple, avec motifs de refus et offres alternatives",
      "La liaison de relevés d’autres banques pour améliorer la qualité des offres",
      "Un remboursement clair avec plusieurs options d’approvisionnement",
      "Demandes de prêt en hausse de 20 %, au-delà de l’objectif de 15 %",
      "Abandons de prêt en baisse de 10 %, objectif atteint",
      "Prêts non performants en baisse de 10 %",
    ],
  },

  // The quote stays in English, as written on LinkedIn
  testimonials: carbonLoans.testimonials?.map((q) => ({ ...q, context: "mon manager chez Carbon (recommandation LinkedIn)" })),
};
