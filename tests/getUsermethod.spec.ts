import { test, expect } from '@playwright/test';



test('jsonplaceholder get api test', async ({ request }) => {
    
    const response = await request.get("https://jsonplaceholder.typicode.com/users");
    console.log(await response.body);

    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
    const bodyResponse = await response.json();
    expect(bodyResponse[0]).toHaveProperty("username","Bret");
    expect(bodyResponse[0]).toHaveProperty("id",1);

})