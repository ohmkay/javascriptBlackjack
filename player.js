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

	getCardSlots() {
		var ul = document.getElementById(this.name);
		var cardSlots = ul.querySelectorAll(":scope > li");

		return cardSlots;
	}

	clearScore() {
		this.roundScore = 0;
	}

	clearHand() {
		var cardSlots = this.getCardSlots();

		for(var i = 0; i < this.hand.length; i++) {
			cardSlots[i].removeChild(cardSlots[i].childNodes[0]);
		}
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

	replaceBackImage(card) {
		var cardSlots = this.getCardSlots();

		cardSlots[this.hand.length-1].removeChild(
											cardSlots[this.hand.length-1].childNodes[0]);

		cardSlots[this.hand.length-1].appendChild(this.hand[1].getCardImage());
		console.log(this.hand[1].points + " FROM REPLACE BACK IMAGE");
		this.addScore(this.hand[1].points);
	}

	recalculateAceScore() {
		for(var i = 0; i < this.hand.length; i++) {
				if(this.hand[i].isAce && this.hand[i].points !== 11) {
					return this.hand[i].points === 1;
				}
		}
	}

}
