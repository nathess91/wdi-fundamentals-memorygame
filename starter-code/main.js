/* Four variables that simulate the game cards */

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/* Based on whether or not user discovers a match, 
notify them with a winning or losing message */

// if (cardOne === cardTwo) {
// 	alert("You found a match!");
// } else if (cardTwo === cardOne) {
// 	alert("You found a match!");
// } else if (cardThree === cardFour) {
// 	alert("You found a match!");
// } else if (cardFour === cardThree) {
// 	alert("You found a match!");
// } else {
// 	alert("Sorry, try again.");
// }

/* Get an element with the id of 'game-board' and set it to a variable */
var board = document.getElementById("game-board");

/* createBoard function makes a div HTML element with class 'card' 
for each card and appends each newly created card to the div 
that has the class 'board' */

var createBoard = function() {
	for (var i = 0; i <= 4; i++) {
		var card = document.createElement("div");
		card.className = "card";
		board.appendChild(card);
	}
}