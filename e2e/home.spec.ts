import { test, expect, devices } from '@playwright/test';

test('should reload home page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/');
  // Find an element with the text 'tsguess' and click on it
  await page.click('text=tsguess');
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/');
  // The new page should contain an h1 with "About Page"
  await expect(page.locator('h1')).toContainText('tsguess');
});

test('Test multiple tabs', async ({ browser }) => {
  const context = await browser.newContext();
  const page1 = await context.newPage();
  const page2 = await context.newPage();

  await page1.goto('http://localhost:3000/');
  await page2.goto('http://localhost:3000/about');
});

test('clicking on the button should start the game', async ({
  page,
}) => {
  await page.goto('http://localhost:3000/');
  await page.click('text=Start');
  await expect(page.locator('button')).toContainText('Submit');
});

test('should show the first line of the song', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.click('text=Start');
  await expect(page.locator('span')).toContainText('1. ');
});

test('Contains the head tag and its contents', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveTitle('home | tsguess');
});
