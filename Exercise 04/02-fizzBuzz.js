const fizzBuzz = (n) => {
  let arr = [];
  for (let index = 1; index <= n; index++) {
    arr.push(index);
  }
  arr.forEach((element) => {
    if (element % 3 == 0 && element % 5 == 0) {
      console.log('FizzBuzz');
    } else if (element % 3 == 0) {
      console.log('Fizz');
    } else if (element % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(element);
    }
  });
};

fizzBuzz(50);
