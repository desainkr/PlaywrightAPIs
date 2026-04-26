import { test, expect } from '@playwright/test';

test('Delete Example ',async ({request})=>{
   

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
                               

     // delete booking info

     const deleteBookingRes= await request.delete("https://restful-booker.herokuapp.com/booking/"+`${bookingid}`,
     {headers: {"Content-Type":"application/json","Cookie":"token="+`${authToken}`}})
     console.log(deleteBookingRes.status());
     console.log(deleteBookingRes.statusText());
     expect(deleteBookingRes.status()).toBe(201)
      expect(deleteBookingRes.statusText()).toBe("Created")
      expect(deleteBookingRes.statusText()).toContain("Created")
     
    // get the response after deleting

    const getBookinginfo= await request.get("https://restful-booker.herokuapp.com/booking/"+`${bookingid}`);

     console.log(getBookinginfo.status());
     console.log(getBookinginfo.statusText());
     expect(getBookinginfo.status()).toBe(404)
      expect(getBookinginfo.statusText()).toBe("Not Found")




}) 