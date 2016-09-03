/* Game cards */
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

/* Game board */
var board = document.getElementById("game-board");

/* createBoard function makes a div HTML element with class 'card' 
for each card and appends each newly created card to the div 
that has the class 'board' */

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var card = document.createElement("div");
		card.className = "card";
		card.setAttribute("data-card", cards[i]);
		card.addEventListener("click", isTwoCards);
		card.addEventListener("click", cardFlip);
		board.appendChild(card);
	}
}

/* isMatch function tests if two cards in play are a match and notifies the user 
if they found a match or not then subsequently resets the game */

var isMatch = function(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
		resetGame();
	} else if (cards[1] === cards[0]) {
		alert("You found a match!");
		resetGame();
	} else if (cards[2] === cards[3]) {
		alert("You found a match!");
		resetGame();
	} else if (cards[3] === cards[2]) {
		alert("You found a match!");
		resetGame();
	} else {
		alert("Sorry, try again.");
		resetGame();
	}
}

/* isTwoCards function checks if two cards are in play */
var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute("data-card")); // Add card to array

	if (cardsInPlay.length === 2) { // If user has 2 cards in play check for match
		isMatch(cardsInPlay);
		cardsInPlay = []; // Clears cards in play array for next try
	}
}

/* cardFlip function sets card innerHTML to an image */
var cardFlip = function() {
	this.innerHTML = "<img src="images/kingcard.png" alt="King of Hearts" />";
}

/* resetGame function clears all the cards and resets the game for the user */
var resetGame = function() {
	for (var i = 0; i < cards.length; i++) {
		document.getElementsByClassName("card")[i].innerHTML = "";
	}
}

createBoard();