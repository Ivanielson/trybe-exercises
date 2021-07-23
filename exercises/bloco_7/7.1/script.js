const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
// Source: https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Array/sort
const order = (a, b) => a - b;

console.log(`Os números ${oddsAndEvens.sort(order)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉