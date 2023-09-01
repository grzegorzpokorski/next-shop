"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import type { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { validateRecentViewedCookieValue } from "@/utils/validateRecentViewedCookieValue";

type Props = {
  productId: string;
  cookie?: RequestCookie;
};

export const RecentlyViewedCookieSetter = ({ productId, cookie }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    try {
      const idsOfPreviousViewed: unknown = JSON.parse(cookie?.value || "[]");

      if (cookie && validateRecentViewedCookieValue(idsOfPreviousViewed)) {
        const newIds =
          idsOfPreviousViewed.length >= 4
            ? [...new Set([productId, ...idsOfPreviousViewed.slice(0, 3)])]
                .length === 3
              ? [...new Set([productId, ...idsOfPreviousViewed.slice(0, 4)])]
              : [...new Set([productId, ...idsOfPreviousViewed.slice(0, 3)])]
            : [...new Set([productId, ...idsOfPreviousViewed])];

        Cookies.set("recentlyViewed", JSON.stringify(newIds), {
          expires: 7,
          path: "/",
        });
      } else {
        Cookies.set("recentlyViewed", JSON.stringify([productId]), {
          expires: 7,
          path: "/",
        });
      }
    } catch (err) {
      Cookies.remove("recentlyViewed", { path: "/" });
      return null;
    }
  }

  return null;
};
