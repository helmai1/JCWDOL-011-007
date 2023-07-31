const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const calculateArr = (n, n1) => {
  const sumArr = (num, index) => {
    return num + n1[index];
  };
  let sum = n.map(sumArr);
  return sum;
};
const calculateArrs = calculateArr(arr1, arr2);
console.log(calculateArrs);
