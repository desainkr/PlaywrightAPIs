import { test, expect } from '@playwright/test';
import { equal } from 'assert/strict';


test('Post call example with token ', async ({ request }) => {

    const authData = {
        "username": "admin",
        "password": "password123"
    }
    const resPost = await request.post("https://restful-booker.herokuapp.com/auth", { headers: { "Content-Type": "application/json" }, data: authData });
    //console.log(await resPost.json());  //{ token: '9a82501cd26c7f3' }
    const postresponsejason = await resPost.json();
    console.log(resPost.status());
    expect(resPost.status()).toBe(200);
    expect(postresponsejason.token).not.toBeNull();

})

test('Post call example with BookingId ', async ({ request }) => {

    const bookingData = {
        "firstname": "Neel",
        "lastname": "Desai",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2026-02-15",
            "checkout": "2026-05-01"
        },
        "additionalneeds": "Apple"
    }
    const resPost = await request.post("https://restful-booker.herokuapp.com/booking", { headers: { "Content-Type": "application/json" }, data: bookingData });
    //console.log(await resPost.json());  //{ token: '9a82501cd26c7f3' }
    const postresponsejason = await resPost.json();
    //console.log(postresponsejason);
    // await resPost.body()  returns a Buffer, not a string.
   // console.log ((await resPost.body()).toString());//{"bookingid":1736,"booking":{"firstname":"Neel","lastname":"Desai","totalprice":111,"depositpaid":true,"bookingdates":{"checkin":"2026-02-15","checkout":"2026-05-01"},"additionalneeds":"Apple"}}
   const parsed = JSON.parse((await resPost.body()).toString()); 
   console.log(parsed);
   
   console.log(resPost.status());
    expect(resPost.status()).toBe(200);
    expect(postresponsejason.token).not.toBeNull();
    //expect(postresponsejason).toHaveProperty("bookingid", 4622);
    expect(postresponsejason.BookingId).not.toBeNull();
    // expect(postresponsejason.booking).toHaveProperty("firstname", "Neel");
    // expect(postresponsejason.booking).toHaveProperty("lastname", "Desai");

    expect(postresponsejason.booking.firstname).toBe(bookingData.firstname);
    expect(postresponsejason.booking.lastname).toBe(bookingData.lastname);
    expect(postresponsejason.booking.totalprice).toBe(bookingData.totalprice);
    expect(postresponsejason.booking.bookingdates.checkin).toBe(bookingData.bookingdates.checkin);
    expect(postresponsejason.booking.bookingdates.checkout).toBe(bookingData.bookingdates.checkout);
    expect(postresponsejason.booking.additionalneeds).toBe(bookingData.additionalneeds);
    

})