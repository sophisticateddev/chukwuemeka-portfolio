import type { Meta, StoryObj } from "@storybook/nextjs";
import { expect, userEvent, waitFor, within } from "storybook/test";
import ThemeToggle from "./ThemeToggle";

const meta = {
  title: "Interactive/ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "**Why it's built this way.** With no saved choice the site follows the system setting in CSS; this button stores an explicit choice and sets `data-theme` on the root element, the same switch Storybook's theme toolbar uses. It is an icon-only button, so its accessible name says what it will do (\"Switch to dark theme\") instead of relying on a pressed state. State starts empty until mounted so server and client markup match.",
      },
    },
  },
} satisfies Meta<typeof ThemeToggle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const root = document.documentElement;
    const before = root.dataset.theme;
    expect(before).toBe("light");

    // Keyboard only: Tab to the button, then Enter
    await userEvent.tab();
    const button = await canvas.findByRole("button", { name: "Switch to dark theme" });
    await expect(button).toHaveFocus();
    await userEvent.keyboard("{Enter}");

    await waitFor(() => expect(root.dataset.theme).toBe("dark"));
    // The accessible name now says what the next press will do
    await expect(canvas.getByRole("button", { name: "Switch to light theme" })).toBeInTheDocument();
  },
};
export const FocusVisible: Story = {
  play: async () => {
    await userEvent.tab();
  },
};
export const ReducedMotion: Story = { globals: { motion: "reduced" } };
export const French: Story = { globals: { locale: "fr" } };
