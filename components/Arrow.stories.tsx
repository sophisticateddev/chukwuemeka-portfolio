import type { Meta, StoryObj } from "@storybook/nextjs";
import Arrow from "./Arrow";

const meta = {
  title: "Primitives/Arrow",
  component: Arrow,
  tags: ["autodocs"],
  argTypes: { direction: { control: "select", options: ["right", "left", "up-right", "up", "down"] } },
  parameters: {
    docs: {
      description: {
        component:
          "**Why it's built this way.** The subsetted web fonts don't include arrow glyphs, so the arrow is a small inline SVG that takes its colour from the surrounding text. It is hidden from assistive tech because it only decorates a label that already says where the link goes. Rotation is applied to the SVG and the class to a wrapper, so hover transforms don't fight the rotation.",
      },
    },
  },
} satisfies Meta<typeof Arrow>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {};
export const AllDirections: Story = {
  render: () => (
    <div className="flex gap-4 text-ink">
      {(["right", "left", "up-right", "up", "down"] as const).map((d) => (
        <Arrow key={d} direction={d} size={24} />
      ))}
    </div>
  ),
};
export const Large: Story = { args: { size: 48, direction: "up-right" } };
export const InsideALink: Story = {
  render: () => (
    <a href="#top" className="inline-flex items-center gap-2 text-ink">
      <span className="link-grow">Read the case study</span>
      <Arrow />
    </a>
  ),
};
