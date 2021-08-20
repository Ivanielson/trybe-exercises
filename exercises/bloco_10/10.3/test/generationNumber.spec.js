const generationNumber = require('../src/generationNumber');

describe('Quando a função generationNumber é chamada', () => {
  it('Retorna um número aleatório entre 0 e 100', () => {
    generationNumber.generationNumber = jest.fn().mockReturnValue(10);

    generationNumber.generationNumber();
    expect(generationNumber.generationNumber).toHaveBeenCalled();
    expect(generationNumber.generationNumber).toHaveBeenCalledTimes(1);
    expect(generationNumber.generationNumber()).toBe(10);
  });
});