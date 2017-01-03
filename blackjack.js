//layout resource http://math.hws.edu/eck/cs271/js-work/Blackjack.html
//github image resource https://github.com/BlindPacemaker/Blackjack

var deck = [];
var player = new Player();
var dealer = new Dealer();

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

	var img = document.createElement("img");
	img.src = card.imagePath;

	var cardSlots = document.getElementById('yourCards');
	console.log(player.cards.length);
	cardSlots.childNodes[player.cards.length].appendChild(img);


}

function dealDealerCard(){

}

function initialDeal() {
	dealPlayerCard();
	//dealDealerCard();
	//dealPlayerCard();
	//dealDealerCard();
}

initialDeal();
