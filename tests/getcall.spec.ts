import { test, expect } from '@playwright/test';


test('Test get API', async ({ request }) => {
    const res = await request.get("https://gorest.co.in/public/v2/users/8364698");
    //get status
    const respStatus= res.status();
    //console.log(respStatus);
    expect(respStatus).toBe(200);
    const resstatustext= res.statusText()
    console.log(resstatustext);
    expect(resstatustext).toContain("OK")
    expect(res.ok()).toBeTruthy();
    //console.log(res);
    const resBody = await res.body();
    //get the response as Json body
    const resJson = await res.json()
    console.log(resJson);
    expect(resJson).toHaveProperty("id",8364698);
    expect(resJson).toHaveProperty("name","Kamla Joshi");
    expect(resJson).toHaveProperty("email","joshi_kamla@ziemann.test");
    expect(resJson).toHaveProperty("gender","male");
    expect(resJson).toHaveProperty("status","inactive");
    // expect(res.json.body).toContain("quia et support")
    // get headers from response
    const resHeaders = res.headers();
    //console.log(resHeaders);

    // get Array of headers from response
    const resArrayHeaders = res.headersArray();
    //console.log(resArrayHeaders);

    //Validate Body Is Defined
      expect(resJson).toBeDefined();  //This checks body is not undefined.

    //Validate Body Is Not Empty Object
    expect(Object.keys(resJson).length).toBeGreaterThan(0); //This ensures body has at least one property
    //alidate Response Is Object
   expect(typeof resJson).toBe("object");
   expect(resJson).not.toBeNull();

})