import { Callout, Code, Figure, Quote } from "@/components/writing/Blocks";
import GridDemo from "@/components/writing/GridDemo";

export default function Article() {
  return (
    <>
      <p>
        Pendant mes deux ou trois premières années de métier, j’espaçais les éléments au feeling.
        Douze pixels ici parce que ça avait l’air bien. Quinze là parce que douze semblait serré.
        Dix-neuf sous un titre parce que je l’avais poussé aux flèches du clavier jusqu’à ce que mes
        yeux arrêtent de se plaindre. Chaque écran semblait correct tout seul. Mis côte à côte,
        quelque chose clochait toujours un peu, comme une chanson où le batteur a un demi-temps de
        retard.
      </p>
      <p>
        La grille de 8 pt a réglé ça. Pas parce qu’elle est magique, mais parce qu’elle m’a retiré
        mille petites décisions pour les remplacer par une seule :{" "}
        <strong>tout est un multiple de 8.</strong>
      </p>

      <h2>Pourquoi 8, et pas 5 ou 10?</h2>
      <p>
        La plupart des tailles d’écran courantes se divisent proprement par 8, tout comme les
        facteurs d’échelle des appareils (1x, 1,5x, 2x, 3x). Une valeur de 8 pt à 1,5x donne 12 px
        pile : on évite les demi-pixels flous des nombres impairs. C’est aussi assez grand pour
        rendre les écarts visibles. Passer de 8 à 16 est un vrai pas; passer de 10 à 12, un
        haussement d’épaules.
      </p>
      <p>
        Le Material Design de Google et la plupart des design systems matures avec lesquels j’ai
        travaillé utilisent une échelle en base 8 précisément pour cette raison. Vous n’adoptez pas
        une mode; vous rejoignez un standard.
      </p>

      <h2>Voyez la différence</h2>
      <p>
        Voici deux fois la même carte. La première utilise le genre d’espacement que je faisais à
        l’œil. La seconde cale tout sur 8. Affichez la grille et regardez la seconde se mettre en
        place.
      </p>
      <Figure caption="Interactif : passez de l’espacement à l’œil à l’espacement de 8 pt, et affichez ou masquez la grille.">
        <GridDemo />
      </Figure>
      <p>
        Aucune des deux cartes n’est laide. Mais la version 8 pt a un rythme que votre œil perçoit
        même si vous ne savez pas le nommer. Tout l’enjeu est là :{" "}
        <strong>une cohérence qu’on ressent, sans la voir.</strong>
      </p>

      <h2>Les règles que je suis vraiment</h2>
      <ol>
        <li>
          <strong>L’espacement est toujours un multiple de 8 :</strong> 8, 16, 24, 32, 40, 48, 64,
          80. Si j’ai besoin de plus petit pour des composants serrés comme les puces et la marge
          des icônes, je m’autorise 4 comme demi-pas. Rien d’autre.
        </li>
        <li>
          <strong>Les hauteurs des composants s’alignent aussi.</strong> Boutons à 40 ou 48, champs
          à 48, lignes de liste à 56 ou 64. Les zones tactiles restent ainsi au-dessus du minimum
          de 44 px sans même y penser.
        </li>
        <li>
          <strong>Les interlignes sont des multiples de 4.</strong> Un texte courant de 16 px avec
          un interligne de 24 px, un chapeau de 18 px avec 28. La typographie ne tombe pas
          parfaitement sur la grille, alors je laisse la boîte de ligne faire le travail.
        </li>
        <li>
          <strong>L’espacement intérieur est plus petit que l’espacement extérieur.</strong> Ce qui
          va ensemble reçoit 8 ou 16; les groupes, 24 ou 32; les sections, 64 et plus. La proximité
          fait gratuitement la moitié de votre hiérarchie.
        </li>
      </ol>

      <Quote cite="Dieter Rams">Le bon design, c’est le moins de design possible.</Quote>

      <h2>En faire des tokens</h2>
      <p>
        Une grille dans votre tête est une suggestion. Une grille dans vos design tokens est un
        système. Je nomme les espacements par pas, pas par pixel, pour que personne ne soit tenté de
        taper un nombre au hasard :
      </p>
      <Code label="tokens.css">{`:root {
  --space-1: 4px;   /* demi-pas, avec parcimonie */
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;
  --space-6: 48px;
  --space-7: 64px;
}`}</Code>
      <p>
        Dans Figma, la même échelle existe sous forme de variables d’espacement, et les écarts de
        l’Auto Layout s’y réfèrent. Quand le CSS du développeur et mon fichier Figma partagent les
        mêmes noms, les échanges lors de la passation raccourcissent nettement.
      </p>

      <h2>« Mais c’est contraignant »</h2>
      <p>
        J’entends souvent ça chez les designers que j’accompagne. C’est contraignant, pendant à peu
        près une semaine. Ensuite, vous remarquez que vous avez arrêté de vous torturer entre 14 et
        15, et que vous mettez cette énergie dans ce qui compte, comme savoir si le parcours a du
        sens. Les contraintes ne limitent pas le bon design; elles lui font de la place.
      </p>

      <Callout label="À essayer aujourd’hui">
        <p>
          Ouvrez votre dernier projet, sélectionnez tout et inspectez les espacements. Comptez le
          nombre de valeurs différentes que vous avez utilisées. Si c’est plus de huit, vous avez
          trouvé votre projet du week-end.
        </p>
      </Callout>
    </>
  );
}
