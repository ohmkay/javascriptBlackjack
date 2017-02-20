//**********
//Deck Class
//**********

class Deck {

	constructor () {
		this.cards = [];
	}

	// Populate deck array
	//
	initializeDeck() {
		var suite = ['C', 'D', 'H', 'S'];
		var rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

		for(var i = 0; i < rank.length; i++) {
			for(var j = 0; j < suite.length; j++) {
				this.cards.push(new Card(rank[i], suite[j]));
			}
		}
	}

	// Remove a card from the deck
	//
	removeCardFromDeck(card) {
		const index = this.cards.indexOf(card);

			if (index !== -1) {
			    this.cards.splice(index, 1);
			}
	}

	// Get a random card from the deck and call to remove it
	//
	getRandomCard() {
		var returnedCard = this.cards[Math.floor(Math.random() * this.cards.length)];
		this.removeCardFromDeck(returnedCard);
		return returnedCard;
	}

	// Gets a random card and calls to remove it
	//
	dealCard() {
		var card = deck.getRandomCard();
		return card;
	}

}
