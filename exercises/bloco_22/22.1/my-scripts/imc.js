const readline = require('readline-sync');

const weight = readline.questionFloat('Qual seu peso? ');
const height = readline.questionFloat('Qual sua altura? ');

const imc = (weight, height) => Math.fround(weight / Math.pow(height, 2)).toFixed(1);

const resultIMC = imc(weight, height);

console.log(`Resultado do IMC: ${resultIMC}`);

if (resultIMC < 18.5) {
  console.log('Abaixo do peso (magreza)');
} else if (resultIMC <= 18.5 && resultIMC <= 24.9) {
  console.log('Peso normal');
} else if (resultIMC <= 25.0 && resultIMC <= 29.9) {
  console.log('Acima do peso (sobrepeso)');
} else if (resultIMC <= 30.0 && resultIMC <= 34.9) {
  console.log('Obesidade grau I ');
} else if (resultIMC <= 35.0 && resultIMC <= 39.9) {
  console.log('Obesidade grau II ');
} else if (resultIMC >= 40.0) {
  console.log('Obesidade graus III e IV ');
}