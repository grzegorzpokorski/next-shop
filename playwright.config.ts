import { defineConfig, devices } from "@playwright/test";
import { siteUrl } from "@/lib/constants";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  workers: 1,
  reporter: [
    ["line"],
    ["json", { outputFile: "test-results/test-results.json" }],
  ],
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
