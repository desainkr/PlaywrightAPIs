import { test, expect } from '@playwright/test';
/*
Full update
Sends complete object
Replaces resource
*/
test('update user using PUT api', async ({ request }) => {

    const response = await request.put("https://jsonplaceholder.typicode.com/users/1",
        {
            data:
            {
                name: 'Updated Name',
                email: 'updatedemail@gmail.com'

            }
        })
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe('OK');
    const responseBody = await response.json();
    console.log('status Code', response.status());
    console.log('status Text', response.statusText());

    // Object validation
    expect(typeof responseBody).toBe('object');

    // updated field validation
    expect(responseBody.name).toBe('Updated Name');
    expect(responseBody.email).toBe('updatedemail@gmail.com');

    // ID validation
    expect(responseBody.id).toBe(1);

    // filed existence validation

    expect(responseBody.name).toBeDefined();
    expect(responseBody.email).toBeDefined();

    // format validation
    expect(responseBody.email).toContain('@');
  

})