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
           alert(json.booking.name + "successfully added"); 
    });
  }  
  window.addEventListener("load", function(){ 
      document.getElementById("bookNow").addEventListener("click", function(){ 
          let a = document.getElementById("hotels").value; 
          let b = document.getElementById("adults").value; 
          let c = document.getElementById("children").value;   
          let d = document.getElementById("troom").value;   
          let e = document.getElementById("checkin").value; 
          let f = document.getElementById("checkout").value; 

            BookNow(a,b,c,d,e,f);
       }); 
   
  });