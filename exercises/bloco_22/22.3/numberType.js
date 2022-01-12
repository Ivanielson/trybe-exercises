const numberType = (number) => {
  //Implementação da função
  if (number > 0) {
    return 'POSITIVO';
  } if (number < 0) {
    return 'NEGATIVO';
  } if (number === 0) {
    return 'NEUTRO';
  }
}

module.exports = numberType;