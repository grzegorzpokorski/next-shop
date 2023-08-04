import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    HYGRAPH_URL: z.string().url(),
    OFFERS_PER_PAGE: z.coerce.number().int().min(1).optional().default(8),
  },
  client: {
    NODE_ENV: z.enum(["development", "test", "production"]),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    HYGRAPH_URL: process.env.HYGRAPH_URL,
    OFFERS_PER_PAGE: process.env.OFFERS_PER_PAGE,
  },
});
