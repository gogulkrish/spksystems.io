window.onscroll = function() {myFunction()};
      
var navlist = document.getElementById("nav");
var color= document.getElementsByClassName("n-1");
var sticky = navlist.offsetTop;


  
/* Function to stick the nav bar */
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navlist.classList.add("stick")
        color.classList.add("color")
    } 
      else {
          navlist.classList.remove("stick");
      }
    }
   