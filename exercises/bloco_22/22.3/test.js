const { expect } = require('chai');

const numberType = require('./numberType');

describe('Função que verifica o tipo de um Número', () => {
  describe('Quando recebe um valor', () => {
    it('É um número Positivo', () => {
      const resposta = numberType(5);
      expect(resposta).to.be.equal('POSITIVO');
    });

    it('É um número Negativo', () => {
      const resposta = numberType(-6);
      expect(resposta).to.be.equal('NEGATIVO');
    });

    it('É Neutro', () => {
      const resposta = numberType(0);
      expect(resposta).to.be.equal('NEUTRO');
    });

    it('É uma string, não um número', () => {
      const resposta = numberType('5');
      expect(resposta).to.be.equals('o valor deve ser um número');
    });
  });

  describe('Quando não recebe um valor', () => {
    it('É undefined', () => {
      const resposta = numberType();
      expect(resposta).to.be.equals(undefined);
    });
  });
});