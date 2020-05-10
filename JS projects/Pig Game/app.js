//JS functionallity for pig game

var scores=[0,0];
var roundScore=0;
var activePlayer=0;
var input;
var gamePlaying=true;//state variable

document.querySelector('.dice').style.display='none';
document.getElementById('score0').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('score1').textContent=0;
document.getElementById('current-1').textContent=0;


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        //creating the random number
        var dice=Math.floor(Math.random()*6)+1;

        //displaying random number in dice format
        var diceDom=document.querySelector('.dice');
        diceDom.style.display='block';
        diceDom.src='images/dice-'+dice+'.png';

        //update the score other than 1
        if(dice !== 1){
            //add score
            roundScore+=dice;
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
        }
        else{
            //switch to other player
            document.querySelector('#current-'+activePlayer).textContent=0;
            roundScore=0;
            activePlayer===0?activePlayer=1:activePlayer=0;
            diceDom.style.display='none';
            document.querySelector('.player1-card').classList.toggle('active');
            document.querySelector('.player2-card').classList.toggle('active');
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        //update the total score
        scores[activePlayer]+=roundScore;
        var diceDom=document.querySelector('.dice');

        //update the UI
        document.querySelector('#score'+activePlayer).textContent=scores[activePlayer];
        document.getElementById('current-'+activePlayer).textContent=0;

         input=document.querySelector('.final-value').value;
         var winningScore;
        if(input){
            winningScore=input;
        }
        else{
            winningScore=100;
        }

        //check if on wins
        if(scores[activePlayer]>=winningScore){
            ///roundScore=0; ----->check it once
            document.querySelector('#name'+activePlayer).textContent='WINNER!';
            diceDom.style.display='none';
            document.querySelector('.player'+(activePlayer+1)+'-card').classList.add('winner');
            document.querySelector('.player'+(activePlayer+1)+'-card').classList.remove('active');
            gamePlaying=false;
        }
        else{
            //make the roundscore to 0 and switch to other player
            roundScore=0;
            diceDom.style.display='none';
            activePlayer===0?activePlayer=1:activePlayer=0;
            document.querySelector('.player1-card').classList.toggle('active');
            document.querySelector('.player2-card').classList.toggle('active');
        }
    }
});


document.querySelector('.btn-new').addEventListener('click',function(){
     scores=[0,0];
     roundScore=0;
     activePlayer=0;

    document.querySelector('.dice').style.display='none';
    document.getElementById('score0').textContent=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('name0').textContent='PLAYER1';
    document.getElementById('score1').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.getElementById('name1').textContent='PLAYER2';

    document.querySelector('.player1-card').classList.remove('active');
    document.querySelector('.player2-card').classList.remove('active');
    document.querySelector('.player1-card').classList.remove('winner');
    document.querySelector('.player2-card').classList.remove('winner');
    document.querySelector('.player1-card').classList.add('active');
    gamePlaying=true;
});