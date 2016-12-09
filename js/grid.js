$(document).ready(function() {
	var answer = prompt("Enter the dimension of the box (i.e. the number of squares)", "Value should be between 1-64");
	var nSquares = parseInt(answer);

	if(nSquares != null && nSquares <= 200) {
		var squareSize = (800 / nSquares).toPrecision(15);
		createGrid(nSquares*nSquares, squareSize);
		$(".square").hover(function() {
			$(this).css("background-color", "black");
		});
	} else {
		alert("Please enter a valid number. BTW it's between 1 and 64.");
	}

	
});

function createGrid(number, size) {
	var $square;

	for(var i = 0; i < number; i++) {
		$square = $("<div></div>");
		$square.addClass('square');
		$square.css({'height': size+"px", 'width': size+"px"});
		$(".gridbox").append($square);
	}
}



/**
	Initially empty screen
	button asks user for a number (prompt)
	this number is used to determine the square size (this is because the box does not change)
	-	take the box dimension and divide it to the number of squares. this gives you the dimension of a square
	-	use the .css() to edit the stylesheet (in createGrid)
	-	??
	-	Finished.
*/