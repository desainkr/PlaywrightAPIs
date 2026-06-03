import { test as base,Page } from '@playwright/test';

type Fixtures = {
  LoggedIn: Page;   // LoggedIn fixture returns a Page
  //This line tells TypeScript: “Hey TS, I am adding a new fixture named LoggedIn, and it will return a Page object.”
};
export const test = base.extend<Fixtures>({
  LoggedIn: async ({ page }, use) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByRole('textbox', { name: 'Username' }).fill("standard_user");
    await page.getByRole('textbox', { name: 'Password' }).fill("secret_sauce");
    await page.getByRole('button', { name: 'Login' }).click();
    await use(page);   // return page directly
  }
});

