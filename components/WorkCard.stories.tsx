import type { Meta, StoryObj } from "@storybook/nextjs";
import WorkCard from "./WorkCard";
import type { Project } from "@/lib/data";

// Made-up sample data. No real client or case-study content belongs in stories.
const cover =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675"><rect width="1200" height="675" fill="#8a8f98"/><rect x="80" y="80" width="520" height="40" rx="8" fill="#fff" opacity=".7"/><rect x="80" y="160" width="1040" height="420" rx="16" fill="#fff" opacity=".35"/></svg>',
  );

const sample: Project = {
  id: 1,
  slug: "sample-app",
  title: "Sample budgeting app",
  category: "Product design",
  year: "2025",
  description: "A made-up project used to show how a work card behaves with real-length copy.",
  tags: ["Fintech", "Mobile", "Design system"],
  color: "",
  client: "Example Co",
  highlight: { value: "+25%", label: "more weekly active users" },
};

const meta = {
  title: "Composites/WorkCard",
  component: WorkCard,
  tags: ["autodocs"],
  args: { project: sample, index: 0 },
  decorators: [(Story) => <div className="max-w-xl"><Story /></div>],
  parameters: {
    docs: {
      description: {
        component:
          "**Why it's built this way.** The whole card is one click target and one tab stop: the title link is stretched over the card with a pseudo-element, so there's no nested interactive content and the focus ring wraps the card. With no cover image the card shows the project's headline metric instead of an empty box. The spotlight that follows the pointer is driven by CSS variables, not state, and card lift and image zoom only apply when motion is allowed.",
      },
    },
  },
} satisfies Meta<typeof WorkCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const NoImage: Story = {};
export const WithImage: Story = { args: { project: { ...sample, cover } } };
export const LongContent: Story = {
  args: {
    project: {
      ...sample,
      title: "A made-up project with a long title that needs to wrap onto a second line",
      description:
        "A much longer made-up description that runs across several lines so we can see how the card handles content that is longer than the happy path, including how the tags and arrow sit at the bottom of the card.",
      tags: ["Research", "Prototyping", "Accessibility", "Design systems", "Front-end", "Analytics"],
    },
  },
};
export const Featured: Story = {
  args: { featured: true, project: { ...sample, cover } },
  decorators: [(Story) => <div className="w-[min(100vw-3rem,64rem)] -ml-0"><Story /></div>],
};
export const French: Story = { globals: { locale: "fr" }, args: { featured: true } };
export const ReducedMotion: Story = { globals: { motion: "reduced" } };
