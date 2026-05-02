import { test, expect } from '@playwright/test';

test('update User using PUT API', async ({ request }) => {
    
    const putResponse = await request.put("https://jsonplaceholder.typicode.com/users/1",
        {
            data: {
                name: "Neel",
                username: "testputapi",
                email:"putest@gmail.com"
            }
        });
    expect(putResponse.status()).toBe(200);
    console.log(await putResponse.json());
    

})