var scores = [0,0];
var roundScore = 0;
var activeplayer = 0;
var dice = 0;

// Change the values from an id element using javascript
document.getElementById("score--0").innerHTML = 0;
document.getElementById("score--1").innerHTML = 0;



// Event Listener for button ROLL DICE

document.querySelector(".btn--roll").addEventListener('click',function(){

    // What happens when you use the button "ROLL DICE"

    
    // generate random number
    dice = Math.floor(Math.random()*6+1); //generate a value for dice//

    // display the result
    var diceDOM =  document.querySelector(".dice");
    diceDOM.style.display = 'block';
    /*change src attribut using javascript*/ diceDOM.src = "dice-"+dice+".png";
    
    // Upgrade the round score IF the rolled number was not 1
    if(dice !== 1)
    {
        
       roundScore += dice; // update current score for the active player
       document.querySelector("#current--"+activeplayer).innerHTML = roundScore;

    }else{

        roundScore = 0;
        nextPlayer();
    }
});


// Event Listener for button HOLD

document.querySelector(".btn--hold").addEventListener('click',function(){
    // Add currentScore to Global Score
    scores[activeplayer] += roundScore;
    // or more easily scores[activeplayer] += roundScore;
    // Update UI
    document.querySelector("#score--"+activeplayer).textContent = scores[activeplayer];

    
    //Check if the player won the game
    if(scores[activeplayer] >= 20)
    {
        document.getElementById("name--"+activeplayer).textContent = "WINNER";
        document.querySelector('.dice').style.display = 'none';
    
    }
        
    // Next player
    nextPlayer();

});


function nextPlayer()
{
    //Next Player
    if(activeplayer === 0)
    {
         activeplayer =1;
    }else{
        activeplayer = 0;
    }

    roundScore = 0;
    document.getElementById("current--0").textContent = 0;
    document.getElementById("current--1").textContent = 0;

    document.querySelector('.dice').style.display = 'none';
}







// every time the  activeplayer switches the dice should not be displayed before the players rolls it
document.querySelector(".dice").style.display = 'none';