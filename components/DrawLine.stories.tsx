import type { Meta, StoryObj } from "@storybook/nextjs";
import DrawLine from "./DrawLine";

const meta = {
  title: "Motion/DrawLine",
  component: DrawLine,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ul className="max-w-md">
        {["Row one", "Row two", "Row three"].map((row) => (
          <li key={row} className="relative py-5">
            {row}
            <Story />
          </li>
        ))}
      </ul>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "**Why it's built this way.** A hairline between rows, drawn with the decorative `line` token. It is a separate aria-hidden element rather than a border so it can be positioned or re-coloured by the row, and screen readers never hear a divider that carries no meaning. It currently doesn't animate; the name is kept so rows can opt into a draw effect later.",
      },
    },
  },
} satisfies Meta<typeof DrawLine>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Bottom: Story = {};
export const Top: Story = { args: { className: "top-0" } };
