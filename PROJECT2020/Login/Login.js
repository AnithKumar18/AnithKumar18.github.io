const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
  
 
function BookNow(username,email,password){  
let url = 'https://api.sheety.co/5f27de59602f8acb8e232273e1aa592a/registration/login';
let body = {
  login: {
	name:username, 
    emailplain:email, 
    passplain:password
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
  console.log(json.login);
  document.getElementById("bookMsg").innerHTML = json.login.name +  " successfully added"; 
    GetBookings(); 
}); 
}

document.getElementById("bookNow").addEventListener("click", function(){ 
	let username = document.getElementById("username").value; 
	let email = document.getElementById("email").value; 
	let password = document.getElementById("password").value;  
 
	 BookNow(username,email,password);
   }); 
 
  



