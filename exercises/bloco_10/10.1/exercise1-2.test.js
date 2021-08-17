const myRemove = require('./exercise1-2');

describe('Teste da função myRemove - Exercício 2', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

});