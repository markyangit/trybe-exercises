const promise = new Promise((resolve, reject) => {
  const arrayWithRandomNumbers = [];
  for (let index = 1; index <= 10; index += 1) {
    arrayWithRandomNumbers.push(parseInt(Math.random() * 50 + 1));
  }
  const sum = arrayWithRandomNumbers.reduce((accumulator, currentValue) => accumulator + currentValue);
  if (sum < 8000) resolve(sum);
  reject(sum);
})
.then(sum => [2, 3, 5, 10].map((divisor) => sum / divisor))
.then(result => console.log(result))
.catch(sum => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));