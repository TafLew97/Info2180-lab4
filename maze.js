//#1
window.onload = function() {
    var boundary1 = document.getElementById("boundary1");

 
	boundary1.onmouseover=function(){
		if(!hasClass(boundary1, "youlose")){
			boundary1.className += " youlose";
		}
		
	}
	
}

//Used to check if a div element already has the youlose colour applied to it to prevent
//the onmouseover event from adding multiple instances of the class the the element
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

