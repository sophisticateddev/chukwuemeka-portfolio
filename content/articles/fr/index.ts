import type { ComponentType } from "react";
import PersonHoldingTheReceipt from "./design-for-the-person-holding-the-receipt";
import EightPointGrid from "./mastering-the-8pt-grid";
import DesigningForEveryone from "./designing-for-everyone";
import AiShapingUx from "./how-ai-is-shaping-better-ux";
import FlexboxToFigma from "./from-flexbox-to-figma";
import PrioritizeLikeAPro from "./how-to-prioritize-like-a-pro";

/** French translations of the on-site articles, keyed by the same slugs as the English ones. */
export const articleBodiesFr: Record<string, ComponentType> = {
  "design-for-the-person-holding-the-receipt": PersonHoldingTheReceipt,
  "mastering-the-8pt-grid": EightPointGrid,
  "designing-for-everyone": DesigningForEveryone,
  "how-ai-is-shaping-better-ux": AiShapingUx,
  "from-flexbox-to-figma": FlexboxToFigma,
  "how-to-prioritize-like-a-pro": PrioritizeLikeAPro,
};
