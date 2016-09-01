// Four variables that simulate the game cards

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// Based on whether or not user discovers a match, notify them with a winning or losing message 

// Queen matches
if (cardOne === cardTwo) {
	alert("You found a match!");
} else if (cardTwo === cardOne) {
	alert("You found a match!");
} else if (cardThree === cardFour) {
	alert("You found a match!");
} else if (cardFour === cardThree) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
