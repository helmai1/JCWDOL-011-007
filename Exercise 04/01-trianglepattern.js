const triangleHeight = (rows, value) => {
  let num = 1;
  for (let i = 1; i <= rows; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      if (num < value) {
        row += '0' + num + ' ';
      } else {
        row += num + ' ';
      }
      num++;
    }
    console.log(row);
  }
};

triangleHeight(4, 10);
