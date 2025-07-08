import { test, expect } from '@playwright/test';

test('Example Domain page has correct title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});
