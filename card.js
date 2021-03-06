//**********
//Card Class
//**********

class Card {

	constructor (rank, suite) {
		this.rank = rank;
		this.suite = suite;

		//calculates points based on rank
		this.points = (function (rank) {
			if(rank === 'J' || rank === 'Q' || rank === 'K') {
				return 10;
			} else if(rank === 'A') {
				return 11;
			} else {
				return parseInt(rank);
			}
		})(rank);

		//set name to rank + suite
		this.name = (function (rank, suite) {
			return rank + suite;
		})(rank, suite);

		//set image path to name
		var name = this.name;
		this.imagePath = (function (name) {
			return 'cards/' + name + '.gif';
		})(name);

		//checks if Ace for scoring
		this.isAce = (function (rank) {
			return rank === 'A' ? true : false;
		})(rank);
	}

	// Find img tag in html and set path
	//
	getCardImage() {
		var img = document.createElement("img");
		img.src = this.imagePath;
		return img;
	}

	// Sets card to show back image
	//
	setBackImage(isBack) {
		this.back = isBack;
	}

	// Return boolean to see if card is showing back
	//
	getBackImage() {
		return this.back;
	}

}
