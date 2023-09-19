"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const DeteteCartCookieOnClient = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    Cookies.remove("cartId", { path: "/" });
    return null;
  }

  return null;
};
