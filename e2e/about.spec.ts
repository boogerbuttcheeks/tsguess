import { test, expect, devices } from '@playwright/test';

test('should go to homepage', async ({ page }) => {
  await page.goto('http://localhost:3000/about');
  await page.click('text=tsguess');
  await expect(page).toHaveURL('http://localhost:3000/');
});

test('should go to my website', async ({ page }) => {
  await page.goto('http://localhost:3000/about');
  await page.click('text=Trevor Lee');
  await expect(page).toHaveURL('https://www.trevortylerlee.com/');
});

test('should go to repo issues', async ({ page }) => {
  await page.goto('http://localhost:3000/about');
  await page.click('text=Report an issue');
  await expect(page).toHaveURL(
    'https://github.com/boogerbuttcheeks/tsguess/issues'
  );
});

test('Contains the head tag and its contents', async ({ page }) => {
  await page.goto('http://localhost:3000/about');
  await expect(page).toHaveTitle('about | tsguess');
});
