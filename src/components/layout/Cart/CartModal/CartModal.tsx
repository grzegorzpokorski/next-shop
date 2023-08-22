"use client";

import { type ReactNode } from "react";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";

type Props = {
  children: ReactNode;
};

export const CartModal = ({ children }: Props) => {
  const router = useRouter();

  return (
    <Dialog.Root defaultOpen={true} onOpenChange={() => router.back()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-white/50 dark:bg-black/50 z-50" />
        <Dialog.Content>{children}</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
