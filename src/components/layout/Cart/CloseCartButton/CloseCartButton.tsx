"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/Button/Button";

export const CloseCartButton = () => {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative"
      onClick={handleClick}
    >
      <FaPlus className="rotate-45" />
      <span className="sr-only">Zamknij koszyk</span>
    </Button>
  );
};
