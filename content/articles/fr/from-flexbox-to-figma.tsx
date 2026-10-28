import { Callout, Code, Figure } from "@/components/writing/Blocks";
import FlexDemo from "@/components/writing/FlexDemo";

// Figma setting names stay in English, as most designers use the English interface.
const mapping = [
  { figma: "Auto layout activé", css: "display: flex" },
  { figma: "Horizontal / Vertical", css: "flex-direction: row / column" },
  { figma: "Espacement entre les éléments", css: "gap" },
  { figma: "Marge intérieure (padding)", css: "padding" },
  { figma: "Alignement", css: "align-items + justify-content" },
  { figma: "Hug contents", css: "width: fit-content (l’élément s’ajuste à son contenu)" },
  { figma: "Fill container", css: "flex: 1 (ou align-self: stretch sur l’axe secondaire)" },
  { figma: "Largeur fixe", css: "width: 240px; flex-shrink: 0" },
  { figma: "Retour à la ligne (wrap)", css: "flex-wrap: wrap" },
];

export default function Article() {
  return (
    <>
      <p>
        J’ai appris Flexbox avant l’Auto Layout, surtout par entêtement. Je voulais comprendre
        pourquoi les développeurs répétaient que mes maquettes étaient « difficiles à construire ».
        Puis Figma a lancé l’Auto Layout fin 2019, et j’ai eu une étrange impression de déjà-vu. Le
        panneau de droite, c’était Flexbox en veste de designer.
      </p>
      <p>
        Ce n’est pas une critique. C’est sa plus grande qualité. Quand votre outil de design pense
        comme le navigateur, l’écart entre ce que vous dessinez et ce qui est livré devient très
        petit.
      </p>

      <h2>La même idée, des noms différents</h2>
      <p>
        Flexbox dispose les enfants le long d’un axe, avec des règles d’espacement et d’alignement,
        et laisse les éléments grandir ou rétrécir pour s’adapter. L’Auto Layout fait exactement la
        même chose. Une fois la correspondance vue, impossible de l’oublier :
      </p>

      <div className="not-prose my-10 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[480px] text-left text-sm">
          <caption className="sr-only">Réglages de l’Auto Layout de Figma et leurs équivalents en CSS Flexbox</caption>
          <thead className="bg-surface">
            <tr>
              <th scope="col" className="px-5 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted">
                Figma
              </th>
              <th scope="col" className="px-5 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted">
                CSS
              </th>
            </tr>
          </thead>
          <tbody>
            {mapping.map((m) => (
              <tr key={m.figma} className="border-t border-line">
                <td className="px-5 py-3 text-ink">{m.figma}</td>
                <td className="px-5 py-3 font-mono text-[13px] text-accent">{m.css}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Essayez</h2>
      <p>
        Modifiez les réglages ci-dessous. L’aperçu est du vrai CSS, et les panneaux montrent ce que
        vous écririez en code et ce que vous régleriez dans Figma. Le même conteneur, deux
        vocabulaires.
      </p>
      <Figure caption="Interactif : un conteneur flex, décrit à la fois en CSS et dans les termes de Figma.">
        <FlexDemo />
      </Figure>

      <h2>Pourquoi cela fait de vous un meilleur designer</h2>
      <h3>Vos maquettes résistent au vrai contenu</h3>
      <p>
        Un cadre statique est parfait avec le texte que vous avez tapé. Les cadres en Auto Layout se
        réorganisent quand le libellé d’un bouton est traduit en allemand ou que le nom de
        l’utilisateur fait 40 caractères. C’est le comportement du navigateur, et désormais votre
        fichier l’a aussi.
      </p>
      <h3>La passation devient une conversation, pas une traduction</h3>
      <p>
        Quand je dis « c’est une pile verticale, écart de 16, marge de 24, les enfants remplissent la
        largeur », un développeur peut l’écrire presque mot pour mot :
      </p>
      <Code label="card.css">{`.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
}
.card > * {
  align-self: stretch; /* Fill container */
}`}</Code>
      <h3>Vous arrêtez de vous battre avec l’outil</h3>
      <p>
        La plupart des frustrations avec l’Auto Layout viennent de l’imbrication. En CSS, personne
        ne construit une page avec un seul conteneur flex géant; on imbrique de petits conteneurs.
        Traitez les cadres de la même façon : une ligne dans une colonne dans une carte. Chacun a
        un seul rôle.
      </p>

      <Callout label="Essayez ceci">
        <p>
          La prochaine fois que vous livrez un composant, ouvrez les outils de développement de votre
          navigateur sur un composant similaire en production. Comparez ses réglages flex à votre
          panneau Auto Layout. La première fois qu’ils correspondent exactement, c’est étrangement
          satisfaisant.
        </p>
      </Callout>

      <p>
        Figma n’a pas inventé cette façon de penser, et c’est justement pour ça qu’elle fonctionne.
        Les meilleurs outils de design empruntent au support pour lequel on conçoit. Apprenez-en un
        peu sur le support, et l’outil commence à avoir beaucoup plus de sens.
      </p>
    </>
  );
}
