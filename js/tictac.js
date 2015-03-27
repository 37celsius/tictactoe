
	var xTurn = "o";
	var turn = " ";
	var playerXScore = 0;
	var playerOScore = 0;
	var MAX_COUNT = 9;
	var count = 0;

	var box = [

		["", "", ""],
		["", "", ""],
		["", "", ""]

	];

function countScore() {

	if(playerXScore === 1){
		$(".record-Player-One.empty-Record li:nth-child(1)").addClass("turnYellow");
	} else if (playerXScore ===2){
		$(".record-Player-One.empty-Record li:nth-child(2)").addClass("turnYellow");
	} else if (playerXScore === 3){
		$(".record-Player-One.empty-Record li:nth-child(3)").addClass("turnYellow");
		popUpBTNReset();
	} 

	if(playerOScore === 1){
		$(".record-Player-Two.empty-Record li:nth-child(1)").addClass("turnYellow");
	} else if (playerOScore === 2){
		$(".record-Player-Two.empty-Record li:nth-child(2)").addClass("turnYellow");
	} else if (playerOScore === 3){
		$(".record-Player-Two.empty-Record li:nth-child(3)").addClass("turnYellow");
		popUpBTNReset();


	}

}


function totalWinReset() {
	playerXScore = 0;
	playerOScore = 0;
	resetGame();
$(".record-Player-One.empty-Record li").removeClass("turnYellow");
$(".record-Player-Two.empty-Record li").removeClass("turnYellow");

}

function resetGame() {

	xTurn = "o";
	count= 0;
	// playerXScore = 0;
	// playerOScore = 0;
	turn = " ";
	MAX_COUNT = 9;

	box = [

		["", "", ""],
		["", "", ""],
		["", "", ""]

	];

	$("#GameBox li").removeClass("active-GameBox").addClass("empty-GameBox");

	$("#GameBox li").html(" ");
	countScore();

}

var popUpBTN = function() {
	var dialogbox = $("#DialogBox");

	$(dialogbox).fadeIn(300);

	// var popMargTop = ($(dialogbox).height() + 24) / 2; 
 //    var popMargLeft = ($(dialogbox).width() + 24) / 2; 
    
 //    $(dialogbox).css({ 
 //        'margin-top' : -popMargTop,
 //        'margin-left' : -popMargLeft
 //    });

    $('body').append('<div id="mask"></div>');
    $('#mask').fadeIn(300);
    
    return false;

};

var popUpBTNReset = function(){
$('#RogerButton, #mask').on('click', function() { 
  $('#mask , #DialogBox').fadeOut(300 , function() {
    $('#mask').remove();


 

    resetGame();  
}); 
return false;

});
};






$('#GameBox li').on('click', function(){

		var idSplit = this.id.split("-");
		var xCord = parseInt(idSplit[1]);
		var yCord = parseInt(idSplit[2]);
		var boxClick = box[xCord][yCord];


		if(xTurn === "x"){
			xTurn = "o";
			$("#Player-One h2").css("color","#fdfdfd");
			$("#Player-Two h2").css("color","#2F0147");
			box[xCord][yCord] = xTurn;
			// playerOScore += 1;
			// count +=1;
			console.log("o " + playerXScore);

			$(this).html(xTurn);
			$(this).removeClass("empty-GameBox").addClass("active-GameBox");

		} else if (xTurn === "o"){
			xTurn = "x";
			$("#Player-Two h2").css("color","#fdfdfd");
			$("#Player-One h2").css("color","#2F0147");
			box[xCord][yCord] = xTurn;
			console.log("x " + playerOScore);
			// playerXScore += 1;
			// count+=1;

			$(this).html(xTurn);
			$(this).removeClass("empty-GameBox").addClass("active-GameBox");

		}

		if( 
			(_.contains(box[0][0], xTurn) && _.contains(box[0][1], xTurn) && _.contains(box[0][2], xTurn)) || 
			(_.contains(box[1][0], xTurn) && _.contains(box[1][1], xTurn) && _.contains(box[1][2], xTurn)) ||
			(_.contains(box[2][0], xTurn) && _.contains(box[2][1], xTurn) && _.contains(box[2][2], xTurn)) ||
			(_.contains(box[0][0], xTurn) && _.contains(box[1][0], xTurn) && _.contains(box[2][0], xTurn)) ||
			(_.contains(box[0][1], xTurn) && _.contains(box[1][1], xTurn) && _.contains(box[2][1], xTurn)) ||
			(_.contains(box[0][2], xTurn) && _.contains(box[1][2], xTurn) && _.contains(box[2][2], xTurn)) ||
			(_.contains(box[0][0], xTurn) && _.contains(box[1][1], xTurn) && _.contains(box[2][2], xTurn)) ||
			(_.contains(box[0][0], xTurn) && _.contains(box[1][1], xTurn) && _.contains(box[2][2], xTurn))

		) {


			if(xTurn === "x"){
				popUpBTN();				
				console.log("x win");
				$("#Winner").html("x win this round");
				playerXScore++;
				console.log(playerXScore);
				popUpBTNReset();
			} else if (xTurn === "o") {
				popUpBTN();
				console.log("o win");
				$("#Winner").html("o win this round");
				popUpBTNReset();
				playerOScore++;
				console.log(playerOScore);
			} 


			// if(count == 9 ){
			// 	console.log("draw");
			// 	popUpBTN();
			// 	$("#Winner").html("Aww it's a draw");
			// 	popUpBTNReset();

			// } 

		}

		// if( $(this).hasClass("empty-GameBox") ) {
		// 	$(this).removeClass("empty-GameBox").addClass("active-GameBox");
		// }

		
});

	var textarray = [
	"Never agree for a stalemate, hack your way out",
	"Accept who you are, unless you are a serial killer",
	"I tried to be normal once, Worst two minutes of my life",
	"I put the pro in procrastinate, tomorrow"
	];

	var $ryt = $('.userTurn-Next');

	function RndText() {
	var rannum = Math.floor(Math.random() * textarray.length);
	$ryt.html(textarray[rannum]).hide().fadeIn('slow');
	}
	onload = function () {
	RndText();
	}
	var inter = setInterval(function () {
	RndText();
	}, 4000);


var colorChange = function() {

	$("")

}


