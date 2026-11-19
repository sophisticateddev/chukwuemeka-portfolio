import type { Meta, StoryObj } from "@storybook/nextjs";
import Tag from "./Tag";

const meta = {
  title: "Primitives/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: { children: "Fintech" },
  parameters: {
    docs: {
      description: {
        component:
          "**Why it's built this way.** A tag labels a skill, tool, category or state, so it is filled and square-cornered on purpose: outlined pills are what buttons look like on this site, and tags aren't clickable. It takes `as=\"li\"` so a group of tags can be a real list that screen readers announce as one.",
      },
    },
  },
} satisfies Meta<typeof Tag>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {};
export const Medium: Story = { args: { size: "md" } };
export const LongLabel: Story = {
  args: { size: "md", children: "Design systems, accessibility and front-end engineering" },
  decorators: [(Story) => <div className="max-w-xs"><Story /></div>],
};
export const InAList: Story = {
  render: (args) => (
    <ul aria-label="Skills" className="flex flex-wrap gap-2">
      {["Figma", "React", "Accessibility", "Prototyping"].map((label) => (
        <Tag key={label} as="li" size={args.size}>
          {label}
        </Tag>
      ))}
    </ul>
  ),
};
