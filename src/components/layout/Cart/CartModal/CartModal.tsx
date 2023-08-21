"use client";

import {
  useRef,
  useCallback,
  type MouseEventHandler,
  type ReactNode,
  useEffect,
} from "react";
import * as Portal from "@radix-ui/react-portal";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
};

export const CartModal = ({ children }: Props) => {
  const router = useRouter();
  const overlayRef = useRef(null);

  const handleClickOnOverlay: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlayRef.current) {
        router.back();
      }
    },
    [router],
  );

  useEffect(() => {
    document.querySelector("body")?.classList.add("overflow-hidden");
    console.log("huj");
  }, []);

  return (
    <Portal.Root>
      <div
        className="fixed inset-0 bg-white/50 dark:bg-black/50 z-50"
        ref={overlayRef}
        onClick={handleClickOnOverlay}
      >
        {children}
      </div>
    </Portal.Root>
  );
};
