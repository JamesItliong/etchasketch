var style = 0;
var r, g, b;
var h1, h2, h3;

$(document).ready(function() {
	createGrid(50*50, 700/50);
	draw();
});

function draw() {
	$(".square").hover(function() {
		if(style === 0) { 		 //DEFAULT COLOR
			$(this).css("background-color", "black");
		} else if(style === 1) { //MONOCHROME COLOR
			$(this).css("background-color", monochromeColor($(this).css("background-color")));
		} else if(style === 2) { //RANDOM COLOR
			$(this).css("background-color", generateRandomColor(50));
		}
	});
}

function resizeGrid() {
	deleteGrid();
	var answer = prompt("Enter the side length of the screen (that is, the number of squares)", "Value should be between 1-100");
	var nSquares = parseInt(answer);

	if(nSquares != null && nSquares <= 100) {
		var squareSize = (700 / nSquares);
		createGrid(nSquares*nSquares, squareSize);
		draw();
	} else {
		alert(":O Please enter a valid number. BTW it's between 1 and 100.");
	}
}

function createGrid(number, size) {
	var $square;

	for(var i = 0; i < number; i++) {
		$square = $("<div id=" + "'" + i + "'" + "></div>");
		$square.addClass('square');
		$square.css({'height': size+"px", 'width': size+"px"});
		$(".gridbox").append($square);
	}
}

function deleteGrid() {
	$(".gridbox").empty();
}

function clearGrid() {
	$(".square").css("background-color", "white");
}

//Function from http://stackoverflow.com/questions/1152024/best-way-to-generate-a-random-color-in-javascript/14187677#14187677
function generateRandomColor(brightness) {
	function generateRandomHexPair() {
		var r = 255 - brightness; //?
		var n = 0 | ((Math.random() * r) + brightness); //?
		var s = n.toString(16); //convert number to a HEX string

		return (s.length == 1) ? '0'+s : s;
	}
	return '#' + generateRandomHexPair() + generateRandomHexPair() + generateRandomHexPair();
}

/**
	Use variable.toString(16) to convert decimal to hex
	Use parseInt(hexValue, 16) to convert hex to decimal
	Use .css("attribute") to obtain value
	format: rgb(0, 0, 0)
*/


function monochromeColor(prevColor) {
	var brightness = 15;
	var values = prevColor.split(/[\D]+/);

	r = parseInt(values[1], 10);
	g = parseInt(values[2], 10);
	b = parseInt(values[3], 10);

	r = r > brightness ? (r - brightness) : 0;
	g = g > brightness ? (g - brightness) : 0;
	b = b > brightness ? (b - brightness) : 0;

	h1 = r.toString(16);
	h2 = g.toString(16);
	h3 = b.toString(16);

	h1 = (h1.length === 1) ? '0'+h1 : h1;
	h2 = (h2.length === 1) ? '0'+h2 : h2;
	h3 = (h3.length === 1) ? '0'+h3 : h3;

	var newColor = "#" + h1 + h2 + h3;
	return newColor;
}


function setStyle(option) {
	style = option;
}

function captureDrawing() {
	html2canvas($('.gridbox'), {
		onrendered: function(canvas) {
			var url = canvas.toDataURL();
			var downloadDrawing = $("<a>").attr("href", url).attr("download", "sketch.png").appendTo("body");
			downloadDrawing[0].click();
            downloadDrawing.remove();
		}
	})
}