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
      size="icon"
      className="relative z-50 lg:hidden"
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
