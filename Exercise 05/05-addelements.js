const arr = [1, 2, 3];

const addElement = (n, newItem) => {
  for (let index = 0; index < n.length; index++) {
    if (newItem === n[index]) {
      return `${newItem} is already in the array`;
    }
  }
  n.push(newItem);
  return n;
};
const addElements = addElement(arr, 1);
const addElements2 = addElement(arr, 4);

console.log(addElements);
console.log(addElements2);
