var scores, roundScore, activePlayer,dice,gamePlaying;
init();
dice=Math.floor(Math.random()*6+1);

//to change the css



document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        var dice=Math.floor(Math.random()*6)+1;

        //display result
        var diceDOM=document.querySelector('.dice');
        diceDOM.style.display='block';
        diceDOM.src='dice-'+dice+'.png';

        if(dice!==1){
            roundScore+=dice;
            document.querySelector("#current-"+activePlayer).textContent=roundScore;
        }
        else{
            nextPlayer(); document.querySelector("#current-"+activePlayer).textContent='0';
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        //Add current score to the global score
    scores[activePlayer]+=roundScore;



    //Update the UI
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    // activePlayer===0?activePlayer=1:activePlayer=0;
    // roundScore=0;
    // document.querySelector('.dice').style.display='none';
    // document.querySelector('.player-0-panel').classList.toggle('active');
    // document.querySelector('.player-1-panel').classList.toggle('active');
    //now here the code is repeated as the previous function so we will apply DONT REPEAT YOURSELF concept by creating new function.

    //check if player won game
    if(scores[activePlayer]>=100){
        gamePlaying=false;
        document.querySelector('#name-'+activePlayer).textContent='Winner!';
        document.querySelector('.dice').style.display='none'; 
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    }
    else{
        nextPlayer();
    }
    }
});

function nextPlayer(){
    activePlayer===0?activePlayer=1:activePlayer=0;
    roundScore=0;
    document.querySelector('.dice').style.display='none';
    // if(activePlayer===1){
        //     document.querySelector('.player-0-panel').classList.remove('active');
        //     document.querySelector('.player-1-panel').classList.add('active');
        // }
        // else{
        //     document.querySelector('.player-1-panel').classList.remove('active');
        // document.querySelector('.player-0-panel').classList.add('active');
        // }
        //better way to do it..toggle
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    gamePlaying=true;
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

