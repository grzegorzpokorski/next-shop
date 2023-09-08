import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta = {
  title: "ui/Container",
  component: Container,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque earum
        culpa dolor autem laboriosam natus velit sunt provident! Molestiae
        dolorum odio nam possimus illo? Assumenda aliquid alias sit.
        Consectetur, maiores!
      </p>
    ),
    as: "div",
  },
  argTypes: {
    children: { control: false },
    as: { control: false },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};

export const Hidden: Story = {
  name: "hidden",
  args: {
    hidden: true,
  },
};
