import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";

const meta = {
  title: "ui/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: false },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options: Record<"title" | "value", string>[] = [
  {
    title: "Cena: od najniższej",
    value: "price-asc",
  },
  {
    title: "Cena: od najwyższej",
    value: "price-desc",
  },
  {
    title: "Data dodania: od najstarszej",
    value: "latest-desc",
  },
  {
    title: "Data dodania: od najnowszej",
    value: "latest-asc",
  },
];

const Default = () => {
  const [currentValue, setCurrentValue] = useState(options[0].value);
  return (
    <Select value={currentValue} onValueChange={(e) => setCurrentValue(e)}>
      <SelectTrigger>
        <SelectValue placeholder="Sorotwanie" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => {
          return (
            <SelectItem key={option.value} value={option.value}>
              {option.title}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export const DefaultStory: Story = {
  name: "default",
  render: () => <Default />,
};
