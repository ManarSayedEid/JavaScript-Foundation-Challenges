console.log('FizzBuzz challenge again!')

// Write a program that prints numbers from 1 to 100.
// For multiples of 5 print Fizz instead of the number.
// For multiples of 7 print Buzz instead of the number.
// For multiples of both 5 and 7 print FizzBuzz.

function FizzBuzz() {
    
    for (let num = 1; num <= 100; num++){
    
 
      if (num % 5 === 0 && num % 7 === 0) {
            console.log('FizzBuzz')
        }
        else if (num % 5 === 0) {
            console.log('Fizz')
        }
        else if (num % 7 === 0) {
            console.log('Buzz');
        }
      else{
        console.log(num)
      }
    }

}

FizzBuzz();



