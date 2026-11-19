import type { Meta, StoryObj } from "@storybook/nextjs";
import SectionHeading from "./SectionHeading";

const meta = {
  title: "Primitives/SectionHeading",
  component: SectionHeading,
  tags: ["autodocs"],
  args: { id: "sample-title", label: "Selected work", title: "Products I designed and shipped" },
  parameters: {
    docs: {
      description: {
        component:
          "**Why it's built this way.** Every section opens the same way: a small accent label, a large display heading, an optional intro. The heading level is a prop because the same block is an h2 on the home page and the h1 of a page such as /work, so the document outline stays correct. The id lets the section point at it with aria-labelledby.",
      },
    },
  },
} satisfies Meta<typeof SectionHeading>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithMutedTail: Story = { args: { titleMuted: "and what I learned." } };
export const WithIntro: Story = {
  args: { intro: "A few projects where design and code met, with the numbers that mattered." },
};
export const AsPageTitle: Story = { args: { as: "h1", titleMuted: "from the last few years." } };
export const LongTitle: Story = {
  args: {
    title: "A very long section title that has to wrap across several lines without breaking the layout",
    intro: "Headings are balanced so the lines come out even.",
  },
};
