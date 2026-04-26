import { test, expect } from '@playwright/test';
import fs from 'fs';
import requestBody from '../testdata/booking.json'with { type: 'json' };

test('Booking data with json', async ({ request }) => {

    // const file = fs.readFileSync("./testdata/booking.json")
    // const booking = JSON.parse(file.toString());

    const postres = await request.post("https://restful-booker.herokuapp.com/booking",
        { headers: { "Content-Type": "application/json" }, data: requestBody }
    )
   
    const postresjson = await postres.json();
    console.log(postresjson)
    console.log(postres.status())
    console.log(postres.statusText())
     expect(postres.status()).toBe(200);
     expect(postres.statusText()).toBe("OK");
     expect(postresjson.bookingid).not.toBeNull();

}) 