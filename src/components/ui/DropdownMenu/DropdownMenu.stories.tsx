import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import { useEffect, useState } from "react";
import {
  FaBackward,
  FaEdit,
  FaEnvelope,
  FaFonticons,
  FaGithub,
  FaKeyboard,
  FaMoneyBill,
  FaPlus,
  FaPlusCircle,
  FaServer,
  FaUser,
  FaUserPlus,
  FaUsers,
  FaWrench,
} from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./DropdownMenu";
import { Button } from "@/components/ui/Button/Button";

const meta = {
  title: "ui/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  args: {
    children: "Hello world!",
  },
  argTypes: {
    children: { control: false },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const Default = ({
  align,
}: {
  align?: ComponentPropsWithoutRef<typeof DropdownMenuContent>["align"];
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align={align}>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <FaUser className="mr-3" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FaMoneyBill className="mr-3" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FaEdit className="mr-3" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FaKeyboard className="mr-3" />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <FaUsers className="mr-3" />
            <span>Team</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <FaUserPlus className="mr-3" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <FaEnvelope className="mr-3" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FaFonticons className="mr-3" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <FaPlusCircle className="mr-3" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <FaPlus className="mr-3" />
            <span>New Team</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <FaGithub className="mr-3" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FaWrench className="mr-3" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <FaServer className="mr-3" />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <FaBackward className="mr-3" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const DefaultStory: Story = {
  name: "default",
  render: () => <Default />,
};

export const DropdownStart: Story = {
  name: "with drop-down content alight to start",
  render: () => <Default align="start" />,
};

export const DropdownEnd: Story = {
  name: "with drop-down content alight to end",
  render: () => <Default align="end" />,
};

const WithRadioGroup = () => {
  const [value, setValue] = useState("light");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (mounted) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            Trigger
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuRadioGroup
            value={value}
            onValueChange={(v) => setValue(v)}
          >
            <DropdownMenuRadioItem value="light">Jasny</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">Ciemny</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">
              Systemowy
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  return null;
};

export const WithRadioGroupStory: Story = {
  name: "with radio group",
  render: () => <WithRadioGroup />,
};
