"use client";

import type { MouseEventHandler, ReactNode } from "react";
import { useCallback, useRef } from "react";
// import * as Portal from "@radix-ui/react-portal";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";

type Props = {
  children: ReactNode;
};

export const CartModal = ({ children }: Props) => {
  const router = useRouter();
  const overlayRef = useRef(null);

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const handleClickOnOverlay: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlayRef.current) onDismiss();
    },
    [onDismiss],
  );

  return (
    <Dialog.Root defaultOpen={true}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 bg-white/50 dark:bg-black/50 z-50"
          ref={overlayRef}
          onClick={handleClickOnOverlay}
        />
        <Dialog.Content className="z-50">{children}</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
