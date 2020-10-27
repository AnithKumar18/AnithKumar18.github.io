function BookNow(hotels,adults,children,troom,checkin,checkout){ 
    let url = 'https://api.sheety.co/8a1a6f330286ba0ec0dacda0b91ee751/hotel/booking';
    let body = {
      booking: {
        name:hotels, 
        pa:adults, 
        pc:children, 
        room:troom,
        checki:checkin,
        checko:checkout
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
      document.getElementById("bookNow").addEventListener("click", function(e){  
        e.preventDefault();
          let a = document.getElementById("hotels").value; 
          let b = document.getElementById("adults").value; 
          let c = document.getElementById("children").value;   
          let d = document.getElementById("troom").value;   
          let e = document.getElementById("checkin").value; 
          let f = document.getElementById("checkout").value; 

            BookNow(a,b,c,d,e,f);
       }); 
   
  });