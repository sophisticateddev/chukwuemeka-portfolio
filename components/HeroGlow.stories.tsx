import type { Meta, StoryObj } from "@storybook/nextjs";
import HeroGlow from "./HeroGlow";

const meta = {
  title: "Motion/HeroGlow",
  component: HeroGlow,
  tags: ["autodocs"],
  // The glow fills its positioned parent and sits behind it
  decorators: [
    (Story) => (
      <section className="relative isolate overflow-hidden rounded-2xl border border-line p-16">
        <Story />
        <h2 className="font-display text-4xl font-semibold">Move the pointer over this panel</h2>
      </section>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "**Why it's built this way.** A soft accent glow that trails a mouse pointer behind the hero. It is decorative (aria-hidden, no pointer events), uses the accent token at low opacity so text contrast is unaffected, and writes the pointer position into CSS variables inside an animation frame instead of re-rendering. Touch and reduced motion get a still glow.",
      },
    },
  },
} satisfies Meta<typeof HeroGlow>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ReducedMotion: Story = { globals: { motion: "reduced" } };
