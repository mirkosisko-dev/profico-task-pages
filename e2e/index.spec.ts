import { test, expect } from "@playwright/test";

test("search feature", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveURL("/");

  const searchBar = page.getByTestId("search-desktop-input");
  await searchBar.fill("Elon");

  const submitButton = page.getByTestId("search-desktop-submit");
  await submitButton.click();

  await expect(page).toHaveURL("/?q=Elon");
});
