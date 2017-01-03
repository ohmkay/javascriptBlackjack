//Player and Dealer class

//************
//Player Class
//************
class Player {

	constructor (moneyTotal, currentBet, roundScore) {
		this.moneyTotal = moneyTotal;
		this.currentBet = currentBet;
		this.roundScore = roundScore;
		this.cards = [];
	}

	clearScore() {
		return this.roundScore = 0;
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
}

//************
//Dealer Class
//************
class Dealer {

	constructor (roundScore) {
		this.roundScore = roundScore;
		this.cards = [];
	}

	clearScore() {
		return this.roundScore = 0;
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
}