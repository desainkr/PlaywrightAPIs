import { test, expect } from '@playwright/test';

test('Create User API test', async ({ request }) => {
    
    const response = await request.post("https://jsonplaceholder.typicode.com/users", {
         data: {name:"Test User",email:"test@gmail.com"}
    });
    
    expect(response.status()).toBe(201)
    console.log(await response.json());
    

})