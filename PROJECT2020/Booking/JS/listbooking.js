window.addEventListener("load",function(){ 
    GetBookings();
}); 
 
function GetBookings(){
    let url = 'https://api.sheety.co/8a1a6f330286ba0ec0dacda0b91ee751/hotel/booking';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      //console.log(json.registration); 
      var bookings = document.getElementById("booking-list");   
      var bookingIds=[];
    
      for(var i = 0; i < json.booking.length; i++){   
        var glist = json.booking[i].name; //change
        var gadult = json.booking[i].pa; //change
        var gchildren = json.booking[i].pc; //change 
        var groom = json.booking[i].room;
        var gcheckin = json.booking[i].checki; 
        var gcheckout = json.booking[i].checko; 
        var guname = json.booking[i].gname;
        var guemail = json.booking[i].gemail;
        var gid = json.booking[i].id;  
        var buttonId = "delete" + gid;
     
       let row = bookings.insertRow(bookings.rows.length); 
       row.insertCell(0).innerHTML = gid; 
       row.insertCell(1).innerHTML = glist; 
       row.insertCell(2).innerHTML = gadult; 
       row.insertCell(3).innerHTML = gchildren;  
       row.insertCell(4).innerHTML = groom;  
       row.insertCell(5).innerHTML = gcheckin; 
       row.insertCell(6).innerHTML = gcheckout;  
       row.insertCell(7).innerHTML = guname;  
       row.insertCell(8).innerHTML = guemail; 
       row.insertCell(9).innerHTML = "<button id= '" + buttonId + "'class='btn btn-danger'>Delete</button><br/>";; 


       
        bookingIds.push(buttonId);
      } 
       for(let j = 0; j < bookingIds.length; j++){  
        let el = document.getElementById(bookingIds[j]);  
         el.addEventListener("click", function (){  
           let theId = bookingIds[j].replace("delete","");  
           DeleteBooking(theId);
    
         });
       }
       
      
    }); 
    }  
     
    function DeleteBooking(id){  
      if(confirm("Are you sure you want to delete?")){ 
        let url = 'https://api.sheety.co/8a1a6f330286ba0ec0dacda0b91ee751/hotel/booking/' + id;
        fetch(url, {
         method: 'DELETE',
        })
            .then((response) => {  
                location.reload();
              });
      } else {  
          alert("Delete cancelled");
      }
    }