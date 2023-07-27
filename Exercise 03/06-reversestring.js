const word = 'kukus'; // input word here!
let reverseWord = '';

for (let index = word.length - 1; index >= 0; index--) {
  reverseWord = reverseWord + word.charAt(index);
}
console.log(reverseWord);
