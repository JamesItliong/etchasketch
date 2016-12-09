var nsquares = 5000;

$(document).ready(function() {
	createGrid(nsquares);

	$(".square").hover(function() {
		$(this).css("background-color", "black");
	});
});

function createGrid(number) {
	var $square;
	
	for(var i = 0; i < number; i++) {
		$square = $("<div></div>");
		$square.addClass('square');
		$(".gridbox").append($square);
	}
}



/**
	create a div (place it in a variable)
	apply a class to the div
	append div to the gridbox
*/