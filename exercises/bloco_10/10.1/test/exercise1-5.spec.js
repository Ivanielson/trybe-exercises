const { obj1, obj2, obj3} = require('../src/exercise1-5');

describe('Compara Objetos', () => {
  it('Compare dois objetos para verificar se são idênticos ou não', () => {
    expect(obj1).toEqual(obj2);
  });

  it('Compare dois objetos para verificar se são idênticos ou não', () => {
    expect(obj1).not.toEqual(obj3);
  });
});