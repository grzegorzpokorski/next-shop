import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    HYGRAPH_URL: z.string().url(),
    HYGRAPH_AUTH_TOKEN: z.string(),
    PRODUCTS_PER_PAGE: z.coerce.number().int().min(1).optional().default(8),
    CRON_SECRET: z.string(),
    COOKIE_MAX_AGE_IN_DAYS: z.coerce.number().int().min(1),
    VERCEL_ENV: z.string().optional(),
    STRIPE_SECRET_KEY: z.string(),
    STRIPE_WEBHOOK_SECRET: z.string(),
  },
  client: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    HYGRAPH_URL: process.env.HYGRAPH_URL,
    HYGRAPH_AUTH_TOKEN: process.env.HYGRAPH_AUTH_TOKEN,
    PRODUCTS_PER_PAGE: process.env.PRODUCTS_PER_PAGE,
    CRON_SECRET: process.env.CRON_SECRET,
    COOKIE_MAX_AGE_IN_DAYS: process.env.COOKIE_MAX_AGE_IN_DAYS,
    VERCEL_ENV: process.env.VERCEL_ENV,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  },
});
