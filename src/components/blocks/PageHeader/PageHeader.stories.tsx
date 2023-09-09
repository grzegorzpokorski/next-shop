import type { Meta, StoryObj } from "@storybook/react";
import {
  PageHeader,
  PageHeaderTitle,
  PageHeaderDescription,
} from "./PageHeader";
import { Container } from "@/components/ui/Container/Container";

const meta = {
  title: "blocks/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  argTypes: {
    children: { control: false },
    titleId: { control: false },
  },
  decorators: [
    (Story) => (
      <Container as="div">
        <Story />
      </Container>
    ),
  ],
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
  args: {
    titleId: "title",
    children: (
      <PageHeaderTitle as="h1" size="3xl" id="title">
        Hello world!
      </PageHeaderTitle>
    ),
  },
};

export const WithDescription: Story = {
  name: "with description",
  args: {
    titleId: "title",
    children: (
      <>
        <PageHeaderTitle as="h1" size="3xl" id="title">
          Hello world!
        </PageHeaderTitle>
        <PageHeaderDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex
          consequuntur quasi maiores alias nulla? Eius reiciendis eaque saepe
          sint unde, quibusdam dicta, delectus quo sapiente perspiciatis ratione
          voluptatum consequuntur.
        </PageHeaderDescription>
      </>
    ),
  },
};
