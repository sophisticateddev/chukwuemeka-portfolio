import type { Meta, StoryObj } from "@storybook/nextjs";
import CountUp from "./CountUp";

const meta = {
  title: "Motion/CountUp",
  component: CountUp,
  tags: ["autodocs"],
  args: { value: "+25%" },
  decorators: [(Story) => <p className="font-display text-5xl font-semibold text-accent"><Story /></p>],
  parameters: {
    docs: {
      description: {
        component:
          "**Why it's built this way.** Counts the first number in a written value up from zero when it scrolls into view, keeping the surrounding text and the number's separators (\"10,000\", \"10 000\", \"3,3\"), so one component serves English and French. Frames are written straight to the DOM so React doesn't re-render 60 times a second. Screen readers only ever get the final value, and reduced motion skips the count.",
      },
    },
  },
} satisfies Meta<typeof CountUp>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Percentage: Story = {};
export const Thousands: Story = { args: { value: "10,000+" } };
export const FrenchSeparators: Story = { args: { value: "10 000+" }, globals: { locale: "fr" } };
export const Decimal: Story = { args: { value: "2.2x" } };
export const NoNumber: Story = { args: { value: "Zero to one" } };
export const ReducedMotion: Story = { globals: { motion: "reduced" } };
