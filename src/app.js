// The program will generate a random number between 1 and 100 at the beginning
// and will ask the user to guess the number.
// If the value entered by the user is equal with the generated number the game
// stops and and the user is won the game.
// The user will have 8 tries to guess the number. The user will lose the game.
// The user will have the option to stop the game at each step.
// When the game is finished the user will be informed with a status message.
// For messages can be used alert(), propmt() and input()




// get random floot number from 0 to 99 and ceil it up
let randomNumber = Math.ceil(Math.random() * 3);

let countDown = 8;

// flag to enter diffrent message if the user lose/exit the game
let flag = 'lose';

while (countDown) {
    let guessedNumber = prompt('Guess a number from 1 to 100. Press cancel to exit');
    
    //check first if user want to exit
    if (guessedNumber === null) {
        flag = 'exit';
        break;
    }

    // change type of guessedNumber from string to number
    guessedNumber = Number(guessedNumber);
    if (guessedNumber === randomNumber) {
        flag = 'win';
        alert('Right guess!');
        break;
    }

    countDown--;
}

if (flag === 'lose') {
    alert('Sorry! you lose!')
} else if (flag === 'exit') {
    alert('Bye!')
}


