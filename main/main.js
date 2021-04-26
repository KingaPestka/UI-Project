function pageLoaded()
{
var canvas = document.getElementById("the_canvas");
var context = canvas.getContext("2d");
var img = document.getElementById("backgound1");

 /*context.drawImage(img,10,10);/*there is an error but it works? */
 context.fillRect(500,490,200,300);
 context.fillRect(710,490,200,300);
 context.fillRect(920,490,200,300);
 context.fillRect(1130,490,200,300);





}
var correctSequence = [3,2,4,1];
var playerSequence = new Array(3);
var howManyButtonsClicked = 0;
var loopThroughSequence = 0;
var buttonSelection = 0;

function setPlayerSequence() {
	if (howManyButtonsClicked == 1) {
		playerSequence[0] = buttonSelection;
		checkCorrectSequence();
		
	}
	if (howManyButtonsClicked == 2) {
		playerSequence[1] = buttonSelection;
		checkCorrectSequence();
	}
	if (howManyButtonsClicked == 3) {
		playerSequence[2] = buttonSelection;
		checkCorrectSequence();
	}
	if (howManyButtonsClicked == 4) {
		playerSequence[3] = buttonSelection;
		checkCorrectSequence();

	}
}

function checkCorrectSequence() {
	if (correctSequence[loopThroughSequence] == playerSequence[loopThroughSequence]) {
		loopThroughSequence = loopThroughSequence + 1;
		//loseHealth();
		alert("the bar goes down by 25%");
		health(25);
        
	}		
	else {
		console.log("Sequence is not correct!");
		alert("You sequence is not correct!");
		document.getElementById("heal").value = "100";
		resetSequence();
		//restoreHealth();
	}
	if (playerSequence[3] == correctSequence[3]) {
		
		murderSolvedSuccessfully();
	
	}
	
}
function murderSolvedSuccessfully() {
	console.log("murder has been solved successfully!");
	alert("You Solved the murder and bar is empty");
	resetSequence();
}

function resetSequence() {
    console.log("reset function running");
	for (i = 0; i< 4; i++) {
		playerSequence[i] = 0;
        howManyButtonsClicked = 0;
        loopThroughSequence = 0;

	}
}

//function loseHealth() {
	
//}

function button1() {
	buttonSelection = 1;
	howManyButtonsClicked = howManyButtonsClicked + 1;
	setPlayerSequence();
	
}


function button2() {
	buttonSelection = 2;
	howManyButtonsClicked = howManyButtonsClicked + 1;
	setPlayerSequence();
}

function button3() {
	buttonSelection = 3;
	howManyButtonsClicked = howManyButtonsClicked + 1;
	setPlayerSequence();
}

function button4() {
	buttonSelection = 4;
	howManyButtonsClicked = howManyButtonsClicked + 1;
	setPlayerSequence();
}


function health(number) {
var nb = parseFloat( document.getElementById("heal").value - number	);//parsefloat allows me to transform the text to a number
console.log(nb);
document.getElementById("heal").value = nb;

}