const inputString = 'Hello,World!';
const splits = ',';
// Cara 1
const splitString = (str, split) => {
  const arr = [];
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === split) {
      arr.push(str.slice(index, i));
      index = i + 1;
    }
  }
  if (index < str.length) {
    arr.push(str.slice(index));
  }
  return arr;
};
// Cara 2
const splitString2 = (str) => {
  const words = str.split(',');
  return words;
};

const result = splitString(inputString, splits);
const result2 = splitString2(inputString);
console.log(result);
console.log(result2);
