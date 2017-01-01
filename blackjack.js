//layout resource http://math.hws.edu/eck/cs271/js-work/Blackjack.html
//github friend resource https://github.com/BlindPacemaker/Blackjack

function setup() {
  //initial total money set to 100
  var money = document.getElementById('moneyTotal');
  money.appendChild(document.createTextNode("100"));

  //initial bet set to 10
  var bet = document.getElementById('bet');
  bet.value = "10";

  //set starting status message
  var status = document.getElementById('statusMessage');
  status.innerHTML = "Welcome to Blackjack! Press New Game to get Started.";

  //initialize cards names into cards array
  var suite = ['C', 'D', 'H', 'S'];
  var rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  var cards = [];

  for(var i = 0; i < rank.length; i++) {
	  for(var j = 0; j < suite.length; j++) {
		  cards.push(rank[i] + suite[j]);
	  }
  }

  return cards;
}

function dealPlayerCard() {

	var cardSlots = document.getElementById('dealerCards');


}

function dealDealerCard(){

}

function startGame() {
	dealPlayerCard();
	dealDealerCard();
	dealPlayerCard();
	dealDealerCard();
}



console.log(setup().length);
