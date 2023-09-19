import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

type Props = {
  available: boolean;
};

export const StockAvailabilityIndicator = ({ available }: Props) => {
  if (available) {
    return (
      <p className="flex gap-1.5 items-center font-medium text-green-500">
        <FaCheckCircle aria-hidden />
        <span className="text-sm">towar na stanie</span>
      </p>
    );
  }

  return (
    <p className="flex gap-1.5 items-center font-medium text-red-500">
      <FaCircleXmark aria-hidden />
      <span className="text-sm">towar niedostępny</span>
    </p>
  );
};
