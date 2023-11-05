import { test, expect } from "@playwright/test";
import { addCurrentProductToCart, clicLinkToRandomProduct } from "./utils";

test("Add product to cart if it is available", async ({ page }) => {
  await page.goto("/products");

  const productList = page.getByTestId("product-list");
  await expect(productList).toBeDefined();

  await clicLinkToRandomProduct({ page, productContainer: productList });

  await expect(
    page.getByTestId("availability-information"),
    "Product is unavailable",
  ).toContainText("towar na stanie");

  await addCurrentProductToCart({ page });

  await expect(page.getByTestId("add-to-cart-button")).toContainText(
    "Edytuj ilość produktu w koszyku",
  );
  await expect(page.getByTestId("cart-counter")).toContainText("1");
});
