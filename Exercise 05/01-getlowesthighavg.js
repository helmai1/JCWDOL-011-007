const arr = [10, 5, 20, 11, 12, 6];

const getLowest = (n) => {
  let tempArr = n[0];
  for (let index = 0; index < n.length; index++) {
    if (n[index] < tempArr) {
      tempArr = n[index];
    }
  }
  return tempArr;
};
const getHighest = (n) => {
  let tempArr = n[0];
  for (let index = 0; index < n.length; index++) {
    if (n[index] > tempArr) {
      tempArr = n[index];
    }
  }
  return tempArr;
};
const getAverage = (n) => {
  let sumArr = 0;
  let avg = 0;
  for (let index = 0; index < n.length; index++) {
    sumArr += n[index];
  }
  avg = sumArr / n.length;
  return avg;
};
const getLowests = getLowest(arr);
const getHighests = getHighest(arr);
const getAverages = getAverage(arr);
console.log(getLowests);
console.log(getHighests);
console.log(getAverages);
