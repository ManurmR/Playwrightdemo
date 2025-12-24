import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('listitem').filter({ hasText: 'How to install Playwright' }).click();
  await page.getByRole('link', { name: 'How to install Playwright' }).click();
  await page.getByRole('tabpanel').filter({ hasText: 'npm init playwright@latest' }).getByLabel('Copy code to clipboard').click();
  await page.getByRole('link', { name: 'Next Writing tests »' }).click();
  await page.getByRole('listitem').filter({ hasText: 'How to write the first test' }).click();
  await page.getByRole('button', { name: 'Copy code to clipboard' }).first().click();
  await page.getByText('Playwright includes async').click();
  await page.getByRole('link', { name: 'Next Generating tests »' }).click();
  await page.getByRole('link', { name: 'Next Running and debugging' }).click();
});