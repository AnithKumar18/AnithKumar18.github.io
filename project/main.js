function getRandomUser(){ 
 var xhttp = new XMLHttpRequest(); 
 xhttp.onreadystatechange = function (){  
   if (this.readyState == 4 && this.status == 200){ 
    var data = JSON.parse(this.response); 
    var elFirstName = document.getElementById("firstName"); 
    var elLastName = document.getElementById("lastName"); 
    var eljsonResult = document.getElementById("jsonResult");  
    var eluserImage = document.getElementById("userImage"); 
    var elemail = document.getElementById("email");  
    var elphone = document.getElementById("phone");  
    var eladdress = document.getElementById("address"); 
      
     elFirstName.innerHTML = data.results[0].name.first; 
     elLastName.innerHTML = data.results[0].name.last;  
     elemail.innerHTML = data.results[0].email; 
     elphone.innerHTML = data.results[0].phone; 
     eladdress.innerHTML = data.results[0].location.street.number + ", <br/> " + data.results[0].location.street.name + ", <br/> " + data.results[0].location.city + ", <br/> " + data.results[0].location.postcode + ", <br/>" + data.results[0].location.state + ", <br/>" + data.results[0].location.country + ".";
     eljsonResult.innerHTML = this.response;    
     eluserImage.src = data.results[0].picture.large;  
     eluserImage.title = data.results[0].name.first = " " + data.results[0].name.last;  

   } 
  } 
  xhttp.open("GET", "https://randomuser.me/api/", true); 
  xhttp.send();
} 
var elGetRandomUser = document.getElementById("getRandomUserBtn"); 
elGetRandomUser.addEventListener("click" , function(){ 
 getRandomUser();
});