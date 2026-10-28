import type { CaseStudy } from "@/lib/case-study";

// Under NDA: real productions, companies and figures are blurred or swapped for sample data.
const img = (name: string) => `/images/work/albert/${name}.webp`;

export const albertFr: CaseStudy = {
  liveUrl: "https://wearealbert.org",
  liveLabel: "Visiter albert",
  headline: "Refonte de la boîte à outils carbone d’albert (BAFTA) pour que les productions consignent leur durabilité au fil du travail, pas après.",
  roles: ["Designer produit senior (contrat)", "De la recherche à la livraison aux développeurs", "Web, mobile et outils d’administration"],
  summary: {
    problem:
      "Les productions de cinéma et de télévision utilisent albert pour mesurer leur empreinte carbone et obtenir une certification, mais la boîte à outils était difficile à parcourir et à lire : les équipes la remettaient à la postproduction et oubliaient l’essentiel de ce qu’elles avaient fait.",
    did:
      "J’ai mené la recherche avec albert, des équipes de production et des diffuseurs, puis conçu la nouvelle génération de la boîte à outils en deux versions : d’abord les parcours autour du calculateur, puis le calculateur, le plan d’action et la certification eux-mêmes, pour chaque rôle qui touche aux données.",
    result:
      "Une boîte à outils pensée pour les personnes qui détiennent les données : une progression claire partout, l’import en masse, des actions confiées aux membres de l’équipe qui les réalisent, et un chemin plus léger vers la certification. Les productions qui commencent leur bilan en préproduction sont passées de 30 % à 55 %, les critères WCAG 2.2 AA respectés de 60 % à 85 %, et la satisfaction de 3,3 à 4,3 sur 5.",
  },
  metrics: [
    { value: "55 %", label: "des productions commencent désormais leur bilan en préproduction, contre 30 %" },
    { value: "85 %", label: "des critères WCAG 2.2 AA respectés, contre 60 %" },
    { value: "4,3/5", label: "de satisfaction chez les sociétés de production, contre 3,3 (+30 %)" },
    { value: "~10", label: "séances de recherche, dont une avec ~30 personnes" },
  ],
  hero: {
    mobile: { src: img("m-request-account"), alt: "albert sur téléphone : formulaire de demande de compte avec des libellés visibles et une option pour ajouter une société" },
    desktop: { src: img("v1-production-list"), alt: "Liste des productions albert avec l’état du bilan carbone et du plan d’action carbone de chaque production" },
  },
  meta: [
    { label: "Entreprise", value: "BAFTA albert (contrat)" },
    { label: "Rôle", value: "Designer produit senior" },
    { label: "Équipe", value: "Chef de produit, product owner, responsable technique, 2 développeurs" },
    { label: "Période", value: "juil. 2024 – août 2025" },
    { label: "Plateformes", value: "Application Web, Web mobile, outils d’administration" },
  ],

  context: {
    takeaway: "La boîte à outils carbone du secteur demandait à des productions débordées de tout se rappeler à la fin.",
    body: [
      "albert est l’organisation de l’industrie audiovisuelle dédiée à la durabilité, soutenue par BAFTA. Les productions utilisent sa boîte à outils pour calculer leur empreinte carbone, remplir un plan d’action carbone et obtenir une certification, que certains diffuseurs exigent.",
      "albert construisait la nouvelle génération de sa boîte à outils, et l’expérience devait évoluer avec elle. Elle devait fonctionner pour les assistants de production qui saisissent les données, les responsables qui les valident, les évaluateurs qui examinent les preuves, les partenaires territoriaux qui gèrent les sociétés et les diffuseurs qui suivent leurs productions.",
    ],
    constraints: [
      "Un outil en production utilisé par le cinéma et la télévision au Royaume-Uni : les changements devaient arriver par étapes",
      "Le calculateur d’empreinte était trop gros pour être reconstruit dans la première version",
      "Sous accord de confidentialité : les vraies productions, sociétés et données sont floutées ou remplacées par des exemples",
    ],
  },

  team: {
    takeaway: "J’étais responsable du design, de la recherche aux parcours et à l’interface, dans une équipe de six.",
    members: [
      {
        name: "Chukwuemeka Iheonye",
        role: "Designer produit senior",
        owned: "Recherche, audit d’accessibilité, parcours pour chaque rôle, design d’interaction et d’interface, cas limites et livraison aux développeurs.",
        me: true,
      },
      { name: "Richard Faderin", role: "Chef de produit", owned: "Priorités, feuille de route et séances de recherche avec albert et ses utilisateurs." },
      { name: "Produit et ingénierie", role: "Product owner, responsable technique, 2 développeurs", owned: "Exigences, architecture et développement." },
    ],
  },

  insights: {
    takeaway: "Les personnes qui avaient accès à albert n’étaient pas celles qui détenaient les informations.",
    intro:
      "Richard et moi avons mené une dizaine de séances à distance avec l’équipe d’albert, des utilisateurs en production et des diffuseurs, dont la BBC, Netflix, Channel 5 et ITV. Une séance a réuni une trentaine de personnes pour cartographier les points de blocage. Nous avons demandé comment les productions consignent leur travail de durabilité, qui fait quoi et quand : en préproduction, en extérieur, en studio et en postproduction. Les thèmes ci-dessous sont résumés à partir de mes notes.",
    items: [
      {
        title: "L’accès et la connaissance sont chez des personnes différentes",
        body: "Celles et ceux qui avaient un identifiant n’étaient pas ceux qui savaient ce qui avait réellement été fait. Ce détail se trouvait dans les équipes de tournage, les départements et la comptabilité.",
      },
      {
        title: "Difficile à utiliser, donc remis à la fin",
        body: "La boîte à outils étant difficile à parcourir, les équipes la repoussaient à la postproduction, moment où la plupart des actions et des preuves étaient perdues.",
      },
      {
        title: "Les preuves existent déjà, dans les reçus",
        body: "Les factures et les reçus sont le registre naturel d’une production, mais il n’y avait aucun moyen de les ajouter ou de les importer en masse.",
      },
      {
        title: "Ça doit fonctionner sur le terrain",
        body: "Le questionnaire devait être assez simple pour être rempli au fil des événements, plutôt que reconstitué des mois plus tard.",
      },
    ],
  },

  process: {
    takeaway: "Auditer, écouter, cartographier chaque rôle, puis livrer en deux temps.",
    steps: [
      { title: "Auditer", body: "Un audit d’accessibilité WCAG de la boîte à outils en production, écran par écran." },
      { title: "Écouter", body: "Des séances à distance avec albert, des équipes de production et des diffuseurs, dont des démonstrations des outils des évaluateurs." },
      { title: "Cartographier chaque rôle", body: "Des parcours pour les utilisateurs en production, les responsables, la comptabilité, les évaluateurs, les partenaires territoriaux et les diffuseurs." },
      { title: "Livrer la V1", body: "Corriger d’abord les parcours autour du calculateur : comptes, administration des sociétés, productions et plan d’action." },
      { title: "Concevoir la V2", body: "Reconstruire le calculateur, le plan d’action et la certification, ajouter les actions carbone, les rapports et l’inscription sur mobile." },
    ],
    artifacts: [
      {
        src: img("research-call"),
        alt: "Séance de recherche à distance sur le parcours des évaluateurs dans l’ancienne boîte à outils, avec deux participants en vidéo",
        caption: "Une séance de recherche avec Richard, en parcourant les outils des évaluateurs dans l’ancienne boîte à outils.",
      },
      {
        src: img("v1-add-production-states"),
        alt: "Six états du parcours d’ajout de production, avec une légende pour en cours de modification, terminé, incomplet et erreur serveur",
        caption: "Chaque état conçu, y compris des erreurs qui indiquent précisément l’étape à corriger.",
      },
      {
        src: img("v2-footprint-method"),
        alt: "Choix de collecte des données d’électricité : relevé de compteur ou références pour bureau, studio, postproduction et plateau LED",
        caption: "Pas de relevé de compteur? Choisissez une référence et consignez une donnée honnête dès maintenant.",
      },
      {
        src: img("v2-footprint-import"),
        alt: "Fenêtre d’import acceptant des fichiers CSV ou Excel jusqu’à 1 000 lignes, avec un message de réussite pour 597 émissions",
        caption: "L’import en masse depuis les tableurs que la comptabilité tient déjà.",
      },
    ],
  },

  decisions: {
    takeaway: "Sept décisions, chacune liée à quelque chose que nous avions entendu.",
    items: [
      {
        title: "Réparer le parcours avant le moteur",
        context: "Le calculateur d’empreinte était la partie la plus grosse et la plus risquée de la boîte à outils.",
        options: ["Tout reconstruire d’un coup", "Livrer d’abord les parcours qui l’entourent"],
        choice: "La V1 a laissé le calculateur intact et corrigé ce qui l’entoure : inscription, administration des sociétés, productions et plan d’action. La V2 a ensuite reconstruit le calculateur.",
        why: "Les productions ont profité d’améliorations plus tôt, et la V1 nous a appris des choses avant de nous attaquer à la partie la plus difficile.",
        tradeoff: "Le calculateur a gardé son ancienne expérience jusqu’à la V2.",
      },
      {
        title: "Afficher l’état partout",
        context: "Personne ne pouvait savoir ce qui était fait, en retard ou bloqué avant qu’il soit trop tard.",
        choice: "L’état du bilan et du plan d’action côte à côte pour chaque production, et le nombre de réponses pour chaque thème.",
        why: "Si les gens voient ce qui reste à faire pendant la production, ils s’en occupent pendant la production.",
      },
      {
        title: "Confier les actions à ceux qui les réalisent",
        context: "La personne qui avait l’identifiant n’était pas celle qui faisait le travail.",
        choice: "Toute action suggérée peut être ajoutée au plan, confiée à une personne nommée, dotée d’une fréquence, puis suivie dans Actions carbone.",
        why: "La saisie passe au membre de l’équipe qui connaît le détail, pendant que c’est frais.",
      },
      {
        title: "Rejoindre les gens dans leurs tableurs",
        context: "Les reçus et les factures contenaient déjà les preuves, mais on ne pouvait pas les ajouter.",
        choice: "Un tableau façon tableur avec modification directe, plus l’import de fichiers CSV ou Excel jusqu’à 1 000 lignes, avec un modèle.",
        why: "La comptabilité et les coordinateurs apportent leurs données dans le format qu’ils utilisent déjà.",
      },
      {
        title: "Découper le calculateur en petits parcours",
        context: "Un long calculateur d’un seul tenant était la principale raison pour laquelle les gens le repoussaient.",
        choice: "Choisir une catégorie, choisir comment la mesurer, remplir un court formulaire. Des références couvrent tout ce qui n’a pas de relevé de compteur.",
        why: "Chaque saisie prend quelques minutes, et peut donc se faire au fil de la production.",
      },
      {
        title: "Deux chemins vers la certification",
        context: "Le processus complet décourageait les petites productions avant même qu’elles commencent.",
        choice: "Un logo de participation (6 questions, 1 à 2 semaines) à côté de la certification complète (21 questions, 4 à 6 semaines), avec une comparaison claire et la possibilité de passer de l’un à l’autre.",
        why: "Cela abaisse la barrière pour commencer, tandis que le chemin complet reste exigeant.",
      },
      {
        title: "Repérer les erreurs là où elles se produisent",
        context: "L’ancienne boîte à outils acceptait des dates dans le désordre, ce qui faussait tout le reste.",
        choice: "Une validation directe sur chaque champ, une frise des dates qui rend l’ordre évident, et des erreurs qui nomment l’étape à corriger.",
        why: "Il coûte moins cher de prévenir les mauvaises données que de les auditer.",
      },
    ],
  },

  evolution: {
    takeaway: "D’un formulaire rempli à la fin à un outil utilisé tout au long.",
    items: [
      { date: "Avant", title: "Tout se rappeler plus tard", body: "De longues pages de texte, des états peu lisibles et aucune progression. La plupart des productions le remplissaient après la fin du tournage." },
      { date: "Recherche", title: "Trouver le vrai point de blocage", body: "Les séances avec albert, des productions et des diffuseurs ont montré que l’accès et la connaissance étaient chez des personnes différentes." },
      { date: "V1", title: "Réparer le parcours", body: "Des comptes avec connexion à deux facteurs, l’administration des sociétés, une liste des productions avec leur état, une configuration validée et un plan d’action guidé par la progression." },
      { date: "V2", title: "Reconstruire le cœur", body: "Un calculateur en petits parcours avec import en masse, des actions carbone attribuables, deux chemins de certification, des rapports et l’inscription sur mobile." },
    ],
  },

  before: {
    takeaway: "Le point de départ : dense, peu lisible et facile à repousser.",
    frame: "browser",
    intro: "Les captures d’écran sont en anglais, telles qu’elles ont été conçues.",
    shots: [
      { src: img("before-footprint"), alt: "Ancienne page d’empreinte carbone avec six paragraphes de texte et des libellés pâles", caption: "Six paragraphes avant la moindre donnée, et des libellés à un contraste d’environ 2:1." },
      { src: img("before-action-plan"), alt: "Ancien plan d’action carbone avec cinq boutons Afficher/Modifier identiques", caption: "Cinq boutons identiques et aucune notion de progression." },
      { src: img("before-production-details"), alt: "Ancienne page de détails d’une production", caption: "Des dates acceptées dans le désordre, et des libellés de phase pâles." },
      { src: img("before-request-account"), alt: "Ancienne page de demande de compte avec des champs sans autre libellé que leur texte indicatif", caption: "Des champs sans libellé visible, et du texte sur des arrière-plans changeants." },
    ],
  },

  mobile: {
    takeaway: "Entrer dans l’outil, sur n’importe quel appareil.",
    intro: "La V2 a rendu l’inscription possible sur téléphone, avec un chemin clair quand votre société n’est pas listée et, à chaque étape, un message sur la suite.",
    shots: [
      { src: img("m-sign-in"), alt: "Écran de connexion", caption: "Connexion." },
      { src: img("m-request-account"), alt: "Formulaire de demande de compte avec des champs libellés", caption: "Des champs libellés, et « Ajouter une société » si la vôtre manque." },
      { src: img("m-company-not-listed"), alt: "Formulaire Société non listée avec le pays, le type de société et l’option SPV", caption: "Enregistrer une nouvelle société sans écrire à personne." },
      { src: img("m-thanks"), alt: "Écran de remerciement expliquant l’étape d’approbation", caption: "La suite, en termes simples." },
      { src: img("m-create-password"), alt: "Écran de création du mot de passe après approbation", caption: "Approuvé, puis directement au mot de passe." },
      { src: img("m-network-error"), alt: "Écran de changement de mot de passe avec un bandeau d’erreur réseau", caption: "Les erreurs disent ce qui s’est passé et quoi faire." },
      { src: img("m-workspaces"), alt: "Sélecteur d’espace de travail listant les rôles dans plusieurs sociétés", caption: "Un identifiant, plusieurs rôles : changer d’espace en une touche." },
    ],
  },

  web: {
    takeaway: "Une seule boîte à outils, une vue pour chaque rôle.",
    shots: [
      { src: img("v1-production-list"), alt: "Liste des productions avec l’état du bilan et du plan d’action de chacune", caption: "V1 : l’état du bilan et du plan d’action de chaque production d’un coup d’œil." },
      { src: img("v1-action-plan"), alt: "Plan d’action carbone avec progression et thèmes", caption: "V1 : progression, scores et thèmes au lieu de cinq boutons vides." },
      { src: img("v1-production-details"), alt: "Détails d’une production regroupés en cartes", caption: "V1 : les détails regroupés en cartes, chacune modifiable séparément." },
      { src: img("v2-action-plan-guidance"), alt: "Conseils de décarbonation par catégorie avec des actions à ajouter", caption: "V2 : des conseils par catégorie, une touche pour ajouter une action." },
      { src: img("v2-add-to-action-plan"), alt: "Fenêtre d’ajout au plan d’action avec attribution à un utilisateur et fréquence", caption: "V2 : confier chaque action à une personne, selon un calendrier." },
      { src: img("v2-action-plan-added"), alt: "Conseils sur les vols avec les actions ajoutées cochées", caption: "V2 : les actions ajoutées sont cochées sur place." },
      { src: img("v2-carbon-actions"), alt: "Liste des actions carbone avec l’état et la personne responsable de chaque action", caption: "V2 : Actions carbone montre qui est responsable de quoi." },
      { src: img("v2-footprint-table"), alt: "Saisies d’électricité dans un tableau modifiable avec filtres", caption: "V2 : les saisies du bilan dans un tableau modifiable et filtrable." },
      { src: img("v2-certification-pathway"), alt: "Choix entre le logo de participation et la certification complète, avec un tableau comparatif", caption: "V2 : deux chemins de certification, comparés côte à côte." },
      { src: img("v2-certification-review"), alt: "Résultat de certification avec les preuves et les commentaires de l’évaluateur pour chaque réponse", caption: "V2 : les commentaires de l’évaluateur à côté de chaque preuve." },
      { src: img("v2-reports"), alt: "Liste de rapports avec les émissions par production (données réelles floutées)", caption: "V2 : rapports standard et personnalisés. Les vraies productions sont floutées." },
    ],
  },

  accessibility: {
    takeaway: "L’accessibilité a guidé la refonte, ce n’était pas une vérification finale.",
    done: [
      { title: "Des libellés visibles sur chaque champ", body: "Les champs qui ne comptaient que sur un texte indicatif ont reçu des libellés permanents et un texte d’aide." },
      { title: "L’état ne repose jamais sur la seule couleur", body: "Chaque état associe un texte à la couleur, et les avertissements ajoutent une icône." },
      { title: "Des erreurs sur lesquelles on peut agir", body: "Les messages apparaissent à côté du champ, disent ce qui ne va pas et indiquent l’étape à corriger." },
      { title: "Un langage clair et une progression visible", body: "Les paragraphes denses sont devenus de courts conseils, avec la progression affichée sur chaque tâche pour réduire la charge cognitive." },
      { title: "Une structure prévisible", body: "Les mêmes onglets de production, titres et actions dans chaque module." },
    ],
    gaps: [
      {
        title: "Le violet de la marque est trop clair pour un petit texte blanc",
        body: "#806FFF avec du texte blanc donne un contraste de 3,7:1, sous le seuil AA. Une teinte plus foncée comme #5F4BE8 (5,7:1) passerait pour les boutons et les liens, en gardant la teinte claire pour la décoration.",
      },
      {
        title: "Certains badges d’état demandent encore du travail sur le contraste",
        body: "Les badges plus clairs, comme « Pas commencé », ont besoin d’un texte ou d’un fond plus foncé pour atteindre le niveau AA.",
      },
    ],
  },

  outcomes: {
    takeaway: "Les productions commencent désormais plus tôt, et avaient hâte de l’utiliser.",
    items: [
      "Les productions qui commencent leur bilan en préproduction sont passées de 30 % à 55 %, le problème que notre recherche visait à résoudre",
      "Les critères WCAG 2.2 AA respectés sont passés de 60 % à 85 % lors de notre audit d’accessibilité",
      "La satisfaction moyenne des sociétés de production est passée de 3,3 à 4,3 sur 5 (+30 %), et elles avaient hâte d’adopter la refonte",
      "V1 : comptes avec connexion à deux facteurs, administration des sociétés, liste et configuration des productions, et un plan d’action guidé par la progression",
      "V2 : parcours du calculateur avec import en masse, actions carbone attribuables, deux chemins de certification, rapports et inscription sur mobile",
      "Des vues propres à chaque rôle pour les équipes de production, les évaluateurs, les partenaires territoriaux et les diffuseurs",
    ],
  },

  reflection: {
    takeaway: "Ce que je me dirais le premier jour.",
    learned: [
      "Concevoir pour la personne qui a le reçu, pas pour celle qui a l’identifiant.",
      "Livrer le parcours avant le moteur nous a valu la confiance des utilisateurs et nous a appris ce dont le calculateur avait vraiment besoin.",
      "Un audit d’accessibilité en début de projet est un brief de design, pas une liste de bogues.",
      "Vérifier les couleurs de la marque par rapport aux WCAG avant le premier composant. Corriger le contraste plus tard touche à tout.",
    ],
    next: {
      title: "La suite",
      body: "Continuer à mesurer à quel moment les productions commencent, ainsi que l’exhaustivité des données et les taux de certification à mesure que la V2 se déploie, et foncer la couleur principale pour que chaque bouton et chaque badge atteigne le niveau AA.",
    },
  },
};
