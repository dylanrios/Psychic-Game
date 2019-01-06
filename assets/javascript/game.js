
//creating an array for the possible choices - all of these notes are for my own personal reference, not necessarily this assignment :)


var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//need to create variables for the outcomes - wins, losses, guesses left & guesses so far

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

//similar to RPS exercise, we want to create variables to hold our references to the places we want to display things in html


var winText = document.getElementById("win-text");
var loseText = document.getElementById("lose-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var guessesSoFarText = document.getElementById("guesses-so-far-text");

//we need a function for when keys are pressed



document.onkeyup = function(event) {
    

//which key was pressed?  We need a variable to "hold" that value

var userGuess = event.key;
console.log(userGuess);

//now we need to know what the computer chose - we need a variable for that, too! - math.random/array choice

var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerChoice);

//we need logic to determine the outcome!


    
 if ((userGuess === computerChoice) && (guessesLeft > 0)) {
     alert("Yay! You guessed correctly!  One point for you!  Seems a little unfair, doesn't it?");
     console.log("GOAL!");
     wins++;
     guessesLeft = 9;
     guessesSoFar.length = 0;
     var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
     
    }
 
else if (userGuess !== computerChoice && guessesLeft > 0) {
    console.log ("Wrong!");    
    guessesSoFar.push(userGuess);
    guessesLeft--;
     var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    }
 if (guessesLeft === 0) {
      alert("You Lose!");
      losses++;
      guessesLeft = 9;
      guessesSoFar.length = 0;
      var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
     
    
  } 

     

 
//display our results back in the HTML!
    
    winText.innerHTML = "Wins: " + wins;
    loseText.innerHTML = "Losses: " + losses;
    guessesLeftText.innerHTML = "Guesses left: " + guessesLeft;
    guessesSoFarText.innerHTML = "Guesses so far: " + guessesSoFar;
    


};








