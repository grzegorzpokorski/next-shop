import { useCallback, useMemo, useState } from "react";
import { useOnKeydown } from "@/hooks/useOnKeydown";

export const useHeaderMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = useCallback(() => {
    document.body.classList.remove("overflow-hidden", "lg:overflow-y-auto");
    setIsMobileMenuOpen(false);
  }, []);
  const openMobileMenu = useCallback(() => {
    document.body.classList.add("overflow-hidden", "lg:overflow-y-auto");
    setIsMobileMenuOpen(true);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }, [closeMobileMenu, isMobileMenuOpen, openMobileMenu]);

  useOnKeydown(
    "Escape",
    useCallback(
      () => isMobileMenuOpen && closeMobileMenu(),
      [closeMobileMenu, isMobileMenuOpen],
    ),
  );

  return useMemo(
    () => ({
      openMobileMenu,
      closeMobileMenu,
      toggleMobileMenu,
      isMobileMenuOpen,
    }),
    [openMobileMenu, closeMobileMenu, toggleMobileMenu, isMobileMenuOpen],
  );
};
