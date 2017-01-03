//layout resource http://math.hws.edu/eck/cs271/js-work/Blackjack.html
//github image resource https://github.com/BlindPacemaker/Blackjack

function changeStatusMessage(message) {
	var status = document.getElementById('statusMessage');
	status.innerHTML = message;
}


function firstTimeSetup() {
  //initial total money set to 100
  var money = document.getElementById('moneyTotal');
  money.appendChild(document.createTextNode("100"));

  //initial bet set to 10
  var bet = document.getElementById('bet');
  bet.value = "10";

  //set starting status message
  changeStatusMessage("Welcome to Blackjack! Press New Game to get Started.");

}

function intializeCards(deck) {
	var suite = ['C', 'D', 'H', 'S'];
	var rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

	for(var i = 0; i < rank.length; i++) {
		for(var j = 0; j < suite.length; j++) {
			var aCard = new Card(rank[i], suite[j]);

			deck.push(aCard);
			console.log( aCard.points + " " + aCard.name + " " + aCard.imagePath);
		}
	}
}


function getRandomCardFromDeck() {
	var returnedCard = this.cards[Math.floor(Math.random() * this.length)];
	this.removeCard(returnedCard);
	return returnedCard;
}

function removeCardFromDeck(card) {
	const index = this.indexOf(card);
    
    if (index !== -1) {
        this.splice(index, 1);
    }
}


function dealPlayerCard() {

	//console.log()
	//var card = deck.getRandomCard();
	//console.log(card.imagePath());

	var cardSlots = document.getElementById('dealerCards');


}

function dealDealerCard(){

}

function initialDeal() {
	dealPlayerCard();
	//dealDealerCard();
	//dealPlayerCard();
	//dealDealerCard();
}
var deck = [];
intializeCards(deck);
initialDeal();
