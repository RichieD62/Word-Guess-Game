


//Create an array of words
var word = ["turkey", "chicken", "eagle", "hawk", "ostrich"];
//Choose Randomly
var numGen = Math.floor(Math.random() *word.length);
var chosenWord = word[numGen];
var underScore = [];
var rightWord = [];
var wrongWord = [];

//DOM Manipulation 
var docUnderScore = document.getElementById("underscores");
var letGuessed  = document.getElementById("lettersguessed");
var button = document.getElementById("button");

//Testing
console.log(chosenWord);

//Create underscores based on length of the word
function generateUnderscore(){
    for (var i = 0; i<chosenWord.length; i++){
        underScore.push("_");
    }
    return underScore;
}

console.log(generateUnderscore());
//Get users guess
document.addEventListener("keypress", (event) => {
    var keyword = String.fromCharCode(event.keyCode);
//If users guess is right, 
    if (chosenWord.indexOf(keyword) > -1){
        rightWord.push(keyword);
        underScore[chosenWord.indexOf(keyword)] = keyword;
    } if (underScore.join("") == chosenWord){
        alert("You Win!");
//If users guess is wrong,
    } else {
        wrongWord.push(keyword);
        console.log(wrongWord);
    }
});


document.getElementById("underscores").innerHTML = generateUnderscore().join(" ");;

console.log(generateUnderscore());



//Check if the guess is right
//If right, push to right array
//If wrong, push to wrong array





/*

//I am trying to get the "New Word" button spawn a new word from the array "possibleWord"
function random(){
    numGen
}

button.addEventListener("click", random);

// I am trying to get a random number to generate one of the words in "possibleWord".
if (numGen<.20){
    word.innerHTML = possibleWord[0];
} else if(numGen<.40){
    word.innerHTML = possibleWord[1];
} else if(numGen<.60){
    word.innerHTML = possibleWord[2];
} else if(numGen<.80){
    word.innerHTML = possibleWord[3];
} else {
    word.innerHTML = possibleWord[4];
}

//I am trying to get the generated word to show up as dashes per the demo
if (word = possibleWord[0]){
    word.innterHTML = ["_", "_", "_", "_", "_", "_",]
} else if (word = possibleWord[1]){
    word.innerHTML = ["_", "_", "_", "_", "_", "_", "_",]
} else if (word = possibleWord[2]){
    word.innerHTML = ["_", "_", "_", "_", "_"]
} else if (word = possibleWord[3]){
    word.innerHTML = ["_", "_", "_", "_"]
} else if (word = possibleWord[4]){
    word.innerHTML = ["_", "_", "_", "_", "_", "_", "_",]
}

//I am trying to get the number of guesses left section reduce by 1 every time a key is pressed on the keyboard
//I will add a conditional later, I figured that the first step would be reduce it every time a key was pressed
document.addEventListener("keyup", gLeft)

function gLeft(){
    numGuessesLeft - 1;
}

//if possibleWord[0], correct keys are "T", "U", "R", "K", "E", "Y".
//if a correct key is pushed, check that it has not been pushed yet
//if it has not been pushed yet, do not remove one from numGuessesLeft and reveal the letter in it's correct position
//if it has been pushed, alert("you already guessed that!") do not remove one from numGuessesLeft
//if the key has not been pushed but is not correct, then reduce one from guessesLeft and enter the incorrect letter into the lettersGuessed Section
        //I imagine I could use some .innerHTML function to recognize the key pushed and push it into that section.


//if possibleWord[1], correct keys are "C", "H", "I", "K", "E", "N". (C appears twice)
//if a correct key is pushed, check that it has not been pushed yet
//if it has not been pushed yet, do not remove one from numGuessesLeft and reveal the letter in it's correct position
//if it has been pushed, alert("you already guessed that!") do not remove one from numGuessesLeft
//if the key has not been pushed but is not correct, then reduce one from guessesLeft and enter the incorrect letter into the lettersGuessed Section
        //I imagine I could use some .innerHTML function to recognize the key pushed and push it into that section.

//if possibleWord[2], correct keys are "E", "A", "G", "L". (E appears twice)
//if a correct key is pushed, check that it has not been pushed yet
//if it has not been pushed yet, do not remove one from numGuessesLeft and reveal the letter in it's correct position
//if it has been pushed, alert("you already guessed that!") do not remove one from numGuessesLeft
//if the key has not been pushed but is not correct, then reduce one from guessesLeft and enter the incorrect letter into the lettersGuessed Section
        //I imagine I could use some .innerHTML function to recognize the key pushed and push it into that section.

//if possibleWord[3], correct keys are "H", "A", "W", "K".
//if a correct key is pushed, check that it has not been pushed yet
//if it has not been pushed yet, do not remove one from numGuessesLeft and reveal the letter in it's correct position
//if it has been pushed, alert("you already guessed that!") do not remove one from numGuessesLeft
//if the key has not been pushed but is not correct, then reduce one from guessesLeft and enter the incorrect letter into the lettersGuessed Section
        //I imagine I could use some .innerHTML function to recognize the key pushed and push it into that section.

//if possibleWord[4], correct keys are "O", "S", "T", "R", "I", "C", "H".
//if a correct key is pushed, check that it has not been pushed yet
//if it has not been pushed yet, do not remove one from numGuessesLeft and reveal the letter in it's correct position
//if it has been pushed, alert("you already guessed that!") do not remove one from numGuessesLeft
//if the key has not been pushed but is not correct, then reduce one from guessesLeft and enter the incorrect letter into the lettersGuessed Section
        //I imagine I could use some .innerHTML function to recognize the key pushed and push it into that section.
*/
