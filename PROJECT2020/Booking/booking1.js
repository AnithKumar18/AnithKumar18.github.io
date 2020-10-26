function BookNow(hotels,adults,children,checkin,checkout){ 
    let url = 'https://api.sheety.co/5f27de59602f8acb8e232273e1aa592a/bookingRegistration/book';
    let body = {
      book: {
        list:hotels, 
        adults:adults, 
        childrens:children,
        checkins:checkin,
        checkouts:checkout
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
    console.log(json.book);
      document.getElementById("bookMsg").innerHTML = json.book.list +  " successfully added"; 
      GetBookings();
    });
  }  
   
  document.getElementById("bookNow").addEventListener("click", function(){ 
   let s = document.getElementById("hotels").value; 
   let t = document.getElementById("adults").value; 
   let u = document.getElementById("children").value;  
   let v = document.getElementById("checkin").value; 
   let w = document.getElementById("checkout").value;
    BookNow(s,t,u,v,w);
  });