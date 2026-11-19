import type { Meta, StoryObj } from "@storybook/nextjs";
import Testimonials from "./Testimonials";
import type { Testimonial } from "@/lib/data";

// Made-up people and quotes. The site's real recommendations never appear in stories.
const make = (n: number, quote: string): Testimonial => ({
  quote,
  name: `Sample Person ${n}`,
  title: "Head of Product at Example Co",
  relationship: "Worked together",
  date: "May 2025",
});

const featured = make(1, "A made-up recommendation that is long enough to show how the featured quote sets in large display type across a few lines.\n- Shipped the first version in a week\n- Explained every decision clearly");
const short = make(2, "Short and to the point.");
const long = make(3, "A longer made-up quote that goes on for a while so we can see how the smaller cards behave when the content is much taller than its neighbour. ".repeat(3));

const meta = {
  title: "Composites/Testimonials",
  component: Testimonials,
  tags: ["autodocs"],
  args: { locale: "en", items: [featured, short, long] },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "**Why it's built this way.** One recommendation is featured in large type; the rest sit in a two-column grid, and an odd one out spans both columns instead of leaving a gap. Quotes are kept verbatim and marked `lang=\"en\"` because they are quoted as written, even on the French page. Initials stand in for photos and are hidden from assistive tech since the name is right beside them. The optional `items` prop lets Storybook show made-up quotes instead of the site's real ones.",
      },
    },
  },
} satisfies Meta<typeof Testimonials>;
export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeQuotes: Story = {};
export const OddOneOut: Story = { args: { items: [featured, short, long, make(4, "A fourth made-up quote.")] } };
export const FeaturedOnly: Story = { args: { items: [featured] } };
export const French: Story = { args: { locale: "fr" }, globals: { locale: "fr" } };
