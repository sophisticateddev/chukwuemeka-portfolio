import type { Meta, StoryObj } from "@storybook/nextjs";
import Magnetic from "./Magnetic";

const meta = {
  title: "Interactive/Magnetic",
  component: Magnetic,
  tags: ["autodocs"],
  args: { children: <a href="#top" className="btn-primary">Get in touch</a> },
  decorators: [(Story) => <div className="p-10"><Story /></div>],
  parameters: {
    docs: {
      description: {
        component:
          "**Why it's built this way.** A small flourish on important buttons: the child leans toward a mouse pointer. It does nothing for touch (no pointer to follow) and nothing when the visitor asks for reduced motion, because movement that tracks the pointer can be uncomfortable. The strength is a prop so large targets don't drift too far.",
      },
    },
  },
} satisfies Meta<typeof Magnetic>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Strong: Story = { args: { strength: 0.5 } };
export const ReducedMotion: Story = { globals: { motion: "reduced" } };
