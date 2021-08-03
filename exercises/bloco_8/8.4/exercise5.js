const assert = require('assert');
const { count } = require('console');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((result, name) => {
    for (let index = 0; index < name.length; index += 1) {
      if (name[index].toUpperCase() === 'A') {
        result += 1;
      }
    }
    return result;
  }, 0);

}

assert.deepStrictEqual(containsA(), 20);
