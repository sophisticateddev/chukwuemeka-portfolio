import type { Meta, StoryObj } from "@storybook/nextjs";
import { expect, userEvent, waitFor, within } from "storybook/test";
import BackToTop from "./BackToTop";

const meta = {
  title: "Interactive/BackToTop",
  component: BackToTop,
  tags: ["autodocs"],
  // Tall enough to scroll past the 900px threshold where the button appears
  decorators: [
    (Story) => (
      <div style={{ minHeight: 2400 }}>
        <p className="max-w-prose text-muted">Scroll down past 900px and a back-to-top button appears at the bottom right.</p>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "**Why it's built this way.** It only appears after a long scroll so it never competes with content. Activating it scrolls to the top and moves focus to the main content, so keyboard and screen-reader users land at the start of the page instead of staying on a button that has just disappeared. Smooth scrolling is skipped when reduced motion is on.",
      },
    },
  },
} satisfies Meta<typeof BackToTop>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Hidden: Story = {};
export const Visible: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Not there until the visitor has scrolled a long way
    await expect(canvas.queryByRole("button", { name: "Back to top" })).not.toBeInTheDocument();

    window.scrollTo(0, 1200);
    const button = await canvas.findByRole("button", { name: "Back to top" });

    await userEvent.click(button);
    await waitFor(() => expect(window.scrollY).toBe(0), { timeout: 4000 });
    // ...and the button goes away again once the page is at the top
    await waitFor(() => expect(canvas.queryByRole("button", { name: "Back to top" })).not.toBeInTheDocument());
  },
};
export const VisibleReducedMotion: Story = { ...Visible, globals: { motion: "reduced" } };
