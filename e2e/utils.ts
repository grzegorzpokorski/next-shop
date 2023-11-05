import { expect } from "@playwright/test";
import type { Locator, Page } from "@playwright/test";

export const addCurrentProductToCart = async ({ page }: { page: Page }) => {
  await expect(page.url()).toContain("/product/");
  await page.getByTestId("add-to-cart-button").click();
};

export const clicLinkToRandomProduct = async ({
  page,
  productContainer,
}: {
  page: Page;
  productContainer: Locator;
}) => {
  const productLinks = productContainer.getByTestId("product-link");
  await productLinks.first().waitFor();
  const count = await productLinks.count();
  await expect(count).toBeGreaterThan(0);

  const randomProductLink = productLinks.nth(Math.floor(Math.random() * count));
  await randomProductLink.click();
  const productLink = await randomProductLink.getAttribute("href");
  await page.waitForURL(productLink!);
};
