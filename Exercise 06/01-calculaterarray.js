function calculateArray(arr) {
  const score = {
    highest: arr[0].score,
    lowest: arr[0].score,
    average: 0,
  };
  const age = {
    highest: arr[0].age,
    lowest: arr[0].age,
    average: 0,
  };

  let sumScore = 0;
  let sumAge = 0;
  for (let students of arr) {
    if (students.score > score.highest || students.age > age.highest) {
      score.highest = students.score;
      age.highest = students.age;
    } else if (students.score < score.lowest || students.age < age.lowest) {
      score.lowest = students.score;
      age.lowest = students.age;
    }
    sumScore += students.score;
    sumAge += students.age;
  }

  score.average = sumScore / arr.length;
  age.average = sumAge / arr.length;

  return { score, age };
}

const arrayOfStudents = [
  {
    name: 'Helmi Effendi',
    email: 'helmiefendi@gmail.com',
    age: 24,
    score: 90,
  },
  {
    name: 'Megumin',
    email: 'megumin@gmail.com',
    age: 20,
    score: 85,
  },
  {
    name: 'Aqua',
    email: 'aqua@gmail.com',
    age: 20,
    score: 75,
  },
  {
    name: 'YunYun',
    email: 'yunyun@gmail.com',
    age: 21,
    score: 100,
  },
  {
    name: 'Kazuma',
    email: 'kazuma@gmail.com',
    age: 23,
    score: 80,
  },
];

console.log(calculateArray(arrayOfStudents));
