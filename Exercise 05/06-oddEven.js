const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const removeOdd = (n) => {
  n.forEach((element, index) => {
    if (element % 2 !== 0) {
      n.splice(index, 1);
    }
  });
  return n;
};

const removedOdd = removeOdd(arr);
console.log(removedOdd);
