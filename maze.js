//#5
var boundaries;
var end;
var start;
var statusState;
var win = false;
var outOfBounds = false;

window.onload = function() {
    boundaries = document.querySelectorAll(".boundary");
    end = document.getElementById("end");
    start = document.getElementById("start");
    statusState = document.getElementById("status");

    start.onclick = resetGame;
    end.onmouseover = endGame;
    for (var i = 0; i < boundaries.length; i++) {
		boundaries[i].onmouseover = overBounds;
	}
}

function overBounds(){
	if (!win){ // Used to prevent this code block from running if you have already won
		if(!outOfBounds) // Checks if the youlose class has already been applied
		{
			outOfBounds = true;
			statusState.innerText = 'You Lose! Click the "S" to reset and play again.';
			for (var i = 0; i < boundaries.length-1; i++) {
			boundaries[i].className += " youlose";
			}
		}
	}
}

function endGame(){
	if(!outOfBounds){ //Checks if the user hit any boundaries and lost the game
		win = true;
		statusState.innerText = 'You Win! Click the "S" to reset and play again.';
		}

}

function resetGame(){
	win = false;
	outOfBounds = false;
	statusState.innerText = 'Move your mouse over the "S" to begin.';	
	for (var i = 0; i < boundaries.length-1; i++) {
		boundaries[i].className = "boundary";
	}
}
