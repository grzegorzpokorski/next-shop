import type { Meta, StoryObj } from "@storybook/react";
import { SkipLink } from "./SkipLink";

const meta = {
  title: "blocks/SkipLink",
  component: SkipLink,
} satisfies Meta<typeof SkipLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
