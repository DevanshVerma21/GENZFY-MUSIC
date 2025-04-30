"use strict";
feather.replace();
;
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close dropdown if clicked outside
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('show')) {
        dropdowns[i].classList.remove('show');
      }
    }
  }
}
