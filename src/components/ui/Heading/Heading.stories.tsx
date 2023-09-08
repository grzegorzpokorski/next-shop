import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta = {
  title: "ui/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Hello world!",
    as: "h1",
  },
  argTypes: {
    children: { control: false },
    as: { control: "select" },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "size: default",
  args: {
    size: "default",
  },
};

export const SizeXL: Story = {
  name: "size: xl",
  args: {
    size: "xl",
  },
};

export const Size2XL: Story = {
  name: "size: xl2",
  args: {
    size: "2xl",
  },
};

export const Size3XL: Story = {
  name: "size: 3xl",
  args: {
    size: "3xl",
  },
};

export const Size4XL: Story = {
  name: "size: 4xl",
  args: {
    size: "4xl",
  },
};
