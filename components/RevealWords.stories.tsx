import type { Meta, StoryObj } from "@storybook/nextjs";
import RevealWords from "./RevealWords";

const meta = {
  title: "Motion/RevealWords",
  component: RevealWords,
  tags: ["autodocs"],
  args: { text: "I design products. Then I build them.", trigger: "mount" },
  render: (args) => (
    <h2 className="font-serif text-5xl font-medium tracking-[-0.02em]">
      {/* The component is purely visual: the real text is exposed separately */}
      <span className="sr-only">{args.text}</span>
      <span aria-hidden="true">
        <RevealWords {...args} />
      </span>
    </h2>
  ),
  parameters: {
    docs: {
      description: {
        component:
          "**Why it's built this way.** Each word slides up from behind a mask for the page-load headline only; headings further down are plain text. The animation is purely visual, so callers render the full text for assistive tech and mark this copy aria-hidden, which keeps screen readers from hearing the headline word by word.",
      },
    },
  },
} satisfies Meta<typeof RevealWords>;
export default meta;
type Story = StoryObj<typeof meta>;

export const OnMount: Story = {};
export const Delayed: Story = { args: { delay: 0.5 } };
export const PlainText: Story = { args: { trigger: "view" } };
export const ReducedMotion: Story = { globals: { motion: "reduced" } };
