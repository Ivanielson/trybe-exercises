const readline = require('readline-sync');

const weight = readline.questionFloat('Qual seu peso? ');
const height = readline.questionFloat('Qual sua altura? ');

const imc = (weight, height) => Math.fround(weight / Math.pow(height, 2)).toFixed(2);

console.log(imc(weight, height));