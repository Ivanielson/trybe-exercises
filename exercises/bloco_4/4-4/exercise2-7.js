function verificaFimPalavra(palavra1, palavra2) {
  let initValue = palavra1.length - palavra2.length;
  let newPalavra = '';

  for (let index = initValue; index < palavra1.length; index += 1) {
    newPalavra += palavra1[index];
  }
  if (newPalavra === palavra2) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaFimPalavra('joaofernando', 'fernan'));
