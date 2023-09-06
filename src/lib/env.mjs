import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    HYGRAPH_URL: z.string().url(),
    PRODUCTS_PER_PAGE: z.coerce.number().int().min(1).optional().default(8),
    CRON_SECRET: z.string(),
    COOKIE_MAX_AGE_IN_DAYS: z.coerce.number().int().min(1),
  },
  client: {
    NODE_ENV: z.enum(["development", "test", "production"]),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    HYGRAPH_URL: process.env.HYGRAPH_URL,
    PRODUCTS_PER_PAGE: process.env.PRODUCTS_PER_PAGE,
    CRON_SECRET: process.env.CRON_SECRET,
    COOKIE_MAX_AGE_IN_DAYS: process.env.COOKIE_MAX_AGE_IN_DAYS,
  },
});
