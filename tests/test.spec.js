const { test, expect } = require("@playwright/test");
// import {test, expect} from '@playwright/test'

test.skip("My First Test ", async ({ page }) => {
  await page.goto("https://www.google.com");
  await expect(page).toHaveTitle("Google");
});

test("test", async ({ page }) => {
  await page.goto("https://www.amazon.com/");
  await page.getByRole("textbox", { name: "Search" }).click();
  await page.getByRole("textbox", { name: "Search" }).fill("iphone");
  await page.getByRole("textbox", { name: "Search" }).press("ArrowDown");
  await page.getByRole("textbox", { name: "Search" }).press("ArrowDown");
  await page.getByRole("textbox", { name: "Search" }).press("Enter");

  await page
    .getByRole("link", { name: "iphone 14 pro max case clear" })
    .nth(1)
    .click();
  await expect(page).toHaveURL(
    "https://www.amazon.com/s?k=iphone+14+pro+max+case+clear&pd_rd_w=Cmj3X&content-id=amzn1.sym.95fae9f8-2e8b-44dc-92a4-30ad576e0926:amzn1.sym.95fae9f8-2e8b-44dc-92a4-30ad576e0926&pf_rd_p=95fae9f8-2e8b-44dc-92a4-30ad576e0926&pf_rd_r=1CNGMK5J7DF1K2Y5T0KB&pd_rd_wg=CpSA5&pd_rd_r=d8def218-988d-44dc-8713-3a7dcd02d529&qid=1668529904"
  );
  await page
    .getByRole("link", {
      name: "Simtect Ultra Clear Designed for iPhone 14 Pro Max Case, [Non-Yellowing] [10 FT Military Drop Protection] Slim Fit Yet Protective Shockproof Bumper with Airbag Case Cover 6.7 Inch- Crystal Clear",
    })
    .first()
    .click();
  await expect(page).toHaveURL(
    "https://www.amazon.com/Simtect-Non-Yellowing-Protection-Protective-Shockproof/dp/B0B569YDZZ/ref=sr_1_1_sspa?content-id=amzn1.sym.95fae9f8-2e8b-44dc-92a4-30ad576e0926%3Aamzn1.sym.95fae9f8-2e8b-44dc-92a4-30ad576e0926&keywords=iphone+14+pro+max+case+clear&pd_rd_r=714318d0-bb2e-4550-9f68-4e5b656c3945&pd_rd_w=WNs88&pd_rd_wg=2it3t&pf_rd_p=95fae9f8-2e8b-44dc-92a4-30ad576e0926&pf_rd_r=T4ARGJVCQC1MRYA0VBD4&qid=1668529559&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
  );
});
