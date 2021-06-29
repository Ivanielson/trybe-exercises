// Resolução exercício bloco 4.4 Exercício 2.5

function intMaxReption(lista) {
  let value;
  let maxOcorences = 0;
  for (let index = 0; index < lista.length; index += 1) {
    let contOcorrence = 0;
    let item = lista[index];
    for (let cont = 1; cont <= lista.length; cont += 1) {
      if(item === lista[cont-1]){
        contOcorrence += 1;
      }
    }
    if(maxOcorences < contOcorrence){
      maxOcorences = contOcorrence;
      value = item;
    }
  }
  return value;
}


let teste = [2, 3, 2, 5, 8, 2, 3];
console.log(intMaxReption(teste));