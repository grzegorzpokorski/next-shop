import type { Meta, StoryObj } from "@storybook/react";
import { ProductsList } from "./ProductsList";

const products = [
  {
    id: "clkv6yubf0xhl0auta093syay",
    name: "Logitech M220 Silent - czerwony",
    slug: "logitech-m220-silent-czerwony",
    price: 119.99,
    currency: "PLN",
    quantityAvailable: 20,
    thumbnail: {
      url: "https://media.graphassets.com/output=format:webp/vUonHzwzS4iJ65NLomjm",
      alt: "Logitech M220 Silent - czerwony - logitech-m220-silent-czerwony-bg-transparent.png",
      width: 600,
      height: 532,
    },
    category: { name: "myszki", slug: "myszki" },
    updatedAt: "2023-08-14T15:51:16.069052+00:00",
    createdAt: "2023-08-03T13:27:27.46354+00:00",
  },
  {
    id: "clkv8n30t153v0autgb1fuqjb",
    name: "Logitech POP Mouse Heartbreaker",
    slug: "logitech-pop-mouse-heartbreaker",
    price: 139,
    currency: "PLN",
    quantityAvailable: 20,
    thumbnail: {
      url: "https://media.graphassets.com/output=format:webp/EL8XyzAQgKrmohXkccrd",
      alt: "Logitech POP Mouse Heartbreaker - logitech-pop-mouse-heartbreaker-bg-transparent.png",
      width: 600,
      height: 532,
    },
    category: { name: "myszki", slug: "myszki" },
    updatedAt: "2023-08-03T14:14:18.121177+00:00",
    createdAt: "2023-08-03T14:14:18.121177+00:00",
  },
  {
    id: "clkv702wf0xh90auvp3x62ypp",
    name: "Logitech M330 silent",
    slug: "logitech-m330-silent",
    price: 149.99,
    currency: "PLN",
    quantityAvailable: 15,
    thumbnail: {
      url: "https://media.graphassets.com/output=format:webp/tQE3vwLtSDqd6iqgmpuV",
      alt: "Logitech M330 silent - logitech-m330-silent-bg-transparent.png",
      width: 600,
      height: 532,
    },
    category: { name: "myszki", slug: "myszki" },
    updatedAt: "2023-08-06T12:52:45.515895+00:00",
    createdAt: "2023-08-03T13:28:25.25146+00:00",
  },
  {
    id: "clkv715mt0z2u0aumwcwdmxdf",
    name: "Logitech M705",
    slug: "logitech-m705",
    price: 159.99,
    currency: "PLN",
    quantityAvailable: 5,
    thumbnail: {
      url: "https://media.graphassets.com/output=format:webp/dMaQZQ3S9manuMlOCx2o",
      alt: "Logitech M705 - logitech-m705-bg-transparent.png",
      width: 600,
      height: 532,
    },
    category: { name: "myszki", slug: "myszki" },
    updatedAt: "2023-08-06T12:52:55.979961+00:00",
    createdAt: "2023-08-03T13:29:15.445725+00:00",
  },
  {
    id: "clkv8o6za0j6o0buj09gqtjdh",
    name: "Logitech Signature M650 L - grafitowy",
    slug: "logitech-signature-m650-l-grafitowy",
    price: 169.99,
    currency: "PLN",
    quantityAvailable: 10,
    thumbnail: {
      url: "https://media.graphassets.com/output=format:webp/f6KyWzmETYGCxEhld8RH",
      alt: "Logitech Signature M650 L - grafitowy - logitech-mysz-bezprzew-signature-m650-l-grafit-bg-transparent.png",
      width: 600,
      height: 532,
    },
    category: { name: "myszki", slug: "myszki" },
    updatedAt: "2023-08-03T14:15:09.902631+00:00",
    createdAt: "2023-08-03T14:15:09.902631+00:00",
  },
  {
    id: "clkv6x7j40yn30aum051caw0f",
    name: "Logitech G213 Prodigy",
    slug: "logitech-g213-prodigy",
    price: 199,
    currency: "PLN",
    quantityAvailable: 5,
    thumbnail: {
      url: "https://media.graphassets.com/output=format:webp/8hHuBTLJTZCvNCOJpSp9",
      alt: "Logitech G213 Prodigy - logitech-g213-prodigy-bg-transparent.png",
      width: 600,
      height: 532,
    },
    category: { name: "klawiatury", slug: "klawiatury" },
    updatedAt: "2023-08-06T13:08:59.807406+00:00",
    createdAt: "2023-08-03T13:26:11.284363+00:00",
  },
  {
    id: "clkv7270r0z6s0aum78gi3b3c",
    name: "Logitech MX Anywhere 2S - grafitowy",
    slug: "logitech-mx-anywhere-2s-grafitowy",
    price: 379,
    currency: "PLN",
    quantityAvailable: 10,
    thumbnail: {
      url: "https://media.graphassets.com/output=format:webp/dXnYdYkgTyK15jCMRHqF",
      alt: "Logitech MX Anywhere 2S - grafitowy - logitech-mx-anywhere-2s-grafitowy-bg-transparent.png",
      width: 600,
      height: 532,
    },
    category: { name: "myszki", slug: "myszki" },
    updatedAt: "2023-08-10T22:58:17.767146+00:00",
    createdAt: "2023-08-03T13:30:03.903881+00:00",
  },
  {
    id: "clkv8m1wz0ivx0bujpneqtxcc",
    name: "Logitech POP Keys Daydream",
    slug: "logitech-pop-keys-daydream",
    price: 379,
    currency: "PLN",
    quantityAvailable: 5,
    thumbnail: {
      url: "https://media.graphassets.com/output=format:webp/5Ekzz3NcSM6P0yqD2QcA",
      alt: "Logitech POP Keys Daydream - logitech-pop-keys-daydream-bg-transparent.png",
      width: 600,
      height: 532,
    },
    category: { name: "klawiatury", slug: "klawiatury" },
    updatedAt: "2023-08-10T22:59:54.474558+00:00",
    createdAt: "2023-08-03T14:13:30.02852+00:00",
  },
];

const meta = {
  title: "blocks/ProductsList",
  component: ProductsList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    products: products,
  },
  argTypes: {
    products: { control: false },
  },
} satisfies Meta<typeof ProductsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};

export const Slider: Story = {
  name: "slider",
  args: {
    slider: true,
  },
};
