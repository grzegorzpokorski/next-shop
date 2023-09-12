import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta = {
  title: "ui/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    variant: "default",
  },
  argTypes: {
    children: { control: false },
    variant: { control: "select" },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
  args: {
    href: "/",
  },
};

export const Indigo: Story = {
  name: "indigo",
  args: {
    href: "/",
    variant: "indigo",
  },
};

export const Logo: Story = {
  name: "logo",
  args: {
    href: "/",
    variant: "logo",
  },
};

export const ToExternalResource: Story = {
  name: "to external page",
  args: {
    href: "https://google.com/",
  },
};
