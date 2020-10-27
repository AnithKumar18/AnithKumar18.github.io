function BookNow(hotels,adults,children,troom,checkin,checkout){ 
    let url = 'https://api.sheety.co/5f27de59602f8acb8e232273e1aa592a/hotel/booking';
    let body = {
      booking: {
        name:hotels, 
        pa:adults, 
        pc:children, 
        room:troom,
        ci:checkin,
        co:checkout
      }
    };
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
      document.getElementById("bookMsg").innerHTML = json.booking.name +  " successfully added"; 
      GetBookings();
    });
  }  
   
  document.getElementById("bookNow").addEventListener("click", function(){ 
   let s = document.getElementById("hotels").value; 
   let t = document.getElementById("adults").value; 
   let u = document.getElementById("children").value;   
   let v = document.getElementById("troom").value;   
   let w = document.getElementById("checkin").value; 
   let x = document.getElementById("checkout").value;
    BookNow(s,t,u,v,w,x);
  });