import { test, expect } from '@playwright/test';

test('Validate API headers in playwright', async ({ request }) => {

    const requestHeaders = {
        
        'Content-Type': 'application/json',
        'Accept': 'application/json'

    };
    
    const response = await request.post("https://jsonplaceholder.typicode.com/users", {
        headers:requestHeaders,
        data: {
            name: "Test User",
            email: "test@gmail.com"
        }
    });
    // step1: response code
    expect(response.status()).toBe(201)
    // console.log(await response.json());
     console.log('Response Headers');
    console.log(response.headers());
    expect(response.headers()['content-type']).toBeDefined();
    expect(response.headers()['content-type']).toContain('application/json');
    expect(response.headers()['server']).toBeDefined();
    
    
    //step2: response data validations
      console.log('Response Body');
    const responseBody = await response.json();
    expect(responseBody.name).toBe('Test User');
    expect(responseBody.email).toBe('test@gmail.com');

    // step3: ID validation
    expect(responseBody.id).toBe(11);

    //step:4 data type of validations

    expect(typeof responseBody.name).toBe('string');
    expect(typeof responseBody.email).toBe('string');
    expect(typeof responseBody.id).toBe('number');
    
    // step: 5 filed existence validation

    expect(responseBody.name).toBeDefined();
    expect(responseBody.email).toBeDefined();

    // step:6 Empty validation

    expect(responseBody.name).not.toBe('');

    //step:7 format validation
    expect(responseBody.email).toContain('@');

})