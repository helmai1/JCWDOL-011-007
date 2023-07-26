const word = 'Hello World';
const searchString = 'ell';
let index = word.indexOf(searchString);
let sliceWord = word.slice(0, index) + word.slice(index + searchString.length);
console.log(`Before : ${word} | After : ${sliceWord}`);
