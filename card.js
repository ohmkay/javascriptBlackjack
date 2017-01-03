//**********
//Card Class
//**********
class Card {

	/*calculatePoints (rank) {
		if(this.rank === 'J' || this.rank === 'Q' || this.rank === 'K') {
			return 10;
		} else if(this.rank === 'A') {
			return 0;
		} else {
			return parseInt(rank);
		}
	}*/

	constructor (rank, suite) {
		this.rank = rank;
		this.suite = suite;
		this.points = function (rank) {
			if(this.rank === 'J' || this.rank === 'Q' || this.rank === 'K') {
				return 10;
			} else if(this.rank === 'A') {
				return 0;
			} else {
				return parseInt(rank);
			}
		};
		this.name = '';
	}

	

	getName (rank, suite) {
		return rank + suite;
	}

	getImagePath () {
		this.name + '.gif';
	}

}
/*
var Card = function (rank, suite) {
	this.rank = rank;
	this.suite = suite;
	this.name = function() { this.name = rank + suite; };
	this.points = function() { 
			if(this.rank === 'J' || this.rank === 'Q' || this.rank === 'K') {
				this.points = 10;
			} else if(this.rank === 'A') {
				this.points = 0;
			} else {
				this.points = parseInt(this.rank);
		}
	};
	this.imagePath = function() {
			this.name + '.gif';
	};
}
*/