// variable declarations

var scores, roundScore, activePlayer, gamePlaying;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


init();
//use event listener for dice roll
document.querySelector('.btn-roll').addEventListener('click', function(){
	if(gamePlaying){
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
	}
});

//use event listener on hold button
document.querySelector('.btn-hold').addEventListener('click', function(){
	if(gamePlaying){
		//Add current score to total score
		scores[activePlayer] += roundScore;
		document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];

		//Compare the winner
		if (scores[activePlayer] >= 10){
			document.querySelector('#name-'+ activePlayer).textContent = 'WINNER';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
			// document.querySelector('.btn-roll').style.display = 'none';
			// document.querySelector('.btn-hold').style.display = 'none';
			gamePlaying = false;
		}
		else{
			//Next player
			nextPlayer();
		}
	}
		
});

//use event listener on new game button
document.querySelector('.btn-new').addEventListener('click', init);


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


function init(){
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	//hide the dice image
	document.querySelector('.dice').style.display = 'none';

	//initialize all values to zero
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'PLAYER 1';
	document.getElementById('name-1').textContent = 'PLAYER 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	// document.querySelector('.player-1-panel').classList.add('active');
	// document.querySelector('.btn-roll').style.display = 'block';
	// document.querySelector('.btn-hold').style.display = 'block';

}
