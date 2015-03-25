$(document).ready(function(){


	// Start the game with x
	function startGame(){
		document.turn = "x";

		//
	}

	// Set a message function to tell the user any message
	function setMsg(msg){
		document.getElementById("#Message").innerText = msg;
	}

	var box = [

		["X", "X", "0"],
		["0", "X", "0"],
		["X", "0", "X"]

	];

	$('#GameBox li').on('click', function(){

		var idSplit = this.id.split("-");
		var xCord = parseInt(idSplit[0]);
		var yCord = parseInt(idSplit[1]);
		var boxClick = box[xCord][yCord];

		$(this).html(boxClick);

	});

});