import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";

const meta = {
  title: "blocks/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    pagination: {
      baseUrl: "/",
      currentPage: 1,
      totalPages: 10,
      searchParams: null,
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
