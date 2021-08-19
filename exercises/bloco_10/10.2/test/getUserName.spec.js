const getUserName = require('../src/getUserName');

describe('Função getUserName', () => {
  const expectError = new Error('User with 5 not found.');
  it('Testa quanto a Promise é resolvida', () => {
    return expect(getUserName(1)).resolves.toBe('Mark');
  });

  it('Testa quando a Promise é rejeitada', () => {
    return expect(getUserName(5)).rejects.toEqual(expectError);
  });
});