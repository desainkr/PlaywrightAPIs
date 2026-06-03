import { test,expect } from '@playwright/test';
test('should get all products', async ({ request }) => {
    
    const response = await request.get("https://api.valentinos-magic-beans.click/products");
    //check status code
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe('OK');
    expect(response.headers()['content-type']).toBe('application/json');
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody).toHaveProperty('success', true)
    expect(responseBody).toHaveProperty('data');
    expect(responseBody.success).toBe(true);
    expect(Array.isArray(responseBody.data)).toBe(true);
    expect(responseBody.data.length).toBeGreaterThan(0);
    expect(responseBody.data[0].description).toContain('Smooth');




})