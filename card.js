//**********
//Card Class
//**********

class Card {

	constructor (rank, suite) {
		this.rank = rank;
		this.suite = suite;
		this.points = (function (rank) {
			if(rank === 'J' || rank === 'Q' || rank === 'K') {
				return 10;
			} else if(rank === 'A') {
				return 0;
			} else {
				return parseInt(rank);
			}
		})(rank);

		//set name to rank + suite
		this.name = (function (rank, suite) {
			return rank + suite;
		})(rank, suite);

		//set image path to name + .gif
		var name = this.name;
		this.imagePath = (function (name) {
			return name + '.gif';
		})(name);
	}
}