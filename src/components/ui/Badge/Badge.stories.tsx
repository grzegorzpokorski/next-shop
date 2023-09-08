import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "ui/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    variant: "default",
    children: "Badge",
  },
  argTypes: {
    children: { control: false },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};

export const Destructive: Story = {
  name: "destructive",
  args: {
    variant: "destructive",
  },
};

export const Outline: Story = {
  name: "outline",
  args: {
    variant: "outline",
  },
};

export const Secondary: Story = {
  name: "secondary",
  args: {
    variant: "secondary",
  },
};
