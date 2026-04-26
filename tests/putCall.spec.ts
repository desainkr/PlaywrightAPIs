import { test, expect } from '@playwright/test';

test('Put Example ',async ({request})=>{
   

    //Get Token ID from Auth API
    const authData={
    "username" : "admin",
    "password" : "password123"
                }
    const tokenRes= await request.post("https://restful-booker.herokuapp.com/auth",
                          {headers:{"Content-type": "application/json"},data:authData});
    const tokenResJason= await tokenRes.json();
    const authToken= tokenResJason.token;
    console.log("Token is :"+ authToken);
    expect(authToken).not.toBeNull();
    
  //Get Booking ID from Post API
 
  const newBookingData={
    "firstname" : "Neel",
    "lastname" : "Desai",
    "totalprice" : 777,
    "depositpaid" : false,
    "bookingdates" : {
        "checkin" : "2026-02-01",
        "checkout" : "2026-03-01"
    },
    "additionalneeds" : "Breakfast"
}

const newBookingRes= await request.post("https://restful-booker.herokuapp.com/booking",
     {headers: {"Content-Type":"application/json"}, data:newBookingData})
     const newBookingResJson= await newBookingRes.json();
     const bookingid=newBookingResJson.bookingid;
     console.log("New booking id is :" + bookingid);
                               

     // updatebooking info
const updateBookingData={
    "firstname" : "Neelakanta Reddy",
    "lastname" : "Desai",
    "totalprice" : 999,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2026-02-15",
        "checkout" : "2026-03-01"
    },
    "additionalneeds" : "Dinner"
}

const updatedBookingRes= await request.put("https://restful-booker.herokuapp.com/booking/"+`${bookingid}`,
     {headers: {"Content-Type":"application/json","Accept":"application/json","Cookie":"token="+`${authToken}`},
       data:updateBookingData})
     const upateedBookingResJson= await updatedBookingRes.json();
     console.log("Updated put response :" , upateedBookingResJson);

     
     




}) 