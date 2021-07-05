// Resolução exercício bloco 4.4 Exercício 2.3
function keyMinSize(lista) {
  let result;
  let key;
  for (let index = 0; index < lista.length; index += 1) {
    if(result === undefined){
      result = lista[index];
    }else if(result > numbers[index]){
      result = lista[index];
      key = index;
    }
  }
  return key;
}

let numbers = [2, 4, 6, 7, 10, 0, -3];

console.log(keyMinSize(numbers));