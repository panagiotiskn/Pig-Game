var scores,roundScore,activePlayer,dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


document.querySelector("#current--" +activePlayer).textContent=dice;
//or
//document.querySelector("#current--" +activePlayer).innerHTML= <em> dice </em>;
//var x = document.querySelector("#score--0").textContent;
document.querySelector(".dice").style.display= 'none';
document.querySelector(".btn--roll").addEventListener('click',but);

document.getElementById("score--0").innerHTML = 0;
document.getElementById("score--1").innerHTML = 0;


function but()
{
    
    // Generate a random number for dice roll
    var dice = Math.floor(1+Math.random()*6);
    // display the result
  
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display='block';
    diceDOM.src = 'dice-'+dice+".png";
    // update round score If the rolled number was not 1

    if( dice !== 1)
    {
        roundScore += dice;
        
        document.querySelector("#current--"+activePlayer).textContent = roundScore;

    }else{
        if(activePlayer==0)
        {
            activePlayer = 1;
        }else{
            activePlayer = 0;
        }
        roundScore = 0;
        document.getElementById("current--0").textContent='0';
        document.getElementById("current--1").textContent='0';

        document.querySelector(".player player--0").classList.toggle('active');
        document.querySelector(".player player--1").classList.toggle('active');
        document.querySelector(".dice").style.display = 'none';
    }





}
