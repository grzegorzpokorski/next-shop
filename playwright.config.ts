import { defineConfig, devices } from "@playwright/test";
import { siteUrl } from "@/lib/constants";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  workers: 1,
  reporter: process.env.CI
    ? [["html"], ["github"], ["list"]]
    : [["html"], ["list"]],
  use: {
    baseURL: siteUrl,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
  ],
});
