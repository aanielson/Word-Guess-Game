//create array for possible words
var wordBank = [
    "p r i d e", "p r e j u d i c e", "p e r s u a s i o n", "e m m a", "s e n s e", "s e n s i b i l i t y"
];
//create variables for wins, losses, guesses made, guesses left, and letters guessed
//choose a random word from the word bank
var word = wordBank[Math.floor(Math.random() * wordBank.length)];
var wins = 0;
var losses = 0;

var guessed = 0;
var guessesLeft = 15;
var lettersGuessed = [];
var blanks = document.getElementById("blanks");
var guessesLeftDiv = document.getElementById("guesses-left");

guessesLeftDiv.innerHTML = guessesLeft;

var wordArr = displayWord();

function displayWord () {
    var wordArray = word.split(" ");
    for(var x = 0; x < wordArray.length; x++){
        blanks.innerHTML += '<span id="letter-'+x+'"> _ </span>';
    }
    return wordArray;
};
console.log(word);

//check to see what key has been pressed
var userInput = document.getElementById("guessed-letters");
document.onkeyup = function(event) {
    lettersGuessed.push(" " + event.key);
    userInput.innerHTML = lettersGuessed;
        
    // The letter could exist
        // letter gets replaced
        // we win
    var doesExist = wordArr.indexOf(event.key);
    console.log("break 1");
    // if letter hasn't already been pressed
    // if we win, we need to reset the game
    // if we lose, we need to reset the game
    if(doesExist > -1){
        var pos = 0;
        var counter = -1;
        
        while (pos != -1){
            pos = wordArr.indexOf(event.key, counter+1);
            counter = pos;
            if (pos != -1) {
            var replaceText = document.getElementById("letter-" + pos);
            replaceText.innerHTML = event.key;
            guessed++;
            }
        }
        document.getElementById("guesses").innerHTML = guessed;
        //if guessed === number of items in the array
            //wins++ and reset game
        
    }  else {
        // The letter doesn't exist
        // no guessed left - we lose
        // guesses left - we lose a guess
        if (guessesLeft < 1) {
            losses++;
            document.getElementById("losses").innerHTML = losses;
            reset();
        }
        // else there are guesses left, just remove a guess
         else { 
            guessesLeft--; 
            guessesLeftDiv.innerHTML = guessesLeft;
        }  
    }
    if (guessed >= wordArr.length) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        reset();
    }
};
//function for reseting the whole page
function reset() {
    guessed = 0;
    document.getElementById("guesses").innerHTML = guessed;
    guessesLeft = 15;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    lettersGuessed = [];
    document.getElementById("guessed-letters").innerHTML = lettersGuessed;
    word = wordBank[Math.floor(Math.random() * wordBank.length)];
    blanks.innerHTML = "";
    displayWord();
}
console.log(guessed);
console.log(guessesLeft);

//if there is a match, fill in the underscore with that letter
//if no match, display the letter in the lettersGuessed

//if guessesLeft reaches 0, update losses

//if all letters are guessed, update wins
//change display for the next randomized word