//************
//Player Class
//************
class Player {

	constructor(name) {
		this.name = name;
		this.moneyTotal = 100;
		this.currentBet = 10;
		this.roundScore = 0;
		this.hand = [];
	}

	clearScore() {
		this.roundScore = 0;
	}

	clearCards() {
		this.hand = [];
	}

	addScore(score) {
		this.roundScore += score;
	}

	addCard(card) {
		this.hand.push(card);
		this.appendCardImage(card);
	}

	appendCardImage(card) {
		var ul = document.getElementById(this.name);
		var cardSlots = ul.querySelectorAll(":scope > li");

		if(this.name === 'dealer' && this.hand.length === 2) {
			card.setBackImage(true);

			var img = document.createElement("img");
			img.src = "hand/back.gif"
			cardSlots[this.hand.length-1].appendChild(img);
		} else {
			cardSlots[this.hand.length-1].appendChild(card.getCardImage());
			this.addScore(card.points);
		}
	}

	recalculateAceScore() {
		for(var i = 0; i < this.hand.length; i++) {
				if(this.hand[i].isAce && this.hand[i].points !== 11) {
					return this.hand[i].points === 1;
				}
		}
	}

}
