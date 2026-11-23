import type { CaseStudy } from "@/lib/case-study";

// Version française de content/case-studies/uploadable.ts (mêmes sources).
const img = (name: string) => `/images/work/uploadable/${name}.jpg`;

export const uploadableFr: CaseStudy = {
  headline: "Sous la limite. Sur votre appareil.",
  status: "En ligne",
  liveUrl: "https://uploadablepdf.com",
  roles: ["Mon propre produit", "Conçu de bout en bout", "Construit avec l’IA (Claude Code)", "Mis en production"],
  summary: {
    problem:
      "Les portails de demandes officielles limitent la taille des fichiers. Pour téléverser mes documents, je devais combiner des fichiers, retirer des pages et passer sous une limite que je choisissais, et aucun outil ne faisait les trois.",
    did:
      "J’ai conçu et construit Uploadable avec Claude Code : combiner, alléger, corriger et compresser relevés et documents pour un portail précis, entièrement sur l’appareil de la personne.",
    result:
      "En ligne moins d’une journée après le premier commit de l’application, avec plus de 2 200 visiteurs le premier mois, et aucun document jamais envoyé à un serveur.",
  },
  metrics: [
    { value: "2,2 k+", label: "visiteurs au cours des 30 premiers jours" },
    { value: "< 1 jour", label: "du premier commit de l’application au site en ligne" },
    { value: "0", label: "document envoyé à un serveur, par conception" },
    { value: "7", label: "destinations avec leur limite intégrée" },
  ],
  hero: {
    desktop: {
      src: img("documents-light"),
      alt: "Uploadable sur ordinateur : 27 relevés bancaires de test classés par mois, avec une grille qui ne montre aucun mois manquant",
    },
    mobile: {
      src: img("export-light"),
      alt: "Uploadable sur téléphone : le résultat respecte la limite de 4 Mo avec 3,63 Mo, et les vérifications pour le portail d’IRCC",
    },
  },
  meta: [
    { label: "Rôle", value: "Fondateur · design et front-end (avec l’IA)" },
    { label: "Équipe", value: "Moi seul" },
    { label: "Période", value: "D’abord un classeur de relevés bancaires, puis l’application : premier commit le 26 oct. 2026, en ligne le lendemain matin" },
    { label: "Plateforme", value: "Web, sur téléphone et ordinateur, rien à installer" },
  ],

  origin: {
    takeaway: "Tout a commencé devant une page de téléversement qui refusait mes documents.",
    body: [
      "Je devais téléverser des documents pour une demande officielle, et le site imposait une limite de taille. Je devais réunir des fichiers, retirer des pages et obtenir un résultat assez léger pour une limite que je choisissais moi-même. Je n’ai trouvé aucun outil qui faisait les trois.",
      "J’utilisais iLovePDF. C’est une excellente plateforme, mais pas pour cet usage : elle compressait au maximum, sans possibilité de fixer une limite. J’ai donc d’abord construit un classeur de relevés bancaires pour moi, puis je l’ai transformé en Uploadable, pour toutes les personnes bloquées devant la même page. Tout se fait sur votre propre appareil, donc vos relevés bancaires et vos documents ne sont jamais envoyés à personne, pas même à moi.",
    ],
  },

  context: {
    takeaway: "Le vrai besoin n’est pas « compresser un PDF ». C’est « faire accepter cette demande ».",
    body: [
      "Les portails d’immigration, de prêt hypothécaire et de location ont chacun leurs règles : une limite de taille par fichier, des types de fichiers acceptés, pas de mot de passe, pas de champs de formulaire, et parfois des règles sur les noms de fichiers. Les gens arrivent avec un an de relevés bancaires, une lettre de référence, des photos de leur passeport prises au téléphone, et une échéance.",
      "Les outils PDF généralistes traitent chacune de ces tâches séparément, envoient vos fichiers sur leurs serveurs et compressent tout au maximum, même quand un relevé aurait passé tel quel.",
    ],
    constraints: [
      "Les relevés bancaires et les passeports font partie des fichiers les plus privés",
      "Le résultat doit rester lisible pour la personne qui étudie la demande",
      "Beaucoup de gens font ça sur leur téléphone",
      "Ne jamais modifier un montant ou un mot sur un relevé",
    ],
  },

  insights: {
    takeaway: "Ce qui fait échouer un téléversement est rarement ce qu’un outil PDF corrige.",
    items: [
      {
        title: "La limite dépend de la destination",
        body: "4 Mo pour le compte sécurisé d’IRCC au Canada, 5 Mo pour ImmiAccount en Australie, 2 Mo pour le National Visa Center américain. Personne ne devrait avoir à chercher, ni à compresser plus que nécessaire.",
      },
      {
        title: "Un mois manquant peut faire échouer une demande",
        body: "Les relevés arrivent avec des noms comme « stmt-202212.pdf » ou « eStatement Sep 2022 ». Les remettre dans l’ordre des dates, et signaler un trou avant l’agent, compte autant que la taille du fichier.",
      },
      {
        title: "Les refus viennent souvent du fichier, pas de sa taille",
        body: "Les relevés bancaires arrivent souvent avec un mot de passe, et les formulaires avec des champs à remplir. Les portails refusent les deux, et le message d’erreur dit rarement pourquoi.",
      },
      {
        title: "Il faut pouvoir lui confier ses relevés",
        body: "Dire « nous ne gardons pas vos fichiers » ne suffit pas. La promesse doit pouvoir être vérifiée par chacun.",
      },
    ],
  },

  decisions: {
    takeaway: "Les décisions derrière le produit, chacune au service d’un téléversement accepté.",
    items: [
      {
        title: "Tout se passe sur votre appareil",
        context: "Les outils PDF populaires, y compris celui que j’utilisais, envoient vos fichiers sur leurs serveurs pour les traiter.",
        options: ["Traiter sur un serveur", "Traiter dans le navigateur"],
        choice:
          "Tout le moteur tourne dans le navigateur. Aucune requête ne transporte un document, rien de tiers ne se charge, et seules des préférences comme la dernière destination sont mémorisées.",
        why: "C’est la seule promesse vérifiable : une fois l’application ouverte, coupez le Wi‑Fi et les données mobiles, et l’ajout de fichiers comme l’enregistrement fonctionnent toujours.",
        tradeoff: "Sans serveur, pas de suivi des visiteurs dans l’application. J’ai même désactivé le script d’analyse de Cloudflare, et les tests de production échouent s’il revient.",
      },
      {
        title: "Respecter la limite choisie, pas viser le plus petit fichier possible",
        context: "Compresser un relevé au maximum peut le rendre difficile à lire, ce qui va à l’encontre du but.",
        choice:
          "Les fichiers qui respectent déjà la limite restent tels quels. Sinon, les images sont d’abord réduites, puis les pages passent en noir et blanc net, avec du texte qu’on peut rechercher. Plutôt que de descendre sous 200 ppp, l’outil propose de diviser le fichier au lieu de le rendre flou.",
        why: "Le but est le fichier le plus lisible qui respecte la limite, parce qu’une personne devra le lire.",
        tradeoff: "Le noir et blanc retire la couleur, alors l’écran de résultat le dit clairement et permet de prévisualiser avant d’enregistrer.",
      },
      {
        title: "Choisir la destination, et les règles suivent",
        context: "Chaque portail a ses règles, et la plupart des gens ne les connaissent pas.",
        choice:
          "On choisit une destination, comme IRCC, un visa britannique ou un prêt hypothécaire, et la limite est réglée. Chaque fichier est vérifié avant l’enregistrement : taille, type, nom de fichier, mot de passe et champs de formulaire. Chaque règle renvoie à sa source.",
        why: "« Est-ce que ce sera accepté? » devient une liste de crochets.",
        tradeoff: "Les règles demandent des sources et de l’entretien. Quand aucune page officielle n’en donne une, la source est un guide de praticien, et c’est indiqué.",
      },
      {
        title: "Un verdict clair comme résultat",
        context: "Après la création du fichier, une seule question compte : est-ce que ça va passer?",
        choice:
          "L’écran de résultat commence par un grand verdict, « Respecte la limite de 4 Mo », à côté de la première page du fichier, puis les vérifications. C’est le seul moment appuyé d’une interface par ailleurs sobre.",
        why: "Tout le reste sert cette réponse.",
      },
      {
        title: "Ne jamais modifier le contenu d’un relevé",
        context: "Un outil capable de changer des montants pourrait servir à falsifier un document.",
        choice: "Uploadable peut ordonner des fichiers, retirer des pages entières et réduire la taille. Il ne peut jamais modifier un texte ou un montant.",
        why: "L’outil reste honnête, et c’est une promesse sur laquelle les gens et les agents peuvent compter.",
      },
    ],
  },

  evolution: {
    takeaway: "Du premier commit à un produit en ligne en moins d’une journée, puis façonné par de vrais téléphones et des revues.",
    items: [
      {
        date: "26 oct. 2026",
        title: "Plan, moteur, application et pages d’accueil",
        body: "À partir de mon classeur de relevés bancaires d’un seul fichier, j’ai écrit un plan et un journal des décisions et construit un design system, déplacé le moteur PDF dans un processus en arrière-plan avec des tests qui prouvent qu’il reproduit le classeur, puis construit l’application en trois étapes et des pages rapides pour chaque destination.",
      },
      {
        date: "27 oct. 2026",
        title: "En ligne à uploadablepdf.com",
        body: "En-têtes de sécurité et vérifications automatiques, puis le domaine en ligne le lendemain matin. Le même jour : le glisser-déposer pour réordonner, et un accueil qui commence par les outils.",
      },
      {
        date: "28 oct. 2026",
        title: "Corriger ce que de vrais iPhone ont révélé",
        body: "Les dossiers de photos échouaient sur certains iPhone. La cause : Safari chargeait le moteur deux fois.",
      },
      {
        date: "Fin oct. 2026",
        title: "D’autres outils",
        body: "Diviser un PDF, Surligner des lignes, Fusionner et compresser, et demander ce qu’est chaque fichier au lieu de supposer que tout PDF est un relevé bancaire.",
      },
      {
        date: "Nov. 2026",
        title: "Des rondes de revue",
        body: "Une meilleure mise en page sur téléphone et l’annulation, les sources officielles citées pour chaque limite, une compression plus fine, et des liens de configuration que les consultants peuvent partager avec leurs clients.",
      },
    ],
  },

  web: {
    takeaway: "Une interface calme, à la manière d’Apple, où le seul moment appuyé est le verdict.",
    intro:
      "Les écrans ci-dessous utilisent des relevés de test générés, d’une « Example Bank » fictive, jamais les vrais documents de quelqu’un. L’outil est en anglais.",
    shots: [
      { src: img("home-desktop"), alt: "Page d’accueil d’Uploadable : rendre vos documents assez légers pour les téléverser, avec neuf outils", caption: "L’accueil commence par les outils, chacun avec son résultat en mots simples." },
      { src: img("documents-dark"), alt: "Écran des documents d’Uploadable en mode sombre avec 27 relevés classés par mois", caption: "Les relevés classés par mois, avec une grille qui montre tout mois manquant." },
    ],
  },

  mobile: {
    takeaway: "Beaucoup de gens font ça sur leur téléphone, alors chaque outil fonctionne d’une seule main.",
    shots: [
      { src: img("home-mobile"), alt: "Page d’accueil d’Uploadable sur téléphone, avec la liste des outils", caption: "Les outils d’abord, un écran chacun." },
      { src: img("app-start-mobile"), alt: "Choix de la destination : Canada IRCC, 4 Mo par fichier", caption: "On choisit la destination, et la limite est réglée." },
      { src: img("export-light"), alt: "Écran de résultat : respecte la limite de 4 Mo, avec les vérifications pour IRCC", caption: "Un verdict, puis les vérifications." },
      { src: img("ircc-mobile-dark"), alt: "La page Canada IRCC en mode sombre", caption: "Une page pour chaque destination, en mode clair et sombre." },
    ],
  },

  accessibility: {
    takeaway: "Clair pour tout le monde, sous pression, sur n’importe quel appareil.",
    done: [
      { title: "Des mots simples", body: "L’interface parle de « limite de téléversement » et de « relevés bancaires », jamais de termes techniques comme « rastériser »." },
      { title: "Des chiffres qui ne sautent pas", body: "Les tailles utilisent des chiffres à chasse fixe, pour qu’un nombre qui change ne déplace jamais la mise en page." },
      { title: "De grandes cibles", body: "Chaque contrôle mesure au moins 44 × 44 px." },
      { title: "Réordonner sans souris", body: "Documents et pages se déplacent par glisser-déposer, par appui long sur écran tactile, ou avec Alt et une flèche." },
      { title: "Des pages d’accueil rapides", body: "Elles n’envoient aucun JavaScript à part le changement de thème, et sont vérifiées pour obtenir au moins 95 sur Lighthouse, sur téléphone et ordinateur." },
    ],
  },

  build: {
    takeaway: "Construit avec Claude Code, avec des tests qui tiennent l’IA à mon prototype et à la promesse de confidentialité.",
    intro: "J’ai travaillé par phases : planifier, construire, vérifier, réviser. Chaque phase devait passer ses vérifications avant la suivante.",
    steps: [
      { title: "Planifier chaque phase d’abord", body: "Un plan écrit avec des critères d’acceptation, approuvé avant tout code, et un journal des décisions avec une raison pour chaque choix." },
      { title: "Reproduire le comportement, puis le prouver", body: "Le moteur a été repris de mon propre classeur de relevés bancaires, puis comparé à celui-ci sur un ensemble de relevés générés, pour la taille comme pour la lisibilité." },
      { title: "Rendre la promesse de confidentialité testable", body: "La compilation échoue si une adresse tierce apparaît dans le site, et les tests en ligne échouent si un script d’analyse est injecté." },
      { title: "Réviser avant de publier", body: "Chaque phase se terminait par une revue de code, chaque remarque étant corrigée ou consignée avec une raison." },
    ],
  },

  outcomes: {
    takeaway: "Un outil dont j’avais besoin, aujourd’hui visité par des milliers de personnes devant la même page.",
    items: [
      "En ligne à uploadablepdf.com, gratuit, sans compte et sans rien à installer",
      "Plus de 2 200 visiteurs au cours des 30 premiers jours, selon les statistiques côté serveur de Cloudflare",
      "Neuf outils, de la combinaison de relevés à la correction d’un PDF refusé",
      "Limites et vérifications intégrées pour le Canada, l’Australie, le Royaume-Uni, les États-Unis, les visas Schengen, et les demandes de prêt hypothécaire ou de location",
      "Aucun document ne quitte jamais l’appareil de la personne",
    ],
  },

  reflection: {
    takeaway: "Les meilleurs produits que j’ai construits partaient d’un problème que j’avais moi-même.",
    learned: [
      "Être le premier utilisateur a accéléré chaque décision : je savais exactement ce qu’on ressent devant un téléversement refusé.",
      "Une promesse de confidentialité ne vaut que si chacun peut la vérifier, et si des tests empêchent de la briser.",
      "Construire avec l’IA allait le plus vite quand mon propre prototype fonctionnel et des décisions écrites fixaient le niveau à atteindre.",
    ],
  },
};
