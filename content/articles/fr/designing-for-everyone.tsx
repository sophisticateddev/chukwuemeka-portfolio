import { Callout, DoDont, Quote } from "@/components/writing/Blocks";

export default function Article() {
  return (
    <>
      <p>
        Quand j’ai travaillé sur albert, la plateforme de durabilité de BAFTA pour l’industrie
        audiovisuelle, respecter les normes WCAG était un objectif explicite. J’en suis ressorti
        avec une phrase que je répète depuis dans chaque équipe : le produit doit fonctionner pour
        tous ceux qui font du cinéma et de la télévision. Y compris la productrice qui lit sur un
        téléphone fissuré en plein soleil, le monteur qui navigue uniquement au clavier, et
        l’assistant de plateau daltonien qui ne l’a jamais mentionné.
      </p>
      <p>
        L’accessibilité n’est pas une fonctionnalité qu’on ajoute à la fin. C’est un minimum, comme
        l’orthographe. Voici cinq points que je vérifie à chaque revue de design. Aucun ne demande
        de spécialiste, et tous améliorent le produit pour tout le monde, pas seulement pour les
        personnes auxquelles on pense d’habitude quand on dit « accessibilité ».
      </p>

      <Quote cite="Tim Berners-Lee, W3C, 1997 (traduit de l’anglais)">
        La puissance du Web réside dans son universalité. L’accès de tous, quel que soit le
        handicap, en est un aspect essentiel.
      </Quote>

      <h2>1. Le contraste n’est pas une question d’ambiance</h2>
      <p>
        Un texte gris clair sur fond blanc a l’air élégant sur Dribbble et devient illisible dans la
        vraie vie. Les WCAG demandent un rapport de contraste d’au moins <strong>4,5:1</strong> pour
        le texte courant et de <strong>3:1</strong> pour le grand texte et les éléments d’interface
        comme les bordures de champ. Vérifiez-le avec un plugin; ne faites pas confiance à votre
        écran haut de gamme.
      </p>
      <DoDont
        locale="fr"
        dontLabel="Gris pâle sur blanc, environ 1,9:1. Élégant, et illisible dehors."
        doLabel="Encre foncée sur blanc, bien au-delà de 4,5:1. Toujours sobre, enfin lisible."
        dont={
          <div role="img" aria-label="Exemple : texte gris pâle sur une carte blanche" className="w-full rounded-xl bg-white p-5">
            <p className="font-display text-lg font-semibold text-[#B5B5B5]">Paiement programmé</p>
            <p className="mt-1 text-sm text-[#C4C4C4]">Votre prochain remboursement est le 12 mars.</p>
          </div>
        }
        doThis={
          <div role="img" aria-label="Exemple : texte foncé sur une carte blanche" className="w-full rounded-xl bg-white p-5">
            <p className="font-display text-lg font-semibold text-[#111]">Paiement programmé</p>
            <p className="mt-1 text-sm text-[#4A4A4A]">Votre prochain remboursement est le 12 mars.</p>
          </div>
        }
      />

      <h2>2. Ne laissez jamais la couleur parler seule</h2>
      <p>
        Environ un homme sur 12 et une femme sur 200 présentent une forme de daltonisme. Si la seule
        chose qui signale une erreur dans un champ est une bordure rouge, beaucoup de gens ne verront
        tout simplement pas le problème. Associez la couleur à une icône, à un mot, ou aux deux.
      </p>
      <DoDont
        locale="fr"
        dontLabel="L’erreur n’est signalée que par une bordure rouge."
        doLabel="Une icône et une phrase expliquent ce qui ne va pas et comment le corriger."
        dont={
          <div className="w-full">
            <p className="mb-2 text-sm text-ink">Courriel</p>
            <div className="rounded-lg border-2 border-[#E5484D] bg-raised px-4 py-3 text-sm text-ink">
              ada@gmial.com
            </div>
          </div>
        }
        doThis={
          <div className="w-full">
            <p className="mb-2 text-sm text-ink">Courriel</p>
            <div className="rounded-lg border-2 border-[#E5484D] bg-raised px-4 py-3 text-sm text-ink">
              ada@gmial.com
            </div>
            <p className="mt-2 flex items-center gap-2 text-sm text-ink">
              <span aria-hidden="true" className="flex h-4 w-4 items-center justify-center rounded-full bg-[#E5484D] text-[10px] font-bold text-white">
                !
              </span>
              Vérifiez l’orthographe : vouliez-vous dire gmail.com?
            </p>
          </div>
        }
      />

      <h2>3. Concevez l’état de focus, ne le supprimez pas</h2>
      <p>
        Beaucoup de gens ne touchent jamais une souris : les utilisateurs du clavier, ceux qui
        utilisent un contacteur, ceux dont le pavé tactile est en panne. Le contour de focus, c’est
        leur curseur. Les designers le cachent souvent parce que celui du navigateur est laid. La
        solution n’est pas de le retirer, c’est d’<strong>en concevoir un meilleur</strong> et de le
        mettre dans la bibliothèque de composants, à côté des états survol et appuyé.
      </p>
      <DoDont
        locale="fr"
        dontLabel="Aucun focus visible. Une personne au clavier ne sait pas où elle se trouve."
        doLabel="Un contour net, fidèle à la marque, avec un contraste de 3:1 sur le fond."
        dont={
          <div className="flex gap-3">
            <span className="rounded-full bg-raised px-5 py-2.5 text-sm text-ink">Retour</span>
            <span className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-onaccent">Continuer</span>
          </div>
        }
        doThis={
          <div className="flex gap-3">
            <span className="rounded-full bg-raised px-5 py-2.5 text-sm text-ink">Retour</span>
            <span className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-onaccent outline outline-2 outline-offset-4 outline-ink">
              Continuer
            </span>
          </div>
        }
      />
      <p>
        Essayez sur cette page : appuyez plusieurs fois sur <code>Tab</code>. Chaque lien et chaque
        bouton atteint devrait être évident. Si ce n’est pas le cas, c’est un bogue, et j’aimerais
        sincèrement le savoir.
      </p>

      <h2>4. Donnez un nom à chaque commande, et de l’espace</h2>
      <p>
        Un bouton composé d’une seule icône est une devinette pour un lecteur d’écran s’il n’a pas de
        libellé accessible, et une zone tactile de 24 px est une devinette pour quiconque a de gros
        pouces ou se trouve dans un bus cahoteux. Visez <strong>au moins 44 sur 44 points</strong>,
        et nommez les icônes dans le fichier de design pour que les développeurs sachent quoi
        annoncer.
      </p>
      <DoDont
        locale="fr"
        dontLabel="Une icône minuscule, sans libellé. Le lecteur d’écran annonce « bouton »."
        doLabel="Une cible de 44 pt avec un libellé visible, ou au minimum un aria-label dans la spécification."
        dont={
          <span className="flex h-6 w-6 items-center justify-center rounded border border-control text-xs text-ink">
            <svg width="16" height="4" viewBox="0 0 16 4" aria-hidden="true" fill="currentColor"><circle cx="2" cy="2" r="1.6" /><circle cx="8" cy="2" r="1.6" /><circle cx="14" cy="2" r="1.6" /></svg>
          </span>
        }
        doThis={
          <span className="flex min-h-[44px] items-center gap-2 rounded-full border border-control px-5 text-sm text-ink">
            <svg width="16" height="4" viewBox="0 0 16 4" aria-hidden="true" fill="currentColor"><circle cx="2" cy="2" r="1.6" /><circle cx="8" cy="2" r="1.6" /><circle cx="14" cy="2" r="1.6" /></svg> Plus d’options
          </span>
        }
      />

      <h2>5. Écrivez comme si vous étiez à côté de la personne</h2>
      <p>
        Celui-ci surprend, mais les mots font aussi partie de l’accessibilité. Sur la refonte des
        prêts Carbon, une bonne partie du travail a consisté à réécrire des messages de refus et
        d’erreur qui déroutaient les gens, plutôt qu’à dessiner de nouvelles interfaces. Un langage
        clair aide les personnes ayant un handicap cognitif, celles qui lisent dans une deuxième
        langue, et toute personne stressée qui essaie de régler ses finances à 23 h.
      </p>
      <ul>
        <li>Dites ce qui s’est passé, pourquoi, et quoi faire ensuite, dans cet ordre.</li>
        <li>Utilisez les mots de vos utilisateurs, pas votre vocabulaire interne.</li>
        <li>Écrivez un texte alternatif qui décrit le rôle de l’image, pas seulement ses pixels.</li>
      </ul>

      <Callout label="La revue de 5 minutes">
        <p>Avant votre prochaine passation, parcourez ces points à voix haute avec l’équipe :</p>
        <ol className="list-decimal space-y-2 pl-5 marker:text-accent">
          <li>Tout le texte atteint-il 4,5:1, et les éléments d’interface 3:1?</li>
          <li>Une information passe-t-elle uniquement par la couleur?</li>
          <li>Chaque composant interactif a-t-il un état de focus conçu?</li>
          <li>Les cibles font-elles au moins 44 pt, et les boutons-icônes ont-ils un libellé?</li>
          <li>Une personne stressée et distraite comprendrait-elle chaque message?</li>
        </ol>
      </Callout>

      <p>
        Rien de tout cela ne rend le design moins créatif. Au contraire, cela le rend plus honnête.
        Un bel écran que certaines personnes ne peuvent pas utiliser n’est pas encore terminé.
      </p>
    </>
  );
}
