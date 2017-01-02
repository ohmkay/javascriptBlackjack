//**********
//Card Class
//**********
function imagePath() {
	this.name + '.gif';
}

function calculatePoints() {
	//TODO
}

var card = { points: 0, name: '' };

card.imagePath = imagePath;
card.calculatePoints = calculatePoints;

//**********
//Deck Class
//**********
function intializeCardNames() {
	 //initialize cards names into cards array
	var suite = ['C', 'D', 'H', 'S'];
	var rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

	for(var i = 0; i < rank.length; i++) {
		for(var j = 0; j < suite.length; j++) {
			this.cards.push(rank[i] + suite[j]);
		}
	}
}

function getRandomCard() {
	var returnedCard = this.cards.random;
	this.removeCard(returnedCard);
	return returnedCard;
}

function removeCard(card) {
	this.cards.pop(card);
}


var deck = { cards: [] };

deck.intializeCardNames = intializeCardNames;
deck.getRandomCard = getRandomCard;
deck.removeCard = removeCard;