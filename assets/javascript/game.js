


//Create an array of words
var word = ["lions", "bears", "packers", "falcons", "giants", "panthers", "rams", "chiefs", "ravens", "browns", "colts", "dolphins","bengals", "jets", "texans"];
//Choose Randomly

var chosenWord = "";
var underScore = [];
var rightWord = [];
var wrongWord = [];
var currentGuesses = 8;
var currentWins = 0;


//DOM Manipulation 
var docUnderScore = document.getElementsByClassName("underscores");
var docWrongGuess  = document.getElementsByClassName("lettersGuessed");
var docGuessesLeft = document.getElementsByClassName("guesses");
var docNumWins = document.getElementsByClassName("numWins");


//Testing

function wordChooser(){
    var numGen = Math.floor(Math.random() *word.length);
    chosenWord = word[numGen];
}
    


//Create underscores based on length of the word
function generateUnderscore(){
    underScore = [];
    for (var i = 0; i<chosenWord.length; i++){
        underScore.push("_");
    }
    return underScore;
}


function restartGame() {
    underScore = [];
    rightWord = [];
    wrongWord = [];
    currentGuesses = 8;
    wordChooser();
    generateUnderscore();
    docUnderScore[0].innerHTML = underScore.join(" ");
    docWrongGuess[0].innerHTML = wrongWord.join("  ");
    docGuessesLeft[0].innerHTML = currentGuesses;
}

function winLose(){

    if (underScore.join("") == chosenWord){
        alert("You Win!");
        restartGame();
        currentWins++
        docNumWins[0].innerHTML = currentWins;
    } else if (currentGuesses == 0){
        alert("You lose!");
        restartGame();
    }
}

function runScript(){
    document.addEventListener("keypress", (event) => {
        var keyword = String.fromCharCode(event.keyCode);

    //If users guess is right
        if (chosenWord.indexOf(keyword) > -1){
            rightWord.push(keyword);
            underScore[chosenWord.indexOf(keyword)] = keyword;
            docUnderScore[0].innerHTML = underScore.join(" ");
            winLose();
            
        } else {
            wrongWord.push(keyword);
            docWrongGuess[0].innerHTML = wrongWord.join("  ");
            currentGuesses--;
            docGuessesLeft[0].innerHTML = currentGuesses;
            winLose();
            
            console.log(currentGuesses);
        }   
        
       
    });
}

runScript();
wordChooser();
docUnderScore[0].innerHTML = generateUnderscore().join(" ");

//I could not figure out how to get a restart function restart the program. I need help to figure that out.
//I also could not figure out the win counter. I would have needed to figure out how to restart the game first otherwise the page would have just kept resetting the score.
