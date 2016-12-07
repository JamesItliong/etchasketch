var nsquares = 225;

$(document).ready(function() {
	createGrid(nsquares);
});

function createGrid(number) {
	
	var $square;
	
	for(var i = 0; i < number; i++) {
		$square = $("<div></div>");
		$square.addClass('square');
		$(".gridbox").append($square);
	}
	
	/*
	for(var i = 0; i < number; i++) {
		$("body").append($('<div/>', {'class' : 'square'}));
	}
	*/
	return true;
}

/**
	create a div (place it in a variable)
	apply a class to the div
	append div to the gridbox
*/