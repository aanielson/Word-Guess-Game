//create array for possible words
var wordBank = [
    "p r i d e", "p r e j u d i c e", "p e r s u a s i o n", "e m m a", "s e n s e", "s e n s i b i l i t y"
];
//create variables for wins, losses, guesses made, guesses left, and letters guessed
//choose a random word from the word bank
var word = wordBank[Math.floor(Math.random() * wordBank.length)];
var wordLettersArray = []
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
    //still don't know how to update word to blank spaces instead of actually displaying the word
};
console.log(word);

//check to see what key has been pressed
//update guessed and guessesLeft
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
        console.log("break 2");


        var replaceText = document.getElementById("letter-"+doesExist);
        replaceText.innerHTML = event.key;
        
    } else {
        // if there are no guesses left, then we lose
        if (guessesLeft === 0) {
            losses += 1;
            document.getElementById("losses").innerHTML = losses;

        }
        // else there are guesses left, just remove a guess
         else { 
            guessesLeft--; 
            guessesLeftDiv.innerHTML = guessesLeft;
        }
    }

    // The letter doesn't exist
        // no guessed left - we lose
        // guesses left - we lose a guess





    //still can't figure out how to increase and decrease the values based off of the number of times a key is pressed
    for (var i = 0; i < lettersGuessed.length; i++) {
        guessed++;
        
        
    };
};

console.log(guessed);
console.log(guessesLeft);

//if there is a match, fill in the underscore with that letter
//if no match, display the letter in the lettersGuessed

//if guessesLeft reaches 0, update losses

//if all letters are guessed, update wins
//change display for the next randomized word