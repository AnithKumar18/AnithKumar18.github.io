function BookNow(guestName,guestEmail,guestPax,guestPassword){ 
    let url = 'https://api.sheety.co/0296a26a9104fbbb400d264d4ed644b1/bookingApp/registration';
    let body = {
      registration: {
        name:guestName, 
        email:guestEmail, 
        pax:guestPax, 
        password:guestPassword
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
      console.log(json.registration); 
      document.getElementById("bookMsg").innerHTML = json.registration.name +  " successfully added"; 
      GetBookings();
    });
  }  
   
  document.getElementById("bookNow").addEventListener("click", function(){ 
   let guestName = document.getElementById("guestName").value; 
   let guestEmail = document.getElementById("guestEmail").value; 
   let guestPax = document.getElementById("guestPax").value;  
   let guestPassword = document.getElementById("guestPassword").value; 

    BookNow(guestName,guestEmail,guestPax,guestPassword);
  }); 
   
  