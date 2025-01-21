import { test, expect } from '@playwright/test';

test('verify game info', async ({ page }) => {
  await page.goto('');

  await page.locator('.info-button').nth(0).click();

  await expect(page.locator('.logo-image')).toBeVisible();
  await expect(page.locator('.play-now-btn')).toBeVisible();
});
