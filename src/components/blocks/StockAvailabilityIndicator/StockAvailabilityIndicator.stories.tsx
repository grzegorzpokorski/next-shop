import type { Meta, StoryObj } from "@storybook/react";
import { StockAvailabilityIndicator } from "./StockAvailabilityIndicator";

const meta = {
  title: "blocks/StockAvailabilityIndicator",
  component: StockAvailabilityIndicator,
  args: {
    available: true,
  },
} satisfies Meta<typeof StockAvailabilityIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
