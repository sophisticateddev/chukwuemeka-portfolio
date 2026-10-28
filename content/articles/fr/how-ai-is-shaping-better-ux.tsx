import { Callout, DoDont, Figure, Quote } from "@/components/writing/Blocks";

export default function Article() {
  return (
    <>
      <p>
        Ce matin, avant même que j’aie fini mon thé, l’IA avait déjà pris une dizaine de décisions
        pour moi. Mon téléphone a trié mes notifications. Ma messagerie a filtré les pourriels. Mon
        application de musique a choisi une liste de lecture qui tombait, agaçant, exactement juste.
        Mon clavier a terminé trois de mes phrases. Rien de tout ça ne s’annonçait comme de « l’IA ».
        On avait juste l’impression d’un bon produit.
      </p>
      <p>
        C’est ce que les designers oublient parfois. Nous parlons de l’IA comme d’un agent
        conversationnel dans un coin de l’écran. La plupart du temps, c’est la couche invisible sous
        l’interface, qui décide quoi montrer, dans quel ordre et à quel moment.
      </p>

      <Quote cite="Mark Weiser, Scientific American, 1991 (traduit de l’anglais)">
        Les technologies les plus profondes sont celles qui disparaissent.
      </Quote>

      <h2>La couche que vous concevez déjà</h2>
      <p>
        Chaque fois que vous concevez un fil, un résultat de recherche, une rangée « recommandé pour
        vous » ou une valeur par défaut intelligente, vous concevez la surface d’un modèle.
        L’interface est ce que les gens voient; les prédictions en dessous façonnent ce qu’ils
        vivent.
      </p>
      <Figure caption="L’interface que les gens voient repose sur des décisions qu’un modèle prend sur ce qu’ils vont voir.">
        <svg
          viewBox="0 0 640 300"
          role="img"
          aria-label="Trois couches empilées : l’interface en haut, les décisions au milieu, le modèle et les données en bas"
          className="h-auto w-full"
        >
          <rect width="640" height="300" fill="rgb(var(--surface))" />
          {[
            { y: 40, label: "Interface", sub: "Ce que les gens voient et touchent", fill: "rgb(var(--accent))", text: "rgb(var(--onaccent))" },
            { y: 120, label: "Décisions", sub: "Classement, valeurs par défaut, suggestions, filtres", fill: "rgb(var(--raised))", text: "rgb(var(--ink))" },
            { y: 200, label: "Modèle + données", sub: "Des tendances apprises des comportements", fill: "rgb(var(--raised))", text: "rgb(var(--ink))" },
          ].map((l, i) => (
            <g key={l.label}>
              <rect x={60 + i * 20} y={l.y} width={520 - i * 40} height="64" rx="14" fill={l.fill} stroke="rgb(var(--line))" />
              <text x={88 + i * 20} y={l.y + 30} fontFamily="sans-serif" fontSize="18" fontWeight="700" fill={l.text}>
                {l.label}
              </text>
              <text x={88 + i * 20} y={l.y + 50} fontFamily="sans-serif" fontSize="13" fill={l.text} opacity="0.75">
                {l.sub}
              </text>
            </g>
          ))}
          <path d="M560 232 C 610 200, 610 110, 560 80" stroke="rgb(var(--accent))" strokeWidth="2" fill="none" strokeDasharray="5 5" />
          <text x="596" y="160" fontFamily="monospace" fontSize="11" fill="rgb(var(--muted))" transform="rotate(90 596 160)">
            boucle de rétroaction
          </text>
        </svg>
      </Figure>

      <h2>Ce qui change quand le système peut se tromper</h2>
      <p>
        Un logiciel traditionnel est prévisible : on appuie sur le bouton, on obtient le résultat.
        L’IA est probabiliste. Elle a généralement raison, et parfois tort avec aplomb. Cette seule
        différence change ma façon de concevoir de trois manières.
      </p>

      <h3>1. Montrez votre raisonnement</h3>
      <p>
        On fait davantage confiance à une suggestion quand on voit pourquoi elle est apparue. Une
        courte ligne « parce que vous avez lu… » fait plus pour la confiance que n’importe quelle
        finition.
      </p>
      <DoDont
        locale="fr"
        dontLabel="Une boîte noire sûre d’elle. Pourquoi ça? Puis-je le changer? Personne ne sait."
        doLabel="La suggestion s’explique et laisse la personne aux commandes."
        dont={
          <div className="w-full rounded-xl border border-line bg-raised p-4">
            <p className="text-sm font-semibold text-ink">Nous avons réécrit votre introduction</p>
            <p className="mt-2 text-sm text-muted">Vos modifications ont été appliquées.</p>
          </div>
        }
        doThis={
          <div className="w-full rounded-xl border border-line bg-raised p-4">
            <p className="text-sm font-semibold text-ink">Suggestion : une introduction plus courte</p>
            <p className="mt-1 text-xs text-muted">Parce que votre premier paragraphe est 3 fois plus long que d’habitude</p>
            <div className="mt-3 flex gap-2">
              <span className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-onaccent">Appliquer</span>
              <span className="rounded-full border border-control px-3 py-1.5 text-xs text-ink">Comparer</span>
              <span className="rounded-full px-3 py-1.5 text-xs text-muted">Ignorer</span>
            </div>
          </div>
        }
      />

      <h3>2. Rendez l’annulation sans effort</h3>
      <p>
        Si le système se trompe parfois, se rattraper ne doit presque rien coûter. Annuler, « pas
        intéressé », des modifications faciles. Chez Writesea, où j’ai conçu des outils d’écriture
        assistés par l’IA, ma règle est simple : l’auteur ne doit jamais avoir l’impression que
        l’IA lui a pris quelque chose.
      </p>

      <h3>3. Concevez pour le « je ne sais pas »</h3>
      <p>
        Les bons produits d’IA ont un état élégant pour les cas de faible confiance. Plutôt qu’une
        mauvaise supposition, ils posent une question, proposent deux ou trois options, ou se
        mettent en retrait pour laisser la personne mener. Concevoir cet état est aussi important
        que concevoir le parcours idéal.
      </p>

      <h2>L’IA change aussi ma façon de travailler</h2>
      <p>
        Ce ne sont pas seulement les produits. L’IA a changé ma méthode. Je l’utilise pour regrouper
        des notes de recherche, rédiger une première version des textes d’interface et construire
        des prototypes fonctionnels en code plutôt que des maquettes cliquables. Ce portfolio, par
        exemple, a été construit avec Claude Code.
      </p>
      <p>
        Mais les arbitrages me reviennent : quel problème nous résolvons, qui nous risquons de
        laisser de côté, et si la chose aide vraiment. L’IA me rend plus rapide. Elle ne me donne
        pas raison.
      </p>

      <Callout label="Questions pour votre prochaine revue de fonctionnalité IA">
        <ul className="list-disc space-y-2 pl-5 marker:text-accent">
          <li>Une personne peut-elle comprendre pourquoi le système a fait ce qu’il a fait?</li>
          <li>En combien de temps peut-elle l’annuler ou le corriger?</li>
          <li>Que se passe-t-il quand le modèle n’est pas sûr de lui?</li>
          <li>Pour qui cela risque-t-il de se tromper plus souvent, et avons-nous testé avec ces personnes?</li>
        </ul>
      </Callout>
    </>
  );
}
