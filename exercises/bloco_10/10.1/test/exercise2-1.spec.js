const { encode, decode } = require('../src/exercise2-1');

describe('Play grounds Functions - encode e decode', () => {
  it('Verifica se as funções existem', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it('Teste se as demais letras/números não são convertidos para cada caso;', () => {
    expect(encode('Ivanielson')).toBe('Iv1n32ls4n');
  });

  it('Teste se as demais letras/números não são convertidos para cada caso;', () => {
    expect(decode('Iv1n32ls4n')).toBe('Ivanielson');
  });

  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('Ivanielson')).toHaveLength(10);
  });
});