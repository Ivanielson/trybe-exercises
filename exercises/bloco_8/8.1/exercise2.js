const checkNumber = (num1, num2) => num1 === num2 ? "Parabéns você ganhou" : "Tente novamente";

const drawNumber = (number, func) => func(number, Math.floor(Math.random() * 6));

console.log(drawNumber(2, checkNumber));