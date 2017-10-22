//#4
var loser = false;  // whether the user has hit a wall

window.onload = function() {
    document.getElementById("start").onclick = resetGame;
	document.getElementById("end").onmouseover = end;
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};

function overBoundary() {
    loser = true;
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
       boundaries[i].className += " youlose";
    }
}

function resetGame() {
    loser = false;
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
		boundaries[i].className = "boundary";
    }
}

function end() {
    if(loser) {
        alert("Sorry, you lost. :[");
    } else {
        alert("You win! :]");
    }
}
