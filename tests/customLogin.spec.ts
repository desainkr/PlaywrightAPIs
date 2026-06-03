import { test } from '../fixtures/custom-fixture.ts';

test('Custom login test', async ({ LoggedIn }) => {
    await LoggedIn.goto('https://www.saucedemo.com/inventory.html');
});

