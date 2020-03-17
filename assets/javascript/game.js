//create array for possible words
var wordBank = [
    "pride", "prejudice", "persuasion", "emma", "sense", "sensibility"
];
//create variables for wins, losses, guesses made, guesses left, and letters guessed
//choose a random word from the word bank
var word = wordBank[Math.floor(Math.random() * wordBank.length)];

var wins = 0;
var losses = 0;

var guessed = 0;
var guessesLeft = 15;
var lettersGuessed = [];

//display the number of underscores for the number of letters in the selected word

function displayWord () {
    
    blanks = document.getElementById("blanks");
    blanks.innerHTML = word;
};
displayWord();

//check to see what key has been pressed
var userInput = document.getElementById("guessed-letters");
    document.onkeyup = function(event) {
    lettersGuessed.push(" " + event.key);
    userInput.innerHTML = lettersGuessed;
    };


//update guessed and guessesLeft
function updateGuesses () {
    for (var i = 0; i < lettersGuessed.length; i++) {
       guessed += 1;
       guessesLeft -= 1; 
    };
};
updateGuesses();
console.log(guessed);
console.log(guessesLeft);
//compare that letter with the letters of the word
//if there is a match, fill in the underscore with that letter
//if no match, display the letter in the lettersGuessed

//if guessesLeft reaches 0, update losses
if (guessesLeft === 0) {
    losses += 1;
    document.getElementById("losses").innerHTML = losses;
}
//if all letters are guessed, update wins
//change display for the next randomized word