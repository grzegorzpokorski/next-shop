import type { Meta, StoryObj } from "@storybook/react";
import { Gallery } from "./Gallery";
import { Container } from "@/components/ui/Container/Container";

const images = [
  {
    url: "https://media.graphassets.com/output=format:webp/Hga2FAZNS8OMtgldIBNS",
    alt: "Philips TAH8506BK/00 - philips-tah8506bk-00,94616660465_8 1.png",
    width: 580,
    height: 514,
  },
  {
    url: "https://media.graphassets.com/output=format:webp/9SL2KMkVRk2pcbPeDGa8",
    alt: "Philips TAH8506BK/00 - philips-tah8506bk-00,94616660465_8 (1).jpg",
    width: 580,
    height: 514,
  },
  {
    url: "https://media.graphassets.com/output=format:webp/BDh0R6kRQ02fQB4ZYwl2",
    alt: "Philips TAH8506BK/00 - philips-tah8506bk-00,94616660465_8 (2).jpg",
    width: 580,
    height: 514,
  },
  {
    url: "https://media.graphassets.com/output=format:webp/VFhJCNMOTdGdOKGe5wnr",
    alt: "Philips TAH8506BK/00 - philips-tah8506bk-00,94616660465_8 (3).jpg",
    width: 580,
    height: 514,
  },
  {
    url: "https://media.graphassets.com/output=format:webp/5snS3wR6w0Ad4YOZRxwf",
    alt: "Philips TAH8506BK/00 - philips-tah8506bk-00,94616660465_8 (4).jpg",
    width: 580,
    height: 514,
  },
  {
    url: "https://media.graphassets.com/output=format:webp/vyZPdUUtRnqiolBIRDvW",
    alt: "Philips TAH8506BK/00 - philips-tah8506bk-00,94616660465_8 (5).jpg",
    width: 580,
    height: 514,
  },
  {
    url: "https://media.graphassets.com/output=format:webp/CLfkJ2jRf23KMlkk5qQ7",
    alt: "Philips TAH8506BK/00 - philips-tah8506bk-00,94616660465_8 (6).jpg",
    width: 580,
    height: 514,
  },
  {
    url: "https://media.graphassets.com/output=format:webp/NGqA3nkRO2JSyUjri3sf",
    alt: "Philips TAH8506BK/00 - philips-tah8506bk-00,94616660465_8 (7).jpg",
    width: 580,
    height: 514,
  },
  {
    url: "https://media.graphassets.com/output=format:webp/D1hEW9vPRcKUiGNAl4Nf",
    alt: "Philips TAH8506BK/00 - philips-tah8506bk-00,94616660465_8 (8).jpg",
    width: 580,
    height: 514,
  },
  {
    url: "https://media.graphassets.com/output=format:webp/ro3xTdOQP6OaflbdBBOw",
    alt: "Philips TAH8506BK/00 - philips-tah8506bk-00,94616660465_8 (9).jpg",
    width: 580,
    height: 514,
  },
];

const meta = {
  title: "blocks/Gallery",
  component: Gallery,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Container as="div">
        <div className="max-w-[320px] w-full overflow-hidden">
          <Story />
        </div>
      </Container>
    ),
  ],
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
  args: {
    images: images,
  },
};
