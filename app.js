// variable declarations

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//generate random number for dice


//display the dice value to the currentscore
// document.querySelector('#current-' + activePlayer).textContent = dice;

//store the text content to the variable
// var x = document.querySelector("#score-0").textContent;
// console.log(x);

//hide the dice image
document.querySelector('.dice').style.display = 'none';

//initialize all values to zero
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


//use event listener for dice roll
document.querySelector('.btn-roll').addEventListener('click', function(){
	//Random number.
	var dice = Math.floor((Math.random()*6)+1);

	//Display result
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-'+dice+'.png';

	//Update round score to 0 if dice shows 1
	if(dice !==1){
		//Add Score
		roundScore += dice;
		document.getElementById('current-'+activePlayer).textContent = roundScore;
	}
	else{
		//Next Player

		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		//toggle the active player
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		//hide the dice while toggle
		document.querySelector('.dice').style.display = 'none';
	}

});

