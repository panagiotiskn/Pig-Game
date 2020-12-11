var scores,roundScore,activePlayer,dice;

scores = [0,0];
roundScore = 0;
activePlayer = 1;


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

}
