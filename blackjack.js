// Instantiate Deck and Players
var deck = new Deck();
var player = new Player('player');
var dealer = new Player('dealer');

// Changes the status message dependent on action
//
function changeStatusMessage(selectMessage) {
	var outputMessage = '';

	switch(selectMessage) {
		case 'newGame':
			outputMessage = "Your bet is: " + player.bet + "<br />" + 
			"Press New Game to play a round with this bet.";
			break;
		case 'win':
			outputMessage = "You won! <br />" + "Score: " +
			player.roundScore + "<br />" + "CPU Score: " + dealer.roundScore;
			break;
		case 'lose':
			outputMessage = "You lost! <br />" + "Score: " +
			player.roundScore + "<br />" + "CPU Score: " + dealer.roundScore;
			break;
		case 'overBet':
			outputMessage = "Place a bet that is equal or less than your total pot.";
			break;
		default: outputMessage = "Current Score: " + player.roundScore + "<br />" +
			"CPU Score: " + dealer.roundScore;
	}

	if(selectMessage === 'win' || selectMessage === 'lose' && player.moneyTotal > 0) {
		outputMessage += "<br /> Press New Game to play another round!";
	} else if(player.moneyTotal <= 0 && selectMessage !== 'overBet') {
		outputMessage += "<br /> Out of money!  Come back on a better day."
	}

	var status = document.getElementById('statusMessage');
	status.innerHTML = outputMessage;
}

// Checks to see if the player has won or lost
//
function checkWinCondition() {

	if(player.roundScore > 21) {
		if (player.handHasAce() === false) {
			youLose();
		} else {
			checkWinCondition();
		}
	} else if(player.roundScore <= 21 && player.hand.length === 5) {
		youWin();
	} else if(dealer.roundScore > 21) {
		if(dealer.handHasAce() === false) {
			youWin();
		} else {
			checkWinCondition();
		}
	}	else if(player.roundScore === 21 && dealer.roundScore === 21) {
		youLose();
	}	else if(dealer.roundScore >= player.roundScore) {
		youLose();
	} else {
		changeStatusMessage('none');
	}
}

// Set variables to their default state
//
function firstTimeSetup() {
  	// initial total money set to 100
  	var money = document.getElementById('moneyTotal');
  	money.appendChild(document.createTextNode("100"));

  	// set starting status message
	var status = document.getElementById('statusMessage');
	status.innerHTML = "Welcome to Blackjack!", "Press New Game to get Started.";

	// setup buttons
	document.getElementById('new').onclick = initialDeal;
	document.getElementById('new').disabled= false;
	document.getElementById('hit').disabled = true;
	document.getElementById('hit').onclick = hit;
	document.getElementById('stand').disabled = true;
	document.getElementById('stand').onclick = stand;

	// set initial bet to 10 and event listener functions
	var bet = document.getElementById("bet");
	bet.addEventListener("focus", betFocus, true);
	bet.addEventListener("blur", betBlur, true);
	bet.value = player.bet;

	// focus on bet window color change
	function betFocus() {
	    document.getElementById("bet").style.backgroundColor = "yellow"; 
	}

	// checks bet before allowing player to proceed
	function betBlur() {
	    var bet = document.getElementById("bet"); 

	    if(player.checkBetAgainstTotal(parseInt(bet.value))) {
	    	document.getElementById('new').disabled = false;
	    	bet.style.backgroundColor = "";
	    	changeStatusMessage('newGame');
	    } else {
	    	document.getElementById('new').disabled = true;
	    	bet.style.backgroundColor = "red";
	    	changeStatusMessage('overBet');
	    }
	}
}

// Deal card to player and check win condition
//
function hit() {
	player.addCard(deck.dealCard());

	if(player.roundScore === 21) {
		document.getElementById('hit').disabled = true;
	}

	checkWinCondition();
}

// Deal cards to dealer until >= player's score
//
function stand() {
	document.getElementById('hit').disabled = true;
	document.getElementById('stand').disabled = true;

	if(dealer.hand[1].getBackImage()) {
		dealer.hand[1].setBackImage(false);
		dealer.replaceBackImage(dealer.hand[1]);
		changeStatusMessage();
	} else {
		dealer.addCard(deck.dealCard());
	}

	checkWinCondition();
	if(dealer.roundScore < player.roundScore) {	stand(); }
}

// Set UI elements for game over
//
function gameOver() {
	document.getElementById('new').disabled = false;
	document.getElementById('hit').disabled = true;
	document.getElementById('stand').disabled = true;
	document.getElementById('bet').disabled = false;

	var money = document.getElementById('moneyTotal');
  	money.removeChild(money.childNodes[0]);
	money.appendChild(document.createTextNode(player.moneyTotal.toString()));

	if(player.moneyTotal <= 0) {
		document.getElementById('new').disabled = true;
	}

  	//initial bet set
  	var bet = document.getElementById('bet');
  	bet.nodeValue = player.bet;
}

// Set UI elements for player winning
//
function youWin() {
	changeStatusMessage('win');

	player.moneyTotal += parseInt(player.bet);

	player.clearScore();
	dealer.clearScore()

	gameOver();
}

// Set UI elements for player losing
//
function youLose() {
	changeStatusMessage('lose');

	player.moneyTotal -= parseInt(player.bet);

	player.clearScore();
	dealer.clearScore();

	gameOver();
}

// Deal two cards to player and dealer and set UI items
//
function initialDeal() {
	document.getElementById('bet').disabled = true;
	player.bet = document.getElementById('bet').value;
	console.log(player.bet);

	player.clearHand();
	dealer.clearHand();

	deck.initializeDeck();

	//Deal initial hand
	player.addCard(deck.dealCard());
	dealer.addCard(deck.dealCard());
	player.addCard(deck.dealCard());
	dealer.addCard(deck.dealCard());

	//show score
	changeStatusMessage();

	//disable New Game button
	document.getElementById('new').disabled = true;
	document.getElementById('hit').disabled = false;
	document.getElementById('stand').disabled = false;
}


firstTimeSetup();
