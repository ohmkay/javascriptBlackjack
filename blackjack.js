//layout resource http://math.hws.edu/eck/cs271/js-work/Blackjack.html
//github friend resource https://github.com/BlindPacemaker/Blackjack

function changeStatusMessage(message) {
	var status = document.getElementById('statusMessage');
	status.innerHTML = message;
}


function setup() {
  //initial total money set to 100
  var money = document.getElementById('moneyTotal');
  money.appendChild(document.createTextNode("100"));

  //initial bet set to 10
  var bet = document.getElementById('bet');
  bet.value = "10";

  //set starting status message
  changeStatusMessage("Welcome to Blackjack! Press New Game to get Started.");

  //initialize cards names into deck array
  var suite = ['C', 'D', 'H', 'S'];
  var rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  var deck = [];

  for(var i = 0; i < rank.length; i++) {
	  for(var j = 0; j < suite.length; j++) {
		  deck.push(rank[i] + suite[j]);
	  }
  }

  return deck;
}

function getRandomCard(deck) {
	return deck.random;
}

function dealPlayerCard() {

	var cardSlots = document.getElementById('dealerCards');


}

function dealDealerCard(){

}

function initialDeal() {
	dealPlayerCard();
	dealDealerCard();
	dealPlayerCard();
	dealDealerCard();
}



var deck = setup();
var playerCards, dealerCards = [];


initialDeal();

player.addScore(5);

console.log(player.roundScore);