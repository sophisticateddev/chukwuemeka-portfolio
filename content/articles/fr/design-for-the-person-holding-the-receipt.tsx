import { Callout, DoDont, Figure } from "@/components/writing/Blocks";

export default function Article() {
  return (
    <>
      <p>
        Au milieu d’une séance de recherche sur albert, la boîte à outils carbone de BAFTA pour le
        cinéma et la télévision, j’ai posé une question simple : qui sait vraiment ce qui s’est
        passé sur le plateau la semaine dernière? D’une séance à l’autre, la réponse était la même.
        Pas la personne qui a l’identifiant. Le détail se trouvait chez l’équipe de tournage, les
        chefs de département, la comptabilité, et dans des reçus que personne n’avait le temps de
        saisir.
      </p>
      <p>
        Ce moment a changé ma façon de concevoir. Un an plus tard, en travaillant sur la plateforme
        d’écriture de Writesea pour les universités, je suis tombé sur le même problème, vu de
        l’autre côté. Voici ce que ces deux projets m’ont appris, et les questions que je pose
        désormais avant de dessiner le moindre écran.
      </p>

      <h2>L’identifiant et la connaissance ne sont pas au même endroit</h2>
      <p>
        La plupart des outils d’entreprise sont conçus pour la personne qui se connecte. Ça semble
        évident : c’est elle qui utilise le produit. Mais dans beaucoup d’organisations, la
        personne qui se connecte est un coordinateur. Elle rassemble des informations que
        d’autres détiennent, souvent des semaines après les faits.
      </p>
      <p>
        Sur albert, cet écart avait un coût. La boîte à outils était difficile à parcourir, alors
        les équipes la repoussaient à la postproduction. À ce stade, la plupart des actions et des
        preuves avaient disparu. Les productions n’échouaient pas parce que la durabilité ne les
        intéressait pas. Elles échouaient parce que l’outil demandait à la mauvaise personne, au
        mauvais moment, de se souvenir de tout.
      </p>

      <Figure caption="La personne qui a l’accès et celles qui ont les détails sont rarement les mêmes. Un bon design les relie.">
        <svg
          viewBox="0 0 640 300"
          role="img"
          aria-label="À gauche, un coordinateur qui a l’identifiant. À droite, l’équipe, la comptabilité et les reçus qui détiennent les détails. Des flèches intitulées confier, importer et estimer les relient."
          className="h-auto w-full"
        >
          <rect width="640" height="300" fill="rgb(var(--surface))" />
          <rect x="40" y="100" width="170" height="100" rx="16" fill="rgb(var(--raised))" stroke="rgb(var(--accent))" strokeWidth="1.5" />
          <text x="62" y="140" fontFamily="sans-serif" fontSize="17" fontWeight="700" fill="rgb(var(--ink))">A l’identifiant</text>
          <text x="62" y="166" fontFamily="sans-serif" fontSize="13" fill="rgb(var(--muted))">Coordination, admin</text>
          {[
            { y: 40, t: "Équipes et services", s: "Ce qui a vraiment été fait" },
            { y: 120, t: "Comptabilité", s: "Dépenses, factures" },
            { y: 200, t: "Reçus et fichiers", s: "Les preuves" },
          ].map((b) => (
            <g key={b.t}>
              <rect x="430" y={b.y} width="170" height="62" rx="14" fill="rgb(var(--raised))" stroke="rgb(var(--line))" />
              <text x="450" y={b.y + 27} fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="rgb(var(--ink))">{b.t}</text>
              <text x="450" y={b.y + 47} fontFamily="sans-serif" fontSize="12" fill="rgb(var(--muted))">{b.s}</text>
            </g>
          ))}
          {[
            { y: 71, label: "confier" },
            { y: 151, label: "importer" },
            { y: 231, label: "estimer" },
          ].map((a) => (
            <g key={a.label}>
              <path d={`M214 150 C 300 150, 330 ${a.y}, 426 ${a.y}`} stroke="rgb(var(--accent))" strokeWidth="1.5" fill="none" strokeDasharray="5 5" />
              <text x="318" y={(150 + a.y) / 2 - 6} fontFamily="monospace" fontSize="12" fill="rgb(var(--accent))">{a.label}</text>
            </g>
          ))}
        </svg>
      </Figure>

      <h2>Concevoir la passation, pas seulement le formulaire</h2>
      <p>
        Une fois l’écart repéré, le brief a changé. Il ne s’agissait plus de faire un meilleur
        formulaire pour le coordinateur, mais d’obtenir l’information auprès de ceux qui la
        détiennent, tant qu’elle est fraîche. Trois choix de design ont fait l’essentiel du travail.
      </p>

      <h3>1. Laisser les gens confier le travail</h3>
      <p>
        Dans le plan d’action repensé, toute action suggérée peut être ajoutée au plan, confiée à
        une personne nommée et dotée d’une fréquence. Cette personne la voit dans sa propre liste
        de tâches et la met à jour au fur et à mesure. Le coordinateur cesse de relancer et passe à
        la vérification.
      </p>

      <h3>2. Accepter le format que les gens utilisent déjà</h3>
      <p>
        La comptabilité ne pense pas en formulaires, elle pense en tableurs. Nous avons donc ajouté
        un import qui accepte un fichier CSV ou Excel jusqu’à 1 000 lignes, avec un modèle de
        départ, et un tableau modifiable pour tout ce qui doit être corrigé ensuite. Les preuves
        existaient déjà. Nous avons simplement arrêté de demander aux gens de les ressaisir.
      </p>

      <h3>3. Faire en sorte que « à peu près juste maintenant » vaille mieux que « parfait plus tard »</h3>
      <p>
        Bien des productions n’ont pas de relevé de compteur pour un studio ou un bureau. Plutôt
        qu’une impasse, nous avons proposé des références : choisir le type d’espace et consigner
        une estimation honnête le jour même. Une donnée enregistrée pendant la production vaut
        mieux que rien du tout à la fin.
      </p>

      <DoDont
        locale="fr"
        dontLabel="Un long formulaire, rempli par une seule personne, des mois après les faits."
        doLabel="De petites tâches, prises en charge par ceux qui ont fait le travail, consignées sur le moment."
        dont={
          <div className="w-full rounded-xl border border-line bg-raised p-4">
            <p className="text-sm font-semibold text-ink">Empreinte carbone</p>
            <p className="mt-1 text-xs text-muted">Section 4 sur 12 · Énergie, matériaux, déplacements…</p>
            <div className="mt-3 h-2 w-full rounded-full bg-line" />
          </div>
        }
        doThis={
          <div className="w-full space-y-2 rounded-xl border border-line bg-raised p-4">
            <p className="text-sm font-semibold text-ink">Passer à l’éclairage LED</p>
            <p className="text-xs text-muted">Confiée à : chef électricien · Hebdomadaire</p>
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-onaccent">
              En cours
            </span>
          </div>
        }
      />

      <p>
        La part des productions qui commencent leur bilan en préproduction, plutôt qu’après la fin
        du tournage, est passée de 30 % à 55 %. Ce chiffre compte plus pour moi que n’importe quel
        écran que j’ai conçu, parce que c’était le problème que la recherche avait désigné.
      </p>

      <h2>Writesea : la même leçon, vue de l’autre côté</h2>
      <p>
        Chez Writesea, je concevais pour les universités. Les conseillers d’orientation
        professionnelle fixent les normes, les étudiants écrivent, et les administrateurs des
        universités et des revendeurs configurent le tout. Trois groupes, trois métiers très
        différents, un seul produit.
      </p>
      <p>
        Quand nous avons construit le générateur de modèles, il aurait été facile de concevoir pour
        la personne qui le configure et de donner aux étudiants une page blanche pleine d’options.
        À la place, les conseillers définissent la structure une fois, et les étudiants partent
        d’un modèle qui montre déjà à quoi ressemble un bon résultat. Moins de décisions, des
        retours plus clairs, moins d’allers-retours. Son lancement a raccourci les délais de mise
        en marché et réduit la charge du support d’environ la moitié du temps d’une personne.
      </p>
      <p>
        Les modules d’administration suivaient la même idée. Les personnes qui configurent une
        université ne sont pas celles qui l’utilisent au quotidien : le côté administration
        faisait le gros du travail une fois, et tous les autres avaient un produit plus simple.
      </p>

      <Callout label="Quatre questions que je pose à chaque lancement de projet">
        <p>
          <strong>Qui a l’identifiant?</strong> C’est généralement pour cette personne que l’outil
          est conçu.
        </p>
        <p>
          <strong>Qui a l’information?</strong> C’est d’elle que l’outil dépend vraiment.
        </p>
        <p>
          <strong>Quand l’information existe-t-elle?</strong> Concevez pour ce moment-là, pas pour
          l’échéance.
        </p>
        <p>
          <strong>Qu’utilisent-ils déjà?</strong> Tableurs, reçus, modèles, courriels. Allez les
          chercher là.
        </p>
      </Callout>

      <h2>Ce que je ferais autrement</h2>
      <p>
        Je cartographierais dès le premier jour qui détient quelle information, avant de parler de
        fonctionnalités. Sur albert, nous avons trouvé l’écart grâce à la recherche, ce qui est la
        bonne façon de le trouver, mais une simple carte « qui sait quoi, et quand » la première
        semaine nous y aurait menés plus vite.
      </p>
      <p>
        Les meilleurs outils d’entreprise ne servent pas seulement la personne qui se connecte. Ils
        la relient discrètement à tous ceux qui font que le travail se fait. Concevez pour la
        personne qui a le reçu, et celle qui a l’identifiant aura une tâche beaucoup plus simple.
      </p>
    </>
  );
}
