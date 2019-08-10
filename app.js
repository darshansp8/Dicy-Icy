// variable declarations

var scores, roundScore, activePlayer, gamePlaying, lastDice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


init();
//use event listener for dice roll
document.querySelector('.btn-roll').addEventListener('click', function(){
	if(gamePlaying){
		//Random number.
		var dice1 = Math.floor((Math.random()*6)+1);
		var dice2 = Math.floor((Math.random()*6)+1);
		//Display result
		document.getElementById('dice-1').style.display = 'block';
		document.getElementById('dice-2').style.display = 'block';
		document.getElementById('dice-1').src = 'dice-'+dice1+'.png';
		document.getElementById('dice-2').src = 'dice-'+dice2+'.png';
		// if(dice === 6 && lastDice === 6){
		// 	//Player looses the score
		// 	scores[activePlayer] = 0;
		// 	document.getElementById('score-'+activePlayer).textContent = '0';
		// 	nextPlayer();
		// }
		
		//Update round score to 0 if dice shows 1
		if(dice1 !==1 && dice2 !==1){
		 	//Add Score
		 	console.log(dice1);
		 	console.log(dice2);
		 	roundScore += dice1 + dice2;
		 	document.getElementById('current-'+activePlayer).textContent = roundScore;
		 }
		 else{
		 	//Next Player
		 	nextPlayer();	
		 }

		// else if(dice !==1){
		// 	//Add Score
		// 	roundScore += dice;
		// 	document.getElementById('current-'+activePlayer).textContent = roundScore;
		// }
		// else{
		// 	//Next Player
		// 	nextPlayer();	
		// }

		// lastDice = dice;
	}
});

//use event listener on hold button
document.querySelector('.btn-hold').addEventListener('click', function(){
	if(gamePlaying){
		//Add current score to total score
		scores[activePlayer] += roundScore;
		document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
		var input = document.querySelector('.final-score').value;
		var winningScore;
		if(input){
			winningScore = input;
		}
		else{
			winningScore = 100;
		}
		//Compare the winner
		if (scores[activePlayer] >= winningScore){
			document.querySelector('#name-'+ activePlayer).textContent = 'WINNER';
			document.getElementById('dice-1').style.display = 'none';
			document.getElementById('dice-2').style.display = 'none';
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
	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';
}


function init(){
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	//hide the dice image
	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';

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
