


//Create an array of words
var word = ["turkey", "falcon", "grouse", "hawk", "ostrich"];
//Choose Randomly
var numGen = Math.floor(Math.random() *word.length);
var chosenWord = word[numGen];
var underScore = [];
var rightWord = [];
var wrongWord = [];
var currentGuesses = 8;


//DOM Manipulation 
var docUnderScore = document.getElementsByClassName("underscores");
var docWrongGuess  = document.getElementsByClassName("lettersGuessed");
var docGuessesLeft = document.getElementsByClassName("guesses");
var restartButton = document.getElementById("restartButton");


//Testing
console.log(chosenWord);
    

//Create underscores based on length of the word
function generateUnderscore(){
    underScore = [];
    for (var i = 0; i<chosenWord.length; i++){
        underScore.push("_");
    }
    return underScore;
}

function restartGame() {
    chosenWord = word[numGen];
    underScore = [];
    rightWord = [];
    wrongWord = [];
    currentGuesses = 8;
}

//Get users guess
document.addEventListener("keypress", (event) => {
    var keyword = String.fromCharCode(event.keyCode);

//If users guess is right, (add a for loop)
    if (chosenWord.indexOf(keyword) > -1){
        rightWord.push(keyword);
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(" ");

    } else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord.join("  ");
        currentGuesses--;
        docGuessesLeft[0].innerHTML = currentGuesses
        
        
        console.log(currentGuesses);
    }  
    
    //If the key pressed matches a letter in the array, replace the underscore with the correct letter in the correct position
        if (underScore.join("") == chosenWord){
            alert("You Win!");
            restartGame();
        } else if (currentGuesses == 0){
            alert("You lose!");
            restartGame();
        }


});



docUnderScore[0].innerHTML = generateUnderscore().join(" ");




