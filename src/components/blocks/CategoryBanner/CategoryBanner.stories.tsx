import type { Meta, StoryObj } from "@storybook/react";
import { CategoryBanner } from "./CategoryBanner";
import { Container } from "@/components/ui/Container/Container";

const meta = {
  title: "blocks/CategoryBanner",
  component: CategoryBanner,
  args: {
    fullWidth: false,
    link: "/",
    title: "Awesome category",
    thumbnail: {
      url: "https://media.graphassets.com/output=format:webp/63nphwuQfQEn52aOgX3g",
      alt: "alt dla",
      width: 580,
      height: 514,
    },
  },
} satisfies Meta<typeof CategoryBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
  decorators: [
    (Story) => {
      return (
        <Container as="div">
          <div className="grid grid-cols-2 gap-4">
            <Story />
            <Story />
          </div>
        </Container>
      );
    },
  ],
};

export const FullWidth: Story = {
  name: "full width",
  args: {
    fullWidth: true,
  },
  decorators: [
    (Story) => {
      return (
        <Container as="div">
          <div className="grid grid-cols-2 gap-4">
            <Story />
            <Story />
          </div>
        </Container>
      );
    },
  ],
};
