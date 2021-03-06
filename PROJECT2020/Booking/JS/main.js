const selectElement = function (element) { 
  return document.querySelector(element);
};
  
let header = document.querySelector('.header'); 
let hamburgerMenu = document.querySelector('.hamburger-menu');  
 
window.addEventListener('scroll', function () {  
 let windowPosition = window.scrollY > 0; 
 header.classList.toggle('active', windowPosition)
})
 
hamburgerMenu.addEventListener('click', function(){ 
    header.classList.toggle('menu-open');
})  
 
const options = { 
  bottom: '64px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.3s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
} 
 
const darkmode = new Darkmode(options);
 
darkmode.showWidget(); 