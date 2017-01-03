//Player and Dealer classe

//************
//Player Class
//************
class Player {

	constructor() {
		this.moneyTotal = 100;
		this.currentBet = 10;
		this.roundScore = 0;
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

	constructor() {
		this.roundScore = 0;
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