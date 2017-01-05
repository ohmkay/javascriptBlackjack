//************
//Player Class
//************
class Player {

	constructor(name) {
		this.name = name;
		this.moneyTotal = 100;
		this.currentBet = 10;
		this.roundScore = 0;
		this.cards = [];
	}

	clearScore() {
		this.roundScore = 0;
	}

	clearCards() {
		this.cards = [];
	}

	addScore(score) {
		this.roundScore += score;
	}

	addCard(card) {
		this.cards.push(card);
	}

	recalculateAceScore() {
		for(var i = 0; i < this.cards.length; i++) {
				if(this.cards[i].isAce && this.cards[i].points !== 11) {
					return this.cards[i].points === 1;
				}
		}
	}

}
