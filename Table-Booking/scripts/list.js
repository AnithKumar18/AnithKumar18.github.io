window.addEventListener("load",function(){ 
    GetBookings();
}); 
 
function GetBookings(){
    let url = 'https://api.sheety.co/0296a26a9104fbbb400d264d4ed644b1/bookingApp/registration';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      //console.log(json.registration); 
      var bookings = document.getElementById("booking-list");   
      var bookingIds=[];
    
      for(var i = 0; i < json.registration.length; i++){   
        var gname = json.registration[i].name; 
        var gemail = json.registration[i].email; 
        var gpax = json.registration[i].pax; 
        var gid = json.registration[i].id;  
        var buttonId = "delete" + gid;
     
       let row = registration.insertRow(registration.rows.length); 
       row.insertCell(0).innerHTML = gid; 
       row.insertCell(1).innerHTML = gname; 
       row.insertCell(2).innerHTML = gemail; 
       row.insertCell(3).innerHTML = gpax; 
       row.insertCell(4).innerHTML = ""; //Remarks
       row.insertCell(5).innerHTML = "<button id= '" + buttonId + "'class='btn btn-danger'>Delete</button><br/>";; 


       
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
      
    document.getElementById("getBookings").addEventListener("click", function(){ 
     GetBookings();
    }) 