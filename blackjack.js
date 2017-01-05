//layout resource http://math.hws.edu/eck/cs271/js-work/Blackjack.html
//github image resource https://github.com/BlindPacemaker/Blackjack

var deck = new Deck();
var player = new Player('player');
var dealer = new Player('dealer');

function changeStatusMessage(selectMessage) {

	var outputMessage = '';

	switch(selectMessage) {
		case 'win':
			outputMessage = "You won! <br />" + "Score: " +
			player.roundScore + "<br />" + "CPU Score: " + dealer.roundScore;
			break;
		case 'lose':
			outputMessage = "You lost! <br />" + "Score: " +
			player.roundScore + "<br />" + "CPU Score: " + dealer.roundScore;
			break;
		default: outputMessage = "Current Score: " + player.roundScore + "<br />" +
			"CPU Score: " + dealer.roundScore;
	}

	var status = document.getElementById('statusMessage');
	status.innerHTML = outputMessage;
}

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


function firstTimeSetup() {
  //initial total money set to 100
  var money = document.getElementById('moneyTotal');
  money.appendChild(document.createTextNode("100"));

  //initial bet set to 10
  var bet = document.getElementById('bet');
  bet.value = 10;

  //set starting status message
	var status = document.getElementById('statusMessage');
	status.innerHTML = "Welcome to Blackjack!", "Press New Game to get Started.";

	//setup buttons
	document.getElementById('new').onclick = initialDeal;
	document.getElementById('hit').disabled = true;
	document.getElementById('hit').onclick = hit;
	document.getElementById('stand').disabled = true;
	document.getElementById('stand').onclick = stand;
}

function hit() {
	player.addCard(deck.dealCard());

	if(player.roundScore === 21) {
		document.getElementById('hit').disabled = true;
	}

	checkWinCondition();
}

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

function gameOver() {
	document.getElementById('new').disabled = false;
	document.getElementById('hit').disabled = true;
	document.getElementById('stand').disabled = true;
}

function youWin() {
	changeStatusMessage('win');

	player.clearScore();
	dealer.clearScore()

	gameOver();
}


function youLose() {
	changeStatusMessage('lose');

	player.clearScore();
	dealer.clearScore();

	gameOver();
}


function initialDeal() {
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
