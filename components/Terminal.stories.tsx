import type { Meta, StoryObj } from "@storybook/nextjs";
import Terminal from "./Terminal";

const meta = {
  title: "Motion/Terminal",
  component: Terminal,
  tags: ["autodocs"],
  decorators: [(Story) => <div className="max-w-xl overflow-hidden rounded-2xl border border-line"><Story /></div>],
  parameters: {
    docs: {
      description: {
        component:
          "**Why it's built this way.** A decorative terminal that types a prompt and streams steps when it scrolls into view. Every line is laid out up front but invisible, so streaming never shifts the page. It is hidden from assistive tech because the same message is written in the surrounding copy. It reads its text through `useLocale`, so it needs the page address that Storybook's language toolbar provides.",
      },
    },
  },
} satisfies Meta<typeof Terminal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const French: Story = { globals: { locale: "fr" } };
export const ReducedMotion: Story = { globals: { motion: "reduced" } };
