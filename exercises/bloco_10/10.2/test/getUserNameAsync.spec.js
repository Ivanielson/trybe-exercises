const getUserName = require('../src/getUserNameAsync');

describe('Função getUserName', () => {
  const expectError = new Error('User with 5 not found.');
  it('Testa quando a Promise é resolvida', async () => {
    await expect(getUserName(1)).resolves.toBe('Mark');
  });

  it('Testa quando a Promise é rejeitada', async () => {
    try {
      await getUserName(5);
    } catch (error) {
      expect(error).toEqual(expectError);
    }
  });
});