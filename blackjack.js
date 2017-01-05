//layout resource http://math.hws.edu/eck/cs271/js-work/Blackjack.html
//github image resource https://github.com/BlindPacemaker/Blackjack

var deck = new Deck();
var player = new Player('player');
var dealer = new Player('dealer');

function changeStatusMessage() {
	var outputMessage = "Current Score: " + player.roundScore +
		"CPU Score: " + dealer.roundScore;

	var status = document.getElementById('statusMessage');
	status.innerHTML = outputMessage;
}

function checkWinCondition() {

	if(player.roundScore > 21) {
		youLose();
	} else if(player.roundScore <= 21 && player.cards.length === 5) {
		youWin();
	}

	if(dealer.roundScore > 21) {
		youWin();
	}	else if(player.roundScore === 21 && dealer.roundScore === 21) {
		youLose();
	}	else if(dealer.roundScore >= player.roundScore) {
		youLose();
	}

	changeStatusMessage();
}

//remove all img src tags from player and dealer <li>s
function clearAllHands() {

	if(player.cards.length !== 0) {

		var ulDealer = document.getElementById('dealerCards');
		var cardSlotsDealer = ulDealer.querySelectorAll(":scope > li");

		for(var i = 0; i < dealer.cards.length; i++) {
			cardSlotsDealer[i].removeChild(cardSlotsDealer[i].childNodes[0]);
		}

	}

	if(dealer.cards.length !== 0) {

		var ulPlayer = document.getElementById('yourCards');
		var cardSlotsPlayer = ulPlayer.querySelectorAll(":scope > li");
		for(var i = 0; i < player.cards.length; i++) {
			cardSlotsPlayer[i].removeChild(cardSlotsPlayer[i].childNodes[0]);
		}

	}

	player.clearCards();
	dealer.clearCards();

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
	document.getElementById('hit').onclick = hitCard;
	document.getElementById('stand').disabled = true;
	document.getElementById('stand').onclick = stand;
}

function appendCardImage(card) {
	var ul = document.getElementById(this.name);
	var cardSlots = ul.querySelectorAll(":scope > li");

	if(this.name === 'dealer' && this.cards.length === 2) {
		card.setBackImage(true);

		var img = document.createElement("img");
		img.src = "cards/back.gif"
		cardSlots[this.cards.length-1].appendChild(img);
	} else {
		cardSlots[this.cards.length-1].appendChild(card.getCardImage());
		this.addScore(card.points);
	}
}


function hitCard() {
	dealPlayerCard();

	if(player.roundScore === 21) {
		document.getElementById('hit').disabled = true;
	}

	checkWinCondition();
}

function stand() {
	document.getElementById('hit').disabled = true;
	document.getElementById('stand').disabled = true;
	
	if(dealer.cards[1].getBackImage()) {
		dealer.cards[1].setBackImage(false);

		var ul = document.getElementById('dealerCards');
		var cardSlots = ul.querySelectorAll(":scope > li");

		cardSlots[dealer.cards.length-1].removeChild(
											cardSlots[dealer.cards.length-1].childNodes[0]);

		cardSlots[dealer.cards.length-1].appendChild(dealer.cards[1].getCardImage());

		dealer.addScore(dealer.cards[1].points);

		changeStatusMessage("Current Score: " + player.roundScore,
			"CPU Score: " + dealer.roundScore);

	} else {
		dealDealerCard();
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
	changeStatusMessage();

	player.clearScore();
	dealer.clearScore()

	gameOver();
}


function youLose() {
	changeStatusMessage();

	player.clearScore();
	dealer.clearScore();

	gameOver();
}


function initialDeal() {
	clearAllHands();

	//deck = intializeCards(deck);

	//Deal initial cards
	player.addCard(deck.getRandomCard());
	dealer.addCard(deck.getRandomCard());
	player.addCard(deck.getRandomCard());
	dealer.addCard(deck.getRandomCard());

	//show score
	changeStatusMessage();

	//disable New Game button
	document.getElementById('new').disabled = true;
	document.getElementById('hit').disabled = false;
	document.getElementById('stand').disabled = false;
}


firstTimeSetup();
