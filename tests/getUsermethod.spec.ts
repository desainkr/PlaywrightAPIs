import { test, expect } from '@playwright/test';

test('json placeholder get api test', async ({ request }) => {

    const response = await request.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.body);
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
   
    // step2 : convert response to JSON
    const bodyResponse = await response.json();
    console.log(bodyResponse);
    
    // step 3: validate array length
    expect(Array.isArray(bodyResponse)).toBeTruthy();
    expect(bodyResponse.length).toBe(10);

    // step 4:  validate first object
    const firstuser = bodyResponse[0];
    expect(firstuser.id).toBe(1);
    expect(firstuser.name).toBe("Leanne Graham");
    expect(firstuser.name).toBeDefined();
    expect(firstuser.email).toContain('@');

    //step5 : validate nested object(address)
    expect(firstuser.address).toBeDefined();
    expect(firstuser.address.street).toBe('Kulas Light');
    expect(firstuser.address.city).toBe('Gwenborough');
    expect(firstuser.address.zipcode).toBe('92998-3874');
    expect(firstuser.company.name).toBe('Romaguera-Crona');

    // step:6 validate all fileds
    
    for (const user of bodyResponse) { 
        expect(user.id).toBeDefined();
        expect(user.email).toContain('@');
        expect(user.phone).toBeDefined();

        // step:7 validate data Type

        expect(typeof firstuser.id).toBe('number');
        expect(typeof firstuser.name).toBe('string');

        // step :8 empty validations

        expect(firstuser.id).not.toBe('');
        expect(firstuser.name).not.toBe('');

    }


 




})