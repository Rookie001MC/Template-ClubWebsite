// Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos)
		document.getElementsByClassName('navbar')[0].classList.add("transparent")
	else
		document.getElementsByClassName('navbar')[0].classList.remove("transparent")
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;
});