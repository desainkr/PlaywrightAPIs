import { test, expect } from '@playwright/test';

test('Delete user using Delete api', async ({ request }) => {

      // Delete the ID

    const deleteRes = await request.delete("https://jsonplaceholder.typicode.com/users/1");

    expect(deleteRes.status()).toBe(200);
    const responseBody = await deleteRes.json();
    
   // validate response body is empty for delete API
    expect(responseBody).toEqual({});


})