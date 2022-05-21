const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

  await page.goto('http://localhost:7979/user');
  
  await page.waitForLoadState('domcontentloaded');

  await page.locator('input[name="name"]').click();

  await page.locator('input[name="name"]').fill('admin');

  await page.locator('input[name="pass"]').fill('admin');

  await page.locator('button:has-text("Log in")').click();

});
