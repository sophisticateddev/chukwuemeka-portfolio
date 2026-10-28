import { Callout, Figure, Quote } from "@/components/writing/Blocks";

const tasks = [
  { x: 470, y: 90, label: "Corriger le message d’erreur du paiement", q: "win" },
  { x: 470, y: 150, label: "Mettre à jour les états vides", q: "win" },
  { x: 90, y: 90, label: "Repenser l’inscription", q: "bet" },
  { x: 140, y: 150, label: "Audit du design system", q: "bet" },
  { x: 480, y: 290, label: "Ranger les icônes", q: "fill" },
  { x: 60, y: 300, label: "Refaire les paramètres de zéro", q: "pit" },
];

export default function Article() {
  return (
    <>
      <p>
        Avant que le design ne prenne toute ma vie, j’étais traiteur pour des événements. Des foules
        nombreuses, plusieurs plats, une seule cuisine, et un client qui veut le jollof en premier.
        Ce qui me sauvait, ce n’était pas la vitesse. C’était la <strong>mise en place</strong> :
        avant d’allumer le feu, tout est coupé, mesuré et aligné dans l’ordre où on en aura besoin.
      </p>
      <p>
        Je n’avais pas mesuré à quel point j’avais besoin de cette habitude en design avant de
        jongler avec trois projets, deux parties prenantes convaincues chacune que le sien était la
        priorité, et un Slack qui ne dormait jamais. Je ne manquais pas de temps. Je manquais de
        clarté.
      </p>

      <Quote cite="Dwight D. Eisenhower, 1954 (traduit de l’anglais)">
        Ce qui est important est rarement urgent, et ce qui est urgent est rarement important.
      </Quote>

      <h2>1. Tout sortir de votre tête</h2>
      <p>
        Chaque lundi, je vide ma tête : chaque tâche, demande, demi-promesse et « petit service »,
        sur une seule liste. On ne peut pas prioriser ce qu’on ne voit pas, et une tête pleine de
        choses en suspens donne l’impression que tout est urgent.
      </p>

      <h2>2. Placer l’impact face à l’effort</h2>
      <p>
        Ensuite, je trie la liste selon deux questions : à quel point cela fera-t-il avancer le
        résultat qui compte, et combien cela coûtera-t-il? Ça paraît basique. Ça l’est. Mais ça met
        fin à la plupart des débats, parce que « le mien est plus important » devient une image que
        tout le monde peut regarder ensemble.
      </p>
      <Figure caption="Une matrice impact-effort d’une semaine typique. Les gains rapides d’abord, les grands paris planifiés, les gouffres remis en question.">
        <svg viewBox="0 0 640 380" role="img" aria-labelledby="matrix-desc-fr" className="h-auto w-full">
          <desc id="matrix-desc-fr">
            Gains rapides, fort impact et faible effort : corriger le message d’erreur du paiement,
            mettre à jour les états vides. Grands paris, fort impact et effort important : repenser
            l’inscription, audit du design system. Bouche-trous, faible impact et faible effort :
            ranger les icônes. Gouffre, faible impact et effort important : refaire les paramètres
            de zéro.
          </desc>
          <rect width="640" height="380" fill="rgb(var(--surface))" />
          <rect x="330" y="30" width="280" height="160" rx="12" fill="rgb(var(--accent))" opacity="0.1" />
          <line x1="320" y1="24" x2="320" y2="356" stroke="rgb(var(--control))" />
          <line x1="40" y1="190" x2="610" y2="190" stroke="rgb(var(--control))" />
          <g fontFamily="monospace" fontSize="12" fill="rgb(var(--muted))">
            <text x="50" y="48">GRANDS PARIS · planifier</text>
            <text x="340" y="48" fill="rgb(var(--accent))">GAINS RAPIDES · en premier</text>
            <text x="50" y="348">GOUFFRE · remettre en question</text>
            <text x="340" y="348">BOUCHE-TROUS · regrouper</text>
            <text x="20" y="110" transform="rotate(-90 20 110)">PLUS D’IMPACT</text>
            <text x="560" y="210" textAnchor="end">MOINS D’EFFORT</text>
            <text x="50" y="210">PLUS D’EFFORT</text>
          </g>
          {tasks.map((t) => (
            <g key={t.label}>
              <circle cx={t.x - 14} cy={t.y - 4} r="6" fill={t.q === "win" ? "rgb(var(--accent))" : t.q === "bet" ? "rgb(var(--ink))" : "rgb(var(--control))"} />
              <text x={t.x} y={t.y} fontFamily="sans-serif" fontSize="12" fill="rgb(var(--ink))">
                {t.label}
              </text>
            </g>
          ))}
        </svg>
      </Figure>
      <p>
        Les gains rapides sont faits cette semaine. Les grands paris reçoivent des plages réservées
        dans l’agenda. Les bouche-trous sont regroupés en un après-midi tranquille. Les gouffres
        méritent une conversation polie mais franche.
      </p>

      <h2>3. Une priorité par jour</h2>
      <p>
        Pas trois. Une. Si je ne termine rien d’autre aujourd’hui, quelle chose ferait de cette
        journée une bonne journée? Je l’écris sur une note autocollante que je colle sur mon écran.
        C’est rudimentaire, et ça marche si bien que c’en est gênant.
      </p>

      <h2>4. Protéger le travail de fond comme une réunion</h2>
      <p>
        Le design demande de longues plages de réflexion sans interruption. Je bloque deux matinées
        par semaine en « concentration » dans mon agenda, notifications coupées, et je les traite
        exactement comme une réunion avec ma partie prenante la plus importante. Parce que c’en est
        une.
      </p>

      <h2>5. Dire le compromis à voix haute</h2>
      <p>
        La plupart des douleurs de priorisation sont en réalité des douleurs de communication. Quand
        quelqu’un vous confie une nouvelle demande, ne vous contentez pas de dire oui ou non. Rendez
        le compromis visible :
      </p>
      <figure className="not-prose my-8 rounded-2xl border border-line bg-surface p-6">
        <figcaption className="eyebrow mb-3">Une formule que j’utilise</figcaption>
        <p className="font-display text-xl font-medium leading-relaxed text-ink">
          « Avec plaisir. Pour le faire cette semaine, il faudrait repousser le parcours
          d’inscription au prochain sprint. Qu’est-ce qui compte le plus pour vous en ce moment? »
        </p>
      </figure>
      <p>
        Neuf fois sur dix, la réponse est « ah, l’inscription, ça peut attendre », et personne ne
        s’est senti ignoré.
      </p>

      <Callout label="Mes 15 minutes du vendredi">
        <ul className="list-disc space-y-2 pl-5 marker:text-accent">
          <li>Vider la liste : fait, déléguer, abandonner ou planifier.</li>
          <li>Placer toute nouvelle tâche sur la matrice impact-effort.</li>
          <li>Choisir la priorité unique du lundi suivant avant de me déconnecter.</li>
          <li>Bloquer les matinées de concentration de la semaine suivante si ce n’est pas déjà fait.</li>
        </ul>
      </Callout>

      <p>
        Mener plusieurs projets de front ne devient jamais vraiment facile. Mais ça devient serein.
        Et d’après mon expérience, les designers sereins prennent de bien meilleures décisions que
        les designers débordés.
      </p>
    </>
  );
}
