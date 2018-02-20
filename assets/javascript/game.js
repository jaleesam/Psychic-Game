
//Computer's list of alphabet letters
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
 //Computer guesses alphabet letter and stores that letter
var letterTBG = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
console.log(letterTBG);

//Computer listens for key event