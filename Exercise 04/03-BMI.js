const bodyMassIndex = (weight, height) => {
  let bmi = weight / height ** 2;
  if (bmi < 18.5) {
    return 'less weight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'ideal';
  } else if (bmi >= 25 && bmi <= 29.9) {
    return 'overweight';
  } else if (bmi >= 30 && bmi <= 39.0) {
    return 'very overweight';
  } else if (bmi > 39.9) {
    return 'obesity';
  }
};
const bodyMass = bodyMassIndex(175, 60);
console.log(bodyMass);
