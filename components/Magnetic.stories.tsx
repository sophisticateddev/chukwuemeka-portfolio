import type { Meta, StoryObj } from "@storybook/nextjs";
import { expect, userEvent, waitFor, within } from "storybook/test";
import Magnetic from "./Magnetic";

/** The element Magnetic moves: the wrapper around the link. */
const wrapper = (el: HTMLElement) => el.parentElement as HTMLElement;
const moved = (el: HTMLElement) => {
  const t = getComputedStyle(wrapper(el)).transform;
  return t !== "none" && t !== "matrix(1, 0, 0, 1, 0, 0)";
};

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

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const link = within(canvasElement).getByRole("link", { name: "Get in touch" });
    await userEvent.hover(link);
    const box = link.getBoundingClientRect();
    await userEvent.pointer({ target: link, coords: { clientX: box.right - 2, clientY: box.bottom - 2 } });
    // Control for the reduced-motion test below: with motion allowed, the pull is real
    await waitFor(() => expect(moved(link)).toBe(true));
  },
};
export const Strong: Story = { args: { strength: 0.5 } };
export const ReducedMotion: Story = {
  globals: { motion: "reduced" },
  play: async ({ canvasElement }) => {
    const link = within(canvasElement).getByRole("link", { name: "Get in touch" });
    await userEvent.hover(link);
    const box = link.getBoundingClientRect();
    await userEvent.pointer({ target: link, coords: { clientX: box.right - 2, clientY: box.bottom - 2 } });
    // Give the spring time to move if it were going to
    await new Promise((r) => setTimeout(r, 500));
    await expect(moved(link)).toBe(false);
  },
};
