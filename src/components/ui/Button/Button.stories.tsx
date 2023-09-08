import type { Meta, StoryObj } from "@storybook/react";
import { FaHome } from "react-icons/fa";
import { Button } from "./Button";

const meta = {
  title: "ui/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    variant: "default",
    size: "default",
    children: "Button",
  },
  argTypes: {
    asChild: { control: false },
    children: { control: false },
  },
} satisfies Meta<typeof Button>;

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

export const Ghost: Story = {
  name: "ghost",
  args: {
    variant: "ghost",
  },
};

export const Indigo: Story = {
  name: "indigo",
  args: {
    variant: "indigo",
  },
};

export const Link: Story = {
  name: "link",
  args: {
    variant: "link",
  },
};

export const Outline: Story = {
  name: "outline",
  args: {
    variant: "outline",
  },
};

export const OutlineActive: Story = {
  name: "outline-active",
  args: {
    variant: "outline-active",
  },
};

export const Search: Story = {
  name: "search",
  args: {
    variant: "search",
  },
};

export const Secondary: Story = {
  name: "secondary",
  args: {
    variant: "secondary",
  },
};

export const SizeDefault: Story = {
  name: "size: default",
  args: {
    variant: "indigo",
    size: "default",
  },
};

export const SizeIcon: Story = {
  name: "size: icon",
  args: {
    variant: "indigo",
    size: "icon",
    children: (
      <>
        <FaHome />
        <span className="sr-only">home</span>
      </>
    ),
  },
};

export const SizeIconSm: Story = {
  name: "size: icon-sm",
  args: {
    variant: "indigo",
    size: "icon-sm",
    children: (
      <>
        <FaHome />
        <span className="sr-only">home</span>
      </>
    ),
  },
};
