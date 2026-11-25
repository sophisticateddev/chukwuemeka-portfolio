import type { CaseStudy } from "@/lib/case-study";

// Version française de content/case-studies/sojourn-orders.ts (mêmes sources, mêmes exclusions).
const img = (name: string) => `/images/work/sojourn-orders/${name}.jpg`;

export const sojournOrdersFr: CaseStudy = {
  headline: "Plus vite de demander que d’acheter.",
  status: "En ligne",
  liveUrl: "https://orders.sojournapps.co.uk",
  liveLabel: "Voir Sojourn Orders",
  roles: ["Projet client", "Conçu de bout en bout", "Construit avec l’IA (Claude Code)", "Mis en production"],
  summary: {
    problem:
      "Chez Sojourn, une entreprise de construction britannique, le personnel achetait du matériel sans approbation, et le propriétaire l’apprenait à l’arrivée de la facture. Passer par l’approbation était plus lent qu’acheter directement.",
    did:
      "J’ai conçu et construit une application mobile pour les bons de commande : créer une commande en quatre questions, l’approuver d’un toucher ou d’un glissement, et suivre ce qui arrive. Je l’ai construite avec Claude Code, du premier croquis à l’application en ligne.",
    result:
      "En ligne, avec tout le personnel de Sojourn dessus : 7 employés, 3 approbateurs et 1 administrateur. Elle a déjà traité 3 580 £ de commandes.",
  },
  metrics: [
    { value: "11", label: "personnes l’utilisent : 7 employés, 3 approbateurs et 1 administrateur" },
    { value: "3 580 £", label: "de commandes traitées jusqu’ici" },
    { value: "4", label: "questions pour créer une commande ; le reste est facultatif" },
    { value: "1 toucher", label: "ou un glissement pour approuver, depuis la liste" },
  ],
  hero: {
    mobile: {
      src: img("approvals"),
      alt: "Écran Approbations de Sojourn Orders sur un téléphone : des commandes en attente, chacune avec le montant, la personne qui l’a créée, le chantier, le fournisseur et un bouton Approuver",
    },
  },
  meta: [
    { label: "Client", value: "Sojourn Limited, une entreprise de construction britannique" },
    { label: "Rôle", value: "Designer de produits et développeur (avec l’IA)" },
    { label: "Équipe", value: "Moi, en lien direct avec le propriétaire" },
    { label: "Période", value: "Oct. 2026 – aujourd’hui" },
    { label: "Plateforme", value: "Application web installable (PWA) pour téléphone et ordinateur" },
  ],

  context: {
    takeaway: "Le personnel n’ignorait pas le processus. C’est le processus qui ignorait leur lieu de travail.",
    body: [
      "Les équipes de Sojourn travaillent sur des chantiers. Elles ont besoin de matériel le jour même, portent des gants, le soleil tombe sur l’écran et le réseau va et vient. Un long formulaire, ou un appel pour relancer un responsable, perd toujours face à un achat direct.",
      "Le propriétaire découvrait donc les dépenses à l’arrivée de la facture, sans savoir qui avait demandé, pourquoi, ni qui avait dit oui. Je me suis fixé un objectif simple : faire du chemin approuvé le chemin le plus facile. Si créer une commande n’est pas plus rapide qu’un texto, personne ne l’utilisera.",
    ],
    constraints: [
      "Le personnel de chantier ouvre rarement une application et ne retient pas les mots de passe",
      "Gants, plein soleil et 4G instable sur les chantiers",
      "Les approbateurs décident en mouvement, souvent entre deux appels ou au volant",
      "Les règles liées à l’argent devaient tenir même si quelqu’un contournait l’application",
    ],
  },

  team: {
    takeaway: "Un petit projet, un seul designer-développeur, façonné chaque semaine par la personne qui paie les factures.",
    members: [
      {
        name: "Chukwuemeka Iheonye",
        role: "Designer de produits et développeur",
        owned:
          "Définir les besoins avec le propriétaire, le design system, chaque écran et parcours, le développement avec Claude Code, les tests, la sécurité et la mise en ligne.",
        me: true,
      },
      {
        name: "Le propriétaire de Sojourn",
        role: "Client et administrateur",
        owned: "Les règles et limites d’approbation, les retours d’usage réel, et le dernier mot sur des choix comme le verrouillage et la connexion.",
      },
    ],
  },

  insights: {
    takeaway: "Quatre types de personnes utilisent l’application, et chacune avait un besoin différent.",
    items: [
      {
        title: "Le personnel de chantier veut retourner au travail",
        body: "Il redoute les formulaires et les reproches. Le moyen le plus rapide de le convaincre, c’est de demander moins : quoi, combien environ, livraison ou cueillette, et pour quand.",
      },
      {
        title: "Le personnel de bureau recommande les mêmes choses",
        body: "Retaper la commande de la semaine dernière est ce qu’il déteste le plus. « Commander à nouveau » remplit l’article, le coût, le chantier et le fournisseur d’un seul toucher.",
      },
      {
        title: "Les approbateurs décident en quelques secondes, mais ont besoin de contexte",
        body: "Ils sont occupés et souvent au volant. La carte doit dire qui, quoi, combien, pour quel chantier et pour quand, pour décider sans rien ouvrir.",
      },
      {
        title: "Le propriétaire veut une trace, pas une course",
        body: "Les dépenses par chantier et par personne, qui a approuvé quoi, et un résumé hebdomadaire par courriel, sans ouvrir l’application.",
      },
    ],
  },

  decisions: {
    takeaway: "Chaque décision passait le même test : est-ce plus rapide qu’un texto?",
    items: [
      {
        title: "Quatre questions, puis « Ajouter si vous voulez »",
        context:
          "Le premier écran Nouvelle commande affichait huit champs une fois « Plus de détails » ouvert. Le propriétaire l’a trouvé brouillon et intimidant.",
        options: ["Un long formulaire", "Un assistant en plusieurs étapes", "Quatre réponses obligatoires, le reste rangé"],
        choice:
          "Ce dont vous avez besoin, le coût approximatif, livraison ou cueillette, et pour quand. La priorité, le chantier, le fournisseur, une photo de la soumission et une note se trouvent dans une liste « Ajouter si vous voulez » ; chaque ligne montre sa valeur et ouvre un panneau.",
        why: "Le formulaire reste à quatre décisions sur un seul écran. Photographier la soumission est souvent plus rapide que taper les détails, alors ce bouton est juste là.",
        tradeoff: "Certaines commandes arrivent avec moins de détails, alors les approbateurs peuvent poser une question sur la commande au lieu de la refuser.",
      },
      {
        title: "Des règles d’approbation selon le montant, pas une chaîne fixe",
        context: "Les petites commandes ne devraient attendre personne, et les grosses ne devraient pas dépendre d’une seule personne.",
        options: ["N’importe quel approbateur", "Une séquence fixe d’approbateurs", "Des règles selon le montant"],
        choice:
          "Sous un certain seuil, les commandes sont approuvées immédiatement. Au-dessus, tout approbateur dont la limite couvre le montant peut approuver, et les plus grosses commandes demandent deux approbations. L’administrateur peut tout modifier dans les Réglages.",
        why: "La plupart des commandes sont petites et courantes, donc la plupart n’attendent jamais. Les règles vivent dans la base de données : elles tiennent même si quelqu’un contourne l’application.",
        tradeoff: "Plus de règles à expliquer, donc chaque commande indique qui elle attend, par exemple « En attente de Mark ».",
      },
      {
        title: "Connexion par code texto, puis un NIP seulement là où l’argent circule",
        context: "Le personnel de chantier consulte rarement ses courriels et déteste les mots de passe. Mais le téléphone d’un approbateur peut approuver des dépenses.",
        choice:
          "Le personnel se connecte une fois avec un code reçu par texto. Les approbateurs et administrateurs choisissent aussi un NIP à 4 chiffres, avec Face ID ou l’empreinte en option, et l’application se verrouille après 30 minutes d’absence. Le personnel de chantier peut activer le verrou, sans jamais y être obligé.",
        why: "Le verrou protège contre un téléphone prêté sans ralentir les personnes qui ne font que créer des commandes. Le propriétaire a choisi cette option plutôt que de tout verrouiller, à chaque ouverture.",
        tradeoff: "Deux étapes de connexion pour les approbateurs, donc l’écran du NIP offre toujours un retour clair.",
      },
      {
        title: "Glisser à droite pour approuver, à gauche pour refuser",
        context: "Les approbateurs décident entre deux appels. Viser un bouton sur un téléphone en mouvement est lent.",
        choice:
          "On glisse une carte vers la droite pour approuver. Le propriétaire a ensuite demandé de glisser vers la gauche pour refuser, par symétrie. Les cartes suivent le doigt et montrent quand le relâcher déclenchera l’action, et les boutons Approuver et Refuser restent sur chaque carte pour qui ne glisse pas.",
        why: "C’est le geste le plus rapide sur un téléphone, et les boutons gardent l’ensemble accessible.",
        tradeoff: "Il s’agit d’argent, alors le mouvement reste sobre plutôt que ludique.",
      },
      {
        title: "Pas de réseau, c’est normal, pas une erreur",
        context: "Sur un chantier, la connexion tombe en plein milieu d’une commande.",
        choice:
          "Les brouillons s’enregistrent sur le téléphone pendant la saisie. Une commande envoyée sans réseau affiche « Enregistrée sur votre téléphone », apparaît dans l’accueil sous « En attente de réseau », puis part toute seule quand la connexion revient.",
        why: "Rien de ce qui est saisi sur le chantier n’est perdu, donc personne n’abandonne pour acheter directement.",
        tradeoff: "L’application a dû cesser de se recharger seule après les mises à jour, car un rechargement effaçait la saisie. Elle attend maintenant un toucher sur « Mise à jour prête ».",
      },
    ],
  },

  evolution: {
    takeaway: "Construite en quelques semaines, puis remodelée par les retours du propriétaire une fois entre ses mains.",
    items: [
      {
        date: "Oct. 2026",
        title: "Brief, marque et moteur d’approbation",
        body: "Le brief produit, un design system tiré du site web et du logo de Sojourn, et les règles d’approbation écrites comme fonctions de base de données.",
      },
      {
        date: "Oct. 2026",
        title: "Tous les écrans, les alertes et le verrou",
        body: "Connexion, Accueil, Nouvelle commande, Approbations, Livraisons et Administration. Puis les notifications push, les courriels et un résumé à 7 h, les conseils de démarrage et le verrou par NIP.",
      },
      {
        date: "Oct. 2026",
        title: "Les retours du propriétaire",
        body: "Nouvelle commande est passée à quatre questions. Les cartes ont été repensées pour que chaque type d’information ait son propre style, les glissements ont été ajoutés, et chaque écran a été vérifié selon les lignes directrices d’Apple pour l’iPhone.",
      },
      {
        date: "Oct. 2026",
        title: "Sécurité et rapidité",
        body: "Une revue de sécurité de bout en bout, et une refonte pour que le téléphone réponde d’abord et le réseau ensuite.",
      },
      {
        date: "Nov. 2026",
        title: "En ligne",
        body: "Une dernière vérification de sécurité, des résumés hebdomadaires et mensuels par courriel pour le propriétaire, et l’application en ligne à orders.sojournapps.co.uk. Tout le personnel de Sojourn l’utilise maintenant.",
      },
    ],
  },

  mobile: {
    takeaway: "Pensée pour un seul pouce, des gants et le plein soleil.",
    intro:
      "Une action principale par écran, à portée de pouce. Chaque commande indique la prochaine étape. Les écrans ci-dessous utilisent des données de démonstration : les personnes, chantiers, fournisseurs et montants sont fictifs. L’application est en anglais.",
    shots: [
      { src: img("tips"), alt: "Panneau de conseils de démarrage : commander en moins de 30 secondes, avec un aperçu du formulaire", caption: "Trois conseils courts à la première connexion." },
      { src: img("new-empty"), alt: "Écran Nouvelle commande avec quatre questions et une rangée de commandes récentes", caption: "Quatre questions, les commandes récentes à un toucher." },
      { src: img("new-suggest"), alt: "Écran Nouvelle commande qui suggère des articles en bois pendant la saisie", caption: "Des suggestions tirées de vos commandes et d’une liste de matériaux." },
      { src: img("home"), alt: "Écran d’accueil listant les commandes avec leur statut, leur priorité et la prochaine étape", caption: "L’accueil commence par ce qui se passe ensuite." },
      { src: img("order-pending"), alt: "Page d’une commande avec le numéro de bon, le montant, le statut et la personne attendue", caption: "Chaque commande indique qui elle attend." },
      { src: img("deliveries"), alt: "Écran Livraisons regroupant les commandes en retard et celles du jour, avec des boutons Arrivé et Récupéré", caption: "Livraisons : un toucher quand la marchandise arrive." },
      { src: img("approvals-dark"), alt: "Écran Approbations en mode sombre", caption: "Le mode sombre, construit sur le bleu marine de Sojourn." },
      { src: img("reports"), alt: "Écran Rapports avec les dépenses approuvées, les commandes créées et un graphique par semaine", caption: "Des rapports pour le propriétaire, sur n’importe quelle période." },
    ],
  },

  designSystem: {
    takeaway: "Neuf couleurs tirées du site de Sojourn, et une règle : l’ambre veut dire « on y va ».",
    colors: [
      { name: "Ambre", value: "#FFB923", usage: "Une action principale par écran, avec du texte marine" },
      { name: "Marine", value: "#021828", usage: "Structure : actions secondaires, puces, mode sombre" },
      { name: "Encre", value: "#212529", usage: "Texte" },
      { name: "Gris", value: "#636363", usage: "Texte secondaire (6:1 sur blanc)" },
      { name: "Vert", value: "#166534", usage: "Approuvé seulement" },
      { name: "Rouge", value: "#B91C1C", usage: "Refusé seulement" },
    ],
    type: {
      family: "Plus Jakarta Sans",
      notes: "Une seule famille, choisie plutôt que Manrope (trop fine en extérieur) et Geist (trop technique). La police est fournie avec l’application au lieu d’être chargée depuis Google.",
    },
    components: [
      { name: "Carte de commande", states: ["En attente", "Info demandée", "Approuvée", "En retard"] },
      { name: "Carte d’approbation", states: ["Au repos", "Glissement", "Va approuver", "Va refuser"] },
      { name: "Panneau", states: ["Sélecteur", "Calendrier", "Recherche"] },
      { name: "Bouton", states: ["Principal", "Secondaire", "Appuyé", "Désactivé"] },
    ],
    motion:
      "Sobre, pas mignon. Le mouvement explique ce qui a changé et ne décore jamais. Il respecte le réglage « réduire les animations » du téléphone.",
  },

  accessibility: {
    takeaway: "Être utilisable dehors et d’une seule main était le point de départ, pas un bonus.",
    done: [
      { title: "De grandes cibles", body: "Chaque zone tactile mesure au moins 48 px, y compris les petits boutons." },
      { title: "Le statut ne repose jamais sur la couleur", body: "Chaque statut a une icône et un mot, et le vert et le rouge ne servent qu’à « approuvé » et « refusé »." },
      { title: "Vérifiée à chaque changement", body: "Des vérifications d’accessibilité automatiques tournent en mode clair et sombre sur les principaux parcours, sans aucune violation tolérée." },
      { title: "Animations réduites", body: "Les glissements et les panneaux respectent le réglage « réduire les animations » du téléphone." },
      { title: "Des mots simples", body: "Pas de jargon comme « réquisition » ou « ligne de commande ». Les boutons nomment le résultat : « Approuver 420 £ », « Envoyer pour approbation »." },
    ],
  },

  build: {
    takeaway: "Je l’ai conçue et construite avec Claude Code, avec des garde-fous pour garder un code fiable.",
    intro:
      "C’est l’exemple le plus clair de ma façon de travailler aujourd’hui : les décisions de design écrites d’abord, puis construites et testées avec l’IA, puis vérifiées sur de vrais téléphones.",
    steps: [
      {
        title: "Écrire le produit d’abord",
        body: "Un brief produit, un design system et un journal des décisions, pour que chaque choix ait une raison à laquelle l’IA et moi pouvons nous référer.",
      },
      {
        title: "Mettre les règles dans la base de données",
        body: "Les limites d’approbation et ce que chacun peut voir sont appliqués par des fonctions Postgres et la sécurité au niveau des lignes, jamais seulement par les écrans.",
      },
      {
        title: "Tester comme un téléphone de chantier",
        body: "Les parcours sont testés au format téléphone, en mode clair et sombre, avec des vérifications d’accessibilité, en plus de tests pour les règles de la base de données.",
      },
      {
        title: "Mettre en ligne sans terminal",
        body: "Le propriétaire n’est pas technique, donc l’installation tient en un script collé dans une page web, avec des clés générées dans le navigateur.",
      },
    ],
  },

  outcomes: {
    takeaway: "En ligne, et prête à grandir avec l’entreprise.",
    items: [
      "En ligne à orders.sojournapps.co.uk, utilisée par tout le personnel de Sojourn : 7 employés, 3 approbateurs et 1 administrateur",
      "3 580 £ de commandes traitées jusqu’ici (en novembre 2026)",
      "Une application installable, qui se place sur l’écran d’accueil comme n’importe quelle autre",
      "Des commandes créées en quatre questions, avec des brouillons qui survivent à l’absence de réseau",
      "Des règles d’approbation selon le montant que le propriétaire peut changer sans moi",
      "Des notifications push, des courriels et un résumé quotidien pour ce qui demande une action",
      "Des résumés hebdomadaires et mensuels par courriel pour le propriétaire",
      "Une revue de sécurité de bout en bout avant l’arrivée des vrais utilisateurs",
    ],
  },

  reflection: {
    takeaway: "Les meilleurs retours venaient de la personne qui paie les factures.",
    learned: [
      "« Est-ce plus rapide qu’un texto? » s’est révélé un meilleur test de design que n’importe quelle liste de contrôle.",
      "Les retours d’usage réel ont changé plus de choses que mes propres revues : le formulaire en quatre questions et le glissement pour refuser venaient tous deux du propriétaire.",
      "Écrire les décisions a rendu le développement avec l’IA plus sûr, car chaque changement avait une raison à vérifier.",
    ],
    next: {
      title: "Lire les factures à votre place",
      body: "La prochaine idée : lire automatiquement les photos de factures et les comparer à la commande approuvée, pour que le propriétaire voie tout écart d’un coup d’œil.",
    },
  },
};
