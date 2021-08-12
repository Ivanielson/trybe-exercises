const sum = (numbers) => {
  return numbers.reduce((acc, acurr) => acc + acurr, 0);
}

const generationNumbers = (quant) => {
  const numbers = [];
  for (let index = 0; index < quant; index += 1) {
    const num = Math.floor((Math.random() * 51) ** 2);
    numbers.push(num);
  }
  return numbers;
}

const divNumber = (number) => {
  const result = [];
  const divisores = [2, 3, 5, 10];
  divisores.forEach((value) => result.push(number / value));
  return result;
}

const promise = new Promise((resolve , reject) => {
  const result = sum(generationNumbers(10));
  if (result < 8000) reject(result);
  resolve(result);
})
  .then((num) => divNumber(num))
  .then((value) => console.log(Math.floor(sum(value))))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
