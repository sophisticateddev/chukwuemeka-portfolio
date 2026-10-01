import type { ComponentType } from "react";
import EightPointGrid from "./mastering-the-8pt-grid";
import DesigningForEveryone from "./designing-for-everyone";
import AiShapingUx from "./how-ai-is-shaping-better-ux";
import FlexboxToFigma from "./from-flexbox-to-figma";
import PrioritizeLikeAPro from "./how-to-prioritize-like-a-pro";

/** Bodies for articles hosted on this site, keyed by slug in lib/data.ts. */
export const articleBodies: Record<string, ComponentType> = {
  "mastering-the-8pt-grid": EightPointGrid,
  "designing-for-everyone": DesigningForEveryone,
  "how-ai-is-shaping-better-ux": AiShapingUx,
  "from-flexbox-to-figma": FlexboxToFigma,
  "how-to-prioritize-like-a-pro": PrioritizeLikeAPro,
};
