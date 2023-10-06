import type { Meta, StoryObj } from "@storybook/react";
import { StockAvailabilityIndicator } from "./StockAvailabilityIndicator";

const meta = {
  title: "blocks/StockAvailabilityIndicator",
  component: StockAvailabilityIndicator,
} satisfies Meta<typeof StockAvailabilityIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Available: Story = {
  name: "available",
  args: {
    available: true,
  },
};

export const NotAvailable: Story = {
  name: "not available",
  args: {
    available: false,
  },
};
