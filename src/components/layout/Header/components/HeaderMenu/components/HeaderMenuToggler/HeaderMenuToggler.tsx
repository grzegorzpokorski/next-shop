import { twMerge } from "tailwind-merge";
import { FaBars, FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/Button/Button";

type Props = {
  onClick: () => void;
  isOpen: boolean;
  menuId: string;
};

export const HeaderMenuToggler = ({ onClick, isOpen, menuId }: Props) => {
  return (
    <Button
      variant="outline"
      className={twMerge("relative z-50 md:hidden")}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={menuId}
    >
      {isOpen ? <FaPlus className="rotate-45" /> : <FaBars />}
      <span className="sr-only">
        {isOpen ? "zamknij" : "otwórz"} menu nawigacyjne
      </span>
    </Button>
  );
};
