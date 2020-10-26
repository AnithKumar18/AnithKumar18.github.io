function BookNow(guestName,guestEmail,guestPax,guestRemark){ 
    let url = 'https://api.sheety.co/aa2f7b5a49d9fbeb0e14c8073ac2fe02/tableBooking/booking';
    let body = {
      booking: {
        name:guestName, 
        email:guestEmail, 
        pass:guestPax, 
        remark:guestRemark
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 
       "Content-Type":"application/json"
      }
    })
    .then((response) => response.json())
    .then(json => {
      // Do something with object
      console.log(json.booking); 
     // document.getElementById("bookMsg").innerHTML = json.booking.name +  " successfully added"; 
     // GetBookings();
    });
  }  
window.addEventListener("load", function(){ 
    document.getElementById("bookNow").addEventListener("click", function(){ 
        let guestName = document.getElementById("guestName").value; 
        let guestEmail = document.getElementById("guestEmail").value; 
        let guestPax = document.getElementById("guestPax").value;   
        let guestRemark = document.getElementById("guestRemark").value;  
     
     
         console.log(guestName + "," + guestEmail + "," + guestPax + "," + guestRemark); 

    }); 
 
   
   


});