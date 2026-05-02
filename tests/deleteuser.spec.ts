import { test, expect } from '@playwright/test';

test('Delete User API test', async ({ request }) => {
    
    const deleteresponse = await request.delete("https://jsonplaceholder.typicode.com/users/1");
    
    expect(deleteresponse.status()).toBe(200)
    console.log(await deleteresponse.json());
    

})