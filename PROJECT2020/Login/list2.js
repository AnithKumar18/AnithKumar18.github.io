window.addEventListener("load",function(){ 
    GetBookings();
}); 
 
function GetBookings(){
    let url = 'https://api.sheety.co/5f27de59602f8acb8e232273e1aa592a/memberRegistration/memberLogin';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      //console.log(json.registration); 
      var bookings = document.getElementById("booking-list");   
      var bookingIds=[];
    
      for(var i = 0; i < json.memberLogin.length; i++){   
        var gname = json.memberLogin[i].name; //change
        var gemail = json.memberLogin[i].emailplain; //change
        var gpassword = json.memberLogin[i].passwordplain; //change
        var gid = json.memberLogin[i].id;  
        var buttonId = "delete" + gid;
     
       let row = bookings.insertRow(bookings.rows.length); 
       row.insertCell(0).innerHTML = gid; 
       row.insertCell(1).innerHTML = gname; 
       row.insertCell(2).innerHTML = gemail; 
       row.insertCell(3).innerHTML = gpassword; 
       row.insertCell(4).innerHTML = "<button id= '" + buttonId + "'class='btn btn-danger'>Delete</button><br/>";; 


       
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
      
    








