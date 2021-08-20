const uppercase = require('../src/uppercase');

describe('Função uppercase', () => {
  it('Verifica se a função retorna a string passada em maiúscula', (done) => {
    const expectString = 'IVANIELSON';
    const callback = (str) => {
      expect(str).toBe(expectString);
      done();
    }
    uppercase('ivanielson', callback);
  });
});