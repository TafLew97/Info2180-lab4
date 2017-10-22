//#2
var boundaries;
window.onload = function() {
    //var boundary1 = document.getElementById("boundary1");
    boundaries = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundaries.length; i++) {
		boundaries[i].onmouseover = overBounds;
	}
}


	function overBounds(){
		if(!hasClass(boundaries[0], "youlose")) // Checks if the youlose class has been applied to at least one of the divs already
		{
			for (var i = 0; i < boundaries.length-1; i++) {
			boundaries[i].className += " youlose";
			}
		}
	}


//Used to check if a div element already has the youlose colour applied to it to prevent
//the onmouseover event from adding multiple instances of the class the the element
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
