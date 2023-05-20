
var button = document.querySelector('#menu-opner');
var menu = document.querySelector('#st-container');
var pusher = document.querySelector('.st-pusher');
var subMenu = document.getElementsByClassName(".sub-menu");
var ul = document.getElementById("sidebar-ul");
var catagory = document.getElementById("catagory")
let timeout;
let closeTimeout;
$('body').click((event) => {
  console.log(event.target.className)
  if (event.target.id == "st-container" || event.target.id == "menu-opner" || event.target.tagName == "ASIDE"){
    return;
  }
  if(event.target.className =="fa-solid fa-plus" || event.target.className == "hover" ||  event.target.className == "hover hover-clicked"){
   event.target.classList.toggle("hover-clicked")
    ul.classList.toggle("sub-menu-open")
    return;
  }
  
  closeMenu();
});
// adding a click event the button
button.addEventListener('click', addClass)



function addClass(e) {

  // adding the effects
  if (timeout){
    clearTimeout(timeout);
    
  }
  menu.classList.toggle('st-effect-1');
  menu.classList.toggle('st-menu-open');
  if(menu.style.zIndex == "1040"){
    timeout = setTimeout(function() {  menu.style.zIndex = "-1";}, 400);
  }
  else{
    menu.style.zIndex = "1040"
  }
  // console.log(e.target.getAttribute('data-effect'));
}

function closeMenu() {
  // if the click target has this class then we close the menu by removing all the classes
  if (closeTimeout){
    clearTimeout(closeTimeout)
  }
  menu.classList.remove('st-menu-open')
  menu.classList.remove('st-effect-1')
  closeTimeout = setTimeout(function() {  menu.style.zIndex = "-1";}, 400);
 
}


