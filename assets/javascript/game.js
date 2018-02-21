
wins = 0;
losses = 0;
guessesL = 9;
guessesSF = [];
userG= null;

//Computer's list of alphabet letters
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
 //Computer guesses alphabet letter and stores that letter
var letterTBG = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
console.log(letterTBG);

//Computer listens for key event from user
document.onkeypress = function(event){
    var userG= String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userG);
    

//If user guesses the same alphabet letter as computer "wins" counter goes up by one 
//new game round begins.
if(userG === letterTBG){
    wins++;
    console.log(wins);
    var w = document.getElementById("wins");
    w.innerHTML = wins;
    guessesL = 10;
    var o = document.getElementById("guessesSF");
    o.innerHTML = " ";
    userG = [];
    guessesSF = []; 
      
    
}

// If user guesses the different alphabet letter as computer "guesses left" goes down by one
if (guessesSF.indexOf(userG) < 0 && alphabetLetters.indexOf(userG) >= 0){
    guessesSF[guessesSF.length]=userG;
    // if it is a new letter then decrease remaining guesses by 1
    guessesL--; 
    var r = document.getElementById("guessesL");
    r.innerHTML = guessesL;
    //adding already guessed letters to Guesses So Far
    var g = document.getElementById("guessesSF");
    g.innerHTML += userG;
    

//If user runs out of guesses, losses count goes up by one
//new game round begins
if (guessesL===0) {
    losses++ 
    console.log(losses);
    var l = document.getElementById("losses");
    l.innerHTML = losses;
    guessesL = 10;
    var o = document.getElementById("guessesSF");
    o.innerHTML = " ";
    userG = [];
    guessesSF = [];
      
}
}

};