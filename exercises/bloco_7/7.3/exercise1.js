const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(sum(4, 5), 9, "A soma de 4 + 9 deve ser igual a 9");
assert.strictEqual(sum(0, 0), 0, "A soma de 0 + 0 deve ser igual a 0");
sum(4, "5");
