//Player and Dealer class

function clearScore() {
	this.roundScore = 0;
}

function clearCards() {
	this.cards = [];
}

function addScore(score) {
	this.roundScore += score;
}

function addCard(card) {
	this.cards.push(card);
}

var player = { moneyTotal: 100, currentBet: 0, roundScore: 0, cards: []};
var dealer = { roundScore: 0, cards:[] };

player.addCard = addCard;
player.clearCards = clearCards;
player.clearScore = clearScore;
player.addScore = addScore;

dealer.addCard = addCard;
dealer.addScore = addScore;
dealer.clearScore = clearScore;
dealer.clearCards = clearCards;