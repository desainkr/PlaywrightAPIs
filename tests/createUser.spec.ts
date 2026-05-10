import { test, expect } from '@playwright/test';

test('Create User API test', async ({ request }) => {
    
    const response = await request.post("https://jsonplaceholder.typicode.com/users", {
        data: {
            name: "Test User",
            email: "test@gmail.com"
        }
    });
    // step1: response code
    expect(response.status()).toBe(201)
    // console.log(await response.json());
    
    //step2: response data validations
    const data = await response.json();
    expect(data.name).toBe('Test User');
    expect(data.email).toBe('test@gmail.com');

    // step3: ID validation
    expect(data.id).toBe(11);

    //step:4 data type of validations

    expect(typeof data.name).toBe('string');
    expect(typeof data.email).toBe('string');
    expect(typeof data.id).toBe('number');
    
    // step: 5 filed existence validation

    expect(data.name).toBeDefined();
    expect(data.email).toBeDefined();

    // step:6 Empty validation

    expect(data.name).not.toBe('');

    //step:7 format validation
    expect(data.email).toContain('@');

})