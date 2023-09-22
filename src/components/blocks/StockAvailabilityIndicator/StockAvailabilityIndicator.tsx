import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

type Props = {
  available: boolean;
};

export const StockAvailabilityIndicator = ({ available }: Props) => {
  if (available) {
    return (
      <p className="flex gap-1.5 items-center font-medium">
        <FaCheckCircle className="text-green-500" aria-hidden />
        <span className="text-sm">towar na stanie</span>
      </p>
    );
  }

  return (
    <p className="flex gap-1.5 items-center font-medium">
      <FaCircleXmark className="text-red-500" aria-hidden />
      <span className="text-sm">towar niedostępny</span>
    </p>
  );
};
