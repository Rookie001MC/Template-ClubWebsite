// Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener("scroll", function () {
  // detects new state and compares it with the new one
  if (document.body.getBoundingClientRect().top > scrollPos) {
    document.getElementsByClassName("navbar")[0].classList.add("transparent");
    document.getElementsByClassName("fas")[0].style.color = "white";
    document.getElementsByClassName("navbar-brand")[0].style.color = "white";
  } else {
    document
      .getElementsByClassName("navbar")[0]
      .classList.remove("transparent");
    document.getElementsByClassName("fas")[0].style.color = "black";
    document.getElementsByClassName("navbar-brand")[0].style.color = "black";
  }
  // saves the new position for iteration.
  scrollPos = document.body.getBoundingClientRect().top;
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {

	var i;
	for (i = 0; i < document.getElementsByClassName("sidenav-links").length; i++) {
  document.getElementsByClassName("sidenav-links")[i].style.fontSize= "25px";
}

  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {	
	var i;
	for (i = 0; i < document.getElementsByClassName("sidenav-links").length; i++) {
  document.getElementsByClassName("sidenav-links")[i].style.fontSize= "0";
}
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}
