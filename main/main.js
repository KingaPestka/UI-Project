function pageLoaded()
{
var canvas = document.getElementById("the_canvas");
var context = canvas.getContext("2d");
var img = document.getElementById("backgound1");

context.drawImage(img,10,10);
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
        
	}		
	else {
		console.log("Sequence is not correct!");
		alert("You sequence is not correct!");
		
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
	setPlayerSequence()
}

function button2() {
	buttonSelection = 2;
	howManyButtonsClicked = howManyButtonsClicked + 1;
	setPlayerSequence()
}

function button3() {
	buttonSelection = 3;
	howManyButtonsClicked = howManyButtonsClicked + 1;
	setPlayerSequence()
}

function button4() {
	buttonSelection = 4;
	howManyButtonsClicked = howManyButtonsClicked + 1;
	setPlayerSequence()
}
/*var playerSequence = new Array();
var correctSequence = ["button3","button1","button2","button4"];
function buttonOnClickEvent(){
    alert("Booooommmmmm!!!");
}
function GamerInput(input) {
    this.action = input;
}
    


function button1()
{
    
    
    playerSequence.add(buttonOnClickEvent);
    if(playerSequence.lenght == 4){
        verifySequence();
        console.log("running");
    }
}
function button2()
{
    playerSequence.add();
    if(playerSequence.lenght == 4){
        verifySequence();
        console.log("running");
    }
function button3()
{
    playerSequence.add();
    if(playerSequence.lenght == 4){
        verifySequence();
        console.log("running");
    }
}
function button4()
{
    playerSequence.add();
    if(playerSequence.lenght == 4){
        verifySequence();
        console.log("running");
    }
}
function solveMurder()
{
    playerSequence.add();
    if(playerSequence.lenght == 4){
        verifySequence();
        console.log("running");
    }
}
function verifySequence(){
    if(playerSequence.lenght != correctSequence.lenght){
        return;
    }
    for(var i= 0;i<4;i++){
        if(playerSequence[i] != correctSequence[i]){
            playerSequence.clear ();
            return;
        }
    }
    debug.Log ("yes");
}
}*/
