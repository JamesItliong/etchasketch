$(document).ready(function() {
	resizeGrid();
});

function resizeGrid() {
	deleteGrid();
	var answer = prompt("Enter the side length of the screen (that is, the number of squares)", "Value should be between 1-150");
	var nSquares = parseInt(answer);

	if(nSquares != null && nSquares <= 200) {
		var squareSize = (700 / nSquares);
		createGrid(nSquares*nSquares, squareSize);
		$(".square").hover(function() {
			$(this).css("background-color", "black");
		});
	} else {
		alert("D: Please enter a valid number. BTW it's between 1 and 150.");
	}
}

function createGrid(number, size) {
	var $square;

	for(var i = 0; i < number; i++) {
		$square = $("<div></div>");
		$square.addClass('square');
		$square.css({'height': size+"px", 'width': size+"px"});
		$(".gridbox").append($square);
	}
}

function deleteGrid() {
	$(".gridbox").empty();
}

function clearGrid() {
	$(".square").css("background-color", "gray");
}

//Function adapted from http://stackoverflow.com/questions/1152024/best-way-to-generate-a-random-color-in-javascript/14187677#14187677
function generateRandomColor(brightness) {
	function generateRandomHexPair() {
		var r = 255 - brightness; //?
		var n = 0 | ((Math.random() * r) + brightness); //?
		var s = n.toString(16); //convert number to a HEX string
	}
	return '#' + generateRandomHexPair() + generateRandomHexPair() + generateRandomHexPair();
}


/**
	Features to add:
	1. Press a button to resize the screen (DONE)
	2. Press a button to clear the screen (DONE)
	3. Buttons for:
		- random colors
		- increasing darkness (monochrome)
		- WITHOUT CHANGING THE SCREEN
*/