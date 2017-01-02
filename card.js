//**********
//Card Class
//**********
function card(name, points) {
	this.name = name;
	this.points = points;
}

function cardName(rank, suite) {
	return rank + suite;
}

function imagePath() {
	this.name + '.gif';
}

function calculatePoints(points) {
	if(points === 'J' || points === 'Q' || points === 'K') {
		return 10;
	} else if(points === 'A') {
		return '0';
	} else {
		return parseInt(points);
	}
}

var card = { points: 0, name: '' };

card.imagePath = imagePath;
card.calculatePoints = calculatePoints;
card.name = cardName;