//layout resource http://math.hws.edu/eck/cs271/js-work/Blackjack.html
//github friend resource https://github.com/BlindPacemaker/Blackjack

function setup() {
  //initial total money set to 100
  var money = document.getElementById('moneyTotal');
  money.appendChild(document.createTextNode("100"));

  //initial bet set to 10
  var bet = document.getElementById('bet');
  bet.value = "10";

  //set starting status message
  var status = document.getElementById('statusMessage');
  status.innerHTML = "Welcome to Blackjack! Press New Game to get Started.";
}

function dealCards() {

}

setup();
