const inputString = 'Hello,World!';
const splits = ',';

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
const result = splitString(inputString, splits);
console.log(result);
