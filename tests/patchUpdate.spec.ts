import { test, expect } from '@playwright/test';
/*
Full update
Sends complete object
Replaces resource
*/
test('update user using PUT api', async ({ request }) => {

    const response = await request.patch("https://jsonplaceholder.typicode.com/users/1",
        {
            data:
            {
               email: 'patcchUpdatedEmail@gmail.com'

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
    expect(responseBody.name).toBe('Leanne Graham');
    expect(responseBody.email).toBe('patcchUpdatedEmail@gmail.com');
    // ID validation
    expect(responseBody.id).toBe(1);

    // filed existence validation

    expect(responseBody.name).toBeDefined();
    expect(responseBody.phone).toBeDefined();
    expect(responseBody.website).toBeDefined();
    expect(responseBody.company).toBeDefined();
    // format validation
    expect(typeof responseBody.email).toBe('string');
  

})