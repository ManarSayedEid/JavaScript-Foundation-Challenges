// Write a simple encryption function that takes a sentence and prints out zeros
// and ones as follows: for each word if the length of the word is divisible by 3
// print 0 otherwise print 1.
// For example the output for "How are you?" should be 001.



function simpleEncryption(sentence) {
    let len = sentence.length;
    let lastIndex = 0;
    let zeroOne = '';

    for (let i = 0; i < len; i++){
      // if there is a space OR it is the last word
        if (sentence[i] === ' ' || i === ( len - 1 )) {
            if ((i - lastIndex) % 3 === 0) {
                zeroOne += '0';
            } else {
                zeroOne += '1';
            }
          
            lastIndex = (sentence.lastIndexOf(' ') === i) ? i : i + 1;
        }
    }
    return zeroOne;
}

console.log(simpleEncryption("How are you؟"));