const generationNumber = require('../src/generationNumber');

jest.mock('../src/generationNumber');

describe('Quando a função generationNumber é chamada', () => {
  it('Recebe dois parametros e retorna a divisão do primeiro parametro pelo segundo ', () => {

    generationNumber.generationNumber.mockImplementation((a , b) => a / b);

    generationNumber.generationNumber(10, 2);
    expect(generationNumber.generationNumber).toHaveBeenCalled();
    expect(generationNumber.generationNumber).toHaveBeenCalledTimes(1);
    expect(generationNumber.generationNumber(20, 4)).toBe(5);
  });
});