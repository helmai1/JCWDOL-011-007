const arr = ['Hello', 'Helmi', 'Friends'];

const concateArray = (n) => {
  if (n.length == 1) {
    return n[0];
  } else if (n.length == 2) {
    return n.join(' and ');
  } else {
    const lastWord = n.pop();
    return n.join(', ') + ', and ' + lastWord;
  }
};
const concateArrays = concateArray(arr);
console.log(concateArrays);
