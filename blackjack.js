//layout resource http://math.hws.edu/eck/cs271/js-work/Blackjack.html
//github image resource https://github.com/BlindPacemaker/Blackjack

var deck = [];
var player = new Player();
var dealer = new Dealer();

function changeStatusMessage(message1, message2) {
	var status = document.getElementById('statusMessage');
	status.innerHTML = message1 + '<br />' + message2;
}

//remove all img src tags from player and dealer <li>s
function clearAllHands() {

	if(player.cards.length !== 0) {

		var ulDealer = document.getElementById('dealerCards');
		var cardSlotsDealer = ulDealer.querySelectorAll(":scope > li");
		console.log(dealer.cards.length + " " + player.cards.length);
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
  changeStatusMessage("Welcome to Blackjack!", "Press New Game to get Started.");

	//setup buttons
	document.getElementById('new').onclick = initialDeal;
	document.getElementById('hit').disabled = true;
	document.getElementById('hit').onclick = hitCard;
	document.getElementById('stand').disabled = true;
	document.getElementById('stand').onclick = stand;
}

function intializeCards(deck) {
	var suite = ['C', 'D', 'H', 'S'];
	var rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

	for(var i = 0; i < rank.length; i++) {
		for(var j = 0; j < suite.length; j++) {
			deck.push(new Card(rank[i], suite[j]));
		}
	}

	return deck;
}

deck = intializeCards(deck);

function getRandomCardFromDeck() {
	var returnedCard = deck[Math.floor(Math.random() * deck.length)];
	removeCardFromDeck(returnedCard);
	return returnedCard;
}

function removeCardFromDeck(card) {
	const index = deck.indexOf(card);

    if (index !== -1) {
        deck.splice(index, 1);
    }
}

function dealPlayerCard() {
	var card  = getRandomCardFromDeck();
	player.addCard(card);
	player.addScore(card.points);

	var ul = document.getElementById('yourCards');
	var cardSlots = ul.querySelectorAll(":scope > li");
	cardSlots[player.cards.length-1].appendChild(card.getCardImage());
}

function dealDealerCard() {
	var card  = getRandomCardFromDeck();
	dealer.addCard(card);
	dealer.addScore(card.points);

	var ul = document.getElementById('dealerCards');
	var cardSlots = ul.querySelectorAll(":scope > li");

	if(dealer.cards.length === 2) { 
		var img = document.createElement("img");
		img.src = "cards/back.gif"

		console.log("part 1 "+ dealer.cards.length);
		cardSlots[dealer.cards.length-1].appendChild(img);
	} else {
		cardSlots[dealer.cards.length-1].appendChild(card.getCardImage());
	}
}
/*
function dealDealerBackCard() {
	var img = document.createElement("img");
	img.src = "./cards/back.gif";

	var ul = document.getElementById('dealerCards');
	var cardSlots = ul.querySelectorAll(":scope > li");
	cardSlots[dealer.cards.length].appendChild(img);
}

function removeDealerBackCard() {
	var ul = document.getElementById('dealerCards');
	var cardSlots = ul.querySelectorAll(":scope > li");
	cardSlots[dealer.cards.length].removeChild(
										cardSlots[dealer.cards.length].childNodes[0]);
}
*/
function hitCard() {
	dealPlayerCard();

	if(player.roundScore === 21) {
		document.getElementById('hit').disabled = true;
	}

	if(player.roundScore > 21) {
		changeStatusMessage("You went over 21!  Your Score: " + player.roundScore,
												"CPU Score: " + dealer.roundScore);
		//change later so that card removal is after new game?...
		//removeDealerBackCard();
		youLose();
	} else if(player.roundScore <= 21 && player.cards.length === 5) {
		youWin();
	} else {
		changeStatusMessage("Current Score: " + player.roundScore,
												"CPU Score: " + dealer.roundScore);
	}
}

function stand() {
	document.getElementById('hit').disabled = true;
	document.getElementById('stand').disabled = true;

	if(dealer.cards.length === 2){
		var ul = document.getElementById('dealerCards');
		var cardSlots = ul.querySelectorAll(":scope > li");

		var img = document.createElement("img");
		img.src = dealer.cards[1].getCardImage();

		var img2 = document.createElement("img");
		img2.src = "cards/back.gif";

		console.log("part 2 "+ dealer.cards.length);
		cardSlots[2].replaceChild(img, img2);
	}



	dealDealerCard();

	if(dealer.roundScore < player.roundScore) {
		stand();
	} else if (dealer.roundScore > 21) {
		youWin();
	} else if(player.roundScore === 21 && dealer.roundScore === 21) {
		youLose();
	} else {
		youLose();
	}
}

function youWin() {
	changeStatusMessage("You won!  Your score: " + player.roundScore,
											"CPU Score: " + dealer.roundScore);

	player.clearScore();
	dealer.clearScore()

	document.getElementById('new').disabled = false;
	document.getElementById('hit').disabled = true;
	document.getElementById('stand').disabled = true;
}

function youLose() {
	changeStatusMessage("You lost!  Your score: " + player.roundScore,
											"CPU Score: " + dealer.roundScore);

	player.clearScore();
	dealer.clearScore()

	document.getElementById('new').disabled = false;
	document.getElementById('hit').disabled = true;
	document.getElementById('stand').disabled = true;
}

function initialDeal() {
	clearAllHands();

	//Deal initial cards
	dealPlayerCard();
	dealDealerCard();
	dealPlayerCard();
	dealDealerCard();

	//show score
	changeStatusMessage("Current Score: " + player.roundScore,
											"CPU Score: " + dealer.roundScore);
	//disable New Game button
	document.getElementById('new').disabled = true;
	document.getElementById('hit').disabled = false;
	document.getElementById('stand').disabled = false;
}

firstTimeSetup();
