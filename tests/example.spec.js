const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

  await page.goto('http://localhost:3030/');

  await page.goto('http://localhost:3030/user');

  await page.locator('input[name="name"]').click();

  await page.locator('input[name="name"]').fill('compucorp_admin');

  await page.locator('input[name="pass"]').fill('compucorp_admin');

  await page.locator('button:has-text("Log in")').click();

});