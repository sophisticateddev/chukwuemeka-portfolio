import type { Meta, StoryObj } from "@storybook/nextjs";
import Tag from "./Tag";

const meta = {
  title: "Primitives/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: { children: "Fintech" },
} satisfies Meta<typeof Tag>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {};
export const Medium: Story = { args: { size: "md" } };
