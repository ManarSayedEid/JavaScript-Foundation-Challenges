// The program will generate a random number between 1 and 100 at the beginning
// and will ask the user to guess the number.
// If the value entered by the user is equal with the generated number the game
// stops and and the user is won the game.
// The user will have 8 tries to guess the number. The user will lose the game.
// The user will have the option to stop the game at each step.
// When the game is finished the user will be informed with a status message.
// For messages can be used alert(), propmt() and input()



const randomNumber = Math.ceil(Math.random() * 100); 
const countDown = 8;
let win = false;
let lose = true;
let exit = false;


while (countDown) {

    let guessedNumber = prompt('Guess a number from 1 to 100. Press cancel to exit');
    
    //check first if user want to exit
    if (guessedNumber === null) {
        exit = true;
        lose = false;
        break;
    }

    if (guessedNumber == randomNumber) {
        win = true;
        lose = false;
        alert('Right guess!');
        break;
    }

    countDown--;

}

if (lose) {
    alert('Sorry! you lose!')
}

if (exit) {
    alert('Bye!')
}


