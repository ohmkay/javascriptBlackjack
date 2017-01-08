//**********
//Deck Class
//**********

class Deck {

	constructor () {
		this.back = false;
		this.cards = [];
	}

	initializeDeck() {
		var suite = ['C', 'D', 'H', 'S'];
		var rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

		for(var i = 0; i < rank.length; i++) {
			for(var j = 0; j < suite.length; j++) {
				this.cards.push(new Card(rank[i], suite[j]));
				console.log(rank[i]+ suite[j]);
			}
		}
	}

	removeCardFromDeck(card) {
		const index = this.cards.indexOf(card);

			if (index !== -1) {
			    this.cards.splice(index, 1);
			}
	}

	getRandomCard() {
		var returnedCard = this.cards[Math.floor(Math.random() * this.cards.length)];
		this.removeCardFromDeck(returnedCard);
		return returnedCard;
	}

	dealCard() {
		var card = deck.getRandomCard();
		return card;
	}

}
