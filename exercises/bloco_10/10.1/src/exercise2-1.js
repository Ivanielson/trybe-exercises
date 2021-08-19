function encode(string) {
  // seu código aqui
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    let valorAtual = string[index];
    switch (valorAtual) {
      case 'a':
        newString += '1';
        break;
      case 'e':
        newString += '2';
        break;
      case 'i':
        newString += '3';
        break;
      case 'o':
        newString += '4';
        break;
      case 'u':
        newString += '5';
        break;
      default:
        newString += valorAtual;
        break;
    }
  }
  return newString;
}

function decode(string) {
  // seu código aqui
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    let valorAtual = string[index];
    switch (valorAtual) {
      case '1':
        newString += 'a';
        break;
      case '2':
        newString += 'e';
        break;
      case '3':
        newString += 'i';
        break;
      case '4':
        newString += 'o';
        break;
      case '5':
        newString += 'u';
        break;
      default:
        newString += valorAtual;
        break;
    }
  }
  return newString;
}

module.exports = {
  encode,
  decode,
}