/* 2. check whether a string is a palindrome or not. */
const word = 'madam'; // input word here!
let wordLength = word.length;
let flag = false;
for (let i = 0; i < wordLength / 2; i++) {
  if (word[i] !== word[wordLength - 1 - i]) {
    flag = true;
  } else {
    flag = false;
  }
}
if (flag) {
  console.log(`'${word}' is not palindrome`);
} else {
  console.log(`'${word}' is palindrome`);
}
