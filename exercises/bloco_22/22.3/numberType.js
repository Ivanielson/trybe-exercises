const numberType = (number) => {
  //Implementação da função
  if (typeof(number) === 'number') {
    if (number > 0) {
      return 'POSITIVO';
    } if (number < 0) {
      return 'NEGATIVO';
    } if (number === 0) {
      return 'NEUTRO';
    }
  } else if (typeof(number) === 'string') {
    return 'o valor deve ser um número';
  }
}



module.exports = numberType;