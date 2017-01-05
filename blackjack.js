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
	} else if(player.roundScore <= 21 && player.hand.length === 5) {
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

	if(player.hand.length !== 0) {

		var ulDealer = document.getElementById('dealerCards');
		var cardSlotsDealer = ulDealer.querySelectorAll(":scope > li");

		for(var i = 0; i < dealer.hand.length; i++) {
			cardSlotsDealer[i].removeChild(cardSlotsDealer[i].childNodes[0]);
		}

	}

	if(dealer.hand.length !== 0) {

		var ulPlayer = document.getElementById('yourCards');
		var cardSlotsPlayer = ulPlayer.querySelectorAll(":scope > li");
		for(var i = 0; i < player.hand.length; i++) {
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

	if(dealer.hand[1].getBackImage()) {
		dealer.hand[1].setBackImage(false);

		var ul = document.getElementById('dealerCards');
		var cardSlots = ul.querySelectorAll(":scope > li");

		cardSlots[dealer.hand.length-1].removeChild(
											cardSlots[dealer.hand.length-1].childNodes[0]);

		cardSlots[dealer.hand.length-1].appendChild(dealer.hand[1].getCardImage());

		dealer.addScore(dealer.hand[1].points);

		changeStatusMessage();

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

	//Deal initial hand
	var newCard = deck.dealCard();
	console.log(newCard.imagePath);
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
