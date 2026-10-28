import type { CaseStudy } from "@/lib/case-study";
import { characterGuess } from "../character-guess";

const img = (name: string) => `/images/work/character-guess/${name}.jpg`;

export const characterGuessFr: CaseStudy = {
  headline: "Une soirée de jeux en famille, devenue un jeu multijoueur en direct pour plus de 100 joueurs.",
  status: "Bêta en ligne",
  liveUrl: "https://characterguess.com",
  liveLabel: "Voir le jeu en ligne",
  roles: ["Conçu de bout en bout", "Construit avec l’IA (Claude Code)", "Mis en production", "Équipe de trois"],
  summary: {
    problem:
      "Notre jeu préféré des soirées en famille, deviner des personnages à partir de citations, ne fonctionnait que dans la même pièce, avec quelqu’un prêt à écrire les indices.",
    did:
      "J’ai conçu le produit de bout en bout, puis construit le front-end avec Claude Code, en équipe avec nos responsables du backend et du produit, du prototype jusqu’à une application Web en ligne.",
    result:
      "Un jeu en ligne et installable, avec 6 catégories, 3 langues et plus de 100 joueurs bêta, qui s’est fait connaître uniquement par le bouche-à-oreille.",
  },
  metrics: [
    { value: "100+", label: "joueurs bêta, tous par bouche-à-oreille" },
    { value: "3 000+", label: "questions dans 6 catégories en ligne" },
    { value: "3", label: "langues : anglais, espagnol, français" },
    { value: "320px–4K", label: "un seul design system adaptatif" },
  ],
  hero: {
    mobile: {
      src: img("game-correct-mobile-dark"),
      alt: "Character Guess sur un téléphone : une bonne réponse surlignée en vert avec une notification de succès Speed Demon",
    },
    desktop: {
      src: img("landing-desktop-dark"),
      alt: "Page d’accueil de Character Guess sur ordinateur avec une carte de démonstration jouable « Qui suis-je? »",
    },
  },
  meta: [
    { label: "Rôle", value: "Cofondateur · design produit et front-end (avec l’IA)" },
    { label: "Équipe", value: "Nous trois : design, ingénierie et produit" },
    { label: "Période", value: "août 2025 – aujourd’hui" },
    { label: "Plateforme", value: "Application Web installable (PWA) : mobile, tablette, ordinateur" },
  ],

  origin: {
    takeaway: "Tout a commencé autour de notre table, et c’est toujours le test que chaque fonctionnalité doit réussir.",
    body: [
      "Lors de nos soirées de jeux en famille, ma femme écrivait des citations et des indices sur des personnages, et nous devinions à tour de rôle qui les avait prononcés. Ça marchait à tous les coups. Enfants, adultes, cousins compétitifs : tout le monde se prenait au jeu, parce qu’un bon indice vous donne l’impression d’être malin à l’instant où ça fait tilt.",
      "Le problème, c’est que ça ne fonctionnait que dans cette pièce, et seulement si quelqu’un se chargeait d’écrire les indices. Je voulais capturer cette sensation dans quelque chose que n’importe qui pourrait ouvrir sur un téléphone, jouer en deux minutes et partager avec ses proches.",
    ],
  },

  context: {
    takeaway: "Le défi : qu’un jeu d’apprentissage ait l’air d’un jeu de société, pour les 10 à 70 ans, sur n’importe quel appareil.",
    body: [
      "La plupart des jeux de connaissances tombent dans l’un de deux pièges : éducatifs mais ennuyeux, ou amusants mais superficiels. Nous voulions la curiosité qu’éveille un bon indice, la compétition d’un classement, et des contenus qui comptent vraiment pour les gens, en commençant par la Bible et le football.",
      "Notre public est inhabituellement large : familles, groupes de jeunes d’Église, fans de football, salles de classe. La plupart jouent sur téléphone avec des données mobiles : le jeu devait donc être rapide, léger et fonctionner sans passer par une boutique d’applications.",
    ],
    constraints: [
      "Seulement trois personnes, sans testeur dédié ni budget marketing",
      "De jeunes joueurs : consentement parental et sécurité dès le premier jour",
      "Doit tolérer une connexion instable sur des téléphones d’entrée de gamme et être superbe sur ordinateur",
      "Le contenu doit pouvoir s’étendre à de nouvelles catégories sans refonte",
    ],
  },

  team: {
    takeaway: "Trois personnes, des responsabilités claires. J’étais responsable de l’expérience de bout en bout et j’ai construit le front-end avec l’IA.",
    members: [
      {
        name: "Chukwuemeka Iheonye",
        role: "Cofondateur · designer produit et développeur assisté par l’IA",
        owned: "Direction produit et UX, design system, chaque écran et chaque parcours, développement front-end avec Claude Code, accessibilité.",
        me: true,
      },
      {
        name: "Patrick Aziken",
        role: "Backend, DevOps et QA",
        owned: "API et base de données, chaîne de déploiement (dev → bêta → production), surveillance, tests de bout en bout.",
      },
      {
        name: "Gideon Idam",
        role: "Chef de produit et marketing",
        owned: "Feuille de route et priorités, programme bêta, croissance de la communauté et retours des joueurs.",
      },
    ],
  },

  insights: {
    takeaway: "Ce que les soirées de jeux et la première bêta nous ont appris est devenu nos règles de design.",
    items: [
      {
        title: "La première partie doit avoir lieu avant toute inscription",
        body: "Les gens voulaient jouer dès qu’on leur partageait un lien. Demander un compte d’abord rompait le charme : les invités peuvent donc jouer tout de suite.",
      },
      {
        title: "Les indices valent mieux que les questions",
        body: "Révéler les indices un par un recréait le moment « oh, je sais! » des soirées de jeux. Les réponses rapides rapportent plus de points, ce qui récompense la connaissance sans pénaliser les lecteurs plus lents.",
      },
      {
        title: "Tout le monde ne peut pas être premier",
        body: "Un classement mondial unique ne motive que les meilleurs. Des ligues hebdomadaires plus petites offrent à chacun une course qu’il peut vraiment gagner.",
      },
      {
        title: "La maîtrise se mesure par thème",
        body: "Un expert de la Bible est souvent un débutant en football. Traiter la progression comme un score unique rendait les nouvelles catégories inutiles pour les experts.",
      },
    ],
  },

  decisions: {
    takeaway: "Les décisions derrière les écrans. Chacune a sacrifié quelque chose, volontairement.",
    items: [
      {
        title: "Laisser les invités jouer d’abord, avec une limite de 3 parties",
        context: "Les nouveaux joueurs arrivent souvent par un lien partagé dans une discussion de famille ou d’Église. Un mur d’inscription à ce moment-là tue le plaisir.",
        options: ["Exiger un compte dès le départ", "Jeu illimité pour les invités", "Jeu limité pour les invités, puis une raison de s’inscrire"],
        choice: "Les invités ont droit à 3 parties complètes. Leur progression est enregistrée localement, avec une invitation discrète à créer un compte pour la conserver.",
        why: "La barrière tombe à zéro, avec une raison claire et honnête de s’inscrire : ne pas perdre ce qu’on a gagné.",
        tradeoff: "Plus de complexité : la progression d’un invité doit migrer proprement vers un nouveau compte, et les abus doivent être limités côté serveur.",
      },
      {
        title: "Rester un quiz, pas un jeu de dessin",
        context: "À mesure que le carnet de produit grossissait, nous étions tentés par des fonctionnalités de dessin et de soirée (croquis sur canevas, dessin en chaîne, mode projection).",
        options: ["Pivoter vers un jeu de dessin façon Pictionary", "Garder le choix multiple fondé sur les indices"],
        choice: "Garder le cœur indice-réponse et retirer toutes les propositions de dessin de la feuille de route.",
        why: "Les indices fonctionnent pour tous les âges, sur tous les téléphones, en quelques secondes, et le contenu s’adapte à n’importe quelle catégorie. Le dessin aurait doublé le produit.",
        tradeoff: "Nous avons renoncé à une part de chaos festif en échange d’une boucle de jeu plus nette et plus accessible.",
      },
      {
        title: "Geler les fonctionnalités de la V1 pour consolider les fondations",
        context: "Après 11 sprints, les retours des testeurs étaient clairs : les nouvelles fonctionnalités arrivaient plus vite que les anciennes ne devenaient solides.",
        choice: "Plus aucune nouvelle fonctionnalité dans la V1. Seulement des corrections de bogues, les retours des testeurs et des finitions. Tout le reste est passé au carnet de la V2.",
        why: "La confiance, c’est le produit. Un jeu qui vous fait perdre votre série une fois n’aura pas de seconde chance.",
        tradeoff: "Certaines fonctionnalités attendues ont patienté des mois, une conversation difficile avec nos joueurs les plus engagés.",
      },
      {
        title: "Des design tokens plutôt que des couleurs codées en dur",
        context: "La première refonte utilisait des superpositions blanches codées en dur, ce qui rendait impossible un vrai mode clair.",
        choice: "Un système de tokens sémantiques (surface en verre, bordure, séparateur, texte d’emphase haute, moyenne et faible) qui se résout selon le thème.",
        why: "Les composants ne se soucient plus du thème. Le mode clair est passé d’une réécriture à un simple changement de tokens.",
        tradeoff: "Une migration ponctuelle sur tous les écrans, mais chaque composant depuis se construit plus vite.",
      },
      {
        title: "Une progression distincte pour chaque catégorie",
        context: "Avec un score d’XP unique, une Légende de la Bible commencerait aussi le football en Légende, ce qui vide une nouvelle catégorie de son sens.",
        choice: "Des XP séparés par catégorie, avec des noms de rang assortis au thème (de Seeker à Legend pour la Bible, de Rookie à Legend pour le football).",
        why: "Chaque nouvelle catégorie devient un nouveau parcours, et c’est exactement ce qui pousse à explorer.",
      },
      {
        title: "Générer le son en code, pas en fichiers audio",
        context: "La bibliothèque audio ajoutait 180 Ko et une douzaine de téléchargements, pénible sur les téléphones d’entrée de gamme qu’utilisent beaucoup de nos joueurs.",
        choice: "Les 12 effets sonores sont synthétisés dans le navigateur avec la Web Audio API.",
        why: "Aucune requête réseau, une lecture instantanée et une application plus légère. Le son ne se lance jamais tout seul, et les joueurs le règlent dans les paramètres.",
        tradeoff: "Les sons synthétisés sont plus simples qu’un son produit : nous les avons réglés pour qu’ils soient ludiques plutôt que réalistes.",
      },
    ],
  },

  evolution: {
    takeaway: "La V1 n’est pas arrivée terminée. Voici ce qui a changé en cours de route, et pourquoi.",
    items: [
      { date: "août 2025", title: "Un prototype en quelques jours", body: "Une première version jouable générée avec un constructeur d’applications IA, pour tester la boucle de jeu lors de nos soirées avant d’investir dans le design." },
      { date: "mars 2026", title: "Ouvrir la porte", body: "Jeu en invité limité à 3 parties, plus le consentement parental pour les jeunes joueurs." },
      { date: "avr. 2026", title: "Rendre le jeu équitable", body: "Les scores, les pièces et le multijoueur sont passés à une logique vérifiée par le serveur pour empêcher la triche, tout en laissant les invités rejoindre des salons. Des plafonds quotidiens de pièces ont mis fin à l’accumulation abusive." },
      { date: "avr. 2026", title: "Geler et stabiliser", body: "Gel des fonctionnalités de la V1 au sprint 11; le format quiz conservé; le carnet de produit transféré à la V2." },
      { date: "mai 2026", title: "Des mises en production fiables", body: "Des environnements distincts de développement, de bêta et de production, la surveillance des erreurs, et un parcours de réinitialisation du mot de passe plus clair." },
      { date: "juin 2026", title: "La refonte", body: "Un langage visuel en cartes de verre, des thèmes clair et sombre, la catégorie football, des ligues hebdomadaires, des notifications et une application qui se met à jour toute seule." },
      { date: "juil. 2026", title: "Maîtriser la plateforme", body: "Passage d’un backend hébergé à notre propre API et base de données, pour que la plateforme puisse évoluer vers la V2 sans limites imposées par un fournisseur." },
    ],
  },

  mobile: {
    takeaway: "Conçu pour le pouce : tout ce qui compte se trouve dans la moitié inférieure de l’écran.",
    intro:
      "La plupart des joueurs sont sur téléphone, souvent d’une main, sur un canapé ou en groupe. La navigation se trouve dans une barre en bas, les réponses sont des cibles pleine largeur, et les retours sont instantanés et lisibles à bout de bras. Les captures d’écran sont en anglais.",
    shots: [
      { src: img("levels-mobile-dark"), alt: "Carte des niveaux montrant le parcours du joueur, de Seeker I aux niveaux Learner", caption: "Votre parcours : la progression est un chemin, pas une liste." },
      { src: img("game-question-mobile-dark"), alt: "Une question avec une barre de compte à rebours, un multiplicateur de vitesse et quatre réponses possibles", caption: "Un indice, un chrono et quatre grandes cibles de réponse." },
      { src: img("game-correct-mobile-light"), alt: "Bonne réponse en mode clair avec une référence biblique et une notification de succès", caption: "Un retour instantané, avec la source." },
      { src: img("results-mobile-dark"), alt: "Carte Niveau débloqué pour Seeker II", caption: "Les petites victoires, célébrées." },
      { src: img("leaderboard-mobile-dark"), alt: "Classement flouté pour les invités avec une invitation à se connecter", caption: "Les invités voient ce qu’ils pourraient débloquer." },
      { src: img("lobby-mobile-dark"), alt: "Salon multijoueur pour lancer une partie ou rejoindre avec un code", caption: "Le multijoueur en deux touches." },
      { src: img("achievements-mobile-dark"), alt: "Grille de succès avec des badges verrouillés et en cours", caption: "Des objectifs pour chaque style de jeu." },
    ],
  },

  web: {
    takeaway: "Sur les grands écrans, la navigation passe dans une barre latérale et le jeu reste centré.",
    intro:
      "Sous 1024 px, une barre en bas garde la navigation à portée de pouce. Au-delà, une barre latérale fixe prend le relais. La carte de question ne s’étire jamais sur un écran large : elle reste dans une colonne lisible, pour que vos yeux n’aient pas à voyager.",
    shots: [
      { src: img("landing-desktop-dark"), alt: "Page d’accueil sur ordinateur avec des catégories et une démo jouable", caption: "Accueil : jouer une vraie question avant de s’inscrire." },
      { src: img("levels-desktop-dark"), alt: "Carte des niveaux sur ordinateur avec navigation latérale en mode sombre", caption: "Navigation latérale à partir de 1024 px." },
      { src: img("levels-desktop-light"), alt: "Carte des niveaux sur ordinateur en mode clair", caption: "Le même écran en mode clair, piloté par les tokens." },
      { src: img("game-question-desktop-dark"), alt: "Écran de jeu sur ordinateur avec la question dans une colonne centrée", caption: "Mode concentration : une seule colonne lisible." },
    ],
  },

  designSystem: {
    takeaway: "Un seul système de tokens alimente les deux thèmes, 8 points de rupture et chaque écran.",
    colors: [
      { name: "Violet", value: "#7C3AED", usage: "Actions principales, progression" },
      { name: "Magenta", value: "#D946EF", usage: "Partenaire de dégradé pour les mises en valeur" },
      { name: "Or", value: "#F59E0B", usage: "Récompenses, pièces, succès" },
      { name: "Nuit", value: "#0C0821", usage: "Fond du thème sombre" },
      { name: "Lavande", value: "#F5F2FF", usage: "Fond du thème clair" },
      { name: "Succès", value: "#10B981", usage: "Bonnes réponses" },
      { name: "Erreur", value: "#EF4444", usage: "Mauvaises réponses, actions destructrices" },
    ],
    type: {
      family: "Plus Jakarta Sans",
      notes: "Une seule famille variable (200–800) pour tout. Chaleureuse en grand, lisible en petit, et une seule police à charger.",
    },
    tokens: characterGuess.designSystem?.tokens,
    components: [
      { name: "Option de réponse", states: ["Par défaut", "Appuyée", "Correcte", "Incorrecte", "Désactivée"] },
      { name: "Tuile de niveau", states: ["En cours", "Débloquée", "Terminée (1 à 3 étoiles)", "Verrouillée"] },
      { name: "Carte d’indice", states: ["Masquée", "En cours de révélation", "Révélée", "Indice utilisé"] },
      { name: "Barre de temps", states: ["Calme", "Urgente", "Écoulée"] },
      { name: "Navigation", states: ["Barre du bas (mobile)", "Barre latérale (ordinateur)", "Tiroir Plus"] },
      { name: "Récompenses", states: ["Anneau de pièces", "Notification de succès", "Niveau débloqué", "Badge de ligue"] },
    ],
    motion:
      "Plus de 15 animations nommées partagent une même courbe d’accélération élastique : arrivée de la question, apparition de la réponse, secousse en cas d’erreur, révélation du personnage, urgence du chrono. Toutes sont désactivées pour les personnes qui demandent moins d’animations à leur appareil.",
  },

  accessibility: {
    takeaway: "Construit selon les WCAG 2.2 AA, puis audité honnêtement pour cette étude de cas.",
    done: [
      { title: "Des cibles qu’on peut vraiment toucher", body: "Chaque commande mesure au moins 44×44 px; les actions principales 48 px, avec 8 px entre les cibles." },
      { title: "Clavier et focus", body: "Des contours de focus visibles, un lien d’évitement, un ordre de tabulation logique, et des fenêtres qui retiennent le focus et se ferment avec Échap." },
      { title: "Lecteurs d’écran", body: "Des repères, un ordre de titres strict, des boutons libellés, et des annonces en direct pour les scores, les pièces et les notifications." },
      { title: "Animations et son", body: "Les animations respectent le réglage de réduction des mouvements (les confettis deviennent un badge fixe), et le son ne se lance jamais tout seul." },
      { title: "Des formulaires qui s’expliquent", body: "Les erreurs sont annoncées aux lecteurs d’écran et liées au champ concerné." },
    ],
    gaps: [
      { title: "Le texte de faible emphase est trop pâle", body: "Notre token de texte le plus faible donne un contraste de 3,5:1 en mode sombre et de 2,4:1 en mode clair, sous le minimum de 4,5:1. La solution : le renforcer et le réserver au texte non essentiel." },
      { title: "Le texte secondaire en mode clair", body: "Le texte d’emphase moyenne en mode clair est à 4,0:1. Le foncer légèrement l’amène au niveau AA sans coût visuel." },
      { title: "Le repère de l’écran de jeu", body: "L’écran de jeu n’a pas de repère principal, donc le lien d’évitement n’a nulle part où atterrir. Une correction d’une ligne, désormais sur la liste." },
    ],
  },

  build: {
    takeaway: "L’IA écrit le code vite. Mon travail, c’est de décider ce qui est juste, et de le prouver.",
    intro:
      "Character Guess a commencé comme un prototype généré par l’IA dans Lovable, puis est passé à Claude Code une fois que nous savions que le jeu valait la peine d’être bien construit. Je conçois dans le navigateur, je donne mes consignes à Claude en langage courant, et je traite tout ce qu’il écrit comme une demande de fusion venant d’un junior rapide et sûr de lui : utile, et assez souvent dans l’erreur pour que rien ne parte en production sans vérification.",
    stats: [
      { value: "1 006", label: "commits dans le dépôt" },
      { value: "735", label: "de ma main" },
      { value: "512", label: "coécrits avec Claude" },
      { value: "40", label: "fichiers de tests unitaires, plus des tests E2E Playwright" },
    ],
    steps: [
      { title: "Prototyper pour apprendre", body: "Un prototype généré par l’IA nous a permis de tester la boucle de jeu lors de vraies soirées en quelques jours, avant de concevoir quoi que ce soit de soigné." },
      { title: "Rédiger les consignes comme un designer", body: "Chaque requête porte le problème de l’utilisateur, l’écran et l’état concernés, la contrainte qui compte (navigation mobile, mode sombre, chiffres gérés par le serveur) et la façon dont nous saurons que ça marche. Les consignes de correction partent du signalement du joueur, pas de mon hypothèse sur la cause." },
      { title: "Des composants issus du système", body: "Les nouvelles interfaces sont construites à partir des design tokens et des composants existants, jamais avec des couleurs ponctuelles. Un skill de projet indique à Claude les pièges avant qu’il écrive une ligne : le z-index de la barre du bas, la hauteur des panneaux sur les petits téléphones, et ne jamais calculer les pièces ou les vies côté client." },
      { title: "Reproduire, puis corriger", body: "Claude doit reproduire un bogue avant de le corriger, retrouver son origine dans l’historique git et expliquer la cause dans le commit. La plupart des commits de correction se lisent comme un court rapport d’incident." },
      { title: "Vérifier dans le navigateur", body: "Une vérification de types réussie ne suffit pas. Les changements sont vérifiés en direct dans le navigateur, sur les vrais parcours, avant d’être considérés comme terminés." },
      { title: "Relire et publier", body: "Patrick relit les changements backend et d’infrastructure. L’intégration continue bloque les fusions sur la vérification des types, le lint, le lint des traductions, les tests unitaires et les tests E2E Playwright, puis les versions passent du développement à la bêta, puis à la production." },
    ],
    setup: [
      {
        title: "Une mémoire partagée",
        items: [
          "Une banque de mémoire de contexte, de décisions, de modèles et de journaux de session que chaque session d’IA lit en premier",
          "Une règle : la banque de mémoire est mise à jour avant qu’une tâche soit considérée comme terminée",
          "Un journal des décisions qui consigne le pourquoi, pas seulement le quoi, pour que l’IA ne défasse pas des choix délibérés",
        ],
      },
      {
        title: "Des garde-fous dans le code",
        items: [
          "TypeScript strict côté front-end et backend, vérifié en intégration continue",
          "Des tests unitaires pour la logique de jeu et les affirmations de contenu, Playwright pour les vrais parcours utilisateurs",
          "Un lint des traductions pour que l’anglais, l’espagnol et le français ne divergent jamais",
        ],
      },
      {
        title: "Des mises en production sûres",
        items: [
          "Des environnements distincts de développement, de bêta et de production, chacun avec sa base de données",
          "Des migrations idempotentes et vérifiées par somme de contrôle, qui échouent vite avant un déploiement",
          "Le suivi des erreurs avec Sentry, et une version GitHub publiée seulement après vérification de la production",
        ],
      },
    ],
    mistakes: [
      {
        title: "Elle annonçait des catégories qui n’existent pas",
        wrong: "Les textes de la page d’accueil et les métadonnées de recherche écrits par l’IA promettaient Histoire, Géographie et Sciences. Aucune n’était jouable, et Sciences n’existait même pas.",
        caught: "J’ai vérifié chaque chiffre et chaque catégorie annoncés sur la page par rapport aux données de l’API en direct, ligne par ligne.",
        guardrail: "Un test fait désormais échouer l’intégration continue si le texte nomme une catégorie qui n’est pas en ligne. C’est l’extrait ci-dessous.",
      },
      {
        title: "Une correction de « sécurité des types » a cassé la passation d’hôte",
        wrong: "Claude a ajouté une conversion en uuid à un appel de base de données dont le paramètre est du texte. Chaque tentative de reprendre l’animation d’un salon multijoueur échouait.",
        caught: "En testant localement une nouvelle étape de connexion, j’ai obtenu une erreur 422 inattendue. L’historique git montrait que la version précédente était correcte : la correction l’a rétablie.",
      },
      {
        title: "Les vies affichaient une recharge complète qui n’avait jamais eu lieu",
        wrong: "Le nouveau système de cœurs ne mettait jamais à jour son horodatage de régénération : après une mauvaise réponse, les joueurs pouvaient voir 5 vies alors qu’il leur en restait 1.",
        caught: "Reproduit sur une base Postgres locale : passer de 5 vies à 1 affichait toujours 5.",
        guardrail: "Les vies sont désormais gérées par le serveur, et le skill de projet interdit à l’IA de les calculer côté client.",
      },
      {
        title: "Du code qui passait la vérification des types mais plantait",
        wrong: "Une propriété oubliée dans une déstructuration faisait planter la démo de la page d’accueil, et un lien de partage défini dans une fonction de rappel faisait planter les salons multijoueurs. Les deux passaient le compilateur.",
        caught: "En parcourant les vrais parcours dans le navigateur, et c’est pour cela que la vérification dans le navigateur est une étape, pas un bonus.",
      },
      {
        title: "Des restes du prototype en production",
        wrong: "Le favicon en forme de cœur de Lovable était toujours livré, et son plugin de développement embarquait une ancienne version de Tailwind qui cassait la compilation après une mise à jour.",
        caught: "Un aperçu de lien WhatsApp affichait le logo de quelqu’un d’autre, et le serveur de développement échouait avec des erreurs PostCSS.",
        guardrail: "Les icônes ont été remplacées par les vrais éléments de la marque, et le plugin supprimé.",
      },
      {
        title: "La mémoire de l’IA était périmée",
        wrong: "La banque de mémoire avait 33 jours et plus de 60 commits de retard sur le code : les nouvelles sessions travaillaient à partir d’une image obsolète du produit.",
        caught: "En comparant la documentation à l’historique git, j’ai trouvé plus de 60 commits dont la banque de mémoire ignorait tout.",
        guardrail: "Mettre à jour la banque de mémoire fait désormais partie de la définition de « terminé ».",
      },
    ],
    snippet: characterGuess.build?.snippet && {
      ...characterGuess.build.snippet,
      caption:
        "Écrit après avoir repéré des textes marketing générés par l’IA qui promettaient des catégories que nous n’avions pas construites. Si quiconque, humain ou IA, remet une catégorie non publiée dans la description pour les moteurs de recherche, l’intégration continue échoue avant la mise en ligne.",
    },
  },

  outcomes: {
    takeaway: "Un vrai produit, utilisé par de vraies personnes, construit par une équipe de trois.",
    items: [
      "En ligne sur characterguess.com avec plus de 100 joueurs bêta, venus uniquement par le bouche-à-oreille",
      "6 catégories en ligne, 450 personnages, plus de 3 000 questions et 3 langues",
      "Installable sur n’importe quel téléphone, avec prise en charge hors ligne et mises à jour automatiques",
      "Une chaîne de mise en production fiable, avec des environnements distincts de développement, de bêta et de production",
      "Des retours toujours positifs de la part de familles, de groupes d’Église et de fans de football",
    ],
  },

  testimonials: [],

  reflection: {
    takeaway: "Ce que je me dirais le premier jour, et la suite.",
    learned: [
      "Livrer moins, plus tôt. Le gel des fonctionnalités a amélioré le produit plus que n’importe quelle fonctionnalité ajoutée.",
      "Commencer par les tokens. Le passage au mode clair n’aurait rien coûté si les tokens sémantiques avaient existé dès le premier écran.",
      "L’IA rend la construction rapide; ce sont les décisions qui la rendent bonne. Le journal des décisions écrit a compté autant que le code.",
      "Auditer son propre travail. Rédiger cette étude de cas a fait ressortir des problèmes de contraste qui nous avaient échappé, désormais en tête de la liste des corrections.",
    ],
    next: {
      title: "La V2 arrive",
      body: "Nous reconstruisons Character Guess comme une plateforme : une nouvelle application joueur, un tableau de bord d’administration du contenu, un site vitrine et une API dédiée, prêts pour le multijoueur en temps réel à grande échelle, un mode classe et beaucoup plus de catégories.",
    },
  },
};
