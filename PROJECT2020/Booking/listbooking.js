window.addEventListener("load",function(){ 
    GetBookings();
}); 
 
function GetBookings(){
    let url = 'https://api.sheety.co/5f27de59602f8acb8e232273e1aa592a/bookingRegistration/book';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      //console.log(json.registration); 
      var bookings = document.getElementById("booking-list");   
      var bookingIds=[];
    
      for(var i = 0; i < json.book.length; i++){   
        var glist = json.book[i].list; //change
        var gadult = json.book[i].adults; //change
        var gchildren = json.book[i].childrens; //change
        var gcheckin = json.book[i].checkins; 
        var gcheckout = json.book[i].checkouts;
        var gid = json.book[i].id;  
        var buttonId = "delete" + gid;
     
       let row = bookings.insertRow(bookings.rows.length); 
       row.insertCell(0).innerHTML = gid; 
       row.insertCell(1).innerHTML = glist; 
       row.insertCell(2).innerHTML = gadult; 
       row.insertCell(3).innerHTML = gchildren; 
       row.insertCell(4).innerHTML = gcheckin; 
       row.insertCell(5).innerHTML = gcheckout; 
       row.insertCell(6).innerHTML = "<button id= '" + buttonId + "'class='btn btn-danger'>Delete</button><br/>";; 


       
        bookingIds.push(buttonId);
      } 
       for(let j = 0; j < bookingIds.length; j++){  
        let el = document.getElementById(bookingIds[j]);  
         el.addEventListener("click", function (){  
           let theId = bookingIds[j].replace("delete","");  
           //DeleteBooking(theId);
    
         });
       }
       
      
    }); 
    } 