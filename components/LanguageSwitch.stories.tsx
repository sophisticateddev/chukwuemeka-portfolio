import type { Meta, StoryObj } from "@storybook/nextjs";
import { userEvent } from "storybook/test";
import LanguageSwitch from "./LanguageSwitch";

const meta = {
  title: "Interactive/LanguageSwitch",
  component: LanguageSwitch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "**Why it's built this way.** It is a real link to the same page in the other language, so it works without JavaScript and can be opened in a new tab. Its text is the short code (EN/FR) but its accessible name is spelled out in the language it switches to, and `lang` / `hreflang` say so. Clicking saves the choice in a cookie so the site stops guessing from the browser's language.",
      },
    },
  },
} satisfies Meta<typeof LanguageSwitch>;
export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};
export const French: Story = { globals: { locale: "fr" } };
export const FocusVisible: Story = {
  play: async () => {
    await userEvent.tab();
  },
};
export const ReducedMotion: Story = { globals: { motion: "reduced" } };
