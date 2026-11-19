import type { Meta, StoryObj } from "@storybook/nextjs";
import { expect, waitFor } from "storybook/test";
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
    window.scrollTo(0, 1200);
    await waitFor(() => expect(canvasElement.ownerDocument.querySelector("button")).toBeTruthy());
  },
};
export const VisibleReducedMotion: Story = { ...Visible, globals: { motion: "reduced" } };
