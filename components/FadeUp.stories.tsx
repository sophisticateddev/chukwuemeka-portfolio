import type { Meta, StoryObj } from "@storybook/nextjs";
import FadeUp from "./FadeUp";

const meta = {
  title: "Motion/FadeUp",
  component: FadeUp,
  tags: ["autodocs"],
  args: { children: <p className="max-w-prose text-lg">Content that eases in as it enters the viewport.</p> },
  parameters: {
    docs: {
      description: {
        component:
          "**Why it's built this way.** Off by default: content lower on the page is simply there when you reach it, because reveal animations make people wait for text. It is switched on for the hero's load sequence and for rows revealed with \"Show all\". The element is the same on server and client either way, and the motion provider reduces it to a plain fade for people who ask for less movement.",
      },
    },
  },
} satisfies Meta<typeof FadeUp>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Static: Story = {};
export const Animated: Story = { args: { animate: true } };
export const Delayed: Story = { args: { animate: true, delay: 0.4 } };
export const ReducedMotion: Story = { args: { animate: true }, globals: { motion: "reduced" } };
