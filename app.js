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
		nextPlayer();
		
	}

});

//use event listener on hold button
document.querySelector('.btn-hold').addEventListener('click', function(){
	//Add current score to total score
	scores[activePlayer] += roundScore;
	document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];

	//Compare the winner
	if (scores[activePlayer] >= 10){
		document.querySelector('#name-'+ activePlayer).textContent = 'WINNER';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
		document.querySelector('.btn-roll').style.display = 'none';
		document.querySelector('.btn-hold').style.display = 'none';
	}
	else{
		//Next player
		nextPlayer();
	}	
});

//use event listener on new game button
document.querySelector('.btn-new').addEventListener('click', function(){
	//nullify all the score
	document.querySelector('#current-0').textContent ='0';
	document.querySelector('#current-1').textContent ='0';
	document.querySelector('#score-0').textContent ='0';
	document.querySelector('#score-1').textContent ='0';

	//display the roll btn and the hold btn
	document.querySelector('.btn-hold').style.display = 'block';
	document.querySelector('.btn-roll').style.display = 'block';

	//make player zero active again
	document.querySelector('player-0-panel').classList.add('active');
});


function nextPlayer(){
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
