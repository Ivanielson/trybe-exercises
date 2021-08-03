const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  // Referência função concat() -> Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#example_concatenating_two_arrays
  return arrays.reduce((result, value) => result.concat(value));
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);