// variable declarations

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//generate random number for dice
dice = Math.floor((Math.random()*6)+1);

//display the dice value to the currentscore
document.querySelector('#current-' + activePlayer).textContent = dice;

//store the text content to the variable
var x = document.querySelector("#score-0").textContent;
console.log(x);

//hide the dice image
document.querySelector('.dice').style.display = 'none';