//************
//Player Class
//************
class Player {

	constructor(name) {
		this.name = name;
		this.moneyTotal = 100;
		this.bet = 10;
		this.roundScore = 0;
		this.hand = [];
	}

	// Check bet against total pot
	//
	checkBetAgainstTotal(currentBet) {
		if(currentBet <= this.moneyTotal) {
			this.bet = currentBet;
			return true;
		} else {
			return false;
		}
	}

	// Find all locations on the DOM where card can be inserted
	//
	getCardSlots() {
		var ul = document.getElementById(this.name);
		var cardSlots = ul.querySelectorAll(":scope > li");

		return cardSlots;
	}

	// Clears the current round score
	//
	clearScore() {
		this.roundScore = 0;
	}

	// Clear the hand of all cards
	//
	clearHand() {
		var cardSlots = this.getCardSlots();

		for(var i = 0; i < this.hand.length; i++) {
			cardSlots[i].removeChild(cardSlots[i].childNodes[0]);
		}
		this.hand = [];
	}

	// Add new card's score to round score
	//
	addScore(score) {
		this.roundScore += score;
	}

	// Adds a card to the players hand
	//
	addCard(card) {
		this.hand.push(card);
		this.appendCardImage(card);
	}

	// Concatenate's card name with image path
	//
	appendCardImage(card) {
		var cardSlots = this.getCardSlots();

		if(this.name === 'dealer' && this.hand.length === 2) {
			card.setBackImage(true);

			var img = document.createElement("img");
			img.src = "cards/back.gif"
			cardSlots[this.hand.length-1].appendChild(img);
		} else {
			cardSlots[this.hand.length-1].appendChild(card.getCardImage());
			this.addScore(card.points);
		}
	}

	// Replace back images with front images
	//
	replaceBackImage(card) {
		var cardSlots = this.getCardSlots();

		cardSlots[this.hand.length-1].removeChild(
											cardSlots[this.hand.length-1].childNodes[0]);

		cardSlots[this.hand.length-1].appendChild(this.hand[1].getCardImage());
		this.addScore(this.hand[1].points);
	}

	// If the hand has an ace, set the score to 1
	// This is called when the round score is over 21
	//
	handHasAce() {
		for(var i = 0; i < this.hand.length; i++) {
			if(this.hand[i].isAce && this.hand[i].points === 11) {
				this.roundScore = this.roundScore - 10;
				this.hand[i].points = 1;
				this.hand[i].isAce = false;
				return true;
			}
		}
		return false;
	}

}
