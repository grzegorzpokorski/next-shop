import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    SALEOR_URL: z.string().url(),
  },
  client: {
    NODE_ENV: z.enum(["development", "test", "production"]),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    SALEOR_URL: process.env.SALEOR_URL,
  },
});
