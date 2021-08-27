const generationNumber = require('../src/generationNumber');

jest.mock('../src/generationNumber');

describe('Quando a função generationNumber for envocada', () => {
  it('Receba três parâmetros e retorne sua multiplicação', () => {

    generationNumber.generationNumber.mockImplementation((a, b, c) => a * b * c);

    generationNumber.generationNumber();
    expect(generationNumber.generationNumber).toHaveBeenCalled();
    expect(generationNumber.generationNumber).toHaveBeenCalledTimes(1);
    expect(generationNumber.generationNumber(5, 5, 5)).toBe(125);

    generationNumber.generationNumber.mockReset();
    generationNumber.generationNumber.mockImplementation((a) => a * 2);

    generationNumber.generationNumber();
    expect(generationNumber.generationNumber).toHaveBeenCalled();
    expect(generationNumber.generationNumber).toHaveBeenCalledTimes(1);
    expect(generationNumber.generationNumber(5)).toBe(10);
  });
});